import { Inject } from '@nestjs/common';
import { coalesceAsync } from 'promise-coalesce';
import { CacheMethodDecorator } from '../cache-method.decorator';
import { CacheService } from '../cache.service';
import { Cacheable } from '../interfaces/cacheable.interface';

// Cache dựa trên nhiều tham số
export function CompositeKeyCache(key: string): CacheMethodDecorator {
  const injectCacheService = Inject(CacheService);

  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    injectCacheService(target, 'cacheService');

    const originalMethod = descriptor.value;
    descriptor.value = async function (this: Cacheable, ...args: any[]) {
      const cacheService = this.cacheService;

      const cacheKey = args.length
        ? args.map((arg) => JSON.stringify(arg)).toString()
        : 'all';
      const cacheData = await cacheService.hget(key, cacheKey);
      if (cacheData) return JSON.parse(cacheData);

      // use coalesceAsync to prevent cache stampede effect
      return await coalesceAsync(cacheKey, async () => {
        const sourceValue = await originalMethod.apply(this, args);
        await cacheService.hset(key, cacheKey, JSON.stringify(sourceValue));

        return sourceValue;
      });
    };
  };
}
