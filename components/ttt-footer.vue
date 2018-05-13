<template>
  <footer>
    <input v-if="isLoggedIn()" type="text" id="chatMessage" />
   <button v-if="isLoggedIn()" @click="addChatMessage">Send</button>
   </footer>
</template>

<script>
  module.exports = {
    methods: {
      isLoggedIn() {
        return app.$store.getters.isLoggedIn;
      },
      addChatMessage() {
          var val = document.getElementById("chatMessage").value;
          app.$store.dispatch('addChatMessage', val);
      }
    }
  }
</script>

<style>
  footer { background-color: yellow; }
</style>
