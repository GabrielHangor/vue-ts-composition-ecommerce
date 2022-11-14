<template>
  <form @submit.prevent="handleSubmit" class="h-fit w-full bg-orange-base/5">
    <div class="container mx-auto mt-10 mb-8 grid items-center gap-4 px-4 md:grid-cols-2 md:px-0">
      <BaseAutocomplete
        v-model="locationAndTimeFormValues.pickupFrom"
        class="h-full"
        label="Pick up from"
        :list-data="citiesListData"
        :error="v$.pickupFrom.$errors[0]?.$message"
      />

      <div class="h-full">
        <BaseAutocomplete
          v-if="returnToDifferentLocation"
          v-model="locationAndTimeFormValues.dropOff"
          label="Drop-off"
          :list-data="citiesListData"
          :error="v$.dropOff.$errors[0]?.$message"
        />

        <BaseCheckBox
          v-else
          v-model:checked="returnToDifferentLocation"
          @change="locationAndTimeFormValues.dropOff = ''"
          label="Return to different location"
          id="1"
        />
      </div>
      <div class="grid h-full gap-4 lg:grid-cols-2">
        <BaseDatePicker
          v-model="locationAndTimeFormValues.pickupDate"
          label="Pick up date"
          :error="v$.pickupDate.$errors[0]?.$message"
        />
        <BaseTimePicker
          v-model="locationAndTimeFormValues.pickupTime"
          label="Pick up time"
          :error="v$.pickupTime.$errors[0]?.$message"
        />
      </div>
      <div class="grid h-full gap-4 lg:grid-cols-2">
        <BaseDatePicker
          v-model="locationAndTimeFormValues.dropOffDate"
          label="Drop-off date"
          :error="v$.dropOffDate.$errors[0]?.$message"
        />
        <BaseTimePicker
          v-model="locationAndTimeFormValues.dropOffTime"
          label="Drop off time"
          :error="v$.dropOffTime.$errors[0]?.$message"
        />
      </div>
    </div>
    <div class="container mx-auto mb-8 flex justify-center">
      <BaseButton class="w-[272px]">Search</BaseButton>
    </div>
  </form>
</template>

<script lang="ts" setup>
  import { computed, ref, watch } from 'vue';
  import BaseAutocomplete from '../BaseAutocomplete.vue';
  import BaseCheckBox from '../BaseCheckBox.vue';
  import BaseDatePicker from '../BaseDatePicker.vue';
  import BaseButton from '../BaseButton.vue';
  import BaseTimePicker from '../BaseTimePicker.vue';
  import { citiesListData } from '@/mocks/mocks';
  import { useVuelidate } from '@vuelidate/core';
  import { helpers, required } from '@vuelidate/validators';
  import type { ILocationAndTimeFormValues } from '@/types';

  const emit = defineEmits<{
    (e: 'updateLocationAndTimeFilters', locationAndTimeFormValues: ILocationAndTimeFormValues): void;
  }>();

  const returnToDifferentLocation = ref(false);

  const isLocationCorrect = (location: string) => {
    if (citiesListData.includes(location)) return true;

    return false;
  };

  const locationAndTimeFormValues = ref<ILocationAndTimeFormValues>({
    pickupFrom: '',
    dropOff: '',
    pickupDate: '',
    pickupTime: '',
    dropOffDate: '',
    dropOffTime: '',
  });

  const validationRules = computed(() => ({
    pickupFrom: {
      required,
      location_validation: helpers.withMessage('Select a city from the list', isLocationCorrect),
    },
    dropOff: {
      required,
      location_validation: helpers.withMessage('Select a city from the list', isLocationCorrect),
    },
    pickupDate: { required },
    pickupTime: { required },
    dropOffDate: { required },
    dropOffTime: { required },
  }));

  const v$ = useVuelidate(validationRules, locationAndTimeFormValues, { $autoDirty: true });

  const handleSubmit = async () => {
    const isFormValidated = await v$.value.$validate();

    if (isFormValidated) emit('updateLocationAndTimeFilters', { ...locationAndTimeFormValues.value });
  };

  watch(
    locationAndTimeFormValues,
    (value) => {
      if (!returnToDifferentLocation.value) locationAndTimeFormValues.value.dropOff = value.pickupFrom;
    },
    { deep: true }
  );
</script>
