<template>
  <div class="rounded-[10px] p-4 shadow-inputBase">
    <div class="flex items-center border-b md:flex-col md:items-stretch md:border-b-0">
      <div class="basis-1/2 rounded-[10px] md:basis-auto md:bg-car-bg">
        <img class="mx-auto" src="/cars/VW Polo.png" alt="Car" />
      </div>
      <div class="flex basis-1/2 flex-col items-start justify-center md:block md:basis-auto">
        <span
          class="inline-block rounded border py-[2.5px] px-1 text-[10px] font-medium text-gray-400 md:mt-4"
          >{{ vehicle.releaseYear }}</span
        >
        <h2 class="pt-1 text-[12px] font-semibold text-base-gray sm:pt-4 sm:text-[22px]">
          {{ vehicle.model }}
        </h2>
        <div class="flex items-center justify-between py-4 md:border-b">
          <div class="text-sm text-orange-base sm:text-base">
            From <span class="text-base font-semibold sm:text-[25px]">${{ vehicle.rentalCost }}</span>
            <span class="text-xs"> / day</span>
          </div>
          <div class="hidden text-base text-base-gray md:block">Deposit {{ vehicle.deposit }}$</div>
        </div>
      </div>
    </div>
    <div>
      <div
        class="flex items-center justify-between gap-2 pt-4 text-[12px] font-semibold text-gray-400 sm:pb-8 sm:text-base md:gap-0"
      >
        <div
          class="flex basis-1/4 items-center justify-center rounded bg-car-bg py-[6.5px] md:hidden md:basis-auto md:bg-transparent md:py-0"
        >
          <img class="h-[17px] pr-2" src="Icon wallet.svg" alt="Doors icon" /> {{ vehicle.deposit }}$
        </div>
        <div
          class="flex basis-1/4 items-center justify-center rounded bg-car-bg py-[6.5px] md:basis-auto md:bg-transparent md:py-0"
        >
          <img class="h-[17px] pr-2" src="Icon door.svg" alt="Doors icon" /> 4
          <span class="hidden pl-1 md:block">doors</span>
        </div>
        <div
          class="flex basis-1/4 items-center justify-center rounded bg-car-bg py-[6.5px] md:basis-auto md:bg-transparent md:py-0"
        >
          <img class="h-[17px] pr-2" src="Icon seats.svg" alt="Seats icon" /> {{ vehicle.capacity }}
          <span class="hidden pl-1 md:block">seats</span>
        </div>
        <div
          class="flex basis-1/4 items-center justify-center rounded bg-car-bg py-[6.5px] md:basis-auto md:bg-transparent md:py-0"
        >
          <img class="h-[17px] pr-2" src="Icon stearing wheel.svg" alt="Transmission icon" /><span
            class="pl-1"
            >{{ vehicle.transmission }}</span
          >
        </div>
      </div>
      <BaseButton class="hidden w-full sm:block">Rent now</BaseButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { ICarEntity } from '@/interfaces';
  import type { PropType } from 'vue';
  import BaseButton from '../BaseButton.vue';

  const props = defineProps({
    vehicle: { type: Object as PropType<ICarEntity>, required: true },
  });
</script>
