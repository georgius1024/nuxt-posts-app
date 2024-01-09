<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
<script setup>
import '@picocss/pico/css/pico.slim.css'

await callOnce(async () => {
  console.log('state init')
  useFavoritesStore();
})
</script>