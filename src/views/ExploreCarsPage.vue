<template>
  <PickupControlsForm @update-location-and-time-filters="updateLocationAndTimeFilters" />
</template>

<script lang="ts" setup>
  import PickupControlsForm from '@/components/PickupControlsForm/PickupControlsForm.vue';
  import type { ILocationAndTimeFormValues } from '@/types';
  import { ref } from 'vue';

  const activeLocationAndTimeFilters = ref<ILocationAndTimeFormValues>({} as ILocationAndTimeFormValues);

  const updateLocationAndTimeFilters = (locationAndTimeFilters: ILocationAndTimeFormValues) => {
    activeLocationAndTimeFilters.value = locationAndTimeFilters;
  };
</script>
