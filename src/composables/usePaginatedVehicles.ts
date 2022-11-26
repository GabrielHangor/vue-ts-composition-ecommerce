import type { ICarEntity } from '@/interfaces';
import { supabase } from '@/supabase';
import { computed, ref, type Ref } from 'vue';

export const usePaginatedVehicles = (currentPage: Ref<number>) => {
  const vehiclesPerPage = 6;
  const vehicles = ref<ICarEntity[]>([]);
  const vehiclesCount = ref(0);
  const isLoading = ref(false);

  const vehiclesRange = computed(() => {
    return {
      offset: currentPage.value * vehiclesPerPage - vehiclesPerPage,
      limit: currentPage.value * vehiclesPerPage - 1,
    };
  });

  const fetchVehicles = async () => {
    try {
      isLoading.value = true;

      const { data, count } = (await supabase
        .from('Vehicles')
        .select('*', { count: 'exact' })
        .order('rentalCost', {
          ascending: true,
        })
        .range(vehiclesRange.value.offset, vehiclesRange.value.limit)) as {
        data: ICarEntity[];
        count: number;
      };

      vehicles.value = data;
      vehiclesCount.value = count;
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  return { vehicles, vehiclesCount, isLoading, fetchVehicles };
};
