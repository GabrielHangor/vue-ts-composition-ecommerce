<template>
  <section class="h-fit w-full bg-orange-base/5">
    <div class="container mx-auto my-10 grid items-center gap-5 px-4 md:grid-cols-2 md:px-0">
      <BaseAutocomplete
        v-model="pickupFormValues.pickupFrom"
        label="Pick up from"
        :list-data="citiesListData"
        :error="pickupFormErrors.pickupFrom"
      />
      <div class="h-full">
        <BaseAutocomplete
          v-if="returnToDifferentLocation"
          v-model="pickupFormValues.dropOff"
          label="Drop-off"
          :list-data="citiesListData"
          :error="pickupFormErrors.dropOff"
        />
        <BaseCheckBox
          v-else
          v-model:checked="returnToDifferentLocation"
          @input="pickupFormValues.dropOff = ''"
          label="Return to different location"
          id="1"
        />
      </div>
      <div class="grid md:grid-cols-2">
        <BaseDatePicker v-model="pickupFormValues.pickupDate" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue';
  import BaseAutocomplete from '../BaseAutocomplete.vue';
  import BaseCheckBox from '../BaseCheckBox.vue';
  import BaseDatePicker from '../BaseDatePicker.vue';
  import { citiesListData } from '@/mocks/mocks';
  import { computed } from 'vue';

  const returnToDifferentLocation = ref(false);

  const pickupFormValues = ref({ pickupFrom: '', dropOff: '', pickupDate: '' });

  watch(
    pickupFormValues,
    (value) => {
      if (!returnToDifferentLocation.value) pickupFormValues.value.dropOff = value.pickupFrom;
    },
    { deep: true }
  );

  const pickupFormErrors = computed(() => {
    return {
      pickupFrom:
        citiesListData.includes(pickupFormValues.value.pickupFrom) ||
        pickupFormValues.value.pickupFrom === ''
          ? null
          : 'Select a city from the list',
      dropOff:
        citiesListData.includes(pickupFormValues.value.dropOff) || pickupFormValues.value.dropOff === ''
          ? null
          : 'Select a city from the list',
    };
  });
</script>
