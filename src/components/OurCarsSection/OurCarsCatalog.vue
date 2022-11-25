<template>
  <div class="col-span-12 md:col-span-8 md:col-start-6 lg:col-span-9 lg:col-start-5">
    <OurCarsCatalogHeading v-bind="$attrs" />
    <section class="mb-10 grid gap-4 lg:grid-cols-2">
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
    </section>
  </div>
</template>

<script lang="ts" setup>
  import OurCarsCatalogHeading from './OurCarsCatalogHeading.vue';
  import CarCard from './CarCard.vue';

</script>
