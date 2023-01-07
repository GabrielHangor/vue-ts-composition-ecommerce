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
        class="peer appearance-none  block h-12 w-full rounded-[10px] px-4 pt-5 font-medium text-gray-600 placeholder-transparent shadow-inputBase transition duration-300 ease-in-out placeholder-shown:pt-0 focus:outline-none"
        :class="{ 'border-[1px] border-error text-error': error }"
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
  import { ref, type PropType, type Ref } from 'vue';

  const props = defineProps({
    modelValue: { type: String as PropType<string | number>, required: true },
    label: { type: String as PropType<string>, required: true },
    error: { type: String as PropType<string | Ref<string>> },
  });

  const emit = defineEmits<{
    (e: 'update:modelValue', modelValue: string | number): void;
  }>();

  const listeners = ref({ focused: false, touched: false });

  const updateValue = (value: string | number) => {
    listeners.value.touched = true;
    emit('update:modelValue', value);
  };

  const clearInput = () => {
    emit('update:modelValue', '');
  };

  const onFocus = () => (listeners.value.focused = true);

  const onBlur = () => (listeners.value.focused = false);
</script>
