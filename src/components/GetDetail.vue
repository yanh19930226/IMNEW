<template>
  <div>
    <slot name="header"></slot>
    <slot v-if="result.data" name="data" :data="result.data"></slot>
    <slot v-else name="empty"></slot>
    <slot name="footer"></slot>
  </div>
</template>
<style scoped></style>
<script>
export default {
  name: "GetDetail",
  data() {
    return {
      result: {
        data: {}
      }
    };
  },
  props: {
    routeWatch: {
      type: Boolean,
      default: true
    },
    meta: {
      type: Object,
      reqUrl: {
        type: String,
        required: true
      }
    },
    filter: {
      type: Object
    },
    isInit: {
      type: Boolean,
      default: true
    }
  },
  computed: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.fetchdata();
  },
  methods: {
    fetchdata() {
      let that = this;
      that.result.data = [];
      that.$http
        .get(that.meta.reqUrl)
        .then(function(res) {
          if (!res) return;
          if (that.filter.id==="1") {
            that.result.data = res.data[0];
          } else {
            that.result.data = res.data[1];
          }
          that.$emit("on-data-after", that.result);
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  destroyed() {},
  deactivated() {}
};
</script>
