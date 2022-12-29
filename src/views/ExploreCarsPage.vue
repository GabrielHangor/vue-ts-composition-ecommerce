<template>
  <div class="flex h-full w-full flex-col">
    <LocationAndTimeForm :is-loading="isLoading" @update-location-filter="updateLocationFilter" />
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
  import type { City } from '@/types';
  import BaseCollapse from '@/components/BaseCollapse.vue';

  const isCarCatalogFiltersOpen = ref(false);

  usePreventScroll(isCarCatalogFiltersOpen);

  const activeLocationFilter = ref<City>('');
  const currentPage = ref(1);
  const sortOrderASC = ref(true);
  const sortBy = ref('rentalCost');
  const shouldAppendPage = ref(false);

  const { vehicles, vehiclesCount, isLoading, errorMessage, fetchVehicles } = useVehicles({
    currentPage,
    sortOrderASC,
    sortBy,
    activeLocationFilter,
  });

  const appendPage = () => {
    shouldAppendPage.value = true;
    currentPage.value += 1;
  };

  const toggleSortOrder = () => (sortOrderASC.value = !sortOrderASC.value);
  const updateSortType = (sortType: string) => (sortBy.value = sortType);
  const updateLocationFilter = (location: City) => (activeLocationFilter.value = location);
  const changeCurrentPage = (page: number) => (currentPage.value = page);

  watch([currentPage, sortOrderASC, sortBy, activeLocationFilter], () => {
    if (shouldAppendPage.value) {
      fetchVehicles({ append: true });
      shouldAppendPage.value = false;
      return;
    }

    fetchVehicles();
  });
</script>
