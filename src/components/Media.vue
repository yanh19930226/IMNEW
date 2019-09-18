<template>
  <div>
    <get-detail :isInit="true" :filter="filter" :meta="meta" ref="refId">
      <template slot="data" slot-scope="slot">
        <!-- <iframe
          v-if="type==='720'"
          :src="slot.data.qjurl"
          class="iheight"
        ></iframe> -->
        <div>
        </div>
        <vr-detail v-if="type==='vr'" :result="slot"></vr-detail>
      </template>
    </get-detail>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: "",
      meta: {
        reqUrl: "/static/data/virtualdetail.json"
      },
      filter: {
        id: this.$route.params.id
      }
    };
  },
  mounted() {
    let type = this.$route.params.type;
    this.type = type;
  },
  created() {},
  computed: {},
  components: {
    GetDetail: () => import("../components/GetDetail.vue"),
    VrDetail: () => import("../components/VrDetail.vue")
  }
};
</script>
<style>
</style>
