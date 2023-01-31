<template>
  <BaseCollapse class="mb-8 w-full" :initial-visibility="true">
    <template #controls="{ toggleVisibility, isVisible }">
      <div
        class="mb-[20px] flex justify-between font-semibold text-gray-600"
        role="button"
        @click="toggleVisibility"
      >
        <h2>Capacity</h2>
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
            v-for="(value, carCapacity) in vehiclesCapacityCount"
            :key="carCapacity"
          >
            <div class="flex items-center">
              <BaseCheckBox
                :id="carCapacity"
                v-model="activeCarCapacityFilters"
                :label="carCapacity"
                :value="carCapacity"
                :input-bg-class="'bg-white'"
              />
              <span class="ml-1 text-[13px] text-gray-400"> ({{ value || 0 }}) </span>
            </div>
            <p>${{ vehiclesMinRentalCostByCarCapacity?.[carCapacity] || 0 }}</p>
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

  const title = import.meta.env.BASE_URL;

  interface Props {
    vehiclesCapacityCount: { [key: string]: number };
    vehiclesMinRentalCostByCarCapacity: { [key: string]: number };
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{
    (e: 'updateCarCapacityFilters', activeCarCapacityFilters: string[]): void;
  }>();

  const activeCarCapacityFilters = ref<string[]>([]);

  defineExpose({ activeCarCapacityFilters });

  watch(activeCarCapacityFilters, () =>
    emit('updateCarCapacityFilters', activeCarCapacityFilters.value)
  );
</script>
