<template>
  <div class="relative h-[1px] bg-orange-base">
    <div class="w-full"></div>
    <input
      class="pointer-events-none absolute top-0 bottom-0 m-auto w-full appearance-none bg-transparent outline-none"
      type="range"
      min="0"
      max="200"
      :value="minPrice"
      @change="updateMinPrice($event.target.value)"
    />
    <input
      class="pointer-events-none absolute top-0 bottom-0 m-auto w-full appearance-none bg-transparent outline-none"
      type="range"
      min="0"
      max="200"
      :value="maxPrice"
      @change="updateMaxPrice($event.target.value)"
    />
  </div>
</template>

<script setup lang="ts">
  interface Props {
    minPrice: string | number | null;
    maxPrice: string | number | null;
    label?: string;
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{
    (e: 'update:minPrice', minPrice: string | number): void;
    (e: 'update:maxPrice', maxPrice: string | number): void;
  }>();

  const updateMinPrice = (minPrice: string | number) => emit('update:minPrice', minPrice);
  const updateMaxPrice = (maxPrice: string | number) => emit('update:maxPrice', maxPrice);
</script>
