<template>
  <aside
    class="md:z-1 fixed top-0 left-0 z-10 flex h-full min-h-[100vh] w-full flex-col items-center overflow-hidden overflow-y-auto bg-white p-5 transition-[opacity] duration-300 ease-in md:pointer-events-auto md:relative md:relative md:col-span-4 md:w-auto md:overflow-y-hidden md:p-1 md:opacity-100 lg:col-span-3"
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
      <CarTypeFilter
        ref="carTypeFilter"
        :vehicles-type-count="vehiclesCountByFilter.carType"
        :vehicles-min-rental-cost-by-car-type="minRentalCostByFilter.carType"
        v-bind="$attrs"
      />
      <CarModelFilter
        v-bind="$attrs"
        :vehicles-min-rental-cost-by-car-model="minRentalCostByFilter.model"
        :vehicles-model-count="vehiclesCountByFilter.model"
      />
      <CarCapacityFilter
        v-bind="$attrs"
        :vehicles-min-rental-cost-by-car-capacity="minRentalCostByFilter.capacity"
        :vehicles-capacity-count="vehiclesCountByFilter.capacity"
      />
      <CarTransmissionFilter
        v-bind="$attrs"
        :vehicles-min-rental-cost-by-car-transmission="minRentalCostByFilter.transmission"
        :vehicles-transmission-count="vehiclesCountByFilter.transmission"
      />
      <CarDepositFilter
        v-bind="$attrs"
        :vehicles-min-rental-cost-by-car-deposit="minRentalCostByFilter.deposit"
        :vehicles-deposit-count="vehiclesCountByFilter.deposit"
      />
      <CarVideoRecorderFilter
        v-bind="$attrs"
        :vehicles-min-rental-cost-by-video-recorder="minRentalCostByFilter.videoRecorder"
        :vehicles-video-recorder-count="vehiclesCountByFilter.videoRecorder"
      />
      <CarBabySeatFilter
        v-bind="$attrs"
        :vehicles-baby-seat-count="vehiclesCountByFilter.babySeat"
        :vehicles-min-rental-cost-by-baby-seat="minRentalCostByFilter.babySeat"
      />
    </template>

    <BaseButton
      @click="resetFilters"
      variant="transparent"
      class="mb-10 w-full md:mb-0"
      :is-disabled="isResetBtnDisabled"
      >Reset</BaseButton
    >
  </aside>
</template>

<script lang="ts" setup>
  import type { Ref } from 'vue';
  import PriceRangeFilter from '@/components/OurCarsSection/PriceRangeFilter.vue';
  import type {
    IPriceRange,
    IVehiclesCountGroupedByFilterType,
    IVehiclesMinRentalCostGroupedByFilterType,
  } from '@/interfaces';
  import CarTypeFilter from '@/components/OurCarsSection/CarTypeFilter.vue';
  import BaseButton from '@/components/BaseButton.vue';
  import { computed, nextTick, ref } from 'vue';
  import CarModelFilter from '@/components/OurCarsSection/CarModelFilter.vue';
  import CarCapacityFilter from '@/components/OurCarsSection/CarCapacityFilter.vue';
  import CarTransmissionFilter from '@/components/OurCarsSection/CarTransmissionFilter.vue';
  import CarDepositFilter from '@/components/OurCarsSection/CarDepositFilter.vue';
  import CarVideoRecorderFilter from '@/components/OurCarsSection/CarVideoRecorderFilter.vue';
  import CarBabySeatFilter from '@/components/OurCarsSection/CarBabySeatFilter.vue';

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

  interface ICarTypeFilter extends Ref<InstanceType<typeof CarTypeFilter>> {
    activeCarTypeFilters: string[];
  }

  const props = defineProps<Props>();

  const priceRangeFilter = ref<IPriceRangeFilter>();
  const carTypeFilter = ref<ICarTypeFilter>();

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

    if (carTypeFilter.value) carTypeFilter.value.activeCarTypeFilters.length = 0;

    emit('resetFilters');
  };

  // RESET BTN STATE
  const hasActiveCarTypeFilters = computed(() => carTypeFilter.value?.activeCarTypeFilters.length !== 0);

  const hasPriceRangeChanged = computed(() => {
    const { minPrice: rangeMinPrice, maxPrice: rangeMaxPrice } = props.priceRange;
    const { minPrice: initialMinPrice, maxPrice: initialMaxPrice } = props.initialPriceBoundaries;

    return rangeMinPrice !== initialMinPrice || rangeMaxPrice !== initialMaxPrice;
  });

  const filtersActiveStateArr = computed(() => {
    return [hasPriceRangeChanged.value, hasActiveCarTypeFilters.value];
  });

  const isResetBtnDisabled = computed(() => !filtersActiveStateArr.value.find((el) => el));
</script>
