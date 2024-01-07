<template>
  <h1>Posts</h1>
  <div v-if="pending">Loading</div>
  <div v-else>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/posts/${post.id}`"> {{ post.title }} </NuxtLink>
        <span v-if="marked(post.id)">
          ★
        </span>
      </li>
    </ul>
  </div>
  <hr>
  <NuxtLink to="/">Back</NuxtLink>
</template>
<script setup>
const {data: posts, pending} = useFetchPosts()

const favorites = useFavoritesStore();

const marked = computed(() => (id) => Boolean(favorites.value[id]));

</script>