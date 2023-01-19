<template>
  <NavBar />
  <main class="flex flex-col">
    <router-view v-slot="{ Component, route }">
      <transition name="slide">
        <KeepAlive>
          <component :key="route.name" :is="Component" />
        </KeepAlive>
      </transition>
    </router-view>
  </main>
</template>

<script setup lang="ts">
  import NavBar from '@/components/NavBar/NavBar.vue';
</script>
