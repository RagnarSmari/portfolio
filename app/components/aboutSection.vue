<script setup lang="ts">

</script>

<template>
  <div class="flex items-center justify-center min-h-screen px-4">
    <div class="text-center max-w-4xl mx-auto">
      <!-- Name -->
      <h1 class="text-2xl sm:text-3xl md:text-4xl font-light mb-4">
        Hi, I am <span class="font-semibold text-primary-500">Ragnar</span>
      </h1>

      <!-- Title -->
      <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  leading-tight">
        Software Developer
      </h2>
      <div class="max-w-3xl mx-auto mb-4 md:mb-12">
        <p class="text-lg sm:text-xl leading-relaxed font-light">
          based in Akureyri, Iceland.
        </p>
        <p class="text-lg sm:text-xl leading-relaxed font-light">
          Also a father and a 
          <span class="font-medium text-warning-500">Star Wars</span>
          fanatic.
        </p>
      </div>
      
      <div class="max-w-3xl mx-auto">
        <p class="text-lg sm:text-xl leading-relaxed font-light">
          I like
          <span class="font-medium text-primary-500">C#</span> and
          <span class="font-medium text-primary-500">Golang</span>.
        </p>
        <p class="text-lg sm:text-xl leading-relaxed font-light">
          I also like to make life easier for those around me with software
        </p>
        <p class="text-lg sm:text-xl leading-relaxed font-light">
          I'm also starting the typical home server journey...
        </p>
      </div>
      <!-- Visual elements -->
      <div class="mt-12 md:mt-16 flex justify-center space-x-4">
        <div class="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
        <div class="w-2 h-2 bg-primary-500 rounded-full animate-pulse delay-150"></div>
        <div class="w-2 h-2 bg-primary-500 rounded-full animate-pulse delay-300"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>