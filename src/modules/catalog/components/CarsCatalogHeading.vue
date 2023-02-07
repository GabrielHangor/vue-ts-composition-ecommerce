<template>
  <div class="flex justify-between pb-6">
    <div @click="$emit('openMobileFilters')">
      <img class="md:hidden" src="/filters-icon.svg" alt="Filters-icon mobile" />
    </div>
    <div class="flex items-center gap-4">
      <BaseSelect
        :isLoading="isLoading"
        :modelValue="sortBy"
        @update:modelValue="(newVal) => $emit('updateSortType', newVal)"
        :selectOptions="sortOptions"
      ></BaseSelect>
      <span class="cursor-pointer"
        ><img :src="`${title}${sortIcon}`" alt="Sort by icon" @click="toggleSortOrder"
      /></span>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed, type PropType } from 'vue';
  import BaseSelect from '@/shared/components/BaseSelect.vue';
  import type { ISelectOptions } from '@/modules/catalog/models/catalog.interfaces';
  const title = import.meta.env.BASE_URL;

  const sortOptions: ISelectOptions = {
    baseOption: { value: 'rentalCost', name: 'Sort by price' },
    options: [
      { value: 'releaseYear', name: 'Sort by year' },
      { value: 'deposit', name: 'Sort by deposit' },
    ],
  };

  const props = defineProps({
    isLoading: { type: Boolean as PropType<boolean> },
    sortOrderASC: { type: Boolean as PropType<boolean> },
    sortBy: { type: String as PropType<string> },
  });

  const emit = defineEmits<{
    (e: 'toggle-sort-order'): void;
    (e: 'updateSortType', value: string): void;
    (e: 'openMobileFilters'): void;
  }>();

  const sortIcon = computed(() => (props.sortOrderASC ? '/sort-up.svg' : '/sort-down.svg'));

  const toggleSortOrder = () => {
    if (!props.isLoading) emit('toggle-sort-order');
  };
</script>
