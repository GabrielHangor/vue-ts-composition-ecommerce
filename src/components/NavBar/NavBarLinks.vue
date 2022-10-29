<template>
  <RouterLink
    class="transition duration-300 ease-in-out hover:text-orange-hovered"
    v-for="link in links"
    :key="link.title"
    :to="link.path"
    @click="toggleMobileNav"
  >
    {{ link.title }}</RouterLink
  >
</template>

<script lang="ts" setup>
  const links = [
    { path: '/explore', title: 'Explore cars' },
    { path: '/details', title: 'Rental details' },
    { path: '/about', title: 'About us' },
    { path: '/investors', title: 'For investors' },
    { path: '/contact', title: 'Contact' },
  ];

  const emit = defineEmits<{ (e: 'toggle-mobile-nav'): void }>();
  const toggleMobileNav = () => emit('toggle-mobile-nav');
</script>
