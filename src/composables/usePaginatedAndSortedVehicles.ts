import type { ICarEntity } from '@/interfaces';
import { supabase } from '@/supabase';
import { computed, ref, type Ref } from 'vue';
import { VEHICLES_PER_PAGE } from '../constants';

export const usePaginatedAndSortedVehicles = (
  currentPage: Ref<number>,
  sortOrderASC: Ref<boolean>,
  sortBy: Ref<string>
) => {
  const vehicles = ref<ICarEntity[]>([]);
  const vehiclesCount = ref(0);
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

      const { data, count } = (await supabase
        .from('Vehicles')
        .select('*', { count: 'exact' })
        .order(`${sortBy.value}`, {
          ascending: sortOrderASC.value,
        })
        .range(vehiclesRange.value.offset, vehiclesRange.value.limit)) as {
        data: ICarEntity[] | null;
        count: number | null;
      };

      if (data && !append) vehicles.value = data;
      if (data && append) vehicles.value.push(...data);
      if (count) vehiclesCount.value = count;
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  return { vehicles, vehiclesCount, isLoading, fetchVehicles };
};
