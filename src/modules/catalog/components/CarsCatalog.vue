<template>
  <section class="col-span-12 mb-4 md:col-span-8 md:col-start-6 lg:col-span-9 lg:col-start-5">
    <OurCarsCatalogHeading
      v-bind="$attrs"
      :sort-by="sortBy"
      :sort-order-a-s-c="sortOrderASC"
      :is-loading="isLoading"
    />

    <transition name="fade" mode="out-in">
      <SkeletonVehicleCardsSection v-if="isLoading" />
      <h1 class="p-10 text-center text-5xl" v-else-if="error">Something went wrong... {{ error }}</h1>
      <h1 class="p-10 text-center text-5xl" v-else-if="!vehicles.length">Nothing was found</h1>
      <VehicleCardsSection v-else :vehicles="vehicles" />
    </transition>

    <BaseButton
      v-if="vehicles.length && !error"
      :is-disabled="isOnLastPage"
      :loading="isLoading"
      variant="transparent"
      class="w-full"
      @click="appendPage"
    >
      Show more
    </BaseButton>
    <BasePaginator
      v-if="vehicles.length && !error"
      :max-visible-buttons="3"
      :current-page="currentPage"
      :total-entities="carsTotal"
      :entities-per-page="VEHICLES_PER_PAGE"
      v-bind="$attrs"
    />
  </section>
</template>

<script lang="ts" setup>
  import OurCarsCatalogHeading from './CarsCatalogHeading.vue';
  import VehicleCardsSection from './VehicleCardsSection.vue';
  import type { IVehicleEntity } from '@/modules/catalog/models/catalog.interfaces';
  import { computed, type PropType } from 'vue';
  import BaseButton from '../../../shared/components/BaseButton.vue';
  import BasePaginator from '@/shared/components/BasePaginator.vue';
  import { VEHICLES_PER_PAGE } from '@/modules/catalog/catalog.constants';
  import SkeletonVehicleCardsSection from './SkeletonVehicleCardsSection.vue';

  const props = defineProps({
    vehicles: { type: Array as PropType<IVehicleEntity[]>, required: true },
    carsTotal: { type: Number as PropType<number>, required: true },
    currentPage: { type: Number as PropType<number>, required: true },
    isLoading: { type: Boolean as PropType<boolean> },
    sortOrderASC: { type: Boolean as PropType<boolean> },
    sortBy: { type: String as PropType<string> },
    error: { type: String as PropType<string | null> },
  });

  const emit = defineEmits<{
    (e: 'appendPage'): void;
  }>();

  const isOnLastPage = computed(
    () => props.currentPage === Math.ceil(props.carsTotal / VEHICLES_PER_PAGE)
  );

  const appendPage = () => emit('appendPage');
</script>
