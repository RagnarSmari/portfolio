<script setup lang="ts">
import { Experiences } from '~/data/work-experiences'
</script>

<template>
  <PageBase
    title="Professional Experience"
    subtitle="Places I've worked and what I did there"
  >
    <ExperienceList :experiences="Experiences" />
  </PageBase>
</template>
