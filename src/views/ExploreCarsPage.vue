<template>
  <div class="flex h-full w-full flex-col">
    <LocationAndTimeForm :is-loading="isLoading" @update-location-filters="updateLocationFilters" />
    <PageHeading heading="Our cars" :cars-total="vehiclesCount" />
    <OurCarsSectionWrapper>
      <template v-slot:filters>
        <OurCarsCatalogFilters
          @close-mobile-filters="isCarCatalogFiltersOpen = false"
          :is-open="isCarCatalogFiltersOpen"
        />
      </template>
      <template v-slot:cars>
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
  import { ref, watch } from 'vue';
  import type { ILocationAndTimeFormValues } from '@/interfaces';
  import { useSearchParams } from '@/composables/useSearchParams';

  const isCarCatalogFiltersOpen = ref(false);

  // LOCATION
  const activeLocationFilters = ref<ILocationAndTimeFormValues>({
    pickupFrom: '',
  } as ILocationAndTimeFormValues);

  const updateLocationFilters = (filters: ILocationAndTimeFormValues) => {
    Object.assign(activeLocationFilters.value, filters);
  };

  watch(activeLocationFilters, () => fetchVehicles(), { deep: true });

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
  });

  useSearchParams({
    args: {
      page: currentPage,
      sortOrderASC,
      sortBy,
      activeLocationFilters,
    },
    options: { key: 'activeLocationFilters', newKey: 'location', targetValue: 'pickupFrom' },
  });
</script>