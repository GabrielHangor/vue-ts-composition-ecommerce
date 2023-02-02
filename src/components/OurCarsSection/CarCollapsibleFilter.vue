<template>
  <BaseCollapse class="mb-8 w-full" :initial-visibility="true">
    <template #controls="{ toggleVisibility, isVisible }">
      <div
        class="mb-[20px] flex justify-between font-semibold text-gray-600"
        role="button"
        @click="toggleVisibility"
      >
        <h2>{{ filterNameMap[filterType] }}</h2>
        <div class="flex">
          <h2>From</h2>
          <img
            class="ml-4 transition duration-500"
            :class="{ 'rotate-180': isVisible }"
            :src="`${title}dropdown-arrow.svg`"
            alt="Cross"
          />
        </div>
      </div>
    </template>
    <template #default="{ isVisible }">
      <div v-show="isVisible">
        <section class="flex flex-col gap-2">
          <div
            class="flex items-center justify-between"
            v-for="(value, carFilter) in vehiclesCountFilter"
            :key="carFilter"
          >
            <div class="flex items-center">
              <BaseCheckBox
                :id="`${filterType}${carFilter}`"
                v-model="activeCarFilters"
                :label="generateLabel(carFilter)"
                :value="carFilter"
                :input-bg-class="'bg-white'"
              />
              <span class="ml-1 text-[13px] text-gray-400"> ({{ value || 0 }}) </span>
            </div>
            <p>${{ vehiclesMinRentalCostByFilter?.[carFilter] || 0 }}</p>
          </div>
        </section>
      </div></template
    >
  </BaseCollapse>
</template>

<script setup lang="ts">
  import BaseCollapse from '@/components/BaseCollapse.vue';
  import BaseCheckBox from '@/components/BaseCheckBox.vue';
  import { ref, watch } from 'vue';
  import type { filterEvents } from '@/types';
  import { filterNameMap } from '@/constants';

  const title = import.meta.env.BASE_URL;

  interface Props {
    vehiclesCountFilter: { [key: string]: number };
    vehiclesMinRentalCostByFilter: { [key: string]: number };
    filterType: string;
  }

  const generateEvent = (filterType: string): filterEvents =>
    `update${filterType.charAt(0).toUpperCase() + filterType.slice(1)}Filters`;

  const generateLabel = (carFilter: string) => {
    if (props.filterType === 'babySeat' || props.filterType == 'videoRecorder') {
      return carFilter === 'true' ? 'Yes' : 'No';
    }

    return carFilter;
  };

  const props = defineProps<Props>();

  const emit = defineEmits<{
    (e: ReturnType<typeof generateEvent>, activeCarFilters: string[]): void;
  }>();

  const activeCarFilters = ref<string[]>([]);

  defineExpose({ activeCarFilters });

  watch(activeCarFilters, () => emit(generateEvent(props.filterType), activeCarFilters.value));
</script>
