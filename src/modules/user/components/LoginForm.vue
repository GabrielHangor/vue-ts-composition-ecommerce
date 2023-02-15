<template>
  <form
    @click.stop
    @submit.prevent="handleSignIn"
    class="mx-3 flex w-full flex-col gap-5 rounded-xl bg-white p-5 md:mx-0 md:max-w-sm"
  >
    <h2 class="text-center text-[22px] font-bold">Sign in</h2>

    <div class="flex flex-col gap-2">
      <BaseButton type="button" variant="transparent" @click="signInWithProvider('google')">
        <div class="flex items-center justify-center gap-5">
          <img class="h-[24px] w-[24px]" src="/google-auth-icon.svg" alt="Google" />
          <span>Sign in with Google</span>
        </div>
      </BaseButton>
      <BaseButton type="button" variant="transparent" @click="signInWithProvider('github')">
        <div class="flex items-center justify-center gap-5">
          <img class="h-[24px] w-[24px]" src="/github-auth-icon.svg" alt="Github" />
          <span>Sign in with Github</span>
        </div>
      </BaseButton>
    </div>

    <div class="border-b"></div>

    <BaseInput v-model="login" label="Email address" :error="v$.login.$errors[0]?.$message" />
    <BaseInput
      v-model="password"
      type="password"
      label="Your Password"
      :error="v$.password.$errors[0]?.$message"
    />
    <BaseButton type="submit" variant="primary" :loading="isLoading">Sign in</BaseButton>

    <p
      role="button"
      class="text-center text-sm text-base-gray underline"
      @click="displayRestorePasswordForm"
    >
      Forgot your password?
    </p>
    <p role="button" class="text-center text-sm text-base-gray underline" @click="displaySignUpForm">
      Don't have an account? Sign up
    </p>
  </form>
</template>

<script setup lang="ts">
  import BaseInput from '@/shared/components/BaseInput.vue';
  import BaseButton from '@/shared/components/BaseButton.vue';
  import { computed, ref } from 'vue';
  import { useVuelidate } from '@vuelidate/core';
  import { helpers, required, email, minLength } from '@vuelidate/validators';
  import { useUser } from '@/modules/user/composables/useUser';
  import type { Provider } from '@supabase/supabase-js';
  import { useToast } from 'vue-toastification';

  const emit = defineEmits<{
    (e: 'display-sign-up-form'): void;
    (e: 'display-restore-password-form'): void;
    (e: 'hide-modal'): void;
  }>();

  const login = ref('');
  const password = ref('');

  const displaySignUpForm = () => emit('display-sign-up-form');
  const displayRestorePasswordForm = () => emit('display-restore-password-form');

  const { isLoading, error, signIn, signInWithOAuth } = useUser();
  const toast = useToast();

  const handleSignIn = async () => {
    const isFormValid = await v$.value.$validate();
    if (!isFormValid) return;

    await signIn({ email: login.value, password: password.value });

    if (error.value) {
      toast.error(error.value || 'Unknown error');
    } else {
      toast.success('Authentication completed');
      emit('hide-modal');
    }
  };

  const signInWithProvider = async (provider: Provider) => {
    await signInWithOAuth(provider);
  };

  // VALIDATION
  const validationRules = computed(() => ({
    login: { required, email },
    password: {
      required,
      password_validation: helpers.withMessage('Minimum 6 symbols length', minLength(6)),
    },
  }));

  const v$ = useVuelidate(validationRules, { login, password }, { $autoDirty: true });
</script>
