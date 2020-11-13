<template>
  <div class="me-setting">
    <div>
      <me-common-cell
        left-icon="itlike-2"
        left-title="免密码支付"
        :clickCell="dealCellClick"
        right-title="免密"
        right-title-color="red"
      />
      <me-common-cell
        left-icon="itlike-3"
        left-title="商品降价通知"
        :clickCell="dealCellClick"
        right-title="通知"
        right-title-color="red"
      />
      <me-common-cell
        left-icon="itlike-1"
        left-title="消息接收"
        right-title="接收"
        right-title-color="red"
        :clickCell="dealCellClick"
      />
    </div>

    <div class="logout" @click="dealLogout">退出登录</div>
    <button class="login-back" @click="$router.back()">返回</button>
  </div>
</template>

<script>
import MeCommonCell from "./MeCommonCell";
import { Toast, MessageBox } from "mint-ui";
import { mapActions } from "vuex";

export default {
  name: "MeSetting",
  components: {
    MeCommonCell,
  },
  methods: {
    ...mapActions(["logOut"]),
    dealCellClick(props) {
      Toast({
        message: props,
        duration: 5000,
        showCancelButton: true,
      });
      // MessageBox.confirm("", {
      //   title: "adfaf",
      //   message: "asdfadfaf",
      //   confirmButtonText: "sd",
      //   cancelButtonText: false,
      //   showCancelButton: false,
      // });
    },
    dealLogout() {
      // console.error(11);
      MessageBox.confirm("您确定退出登录吗?").then((action) => {
        // console.log(action);
        if ("confirm" === action) {
          // 退出登录
          let result = this.logOut({});
          // console.log(result);
          // 回到主界面
          this.$router.replace("/home");
        }
      });
    },
  },
};
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.login-back, .logout {
  display: block;
  width: 100%;
  height: 44px;
  margin-top: 10px;
  border-radius: 4px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: transparent;
  border: 1px solid mediumpurple;
  color: mediumpurple;
  text-align: center;
  font-size: 16px;
  line-height: 42px;
}
</style>
