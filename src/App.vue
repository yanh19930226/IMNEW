<template>
  <div id="app">
    <Loading v-show="loadingShow"></Loading>
    <!-- <Nav v-show="headShow"></Nav> -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import Nav from './components/Header.vue'
import Visited from './components/Visited.vue'
import Footer from './components/Footer.vue'
import { mapGetters } from "Vuex";
export default {
  data() {
    return {};
  },
  computed: mapGetters([
    'headShow',
    "loadingShow"
    ]),
  mounted() {
  },
  methods: {},

  watch: {
    $route(to,from){
      if(to.path==='/visited'||to.path==='/'||to.path==='*'){
          this.$store.dispatch('hideHeader');
      }else {
        this.$store.dispatch('showHeader');
      }
    }
  },
  components: {
    Nav,
    Visited,
    Footer
  }
};
</script>
<style>
body {
  overflow-x: hidden;
}
.slideInLeft,
.slideOutRight {
  position: absolute;
}
</style>
