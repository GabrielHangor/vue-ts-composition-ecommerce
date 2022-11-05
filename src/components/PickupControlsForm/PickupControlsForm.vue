<template>
  <section class="h-fit w-full bg-orange-base/5">
    <div class="container mx-auto my-10 grid items-center gap-5 px-4 md:grid-cols-2 md:px-0">
      <BaseAutocomplete
        v-model="pickupFrom"
        label="Pick up from"
        :list-data="citiesListData"
        :error="pickupFormErrors.pickupFrom"
      />
      <div class="h-full">
        <BaseAutocomplete
          v-if="returnToDifferentLocation"
          v-model="dropOff"
          label="Drop-off"
          :list-data="citiesListData"
          :error="pickupFormErrors.dropOff"
        />
        <BaseCheckBox
          v-else
          v-model:checked="returnToDifferentLocation"
          @input="dropOff = ''"
          label="Return to different location"
          id="1"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue';
  import BaseAutocomplete from '../BaseAutocomplete.vue';
  import BaseCheckBox from '../BaseCheckBox.vue';
  import { citiesListData } from '@/mocks/mocks';
  import { computed } from 'vue';

  const returnToDifferentLocation = ref(false);

  const pickupFrom = ref('');
  const dropOff = ref('');

  watch(pickupFrom, (value) => {
    if (!returnToDifferentLocation.value) dropOff.value = value;
  });

  const pickupFormErrors = computed(() => {
    return {
      pickupFrom:
        citiesListData.includes(pickupFrom.value) || pickupFrom.value === ''
          ? null
          : 'Select a city from the list',
      dropOff:
        citiesListData.includes(dropOff.value) || dropOff.value === ''
          ? null
          : 'Select a city from the list',
    };
  });
</script>
