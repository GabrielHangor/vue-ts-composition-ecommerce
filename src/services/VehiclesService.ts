import type {
  IGetVehiclesRequestParams,
  IGetVehiclesTypeCountRequestParams,
  IPriceRange,
  IVehicleEntity,
  IVehiclesTypeCount,
} from '@/interfaces';
import QueryBuilder from '@/services/QueryBuilder';
import type { PostgrestResponse } from '@supabase/supabase-js';
import { carTypes } from '@/constants';

export default class VehiclesService {
  static async getAllVehicles(
    params: IGetVehiclesRequestParams
  ): Promise<PostgrestResponse<IVehicleEntity>> {
    return QueryBuilder.buildAllVehiclesQuery(params);
  }

  static async getPriceRange(): Promise<IPriceRange> {
    const { data: rentalCostsArr } = await QueryBuilder.buildPriceRangeQuery();

    if (!rentalCostsArr) return { minPrice: 1, maxPrice: 101 };

    rentalCostsArr?.sort((a, b) => a.rentalCost - b.rentalCost);

    return {
      minPrice: Number(rentalCostsArr[0].rentalCost.toFixed()),
      maxPrice: Number(rentalCostsArr[rentalCostsArr?.length - 1].rentalCost.toFixed()),
    };
  }

  static async getVehiclesTypeCount(params: IGetVehiclesTypeCountRequestParams) {
    const responseArr = await Promise.all(QueryBuilder.buildVehiclesTypeCountQuery(params));

    return responseArr.reduce((acc, response, index) => {
      return { ...acc, [carTypes[index].name]: response.count || 0 };
    }, {} as IVehiclesTypeCount);
  }
}
