import type {
  IGetVehiclesRequestParams,
  IGetVehiclesCountRequestParams,
  IPriceRange,
  IVehicleEntity,
  IVehiclesCountGroupedByFilterType,
} from '@/interfaces';
import QueryBuilder from '@/services/QueryBuilder';
import type { PostgrestResponse } from '@supabase/supabase-js';
import { filterColumns } from '@/constants';
import { countPropsInArrOfObjs, getNormalizedMinRentalCost } from '@/helpers';
import cacheable from '@/utils/CachingDecorator';

export default class VehiclesService {
  @cacheable
  static async getAllVehicles(
    params: IGetVehiclesRequestParams
  ): Promise<PostgrestResponse<IVehicleEntity>> {
    return QueryBuilder.buildAllVehiclesQuery(params);
  }

  @cacheable
  static async getVehicleById(id: string): Promise<PostgrestResponse<IVehicleEntity>> {
    return QueryBuilder.buildVehicleByIdQuery(id);
  }

  @cacheable
  static async getPriceRange(): Promise<IPriceRange> {
    const { data: rentalCostsArr } = await QueryBuilder.buildPriceRangeQuery();

    if (!rentalCostsArr) return { minPrice: 1, maxPrice: 101 };

    rentalCostsArr?.sort((a, b) => a.rentalCost - b.rentalCost);

    return {
      minPrice: Number(rentalCostsArr[0].rentalCost.toFixed()),
      maxPrice: Number(rentalCostsArr[rentalCostsArr?.length - 1].rentalCost.toFixed()),
    };
  }

  @cacheable
  static async getVehiclesCountGroupedByFilterType(params: IGetVehiclesCountRequestParams) {
    const { data: vehicles } = await QueryBuilder.buildVehiclesCountQuery(params);

    if (!vehicles) return null;

    const vehiclesCountGroupedByFilterType = {} as IVehiclesCountGroupedByFilterType;

    filterColumns.forEach(
      (col) => (vehiclesCountGroupedByFilterType[col] = countPropsInArrOfObjs(vehicles, col))
    );

    return vehiclesCountGroupedByFilterType;
  }

  @cacheable
  static async getMinRentalCostGroupedByFilterType(params: IGetVehiclesCountRequestParams) {
    const { data: vehicles } = await QueryBuilder.buildVehiclesCountQuery(params);

    if (!vehicles?.length) return null;

    return getNormalizedMinRentalCost(vehicles);
  }
}
