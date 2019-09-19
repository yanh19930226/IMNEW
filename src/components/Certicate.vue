<template>
  <div class="certicate">
    <van-tabs
      v-model="active"
      :animated="true"
      :swipeable="true"
      :z-index="100"
      :line-width="60"
      :type="'line'"
      :offset-top="0.0000000000000001"
      :sticky="true"
    >
      <van-tab title="景点证书">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-row gutter="20">
            <van-col span="8" v-for="(item,index) in 24" :key="index">
              <img src="/static/images/jdtp.png" preview="0" preview-text="第一名" />
              <p class="time">9月1号</p>
              <p class="rank">第一名</p>
            </van-col>
          </van-row>
        </van-list>
      </van-tab>
      <van-tab title="旅游达人证">
        <van-row gutter="20">
          <van-col span="8" v-for="(item,index) in 24" :key="index">
            <img src="/static/images/lvdr.png" preview="0" preview-text="第一名" />
            <p class="time">9月1号</p>
            <p class="rank">第一名</p>
          </van-col>
        </van-row>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      list: [],
      pageIndex: 1,
      pageSize: 7,
      loading: false,
      finished: false
    };
  },
  methods: {
    // fetchdata() {},
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        var _this = this;
        this.$http
          .get("/static/data/certicate.json", {
            params: {
              pageIndex: _this.pageIndex,
              pageSize: _this.pageSize
            }
          })
          .then(function(res) {
            if (!res) return;
            // 加载状态结束
            _this.loading = false;
            if (_this.pageIndex === res.data.totalPage) {
              _this.finished = true;
            }
            if (_this.pageIndex === 1) {
              _this.list = res.data.list;
              _this.pageIndex++;
            } else {
              var newarr = _.chunk(res.data.list, _this.pageSize);
              _this.list = _this.list.concat(newarr[_this.pageIndex - 1]);
              _this.pageIndex++;
            }
          })
          .catch(function(err) {
            console.log(err);
          });
      }, 500);
    }
  },
  mounted() {},
  watch: {},
  components: {}
};
</script>
<style scoped>
.certicate {
}
.certicate .van-row {
  text-align: center;
  margin-bottom: 0.6rem;
}

.certicate .van-row img {
  width: 100%;
}
.certicate .van-row p {
  margin-top: 0.6rem;
}
.certicate .van-row .time {
  font-size: 0.6rem;
}
.certicate .van-row .rank {
}
</style>