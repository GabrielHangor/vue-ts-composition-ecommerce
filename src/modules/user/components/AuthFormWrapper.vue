<template>
  <component
    :is="forms[activeComponent]"
    :key="activeComponent"
    @display-sign-up-form="activeComponent = 'SignupForm'"
    @display-sign-in-form="activeComponent = 'LoginForm'"
    @hide-modal="hideModal"
  />
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import LoginForm from '@/modules/user/components/LoginForm.vue';
  import SignupForm from '@/modules/user/components/SignupForm.vue';

  const emit = defineEmits<{
    (e: 'hide-modal'): void;
  }>();

  const forms = { LoginForm, SignupForm };

  const activeComponent = ref('LoginForm');

  const hideModal = () => emit('hide-modal');
</script>
