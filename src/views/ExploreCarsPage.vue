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
          @open-mobile-filters="isCarCatalogFiltersOpen = true"
          @change-current-page="changeCurrentPage"
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
  import { usePaginatedVehicles } from '@/composables/usePaginatedVehicles';
  import { usePreventScroll } from '@/composables/usePreventScroll';
  import type { ILocationAndTimeFormValues } from '@/interfaces';

  import { onMounted, ref, watch } from 'vue';

  const activeLocationAndTimeFilters = ref<ILocationAndTimeFormValues>({} as ILocationAndTimeFormValues);

  const updateLocationAndTimeFilters = (locationAndTimeFilters: ILocationAndTimeFormValues) => {
    activeLocationAndTimeFilters.value = locationAndTimeFilters;
  };

  const isCarCatalogFiltersOpen = ref(false);

  usePreventScroll(isCarCatalogFiltersOpen);

  const currentPage = ref(1);

  const { vehicles, vehiclesCount, isLoading, fetchVehicles } = usePaginatedVehicles(currentPage);

  const changeCurrentPage = (page: number) => (currentPage.value = page);

  watch(currentPage, (newVal) => newVal && fetchVehicles());

  onMounted(() => fetchVehicles());
</script>
