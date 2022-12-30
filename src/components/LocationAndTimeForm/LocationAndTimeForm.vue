<template>
  <BaseCollapse :initial-visibility="initialVisibility">
    <template #controls="{ toggleVisibility, isTransitioning, isVisible }">
      <section v-if="!initialVisibility && !isVisible" class="bg-orange-base/5 py-8">
        <BaseButton class="mx-auto block" :is-disabled="isTransitioning" @click="toggleVisibility"
          >Choose Location
        </BaseButton>
      </section>
    </template>
    <template #default="{ isVisible }">
      <form v-if="isVisible" @submit.prevent="handleSubmit" class="h-fit bg-orange-base/5">
        <div
          class="container order-2 mx-auto grid items-center gap-4 px-4 pt-10 pb-8 md:order-1 md:grid-cols-2"
        >
          <BaseAutocomplete
            v-model="formValues.pickupFrom"
            class="h-full"
            label="Pick up from"
            :list-data="citiesListData"
            :error="v$.pickupFrom.$errors[0]?.$message"
          />

          <div class="h-full">
            <BaseAutocomplete
              v-if="returnToDifferentLocation"
              v-model="formValues.dropOff"
              label="Drop-off"
              :list-data="citiesListData"
              :error="v$.dropOff.$errors[0]?.$message"
            />

            <BaseCheckBox
              v-else
              v-model:checked="returnToDifferentLocation"
              @change="formValues.dropOff = ''"
              label="Return to different location"
              id="1"
            />
          </div>
          <div class="grid h-full gap-4 lg:grid-cols-2">
            <BaseDatePicker v-model="formValues.pickupDate" label="Pick up date" />
            <BaseTimePicker v-model="formValues.pickupTime" label="Pick up time" />
          </div>
          <div class="grid h-full gap-4 lg:grid-cols-2">
            <BaseDatePicker v-model="formValues.dropOffDate" label="Drop-off date" />
            <BaseTimePicker v-model="formValues.dropOffTime" label="Drop off time" />
          </div>
        </div>

        <div class="container mx-auto flex justify-center pb-10">
          <BaseButton :loading="isLoading" class="w-[272px]">Search</BaseButton>
        </div>
      </form>
    </template>
  </BaseCollapse>
</template>

<script lang="ts" setup>
  import { computed, type PropType, ref, watch } from 'vue';
  import BaseAutocomplete from '../BaseAutocomplete.vue';
  import BaseCheckBox from '../BaseCheckBox.vue';
  import BaseDatePicker from '../BaseDatePicker.vue';
  import BaseButton from '../BaseButton.vue';
  import BaseTimePicker from '../BaseTimePicker.vue';
  import { useVuelidate } from '@vuelidate/core';
  import { helpers } from '@vuelidate/validators';
  import type { City } from '@/types';
  import { citiesListData } from '@/mocks/mocks';
  import type { ILocationAndTimeFormValues } from '@/interfaces';
  import BaseCollapse from '@/components/BaseCollapse.vue';

  const props = defineProps({
    isLoading: { type: Boolean as PropType<boolean>, default: false },
  });

  const emit = defineEmits<{
    (e: 'updateLocationFilters', filters: ILocationAndTimeFormValues): void;
  }>();

  const initialVisibility = window.innerWidth >= 768;

  const returnToDifferentLocation = ref(false);
  const isLocationCorrect = (location: City) => !!citiesListData.includes(location);

  const formValues = ref<ILocationAndTimeFormValues>({
    pickupFrom: '',
    dropOff: '',
    pickupDate: '',
    pickupTime: '',
    dropOffDate: '',
    dropOffTime: '',
  });

  watch(
    formValues,
    (value) => {
      if (!returnToDifferentLocation.value) formValues.value.dropOff = value.pickupFrom;
    },
    { deep: true }
  );

  const handleSubmit = async () => {
    const isFormValidated = await v$.value.$validate();

    if (isFormValidated) emit('updateLocationFilters', formValues.value);
  };

  const validationRules = computed(() => ({
    pickupFrom: {
      location_validation: helpers.withMessage('Select a city from the list', isLocationCorrect),
    },
    dropOff: {
      location_validation: helpers.withMessage('Select a city from the list', isLocationCorrect),
    },
  }));

  const v$ = useVuelidate(validationRules, formValues, { $autoDirty: true });
</script>
