<template>
  <div class="flex h-full w-full flex-col">
    <LocationAndTimeForm @update-location-and-time-filters="updateLocationAndTimeFilters" />
    <PageHeading heading="Our cars" :carsTotal="vehiclesCount" />
    <OurCarsSectionWrapper>
      <template v-slot:filters>
        <OurCarsCatalogFilters
          @close-mobile-filters="isCarCatalogFiltersOpen = false"
          :isOpen="isCarCatalogFiltersOpen"
        />
      </template>
      <template v-slot:cars>
        <OurCarsCatalog
          :carsTotal="vehiclesCount"
          :vehicles="vehicles"
          :isError="isError"
          :isLoading="isLoading"
          :currentPage="currentPage"
          :sortOrderASC="sortOrderASC"
          :sortBy="sortBy"
          @open-mobile-filters="isCarCatalogFiltersOpen = true"
          @change-current-page="changeCurrentPage"
          @append-page="appendPage"
          @toggle-sort-order="toggleSortOrder"
          @updateSortType="updateSortType"
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
  import { usePaginatedAndSortedVehicles } from '@/composables/usePaginatedAndSortedVehicles';
  import { usePreventScroll } from '@/composables/usePreventScroll';
  import type { ILocationAndTimeFormValues } from '@/interfaces';

  import { onMounted, ref, watch } from 'vue';

  const activeLocationAndTimeFilters = ref<ILocationAndTimeFormValues | null>(null);

  const updateLocationAndTimeFilters = (locationAndTimeFilters: ILocationAndTimeFormValues) => {
    activeLocationAndTimeFilters.value = locationAndTimeFilters;
  };

  const isCarCatalogFiltersOpen = ref(false);

  usePreventScroll(isCarCatalogFiltersOpen);

  const currentPage = ref(1);
  const sortOrderASC = ref(true);
  const sortBy = ref('rentalCost');
  const shouldAppendPage = ref(false);

  const { vehicles, vehiclesCount, isLoading, isError, fetchVehicles } = usePaginatedAndSortedVehicles(
    currentPage,
    sortOrderASC,
    sortBy
  );

  const changeCurrentPage = (page: number) => {
    currentPage.value = page;
  };

  const appendPage = () => {
    shouldAppendPage.value = true;
    currentPage.value += 1;
  };

  const toggleSortOrder = () => (sortOrderASC.value = !sortOrderASC.value);

  const updateSortType = (sortType: string) => (sortBy.value = sortType);

  watch([currentPage, sortOrderASC, sortBy], () => {
    if (shouldAppendPage.value) {
      fetchVehicles({ append: true });
      shouldAppendPage.value = false;
      return;
    }

    fetchVehicles();
  });

</script>
