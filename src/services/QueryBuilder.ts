import type { IGetVehiclesRequestParams } from '@/interfaces';
import { supabase } from '@/supabase';

export default class QueryBuilder {
  static buildGetAllVehiclesQuery({
    sortBy,
    sortOrderASC,
    offset,
    limit,
    location,
    priceRange,
    carTypes,
  }: IGetVehiclesRequestParams) {
    let query = supabase
      .from('Vehicles')
      .select('*', { count: 'exact' })
      .order(`${sortBy}`, { ascending: sortOrderASC })
      .range(offset, limit);

    if (location) query = query.eq('city', location);
    if (priceRange.minPrice) query = query.gt('rentalCost', priceRange.minPrice);
    if (priceRange.maxPrice) query = query.lt('rentalCost', priceRange.maxPrice);
    if (carTypes.length) query = query.in('carType', carTypes);

    return query;
  }

  static buildGetPriceRangeQuery() {
    return supabase.from('Vehicles').select('rentalCost');
  }
}
