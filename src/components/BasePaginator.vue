<template>
  <section class="mt-4 flex justify-center text-base-gray">
    <span class="cursor-pointer p-[14px]" @click="changeCurrentPage(1)">First </span>
    <span
      v-for="page in visibleRange"
      class="cursor-pointer p-[14px]"
      :class="{ 'font-bold text-orange-base': currentPage === page.name }"
      :key="page.name"
      @click="changeCurrentPage(page.name)"
      >{{ page.name }}</span
    >
    <span class="cursor-pointer p-[14px]" @click="changeCurrentPage(totalPages)">Last </span>
  </section>
</template>

<script lang="ts" setup>
  import { computed, ref, type PropType } from 'vue';

  const props = defineProps({
    totalEntities: { type: Number as PropType<number>, required: true },
    entitiesPerPage: { type: Number as PropType<number>, required: true },
    maxVisibleButtons: { type: Number as PropType<number>, default: 3 },
  });

  const emit = defineEmits<{
    (e: 'changeCurrentPage', page: number): void;
  }>();

  const totalPages = computed(() => Math.ceil(props.totalEntities / props.entitiesPerPage));
  const currentPage = ref(1);

  const startPage = computed(() => {
    if (currentPage.value === 1) return 1;
    if (currentPage.value === totalPages.value) return totalPages.value - props.maxVisibleButtons + 1;

    return currentPage.value - 1;
  });

  const endPage = computed(() => {
    return Math.min(startPage.value + props.maxVisibleButtons - 1, totalPages.value);
  });

  const visibleRange = computed(() => {
    const range = [];

    for (let i = startPage.value; i <= endPage.value; i += 1) {
      range.push({
        name: i,
        isDisabled: i === currentPage.value,
      });
    }

    return range;
  });

  const isInFirstPage = computed(() => currentPage.value === 1);
  const isInLastPage = computed(() => currentPage.value === totalPages.value);

  const changeCurrentPage = (page: number) => {
    currentPage.value = page;
    emit('changeCurrentPage', page);
  };
</script>
