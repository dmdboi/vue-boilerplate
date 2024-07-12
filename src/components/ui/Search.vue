<template>
  <div class="relative flex-1 ml-auto md:grow-0">
    <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
    <Input type="search" placeholder="Search..." class="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]" />
  </div>
</template>

<script setup lang="ts">
import { Search } from "lucide-vue-next";

import { Input } from "@/components/ui/input";
</script>
