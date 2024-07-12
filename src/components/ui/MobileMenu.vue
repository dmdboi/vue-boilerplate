<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button size="icon" variant="outline" class="sm:hidden">
        <PanelLeft class="w-5 h-5" />
        <span class="sr-only">Toggle Menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" class="sm:max-w-xs">
      <nav class="grid gap-6 text-lg font-medium">
        <a href="#" class="flex items-center justify-center w-10 h-10 gap-2 text-lg font-semibold rounded-full group shrink-0 bg-primary text-primary-foreground md:text-base">
          <Package2 class="w-5 h-5 transition-all group-hover:scale-110" />
          <span class="sr-only">Acme Inc</span>
        </a>
      </nav>
    </SheetContent>
  </Sheet>
</template>

<script setup lang="ts">
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
  CircleUser,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
} from "lucide-vue-next";
</script>
