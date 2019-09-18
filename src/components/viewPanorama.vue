<template>
  <iframe v-if="url" style="height:100vh;width: 100%;" :src="url"></iframe>
  <div v-else style="text-align: center;padding-top: 35px;">
    <span>暂无景区数据</span>
    <a href>返回首页</a>
  </div>
</template>
<script>
require("../assets/css/virtuallist.css");
export default {
  data() {
    return {
      mediaid: "",
      title: "",
      showDialog: false,
      lng: null,
      lat: null,
      url: ""
    };
  },
  mounted() {
    if (this.$route.params.id) {
      this.fetchdata(this.$route.params.id);
    }
    if (this.$route.query.lat && this.$route.query.lng) {
      this.fetchdata1(this.$route.query.lng, this.$route.query.lat);
    }
  },
  methods: {
    fetchdata1(lng, lat) {
      var _this = this;
      this.$http
        .get("/BaseScenic/GetScenicByPoint", {
          params: {
            lng: lng,
            lat: lat
          }
        })
        .then(function(res) {
          if (res.data.success) {
            _this.url = res.data.result[0].panorama_url;
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    fetchdata(id) {
      var _this = this;
      this.$http
        .get("/BaseScenic/GetScenic", {
          params: {
            id: id
          }
        })
        .then(function(res) {
          if (res.data.success) {
            _this.url = res.data.result.panorama_url;
          }
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
