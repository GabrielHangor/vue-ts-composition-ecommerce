<template>
  <div class="flex h-full w-full flex-col">
    <LocationAndTimeForm @update-location-and-time-filters="updateLocationAndTimeFilters" />
    <PageHeading heading="Our cars" computed-amount="88" />
    <OurCarsSectionWrapper>
      <template v-slot:filters>
        <OurCarsCatalogFilters
          @close-mobile-filters="isCarCatalogFiltersOpen = false"
          :is-open="isCarCatalogFiltersOpen"
        />
      </template>
      <template v-slot:cars>
        <OurCarsCatalog @open-mobile-filters="isCarCatalogFiltersOpen = true" />
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
  import type { ILocationAndTimeFormValues } from '@/interfaces';
  import { ref } from 'vue';

  const activeLocationAndTimeFilters = ref<ILocationAndTimeFormValues>({} as ILocationAndTimeFormValues);

  const updateLocationAndTimeFilters = (locationAndTimeFilters: ILocationAndTimeFormValues) => {
    activeLocationAndTimeFilters.value = locationAndTimeFilters;
  };

  const isCarCatalogFiltersOpen = ref(false);

  usePreventScroll(isCarCatalogFiltersOpen);
</script>
