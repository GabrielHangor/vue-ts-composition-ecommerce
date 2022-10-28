<template>
  <button
    class="py-3.5 px-4 leading-5 rounded-lg min-w-[200px] font-semibold transition ease-in-out duration-300 disabled:opacity-30 disabled:cursor-wait"
    :class="btnVariant"
    :disabled="loading"
  >
    <div v-if="loading" class="flex justify-center"><BaseButtonSpinner />Loading...</div>
    <slot v-else />
  </button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import BaseButtonSpinner from '@/components/BaseButtonSpinner.vue';

type Variant = 'primary' | 'transparent';

const props = defineProps({
  variant: {
    type: String as PropType<Variant>,
    default: 'primary',
  },
  loading: {
    type: Boolean,
  },
});

const btnVariantClasses = {
  primary: 'bg-orange-base text-white hover:bg-orange-hovered',
  transparent: 'text-grey bg-transparent border-2 border-grey hover:border-black ',
};

const btnVariant = btnVariantClasses[props.variant];
</script>
