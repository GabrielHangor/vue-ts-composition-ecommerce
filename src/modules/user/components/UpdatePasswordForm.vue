<template>
  <form
    @click.stop
    @submit.prevent="handleUpdatePassword"
    class="mx-3 w-full rounded-xl bg-white p-5 md:mx-0 md:max-w-sm"
  >
    <section v-if="!showSuccessNotification" class="flex w-full flex-col gap-5">
      <h2 class="text-center text-[22px] font-bold">Update password</h2>

      <BaseInput
        type="password"
        v-model="password"
        label="New Password"
        :error="v$.password.$errors[0]?.$message"
      />
      <BaseInput
        v-model="confirmedPassword"
        type="password"
        label="Confirm Password"
        :error="v$.confirmedPassword.$errors[0]?.$message"
      />
      <BaseButton type="submit" variant="primary" :loading="isLoading">Update password</BaseButton>

      <span v-if="error" class="block text-center text-sm text-error">{{ error }}</span>
    </section>
    <section v-else class="flex w-full flex-col gap-5">
      <img class="mx-auto w-[100px]" src="/success-icon.svg" alt="Success" />
      <p class="text-center">Password successfully changed</p>
    </section>
  </form>
</template>

<script setup lang="ts">
  import BaseInput from '@/shared/components/BaseInput.vue';
  import BaseButton from '@/shared/components/BaseButton.vue';
  import { computed, ref } from 'vue';
  import { useVuelidate } from '@vuelidate/core';
  import { helpers, minLength, required, sameAs } from '@vuelidate/validators';
  import { useAuth } from '@/modules/user/composables/useAuth';
  import { useRouter } from 'vue-router';

  const emit = defineEmits<{
    (e: 'hide-modal'): void;
  }>();

  const password = ref('');
  const confirmedPassword = ref('');
  const showSuccessNotification = ref(false);

  const { isLoading, error, updatePassword } = useAuth();
  const router = useRouter();

  const handleUpdatePassword = async () => {
    const isFormValid = await v$.value.$validate();
    if (!isFormValid) return;

    await updatePassword(password.value);

    if (!error.value) {
      showSuccessNotification.value = true;
      await router.replace({ query: {} });

      setTimeout(() => emit('hide-modal'), 5000);
    }
  };

  // VALIDATION
  const validationRules = computed(() => ({
    confirmedPassword: {
      required,
      confirmed_password_validation: helpers.withMessage('Passwords do not match', sameAs(password)),
    },
    password: {
      required,
      password_validation: helpers.withMessage('Minimum 6 symbols length', minLength(6)),
    },
  }));

  const v$ = useVuelidate(validationRules, { password, confirmedPassword }, { $autoDirty: true });
</script>
