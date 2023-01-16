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
          <BaseCheckBox
            v-for="carType in carTypes"
            :key="carType.name"
            :id="carType.name"
            v-model="activeCarTypeFilters"
            :label="carType.name"
            :value="carType.name"
          />
        </section></div
    ></template>
  </BaseCollapse>
</template>

<script setup lang="ts">
  import BaseCollapse from '@/components/BaseCollapse.vue';
  import BaseCheckBox from '@/components/BaseCheckBox.vue';
  import { ref, watch } from 'vue';
  import { carTypes } from '@/constants';

  const title = import.meta.env.BASE_URL;

  const emit = defineEmits<{
    (e: 'updateCarTypeFilters', activeCarTypeFilters: string[]): void;
  }>();

  const activeCarTypeFilters = ref<string[]>([]);

  watch(activeCarTypeFilters, () => emit('updateCarTypeFilters', activeCarTypeFilters.value));
</script>
