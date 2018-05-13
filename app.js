Vue.config.devtools = true;

var app = new Vue({
  store: store,
  el: '#app',
  components: {
    'ttt-aside': httpVueLoader('./components/ttt-aside.vue'),
    'ttt-header': httpVueLoader('./components/ttt-header.vue'),
    'ttt-footer': httpVueLoader('./components/ttt-footer.vue'),
    'ttt-main-top': httpVueLoader('./components/ttt-main-top.vue'),
    'ttt-main-bottom': httpVueLoader('./components/ttt-main-bottom.vue')
  },
  created: function() {
    // detect if user is logged in
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        app.$store.dispatch('login', user);
      } else {
        // No user is signed in.
      }
    });

    // init state from firebase
    this.$store.dispatch('initStateFromFirebase');
  }
});
