import type {
  IPriceRange,
  IUseCatalogArgs,
  IVehicleEntity,
  IVehiclesCountGroupedByFilterType,
  IVehiclesMinRentalCostGroupedByFilterType,
} from '@/modules/catalog/models/catalog.interfaces';
import { computed, onMounted, ref } from 'vue';
import { VEHICLES_PER_PAGE } from '@/modules/catalog/catalog.constants';
import { delay } from '@/modules/catalog/catalog.helpers';
import CatalogService from '@/modules/catalog/services/CatalogService';

export const useCatalog = ({
  currentPage,
  sortOrderASC,
  sortBy,
  activeLocationFilters,
  priceRange,
  activeCarTypeFilters,
  activeCarModelFilters,
  activeCarCapacityFilters,
  activeCarTransmissionFilters,
  activeCarDepositFilters,
  activeCarBabySeatFilters,
  activeCarVideoRecorderFilters,
}: IUseCatalogArgs) => {
  const vehicles = ref<IVehicleEntity[]>([]);
  const vehiclesCount = ref(0);
  const errorMessage = ref<string | null>(null);
  const isLoading = ref(true);
  const initialPriceBoundaries = ref<IPriceRange>({ minPrice: null, maxPrice: null });
  const vehiclesCountGroupedByFilterType = ref<IVehiclesCountGroupedByFilterType | null>(null);
  const minRentalCostGroupedByFilterType = ref<IVehiclesMinRentalCostGroupedByFilterType | null>(null);

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

      const { data, count, error } = await CatalogService.getAllVehicles({
        sortBy: sortBy.value,
        sortOrderASC: sortOrderASC.value,
        offset: vehiclesRange.value.offset,
        limit: vehiclesRange.value.limit,
        location: activeLocationFilters.value.pickupFrom,
        priceRange: priceRange.value,
        carTypes: activeCarTypeFilters.value,
        carModels: activeCarModelFilters.value,
        carCapacities: activeCarCapacityFilters.value,
        carTransmission: activeCarTransmissionFilters.value,
        carDeposit: activeCarDepositFilters.value,
        carBabySeat: activeCarBabySeatFilters.value,
        carVideoRecorder: activeCarVideoRecorderFilters.value,
      });

      if (data && !append) vehicles.value = data;
      if (data && append) vehicles.value.push(...data);
      if (count || count === 0) vehiclesCount.value = count;
      if (error) throw new Error('Nothing was found...');
    } catch (error) {
      console.error(error);
      if (error instanceof Error) errorMessage.value = error.message;
    } finally {
      isLoading.value = false;
    }
  };

  const fetchPriceBoundaries = async () => {
    const { minPrice, maxPrice } = await CatalogService.getPriceRange();
    initialPriceBoundaries.value = { minPrice, maxPrice };
  };

  const fetchVehiclesCount = async () => {
    vehiclesCountGroupedByFilterType.value = await CatalogService.getVehiclesCountGroupedByFilterType({
      priceRange: priceRange.value,
      location: activeLocationFilters.value.pickupFrom,
    });
  };

  const fetchMinRentalCostByFilterType = async () => {
    minRentalCostGroupedByFilterType.value = await CatalogService.getMinRentalCostGroupedByFilterType({
      priceRange: priceRange.value,
      location: activeLocationFilters.value.pickupFrom,
    });
  };

  onMounted(
    async () =>
      await Promise.all([
        fetchVehicles(),
        fetchPriceBoundaries(),
        fetchVehiclesCount(),
        fetchMinRentalCostByFilterType(),
      ])
  );

  return {
    vehicles,
    vehiclesCount,
    errorMessage,
    isLoading,
    fetchVehicles,
    fetchVehiclesCount,
    fetchMinRentalCostByFilterType,
    initialPriceBoundaries,
    vehiclesCountGroupedByFilterType,
    minRentalCostGroupedByFilterType,
  };
};
