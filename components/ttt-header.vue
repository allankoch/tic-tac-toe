<template>
  <header>
     <ttt-header-profile v-if="isLoggedIn()"></ttt-header-profile>
     <ttt-header-login v-if="!isLoggedIn()"></ttt-header-login>
     <ttt-header-logout v-if="isLoggedIn()"></ttt-header-logout>
   </header>
</template>

<script>
module.exports = {
  methods: {
    isLoggedIn() {
      return app.$store.getters.isLoggedIn;
    }
  },
  components: {
    'ttt-header-profile': httpVueLoader('./ttt-header-profile.vue'),
    'ttt-header-login': httpVueLoader('./ttt-header-login.vue'),
    'ttt-header-logout': httpVueLoader('./ttt-header-logout.vue')
  }
}
</script>

<style>
  header { background-color: red; }
</style>
