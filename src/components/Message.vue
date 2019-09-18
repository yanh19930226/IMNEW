<template>
  <div class="message">
    <van-tabs v-model="active">
      <van-tab title="评论">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <message-list :itera="pinlunList">
            <template></template>
          </message-list>
        </van-list>
      </van-tab>
      <van-tab title="@我">
        <!-- <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <message-list :itera="meList" >
            <template slot="pinlun-context">在他/她的动态中@我</template>
          </message-list>
        </van-list>-->
      </van-tab>
      <van-tab title="收到的赞">
        <!-- <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <message-list :itera="zanList">
            <template slot="pinlun-context">赞了我</template>
          </message-list>
        </van-list>-->
      </van-tab>
      <van-tab title="通知">
        <!-- <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <message-list :itera="toastList">
            <template slot="pinlun-name">我的in记小秘书</template>
            <template slot="pinlun-context">恭喜您获得“旅游达人。。。证书</template>
          </message-list>
        </van-list>-->
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      active: 0,
      loading: false,
      finished: false,
      pinlunList: [],
      meList: [],
      zanList: [],
      toastList: [],

      pageIndex: 1,
      pageSize: 8
    };
  },
  computed: {},
  components: {
    MessageList: () => import("../components/MessageList")
  },
  mounted() {
    this.fetchpinlundata();
    this.fetchmedata();
    this.fetchzandata();
    this.fetchzandata();
    this.fetchtoastdata();
  },
  methods: {
    // fetchdata() {
    //   var _this = this;
    //   this.$http
    //     .get("/static/data/mypinglun.json")
    //     .then(function(res) {
    //       _this.pinlunList = res.data;
    //     })
    //     .catch(function(err) {
    //       console.log(err);
    //     });
    // }
    fetchpinlundata() {
      var _this = this;
      $.ajax({
        type: "get",
        url: "/static/data/mypinglun.json",
        beforeSend: function() {},
        success: function(res) {
          if (!res) return;
          if (_this.pageIndex === 1) {
            _this.pinlunList = res.pinglunlist;
          } else {
            if (res.pinglunlist.length < _this.pageSize) {
              _this.finished = true;
            }
            _this.pinlunList = _this.pinlunList.concat(res.pinglunlist);
          }
        },
        error: function() {
          console.log(err);
        }
      });
    },
    fetchmedata() {
      var _this = this;
      $.ajax({
        type: "get",
        url: "/static/data/@me.json",
        beforeSend: function() {},
        success: function(res) {
          if (!res) return;
          _this.meList = res.melist;
        },
        error: function() {
          console.log(err);
        }
      });
    },
    fetchzandata() {
      var _this = this;
      $.ajax({
        type: "get",
        url: "/static/data/zan.json",
        beforeSend: function() {},
        success: function(res) {
          if (!res) return;
          _this.zanList = res.zanlist;
        },
        error: function() {
          console.log(err);
        }
      });
    },
    fetchtoastdata() {
      var _this = this;
      $.ajax({
        type: "get",
        url: "/static/data/toast.json",
        beforeSend: function() {},
        success: function(res) {
          if (!res) return;
          _this.toastList = res.toastlist;
        },
        error: function() {
          console.log(err);
        }
      });
    },
    onLoad() {
      if(this.finished = false){
         setTimeout(() => {
          this.pageIndex++; //下拉一次页数+1
          this.fetchdata();
          done(); //进行下一次加载操作
        }, 500);
      }
      // // 异步更新数据
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i++) {
      //     this.list.push(this.list.length + 1);
      //   }
      //   // 加载状态结束
      //   this.loading = false;
      //   // 数据全部加载完成
      //   if (this.list.length >= 40) {
      //     this.finished = true;
      //   }
      // }, 500);
    }
  },
  watch: {}
};
</script>
<style scoped>
</style>