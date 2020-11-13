<template>
  <div class="me-top">
    <router-link tag="div" class="user" to="/detail">
      <img src="./images/me_icon.png" alt="" />
      <p>{{ userInfo.user_name }}</p>
      <i class="itlike-3"></i>
    </router-link>
    <div class="my-older">
      <div class="older-top">
        <h3>我的订单</h3>
        <span>查看全部 > </span>
      </div>
      <div class="older-bottom">
        <div class="bottom-item">
          <i class="itlike-1"></i>
          <span>待付款</span>
        </div>

        <div class="bottom-item">
          <i class="itlike-3"></i>
          <span>待发货</span>
        </div>
        <div class="bottom-item">
          <i class="itlike-4"></i>
          <span>待收货</span>
        </div>
        <div class="bottom-item">
          <i class="itlike-5"></i>
          <span>待评价</span>
        </div>
      </div>
    </div>
    <div class="setting">
      <router-link tag="div" class="setting-item" to="/address"
        ><i class="itlike-uniE902"></i> <span>收货地址</span></router-link
      >

      <div class="setting-item">
        <i class="itlike-1"></i>
        <span>我的评价</span>
      </div>
      <div class="setting-item" @click="talling">
        <i class="itlike-3"></i>
        <span>官方客服</span>
      </div>
      <router-link tag="div" class="setting-item" to="/setting">
        <i class="itlike-4"></i>
        <span>设置</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { MessageBox } from "mint-ui";

export default {
  name: "MeTop",
  computed: {
    ...mapState(["userInfo"]),
  },
  methods: {
    talling() {
      const html = `<div style="text-align:left;font-size:20px">
          <h2>QQ:</h2><span style="color:blue">2233879049</span>
          
          <h2>微信：</h2><span style="color:blue">1777889832</span>
        </div>`;
      MessageBox.confirm("", {
        title: "请添加客服联系方式",
        message: html,
        confirmButtonText: "已联系",
        cancelButtonText: false,
        showCancelButton: false,
      });
    },
  },
};
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.me-top {
  font-size: 14px;

  .user {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    background-color: #fff;
    margin-bottom: 10px;

    p {
      margin: 0 10px;
    }

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }

    i {
      font-size: 25px;
    }
  }

  .my-older {
    background-color: #fff;

    .older-top {
      display: flex;
      flex-direction: row;
      padding: 0 10px;
      justify-content: space-between;
      height: 44px;
      line-height: 44px;
    }

    .older-bottom {
      display: flex;

      .bottom-item {
        flex: 1;
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        i {
          font-size: 30px;
          color: #E9232C;
          margin-bottom: 5px;
        }
      }
    }
  }

  .setting {
    margin-top: 10px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .setting-item {
      width: 90px;
      height: 70px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      i {
        font-size: 30px;
        color: orange;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
