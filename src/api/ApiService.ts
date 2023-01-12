import type { IGetVehiclesRequestParams, IPriceRange, IVehicleEntity } from '@/interfaces';
import QueryBuilder from '@/api/QueryBuilder';
import type { PostgrestResponse } from '@supabase/supabase-js';

export default class ApiService {
  static async getAllVehicles(params: IGetVehiclesRequestParams): Promise<PostgrestResponse<IVehicleEntity>> {
    return QueryBuilder.buildGetAllVehiclesQuery(params);
  }

  static async getPriceRange(): Promise<IPriceRange> {
    const { data: rentalCostsArr } = await QueryBuilder.buildGetPriceRangeQuery();

    if (!rentalCostsArr) return { minPrice: 1, maxPrice: 101 };

    rentalCostsArr?.sort((a, b) => a.rentalCost - b.rentalCost);

    return {
      minPrice: Number(rentalCostsArr[0].rentalCost.toFixed()),
      maxPrice: Number(rentalCostsArr[rentalCostsArr?.length - 1].rentalCost.toFixed()),
    };
  }
}
