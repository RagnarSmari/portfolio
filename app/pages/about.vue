<script setup lang="ts">
import { AboutParagraphs, Contact } from '~/data/about'
</script>

<template>
  <PageBase
    title="About me"
    subtitle="A little about who I am outside the code"
  >
    <div class="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-12">
      <div class="space-y-4 text-sm leading-relaxed text-neutral-300 sm:text-base md:col-span-3">
        <p
          v-for="(paragraph, index) in AboutParagraphs"
          :key="index"
        >
          {{ paragraph }}
        </p>

        <div class="pt-4">
          <h3 class="font-mono text-sm text-neutral-500">
            Get in touch
          </h3>
          <div class="mt-2 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
            <NuxtLink
              to="mailto:raggism98@gmail.com"
              external
              class="text-primary-500 hover:underline"
            >
              email ↗
            </NuxtLink>
            <NuxtLink
              :to="Contact.github"
              external
              target="_blank"
              class="text-neutral-400 hover:text-neutral-200 hover:underline"
            >
              github ↗
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="md:col-span-2">
        <NuxtImg
          src="/family.jpg"
          alt="Ragnar with his family at an outdoor concert"
          width="1200"
          height="1600"
          sizes="100vw md:400px"
          class="w-full rounded-2xl border border-white/10 object-cover"
        />
      </div>
    </div>
  </PageBase>
</template>
