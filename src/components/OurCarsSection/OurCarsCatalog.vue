<template>
  <div class="col-span-12 mb-4 md:col-span-8 md:col-start-6 lg:col-span-9 lg:col-start-5">
    <OurCarsCatalogHeading v-bind="$attrs" />
    <section class="h- mb-10 grid gap-4 lg:grid-cols-2">
      <CarCard v-for="vehicle in vehicles" :key="vehicle.id" :vehicle="vehicle" />
    </section>
    <BaseButton variant="transparent" class="w-full">Show more</BaseButton>
    <BasePaginator :totalEntities="carsTotal" :entitiesPerPage="6" v-bind="$attrs" />
  </div>
</template>

<script lang="ts" setup>
  import OurCarsCatalogHeading from './OurCarsCatalogHeading.vue';
  import CarCard from './CarCard.vue';
  import type { ICarEntity } from '@/interfaces';
  import type { PropType } from 'vue';
  import BaseButton from '../BaseButton.vue';
  import BasePaginator from '@/components/BasePaginator.vue';

  const props = defineProps({
    vehicles: { type: Array as PropType<ICarEntity[]>, required: true },
    carsTotal: { type: Number as PropType<number>, required: true },
  });
</script>
