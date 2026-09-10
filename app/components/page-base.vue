<script setup lang="ts">
const props = defineProps<{
  title?: string
  subtitle?: string
}>()
</script>

<template>
  <div class="mt-8 mb-12 w-full rounded-4xl border border-white/10 bg-gray-900/40 backdrop-blur-sm sm:mt-12 md:mt-16">
    <div class="p-5 sm:p-8 md:p-10">
      <PageBaseTitle
        v-if="props.title"
        :title="props.title"
        :subtitle="props.subtitle"
      />
      <slot />
    </div>
  </div>
</template>
