<template>
  <section class="mt-4 flex justify-center text-base-gray">
    <span
      class="cursor-pointer p-[14px]"
      @click="goToPage(1)"
      :class="[paginationButtonClass, { 'font-bold text-orange-base': currentPage === 1 }]"
    >
      First
    </span>
    <span
      v-for="page in visibleRange"
      class="cursor-pointer p-[14px]"
      :class="[
        paginationButtonClass,
        {
          'font-bold text-orange-base': currentPage === page.name,
          'cursor-not-allowed': page.isDisabled,
        },
      ]"
      :key="page.name"
      @click="goToPage(page.name)"
    >
      {{ page.name }}
    </span>
    <span
      class="cursor-pointer p-[14px]"
      @click="goToPage(totalPages)"
      :class="[paginationButtonClass, { 'font-bold text-orange-base': currentPage === totalPages }]"
    >
      Last
    </span>
  </section>
</template>
<script lang="ts" setup>
  import { computed } from 'vue';

  interface Props {
    totalEntities: number;
    entitiesPerPage: number;
    maxVisibleButtons: number;
    currentPage: number;
    paginationButtonClass?: string;
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{
    (e: 'changeCurrentPage', page: number): void;
  }>();

  const totalPages = computed(() => Math.ceil(props.totalEntities / props.entitiesPerPage));

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages.value || page === props.currentPage) return;
    emit('changeCurrentPage', page);
  };

  const startPage = computed(() => {
    if (props.currentPage === 1) return 1;
    if (props.currentPage === totalPages.value) return totalPages.value - props.maxVisibleButtons + 1;

    return props.currentPage - 1;
  });

  const endPage = computed(() => {
    return Math.min(startPage.value + props.maxVisibleButtons - 1, totalPages.value);
  });

  const visibleRange = computed(() => {
    const range = [];

    for (let i = startPage.value; i <= endPage.value; i += 1) {
      if (i !== 0) {
        range.push({
          name: i,
          isDisabled: i === props.currentPage,
        });
      }
    }

    return range;
  });
</script>
