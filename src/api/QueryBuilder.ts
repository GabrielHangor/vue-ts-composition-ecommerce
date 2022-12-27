import type { SupabaseClient } from '@supabase/supabase-js';
import type { IVehiclesRequestParams } from '@/interfaces';

export default class QueryBuilder {
  private supabase;

  constructor(supabase: SupabaseClient) {
    this.supabase = supabase;
  }

  buildGetAllVehiclesQuery({ sortBy, sortOrderASC, offset, limit, location }: IVehiclesRequestParams) {
    let query = this.supabase
      .from('Vehicles')
      .select('*', { count: 'exact' })
      .order(`${sortBy}`, { ascending: sortOrderASC })
      .range(offset, limit);

    if (location) query = query.eq('city', location);

    return query;
  }
}
