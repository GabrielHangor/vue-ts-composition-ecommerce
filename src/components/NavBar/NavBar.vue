<template>
  <nav class="container relative mx-auto flex items-center justify-between py-3 md:items-start md:py-8">
    <RouterLink to="/"
      ><img
        src="/Logo-car.svg"
        alt="Car Logo"
        class="h-[19px] w-[80px] pl-4 md:ml-0 md:h-[33px] md:w-[136px] md:pl-0"
        @click="isNavOpen = false"
    /></RouterLink>
    <img
      :src="`${title}${burgerIconLink}`"
      alt="Burger Icon"
      @click="toggleMobileNav"
      class="pr-4 md:hidden md:pr-0"
    />
    <div
      class="md:z-1 absolute top-[100%] z-10 flex min-h-[100vh] w-full flex-col items-center justify-center gap-9 overflow-hidden bg-white text-sm font-medium text-gray-600 transition-[opacity] duration-300 ease-in md:pointer-events-auto md:relative md:top-0 md:min-h-fit md:w-auto md:flex-row md:items-center md:justify-between md:gap-[20px] md:bg-transparent md:opacity-100 lg:gap-[65px] lg:text-[16px]"
      :class="isNavOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'"
    >
      <NavBarLinks @close-mobile-nav="isNavOpen = false" />
      <BaseButton variant="transparent-orange">Rent now</BaseButton>
    </div>
  </nav>
</template>
<script lang="ts" setup>
  import { usePreventScroll } from '@/composables/usePreventScroll';
  import { computed, ref } from 'vue';
  import BaseButton from '../BaseButton.vue';
  import NavBarLinks from './NavBarLinks.vue';
  const title = import.meta.env.BASE_URL;

  const isNavOpen = ref(false);
  const burgerIconLink = computed(() => (isNavOpen.value ? '/burger-closed.svg' : '/burger-opened.svg'));
  const toggleMobileNav = () => (isNavOpen.value = !isNavOpen.value);

  usePreventScroll(isNavOpen);
</script>
