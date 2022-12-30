<template>
  <section class="col-span-12 mb-4 md:col-span-8 md:col-start-6 lg:col-span-9 lg:col-start-5">
    <OurCarsCatalogHeading
      v-bind="$attrs"
      :sortBy="sortBy"
      :sortOrderASC="sortOrderASC"
      :isLoading="isLoading"
    />

    <transition name="fade" mode="out-in">
      <SkeletonCardBlock v-if="isLoading" />
      <h1 class="p-10 text-center text-5xl" v-else-if="error">Something went wrong... {{ error }}</h1>
      <CarCardsBlock v-else :vehicles="vehicles" />
    </transition>

    <BaseButton
      :isDisabled="isOnLastPage"
      :loading="isLoading"
      variant="transparent"
      class="w-full"
      @click="appendPage"
      >Show more</BaseButton
    >
    <BasePaginator
      :currentPage="currentPage"
      :totalEntities="carsTotal"
      :entitiesPerPage="VEHICLES_PER_PAGE"
      v-bind="$attrs"
    />
  </section>
</template>

<script lang="ts" setup>
  import OurCarsCatalogHeading from './OurCarsCatalogHeading.vue';
  import CarCardsBlock from './CarCardsBlock.vue';
  import type { IVehicleEntity } from '@/interfaces';
  import { computed, type PropType } from 'vue';
  import BaseButton from '../BaseButton.vue';
  import BasePaginator from '@/components/BasePaginator.vue';
  import { VEHICLES_PER_PAGE } from '@/constants';
  import SkeletonCardBlock from './SkeletonCardBlock.vue';
  import type { PostgrestError } from '@supabase/supabase-js';

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
