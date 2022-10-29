<template>
  <nav class="container relative mx-auto flex items-center justify-between py-8 md:items-start">
    <RouterLink to="/"
      ><img
        src="Logo car.svg"
        alt="Car Logo"
        class="ml-4 h-[19px] w-[80px] md:ml-0 md:h-[33px] md:w-[136px]"
        @click="isNavOpen = false"
    /></RouterLink>
    <img :src="burgerIconLink" alt="Burger Icon" @click="toggleMobileNav" class="mr-4 md:hidden" />
    <div
      class="md:z-1 absolute top-[100px] z-10 flex min-h-[80vh] flex-col items-center justify-center gap-9 overflow-hidden bg-white font-medium text-gray-600 transition-[width] duration-300 ease-in-out md:relative md:top-0 md:min-h-fit md:w-auto md:flex-row md:items-center md:justify-between md:gap-[20px] md:bg-transparent lg:gap-[74px]"
      :class="isNavOpen ? 'w-full' : 'w-0'"
    >
      <NavBarLinks @toggle-mobile-nav="toggleMobileNav" />
      <BaseButton variant="transparent-orange">Rent now</BaseButton>
    </div>
  </nav>
</template>
<script lang="ts" setup>
  import { computed, ref } from 'vue';
  import BaseButton from '../BaseButton.vue';
  import NavBarLinks from './NavBarLinks.vue';

  const isNavOpen = ref(false);
  const burgerIconLink = computed(() => (isNavOpen.value ? '/burger-closed.svg' : '/burger-opened.svg'));
  const toggleMobileNav = () => (isNavOpen.value = !isNavOpen.value);
</script>
