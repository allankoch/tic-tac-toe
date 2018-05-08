<template>
  <aside>
    <h3>Spectators</h3>
    <ul>
      <li>Allan</li>
      <li>Rene</li>
      <li>Morten</li>
    </ul>
    <hr>
    <ttt-aside-player :name="'Allan'" :player-id="1"></ttt-aside-player>
    <hr>
    <ttt-aside-player :name="'Rene'" :player-id="2"></ttt-aside-player>
  </aside>
</template>

<script>
  module.exports = {
    methods: {
      test() {
        alert('testing');
      }
    },
    components: {
      'ttt-aside-player': httpVueLoader('./ttt-aside-player.vue')
    }
  }
</script>

<style>
  aside { background-color: green; }
</style>
