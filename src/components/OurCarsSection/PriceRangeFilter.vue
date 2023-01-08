<template>
  <section>
    <h2 class="mb-[20px] text-gray-600">Rent price (per day)</h2>
    <div class="flex items-center">
      <BaseInput type="number" label="From" v-model.number="minPrice" />
      <span class="px-1">-</span>
      <BaseInput type="number" label="To" v-model.number="maxPrice" />
    </div>
    <div class="flex flex-col py-6">
      <BaseRangeInput v-model:minPrice.number="minPrice" v-model:maxPrice.number="maxPrice" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import BaseInput from '@/components/BaseInput.vue';
  import { watch } from 'vue';
  import { useDebouncedRef } from '@/composables/useDebouncedRef';
  import type { IPriceRange } from '@/interfaces';
  import BaseRangeInput from '@/components/BaseRangeInput.vue';

  const emit = defineEmits<{
    (e: 'updatePriceRange', priceRange: IPriceRange): void;
  }>();

  const minPrice = useDebouncedRef<number | null>(null, 500);
  const maxPrice = useDebouncedRef<number | null>(null, 500);

  watch([minPrice, maxPrice], (priceRange) =>
    emit('updatePriceRange', { minPrice: priceRange[0], maxPrice: priceRange[1] })
  );
</script>
