<template>
  <BaseCollapse class="mb-8 w-full" :initial-visibility="true">
    <template #controls="{ toggleVisibility, isVisible }">
      <div
        class="mb-[20px] flex justify-between font-semibold text-gray-600"
        role="button"
        @click="toggleVisibility"
      >
        <h2>Model</h2>
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
            v-for="(value, carModel) in vehiclesModelCount"
            :key="carModel"
            class="flex items-center justify-between"
          >
            <div class="flex items-center">
              <BaseCheckBox
                :id="carModel"
                v-model="activeCarModelFilters"
                :label="carModel"
                :value="carModel"
                :input-bg-class="'bg-white'"
              />
              <span class="ml-1 text-[13px] text-gray-400"> ({{ value || 0 }}) </span>
            </div>
            <p>${{ vehiclesMinRentalCostByCarModel?.[carModel] || 0 }}</p>
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

  interface Props {
    vehiclesModelCount: { [key: string]: number };
    vehiclesMinRentalCostByCarModel: { [key: string]: number };
  }

  const props = defineProps<Props>();

  const title = import.meta.env.BASE_URL;

  const emit = defineEmits<{
    (e: 'updateCarModelFilters', activeCarModelFilters: string[]): void;
  }>();

  const activeCarModelFilters = ref<string[]>([]);

  defineExpose({ activeCarModelFilters });

  watch(activeCarModelFilters, () => emit('updateCarModelFilters', activeCarModelFilters.value));
</script>
