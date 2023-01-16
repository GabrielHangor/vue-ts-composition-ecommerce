<template>
  <label
    class="relative flex h-full w-full cursor-pointer items-center"
    :for="id"
    :class="{ 'font-semibold': isActive }"
  >
    <input class="my-1 mr-3 cursor-pointer" :id="id" type="checkbox" v-model="model" :value="value" />

    <!--    <img class="mr-2" :src="`${title}${checkedIconName}`" alt="Checked icon" />-->

    {{ label }}
  </label>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  const title = import.meta.env.BASE_URL;

  interface Props {
    modelValue: Array<string> | boolean;
    value?: string;
    label: string;
    id: string;
  }

  const props = defineProps<Props>();

  // const checkedIconName = computed(() => {
  //   return props.value ? '/check-square-checked.svg' : '/check-square.svg';
  // });

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

  const emit = defineEmits<{ (e: 'update:modelValue', modelValue: string[] | boolean): void }>();
</script>
