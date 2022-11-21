<template>
  <div class="container mx-auto px-4 md:px-0 order-1 md:order-2">
    <h1 class="py-3 md:py-10 text-2xl font-bold text-gray-600 md:text-3xl">
      {{ heading }}
      <span class="text-sm font-semibold md:text-base text-gray-400">({{ computedAmount }})</span>
    </h1>
  </div>
</template>

<script lang="ts" setup>
  import type { PropType } from 'vue';

  const props = defineProps({
    heading: { type: String as PropType<string>, required: true },
    computedAmount: { type: String as PropType<string> },
  });
</script>
