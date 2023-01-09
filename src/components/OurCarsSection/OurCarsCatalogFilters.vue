<template>
  <aside
    class="fixed top-0 left-0 h-full overflow-hidden px-1 transition-[width] duration-300 ease-in-out md:relative md:col-span-4 md:w-auto lg:col-span-3"
    :class="isOpen ? 'w-full' : 'w-0'"
  >
    <img
      @click="$emit('closeMobileFilters')"
      class="absolute right-0 p-4 md:hidden"
      src="/burger-closed.svg"
      alt="Burger close icon"
    />

    <PriceRangeFilter :is-loading="isLoading" v-bind="$attrs" />
  </aside>
</template>

<script lang="ts" setup>
  import type { PropType } from 'vue';
  import PriceRangeFilter from '@/components/OurCarsSection/PriceRangeFilter.vue';

  const props = defineProps({
    isOpen: { type: Boolean as PropType<boolean>, required: true },
    isLoading: { type: Boolean as PropType<boolean>, default: false },
  });
</script>
