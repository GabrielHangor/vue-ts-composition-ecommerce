<template>
  <nav class="container mx-auto flex items-center justify-between py-8">
    <RouterLink class="mr-[14%]" to="/"><img src="Logo car.svg" alt="Car Logo" /></RouterLink>
    <div class="flex w-full items-center justify-between font-medium text-gray-600">
      <RouterLink
        class="transition duration-300 ease-in-out hover:text-orange-hovered"
        v-for="link in links"
        :key="link.title"
        :to="link.path"
      >
        {{ link.title }}</RouterLink
      >
      <BaseButton variant="transparent-orange">Rent now</BaseButton>
    </div>
  </nav>
</template>

<script lang="ts" setup>
  import BaseButton from './BaseButton.vue';

  const links = [
    { path: '/explore', title: 'Explore cars' },
    { path: '/details', title: 'Rental details' },
    { path: '/about', title: 'About us' },
    { path: '/investors', title: 'For investors' },
    { path: '/contact', title: 'Contact' },
  ];
</script>
