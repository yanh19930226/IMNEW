<template>
  <div class="myspace">
    <header>
      <img class="bg" :src="myspace.bg" />
      <p class="user-name" v-text="myspace.username"></p>
      <img class="avt" :src="myspace.avt" />
    </header>
    <div class="divwrap">
      <div class="divitem">
        <span v-text="myspace.postcount"></span>
        <p>动态</p>
      </div>
      <div class="divitem">
        <span v-text="myspace.fanscount"></span>
        <p>粉丝</p>
      </div>
      <div class="divitem">
        <span v-text="myspace.guanzhucount"></span>
        <p>关注</p>
      </div>
      <div class="divitem">
        <span v-text="myspace.zhengshucount"></span>
        <p>证书</p>
      </div>
    </div>
    <div class="list">
      <div class="list-item">
        <div class="content">
          <div class="imagecontainer">
            <p>他/她的动态</p>
            <div class="img-wrap">
              <img class="list-img" :src="item.imgUrl" preview="dongtai" :preview-text="item.title" v-for="(item,index) in myspace.postList" :key=index />
            </div>
          </div>
        </div>
      </div>
      <div class="list-item">
        <div class="content">
          <div class="imagecontainer">
            <p>他/她的证书</p>
            <div class="img-wrap">
              <img class="list-img" :src="item.imgUrl" preview="zhengshu" :preview-text="item.title" v-for="(item,index) in myspace.zhengshuList" :key=index />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="secret">
      <button class="btn-secret">发私信</button>
    </div>
  </div>
</template>
<script>
require('../assets/css/myspace.css'); 
export default {
  data() {
    return {
      myspace:""
    };
  },
  mounted() {
    this.fetchdata();
    this.$previewRefresh()
  },
  methods: {
    fetchdata() {
      var _this = this;
      this.$http
        .get("/static/data/myspace.json")
        .then(function(res) {
          _this.myspace = res.data;
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
