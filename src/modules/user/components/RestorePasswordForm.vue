<template>
  <form
    @click.stop
    @submit.prevent="handleResetPassword"
    class="mx-3 w-full rounded-xl bg-white p-5 md:mx-0 md:max-w-sm"
  >
    <section class="flex w-full flex-col gap-5">
      <h2 class="text-center text-[22px] font-bold">Restore password</h2>

      <BaseInput v-model="login" label="Email address" :error="v$.login.$errors[0]?.$message" />

      <BaseButton type="submit" variant="primary" :loading="isLoading">Restore password</BaseButton>

      <p role="button" class="text-center text-sm text-base-gray underline" @click="displaySignUpForm">
        Sign up
      </p>
    </section>
  </form>
</template>

<script setup lang="ts">
  import BaseInput from '@/shared/components/BaseInput.vue';
  import BaseButton from '@/shared/components/BaseButton.vue';
  import { computed, ref } from 'vue';
  import { useVuelidate } from '@vuelidate/core';
  import { email, required } from '@vuelidate/validators';
  import { useUser } from '@/modules/user/composables/useUser';
  import BaseAdjustableHeightWrapper from '@/shared/components/BaseAdjustableHeightWrapper.vue';
  import { useToast } from 'vue-toastification';

  const emit = defineEmits<{
    (e: 'display-sign-up-form'): void;
  }>();

  const login = ref('');

  const displaySignUpForm = () => emit('display-sign-up-form');

  const { isLoading, error, sendPasswordResetLink } = useUser();
  const toast = useToast();

  const handleResetPassword = async () => {
    const isFormValid = await v$.value.$validate();
    if (!isFormValid) return;

    await sendPasswordResetLink(login.value);

    if (error.value) {
      toast.error(error.value || 'Unknown error');
    } else {
      toast.success(`Confirmation link successfully sent to ${login.value}`);
    }
  };

  // VALIDATION
  const validationRules = computed(() => ({
    login: { required, email },
  }));

  const v$ = useVuelidate(validationRules, { login }, { $autoDirty: true });
</script>
