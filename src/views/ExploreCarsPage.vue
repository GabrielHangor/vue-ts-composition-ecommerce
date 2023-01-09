<template>
  <div class="flex h-full w-full flex-col">
    <LocationAndTimeForm
      :active-location-filters="activeLocationFilters"
      :is-loading="isLoading"
      @update-location-filters="updateLocationFilters"
    />
    <PageHeading heading="Our cars" :cars-total="vehiclesCount" />
    <OurCarsSectionWrapper>
      <template #filters>
        <OurCarsCatalogFilters
          :is-open="isCarCatalogFiltersOpen"
          :is-loading="isLoading"
          @close-mobile-filters="isCarCatalogFiltersOpen = false"
          @update-price-range="updatePriceRange"
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
  import { ref, watch, toRef } from 'vue';
  import type { ILocationAndTimeFormValues, IPriceRange } from '@/interfaces';
  import { useSearchParams } from '@/composables/useSearchParams';
  import { useDebouncedRef } from '@/composables/useDebouncedRef';

  const isCarCatalogFiltersOpen = ref(false);

  // LOCATION
  const activeLocationFilters = ref<ILocationAndTimeFormValues>({
    pickupFrom: '',
  } as ILocationAndTimeFormValues);

  const updateLocationFilters = (filters: ILocationAndTimeFormValues) => {
    Object.assign(activeLocationFilters.value, filters);
  };

  watch(
    activeLocationFilters,
    () => {
      currentPage.value = 1;
      fetchVehicles();
    },
    { deep: true }
  );

  // PRICE RANGE
  const priceRange = useDebouncedRef<IPriceRange>({} as IPriceRange, 500);
  const updatePriceRange = (range: IPriceRange) => (priceRange.value = range);

  watch(priceRange, () => {
    currentPage.value = 1;
    fetchVehicles();
  });

  // PAGE
  const currentPage = ref(1);

  const appendPage = () => {
    shouldAppendPage.value = true;
    currentPage.value += 1;
  };

  const changeCurrentPage = (page: number) => (currentPage.value = page);

  watch(currentPage, () => {
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

  const { vehicles, vehiclesCount, isLoading, errorMessage, fetchVehicles } = useVehicles({
    currentPage,
    sortOrderASC,
    sortBy,
    activeLocationFilters,
    priceRange,
  });

  useSearchParams({
    page: currentPage,
    sortOrderASC,
    sortBy,
    location: toRef(activeLocationFilters.value, 'pickupFrom'),
  });
</script>
