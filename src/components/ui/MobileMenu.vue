<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button size="icon" variant="outline" class="sm:hidden">
        <PanelLeft class="w-5 h-5" />
        <span class="sr-only">Toggle Menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" class="sm:max-w-xs">
      <nav class="grid gap-6 px-6 text-lg font-medium">
        <RouterLink
          v-for="route in sidebarRoutes"
          :to="route.path"
          class="flex items-center justify-center w-10 h-10 gap-2 text-lg font-semibold group shrink-0 text-primary md:text-base">
          <span>{{ route.name }}</span>
        </RouterLink>
      </nav>
    </SheetContent>
  </Sheet>
</template>

<script setup lang="ts">
import { PanelLeft } from "lucide-vue-next";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { sidebarRoutes } from "@/utils";
</script>
