<template>
  <!-- <div class="container">
    <div>
      <img src="/static/images/journey.png" />
    </div>
    <div class="spotinfo-container">
      <h3 class="spot-title">石竹山风景区</h3>
      <p>到此一游-荣誉证书</p>
    </div>
    <div class="user-info-container">
      <img src="/static/images/0.jpg" />
      <p class="user-info">林景行运营-黄先生</p>
      <span class="user-info-time">2019-08-20</span>
    </div>
    <div class="bottom">
      <div class="certificate-container">
        <img src="/static/images/wlz.png" />
        <img src="/static/images/spot.png" />
      </div>
      <div class="bottom-container">
        <div class="bottom-info-left">
          <img src="/static/images/qrcode.png" />
          <span>扫扫或长按,了解详情</span>
        </div>
        <div class="bottom-info-right">
          <p>望路行程文化旅游网颁发</p>
        </div>
      </div>
    </div>
  </div>-->
  <div class="container">
    <img src />
    <div class="spotinfo-container">
      <h3 class="spot-title" v-text="fjqname"></h3>
      <p>到此一游-荣誉证书</p>
    </div>
    <div class="user-info-container">
      <img :src="userInfo.avt" />
      <p class="user-info" v-text="userInfo.username"></p>
      <span class="user-info-time" v-text="$options.filters.normalMomentTime(new Date())"></span>
    </div>
    <div class="bottom">
      <div class="certificate-container">
        <img src="/static/images/wlz.png" />
        <img src="/static/images/spot.png" />
      </div>
      <div class="bottom-container">
        <div class="bottom-info-left">
          <div id="qrcode" ref="qrcode" class="qrcodeimage"></div>
          <!-- <img src="/static/images/qrcode.png" /> -->
          <span>扫扫或长按,了解详情</span>
        </div>
        <div class="bottom-info-right">
          <p>望路行程文化旅游网颁发</p>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
require("../assets/css/visited.css");
import QRCode from "qrcodejs2";
export default {
  data() {
    return {
      fjqname: "石竹山风景区",
      dksj: new Date(),
      userInfo: {},
      scenic: {}
    };
  },
  mounted() {
    this.fetchdata(JSON.parse(sessionStorage.getItem("ralate")).userId);
    this.fetchscenic(JSON.parse(sessionStorage.getItem("ralate")).lng,JSON.parse(sessionStorage.getItem("ralate")).lat);
  },
  methods: {
    fetchdata(userId) {
      var _this = this;
      this.$http
        .get("/BaseUserDate/GetUserInfo", {
          params: {
            userId: userId
          }
        })
        .then(function(res) {
          _this.userInfo = res.data.result[0];
          _this.qrCode("http://www.runoob.com");
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    fetchscenic(lng, lat) {
      var _this = this;
      this.$http
        .get("/BaseScenic/GetScenicByPoint", {
          params: {
            lng: lng,
            lat: lat
          }
        })
        .then(function(res) {
          _this.scenic = res.data.result[0];
          // _this.qrCode("http://wisdom-scenic.whlyw.net/viewPanorama?lat="+lat+"&lng="+lng);
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    qrCode(url) {
      let qrcode = new QRCode("qrcode", {
        width: 150, //图像宽度
        height: 150, //图像高度
        colorDark: "#000000", //前景色
        colorLight: "#ffffff", //背景色
        typeNumber: 4,
        correctLevel: QRCode.CorrectLevel.H //容错级别 容错级别有：（1）QRCode.CorrectLevel.L （2）QRCode.CorrectLevel.M （3）QRCode.CorrectLevel.Q （4）QRCode.CorrectLevel.H
      });
      qrcode.clear(); //清除二维码
      qrcode.makeCode(url); //生成另一个新的二维码
    }
  },
  watch: {},
  components: {}
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
/* .container {
}
.container img {
  width: 100%;
}
.container .spotinfo-container {
}
.container .spotinfo-container .spot-title {
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-weight: 700;
  font-style: normal;
  font-size: 1.1rem;
  color: #b69965;
}
.container .spotinfo-container p {
  font-family: "微软雅黑 Bold", "微软雅黑 Regular", "微软雅黑";
  font-weight: 700;
  font-style: normal;
  font-size: 1.6rem;
  color: #bda475;
  padding-top: 0.6rem;
} */

.container {
  text-align: center;
  background: transparent url("/static/images/journey.png") no-repeat;
  position: absolute;
  height: 80%;
  padding-top: 5.8rem;
  background-size: 100%;
  margin-top: 2rem;
}
.container > .spotinfo-container {
}
.container > .spotinfo-container > .spot-title {
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-weight: 700;
  font-style: normal;
  font-size: 1.1rem;
  color: #b69965;
}

.container > .spotinfo-container > p {
  font-family: "微软雅黑 Bold", "微软雅黑 Regular", "微软雅黑";
  font-weight: 700;
  font-style: normal;
  font-size: 1.6rem;
  color: #bda475;
  padding-top: 0.6rem;
}

.container > .user-info-container {
  margin-top: 1.6rem;
}
.container > .user-info-container > img {
  width: 4rem;
  height: 4rem;
  border-radius: 11rem;
}
.container > .user-info-container > .user-info {
  color: #b69965;
  font-family: "Arial Normal", "Arial";
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  padding: 1rem 0;
}

.container > .user-info-container > .user-info-time {
  color: #b69965;
  font-family: "Arial Normal", "Arial";
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
}

.container > .bottom {
  margin-top: 2rem;
}
.container > .bottom > .certificate-container {
  text-align: right;
  margin-right: 3rem;
}

.container > .bottom > .certificate-container > img {
  width: 25%;
}

.container > .bottom > .certificate-container > img:first-child {
}

.container > .bottom > .certificate-container > img:last-child {
}

.container > .bottom > .bottom-container {
  margin-top: 1.5rem;
  display: flex;
}

.container > .bottom > .bottom-container > .bottom-info-left {
  width: 50%;
}

.container > .bottom > .bottom-container > .bottom-info-left > img {
  width: 34%;
}

.container > .bottom > .bottom-container > .bottom-info-left > span {
  font-family: "Arial Normal", "Arial";
  font-weight: 400;
  font-style: normal;
  font-size: 0.8rem;
  color: #333333;
  text-align: center;
  line-height: normal;
  display: block;
}

.container > .bottom > .bottom-container > .bottom-info-right {
  position: relative;
  width: 50%;
  font-size: 0.8rem;
  color: #b69965;
}

.container > .bottom > .bottom-container > .bottom-info-right > p {
  position: absolute;
  bottom: 0;
}


.container .qrcodeimage img{
   width: 3rem;
}
</style>