<template>
  <div class="personalinfo">
    <header>
      <div class="user">
        <img :src="personalinfo.avt" />
      </div>
      <div class="userinfo">
        <p v-text="personalinfo.username"></p>
        <p v-text="personalinfo.gender+' '+personalinfo.age+'岁 '+personalinfo.address"></p>
      </div>
      <div class="right_icon">
        <router-link :to="{path: '/personalinfoedit/' + 1}" tag="a">
          <span>编辑</span>
        </router-link>
      </div>
    </header>
    <aside>
      <ul>
        <router-link :to="{path: '/personalpost/' + personalinfo.userid}" tag="li" class="li-item">
          <span>我的动态</span>
          <i class="iconfont icon-angle-right"></i>
          <div>
            <span v-text="personalinfo.postcount+'条'"></span>
          </div>
        </router-link>
        <router-link :to="{path: '/certicate/' + personalinfo.userid}" tag="li" class="li-item">
          <span>我的证书</span>
          <i class="iconfont icon-angle-right"></i>
          <div>
            <span v-text="personalinfo.zhengshucount+'条'"></span>
          </div>
        </router-link>
        <router-link :to="{path: '/pinlun/' + personalinfo.userid}" tag="li" class="li-item">
          <span>我的评论</span>
          <i class="iconfont icon-angle-right"></i>
          <div>
            <span v-text="personalinfo.pingluncount+'条'"></span>
          </div>
        </router-link>
        <router-link :to="{path: '/guanzhu/' + personalinfo.userid}" tag="li" class="li-item">
          <span>我的关注</span>
          <i class="iconfont icon-angle-right"></i>
          <div class="tagdiv">new</div>
        </router-link>
        <router-link :to="{path: '/message/' + personalinfo.userid}" tag="li" class="li-item">
          <span>我的消息</span>
          <i class="iconfont icon-angle-right"></i>
          <div class="tagdiv">
            <div v-text="personalinfo.messagecount"></div>
          </div>
        </router-link>
        <router-link :to="{path: '/suggest/' + personalinfo.userid}" tag="li" class="li-item">
          <span>意见反馈</span>
          <i class="iconfont icon-angle-right"></i>
        </router-link>
        <router-link to="/sysmessage" tag="li" class="li-item">
          <span>系统消息</span>
          <i class="iconfont icon-angle-right"></i>
          <div class="dotdiv"></div>
        </router-link>
      </ul>
    </aside>
  </div>
</template>
<script>
require("../assets/css/personalinfo.css");
export default {
  data() {
    return {
      personalinfo: ""
    };
  },
  mounted() {
    this.fetchdata();
  },
  methods: {
    fetchdata() {
      var _this = this;
      this.$http
        .get(
          "/BaseUserDate/GetPersonalInfo",
          {
            params: {
              userId: "c3a22fbf-9858-4f5b-9e03-af7429e5196a"
            }
          }
        )
        .then(function(res) {
          _this.personalinfo = res.data.result[0];
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  watch: {},
  components: {}
};
</script>

<style>
</style>
