<template>
  <form class="h-fit w-full bg-orange-base/5">
    <div class="container mx-auto mt-10 mb-8 grid items-center gap-4 px-4 md:grid-cols-2 md:px-0">
      <BaseAutocomplete
        v-model="pickupFormValues.pickupFrom"
        class="h-full"
        label="Pick up from"
        :list-data="citiesListData"
        :error="v$.pickupFrom.$errors[0]?.$message"
      />

      <div class="h-full">
        <BaseAutocomplete
          v-if="returnToDifferentLocation"
          v-model="pickupFormValues.dropOff"
          label="Drop-off"
          :list-data="citiesListData"
          :error="v$.dropOff.$errors[0]?.$message"
        />

        <BaseCheckBox
          v-else
          v-model:checked="returnToDifferentLocation"
          @change="pickupFormValues.dropOff = ''"
          label="Return to different location"
          id="1"
        />
      </div>
      <div class="grid h-full gap-4 lg:grid-cols-2">
        <BaseDatePicker
          v-model="pickupFormValues.pickupDate"
          label="Pick up date"
          :error="v$.pickupDate.$errors[0]?.$message"
        />
        <BaseTimePicker
          v-model="pickupFormValues.pickupTime"
          label="Pick up time"
          :error="v$.pickupTime.$errors[0]?.$message"
        />
      </div>
      <div class="grid h-full gap-4 lg:grid-cols-2">
        <BaseDatePicker
          v-model="pickupFormValues.dropOffDate"
          label="Drop-off date"
          :error="v$.dropOffDate.$errors[0]?.$message"
        />
        <BaseTimePicker
          v-model="pickupFormValues.dropOffTime"
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
  import { ref, watch } from 'vue';
  import BaseAutocomplete from '../BaseAutocomplete.vue';
  import BaseCheckBox from '../BaseCheckBox.vue';
  import BaseDatePicker from '../BaseDatePicker.vue';
  import BaseButton from '../BaseButton.vue';
  import BaseTimePicker from '../BaseTimePicker.vue';
  import { citiesListData } from '@/mocks/mocks';
  import { useVuelidate } from '@vuelidate/core';
  import { required } from '@vuelidate/validators';

  const returnToDifferentLocation = ref(false);

  const pickupFormValues = ref({
    pickupFrom: '',
    dropOff: '',
    pickupDate: '',
    pickupTime: '',
    dropOffDate: '',
    dropOffTime: '',
  });

  const validationRules = {
    pickupFrom: { required },
    dropOff: { required },
    pickupDate: { required },
    pickupTime: { required },
    dropOffDate: { required },
    dropOffTime: { required },
  };

  const v$ = useVuelidate(validationRules, pickupFormValues, { $autoDirty: true });

  watch(
    pickupFormValues,
    (value) => {
      if (!returnToDifferentLocation.value) pickupFormValues.value.dropOff = value.pickupFrom;
    },
    { deep: true }
  );
</script>
