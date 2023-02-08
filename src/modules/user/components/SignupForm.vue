<template>
  <BaseAdjustableHeightWrapper>
    <form
      @click.stop
      @submit.prevent="submitForm"
      class="mx-3 flex w-full flex-col gap-5 rounded-xl bg-white p-5 md:mx-0 md:max-w-sm"
    >
      <h2 class="text-center text-[22px] font-bold">Sign up</h2>

      <BaseInput v-model="email" label="Email address" />
      <BaseInput v-model="password" label="Your Password" />
      <BaseButton type="submit" variant="primary">Sign up</BaseButton>

      <p role="button" class="text-center text-sm text-base-gray underline" @click="displaySignInForm">
        Sign in
      </p>
    </form>
  </BaseAdjustableHeightWrapper>
</template>

<script setup lang="ts">
  import BaseAdjustableHeightWrapper from '@/shared/components/BaseAdjustableHeightWrapper.vue';
  import BaseInput from '@/shared/components/BaseInput.vue';
  import BaseButton from '@/shared/components/BaseButton.vue';
  import { ref } from 'vue';

  // const props = defineProps<Props>();

  const emit = defineEmits<{
    (e: 'display-sign-in-form'): void;
    (e: 'hide-modal'): void;
  }>();

  const email = ref('');
  const password = ref('');

  const displaySignInForm = () => emit('display-sign-in-form');
  const submitForm = () => console.log('form submitted');
</script>
