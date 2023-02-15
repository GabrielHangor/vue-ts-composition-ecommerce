<template>
  <div class="container">
    <form class="grid w-full gap-5 rounded-xl bg-orange-base/5 p-5" @submit.prevent="handleUpdate">
      <h2 class="font-semibold">Personal information</h2>
      <section class="grid gap-3 md:grid-cols-2">
        <BaseInput
          v-model="userDataForm.firstName"
          label="First name"
          :error="v$.firstName.$errors[0]?.$message"
        />
        <BaseInput
          v-model="userDataForm.lastName"
          label="Last name"
          :error="v$.lastName.$errors[0]?.$message"
        />
      </section>
      <h2 class="font-semibold">Contact information</h2>
      <section class="grid gap-3 md:grid-cols-2">
        <BaseInput v-model="userDataForm.email" label="Email" :error="v$.email.$errors[0]?.$message" />
        <BaseInput
          type="number"
          v-model="userDataForm.phone"
          label="Phone"
          :error="v$.phone.$errors[0]?.$message"
        />
      </section>
      <h2 class="font-semibold">Address</h2>
      <section class="grid gap-3 md:grid-cols-2">
        <BaseInput v-model="userDataForm.country" label="Country" />
        <BaseInput v-model="userDataForm.city" label="City" />
        <BaseInput v-model="userDataForm.zipCode" label="Zip code" />
        <BaseInput v-model="userDataForm.street" label="Street address" />
      </section>

      <div class="flex flex-col items-center justify-center pt-3">
        <BaseButton :loading="isLoading" :is-disabled="!v$.$anyDirty" class="md:w-1/4">
          Submit changes
        </BaseButton>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
  import { useUser } from '@/modules/user/composables/useUser';
  import BaseButton from '@/shared/components/BaseButton.vue';
  import BaseInput from '@/shared/components/BaseInput.vue';
  import { computed, ref } from 'vue';
  import type { IUserMetaData } from '@/modules/user/models/user.interfaces';
  import { alpha, email, helpers, minLength, required } from '@vuelidate/validators';
  import { useVuelidate } from '@vuelidate/core';
  import { useToast } from 'vue-toastification';

  const { user, error, isLoading, updateUserData } = useUser();
  const toast = useToast();

  const userDataForm = ref<IUserMetaData>({
    email: user.value?.user_metadata?.email || '',
    phone: user.value?.user_metadata?.phone || '',
    firstName: user.value?.user_metadata?.firstName || '',
    lastName: user.value?.user_metadata?.lastName || '',
    country: user.value?.user_metadata?.country || '',
    city: user.value?.user_metadata?.city || '',
    zipCode: user.value?.user_metadata?.zipCode || '',
    street: user.value?.user_metadata?.street || '',
  });

  const handleUpdate = async () => {
    const isFormValid = await v$.value.$validate();
    if (!isFormValid) return;

    await updateUserData(userDataForm.value);

    if (error.value) {
      toast.error(error.value || 'Unknown error');
    } else {
      toast.success('User information updated');
    }

    v$.value.$reset();
  };

  // VALIDATION
  const validationRules = computed(() => ({
    email: { required, email },
    phone: { required, phone_validation: helpers.withMessage('Minimum 6 digits', minLength(6)) },
    firstName: { required, alpha },
    lastName: { required, alpha },
    country: {},
    city: {},
    zipCode: {},
    street: {},
  }));

  const v$ = useVuelidate(validationRules, userDataForm, { $autoDirty: true });
</script>
