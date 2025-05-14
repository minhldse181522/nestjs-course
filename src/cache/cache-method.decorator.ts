// Khai báo alias, dùng chung kiểu decorator cho các function cache
export type CacheMethodDecorator = (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) => void;
