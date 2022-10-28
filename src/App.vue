<template>
  <TheNavBar />
  <main class="flex h-full items-center justify-center">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script setup lang="ts">
  import TheNavBar from '@/components/TheNavBar.vue';
</script>
