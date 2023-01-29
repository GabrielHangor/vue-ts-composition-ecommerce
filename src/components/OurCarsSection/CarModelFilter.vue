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
          <div class="flex items-center" v-for="carModel in carModels" :key="carModel">
            <BaseCheckBox
              :id="carModel.name"
              v-model="activeCarModelFilters"
              :label="carModel.name"
              :value="carModel.name"
              :input-bg-class="'bg-white'"
            />
            <span class="ml-1 text-[13px] text-gray-400">
              ({{ vehiclesModelCount[carModel.name] || 0 }})
            </span>
          </div>
        </section>
      </div></template
    >
  </BaseCollapse>
</template>

<script setup lang="ts">
  import BaseCollapse from '@/components/BaseCollapse.vue';
  import BaseCheckBox from '@/components/BaseCheckBox.vue';
  import { type PropType, ref, watch } from 'vue';
  import { carModels } from '@/constants';
  import type { IModel } from '@/interfaces';

  const title = import.meta.env.BASE_URL;

  const props = defineProps({
    vehiclesModelCount: { type: Object as PropType<IModel>, required: true },
  });

  const emit = defineEmits<{
    (e: 'updateCarModelFilters', activeCarModelFilters: string[]): void;
  }>();

  const activeCarModelFilters = ref<string[]>([]);

  defineExpose({ activeCarModelFilters });

  watch(activeCarModelFilters, () => emit('updateCarModelFilters', activeCarModelFilters.value));
</script>
