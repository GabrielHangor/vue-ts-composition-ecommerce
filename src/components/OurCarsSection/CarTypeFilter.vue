<template>
  <BaseCollapse class="mb-8 w-full" :initial-visibility="true">
    <template #controls="{ toggleVisibility, isVisible }">
      <div
        class="mb-[20px] flex justify-between font-semibold text-gray-600"
        role="button"
        @click="toggleVisibility"
      >
        <h2>Car type</h2>
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
          <div class="flex items-center" v-for="carType in carTypes" :key="carType.name">
            <BaseCheckBox
              :id="carType.name"
              v-model="activeCarTypeFilters"
              :label="carType.name"
              :value="carType.name"
              :input-bg-class="'bg-white'"
            />
            <span class="ml-1 text-[13px] text-gray-400">
              ({{ vehiclesTypeCount[carType.name] || 0 }})
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
  import { computed, ref, watch } from 'vue';
  import type { PropType } from 'vue';
  import { carTypes } from '@/constants';
  import type { IVehiclesTypeCount } from '@/interfaces';

  const title = import.meta.env.BASE_URL;

  const props = defineProps({
    vehiclesTypeCount: { type: Object as PropType<IVehiclesTypeCount>, required: true },
  });

  const emit = defineEmits<{
    (e: 'updateCarTypeFilters', activeCarTypeFilters: string[]): void;
  }>();

  const activeCarTypeFilters = ref<string[]>([]);

  defineExpose({ activeCarTypeFilters });

  watch(activeCarTypeFilters, () => emit('updateCarTypeFilters', activeCarTypeFilters.value));
</script>
