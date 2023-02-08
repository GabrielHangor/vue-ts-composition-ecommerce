<template>
  <TheNavbar />
  <main class="flex flex-col flex-grow">
    <router-view v-slot="{ Component, route }">
      <transition mode="out-in" name="fade">
        <KeepAlive :include="['CatalogPage']">
          <component :key="route.name" :is="Component" />
        </KeepAlive>
      </transition>
    </router-view>
  </main>
  <TheFooter />
</template>

<script setup lang="ts">
  import TheNavbar from '@/shared/components/TheNavbar.vue';
  import TheFooter from '@/shared/components/TheFooter.vue';
</script>
