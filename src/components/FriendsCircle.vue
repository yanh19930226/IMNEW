<template>
  <div class="friendscircle">
    <div class="header-tab">
      <div
        class="tab-item"
        v-bind:class="{'tab-itemactived': order===0}"
        v-on:click="selectType(0)"
      >最新</div>
      <div
        class="tab-item"
        v-bind:class="{'tab-itemactived': order===1}"
        v-on:click="selectType(1)"
      >最热</div>
      <div
        class="tab-item"
        v-bind:class="{'tab-itemactived': order===2}"
        v-on:click="selectType(2)"
      >关注</div>
      <div class="tab-item">
        <router-link to="/publish" tag="div" class="tab-spa">
          <div class="tab-txt">发表</div>
        </router-link>
      </div>
    </div>
    <div class="list">
      <scroller :on-refresh="refresh" :on-infinite="infinite" ref="myscroller">
        <div class="list-item" v-for="(item,index) in myPostInfo" :key="index">
          <img class="avt" :src="item.avg" />
          <div
            class="guanzhu"
            @click="handleGZ(userId, item.contentId)"
            v-if="item.contentId!=userId"
          >
            <p>
              <span>关注</span>
            </p>
          </div>
          <div class="content">
            <p class="user-name" v-text="item.name"></p>
            <div class="imagecontainer">
              <p v-text="item.title"></p>
              <div class="img-wrap">
                <img
                  class="list-img"
                  :src="imageitem.imgUrl"
                  :preview="item.contentId"
                  :preview-text="item.title"
                  v-for="(imageitem,index) in item.imageList"
                  :key="index"
                />
              </div>
            </div>
            <div class="item-info">
              <div class="flex-item">
                <p class="address" v-text="item.address"></p>
                <p class="time" v-text="$options.filters.normalMomentTime(item.time)"></p>
              </div>
              <div class="flex-item notime">
                <div
                  class="c-iconcontent c-iconcontent-love"
                  @click="handleDZ(userId,item.contentId)"
                >
                  <img style="height: 12px;" class="c-icon" src="/static/images/dz.png" />&nbsp;
                  <span v-text="item.dz"></span>
                </div>
                <router-link
                  :to="{path: '/postdetail/' + item.id+'/'+userId}"
                  tag="div"
                  class="c-iconcontent"
                >
                  <img style="height: 12px;" class="c-icon" src="/static/images/ly.png" />&nbsp;
                  <span v-text="item.pinlun"></span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div style="clear:both"></div>
      </scroller>
    </div>
  </div>
</template>
<script>
require("../assets/css/friendscircle.css");
import Vue from "vue";
import VueScroller from "vue-scroller";
Vue.use(VueScroller);
export default {
  data() {
    return {
      userId: "",
      myPostInfo: [],
      order: 0,
      pageIndex: 1,
      pageSize: 10,
      noData: false
    };
  },
  mounted() {
    this.userId = sessionStorage.getItem("UserId");
    this.userId = "c3a22fbf-9858-4f5b-9e03-af7429e5196a";
    this.fetchdata();
  },
  methods: {
    fetchdata() {
      var _this = this;
      this.$http
        .get("/BaseUserNews/GetUserNewsList", {
          params: {
            pageIndex: _this.pageIndex,
            pageSize: _this.pageSize,
            order: _this.order
          }
        })
        .then(function(res) {
          if (!res) return;
          if (res.data.result.length < _this.pageSize) {
            _this.noData = true;
          }
          if (_this.pageIndex === 1) {
            _this.myPostInfo = res.data.result;
          } else {
            _this.myPostInfo = _this.myPostInfo.concat(res.data.result);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    //下拉刷新
    refresh() {
      this.pageIndex = 1; //重置页数
      this.noData = false;
      setTimeout(
        function() {
          this.fetchdata();
          this.$refs.myscroller.finishPullToRefresh(); //刷新完毕关闭刷新的转圈圈
        }.bind(this),
        1700
      );
    },
    //上拉加载
    infinite(done) {
      if (this.noData) {
        this.$refs.myscroller.finishInfinite(true); //不让它加载，，显示“没有更多数据”，不然会一直转圈
      } else {
        setTimeout(() => {
          this.pageIndex++; //下拉一次页数+1
          this.fetchdata();
          done(); //进行下一次加载操作
        }, 1500);
      }
    },
    //筛选
    selectType: function(order) {
      this.order = order;
      this.pageIndex = 1;
      this.pageSize = 10;
      this.fetchdata();
    },
    handleDZ(userId, biz_user_news_id) {
      // var _this = this;
      // this.$http
      //   .get("/BaseUserDate/Like", {
      //     userId: userId,
      //     biz_user_news_id: biz_user_news_id
      //   })
      //   .then(function(res) {})
      //   .catch(function(err) {
      //     console.log(err);
      //   });
      $.ajax({
        url:
          "https://wisdom-scenic-api.whlyw.net/api/services/app/BaseUserDate/Like", //请求的url地址
        dataType: "json", //返回格式为json
        contentType: "application/json",
        data: JSON.stringify({
          userId: userId,
          biz_user_news_id: biz_user_news_id
        }),
        type: "post", //请求方式
        success: function(req) {
          debugger;
        },
        error: function(a, b, c, d) {
          debugger;
        }
      });
    },
    handleGZ(fromUserId, toUserId) {
      // var _this = this;
      // this.$http
      //   .post(
      //     "/BaseUserDate/Follow",
      //     {
      //       fromUserId: fromUserId,
      //       toUserId: toUserId
      //     },
      //     {
      //       headers: {
      //         "Content-Type": "application/json" //设置请求头请求格式为JSON
      //       }
      //     }
      //   )
      //   .then(function(res) {
      //     alert("dddd");
      //   })
      //   .catch(function(err) {
      //     console.log(err);
      //   });
      $.ajax({
        url:
          "https://wisdom-scenic-api.whlyw.net/api/services/app/BaseUserDate/Follow", //请求的url地址
        dataType: "json", //返回格式为json
        contentType: "application/json",
        data: JSON.stringify({
          fromUserId: fromUserId,
          toUserId: toUserId
        }),
        type: "post", //请求方式
        success: function(req) {
          debugger;
        },
        error: function(a, b, c, d) {
          debugger;
        }
      });
    }
  },
  watch: {
    $route: function(to, from) {
      if (to.name === "FriendsCircle") {
        this.$menuFn.setTitle("动态");
      }
    }
  },
  components: {}
};
</script>
<style>
</style>

