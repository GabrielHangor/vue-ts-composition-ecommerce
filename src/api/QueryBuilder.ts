import type { SupabaseClient } from '@supabase/supabase-js';
import type { IGetVehiclesRequestParams } from '@/interfaces';

export default class QueryBuilder {
  constructor(private supabase: SupabaseClient) {}

  buildGetAllVehiclesQuery({
    sortBy,
    sortOrderASC,
    offset,
    limit,
    location,
    priceRange,
  }: IGetVehiclesRequestParams) {
    let query = this.supabase
      .from('Vehicles')
      .select('*', { count: 'exact' })
      .order(`${sortBy}`, { ascending: sortOrderASC })
      .range(offset, limit);

    if (location) query = query.eq('city', location);
    if (priceRange.minPrice) query = query.gt('rentalCost', priceRange.minPrice);
    if (priceRange.maxPrice) query = query.lt('rentalCost', priceRange.maxPrice);

    return query;
  }

  buildGetPriceRangeQuery() {
    return this.supabase.from('Vehicles').select('rentalCost');
  }
}
