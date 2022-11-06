<template>
  <label class="flex h-full w-fit cursor-pointer items-center" :for="id">
    <input
      :id="id"
      :name="id"
      type="checkbox"
      class="invisible absolute"
      :checked="checked"
      @input="updateValue(($event.target as HTMLInputElement).checked)"
    />

    <img class="mr-2" :src="checkedIconName" alt="Checked icon" />

    {{ label }}
  </label>
</template>

<script setup lang="ts">
  import { computed, type PropType } from 'vue';

  const props = defineProps({
    checked: { type: Boolean as PropType<boolean> },
    label: { type: String as PropType<string> },
    id: { type: String as PropType<string>, required: true },
  });

  const checkedIconName = computed(() =>
    props.checked ? '/check-square-checked.svg' : '/check-square.svg'
  );

  const emit = defineEmits<{ (e: 'update:checked', checked: boolean): void }>();

  const updateValue = (value: boolean) => emit('update:checked', value);
</script>
