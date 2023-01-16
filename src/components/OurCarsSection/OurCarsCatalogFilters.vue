<template>
  <aside
    class="md:z-1 fixed top-0 left-0 z-10 flex h-full min-h-[100vh] w-full flex-col items-center overflow-hidden bg-white p-4 transition-[opacity] duration-300 ease-in md:pointer-events-auto md:relative md:relative md:col-span-4 md:w-auto md:p-1 md:opacity-100 lg:col-span-3"
    :class="isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'"
  >
    <img
      @click="$emit('closeMobileFilters')"
      class="absolute top-0 right-0 p-4 md:hidden"
      src="/burger-closed.svg"
      alt="Burger close icon"
    />

    <PriceRangeFilter
      v-if="initialPriceBoundaries.minPrice"
      :initial-price-boundaries="initialPriceBoundaries"
      :price-range="priceRange"
      :is-loading="isLoading"
      v-bind="$attrs"
    />
  </aside>
</template>

<script lang="ts" setup>
  import type { PropType } from 'vue';
  import PriceRangeFilter from '@/components/OurCarsSection/PriceRangeFilter.vue';
  import type { IPriceRange } from '@/interfaces';

  const props = defineProps({
    isOpen: { type: Boolean as PropType<boolean>, required: true },
    isLoading: { type: Boolean as PropType<boolean>, default: false },
    initialPriceBoundaries: { type: Object as PropType<IPriceRange>, required: true },
    priceRange: { type: Object as PropType<IPriceRange> },
  });
</script>
