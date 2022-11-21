<template>
  <div class="col-span-12 border border-green-600 md:col-span-8 md:col-start-6">
    <div class="flex justify-between">
      <div @click="$emit('showFilters')">
        <img class="md:hidden" src="filters icon.svg" alt="Filters icon mobile" />
      </div>
      <div>
        <span>Sort by price</span> <img class="inline pl-2" src="icon sort.svg" alt="Sort by icon" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
