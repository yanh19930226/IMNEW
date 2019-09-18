<template>
  <div class="publish">
    <div class="publish-button">
      <button @click="publishdata()">发布</button>
    </div>
    <van-cell-group>
      <van-field
        v-model="publish.title"
        type="textarea"
        placeholder="这一刻的想法......"
        rows="4"
        autosize
      />
    </van-cell-group>
    <div class="van-uploader">
      <div class="van-uploader__wrapper">
        <div class="van-uploader__preview" v-for="(item,index) in publish.imageList" :key="index">
          <div class="van-image van-uploader__preview-image">
            <img
              :src="item"
              preview="0"
              class="van-image__img"
              style="object-fit: cover;"
            />
          </div>
          <i class="van-icon van-icon-delete van-uploader__preview-delete" @click="imgclose(index)"></i>
        </div>
        <van-uploader
          :after-read="onRead"
          accept="image/jpg, image/jpeg"
          multiple
          :capture="'camera'"
          :preview-full-image="true"
          :preview-image="true"
        ></van-uploader>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      publish: {
        // base_scenic_city: "福州",
        // base_scenic_name: "鼓山",
        contentId: "",
        name: "",
        title: "",
        imageList: []
      }
    };
  },
  computed: {},
  mounted() {
    (this.publish.contentId = "6b47d22f-15ef-4a6c-8b66-ddd6b71227dc"),
      (this.publish.name = "test");
  },
  methods: {
    publishdata() {
      var _this = this;
      this.$http
        .post("/BaseUserNews/Insert", _this.publish, {
          headers: {
            "Content-Type": "application/json" //设置请求头请求格式为JSON
          }
        })
        .then(function(res) {
          let routeData = _this.$router.resolve({
            path: `/friendscircle`,
            name: "friendscircle"
          });
          window.location.href = routeData.href;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    //上传文件回调
    onRead(e) {
      let fd = new FormData();
      if (e && e.length) {
        e.forEach(item => {
          fd.append("files", item.file);
        });
      } else {
        fd.append("files", e.file);
      }
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      var _this = this;
      this.$http
        .post("/BaseFile/Upload", fd, config)
        .then(function(res) {
          _this.publish.imageList = [
            ..._this.publish.imageList,
            ...res.data.result
          ];
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    //删除图片
    imgclose(e) {
      this.publish.imageList.splice(e, 1);
    }
  },
  watch: {},
  components: {}
};
</script>
<style scoped>
.publish .publish-button {
  display: flex;
  justify-content: flex-end;
  padding: 0.7rem 1.3rem;
}
.publish .publish-button button {
  width: 61px;
  height: 29px;
  border: none;
  background-color: #1989fa;
  border-radius: 5px;
  color: #ffffff;
}

.publish .con dl {
  margin: 0 0 1rem 0;
}
.publish .con dl dd {
  margin: 0;
  padding: 1rem;
}
.publish .con dl dd::after,
.publish .con dl dd::before {
  clear: both;
  content: "";
  display: table;
}
.publish .imagewrap {
  position: relative;
  display: block;
  float: left;
  background: #fff;
  width: 33.33333333333333333333333333333%;
  border-right: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
  padding: 0.1rem 0.1rem 0.1rem 0.1rem;
  box-sizing: border-box;
  text-align: center;
}
.publish .con dl dd img {
  width: 100%;
  height: 8rem;
  display: block;
  object-fit: cover;
}
.publish img {
  border: 0;
  vertical-align: middle;
}
.publish .con dl dd p {
  text-align: center;
}
.publish .my-uploader__input {
  opacity: 0;
}

.publish .van-uploader {
  position: relative;
  display: inline-block;
  padding-left: 4.5%;
}

.publish .van-cell {
  padding-top: 0;
}
</style>