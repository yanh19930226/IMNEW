<template>
  <div class="sortshare">
    <div class="sortshareimg">
      <img class="img" src="/static/images/sharebg.png" />
      <p class="lydr">旅游达人排行榜</p>
      <p class="sjnm">世界那么大我想去看看</p>
    </div>
    <div class="sort-info">
      <img src="/static/images/0.jpg" class="avt" />
      <p class="ip">林景行-严辉</p>
      <p class="rp">日榜第一名</p>
      <van-row>
        <van-col span="12">
          <p class="borderrht pdb">打卡次数</p>
          <p class="ptn borderrht">1000</p>
        </van-col>
        <van-col span="12">
          <p class="pdb">活跃值</p>
          <p class="ptn">666</p>
        </van-col>
      </van-row>
      <router-link to="/sortgenerate" tag="div" class="sharebottom">
        <img src="/static/images/sharebtn.png" />
        晒一下
      </router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.sortshare {
}
.sortshare .sortshareimg {
  position: relative;
}
.sortshare .sortshareimg img {
  width: 100%;
}
.sortshare .sortshareimg p {
  position: absolute;
  color: white;
}
.sortshare .sortshareimg .lydr {
  font-weight: bold;
  font-size: 1.4rem;
  top: 2rem;
  left: 1rem;
}
.sortshare .sortshareimg .sjnm {
  top: 4rem;
  left: 3rem;
}
.sortshare .sort-info {
  border-width: 0px;
  width: 90%;
  margin: 0 auto;
  position: relative;
  text-align: center;
  bottom: 2rem;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.298039215686275);
}
.sortshare .sort-info p {
  /* padding-bottom: 1rem; */
  /* padding-top: 1rem; */
}
.sortshare .sort-info .avt {
  border-radius: 5rem;
  position: absolute;
  width: 4rem;
  top: -21px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}
.sortshare .sort-info .ip {
  padding-top: 4rem;
  padding-bottom: 1rem;
}
.sortshare .sort-info .rp {
  font-family: "PingFangSC-Medium", "PingFang SC Medium", "PingFang SC";
  font-weight: 500;
  font-style: normal;
  font-size: 24px;
  padding: 0;
}
.sortshare .sharebottom {
  font-size: 1.4rem;
  padding: 0.5rem 0;
  background: -webkit-linear-gradient(
    270deg,
    rgba(255, 233, 210, 1) 0%,
    rgba(255, 233, 210, 1) 3%,
    rgba(255, 195, 0, 1) 100%,
    rgba(255, 195, 0, 1) 100%
  );
  background: -moz-linear-gradient(
    180deg,
    rgba(255, 233, 210, 1) 0%,
    rgba(255, 233, 210, 1) 3%,
    rgba(255, 195, 0, 1) 100%,
    rgba(255, 195, 0, 1) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(255, 233, 210, 1) 0%,
    rgba(255, 233, 210, 1) 3%,
    rgba(255, 195, 0, 1) 100%,
    rgba(255, 195, 0, 1) 100%
  );
}
.sortshare .sharebottom img {
  width: 1.8rem;
  vertical-align: middle;
}
.sortshare .van-row {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.sortshare .sharetext {
  font-size: 1rem;
}
.sortshare .ptn {
  padding-top: 0;
}
.sortshare .pdb {
  padding-bottom: 1rem;
}
.sortshare .borderrht {
  border-right: 1px solid #ccc;
}
</style>