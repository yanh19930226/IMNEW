<template>
  <!-- <div>
    <div class="vrdetail">
      <div v-show="result.data.fileUrl==null">
        <img style="border: 0; width: 100%;cursor:pointer" src="../../assets/portal/zwsj2.png" />
      </div>
      <div style="cursor:pointer;width:100%;position:absloute;" v-show="result.data.fileUrl!=null">
        <div style="border: 0px solid #888;width:100%;height: 18rem;position:relative">
          <div :id="id" class="pan"></div>
        </div>
      </div>
      <div v-html="result.data.content" class="vr-content"></div>
    </div>
  </div>-->
  <div id="panoDesk"></div>
</template>
<script>
import { mapGetters } from "Vuex";
export default {
  data() {
    return {
      id: "vr",
      videoList: [],
      isShowAll: true,
      isMounted: true,
      params: {
        container: null,
        name: "SceneViewer",
        isGyro: true, //默认开启陀螺仪功能  移动端支持陀螺仪设备有效
        isMouseWheel: false, //禁止滚轮缩放
        scenesArr: [],
        initOverCallBack: function() {
          this.isShowAll = false;
        },
        errorCallBack: function(e) {
          console.log("错误状态：" + e);
        },
        sceneEventClickCallBack: function(e) {
          if (this.isShowAll) {
            this.isShowAll = false;
          } else {
            this.isShowAll = true;
          }
        },
        fsCallBack: function(status, playObj) {
          alert("浏览器不支持全屏！");
        }
      }
    };
  },
  // props: {
  //   result: {
  //     type: Object
  //   }
  // },
  mounted() {
    // let fileUrl = this.$route.params.fileUrl;
    let fileUrl = "/static/data/test.mp4";
    // this.params.container = document.getElementById(this.id);
    this.params.scenesArr = [
      {
        sceneId: "v1",
        sceneName: "赛车",
        sceneFilePath: fileUrl,
        sceneType: "Video"
      }
    ];
    this.videoList.push({
      Text: "超高清",
      Quality: 1,
      Resolution: "2048x1024",
      MP4: fileUrl,
      // M3U8: "http://118.25.64.230:10001/zzwh/vr/yicun/yungenshuyuan/index.m3u8",
      RTMP: null
    });
    initLoad(this.params);
  },
  methods: {}
  // created() {
  //   this.id = "vr" + Math.ceil(Math.random() * 100000000);
  // },
  // components: {},
  // watch: {
  //   result: function() {
  //     this.params.container = document.getElementById(this.id);
  //     this.params.scenesArr = [
  //       {
  //         sceneId: "v1",
  //         sceneName: "赛车",
  //         sceneFilePath: this.result.data.fileUrl,
  //         sceneType: "Video"
  //       }
  //     ];
  //     this.videoList.push({
  //       Text: "超高清",
  //       Quality: 1,
  //       Resolution: "2048x1024",
  //       MP4: this.result.data.fileUrl,
  //       // M3U8: "http://118.25.64.230:10001/zzwh/vr/yicun/yungenshuyuan/index.m3u8",
  //       RTMP: null
  //     });
  //     initLoad(this.params);
  //   }
  // }
};
</script>
<style>
.vrdetail .pan {
  width: 100%;
  height: 400px;
  cursor: pointer;
}
.vrdetail {
  padding-bottom: 100px;
}
.vrdetail .vr-title {
  text-align: center;
  font-size: 17px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: #333333;
  line-height: 36px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 80%;
  margin: 0 auto;
}
.vrdetail .vr-content {
  font-size: 0.9rem;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: #666666;
  line-height: 35px;
  text-indent: 2em;
  padding: 0 15px;
}

html body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0px;
  margin: 0px;
}

#panoDesk {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  overflow: hidden;
}
</style>
