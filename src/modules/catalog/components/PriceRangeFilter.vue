<template>
  <section class="mb-8">
    <h2 class="mb-[20px] font-semibold text-gray-600">Rent price (per day)</h2>
    <div class="flex items-center">
      <BaseInput :disabled="isLoading" type="number" label="From" v-model.number="minPrice" />
      <span class="px-1">-</span>
      <BaseInput :disabled="isLoading" type="number" label="To" v-model.number="maxPrice" />
    </div>
    <div class="flex flex-col py-6">
      <BaseRangeSlider
        v-model:minPrice.number="minPrice"
        v-model:maxPrice.number="maxPrice"
        :min-gap="5"
        :slider-min-value="sliderMinValue"
        :slider-max-value="sliderMaxValue"
        :is-loading="isLoading"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  import BaseInput from '@/shared/components/BaseInput.vue';
  import { computed, type PropType, ref, unref, watch } from 'vue';
  import type { IPriceRange } from '@/modules/catalog/models/catalog.interfaces';
  import BaseRangeSlider from '@/shared/components/BaseRangeSlider.vue';

  const props = defineProps({
    isLoading: { type: Boolean as PropType<boolean>, default: false },
    initialPriceBoundaries: { type: Object as PropType<IPriceRange>, required: true },
    priceRange: { type: Object as PropType<IPriceRange> },
  });

  const emit = defineEmits<{
    (e: 'updatePriceRange', priceRange: IPriceRange): void;
  }>();

  const minPrice = ref<number | null>(
    props.priceRange?.minPrice || props.initialPriceBoundaries.minPrice
  );
  const maxPrice = ref<number | null>(
    props.priceRange?.maxPrice || props.initialPriceBoundaries.maxPrice
  );

  defineExpose({ minPrice, maxPrice });

  const sliderMinValue: number | null = unref(props.initialPriceBoundaries.minPrice);
  const sliderMaxValue: number | null = unref(props.initialPriceBoundaries.maxPrice);

  const priceRange = computed<IPriceRange>(() => {
    return { minPrice: minPrice.value, maxPrice: maxPrice.value };
  });

  watch([minPrice, maxPrice], () => emit('updatePriceRange', priceRange.value));
</script>