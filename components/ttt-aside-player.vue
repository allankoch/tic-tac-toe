<template>
  <div>
    <h3>Player {{ playerId }}</h3>
    <p>{{ name }}</p>
    <button>Claim</button>
  </div>
</template>

<script>
  module.exports = {
    props: [
      'name',
      'playerId'
    ]
  }
</script>
