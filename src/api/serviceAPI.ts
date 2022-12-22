import { supabase } from '@/supabase';
import type { SupabaseClient } from '@supabase/supabase-js';

interface IVehiclesRequestParams {
  sortBy: string;
  sortOrderASC: boolean;
  offset: number;
  limit: number;
}

class ApiService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = supabase;
  }

  getAllVehicles({ sortBy, sortOrderASC, offset, limit }: IVehiclesRequestParams) {
    return this.supabase
      .from('Vehicles')
      .select('*', { count: 'exact' })
      .order(`${sortBy}`, { ascending: sortOrderASC })
      .range(offset, limit);
  }
}

export const serviceAPI = new ApiService();
