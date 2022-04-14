<template>
  <div class="p-6 max-w-screen-md mx-auto">
    <header class="pt-12 text-center sm:pt-24">
      <h1 class="text-6xl font-black sm:text-7xl">
        <span class="text-red-500">Laravel</span> Up
      </h1>
      <h2 class="mt-4 text-lg text-gray-500 sm:mt-8 sm:text-xl">
        Upgrade your Laravel application to new version.
      </h2>
    </header>

    <section class="mt-16 sm:mt-24">
      <h2 class="text-xl font-medium text-gray-700">
        Select version...
      </h2>

      <div class="mt-4 flex items-center h-40px mx-auto space-x-4 sm:w-400px">
        <select
          class="h-full flex-1 text-gray-600 border-b border-gray-500 focus:outline-none"
          v-model="startTag"
        >
          <option v-for="tag in tags">{{ tag }}</option>
        </select>

        <HeroiconsOutlineArrowSmRight class="text-red-500" />

        <select
          class="h-full flex-1 text-gray-600 border-b border-gray-500 focus:outline-none"
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

      <div class="mt-4 px-5 py-3 bg-red-100 text-red-600 text-sm font-semibold rounded-md">
        Backup your application before running the script
      </div>

      <CodeBlock class="mt-6" :content="code1" />
      <CodeBlock class="mt-6" :content="code2" />
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroiconsOutlineArrowSmRight from '~icons/heroicons-outline/arrow-sm-right'
import semverMajor from 'semver/functions/major.js'
import { base_url } from '@/logic/url'
import tags from '@/data/tags.json'

const latestTag = tags[0]

function defaultStartTag() {
  const latestTagMajor = semverMajor(latestTag)
  const version =
    tags.includes(`v${latestTagMajor - 1}.0.0`) ? `v${latestTagMajor - 1}.0.0` :
    tags.includes(`v${latestTagMajor}.0.0`) ? `v${latestTagMajor}.0.0` :
    latestTag
  return version
}

const startTag = ref(defaultStartTag())
const endTag = ref(latestTag)

const code1 = computed(() => `curl -s "${base_url}/up/${startTag.value}...${endTag.value}" | bash`)
const code2 = computed(() => `curl -s "${base_url}/up/${startTag.value}...${endTag.value}/2" | bash`)
</script>
