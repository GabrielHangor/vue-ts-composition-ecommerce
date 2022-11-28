<template>
  <div class="flex h-full w-full flex-col">
    <LocationAndTimeForm @update-location-and-time-filters="updateLocationAndTimeFilters" />
    <PageHeading heading="Our cars" :carsTotal="vehiclesCount" />
    <OurCarsSectionWrapper>
      <template v-slot:filters>
        <OurCarsCatalogFilters
          @close-mobile-filters="isCarCatalogFiltersOpen = false"
          :is-open="isCarCatalogFiltersOpen"
        />
      </template>
      <template v-slot:cars>
        <OurCarsCatalog
          :carsTotal="vehiclesCount"
          :vehicles="vehicles"
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

  import { onMounted, ref } from 'vue';

  const activeLocationAndTimeFilters = ref<ILocationAndTimeFormValues>({} as ILocationAndTimeFormValues);

  const updateLocationAndTimeFilters = (locationAndTimeFilters: ILocationAndTimeFormValues) => {
    activeLocationAndTimeFilters.value = locationAndTimeFilters;
  };

  const isCarCatalogFiltersOpen = ref(false);

  usePreventScroll(isCarCatalogFiltersOpen);

  const currentPage = ref(1);
  const sortOrderASC = ref(true);
  const sortBy = ref('rentalCost');

  const { vehicles, vehiclesCount, isLoading, fetchVehicles } = usePaginatedAndSortedVehicles(
    currentPage,
    sortOrderASC,
    sortBy
  );

  const changeCurrentPage = (page: number) => {
    currentPage.value = page;
    fetchVehicles();
  };

  const appendPage = () => {
    currentPage.value += 1;
    fetchVehicles({ append: true });
  };

  const toggleSortOrder = () => {
    sortOrderASC.value = !sortOrderASC.value;
    fetchVehicles();
  };

  const updateSortType = (sortType: string) => {
    sortBy.value = sortType;
    fetchVehicles();
  };

  onMounted(() => fetchVehicles());

  // TODO refactor refs and multiple trigger methods into one
</script>
