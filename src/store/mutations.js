const state = {
  headShow: false,
  loadingShow: false,
  isMounted:true
};
const mutations = {
  showHeader(state) {
    state.headShow = true;
  },
  hideHeader(state) {
    state.headShow = false;
  },
  showLoading(state) {
    state.loadingShow = true;
  },
  hideLoading(state) {
    state.loadingShow = false;
  },
  noMounted(state){
     state.isMounted = false;
  }
};
const getters = {
  headShow(state) {
    return state.headShow;
  },
  loadingShow(state) {
    return state.loadingShow;
  },
  exeuteMounted(state){
    return state.isMounted;
  }
};

export default {
  state,
  mutations,
  getters
}
