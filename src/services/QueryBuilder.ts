import type {
  IGetVehiclesRequestParams,
  IGetVehiclesTypeCountRequestParams,
} from '@/interfaces';
import { supabase } from '@/supabase';
import { carTypes } from '@/constants';
import type { PostgrestFilterBuilder } from '@supabase/postgrest-js';

export default class QueryBuilder {
  static buildAllVehiclesQuery({
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
      .select('*', { count: 'estimated' })
      .order(`${sortBy}`, { ascending: sortOrderASC })
      .range(offset, limit);

    if (location) query = query.eq('city', location);
    if (priceRange.minPrice) query = query.gt('rentalCost', priceRange.minPrice);
    if (priceRange.maxPrice) query = query.lt('rentalCost', priceRange.maxPrice);
    if (carTypes.length) query = query.in('carType', carTypes);

    return query;
  }

  static buildPriceRangeQuery() {
    return supabase.from('Vehicles').select('rentalCost');
  }

  static buildVehiclesTypeCountQuery({ priceRange, location }: IGetVehiclesTypeCountRequestParams) {
    const queriesArr: PostgrestFilterBuilder<any, any, { carType: string }>[] = [];

    carTypes.forEach((type) => {
      let query = supabase
        .from('Vehicles')
        .select('carType', { count: 'estimated', head: true })
        .eq('carType', type.name);

      if (priceRange.minPrice) query = query.gt('rentalCost', priceRange.minPrice);
      if (priceRange.maxPrice) query = query.lt('rentalCost', priceRange.maxPrice);
      if (location) query = query.eq('city', location);

      queriesArr.push(query);
    });

    return queriesArr;
  }
}
