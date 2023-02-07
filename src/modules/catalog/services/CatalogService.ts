import type {
  IGetVehiclesRequestParams,
  IGetVehiclesCountRequestParams,
  IPriceRange,
  IVehicleEntity,
  IVehiclesCountGroupedByFilterType,
} from '@/modules/catalog/models/catalog.interfaces';
import CatalogQueryBuilder from '@/modules/catalog/services/CatalogQueryBuilder';
import type { PostgrestResponse } from '@supabase/supabase-js';
import { filterColumns } from '@/modules/catalog/catalog.constants';
import { countPropsInArrOfObjs, getNormalizedMinRentalCost } from '@/modules/catalog/catalog.helpers';
import cacheable from '@/shared/utils/CachingDecorator';

export default class CatalogService {
  @cacheable
  static async getAllVehicles(
    params: IGetVehiclesRequestParams
  ): Promise<PostgrestResponse<IVehicleEntity>> {
    return CatalogQueryBuilder.buildAllVehiclesQuery(params);
  }

  @cacheable
  static async getVehicleById(id: string): Promise<PostgrestResponse<IVehicleEntity>> {
    return CatalogQueryBuilder.buildVehicleByIdQuery(id);
  }

  @cacheable
  static async getPriceRange(): Promise<IPriceRange> {
    const { data: rentalCostsArr } = await CatalogQueryBuilder.buildPriceRangeQuery();

    if (!rentalCostsArr) return { minPrice: 1, maxPrice: 101 };

    rentalCostsArr?.sort((a, b) => a.rentalCost - b.rentalCost);

    return {
      minPrice: Number(rentalCostsArr[0].rentalCost.toFixed()),
      maxPrice: Number(rentalCostsArr[rentalCostsArr?.length - 1].rentalCost.toFixed()),
    };
  }

  @cacheable
  static async getVehiclesCountGroupedByFilterType(params: IGetVehiclesCountRequestParams) {
    const { data: vehicles } = await CatalogQueryBuilder.buildVehiclesCountQuery(params);

    if (!vehicles) return null;

    const vehiclesCountGroupedByFilterType = {} as IVehiclesCountGroupedByFilterType;

    filterColumns.forEach(
      (col) => (vehiclesCountGroupedByFilterType[col] = countPropsInArrOfObjs(vehicles, col))
    );

    return vehiclesCountGroupedByFilterType;
  }

  @cacheable
  static async getMinRentalCostGroupedByFilterType(params: IGetVehiclesCountRequestParams) {
    const { data: vehicles } = await CatalogQueryBuilder.buildVehiclesCountQuery(params);

    if (!vehicles?.length) return null;

    return getNormalizedMinRentalCost(vehicles);
  }
}
