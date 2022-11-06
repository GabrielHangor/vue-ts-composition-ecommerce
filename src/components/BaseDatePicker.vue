<template>
  <div class="relative block">
    <span class="absolute inset-y-0 left-0 flex items-center pl-4">
      <slot name="icon-left"><img src="/calendar.svg" alt="Calendar Icon" /></slot>
    </span>

    <span class="absolute inset-y-0 right-0 flex items-center pr-4" @mousedown="clearInput">
      <img :src="showCrossIcon" alt="Cross" class="cursor-pointer" />
    </span>
    <input
      ref="datePicker"
      :type="type"
      name="input"
      :value="serializedDate"
      @input="updateValue(($event.target as HTMLInputElement).value)"
      @focus="onFocus"
      @blur="onBlur"
      v-bind="$attrs"
      placeholder="1"
      class="peer block h-12 w-full rounded-[10px] pl-[52px] pt-5 font-medium text-gray-600 placeholder-transparent shadow-inputBase transition duration-300 ease-in-out placeholder-shown:pt-0 focus:outline-none"
    />
    <label
      for="input"
      class="pointer-text pointer-events-none absolute top-1 pl-[52px] text-xs font-normal text-gray-600 transition-all peer-placeholder-shown:top-[12px] peer-placeholder-shown:text-base peer-placeholder-shown:font-medium"
      >Pick up date</label
    >
  </div>
</template>

<script lang="ts" setup>
  import { computed, nextTick, ref, type PropType } from 'vue';

  const props = defineProps({
    modelValue: { type: String as PropType<string>, required: true },
  });

  const emit = defineEmits<{ (e: 'update:modelValue', modelValue: string): void }>();

  const listeners = ref({ focused: false });
  const type = computed(() => (listeners.value.focused ? 'date' : 'text'));
  const showCrossIcon = computed(() =>
    listeners.value.focused && props.modelValue ? 'delete-icon.svg' : 'dropdown-arrow.svg'
  );

  const serializedDate = computed(() => {
    return listeners.value.focused
      ? props.modelValue.split('.').reverse().join('-')
      : props.modelValue.split('-').reverse().join('.');
  });

  const datePicker = ref<HTMLInputElement | null>(null);

  const updateValue = (value: string) => {
    const formattedDate = value.split('-').reverse().join('.');
    emit('update:modelValue', formattedDate);
  };

  const onFocus = () => {
    listeners.value.focused = true;
    nextTick(() => datePicker?.value?.showPicker());
  };

  const onBlur = () => (listeners.value.focused = false);

  const clearInput = () => {
    showCrossIcon.value && emit('update:modelValue', '');
  };
</script>

<style>
  input[type='date']::-webkit-calendar-picker-indicator {
    color: transparent;
    background: transparent;
  }
</style>
