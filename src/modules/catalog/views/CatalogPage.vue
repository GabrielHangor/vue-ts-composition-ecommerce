<template>
  <div class="flex h-full w-full flex-col">
    <LocationAndTimeForm
      ref="locationAndTimeForm"
      :active-location-filters="activeLocationFilters"
      :is-loading="isLoading"
      @update-location-filters="updateLocationFilters"
    />
    <PageHeading heading="Our cars" :cars-total="vehiclesCount" />
    <OurCarsSectionWrapper>
      <template #filters>
        <OurCarsCatalogFilters
          :initial-price-boundaries="initialPriceBoundaries"
          :price-range="priceRange"
          :is-open="isCarCatalogFiltersOpen"
          :is-loading="isLoading"
          :vehicles-count-by-filter="vehiclesCountGroupedByFilterType"
          :min-rental-cost-by-filter="minRentalCostGroupedByFilterType"
          @disable-watchers="disableWatchers"
          @reset-filters="resetFilters"
          @close-mobile-filters="isCarCatalogFiltersOpen = false"
          @update-price-range="updatePriceRange"
          @update-car-type-filters="updateCarTypeFilters"
          @update-model-filters="updateCarModelFilters"
          @update-capacity-filters="updateCarCapacityFilters"
          @update-transmission-filters="updateCarTransmissionFilters"
          @update-deposit-filters="updateCarDepositFilters"
          @update-video-recorder-filters="updateCarVideoRecorderFilters"
          @update-baby-seat-filters="updateCarBabySeatFilters"
        />
      </template>
      <template #cars>
        <CarsCatalog
          :sort-by="sortBy"
          :vehicles="vehicles"
          :error="errorMessage"
          :is-loading="isLoading"
          :current-page="currentPage"
          :cars-total="vehiclesCount"
          :should-append-page="shouldAppendPage"
          :sort-order-a-s-c="sortOrderASC"
          @append-page="appendPage"
          @update-sort-type="updateSortType"
          @toggle-sort-order="toggleSortOrder"
          @change-current-page="changeCurrentPage"
          @open-mobile-filters="isCarCatalogFiltersOpen = true"
        />
      </template>
    </OurCarsSectionWrapper>
  </div>
</template>

<script lang="ts" setup>
  import LocationAndTimeForm from '@/modules/catalog/components/LocationAndTimeForm.vue';
  import CarsCatalog from '@/modules/catalog/components/CarsCatalog.vue';
  import OurCarsCatalogFilters from '@/modules/catalog/components/CarsCatalogFilters.vue';
  import OurCarsSectionWrapper from '@/modules/catalog/components/CarsSectionWrapper.vue';
  import PageHeading from '@/modules/catalog/components/PageHeading.vue';
  import { useCatalog } from '@/modules/catalog/composables/useCatalog';
  import { usePreventScroll } from '@/shared/composables/usePreventScroll';
  import { ref, watch, toRef, type Ref, nextTick } from 'vue';
  import type { ILocationAndTimeFormValues, IPriceRange } from '@/modules/catalog/models/catalog.models';
  import { useSearchParams } from '@/modules/catalog/composables/useSearchParams';
  import { debounce, scrollToTopSmoothly } from '@/modules/catalog/catalog.helpers';
  import { SortTypes } from '@/modules/catalog/models/catalog.models';

  interface ILocationAndTimeForm extends Ref<InstanceType<typeof LocationAndTimeForm>> {
    formValues: ILocationAndTimeFormValues;
  }

  const isCarCatalogFiltersOpen = ref(false);

  // RESET
  const disableWatchers = () => (isResetting.value = true);

  const resetFilters = async () => {
    activeLocationFilters.value.pickupFrom = '';
    if (locationAndTimeForm.value) locationAndTimeForm.value.formValues.pickupFrom = '';

    Object.assign(priceRange.value, {
      minPrice: initialPriceBoundaries.value.minPrice,
      maxPrice: initialPriceBoundaries.value.maxPrice,
    });

    await nextTick();

    await Promise.all([fetchVehicles(), fetchVehiclesCount(), fetchMinRentalCostByFilterType()]);

    isResetting.value = false;

    scrollToTopSmoothly();
  };

  const isResetting = ref<boolean>(false);

  // LOCATION
  const locationAndTimeForm = ref<ILocationAndTimeForm>();

  const activeLocationFilters = ref<ILocationAndTimeFormValues>({
    pickupFrom: '',
  } as ILocationAndTimeFormValues);

  const updateLocationFilters = (filters: ILocationAndTimeFormValues) => {
    Object.assign(activeLocationFilters.value, filters);
  };

  watch(
    activeLocationFilters,
    () => {
      if (isResetting.value) return;

      console.log('location watcher trigger');

      currentPage.value = 1;
      Promise.all([fetchVehicles(), fetchVehiclesCount(), fetchMinRentalCostByFilterType()]);
    },
    { deep: true }
  );

  // CAR TYPES
  const activeCarTypeFilters = ref<string[]>([]);
  const updateCarTypeFilters = (filters: string[]) => (activeCarTypeFilters.value = filters);

  watch(activeCarTypeFilters, () => {
    if (isResetting.value) return;

    console.log('car types watcher trigger');

    currentPage.value = 1;
    fetchVehicles();
  });

  // CAR MODELS
  const activeCarModelFilters = ref<string[]>([]);
  const updateCarModelFilters = (filters: string[]) => (activeCarModelFilters.value = filters);

  watch(activeCarModelFilters, () => {
    if (isResetting.value) return;

    console.log('car models watcher trigger');

    currentPage.value = 1;
    fetchVehicles();
  });

  // CAR CAPACITY
  const activeCarCapacityFilters = ref<string[]>([]);
  const updateCarCapacityFilters = (filters: string[]) => (activeCarCapacityFilters.value = filters);

  watch(activeCarCapacityFilters, () => {
    if (isResetting.value) return;

    console.log('car capacity watcher trigger');

    currentPage.value = 1;
    fetchVehicles();
  });

  // CAR TRANSMISSION
  const activeCarTransmissionFilters = ref<string[]>([]);
  const updateCarTransmissionFilters = (filters: string[]) =>
    (activeCarTransmissionFilters.value = filters);

  watch(activeCarTransmissionFilters, () => {
    if (isResetting.value) return;

    console.log('car transmission watcher trigger');

    currentPage.value = 1;
    fetchVehicles();
  });

  // CAR DEPOSIT
  const activeCarDepositFilters = ref<string[]>([]);
  const updateCarDepositFilters = (filters: string[]) => (activeCarDepositFilters.value = filters);

  watch(activeCarDepositFilters, () => {
    if (isResetting.value) return;

    console.log('car deposit watcher trigger');

    currentPage.value = 1;
    fetchVehicles();
  });

  // CAR BABYSEAT
  const activeCarBabySeatFilters = ref<string[]>([]);
  const updateCarBabySeatFilters = (filters: string[]) => (activeCarBabySeatFilters.value = filters);

  watch(activeCarBabySeatFilters, () => {
    if (isResetting.value) return;

    console.log('car baby seat watcher trigger');

    currentPage.value = 1;
    fetchVehicles();
  });

  // CAR VIDEORECORDER
  const activeCarVideoRecorderFilters = ref<string[]>([]);
  const updateCarVideoRecorderFilters = (filters: string[]) =>
    (activeCarVideoRecorderFilters.value = filters);

  watch(activeCarVideoRecorderFilters, () => {
    if (isResetting.value) return;

    console.log('car video recorder watcher trigger');

    currentPage.value = 1;
    fetchVehicles();
  });

  // PRICE RANGE
  const priceRange = ref<IPriceRange>({ minPrice: 0, maxPrice: 0 } as IPriceRange);

  const updatePriceRange = debounce(
    (range: IPriceRange) => Object.assign(priceRange.value, range),
    500,
    isResetting
  );

  watch(
    priceRange,
    () => {
      if (isResetting.value) return;

      console.log('price range watcher trigger');

      currentPage.value = 1;
      Promise.all([fetchVehicles(), fetchVehiclesCount(), fetchMinRentalCostByFilterType()]);
    },
    { deep: true }
  );

  // PAGE
  const currentPage = ref(1);
  const shouldAppendPage = ref(false);

  const appendPage = () => {
    shouldAppendPage.value = true;
    currentPage.value += 1;
  };

  const changeCurrentPage = (page: number) => (currentPage.value = page);

  watch(currentPage, async () => {
    console.log('page trigger');

    if (shouldAppendPage.value) {
      await fetchVehicles({ append: true });
      shouldAppendPage.value = false;
      return;
    }

    await fetchVehicles();
  });

  // SORT
  const sortOrderASC = ref(true);
  const sortBy = ref(SortTypes.RentalCost);

  const toggleSortOrder = () => (sortOrderASC.value = !sortOrderASC.value);
  const updateSortType = (sortType: SortTypes) => (sortBy.value = sortType);

  watch([sortBy, sortOrderASC], () => fetchVehicles());

  // COMPOSABLES
  usePreventScroll(isCarCatalogFiltersOpen);

  const {
    vehicles,
    vehiclesCount,
    isLoading,
    errorMessage,
    initialPriceBoundaries,
    vehiclesCountGroupedByFilterType,
    minRentalCostGroupedByFilterType,
    fetchVehicles,
    fetchVehiclesCount,
    fetchMinRentalCostByFilterType,
  } = useCatalog({
    currentPage,
    sortOrderASC,
    sortBy,
    activeLocationFilters,
    priceRange,
    activeCarTypeFilters,
    activeCarModelFilters,
    activeCarCapacityFilters,
    activeCarTransmissionFilters,
    activeCarDepositFilters,
    activeCarBabySeatFilters,
    activeCarVideoRecorderFilters,
  });

  useSearchParams({
    page: currentPage,
    sortOrderASC,
    sortBy,
    location: toRef(activeLocationFilters.value, 'pickupFrom'),
    minPrice: toRef(priceRange.value, 'minPrice'),
    maxPrice: toRef(priceRange.value, 'maxPrice'),
  });
</script>
