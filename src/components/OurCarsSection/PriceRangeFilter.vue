<template>
  <section>
    <h2 class="mb-[20px] text-gray-600">Rent price (per day)</h2>
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
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  import BaseInput from '@/components/BaseInput.vue';
  import { computed, onMounted, type PropType, ref, watch } from 'vue';
  import type { IPriceRange } from '@/interfaces';
  import BaseRangeSlider from '@/components/BaseRangeSlider.vue';
  import { APIService } from '@/api/ApiService';

  const props = defineProps({
    isLoading: { type: Boolean as PropType<boolean>, default: false },
  });

  const emit = defineEmits<{
    (e: 'updatePriceRange', priceRange: IPriceRange): void;
  }>();

  const minPrice = ref<number | null>(null);
  const maxPrice = ref<number | null>(null);

  const sliderMinValue = ref<number | null>(0);
  const sliderMaxValue = ref<number | null>(0);

  const priceRange = computed<IPriceRange>(() => {
    return { minPrice: minPrice.value, maxPrice: maxPrice.value };
  });

  watch([minPrice, maxPrice], () => emit('updatePriceRange', priceRange.value));

  onMounted(async () => {
    const { minPrice: minVal, maxPrice: maxVal } = await APIService.getPriceRange();
    [sliderMinValue.value, sliderMaxValue.value] = [minVal, maxVal];
    [minPrice.value, maxPrice.value] = [minVal, maxVal];
  });
</script>
