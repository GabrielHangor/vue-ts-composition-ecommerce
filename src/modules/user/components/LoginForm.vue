<template>
  <BaseAdjustableHeightWrapper>
    <form
      @click.stop
      @submit.prevent="submitForm"
      class="mx-3 flex w-full flex-col gap-5 rounded-xl bg-white p-5 md:mx-0 md:max-w-sm"
    >
      <h2 class="text-center text-[22px] font-bold">Sign in</h2>

      <div class="flex flex-col gap-2">
        <BaseButton type="button" variant="transparent">
          <div class="flex items-center justify-center gap-5">
            <img class="h-[24px] w-[24px]" src="/google-auth-icon.svg" alt="Google" />
            <span>Sign in with Google</span>
          </div>
        </BaseButton>
        <BaseButton type="button" variant="transparent">
          <div class="flex items-center justify-center gap-5">
            <img class="h-[24px] w-[24px]" src="/github-auth-icon.svg" alt="Github" />
            <span>Sign in with Github</span>
          </div>
        </BaseButton>
      </div>

      <div class="border-b"></div>

      <BaseInput v-model="email" label="Email address" />
      <BaseInput v-model="password" label="Your Password" />
      <BaseButton type="submit" variant="primary">Sign in</BaseButton>

      <p role="button" class="text-center text-sm text-base-gray underline">Forgot your password?</p>
      <p role="button" class="text-center text-sm text-base-gray underline" @click="displaySignUpForm">
        Don't have an account? Sign up
      </p>
    </form>
  </BaseAdjustableHeightWrapper>
</template>

<script setup lang="ts">
  import BaseInput from '@/shared/components/BaseInput.vue';
  import BaseButton from '@/shared/components/BaseButton.vue';
  import { ref } from 'vue';
  import BaseAdjustableHeightWrapper from '@/shared/components/BaseAdjustableHeightWrapper.vue';

  const email = ref('');
  const password = ref('');

  const emit = defineEmits<{
    (e: 'display-sign-up-form'): void;
    (e: 'hide-modal'): void;
  }>();

  const displaySignUpForm = () => emit('display-sign-up-form');
  const submitForm = () => console.log('form submitted');
</script>
