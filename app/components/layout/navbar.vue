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
    <div class="flex justify-center gap-4 px-2 py-4">
      <UButton
          v-for="item in navItems"
          :key="item.section"
          variant="ghost"
          color="neutral"
          size="xs"
          class="text-xl px-4 py-2 font-mono"
          @click="navigate(item.section)"
      >
        {{ item.label }}
      </UButton>
    </div>
  </div>
</template>

<style scoped>

</style>
