<template>
  <button
    class="rounded-lg py-3.5 px-4 font-semibold leading-5 transition duration-300 ease-in-out disabled:cursor-not-allowed disabled:opacity-60"
    :class="btnClassList"
    :disabled="loading || isDisabled"
  >
    <div v-if="loading" class="flex justify-center"><BaseButtonSpinner />Loading...</div>
    <slot v-else></slot>
  </button>
</template>

<script setup lang="ts">
  import type { PropType } from 'vue';
  import BaseButtonSpinner from '@/components/BaseButtonSpinner.vue';
  import type { BtnVariant } from '@/types';

  const props = defineProps({
    variant: { type: String as PropType<BtnVariant>, default: 'primary' },
    loading: { type: Boolean },
    isDisabled: { type: Boolean },
  });

  const btnVariantClasses = {
    primary: 'bg-orange-base text-white hover:bg-orange-hovered disabled:hover:bg-orange-base',
    transparent: 'bg-transparent border border-gray-300 hover:border-base-gray',
    'transparent-orange':
      'text-grey font-medium bg-transparent  border-orange-base hover:bg-orange-hovered hover:text-white border-[1px] py-[10px] px-[14px] rounded-[5px]',
  };

  const btnClassList = btnVariantClasses[props.variant];
</script>
~
