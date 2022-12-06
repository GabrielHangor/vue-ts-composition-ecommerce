import type { ICarEntity } from '@/interfaces';
import { computed, onMounted, ref, type Ref } from 'vue';
import { VEHICLES_PER_PAGE } from '@/constants';
import { delay } from '@/helpers';
import { serviceAPI } from '@/api/serviceAPI';

export const usePaginatedAndSortedVehicles = (
  currentPage: Ref<number>,
  sortOrderASC: Ref<boolean>,
  sortBy: Ref<string>
) => {
  const vehicles = ref<ICarEntity[]>([]);
  const vehiclesCount = ref(0);
  const error = ref(null);
  const isLoading = ref(false);

  const vehiclesRange = computed(() => {
    return {
      offset: currentPage.value * VEHICLES_PER_PAGE - VEHICLES_PER_PAGE,
      limit: currentPage.value * VEHICLES_PER_PAGE - 1,
    };
  });

  const fetchVehicles = async ({ append } = { append: false }) => {
    try {
      isLoading.value = true;

      await delay(1000);

      const { data, count, error } = await serviceAPI.getAllVehicles({
        sortBy: sortBy.value,
        sortOrderASC: sortOrderASC.value,
        offset: vehiclesRange.value.offset,
        limit: vehiclesRange.value.limit,
      });

      if (data && !append) vehicles.value = data;
      if (data && append) vehicles.value.push(...data);
      if (count) vehiclesCount.value = count;
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(() => fetchVehicles());

  return { vehicles, vehiclesCount, error, isLoading, fetchVehicles };
};
