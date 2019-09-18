<template>
  <div class="gender">
    <div class="confirm-gender">
      <button @click="confirmSelect">确认</button>
    </div>
    <div class="gender-select">
      <div class="gender-select-item" @click="selectGender">
        <span>男</span>
        <i :class="{'icon-check': isSelected}"></i>
      </div>
      <div class="gender-select-item" @click="selectGender">
        <span>女</span>
        <i :class="{'icon-check': !isSelected}"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
       isSelected:true
    };
  },
   props: {
    currenGender: {
      type: String
    }
  },
  mounted() {
      if(this.currenGender==="男"){
         this.isSelected=true;
      }
      else{
        this.isSelected=false;
      }
  },
  methods: {
      selectGender(){
         this.isSelected=!this.isSelected;
      },
      confirmSelect(){
          this.$emit("on-gender-select", this.isSelected);
      }
  },
  watch: {},
  components: {}
};
</script>
<style scoped>
.gender {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 100;
  background-color: #fff;
}
.gender .confirm-gender{
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    border-bottom: 1px solid rgba(228, 228, 228, 1);
}
.gender .confirm-gender button{
    width: 61px;
    height: 29px;
    border:none;
    background-color: #1989fa;
    border-radius: 5px;
    color: #ffffff;
}
.gender .gender-select{

}
.gender .gender-select .gender-select-item{
    display: flex;
    justify-content: space-between;
    padding: 1.2rem 1rem;
    border-bottom: 1px solid rgba(228, 228, 228, 1);
}
.gender .gender-select .gender-select-item span{
    
}
</style>