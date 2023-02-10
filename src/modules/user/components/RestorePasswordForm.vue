<template>
  <form
    @click.stop
    @submit.prevent="handleResetPassword"
    class="mx-3 w-full rounded-xl bg-white p-5 md:mx-0 md:max-w-sm"
  >
    <transition name="fade" mode="out-in">
      <section v-if="!showSuccessNotification" class="flex w-full flex-col gap-5">
        <h2 class="text-center text-[22px] font-bold">Restore password</h2>

        <BaseInput v-model="login" label="Email address" :error="v$.login.$errors[0]?.$message" />

        <BaseButton type="submit" variant="primary" :loading="isLoading">Restore password</BaseButton>

        <span v-if="error" class="block text-center text-sm text-error">{{ error }}</span>
        <p role="button" class="text-center text-sm text-base-gray underline" @click="displaySignUpForm">
          Sign up
        </p>
      </section>
      <section v-else class="flex w-full flex-col gap-5">
        <img class="mx-auto w-[100px]" src="/success-icon.svg" alt="Success" />
        <p class="text-center">
          Confirmation link successfully sent to
          <span class="font-bold">{{ login }}</span>
        </p>
      </section>
    </transition>
  </form>
</template>

<script setup lang="ts">
  import BaseInput from '@/shared/components/BaseInput.vue';
  import BaseButton from '@/shared/components/BaseButton.vue';
  import { computed, ref } from 'vue';
  import { useVuelidate } from '@vuelidate/core';
  import { email, required } from '@vuelidate/validators';
  import { useAuth } from '@/modules/user/composables/useAuth';
  import BaseAdjustableHeightWrapper from '@/shared/components/BaseAdjustableHeightWrapper.vue';

  const emit = defineEmits<{
    (e: 'display-sign-up-form'): void;
  }>();

  const login = ref('');
  const showSuccessNotification = ref(false);

  const displaySignUpForm = () => emit('display-sign-up-form');

  const { isLoading, error, sendPasswordResetLink } = useAuth();

  const handleResetPassword = async () => {
    const isFormValid = await v$.value.$validate();
    if (!isFormValid) return;

    await sendPasswordResetLink(login.value);
    showSuccessNotification.value = true;
  };

  // VALIDATION
  const validationRules = computed(() => ({
    login: { required, email },
  }));

  const v$ = useVuelidate(validationRules, { login }, { $autoDirty: true });
</script>
