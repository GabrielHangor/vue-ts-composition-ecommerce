<template>
  <select :value="sortBy" @input="$emit('updateSortType', ($event.target as HTMLInputElement).value)">
    <option :value="selectOptions.baseOption.value">{{ selectOptions.baseOption.name }}</option>
    <option v-for="option in selectOptions.options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script lang="ts" setup>
  import type { ISelectOptions } from '@/interfaces';
  import type { PropType } from 'vue';

  const props = defineProps({
    selectOptions: { type: Object as PropType<ISelectOptions>, required: true },
    sortBy: { type: String as PropType<string> },
  });
</script>
