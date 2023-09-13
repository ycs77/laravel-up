<template>
  <div class="px-4 py-8 max-w-screen-md mx-auto">
    <header class="pt-12 text-center sm:pt-24">
      <h1 class="text-6xl font-black sm:text-7xl">
        <span class="text-red-500">Laravel</span> Up
      </h1>
      <h2 class="mt-4 text-gray-500 sm:mt-8 sm:text-lg md:text-xl">
        Upgrade your Laravel application from Laravel source git repository.
      </h2>
    </header>

    <section class="mt-16 sm:mt-24">
      <h2 class="text-xl font-medium text-gray-700">
        Select version...
      </h2>

      <div class="mt-4 flex items-center h-40px mx-auto space-x-4 sm:w-400px">
        <select
          class="h-full flex-1 bg-transparent text-gray-600 border-b border-gray-500 focus:outline-none"
          v-model="startTag"
        >
          <option v-for="tag in tags">{{ tag }}</option>
        </select>

        <HeroiconsOutlineArrowSmRight class="text-red-500" />

        <select
          class="h-full flex-1 bg-transparent text-gray-600 border-b border-gray-500 focus:outline-none"
          v-model="endTag"
        >
          <option v-for="tag in tags">{{ tag }}</option>
        </select>
      </div>
    </section>

    <section class="mt-16">
      <h2 class="text-xl font-medium text-gray-700">
        Run upgrade script...
      </h2>

      <div class="mt-4 px-5 py-3 bg-red-100 text-red-700 text-sm font-semibold border border-red-400 rounded-md">
        Backup your application before running the script
      </div>

      <CodeBlock class="mt-6" :content="code1" />
      <CodeBlock class="mt-6" :content="code2" />
      <CodeBlock class="mt-6" :content="code3" />
    </section>

    <a href="https://github.com/ycs77/laravel-up" class="block absolute top-4 right-4 sm:top-6 sm:right-6" target="_blank" rel="noopener noreferrer" aria-label="GitHub repository link">
      <CarbonLogoGithub class="w-8 h-8 text-gray-500" />
    </a>

    <footer class="mt-12 text-center text-gray-500 text-sm">
      built by <a href="https://github.com/ycs77" class="text-red-600 font-medium" target="_blank" rel="noopener noreferrer">@ycs77</a>, powered by <a href="https://nuxt.com/" class="text-red-600 font-medium" target="_blank" rel="noopener noreferrer">Nuxt</a>
    </footer>
  </div>
</template>

<script setup lang="ts">
import HeroiconsOutlineArrowSmRight from '~icons/heroicons-outline/arrow-sm-right'
import CarbonLogoGithub from '~icons/carbon/logo-github'

useServerSeoMeta({
  title: 'Laravel Up',
  description: 'Upgrade your Laravel application from Laravel source git repository.',
})

const config = useRuntimeConfig()

const { data } = await useFetch('/api/tags')
const { tags, startTag: defaultStartTag, endTag: defaultEndTag } = data.value!

const startTag = ref(defaultStartTag)
const endTag = ref(defaultEndTag)

const code1 = computed(() => `curl -s "${config.public.baseUrl}/up/${startTag.value}...${endTag.value}" | bash`)
const code2 = computed(() => `curl -s "${config.public.baseUrl}/up/${startTag.value}...${endTag.value}/2" | bash`)
const code3 = computed(() => `curl -s "${config.public.baseUrl}/up/${startTag.value}...${endTag.value}/3" | bash`)
</script>
