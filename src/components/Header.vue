<template>
  <van-nav-bar
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      window.history.go(-1);
    }
  }
};
</script>
<style scoped>
.van-nav-bar .van-icon {
    font-size: 1.2rem;
}
</style>