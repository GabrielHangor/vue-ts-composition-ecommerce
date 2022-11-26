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
          :vehicles="tempVehicles"
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
  import { usePreventScroll } from '@/composables/usePreventScroll';
  import type { ILocationAndTimeFormValues, ICarEntity } from '@/interfaces';
  import { supabase } from '@/supabase';
  import { computed, onMounted, ref, watch } from 'vue';

  const activeLocationAndTimeFilters = ref<ILocationAndTimeFormValues>({} as ILocationAndTimeFormValues);

  const updateLocationAndTimeFilters = (locationAndTimeFilters: ILocationAndTimeFormValues) => {
    activeLocationAndTimeFilters.value = locationAndTimeFilters;
  };

  const isCarCatalogFiltersOpen = ref(false);

  usePreventScroll(isCarCatalogFiltersOpen);

  const tempVehicles = ref<ICarEntity[]>([]);
  const vehiclesCount = ref(0);
  const currentPage = ref(1);
  const vehiclesRange = computed(() => {
    return { offset: currentPage.value * 6 - 6, limit: currentPage.value * 6 - 1 };
  });

  const fetchVehicles = async () => {
    const { data, count } = (await supabase
      .from('Vehicles')
      .select('*', { count: 'exact' })
      .order('rentalCost', {
        ascending: true,
      })
      .range(vehiclesRange.value.offset, vehiclesRange.value.limit)) as {
      data: ICarEntity[];
      count: number;
    };

    console.log(data, count);
    tempVehicles.value = data;
    vehiclesCount.value = count;
  };

  const changeCurrentPage = (page: number) => (currentPage.value = page);

  watch(currentPage, (newVal) => newVal && fetchVehicles());

  onMounted(() => fetchVehicles());
</script>
