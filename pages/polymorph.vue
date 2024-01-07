<template>
  <h1>Polymorphs</h1>
  <div v-for="(block, index) in composition" :key="index">
    <component :is="getComponent(block)" />
  </div>
</template>
<script setup>
import header from "@/components/header.vue";
import image from "@/components/image.vue";
import paragraph from "@/components/paragraph.vue";

const composition = ["header", "paragraph", "image", "paragraph"];

const getComponent = (name) => {
  switch (name) {
    case "header":
      return header;
    case "image":
      return image;
    case "paragraph":
      return paragraph;
  }
};
</script>
