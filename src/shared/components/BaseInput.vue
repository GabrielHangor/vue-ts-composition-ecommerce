<template>
  <div>
    <div class="relative block">
      <span class="absolute inset-y-0 left-0 flex items-center pl-4">
        <slot name="icon-left"></slot>
      </span>

      <span class="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-4" @click="clearInput">
        <slot name="icon-right"><img v-if="modelValue" src="/delete-icon.svg" alt="Cross" /></slot>
      </span>
      <input
        name="input"
        :value="modelValue"
        @input="updateValue($event.target.value)"
        @focus="onFocus"
        @blur="onBlur"
        v-bind="$attrs"
        placeholder="1"
        class="peer block h-12 w-full appearance-none rounded-[10px] px-4 pt-5 font-medium text-gray-600 placeholder-transparent shadow-inputBase transition duration-300 ease-in-out placeholder-shown:pt-0 focus:outline-none"
        :class="{ 'border-[1px] border-error text-error': error }"
        :disabled="disabled"
      />
      <label
        for="input"
        class="pointer-text pointer-events-none absolute top-1 px-4 text-xs font-normal text-gray-600 transition-all peer-placeholder-shown:top-[12px] peer-placeholder-shown:text-base peer-placeholder-shown:font-medium"
        :class="{ 'text-error': error }"
        >{{ label }}</label
      >
    </div>
    <span class="mt-1 text-xs text-error">{{ error }}</span>
  </div>
</template>

<script lang="ts" setup>
  import { ref, type Ref } from 'vue';

  interface Props {
    modelValue: string | number | null;
    label: string;
    error?: string | Ref<string>;
    disabled?: boolean;
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{
    (e: 'update:modelValue', modelValue: string | number | null): void;
  }>();

  const listeners = ref({ focused: false, touched: false });

  const updateValue = (value: string | number | null) => {
    listeners.value.touched = true;
    emit('update:modelValue', value);
  };

  const clearInput = () => {
    if (props.disabled) return;
    emit('update:modelValue', null);
  };

  const onFocus = () => (listeners.value.focused = true);

  const onBlur = () => (listeners.value.focused = false);
</script>
