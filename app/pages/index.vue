<script setup lang="ts">
import AboutSection from "~/components/aboutSection.vue";
import SkillsSection from "~/components/skillsSection.vue";
import ExperienceSection from "~/components/experienceSection.vue";
import ProjectsSection from "~/components/projectsSection.vue";
</script>

<template>
  <div class="w-full">
    <div class="border-x border-dashed min-h-screen">

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