<template>
  <div class="relative">
    <div class="slider-track" :style="{ background: sliderTrackBackground }"></div>
    <input
      type="range"
      :min="sliderMinValue"
      :max="sliderMaxValue"
      :value="minPrice"
      :title="minPrice"
      @input="updateMinPrice($event.target.value)"
    />
    <input
      type="range"
      :min="sliderMinValue"
      :max="sliderMaxValue"
      :title="maxPrice"
      :value="maxPrice"
      @input="updateMaxPrice($event.target.value)"
    />
  </div>
</template>

<script setup lang="ts">
  import { computed, watch } from 'vue';

  interface Props {
    minPrice: number | null;
    maxPrice: number | null;
    sliderMinValue: number;
    sliderMaxValue: number;
    minGap: number;
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{
    (e: 'update:minPrice', minPrice: number): void;
    (e: 'update:maxPrice', maxPrice: number | null): void;
  }>();

  const updateMinPrice = (minValue: number) => emit('update:minPrice', minValue);

  watch(
    () => props.minPrice,
    (minValue) => {
      if (!minValue || !props.maxPrice) return;

      if (props.maxPrice - minValue <= props.minGap) {
        emit('update:minPrice', props.maxPrice - props.minGap);
      }
    }
  );

  const updateMaxPrice = (maxValue: number | null) => emit('update:maxPrice', maxValue);

  watch(
    () => props.maxPrice,
    (maxValue) => {
      if (maxValue === 0) emit('update:maxPrice', null);
      if (!maxValue || !props.minPrice) return;

      if (maxValue - props.minPrice <= props.minGap) {
        emit('update:maxPrice', props.minPrice + props.minGap);
      }
    }
  );

  const sliderTrackBackground = computed(() => {
    const minValue = props.minPrice || 0;
    const maxValue = props.maxPrice || 0;

    const minValPercent =
      ((minValue - props.sliderMinValue) / (props.sliderMaxValue - props.sliderMinValue)) * 100;
    const maxValPercent =
      ((maxValue - props.sliderMinValue) / (props.sliderMaxValue - props.sliderMinValue)) * 100;

    return `linear-gradient(to right, #8F8F8F ${minValPercent}% , #E85638 ${minValPercent}% , #E85638 ${maxValPercent}%, #8F8F8F ${maxValPercent}%)`;
  });
</script>

<style lang="postcss">
  .slider-track {
    @apply absolute top-0 bottom-0 m-auto h-[2px] w-full rounded;
  }

  input[type='range'] {
    @apply pointer-events-none absolute top-0 bottom-0 m-auto w-full appearance-none bg-transparent outline-none;
  }

  input[type='range']::-webkit-slider-runnable-track {
    @apply h-[1px] appearance-none;
  }

  input[type='range']::-moz-range-track {
    @apply h-[1px] appearance-none;
  }

  input[type='range']::-ms-track {
    @apply h-[1px] appearance-none;
  }

  input[type='range']::-webkit-slider-thumb {
    @apply pointer-events-auto mt-[-9px] h-[20px] w-[20px] cursor-pointer appearance-none rounded-3xl bg-orange-base;
  }

  input[type='range']::-moz-range-thumb {
    @apply pointer-events-auto h-[20px] w-[20px] cursor-pointer appearance-none rounded-[50%] bg-orange-base;
  }

  input[type='range']::-ms-thumb {
    @apply pointer-events-auto h-[20px] w-[20px] cursor-pointer appearance-none rounded-[50%] bg-orange-base;
  }

  input[type='range']:active::-webkit-slider-thumb {
    @apply bg-orange-700;
  }
</style>
