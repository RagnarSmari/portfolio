<script setup lang="ts">
import Navbar from "~/components/layout/navbar.vue";
import Starbackground from "~/components/star-background.vue";
</script>

<template>
  <div class="relative min-h-screen bg-black">
    <div class="fixed inset-0 z-0 pointer-events-none">
      <Starbackground />
    </div>
    <div class="relative z-10 flex justify-center">
      <div class="container min-h-dvh flex flex-col">
        <Navbar />
        <div class="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60 flex-1 flex flex-col">
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
