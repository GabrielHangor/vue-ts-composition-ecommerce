<template>
  <div
    v-if="modelValue"
    @click="hideModal"
    class="fixed top-0 left-0 z-40 flex h-screen w-screen items-center justify-center bg-[rgba(0,0,0,0.2)]"
  >
    <slot :hideModal="() => emit('update:modelValue', false)"></slot>
  </div>
</template>

<script setup lang="ts">
  import { onBeforeMount, onBeforeUnmount } from 'vue';

  interface Props {
    modelValue: boolean;
    noCloseOnBackdrop?: boolean;
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{ (e: 'update:modelValue', modelValue: boolean): void }>();

  const hideModal = () => {
    if (props.noCloseOnBackdrop) return;

    emit('update:modelValue', false);
  };

  onBeforeMount(() => document.body.classList.add('!overflow-y-hidden', 'touch-none'));
  onBeforeUnmount(() => document.body.classList.remove('!overflow-y-hidden', 'touch-none'));
</script>
