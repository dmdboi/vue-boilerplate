<template>
  <Breadcrumb class="hidden text-white md:flex">
    <BreadcrumbItem v-if="currentRoute.meta.previousRoute">
      <BreadcrumbLink as-child>
        <RouterLink :to="{ name: currentRoute.meta.previousRoute ? currentRoute.meta.previousRoute as string : 'Dashboard' }" class="flex items-center space-x-2 text-white">
          <MoveLeft class="w-4 h-4" />
          <span> Back to {{ currentRoute.meta.previousRoute }} </span>
        </RouterLink>
      </BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem v-else>
      {{ currentRoute.name }}
    </BreadcrumbItem>
  </Breadcrumb>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { MoveLeft } from "lucide-vue-next";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { computed } from "vue";

const router = useRouter();
const currentRoute = computed(() => router.currentRoute.value);
</script>
