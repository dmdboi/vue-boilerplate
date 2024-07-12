<template>
  <div class="flex items-center h-screen px-6 md:px-0">
    <Card class="w-full mx-auto xl:w-1/5">
      <CardHeader>
        <CardTitle class="text-xl"> Sign In </CardTitle>
        <CardDescription> Welcome back 👋 </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid gap-4">
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div class="grid gap-2">
            <Label for="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <Button type="submit" class="w-full"> Create an account </Button>
          <Button variant="outline" class="w-full"> Sign up with GitHub </Button>
        </div>
        <div class="mt-4 text-sm text-center">
          Don't have an account?
          <RouterLink to="/signup" class="underline"> Sign up </RouterLink>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
</script>
