<template>
  <div class="mt-8 flex border border-red-500 rounded-md">
    <pre
      class="flex-1 px-5 py-3 overflow-x-auto cursor-pointer"
      @click="copyCode"
    >$ {{ content }}</pre>

    <div class="flex items-center px-1">
      <button class="p-1" @click="copyCode">
        <HeroiconsOutlineDuplicate v-if="!copied" class="text-gray-400 w-6 h-6" />
        <HeroiconsOutlineCheckCircle v-else class="text-green-500 w-6 h-6" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import HeroiconsOutlineDuplicate from '~icons/heroicons-outline/duplicate'
import HeroiconsOutlineCheckCircle from '~icons/heroicons-outline/check-circle'

const props = defineProps<{
  content: string
}>()

const { copy, copied } = useClipboard()

const copyCode = () => {
  copy(props.content)
}
</script>
