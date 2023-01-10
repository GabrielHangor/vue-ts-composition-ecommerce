import type { IVehicleEntity, IUseVehiclesArgs, IPriceRange } from '@/interfaces';
import { computed, onMounted, ref } from 'vue';
import { VEHICLES_PER_PAGE } from '@/constants';
import { delay } from '@/helpers';
import { APIService } from '@/api/ApiService';

export const useVehicles = ({
  currentPage,
  sortOrderASC,
  sortBy,
  activeLocationFilters,
  priceRange,
}: IUseVehiclesArgs) => {
  const vehicles = ref<IVehicleEntity[]>([]);
  const vehiclesCount = ref(0);
  const errorMessage = ref<string | null>(null);
  const isLoading = ref(false);
  const initialPriceBoundaries = ref<IPriceRange>({ minPrice: null, maxPrice: null });

  const vehiclesRange = computed(() => {
    return {
      offset: currentPage.value * VEHICLES_PER_PAGE - VEHICLES_PER_PAGE,
      limit: currentPage.value * VEHICLES_PER_PAGE - 1,
    };
  });

  const fetchVehicles = async ({ append } = { append: false }) => {
    try {
      errorMessage.value = null;
      isLoading.value = true;

      await delay(500);

      const { data, count, error } = await APIService.getAllVehicles({
        sortBy: sortBy.value,
        sortOrderASC: sortOrderASC.value,
        offset: vehiclesRange.value.offset,
        limit: vehiclesRange.value.limit,
        location: activeLocationFilters.value.pickupFrom,
        priceRange: priceRange.value,
      });

      if (data && !append) vehicles.value = data;
      if (data && append) vehicles.value.push(...data);
      if (count) vehiclesCount.value = count;
      if (error) errorMessage.value = 'Nothing was found...';
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  };

  const fetchPriceBoundaries = async () => {
    const { minPrice, maxPrice } = await APIService.getPriceRange();
    initialPriceBoundaries.value = { minPrice, maxPrice };
  };

  onMounted(async () => await Promise.all([fetchVehicles(), fetchPriceBoundaries()]));

  return { vehicles, vehiclesCount, errorMessage, isLoading, fetchVehicles, initialPriceBoundaries };
};
