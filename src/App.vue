<template>
  <NavBar />
  <main class="flex h-full items-center justify-center">
    <router-view v-slot="{ Component }">
      <transition name="slide">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script setup lang="ts">
  import NavBar from '@/components/NavBar/NavBar.vue';
</script>
