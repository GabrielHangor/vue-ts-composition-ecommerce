<template>
  <section class="mb-10 grid gap-4 lg:grid-cols-2">
    <CarCard v-for="vehicle in vehicles" :key="vehicle.id" :vehicle="vehicle" />
  </section>
</template>

<script lang="ts" setup>
  import type { IVehicleEntity } from '@/modules/catalog/models/catalog.models';
  import type { PropType } from 'vue';
  import CarCard from './CarCard.vue';

  const props = defineProps({
    vehicles: { type: Array as PropType<IVehicleEntity[]>, required: true },
  });
</script>
