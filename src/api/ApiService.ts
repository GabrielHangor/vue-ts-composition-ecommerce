import { supabase } from '@/supabase';
import type { SupabaseClient } from '@supabase/supabase-js';

import QueryBuilder from '@/api/QueryBuilder';
import type { IVehiclesRequestParams } from '@/interfaces';

class ApiService {
  private supabase: SupabaseClient;
  private queryBuilder;

  constructor() {
    this.supabase = supabase;
    this.queryBuilder = new QueryBuilder(supabase);
  }

  getAllVehicles(params: IVehiclesRequestParams) {
    return this.queryBuilder.buildGetAllVehiclesQuery(params);
  }
}

export const APIService = new ApiService();
