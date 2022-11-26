<template>
  <div class="container order-1 mx-auto px-4 md:order-2">
    <h1 class="py-3 text-2xl font-bold text-gray-600 md:py-10 md:text-3xl">
      {{ heading }}
      <span class="text-sm font-semibold text-gray-400 md:text-base">({{ carsTotal }})</span>
    </h1>
  </div>
</template>

<script lang="ts" setup>
  import type { PropType } from 'vue';

  const props = defineProps({
    heading: { type: String as PropType<string>, required: true },
    carsTotal: { type: Number as PropType<number> },
  });
</script>
