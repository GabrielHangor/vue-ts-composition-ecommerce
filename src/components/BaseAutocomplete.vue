<template>
  <div>
    <div class="relative block">
      <span class="absolute inset-y-0 left-0 flex items-center pl-4">
        <slot name="icon-left"><img src="/map-pin.svg" alt="Map Pin" /></slot>
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
        class="peer block h-12 w-full rounded-[10px] px-[52px] pt-5 font-medium text-gray-600 placeholder-transparent shadow-inputBase transition duration-300 ease-in-out placeholder-shown:pt-0 focus:outline-none"
        :class="{ 'border-[1px] border-error text-error': error }"
      />
      <label
        for="input"
        class="pointer-text pointer-events-none absolute top-1 pl-[52px] text-xs font-normal text-gray-600 transition-all peer-placeholder-shown:top-[12px] peer-placeholder-shown:text-base peer-placeholder-shown:font-medium"
        :class="{ 'text-error': error }"
        >{{ label }}</label
      >
      <transition name="fade" mode="out-in">
        <ul
          v-if="listeners.focused && filteredListData?.length"
          class="absolute z-10 mt-2 max-h-[30vh] w-full overflow-y-auto overflow-x-hidden rounded-[10px] bg-white shadow-inputBase"
        >
          <li
            class="cursor-pointer py-2 transition first-of-type:rounded-t-[10px] first-of-type:rounded-b-none last-of-type:rounded-t-none last-of-type:rounded-b-[10px] hover:font-semibold"
            v-for="listItem in filteredListData"
            :key="listItem"
            @mousedown="select(listItem)"
          >
            <span class="pl-[52px]">{{ listItem }}</span>
          </li>
        </ul>
        <ul
          v-else-if="listeners.focused && !filteredListData?.length"
          class="absolute z-10 mt-2 flex h-[56px] w-full items-center overflow-y-auto overflow-x-hidden rounded-[10px] bg-white text-gray-500 shadow-inputBase"
        >
          <li
            class="py-2 transition first-of-type:rounded-t-[10px] first-of-type:rounded-b-none last-of-type:rounded-t-none last-of-type:rounded-b-[10px]"
          >
            <span class="pl-[52px]">Nothing is found...</span>
          </li>
        </ul>
      </transition>
    </div>
    <span class="mt-1 text-xs text-error">{{ error }}</span>
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref, type PropType, type Ref } from 'vue';

  const props = defineProps({
    listData: { type: Array as PropType<string[]> },
    modelValue: { type: String as PropType<string>, required: true },
    label: { type: String as PropType<string>, required: true },
    error: { type: String as PropType<string | Ref<string>> },
  });

  const emit = defineEmits<{
    (e: 'update:modelValue', modelValue: string): void;
  }>();

  const listeners = ref({ focused: false, touched: false });

  const filteredListData = computed<string[] | undefined>(() => {
    return props.listData?.filter((item) => item.toLowerCase().includes(props.modelValue.toLowerCase()));
  });

  const updateValue = (value: string) => {
    listeners.value.touched = true;
    emit('update:modelValue', value);
  };

  const select = (listItem: string) => {
    listeners.value.touched = true;

    emit('update:modelValue', listItem);
  };

  const clearInput = () => {
    emit('update:modelValue', '');
  };

  const onFocus = () => listeners.value.focused = true;


  const onBlur = () => (listeners.value.focused = false);
</script>
