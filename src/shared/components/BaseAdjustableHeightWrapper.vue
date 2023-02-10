<template>
  <transition
    name="height"
    mode="out-in"
    @beforeLeave="beforeLeave"
    @enter="enter"
    @afterEnter="afterEnter"
  >
    <slot />
  </transition>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const prevHeight = ref('0');

  const enter = (element: HTMLElement) => {
    const { height } = getComputedStyle(element);
    element.style.height = prevHeight.value;

    setTimeout(() => {
      element.style.height = height;
    });
  };

  const afterEnter = (element: HTMLElement) => (element.style.height = 'auto');

  const beforeLeave = (element: HTMLElement) => (prevHeight.value = getComputedStyle(element).height);
</script>

<style></style>
