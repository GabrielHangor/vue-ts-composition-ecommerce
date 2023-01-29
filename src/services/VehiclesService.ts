import type {
  IGetVehiclesRequestParams,
  IGetVehiclesCountRequestParams,
  IPriceRange,
  IVehicleEntity,
  IVehiclesCountGroupedByFilterType,
} from '@/interfaces';
import QueryBuilder from '@/services/QueryBuilder';
import type { PostgrestResponse } from '@supabase/supabase-js';
import { filterColumns } from '@/constants';

export default class VehiclesService {
  static async getAllVehicles(
    params: IGetVehiclesRequestParams
  ): Promise<PostgrestResponse<IVehicleEntity>> {
    return QueryBuilder.buildAllVehiclesQuery(params);
  }

  static async getPriceRange(): Promise<IPriceRange> {
    const { data: rentalCostsArr } = await QueryBuilder.buildPriceRangeQuery();

    if (!rentalCostsArr) return { minPrice: 1, maxPrice: 101 };

    rentalCostsArr?.sort((a, b) => a.rentalCost - b.rentalCost);

    return {
      minPrice: Number(rentalCostsArr[0].rentalCost.toFixed()),
      maxPrice: Number(rentalCostsArr[rentalCostsArr?.length - 1].rentalCost.toFixed()),
    };
  }

  static async getVehiclesCountGroupedByFilterType(params: IGetVehiclesCountRequestParams) {
    const { data: vehicles } = await QueryBuilder.buildVehiclesCountQuery(params);

    if (!vehicles) return null;

    const vehiclesCountGroupedByFilterType = {} as IVehiclesCountGroupedByFilterType;

    const countPropsInArrOfObjs = (arr: any[], prop: string) =>
      arr.reduce((prev, curr) => {
        return (prev[curr[prop]] = ++prev[curr[prop]] || 1), prev;
      }, {});

    filterColumns.forEach((col) => {
      vehiclesCountGroupedByFilterType[col as keyof IVehiclesCountGroupedByFilterType] =
        countPropsInArrOfObjs(vehicles, col);
    });

    return vehiclesCountGroupedByFilterType;
  }
}
