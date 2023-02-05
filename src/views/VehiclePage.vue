<template>
  <div class="container">
    <h1>This is Vehicle ID : {{ id }}</h1>
    <section v-if="vehicle">
      <h2 v-for="(value, propName) in vehicle" :key="propName">{{ propName }}:{{ value }}</h2>
      <img :src="`${title}${vehicle.imgPath}`" alt="Car" />
    </section>
    <h2 v-if="error">Error fetching vehicle data...</h2>
  </div>
</template>

<script setup lang="ts">
  import VehiclesService from '@/services/VehiclesService';
  import { ref, watchEffect } from 'vue';
  import type { IVehicleEntity } from '@/interfaces';
  import type { PostgrestError } from '@supabase/supabase-js';

  const title = import.meta.env.BASE_URL;

  interface Props {
    id: string;
  }

  const props = defineProps<Props>();

  const vehicle = ref<IVehicleEntity>();
  const error = ref<PostgrestError | null>(null);

  watchEffect(async () => {
    const { data, error: fetchError } = await VehiclesService.getVehicleById(props.id);

    vehicle.value = data?.[0];

    if (fetchError) error.value = fetchError;
  });
</script>
