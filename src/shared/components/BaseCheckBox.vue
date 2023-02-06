<template>
  <label
    :title="label"
    class="relative flex h-full cursor-pointer items-center"
    :for="id"
    :class="{ 'font-semibold': isActive }"
  >
    <div class="relative" :class="inputBgClass">
      <input
        class="form-checkbox my-1 mr-3 cursor-pointer rounded border p-3 text-transparent checked:border-gray-800 checked:hover:border-gray-800 focus:ring-0 focus:ring-offset-0 checked:focus:border-gray-800"
        :id="id"
        type="checkbox"
        v-model="model"
        :value="value"
      />
      <transition name="fade">
        <img
          v-show="isActive"
          class="absolute top-[3px] right-[0.5rem] z-10 w-6"
          src="/checkbox-checked-img.svg"
          alt="checked-icon"
        />
      </transition>
      <span class="absolute right-[0.5rem] h-4 w-3 bg-inherit"></span>
    </div>
    <span class="line-clamp-1"> {{ label }}</span>
  </label>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  interface Props {
    modelValue: Array<string | number> | boolean;
    inputBgClass: string;
    value?: string | number;
    label: string;
    id: string | number;
  }

  const props = defineProps<Props>();

  const model = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      if (value) emit('update:modelValue', value);
    },
  });

  const isActive = computed(() => {
    if (Array.isArray(props.modelValue) && props.value) return props.modelValue.includes(props.value);

    return props.modelValue;
  });

  const emit = defineEmits<{
    (e: 'update:modelValue', modelValue: Array<string | number> | boolean): void;
  }>();
</script>
