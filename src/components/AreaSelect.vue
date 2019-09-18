<template>
  <div>
    <div v-show="isShowCitys" class="city">
      <div class="city-wrapper city-wrapper-hook">
        <div class="scroller-hook">
          <div class="cities cities-hook">
            <div v-for="(i,index) in cityData" :key="index">
              <div class="title">{{i.name}}</div>
              <ul>
                <li
                  v-for="(item,index) in i.cities"
                  class="item city-click"
                  :data-name="item.name"
                  :data-id="item.code"
                  :key="index"
                >
                  <span
                    :data-item="JSON.stringify(item)"
                    @touchstart="chooseCity"
                    @touchend="touchUp"
                    class="border-1px name"
                  >{{item.name}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="shortcut shortcut-hook"
          style="right: 50px;top:100px !important;"
          @touchstart="touchIndex"
        >
          <ul style="width: 100px;text-align: left;padding: 20px 0">
            <li
              v-for="(i,index) in cityData"
              :data-anchor="i.name"
              class="item"
              :key="index"
            >{{i.name.substr(0, 1)}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
require("../../static/lib/city/css/city.css");
export default {
  name: "area-select",
  data() {
    return {
      isShowCitys: true,
      initY: 0,
      touch: {},
      location: "定位中",
      cityData: cityData, // 数据源
      cityWrapper: document.querySelector(".city-wrapper-hook"),
      cityScroller: document.querySelector(".scroller-hook"),
      shortcut: document.querySelector(".shortcut-hook"),
      anchorMap: {},
      scroll: null
    };
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    currentAreaName: {
      type: String
    }
  },
  created() {},
  methods: {
    chooseCity(e) {
      this.initY = e.changedTouches[0].screenY;
    },
    touchUp(e) {
      let currentY = e.changedTouches[0].screenY,
        cha = currentY - this.initY,
        item = JSON.parse(e.target.dataset.item);
      if (-10 < cha && cha < 10) {
        this.isShowCitys = false;
        this.location = item.name;
        this.$emit("on-area-select", this.location);
      }
    },
    initCities: function() {
      let v = this;
      let y = 0;
      var titleHeight = 28;
      var itemHeight = 44;
      v.cityData.forEach(function(e) {
        let name = e.name.substr(0, 1);
        let len = e.cities.length;
        v.anchorMap[name] = y;
        y -= titleHeight + len * itemHeight;
      });
      v.shortcut = document.querySelector(".shortcut-hook");
      v.cityWrapper = document.querySelector(".city-wrapper-hook");
      v.shortcut.style.top =
        (v.cityWrapper.clientHeight - v.shortcut.clientHeight) / 2 + "px";
      v.scroll = new window.BScroll(v.cityWrapper, {
        probeType: 3
      });
      v.scroll.scrollTo(0, 0);
    },
    touchIndex: function(e) {
      let v = this;
      let anchor = e.target.getAttribute("data-anchor");
      let firstTouch = e.touches[0];
      v.touch.y1 = firstTouch.pageY;
      v.touch.anchor = anchor;
      v.scrollTo(anchor);
    },
    scrollTo: function(anchor) {
      let v = this;
      v.cityScroller = document.querySelector(".scroller-hook");
      var maxScrollY = v.cityWrapper.clientHeight - v.cityScroller.clientHeight;
      var y = Math.min(0, Math.max(maxScrollY, v.anchorMap[anchor]));
      if (typeof y !== "undefined") {
        v.scroll.scrollTo(0, y);
      }
    }
  },
  mounted: function() {
    let v = this;
    v.initCities();
  },
  watch: {}
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.mycity {
}
.list-box {
  padding: 0 43px;
}
.list-item {
  height: 43px;
  line-height: 42px;
  border-bottom: 1px solid #ececec;
  text-align: center;
}
.list-item input {
  border: none;
  text-align: center;
  outline: none;
}
.small-icon {
  display: inline-block;
  width: 100%;
  height: 100%;
  vertical-align: top;
}
</style>