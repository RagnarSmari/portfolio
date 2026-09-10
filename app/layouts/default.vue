<script setup lang="ts">
import Navbar from "~/components/layout/navbar.vue";
import Starbackground from "~/components/starbackground.vue";
</script>

<template>
  <div class="relative min-h-screen bg-black">
    <div class="fixed inset-0 z-0 pointer-events-none">
      <Starbackground />
    </div>
    <div class="relative z-10 flex justify-center">
      <div class="container">
        <!-- <Navbar /> -->
        <div class="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60">
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
