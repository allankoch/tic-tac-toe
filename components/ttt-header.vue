<template>
  <header>
     <ttt-header-profile></ttt-header-profile>
     <ttt-header-login></ttt-header-login>
     <ttt-header-logout></ttt-header-logout>
   </header>
</template>

<script>
module.exports = {
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
