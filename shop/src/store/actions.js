import {
  getHomeCasual,
  getHomeNav,
  getHomeShopList,
  getRecommendShopList,
  getSearchGoods,
  getUserInfo,
  getLogout,
  getCartsGoods,
  addCartGoods,
  delCartGoods
} from '../api'

import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST,
  SEARCH_GOODS,
  USER_INFO,
  RESET_USER_INFO,

  CART_GOODS_LIST,
  ADD_GOODS_COUNT,
  REDUCE_GOODS_COUNT,
  SELECTED_SINGER_GOODS,
  SELECTED_ALL_GOODS,
  DEL_SINGER_GOODS,
  DEL_CART_GOODS
} from './mutation-types'

export default {
  // 1. 获取首页的轮播图
  async reqHomeCasual({commit}) {
    const result = await getHomeCasual();
    commit(HOME_CASUAL, {homecasual: result.message})
  },

  // 2. 获取首页的导航
  async reqHomeNav({commit}) {
    const result = await getHomeNav();
    commit(HOME_NAV, {homenav: result.message.data})
  },

  // 3. 获取首页的商品列表
  async reqHomeShopList({commit}) {
    const result = await getHomeShopList();
    commit(HOME_SHOP_LIST, {homeshoplist: result.message.goods_list})
  },

  // 4. 获取推荐的商品数据
  async reqRecommendShopList({commit}, params) {

    const result = await getRecommendShopList(params);
    commit(RECOMMEND_SHOP_LIST, {recommendshoplist: result.message});
    params.callback && params.callback();
  },

  // 5. 获取推荐的商品数据
  async reqSearchGoods({commit}, callback) {
    const result = await getSearchGoods();
    commit(SEARCH_GOODS, {searchgoods: result.message.data});
    callback && callback();
  },

  // 6. 同步用户的信息
  syncUserInfo({commit}, userInfo){
    commit(USER_INFO, {userInfo});
  },

  // 7. 异步获取用户信息
  async getUserInfo({commit}){
    const result = await getUserInfo();
    console.log(result);
    if(result.success_code === 200){
       commit(USER_INFO, {userInfo: result.message});
    }
  },

  // 8. 退出登录
  async logOut({commit}){
    const result = await getLogout();
    console.log(result);
    if(result.success_code === 200){
      commit(RESET_USER_INFO);
    }
  },

    // 9. 请求购物车数据
    async reqCartsGoods({commit}) {
      const result = await getCartsGoods();
      if(result.success_code === 200){
        commit(CART_GOODS_LIST, {cartgoods: result.message})
      }
    },
    // 9. 删除商品
    async delCartsGoods({commit}) {
      const result = await delCartGoods();
      if(result.success_code === 200){
        commit(DEL_CART_GOODS, {cartgoods: result.message})
      }
    },

  // 9. 购物车单个商品的增加和减少
  //  addCartGoods({commit}, {goods}) {
  //     commit(ADD_GOODS_COUNT , {goods})
  // },
  async addGoodsCount({commit}) {
    const result = await addGoodsCount();
    if(result.success_code === 200){
      commit(ADD_GOODS_COUNT, {cartgoods: result.message})
    }
  },
//   updateGoodsCount({commit}, {goods, isAdd}) {
//     if(isAdd){ // 增加
//         commit(ADD_GOODS_COUNT, {goods});
//     }else { // 减少
//        commit(REDUCE_GOODS_COUNT, {goods});
//     }
// },

// 10. 单个商品的选中和取消
singerGoodsSelected({commit}, {goods}){
  commit(SELECTED_SINGER_GOODS, {goods});
},

// 11. 全选和取消全选
selectedAll({commit}, {isSelected}){
  commit(SELECTED_ALL_GOODS, {isSelected});
},

// 12. 删除单个商品
delGoodsSinger({commit}, {goods}){
   commit(DEL_SINGER_GOODS, {goods});
}
}
