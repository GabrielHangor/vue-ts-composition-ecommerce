import type { IGetVehiclesCountRequestParams, IGetVehiclesRequestParams } from '@/interfaces';
import { supabase } from '@/supabase';

export default class QueryBuilder {
  static buildAllVehiclesQuery({
    sortBy,
    sortOrderASC,
    offset,
    limit,
    location,
    priceRange,
    carTypes,
    carModels,
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
    if (carModels.length) query = query.in('model', carModels);

    return query;
  }

  static buildPriceRangeQuery() {
    return supabase.from('Vehicles').select('rentalCost');
  }

  static buildVehiclesCountQuery({ location, priceRange }: IGetVehiclesCountRequestParams) {
    let query = supabase
      .from('Vehicles')
      .select(`carType, model, capacity, transmission,  babySeat, videoRecorder, deposit`);

    if (location) query = query.eq('city', location);
    if (priceRange.minPrice) query = query.gt('rentalCost', priceRange.minPrice);
    if (priceRange.maxPrice) query = query.lt('rentalCost', priceRange.maxPrice);

    return query;
  }
}
