<template>
  <div class="flex justify-between pb-6">
    <div @click="$emit('openMobileFilters')">
      <img class="md:hidden" src="filters icon.svg" alt="Filters icon mobile" />
    </div>
    <div class="flex cursor-pointer items-center">
      <span>Sort by price</span> <img class="inline pl-2" src="icon sort.svg" alt="Sort by icon" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>
