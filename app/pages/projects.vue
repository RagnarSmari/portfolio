<script setup lang="ts">
import { Projects } from '~/data/projects'
</script>

<template>
  <PageBase
    title="Projects"
    subtitle="A few things I've built during my time"
  >
    <ProjectList :projects="Projects" />
  </PageBase>
</template>
