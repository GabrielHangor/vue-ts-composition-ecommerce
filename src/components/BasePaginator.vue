<template>
  <section class="mt-4 flex justify-center text-base-gray">
    <span
      class="cursor-pointer p-[14px]"
      @click="changeCurrentPage(1)"
      :class="{ 'font-bold text-orange-base': currentPage === 1 }"
      >First
    </span>
    <span
      v-for="page in visibleRange"
      class="cursor-pointer p-[14px]"
      :class="{
        'font-bold text-orange-base': currentPage === page.name,
        'cursor-not-allowed': page.isDisabled,
      }"
      :key="page.name"
      @click="changeCurrentPage(page.name)"
      >{{ page.name }}</span
    >
    <span
      class="cursor-pointer p-[14px]"
      @click="changeCurrentPage(totalPages)"
      :class="{ 'font-bold text-orange-base': currentPage === totalPages }"
      >Last
    </span>
  </section>
</template>

<script lang="ts" setup>
  import { computed, type PropType } from 'vue';

  const props = defineProps({
    totalEntities: { type: Number as PropType<number>, required: true },
    entitiesPerPage: { type: Number as PropType<number>, required: true },
    maxVisibleButtons: { type: Number as PropType<number>, default: 3 },
    currentPage: { type: Number as PropType<number>, required: true },
  });

  const emit = defineEmits<{
    (e: 'changeCurrentPage', page: number): void;
  }>();

  const totalPages = computed(() => Math.ceil(props.totalEntities / props.entitiesPerPage));

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
      range.push({
        name: i,
        isDisabled: i === props.currentPage,
      });
    }

    return range;
  });

  const changeCurrentPage = (page: number) => {
    if (page === props.currentPage) return;
    emit('changeCurrentPage', page);
  };
</script>
