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
  import CatalogService from '@/modules/catalog/services/CatalogService';
  import { ref, watchEffect } from 'vue';
  import type { IVehicleEntity } from '@/modules/catalog/models/catalog.models';
  import type { PostgrestError } from '@supabase/supabase-js';

  const title = import.meta.env.BASE_URL;

  interface Props {
    id: string;
  }

  const props = defineProps<Props>();

  const vehicle = ref<IVehicleEntity>();
  const error = ref<PostgrestError | null>(null);

  watchEffect(async () => {
    const { data, error: fetchError } = await CatalogService.getVehicleById(props.id);

    vehicle.value = data?.[0];

    if (fetchError) error.value = fetchError;
  });
</script>
