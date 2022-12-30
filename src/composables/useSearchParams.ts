import { type Ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getNormalizedUrlQueryVal } from '@/helpers';
import type { IMap, IUseSearchParams } from '@/interfaces';



export const useSearchParams = ({ args, options }: IUseSearchParams<Ref>) => {
  const router = useRouter();
  const route = useRoute();

  for (const key in route.query) {
    if (args[key]) {
      args[key].value = getNormalizedUrlQueryVal(args[key].value, route.query[key] as string);
    }
  }

  watch(
    Object.values(args), () => {
      const query: IMap<string> = {};

      for (const key in args) {
        if (key === options?.key && args[key].value[options.targetValue]) {
          query[options.newKey] = args[key].value[options.targetValue];
          continue;
        }

        if (typeof args[key].value !== 'object') query[key] = args[key].value;
      }

      router.push({ query });
    },
    { deep: true }
  );
};
