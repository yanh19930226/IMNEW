<template>
  <div class="messagelist">
    <van-row class="pinlun-row" v-for="(item,index) in itera" :key="index">
      <van-col span="4">
        <img :src="item.avt" class="message-avt" />
      </van-col>
      <van-col :span="item.firstimg?15:18" class="pinlun-wrap">
        <slot name="pinlun-name"></slot>
        <p class="pinlun-name" v-text="item.username"></p>
        <slot name="pinlun-context"></slot>
        <p class="pinlun-content" v-text="item.content"></p>
        <p class="pinlun-time" v-text="item.time"></p>
      </van-col>
      <van-col span="5" v-if="item.firstimg">
        <img :src="item.firstimg" class="picture" />
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  data() {},
  props: {
    itera: {
      type: Array
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  mounted() {},
  methods: {},
  components: {},
  watch: {}
};
</script>
<style scoped>
.messagelist {
}
.messagelist .message-avt {
  width: 2.8rem;
  border-radius: 5rem;
}
.messagelist .picture {
  width: 4rem;
}
.messagelist .pinlun-row {
  margin-top: 1rem;
  border-bottom: 1px solid rgba(228, 228, 228, 1);
}
.messagelist .van-col {
  text-align: center;
}
.messagelist .pinlun-wrap {
  text-align: left;
}
.messagelist .pinlun-wrap p {
  padding-bottom: 0.6rem;
}
.messagelist .pinlun-wrap .pinlun-content {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /*加宽度width属来兼容部分浏览*/
  font-size: 1rem;
}
.messagelist .pinlun-wrap .pinlun-name {
  color: #7d7e80;
}
.messagelist .pinlun-wrap .pinlun-time {
  font-size: 0.6rem;
}
</style>