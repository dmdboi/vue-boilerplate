<template>
  <aside class="fixed inset-y-0 left-0 z-10 flex-col hidden border-r w-14 bg-background sm:flex">
    <nav class="flex flex-col items-center gap-4 px-2 sm:py-5">
      <TooltipProvider v-for="route in sidebarRoutes">
        <Tooltip>
          <TooltipTrigger as-child>
            <RouterLink :to="route.path" class="flex items-center justify-center transition-colors rounded-lg h-9 w-9 text-muted-foreground hover:text-foreground md:h-8 md:w-8">
              <component :is="route.icon" class="w-5 h-5" />
              <span class="sr-only">
                {{ route.name }}
              </span>
            </RouterLink>
          </TooltipTrigger>
          <TooltipContent side="right"> {{ route.name }} </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { sidebarRoutes } from "@/utils";
</script>
