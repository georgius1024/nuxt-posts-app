<template>
  <div v-if="pending">Loading</div>
  <div v-else>
    <a style="float:right" href="#" role="button" @click.prevent="toggle">
      <span v-if="marked"> Remove from favorites </span>
      <span v-else> ★ Add to favorites </span>
    </a>

    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
  <hr />
  <NuxtLink to="/posts">Back</NuxtLink>
</template>
<script setup>
import { computed } from "vue";
const route = useRoute();
const id = route.params.id;
const { data: post, pending } = await useFetchPost(id);
const favorites = useFavoritesStore();

const marked = computed(() => Boolean(favorites.value[id]));
const toggle = () => (favorites.value[id] = !favorites.value[id]);
</script>
