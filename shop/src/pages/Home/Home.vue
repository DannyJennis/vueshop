<template>
  <div class="home">
    <ly-tab
      :items="items"
      :options="options"
      class="fix"
    />
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data(){
      return {
        items:[
          {label: 'VUE购物商城首页'},
        ],
        options: {
          activeColor: '#e9232c', // 设置选中的颜色
        },
      }
    },
    methods:{

    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .home
    background #f5f5f5
    width 100%
    height 100%
    .fix
      position fixed
      left 0
      top 0
      z-index 998
</style>
