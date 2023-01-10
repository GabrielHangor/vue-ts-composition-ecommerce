import { supabase } from '@/supabase';
import type { SupabaseClient } from '@supabase/supabase-js';
import QueryBuilder from '@/api/QueryBuilder';
import type { IGetVehiclesRequestParams, IPriceRange } from '@/interfaces';

class ApiService {
  constructor(private supabase: SupabaseClient, private queryBuilder: QueryBuilder) {}

  getAllVehicles(params: IGetVehiclesRequestParams) {
    return this.queryBuilder.buildGetAllVehiclesQuery(params);
  }

  async getPriceRange(): Promise<IPriceRange> {
    const { data: rentalCostsArr } = await this.queryBuilder.buildGetPriceRangeQuery();

    if (!rentalCostsArr) return { minPrice: 1, maxPrice: 101 };

    rentalCostsArr?.sort((a, b) => a.rentalCost - b.rentalCost);

    return {
      minPrice: Number(rentalCostsArr[0].rentalCost.toFixed()),
      maxPrice: Number(rentalCostsArr[rentalCostsArr?.length - 1].rentalCost.toFixed()),
    };
  }
}

export const APIService = new ApiService(supabase, new QueryBuilder(supabase));
