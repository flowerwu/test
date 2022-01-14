<template>
  <div id="app">
    <!-- <router-view /> -->
    <div id="app">
      <router-view></router-view>
      <tab-bar>
        <tab-bar-item path="/home" activeColor="blue">
          <img slot="item-img" src="./assets/img/tabbar/zhu.jpg" alt="" />
          <img
            slot="item-img-active"
            src="./assets/img/tabbar/zhu-active.jpg"
            alt=""
          />
          <div slot="item-text">主页</div>
        </tab-bar-item>
        <tab-bar-item path="/classify">
          <img slot="item-img" src="./assets/img/tabbar/fen.png" alt="" />
          <img
            slot="item-img-active"
            src="./assets/img/tabbar/fen-active.jpg"
            alt=""
          />
          <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart">
          <img slot="item-img" src="./assets/img/tabbar/gou.jpg" alt="" />
          <img
            slot="item-img-active"
            src="./assets/img/tabbar/gou-active.jpg"
            alt=""
          />
          <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile">
          <img slot="item-img" src="./assets/img/tabbar/wo.jpg" alt="" />
          <img
            slot="item-img-active"
            src="./assets/img/tabbar/wo-active.jpg"
            alt=""
          />
          <div slot="item-text">我的</div>
        </tab-bar-item>
      </tab-bar>
    </div>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar.vue";
import TabBarItem from "./components/tabbar/TabBarItem.vue";
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
@import url("./assets/css/base");
</style>
