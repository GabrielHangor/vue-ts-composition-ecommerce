import { supabase } from '@/supabase';
import type { SupabaseClient } from '@supabase/supabase-js';
import QueryBuilder from '@/api/QueryBuilder';
import type { IGetVehiclesRequestParams } from '@/interfaces';

class ApiService {
  constructor(private supabase: SupabaseClient, private queryBuilder: QueryBuilder) {}

  getAllVehicles(params: IGetVehiclesRequestParams) {
    return this.queryBuilder.buildGetAllVehiclesQuery(params);
  }
}

export const APIService = new ApiService(supabase, new QueryBuilder(supabase));
