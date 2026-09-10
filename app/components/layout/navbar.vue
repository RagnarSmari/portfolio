<script setup lang="ts">

const navItems = [
  { label: 'Home', section: '/' },
  { label: 'About', section: '/about' },
  { label: 'Work', section: '/work' },
  { label: 'Projects', section: '/projects' },
  // { label: 'Contact', section: '/contact' }
]

function navigate(url: string){
  navigateTo(url);
}
</script>

<template>
  <div class="">
    <div class="flex flex-wrap justify-center gap-1 px-2 py-3 sm:gap-4 sm:py-4">
      <UButton
          v-for="item in navItems"
          :key="item.section"
          variant="ghost"
          color="neutral"
          size="xs"
          class="px-2 py-1.5 font-mono text-base sm:px-4 sm:py-2 sm:text-xl"
          @click="navigate(item.section)"
      >
        {{ item.label }}
      </UButton>
    </div>
  </div>
</template>

<style scoped>

</style>
