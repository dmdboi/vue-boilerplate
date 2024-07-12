import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { Home } from "lucide-vue-next";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sidebarRoutes = [
  {
    name: "Home",
    path: "/",
    icon: Home,
  },
];
