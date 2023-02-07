<template>
  <section class="mb-10 grid gap-4 lg:grid-cols-2">
    <div
      v-for="(card, index) in [...Array(6).keys()]"
      :key="index"
      role="status"
      class="w-full animate-pulse rounded-[10px] border-gray-200 p-4 shadow-inputBase dark:border-gray-700 md:h-[505px]"
    >
      <div class="flex items-center gap-4 md:flex-col md:items-stretch">
        <div
          class="mb-4 flex h-[110px] basis-1/2 items-center justify-center rounded bg-gray-300 dark:bg-gray-700 sm:h-[180px] md:h-48 md:basis-auto"
        >
         
        </div>
        <div class="flex h-full basis-1/2 flex-col md:basis-auto">
          <div class="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div class="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div class="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div class="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div class="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div class="h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>

      <div class="border-b border-b-gray-200 sm:mb-3 sm:mt-7"></div>

      <div class="py-2 sm:py-4">
        <div class="flex h-7 gap-2">
          <div class="flex w-full basis-1/3 rounded bg-gray-200"></div>
          <div class="flex w-full basis-1/3 rounded bg-gray-200"></div>
          <div class="flex w-full basis-1/3 rounded bg-gray-200"></div>
        </div>
      </div>

      <div class="hidden h-12 rounded bg-gray-200 sm:block"></div>

      <span class="sr-only">Loading...</span>
    </div>
  </section>
</template>

<script lang="ts" setup></script>
