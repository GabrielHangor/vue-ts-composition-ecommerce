<template>
  <nav
    @click="hideNavigationDrawer"
    class="z-100 fixed top-0 left-0 h-screen w-screen bg-[rgba(0,0,0,0.2)]"
    :class="modelValue ? 'w-full' : 'w-0'"
  >
    <aside
      @click.stop
      class="fixed top-0 left-0 z-[101] h-full w-[80%] transform overflow-auto bg-white transition-all duration-300 ease-in-out"
      :class="modelValue ? 'translate-x-0' : '-translate-x-full'"
    >
      <slot :hideNavigationDrawer="() => emit('update:modelValue', false)"></slot>
    </aside>
  </nav>
</template>

<script setup lang="ts">
  import { onBeforeMount, onBeforeUnmount } from 'vue';

  interface Props {
    modelValue: boolean;
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{ (e: 'update:modelValue', modelValue: boolean): void }>();

  const hideNavigationDrawer = () => {
    emit('update:modelValue', false);
  };

  onBeforeMount(() => document.body.classList.add('!overflow-y-hidden', 'touch-none'));
  onBeforeUnmount(() => document.body.classList.remove('!overflow-y-hidden', 'touch-none'));
</script>
