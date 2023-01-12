import { type Ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getNormalizedUrlQueryVal } from '@/helpers';
import type { IMap, IUseSearchParams } from '@/interfaces';

export const useSearchParams = (params: IUseSearchParams<Ref>) => {
  const router = useRouter();
  const route = useRoute();

  for (const key in route.query) {
    if (params[key]) {
      params[key].value = getNormalizedUrlQueryVal(params[key].value, route.query[key] as string);
    }
  }

  watch(
    Object.values(params),
    () => {
      const query: IMap<string> = {};

      for (const key in params) {
        if (params[key].value !== '' && params[key].value) query[key] = params[key].value;
      }

      router.push({ query });
    },
    { deep: true }
  );
};
