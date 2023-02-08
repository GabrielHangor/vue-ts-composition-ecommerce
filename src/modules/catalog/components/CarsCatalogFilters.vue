<template>
  <aside
    class="md:z-1 fixed top-0 left-0 z-10 flex h-fit min-h-[100vh] w-full flex-col items-center overflow-hidden overflow-y-auto bg-white p-5 transition-[opacity] duration-300 ease-in md:pointer-events-auto md:relative md:col-span-4 md:w-auto md:overflow-y-hidden md:p-1 md:opacity-100 lg:col-span-3"
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

    <template v-if="vehiclesCountByFilter && minRentalCostByFilter">
      <CarCollapsibleFilter
        v-for="filter in filterColumns"
        :key="filter"
        v-bind="$attrs"
        ref="collapsibleFilters"
        :vehicles-count-filter="vehiclesCountByFilter[filter]"
        :vehicles-min-rental-cost-by-filter="minRentalCostByFilter[filter]"
        :filter-type="filter"
      />
    </template>

    <BaseButton
      @click="resetFilters"
      variant="transparent"
      class="mb-10 w-full md:mb-0"
      :is-disabled="isResetBtnDisabled"
    >
      Reset
    </BaseButton>
  </aside>
</template>

<script lang="ts" setup>
  import type { Ref } from 'vue';
  import PriceRangeFilter from '@/modules/catalog/components/PriceRangeFilter.vue';
  import type {
    IPriceRange,
    IVehiclesCountGroupedByFilterType,
    IVehiclesMinRentalCostGroupedByFilterType,
  } from '@/modules/catalog/models/catalog.interfaces';

  import BaseButton from '@/shared/components/BaseButton.vue';
  import { computed, nextTick, ref } from 'vue';
  import CarCollapsibleFilter from '@/modules/catalog/components/CarCollapsibleFilter.vue';
  import { filterColumns } from '@/modules/catalog/catalog.constants';

  interface Props {
    isOpen: boolean;
    isLoading?: boolean;
    initialPriceBoundaries: IPriceRange;
    priceRange: IPriceRange;
    vehiclesCountByFilter: IVehiclesCountGroupedByFilterType;
    minRentalCostByFilter: IVehiclesMinRentalCostGroupedByFilterType;
  }

  interface IPriceRangeFilter extends Ref<InstanceType<typeof PriceRangeFilter>> {
    minPrice: number | null;
    maxPrice: number | null;
  }

  interface ICarFilter extends Ref<InstanceType<typeof CarCollapsibleFilter>> {
    activeCarFilters: string[];
  }

  const props = defineProps<Props>();

  const priceRangeFilter = ref<IPriceRangeFilter>();

  const collapsibleFilters = ref<ICarFilter[]>();

  const emit = defineEmits<{
    (e: 'resetFilters'): void;
    (e: 'disableWatchers'): void;
  }>();

  const resetFilters = async () => {
    emit('disableWatchers');
    await nextTick();

    if (priceRangeFilter.value) {
      priceRangeFilter.value.minPrice = props.initialPriceBoundaries?.minPrice;
      priceRangeFilter.value.maxPrice = props.initialPriceBoundaries?.maxPrice;
    }

    collapsibleFilters.value?.forEach((filter) => (filter.activeCarFilters.length = 0));

    emit('resetFilters');
  };

  // RESET BTN STATE
  const hasActiveCarFilters = computed(() => {
    return collapsibleFilters.value?.find((filter) => filter.activeCarFilters.length !== 0);
  });

  const hasPriceRangeChanged = computed(() => {
    const { minPrice: rangeMinPrice, maxPrice: rangeMaxPrice } = props.priceRange;
    const { minPrice: initialMinPrice, maxPrice: initialMaxPrice } = props.initialPriceBoundaries;

    return rangeMinPrice !== initialMinPrice || rangeMaxPrice !== initialMaxPrice;
  });

  const filtersActiveStateArr = computed(() => {
    return [hasPriceRangeChanged.value, hasActiveCarFilters.value];
  });

  const isResetBtnDisabled = computed(() => !filtersActiveStateArr.value.find((el) => el));
</script>
