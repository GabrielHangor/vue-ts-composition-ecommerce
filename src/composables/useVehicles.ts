import type { IVehicleEntity, IUseVehiclesArgs, IPriceRange } from '@/interfaces';
import { computed, onMounted, ref } from 'vue';
import { VEHICLES_PER_PAGE } from '@/constants';
import { delay } from '@/helpers';
import VehiclesService from '@/services/VehiclesService';

export const useVehicles = ({
  currentPage,
  sortOrderASC,
  sortBy,
  activeLocationFilters,
  priceRange,
  activeCarTypeFilters,
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
    if (isLoading.value) return;
    try {
      errorMessage.value = null;
      isLoading.value = true;

      await delay(500);

      const { data, count, error } = await VehiclesService.getAllVehicles({
        sortBy: sortBy.value,
        sortOrderASC: sortOrderASC.value,
        offset: vehiclesRange.value.offset,
        limit: vehiclesRange.value.limit,
        location: activeLocationFilters.value.pickupFrom,
        priceRange: priceRange.value,
        carTypes: activeCarTypeFilters.value,
      });

      if (data && !append) vehicles.value = data;
      if (data && append) vehicles.value.push(...data);
      if (count || count === 0) vehiclesCount.value = count;
      if (error) throw new Error('Nothing was found...');
    } catch (error) {
      if (error instanceof Error) errorMessage.value = error.message;
    } finally {
      isLoading.value = false;
    }
  };

  const fetchPriceBoundaries = async () => {
    const { minPrice, maxPrice } = await VehiclesService.getPriceRange();
    initialPriceBoundaries.value = { minPrice, maxPrice };
  };

  onMounted(async () => await Promise.all([fetchVehicles(), fetchPriceBoundaries()]));

  return { vehicles, vehiclesCount, errorMessage, isLoading, fetchVehicles, initialPriceBoundaries };
};
