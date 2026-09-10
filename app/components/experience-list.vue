<script setup lang="ts">
import type { WorkExperience } from '~/types/work-exp'

defineProps<{
  experiences: WorkExperience[]
}>()
</script>

<template>
  <ul class="divide-y divide-white/10">
    <li
      v-for="experience in experiences"
      :key="experience.id"
      class="py-5 first:pt-0 last:pb-0 sm:py-6"
    >
      <div class="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div class="min-w-0">
          <h3 class="text-lg font-semibold sm:text-xl">
            {{ experience.position }}
          </h3>
          <p class="mt-0.5 font-mono text-sm text-primary-500">
            {{ experience.company }}
          </p>
        </div>
        <p class="shrink-0 font-mono text-xs text-neutral-500 sm:pt-1 sm:text-right">
          {{ experience.period }}<br class="hidden sm:block">
          <span class="sm:hidden"> · </span>{{ experience.location }} · {{ experience.type }}
        </p>
      </div>

      <p class="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-300 sm:text-base">
        {{ experience.description }}
      </p>

      <ul class="mt-3 space-y-1">
        <li
          v-for="achievement in experience.achievements"
          :key="achievement"
          class="flex gap-2 text-sm text-neutral-400"
        >
          <span class="select-none font-mono text-primary-500">›</span>
          <span>{{ achievement }}</span>
        </li>
      </ul>

      <p class="mt-3 font-mono text-xs text-neutral-500">
        {{ experience.technologies.join(' · ') }}
      </p>
    </li>
  </ul>
</template>
