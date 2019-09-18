<template>
  <div class="hello">
    <ul>
      <router-link to="/visited" tag="li" class="li-item">
             <a href="">到此一游</a>
        </router-link>
     <router-link to="/friendscircle" tag="li" class="li-item">
             <a href="">我的朋友圈</a>
        </router-link>
         <router-link to="/myspace" tag="li" class="li-item">
             <a href="">我的空间</a>
        </router-link>
         <router-link to="/personalpost" tag="li" class="li-item">
             <a href="">我的动态</a>
        </router-link>
         <router-link to="/postdetail" tag="li" class="li-item">
             <a href="">动态详情</a>
        </router-link>
         <router-link to="/personaiInfo" tag="li" class="li-item">
             <a href="">个人信息</a>
        </router-link>
         <router-link to="/personalinfoedit" tag="li" class="li-item">
             <a href="">个人信息编辑</a>
        </router-link>
         <router-link to="/virtuallist" tag="li" class="li-item">
             <a href="">虚拟游</a>
        </router-link>
        <router-link to="/test" tag="li" class="li-item">
             <a href="">测试</a>
        </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}
li{
  display: inline-block;
  margin: 20px 20px;
}
a {
  color: #42b983;
}
</style>
