<script setup lang="ts">
const props = defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="mb-8 md:mb-10">
    <h2 class="font-mono text-2xl font-bold sm:text-3xl md:text-4xl">
      {{ props.title }}
    </h2>
    <p
      v-if="props.subtitle"
      class="mt-2 max-w-3xl font-mono text-base text-neutral-400 sm:text-lg"
    >
      {{ props.subtitle }}
    </p>
  </div>
</template>
