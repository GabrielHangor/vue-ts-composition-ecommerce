<template>
  <section>
    <slot
      name="controls"
      :toggleVisibility="toggleVisibility"
      :isVisible="isVisible"
      :isTransitioning="isTransitioning"
    />
    <transition
      name="expand"
      @enter="enter"
      @transitionstart="isTransitioning = true"
      @transitionend="isTransitioning = false"
      @transitioncancel="isTransitioning = false"
      @after-enter="afterEnter"
      @leave="leave"
    >
      <slot :isVisible="isVisible" />
    </transition>
  </section>
</template>

<script setup lang="ts">
  import { type PropType, ref } from 'vue';

  const props = defineProps({
    initialVisibility: { type: Boolean as PropType<boolean>, default: false },
  });

  const isVisible = ref(false);
  const isTransitioning = ref(false);

  if (props.initialVisibility) isVisible.value = true;

  const toggleVisibility = () => {
    if (isTransitioning.value) return;

    isVisible.value = !isVisible.value;
  };

  const enter = (element: HTMLElement) => {
    element.style.width = getComputedStyle(element).width;
    element.style.position = 'absolute';
    element.style.visibility = 'hidden';
    element.style.height = 'auto';

    const height = getComputedStyle(element).height;

    element.style.width = '';
    element.style.position = '';
    element.style.visibility = '';
    element.style.height = '0';

    // Force repaint to make sure the
    // animation is triggered correctly.
    getComputedStyle(element).height;

    // Trigger the animation.
    // We use `requestAnimationFrame` because we need
    // to make sure the browser has finished
    // painting after setting the `height`
    // to `0` in the line above.
    requestAnimationFrame(() => {
      element.style.height = height;
    });
  };

  const afterEnter = (element: HTMLElement) => (element.style.height = 'auto');

  const leave = (element: HTMLElement) => {
    element.style.height = getComputedStyle(element).height;

    // Force repaint to make sure the
    // animation is triggered correctly.
    getComputedStyle(element).height;

    requestAnimationFrame(() => {
      element.style.height = '0';
    });
  };
</script>
