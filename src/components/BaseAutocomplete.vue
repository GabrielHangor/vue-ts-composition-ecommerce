<template>
  <div class="relative block">
    <span class="absolute inset-y-0 left-0 flex items-center pl-4">
      <slot name="icon-left"><img src="/map-pin.svg" alt="Map Pin" /></slot>
    </span>

    <span class="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-4" @click="clearInput">
      <slot name="icon-right"><img v-if="modelValue" src="/delete-icon.svg" alt="Cross" /></slot>
    </span>
    <input
      name="input"
      :value="props.modelValue"
      @input="updateValue(($event.target as HTMLInputElement).value)"
      v-bind="$attrs"
      placeholder="1"
      class="peer block h-12 w-full rounded-[10px] px-[52px] pt-5 font-medium text-gray-600 placeholder-transparent shadow-inputBase transition duration-300 ease-in-out placeholder-shown:pt-0 focus:outline-none"
      :class="{ 'border-[1px] border-error ': error }"
    />
    <label
      for="input"
      class="pointer-text pointer-events-none absolute top-1 pl-[52px] text-xs font-normal text-gray-600 transition-all peer-placeholder-shown:top-[12px] peer-placeholder-shown:text-base peer-placeholder-shown:font-medium"
      :class="{ 'text-error': error }"
      >{{ label }}</label
    >
  </div>
  <span class="text-xs text-error">{{ error }}</span>
</template>

<script lang="ts" setup>
  import type { PropType } from 'vue';

  const props = defineProps({
    listData: { type: Array },
    modelValue: { type: String as PropType<string | null> },
    label: { type: String as PropType<string>, required: true },
    error: { type: String as PropType<string | undefined> },
  });

  const emit = defineEmits<{ (e: 'update:modelValue', modelValue: string): void }>();

  const updateValue = (value: string) => {
    emit('update:modelValue', value);
  };

  const clearInput = () => {
    emit('update:modelValue', '');
  };
</script>
