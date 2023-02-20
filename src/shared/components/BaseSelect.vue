<template>
  <select
    :disabled="isLoading"
    class="cursor-pointer appearance-none px-2 focus:outline-none"
    :class="{ 'cursor-progress': isLoading }"
    :value="modelValue"
    @input="updateValue(($event.target as HTMLInputElement).value)"
  >
    <option :value="selectOptions.baseOption.value">{{ selectOptions.baseOption.name }}</option>
    <option v-for="option in selectOptions.options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script lang="ts" setup>
  import type { ISelectOptions } from '@/modules/catalog/models/catalog.models';
  import type { PropType } from 'vue';

  const props = defineProps({
    selectOptions: { type: Object as PropType<ISelectOptions>, required: true },
    modelValue: { type: String as PropType<string> },
    isLoading: { type: Boolean as PropType<boolean> },
  });

  const emit = defineEmits<{
    (e: 'update:modelValue', modelValue: string): void;
  }>();

  const updateValue = (value: string) => emit('update:modelValue', value);
</script>
