<template>
  <h2>{{ $route.params.type }} [id] - {{ $route.params.id }}</h2>
</template>

<script setup>
const route = useRoute()
console.log('Rent [id] - ', route.params.id)
</script>
