<script setup lang="ts">
import AboutSection from '~/components/old/aboutSection.vue';
import ExperienceSection from '~/components/old/experienceSection.vue';
import ProjectsSection from '~/components/old/projectsSection.vue';
import SkillsSection from '~/components/old/skillsSection.vue';

</script>

<template>
  <div class="w-full">
    <div class="min-h-screen">
      <section id="about" class="min-h-screen">
        <AboutSection />
      </section>

      <section id="skills" class="min-h-screen">
        <SkillsSection />
      </section>

      <section id="experience" class="min-h-screen">
        <ExperienceSection />
      </section>

      <section id="projects" class="min-h-screen">
        <ProjectsSection />
      </section>
    </div>
  </div>
</template>
