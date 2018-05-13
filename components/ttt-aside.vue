<template>
  <aside>
    <h3>People</h3>

    <ul>
      <li v-for="person in getPeople()">
        {{ person.displayName }}
      </li>
    </ul>

    <ttt-aside-player
    v-for="player in getPlayers()"
    :key="player.id"
    :data="player.data"
    :name="player.data.displayName"
    :player-id="player.id"></ttt-aside-player>

  </aside>
</template>

<script>
  module.exports = {
    methods: {
      getPeople() {
        return app.$store.getters.people;
      },
      getPlayers() {
        var p1 = app.$store.getters.getPlayer(1);
        var p2 = app.$store.getters.getPlayer(2);
        var list = [];
        if (p1 != null) list.push({ id: 1, data: p1 });
        if (p2 != null) list.push({ id: 2, data: p2 });
        return list;
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
