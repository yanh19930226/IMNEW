<template>
  <div>
    <template>
      <slot name="header"></slot>
      <slot
        v-if="result.data.length > 0"
        name="data"
        :data="scrollData"
      ></slot>
      <slot v-else-if="loading.display !== true" name="empty"></slot>
      <slot v-if="result.data.length > 0" name="paging" :data="result.paging"></slot>
      <slot name="footer"></slot>
    </template>
  </div>
</template>

<style scoped></style>

<script>
import { getPage } from "../actions/basis/page";
export default {
  data() {
    return {
      loading: {
        display: false,
        background: null,
        text: null
      },
      scrollData: [],
      result: {
        data: [],
        paging: {
          totalCount: 0
        }
      }
    };
  },
  name: "PageScroll",
  props: {
    meta: {
      type: Object,
      module: {
        type: String,
        required: true
      },
      field: {
        type: String,
        required: true
      }
    },
    filter: {
      type: Object
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    isInit: {
      type: Boolean,
      default: true
    }
  },
  computed: {},
  components: {},
  created() {},
  mounted() {
    if (this.isInit) {
      this.loadData();
    }
    //父窗口使用 that.$refs["ref"].loadData();
  },
  methods: {
    clearData() {
      this.result.data = [];
    },
    loadData(reset) {
      let that = this;
      that.loading.display = true;
      if (this.isLoading === true) {
        that.$emit("on-load-before", that.loading.display);
      }
      //重新设置数据，避免累加
      if(that.filter.pageIndex===1 || that.filter.pageIndex===0){
        that.result.data = [];
        that.scrollData=[];
      }
      // if (that.result.paging && reset) {
      //   that.result.paging.totalCount = 0;
      // }
      getPage(that.meta.module, that.filter, that.meta.field, that.api).then(
        res => {
          that.loading.display = false;
          if (this.isLoading === true) {
            that.$emit("on-load-after", that.loading.display);
          }
          if (!res) return;
          that.result = res;
          that.scrollData=[...that.scrollData,...res.data];
          that.$emit("on-data-after", that.result);
        }
      );
    }
  },
  watch: {
  }
};
</script>
