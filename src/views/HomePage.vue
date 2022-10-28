<template>
  <BaseButton @click="handleClick">Rent Now</BaseButton>
</template>

<script lang="ts" setup>
import BaseButton from '../components/BaseButton.vue';

const handleClick = () => {
  console.log('btn clicked');
};
</script>
