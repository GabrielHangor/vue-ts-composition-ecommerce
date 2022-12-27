<template>
  <div>
    <div class="relative block">
      <span class="absolute inset-y-0 left-0 flex items-center pl-4">
        <img src="/clock.svg" alt="Clock Icon" />
      </span>

      <span
        class="absolute inset-y-0 right-0 flex items-center px-3 transition"
        :class="{ 'rotate-180': listeners.focused && !props.modelValue }"
        @mousedown="clearInput"
      >
        <img :src="`${title}${rightIconPath}`" alt="Cross" />
      </span>
      <input
        ref="timePicker"
        type="time"
        name="input"
        :value="modelValue"
        @input="updateValue($event.target.value)"
        @focus="onFocus"
        @blur="onBlur"
        v-bind="$attrs"
        :class="{ 'border-[1px] border-error text-error': error }"
        placeholder="1"
        class="peer block h-12 w-full min-w-[95%] cursor-text rounded-[10px] bg-white pl-[52px] pt-5 font-medium text-gray-600 placeholder-transparent shadow-inputBase transition duration-300 ease-in-out placeholder-shown:pt-0 focus:outline-none"
      />
      <label
        for="input"
        :class="{ 'text-error': error }"
        class="pointer-text pointer-events-none absolute top-1 pl-[52px] text-xs font-normal text-gray-600 transition-all peer-placeholder-shown:top-[12px] peer-placeholder-shown:text-base peer-placeholder-shown:font-medium"
        >{{ label }}</label
      >
    </div>
    <span class="mt-1 text-xs text-error">{{ error }}</span>
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref, type PropType, type Ref } from 'vue';
  const title = import.meta.env.BASE_URL;

  const props = defineProps({
    modelValue: { type: String as PropType<string>, required: true },
    label: { type: String as PropType<string>, required: true },
    error: { type: String as PropType<string | Ref<string>> },
  });

  const emit = defineEmits<{ (e: 'update:modelValue', modelValue: string): void }>();

  const listeners = ref({ focused: false });
  const rightIconPath = computed(() => (props.modelValue ? '/delete-icon.svg' : '/dropdown-arrow.svg'));

  const timePicker = ref();

  const updateValue = (value: string) => emit('update:modelValue', value);
  const onFocus = () => {
    timePicker?.value?.showPicker();
    listeners.value.focused = true;
  };

  const onBlur = () => (listeners.value.focused = false);

  const clearInput = () => {
    if (props.modelValue) emit('update:modelValue', '');
  };
</script>

<style scoped>
  input[type='time']::-webkit-calendar-picker-indicator {
    display: none;
  }

  input::-webkit-date-and-time-value {
    text-align: -webkit-left;
    -webkit-padding-start: 50px;
    -webkit-padding-before: 15px;
  }

  input[type='time'] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    min-height: 1.2em;
    display: flex;
  }
</style>
