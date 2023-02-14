<template>
  <div class="container">
    <form class="grid w-full gap-5 rounded-xl bg-orange-base/5 p-5" @submit.prevent="handleUpdate">
      <h2 class="font-semibold">Personal information</h2>
      <section class="grid gap-3 md:grid-cols-2">
        <BaseInput v-model="userDataForm.firstName" label="First name" />
        <BaseInput v-model="userDataForm.lastName" label="Last name" />
      </section>
      <h2 class="font-semibold">Contact information</h2>
      <section class="grid gap-3 md:grid-cols-2">
        <BaseInput v-model="userDataForm.email" label="Email" />
        <BaseInput v-model="userDataForm.phone" label="Phone" />
      </section>
      <h2 class="font-semibold">Address</h2>
      <section class="grid gap-3 md:grid-cols-2">
        <BaseInput v-model="userDataForm.country" label="Country" />
        <BaseInput v-model="userDataForm.city" label="City" />
        <BaseInput v-model="userDataForm.zipCode" label="Zip code" />
        <BaseInput v-model="userDataForm.street" label="Street address" />
      </section>
      <div class="flex justify-center pt-3">
        <BaseButton :loading="isLoading" class="md:w-1/4">Submit changes</BaseButton>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
  import { useUser } from '@/modules/user/composables/useUser';
  import BaseButton from '@/shared/components/BaseButton.vue';
  import BaseInput from '@/shared/components/BaseInput.vue';
  import { ref } from 'vue';
  import type { IUserMetaData } from '@/modules/user/models/user.interfaces';

  const { user, isLoading, updateUserData } = useUser();

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
    await updateUserData(userDataForm.value);
  };
</script>
