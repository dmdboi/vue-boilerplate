<template>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

import { Button } from "@/components/ui/button";
</script>
