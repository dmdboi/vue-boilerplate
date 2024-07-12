<template>
  <main>
    <h1>
      {{ route.name }}
    </h1>
  </main>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

console.log(route);
</script>
