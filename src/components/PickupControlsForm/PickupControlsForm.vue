<template>
  <section class="h-[270px] w-full bg-orange-base/5">
    <div class="container mx-auto h-full px-4 md:px-0">
      <BaseAutocomplete v-model="pickupFormValues.pickupFrom" label="Pick up from" />
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import BaseAutocomplete from '../BaseAutocomplete.vue';

  const pickupFormValues = ref({
    pickupFrom: null,
  });
</script>
