<template>
  <van-tabbar v-model="active">
    <van-tabbar-item to="/visited" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/friendscircle" icon="fire">动态</van-tabbar-item>
    <van-tabbar-item to="/sort" icon="friends-o">排行榜</van-tabbar-item>
    <van-tabbar-item to="/virtuallist" icon="video">全景</van-tabbar-item>
    <van-tabbar-item to="/personaiInfo" icon="manager">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>
<style scoped>
.van-tabbar{
  border-top: 1px solid rgba(228, 228, 228, 1);
}
.van-tabbar-item{
  color:black;
}
.van-tabbar-item--active{
  color:#1989fa !important;
}
</style>