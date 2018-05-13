<template>
  <span>
    <button @click="logout">Logout</button>
  </span>
</template>

<script>
  module.exports = {
    methods: {
      logout() {
        firebase.auth().signOut().then(function() {
          app.$store.dispatch('logout');
          console.log('logout button clicked');
        }, function(error) {
          console.log('error signing out', error);
        });
      }
    }
  };
</script>
