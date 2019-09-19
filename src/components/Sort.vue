<template>
  <div class="sort">
    <van-tabs v-model="active">
      <van-tab title="旅游达人榜">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-row type="flex" justify="space-between" class="mine-info">
            <van-col span="3" offset="2" class="avt-wrap">
              <img src="/static/images/0.jpg" class="avt" />
            </van-col>
            <van-col span="10" class="van-ellipsis nickname">我是昵称我是昵称我是昵称我是昵称我是昵称我是昵称我是昵称</van-col>
            <van-col span="6" class="zhengshu-count color-normal">
              1000
              <span class="sub">次</span>
            </van-col>
            <van-col span="3" class="zhengshu-wrap" @click="share()">
              <i class="fa fa-share-alt"></i>
            </van-col>
          </van-row>
          <van-row
            v-for="(item,index) in list"
            :key="index"
            :title="item"
            type="flex"
            justify="space-between"
          >
            <van-col span="2" v-text="index+1"></van-col>
            <van-col span="3" class="avt-wrap">
              <img src="/static/images/0.jpg" class="avt" />
            </van-col>
            <van-col span="11" class="van-ellipsis nickname">我是昵称我是昵称我是昵称我是昵称我是昵称我是昵称我是昵称</van-col>
            <van-col span="3" class="zhengshu-wrap"></van-col>
            <van-col
              span="5"
              class="zhengshu-count color-normal txtcenter"
              :class="{ topfive: index<=5}"
            >
              1000
              <span class="sub">次</span>
            </van-col>
          </van-row>
        </van-list>
      </van-tab>
      <van-tab title="活跃参与榜">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-row type="flex" justify="space-between" class="mine-info">
            <van-col span="3" offset="2" class="avt-wrap">
              <img src="/static/images/0.jpg" class="avt" />
            </van-col>
            <van-col span="10" class="van-ellipsis nickname">我是昵称我是昵称我是昵称我是昵称我是昵称我是昵称我是昵称</van-col>
            <van-col span="6" class="zhengshu-count color-normal">
              1000
              <span class="sub">次</span>
            </van-col>
            <van-col span="3" class="zhengshu-wrap" @click="share()">
              <i class="fa fa-share-alt"></i>
            </van-col>
          </van-row>
          <van-row
            v-for="(item,index) in list"
            :key="index"
            :title="item"
            type="flex"
            justify="space-between"
          >
            <van-col span="2" v-text="index+1"></van-col>
            <van-col span="3" class="avt-wrap">
              <img src="/static/images/0.jpg" class="avt" />
            </van-col>
            <van-col span="11" class="van-ellipsis nickname">我是昵称我是昵称我是昵称我是昵称我是昵称我是昵称我是昵称</van-col>
            <van-col span="3" class="zhengshu-wrap"></van-col>
            <van-col
              span="5"
              class="zhengshu-count color-normal txtcenter"
              :class="{ topfive: index<=5}"
            >
              1000
              <span class="sub">次</span>
            </van-col>
          </van-row>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 2,
      list: [],
      loading: false,
      finished: false
    };
  },
  mounted(){
   
  },
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },
    share() {
      this.$router.push({
        path: `/sortshare`
      });
    }
  },
  watch: {},
  components: {}
};
</script>
<style scope>
.sort {
}
.mine-info {
  border-bottom: 0.6rem solid rgba(228, 228, 228, 1) !important;
}
.sort img {
}
.sort .avt {
  vertical-align: middle;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 10rem;
}
.sort .zhengshu {
  vertical-align: middle;
}
.sort .zhengshu-count {
  text-align: right;
  font-size: 1.2rem;
}
.sort .nickname {
  font-size: 0.9rem;
}
.sort .sub {
  font-size: 0.2rem;
}
.sort .van-row {
  border-bottom: 1px solid rgba(228, 228, 228, 1);
}
.sort .van-col {
  height: 4.5rem;
  line-height: 4.5rem;
  text-align: center;
}
.sort .van-tabs__content {
  margin-top: 20px;
}
.sort .van-tab--active {
  color: #1989fa;
  font-weight: 500;
}
.sort .van-tabs__line {
  position: absolute;
  bottom: 15px;
  left: 0;
  z-index: 1;
  height: 3px;
  background-color: #1989fa;
  border-radius: 3px;
}

.sort .topfive {
  color: #ff9900 !important;
  font-size: 1.3rem !important;
}
.sort .color-normal {
  color: #1989fa;
}
.sort .txtcenter {
  text-align: center !important;
}
</style>
