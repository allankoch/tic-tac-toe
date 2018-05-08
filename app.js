Vue.config.devtools = true;

new Vue({
  //store: store,
  el: '#app',
  components: {
    'ttt-aside': httpVueLoader('./components/ttt-aside.vue'),
    'ttt-header': httpVueLoader('./components/ttt-header.vue'),
    'ttt-footer': httpVueLoader('./components/ttt-footer.vue'),
    'ttt-main-top': httpVueLoader('./components/ttt-main-top.vue'),
    'ttt-main-bottom': httpVueLoader('./components/ttt-main-bottom.vue')
  },
  created: function() {
    //this.$store.dispatch('getFirebasePeople');
    //this.$store.dispatch('getFirebaseMessages');
  }
});
