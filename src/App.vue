<template>
  <NavBar />
  <main class="flex h-full flex-col">
    <router-view v-slot="{ Component, route }">
      <transition name="slide">
        <component :key="route.name" :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script setup lang="ts">
  import NavBar from '@/components/NavBar/NavBar.vue';
</script>
