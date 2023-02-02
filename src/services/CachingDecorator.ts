export default function cacheable(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any[]) {
    const key = `${propertyKey}:${JSON.stringify(args)}`;

    const cache = localStorage.getItem(key);

    if (cache) {
      const cacheData = JSON.parse(cache);

      if (Date.now() - cacheData.timestamp < 604800000) {
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
