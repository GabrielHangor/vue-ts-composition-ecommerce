<template>
  <aside
    class="md:z-1 fixed top-0 left-0 z-10 flex h-full min-h-[100vh] w-full flex-col items-center overflow-hidden bg-white p-4 transition-[opacity] duration-300 ease-in md:pointer-events-auto md:relative md:relative md:col-span-4 md:w-auto md:p-1 md:opacity-100 lg:col-span-3"
    :class="isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'"
  >
    <div v-show="isLoading" class="absolute z-10 h-full w-full cursor-wait backdrop-grayscale"></div>
    <img
      @click="$emit('closeMobileFilters')"
      class="absolute top-0 right-0 p-4 md:hidden"
      src="/burger-closed.svg"
      alt="Burger close icon"
    />

    <PriceRangeFilter
      ref="priceRangeFilter"
      v-if="initialPriceBoundaries.minPrice"
      :initial-price-boundaries="initialPriceBoundaries"
      :price-range="priceRange"
      :is-loading="isLoading"
      v-bind="$attrs"
    />

    <CarTypeFilter ref="carTypeFilter" :vehicles-type-count="vehiclesTypeCount" v-bind="$attrs" />

    <BaseButton @click="resetFilters" variant="transparent" class="w-full">Reset</BaseButton>
  </aside>
</template>

<script lang="ts" setup>
  import type { PropType, Ref } from 'vue';
  import PriceRangeFilter from '@/components/OurCarsSection/PriceRangeFilter.vue';
  import type { IPriceRange, IVehiclesTypeCount } from '@/interfaces';
  import CarTypeFilter from '@/components/OurCarsSection/CarTypeFilter.vue';
  import BaseButton from '@/components/BaseButton.vue';
  import { ref } from 'vue';

  interface IPriceRangeFilter extends Ref<InstanceType<typeof PriceRangeFilter>> {
    minPrice: number | null;
    maxPrice: number | null;
  }

  interface ICarTypeFilter extends Ref<InstanceType<typeof CarTypeFilter>> {
    activeCarTypeFilters: string[];
  }

  const props = defineProps({
    isOpen: { type: Boolean as PropType<boolean>, required: true },
    isLoading: { type: Boolean as PropType<boolean>, default: false },
    initialPriceBoundaries: { type: Object as PropType<IPriceRange>, required: true },
    priceRange: { type: Object as PropType<IPriceRange> },
    vehiclesTypeCount: { type: Object as PropType<IVehiclesTypeCount>, required: true },
  });

  const priceRangeFilter = ref<IPriceRangeFilter>();
  const carTypeFilter = ref<ICarTypeFilter>();

  const emit = defineEmits<{
    (e: 'resetFilters'): void;
  }>();

  const resetFilters = () => {
    emit('resetFilters');

    if (priceRangeFilter.value) {
      priceRangeFilter.value.minPrice = props.initialPriceBoundaries?.minPrice;
      priceRangeFilter.value.maxPrice = props.initialPriceBoundaries?.maxPrice;
    }

    if (carTypeFilter.value) carTypeFilter.value.activeCarTypeFilters.length = 0;
  };
</script>
