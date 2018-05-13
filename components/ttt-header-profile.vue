<template>
  <span>
    <img :src="user.photoURL" width="30" height="30"/>
    {{ user.displayName }}
  </span>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        user: app.$store.getters.currentUser
      }
    }
  }
</script>
