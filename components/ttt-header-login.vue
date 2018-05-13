<template>
  <span>
    <button @click="login">Login</button>
  </span>
</template>

<script>
  module.exports = {
    methods: {
      login() {
        firebase.auth().signInWithPopup(provider).then(function (result) {
          app.$store.dispatch('login', result.user);
        }).catch(function (error) {
          console.log('error logging in: ', error);
        });
      }
    }
  }
</script>
