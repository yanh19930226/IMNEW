<template>
  <div class="virtual">
    <van-sticky>
      <van-search
        placeholder="请输入搜索关键词"
        shape="round"
        background="#1989fa"
        v-model="keyword"
        @input="fetchdata(true)"
        left-icon
        right-icon="search"
        input-align="center"
      ></van-search>
      <div class="culture">
        <div
          class="culture-item"
          v-bind:class="{'culture-itemactived': type===''}"
          v-on:click="selectType('')"
        >不限</div>
        <div
          class="culture-item"
          v-bind:class="{'culture-itemactived': type===item.id}"
          v-on:click="selectType(item.id)"
          v-for="(item,index) in cultuallist"
          :key="index"
        >{{item.cultualname}}</div>
      </div>
    </van-sticky>
    <scroller :on-refresh="refresh" :on-infinite="infinite" ref="myscroller">
      <div class="list">
        <div
          class="virtual-item"
          v-for="(item,index) in virtuallist"
          :key="index"
          @click="virtualdetailpoup(item)"
        >
          <!-- <img v-if="item.imgUrl" :src="item.imgUrl" /> -->
          <img  src="/static/images/xny.jpg" />
          <p v-text="item.virtualname"></p>
        </div>
      </div>
    </scroller>
    <van-dialog v-model="showDialog" :title="title" :close-on-click-overlay="true">
      <van-button type="info" size="small" round @click="view('720')">720全景</van-button>
      <van-button type="info" size="small" round @click="view('vr')">vr视频</van-button>
    </van-dialog>
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
      keyword: "",
      pageIndex: 1,
      pageSize: 9,
      name: "",
      noData: false,
      type: "",
      cultuallist: [],
      virtuallist: []
    };
  },
  mounted() {
    this.fetchCultual();
    this.fetchdata();
  },
  methods: {
    fetchCultual() {
      var _this = this;
      this.$http
        .get("/BaseScenicType/GetScenicTypeList")
        .then(function(res) {
          _this.cultuallist = res.data.result;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    fetchdata(search) {
      if(search===true){
        this.virtuallist=[];
      };
      var _this = this;
      this.$http
        .get("/BaseScenic/GetScenicList", {
          params: {
            name: _this.keyword,
            pageIndex: _this.pageIndex,
            pageSize: _this.pageSize,
            type: _this.type
          }
        })
        .then(function(res) {
          if (!res) return;
          if (res.data.result.length < _this.pageSize) {
            _this.noData = true;
          }
          if (_this.pageIndex === 1) {
            _this.virtuallist = res.data.result;
          } else {
            _this.virtuallist = _this.virtuallist.concat(res.data.result);
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
    selectType: function(id) {
      this.type = id;
      this.pageIndex = 1;
      this.pageSize = 9;
       this.noData = false;
      this.fetchdata();
    },
    //详细
    virtualdetailpoup(item) {
      this.title = item.virtualname;
      this.mediaid = item.id;
      this.showDialog = true;
    },
    view(type) {
      if (type === "vr") {
        let file="vr视频地址"
        let routeData = this.$router.resolve({
          path: `/vrdetail/${file}`,
          name: "vrdetail"
        });
        window.location.href = routeData.href;
        // window.open = routeData.href;
        // this.$router.push({
        //   path: `/media/${type}/${this.mediaid}`
        // });
      } else {
        this.$router.push({
          path: `/viewPanorama/${this.mediaid}`
        });
      }
    }
  },

  watch: {},
  components: {}
};
</script>

<style>
.van-dialog {
  width: 60%;
}
.van-dialog__header {
  padding: 1rem 0;
}
.van-radio-group {
  display: flex;
  justify-content: space-around;
}
.van-dialog__content {
  padding-bottom: 1.6rem;
  display: flex;
  justify-content: space-around;
}
.van-dialog__footer {
  display: none;
}
.van-field__label {
  -webkit-box-flex: 0;
  -webkit-flex: none;
  flex: none;
  width: 50px;
  padding-left: 30px;
}
.virtual .van-field__control {
  border: none !important;
}

.virtual ._v-container ._v-content {
  padding-bottom: 10rem !important;
  position: relative !important;
}

.virtual ._v-container > ._v-content > .loading-layer {
  position: absolute !important;
  bottom: 6.5rem !important;
}
</style>
