import type { IGetVehiclesCountRequestParams, IGetVehiclesRequestParams } from '@/modules/catalog/models/catalog.interfaces';
import { supabase } from '@/supabase';

export default class CatalogQueryBuilder {
  static buildAllVehiclesQuery(params: IGetVehiclesRequestParams) {
    let query = supabase
      .from('Vehicles')
      .select('*', { count: 'estimated' })
      .order(`${params.sortBy}`, { ascending: params.sortOrderASC })
      .range(params.offset, params.limit);

    if (params.location) query = query.eq('city', params.location);
    if (params.priceRange.minPrice) query = query.gt('rentalCost', params.priceRange.minPrice);
    if (params.priceRange.maxPrice) query = query.lt('rentalCost', params.priceRange.maxPrice);
    if (params.carTypes.length) query = query.in('carType', params.carTypes);
    if (params.carModels.length) query = query.in('model', params.carModels);
    if (params.carCapacities.length) query = query.in('capacity', params.carCapacities);
    if (params.carTransmission.length) query = query.in('transmission', params.carTransmission);
    if (params.carDeposit.length) query = query.in('deposit', params.carDeposit);
    if (params.carVideoRecorder.length) query = query.in('videoRecorder', params.carVideoRecorder);
    if (params.carBabySeat.length) query = query.in('babySeat', params.carBabySeat);

    return query;
  }

  static buildVehicleByIdQuery(id: string) {
    return supabase.from('Vehicles').select('*').eq('id', id);
  }

  static buildPriceRangeQuery() {
    return supabase.from('Vehicles').select('rentalCost');
  }

  static buildVehiclesCountQuery({ location, priceRange }: IGetVehiclesCountRequestParams) {
    let query = supabase
      .from('Vehicles')
      .select(`carType, model, capacity, transmission,  babySeat, videoRecorder, deposit, rentalCost`);

    if (location) query = query.eq('city', location);
    if (priceRange.minPrice) query = query.gt('rentalCost', priceRange.minPrice);
    if (priceRange.maxPrice) query = query.lt('rentalCost', priceRange.maxPrice);

    return query;
  }
}
