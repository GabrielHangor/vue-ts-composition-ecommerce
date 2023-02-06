export default function cacheable(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const MAX_SIZE = 5 * 1024 * 1024; // 5 MB
  const PREFIX = 'cacheable-';
  const MAX_CACHE_AGE_MS = 604800000;

  descriptor.value = async function (...args: any[]) {
    const key = `${PREFIX}${propertyKey}:${JSON.stringify(args)}`;

    if (localStorage.length && decodeURIComponent(JSON.stringify(localStorage)).length >= MAX_SIZE) {
      Object.keys(localStorage)
        .filter((k) => k.startsWith(PREFIX))
        .forEach((k) => localStorage.removeItem(k));
    }

    const cache = localStorage.getItem(key);

    if (cache) {
      const cacheData = JSON.parse(cache);

      if (Date.now() - cacheData.timestamp < MAX_CACHE_AGE_MS) {
        return cacheData.result;
      } else {
        localStorage.removeItem(key);
      }
    }

    try {
      const result = await originalMethod.apply(this, args);

      if (!result.error) {
        localStorage.setItem(key, JSON.stringify({ result, timestamp: Date.now() }));
      }

      return result;
    } catch (error) {
      console.error(`Error while executing "${propertyKey}" with arguments ${args}: ${error}`);
      throw error;
    }
  };

  return descriptor;
}
