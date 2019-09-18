<template>
  <div>
    <div class="sortgenerate">
      <div class="sortgenerateimg">
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
        <div class="sharebottom">
          <img src="/static/images/qrcode.png" />
          <span class="qrcodedes">长按扫描或查看</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: {},
  watch: {}
};
</script>
<style scoped>
.sortgenerate {
}
.sortgenerate .sortgenerateimg {
  position: relative;
}
.sortgenerate .sortgenerateimg img {
  width: 100%;
}
.sortgenerate .sortgenerateimg p {
  position: absolute;
  color: white;
}
.sortgenerate .sortgenerateimg .lydr {
  font-weight: bold;
  font-size: 1.4rem;
  top: 2rem;
  left: 1rem;
}
.sortgenerate .sortgenerateimg .sjnm {
  top: 4rem;
  left: 3rem;
}

.sortgenerate .sort-info {
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
.sortgenerate .sort-info p {
  /* padding-bottom: 0;
  padding-top: 1rem; */
}
.sortgenerate .sort-info .avt {
  border-radius: 5rem;
  position: absolute;
  width: 4rem;
  top: -21px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}
.sortgenerate .sort-info .ip {
  padding-top: 4rem;
  padding-bottom: 1rem;
}
.sortgenerate .sort-info .rp {
  font-family: "PingFangSC-Medium", "PingFang SC Medium", "PingFang SC";
  font-weight: 500;
  font-style: normal;
  font-size: 24px;
  padding: 0;
}
.sortgenerate .sharebottom {
}
.sortgenerate .sharebottom img {
  width: 3rem;
  vertical-align: middle;
}
.sortgenerate .sharebottom .qrcodedes {
  display: block;
  padding: 1rem;
}

.sortgenerate .van-row {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.sortgenerate .sharetext {
  font-size: 1rem;
}
.sortgenerate .ptn {
  padding-top: 0;
}
.sortgenerate .pdb {
  padding-bottom: 1rem;
}
.sortgenerate .borderrht {
  border-right: 1px solid #ccc;
}
</style>