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
          :vehicles-type-count="vehiclesTypeCount"
          @disable-watchers="isResetting = true"
          @reset-filters="resetFilters"
          @close-mobile-filters="isCarCatalogFiltersOpen = false"
          @update-price-range="updatePriceRange"
          @update-car-type-filters="updateCarTypeFilters"
        />
      </template>
      <template #cars>
        <OurCarsCatalog
          :sort-by="sortBy"
          :vehicles="vehicles"
          :error="errorMessage"
          :is-loading="isLoading"
          :current-page="currentPage"
          :cars-total="vehiclesCount"
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
  import LocationAndTimeForm from '@/components/LocationAndTimeForm/LocationAndTimeForm.vue';
  import OurCarsCatalog from '@/components/OurCarsSection/OurCarsCatalog.vue';
  import OurCarsCatalogFilters from '@/components/OurCarsSection/OurCarsCatalogFilters.vue';
  import OurCarsSectionWrapper from '@/components/OurCarsSection/OurCarsSectionWrapper.vue';
  import PageHeading from '@/components/PageHeading.vue';
  import { useVehicles } from '@/composables/useVehicles';
  import { usePreventScroll } from '@/composables/usePreventScroll';
  import { ref, watch, toRef, type Ref, nextTick } from 'vue';
  import type { ILocationAndTimeFormValues, IPriceRange } from '@/interfaces';
  import { useSearchParams } from '@/composables/useSearchParams';
  import { debounce, delay } from '@/helpers';

  interface ILocationAndTimeForm extends Ref<InstanceType<typeof LocationAndTimeForm>> {
    formValues: ILocationAndTimeFormValues;
  }

  const isCarCatalogFiltersOpen = ref(false);

  // RESET
  const resetFilters = async () => {
    activeLocationFilters.value.pickupFrom = '';
    if (locationAndTimeForm.value) locationAndTimeForm.value.formValues.pickupFrom = '';

    Object.assign(priceRange.value, {
      minPrice: initialPriceBoundaries.value.minPrice,
      maxPrice: initialPriceBoundaries.value.maxPrice,
    });

    await nextTick();
    await fetchVehicles();
    await fetchVehiclesTypeCount();

    isResetting.value = false;
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
      fetchVehicles();
      fetchVehiclesTypeCount();
    },
    { deep: true }
  );

  // CAR TYPES
  const activeCarTypeFilters = ref<string[]>([]);
  const updateCarTypeFilters = (filters: string[]) => (activeCarTypeFilters.value = filters);

  watch(
    activeCarTypeFilters,
    () => {
      if (isResetting.value) return;

      console.log('car types watcher trigger');

      currentPage.value = 1;
      fetchVehicles();
    },
    { deep: true }
  );

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
      fetchVehicles();
      fetchVehiclesTypeCount();
    },
    { deep: true }
  );

  // PAGE
  const currentPage = ref(1);

  const appendPage = () => {
    shouldAppendPage.value = true;
    currentPage.value += 1;
  };

  const changeCurrentPage = (page: number) => (currentPage.value = page);

  watch(currentPage, () => {
    console.log('page trigger');

    if (shouldAppendPage.value) {
      fetchVehicles({ append: true });
      shouldAppendPage.value = false;
      return;
    }

    fetchVehicles();
  });

  // SORT
  const sortOrderASC = ref(true);
  const sortBy = ref('rentalCost');

  const toggleSortOrder = () => (sortOrderASC.value = !sortOrderASC.value);
  const updateSortType = (sortType: string) => (sortBy.value = sortType);

  watch([sortBy, sortOrderASC], () => fetchVehicles());

  // OTHER
  const shouldAppendPage = ref(false);

  // COMPOSABLES
  usePreventScroll(isCarCatalogFiltersOpen);

  const {
    vehicles,
    vehiclesCount,
    isLoading,
    errorMessage,
    initialPriceBoundaries,
    vehiclesTypeCount,
    fetchVehicles,
    fetchVehiclesTypeCount,
  } = useVehicles({
    currentPage,
    sortOrderASC,
    sortBy,
    activeLocationFilters,
    priceRange,
    activeCarTypeFilters,
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
