<template>
  <form
    @click.stop
    @submit.prevent="handleSignUp"
    class="mx-3 flex w-full flex-col gap-5 rounded-xl bg-white p-5 md:mx-0 md:max-w-sm"
  >
    <h2 class="text-center text-[22px] font-bold">Sign up</h2>

    <BaseInput v-model="login" label="Email address" :error="v$.login.$errors[0]?.$message" />
    <BaseInput
      type="password"
      v-model="password"
      label="Your Password"
      :error="v$.password.$errors[0]?.$message"
    />
    <BaseInput
      v-model="confirmedPassword"
      type="password"
      label="Confirm Password"
      :error="v$.confirmedPassword.$errors[0]?.$message"
    />
    <BaseButton type="submit" variant="primary" :loading="isLoading">Sign up</BaseButton>

    <p role="button" class="text-center text-sm text-base-gray underline" @click="displaySignInForm">
      Sign in
    </p>
  </form>
</template>

<script setup lang="ts">
  import BaseInput from '@/shared/components/BaseInput.vue';
  import BaseButton from '@/shared/components/BaseButton.vue';
  import { computed, ref } from 'vue';
  import { useVuelidate } from '@vuelidate/core';
  import { email, helpers, minLength, required, sameAs } from '@vuelidate/validators';
  import { useUser } from '@/modules/user/composables/useUser';
  import { useToast } from 'vue-toastification';

  const emit = defineEmits<{
    (e: 'display-sign-in-form'): void;
    (e: 'hide-modal'): void;
  }>();

  const login = ref('');
  const password = ref('');
  const confirmedPassword = ref('');

  const displaySignInForm = () => emit('display-sign-in-form');

  const { isLoading, error, signUp } = useUser();
  const toast = useToast();

  const handleSignUp = async () => {
    const isFormValid = await v$.value.$validate();
    if (!isFormValid) return;

    await signUp({ email: login.value, password: password.value });

    if (error.value) {
      toast.error(error.value || 'Unknown error');
    } else {
      toast.success(`User ${login.value} registered`);
      emit('hide-modal');
    }
  };

  // VALIDATION
  const validationRules = computed(() => ({
    login: { required, email },
    confirmedPassword: {
      required,
      confirmed_password_validation: helpers.withMessage('Passwords do not match', sameAs(password)),
    },
    password: {
      required,
      password_validation: helpers.withMessage('Minimum 6 symbols length', minLength(6)),
    },
  }));

  const v$ = useVuelidate(validationRules, { login, password, confirmedPassword }, { $autoDirty: true });
</script>
