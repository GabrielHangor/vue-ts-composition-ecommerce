<template>
  <BaseAdjustableHeightWrapper>
    <component
      :is="forms[activeComponent]"
      :key="activeComponent"
      @display-sign-up-form="activeComponent = 'SignupForm'"
      @display-sign-in-form="activeComponent = 'LoginForm'"
      @display-restore-password-form="activeComponent = 'RestorePasswordForm'"
      @hide-modal="hideModal"
    />
  </BaseAdjustableHeightWrapper>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import LoginForm from '@/modules/user/components/LoginForm.vue';
  import SignupForm from '@/modules/user/components/SignupForm.vue';
  import RestorePasswordForm from '@/modules/user/components/RestorePasswordForm.vue';
  import UpdatePasswordForm from '@/modules/user/components/UpdatePasswordForm.vue';
  import { useRoute } from 'vue-router';
  import BaseAdjustableHeightWrapper from '@/shared/components/BaseAdjustableHeightWrapper.vue';

  const emit = defineEmits<{
    (e: 'hide-modal'): void;
  }>();

  const forms = { LoginForm, SignupForm, RestorePasswordForm, UpdatePasswordForm };

  const activeComponent = ref('LoginForm');

  const route = useRoute();
  if (route.query['update_password']) activeComponent.value = 'UpdatePasswordForm';

  const hideModal = () => emit('hide-modal');
</script>
