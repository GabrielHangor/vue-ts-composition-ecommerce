<template>
  <section>
    <h2 class="mb-[20px] text-gray-600">Rent price (per day)</h2>
    <div class="flex items-center">
      <BaseInput type="number" label="From" v-model="priceRange.min" />
      <span class='px-1'>-</span>
      <BaseInput type="number" label="To" v-model="priceRange.max" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import BaseInput from '@/components/BaseInput.vue';
  import { ref } from 'vue';
  import type { IPriceRange } from '@/interfaces';

  const priceRange = ref<IPriceRange>({ min: null, max: null });
</script>
