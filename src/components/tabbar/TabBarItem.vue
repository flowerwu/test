<template>
  <div class="tab-bar-item" @click="active">
    <div v-if="!isActive">
      <slot name="item-img"></slot>
    </div>
    <div v-else>
      <slot name="item-img-active"></slot>
    </div>
    <div :style="atColor">
      <!-- <div class="active"> -->
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    // 子组件里接收的类型String 名字必须与父组件传入的名相等
    path: String,
    activeColor: {
      type: String,
      default: "hotpink",
    },
  },
  methods: {
    active() {
      this.$router.push(this.path);
    },
  },
  computed: {
    isActive() {
      console.log(this.activeColor);
      return this.$route.path.indexOf(this.path) !== -1;
    },
    atColor() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
};
</script>

<style lang="" scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img {
  margin-top: 3px;
  margin-bottom: -1px;
  width: 35px;
  height: 25px;
  vertical-align: middle;
}

.active {
  color: hotpink;
}
</style>