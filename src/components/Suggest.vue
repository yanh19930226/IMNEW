<template>
  <div class="suggest">
    <van-cell-group>
      <van-field
        v-model="message"
        type="textarea"
        placeholder="在此输入您的意见，感谢您的反馈"
        rows="10"
        autosize
      />
    </van-cell-group>
    <van-button type="info" @click="submit">提交反馈</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: ""
    };
  },
  mounted() {},
  methods: {
    submit() {
      var _this = this;
      this.$http
        .post("", {
          params: {
          
          }
        })
        .then(function(res) {
         
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
<style scoped>
.suggest {
  text-align: center;
}
.suggest .van-cell {
  padding: 1.4rem;
}
.suggest .van-button {
  width: 90%;
  height: 3rem;
  line-height: 3rem;
}
</style>