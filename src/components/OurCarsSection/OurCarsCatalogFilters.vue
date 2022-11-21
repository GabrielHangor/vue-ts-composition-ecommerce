<template>
  <div
    class="fixed top-0 left-0 h-full overflow-hidden bg-green-50   transition-[width] duration-300 ease-in-out md:relative md:col-span-4 md:w-auto"
    :class="isOpen ? 'w-full' : 'w-0'"
  >
    left
  </div>
</template>

<script lang="ts" setup>
  import type { PropType } from 'vue';

  const props = defineProps({
    isOpen: { type: Boolean as PropType<boolean>, required: true },
  });
</script>
