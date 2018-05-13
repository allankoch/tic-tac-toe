<template>
  <div class="main-bottom">
    <ul>
      <li v-for="message in getMessages()">
        <b>{{ message.displayName }}</b>: {{ message.message }}
      </li>
    </ul>
   </div>
</template>

<script>
  module.exports = {
    methods: {
      getMessages() {
        return app.$store.getters.messages;
      }
    }
  }
</script>

<style>
  .main-bottom { background-color: violet; }
</style>
