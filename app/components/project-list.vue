<script setup lang="ts">
import type { Project } from '~/types/project'

defineProps<{
  projects: Project[]
}>()
</script>

<template>
  <ul class="divide-y divide-white/10">
    <li
      v-for="project in projects"
      :key="project.id"
      class="py-5 first:pt-0 last:pb-0 sm:py-6"
    >
      <div class="flex items-start justify-between gap-4">
        <div class="min-w-0">
          <h3 class="text-lg font-semibold sm:text-xl">
            {{ project.title }}
          </h3>
          <p class="mt-0.5 font-mono text-xs text-neutral-500">
            {{ project.category }} · {{ project.status }}
          </p>
        </div>

        <div class="flex shrink-0 gap-3 pt-1 font-mono text-sm">
          <NuxtLink
            v-if="project.liveUrl"
            :to="project.liveUrl"
            external
            target="_blank"
            class="text-primary-500 hover:underline"
          >
            live ↗
          </NuxtLink>
          <NuxtLink
            v-if="project.githubUrl"
            :to="project.githubUrl"
            external
            target="_blank"
            class="text-neutral-400 hover:text-neutral-200 hover:underline"
          >
            source ↗
          </NuxtLink>
        </div>
      </div>

      <p class="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-300 sm:text-base">
        {{ project.description }}
      </p>

      <p class="mt-2 font-mono text-xs text-neutral-500">
        {{ project.technologies.join(' · ') }}
      </p>
    </li>
  </ul>
</template>
