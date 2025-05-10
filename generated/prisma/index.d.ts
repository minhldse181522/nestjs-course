/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Category
 *
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>;
/**
 * Model Performance
 *
 */
export type Performance = $Result.DefaultSelection<Prisma.$PerformancePayload>;
/**
 * Model PerformanceCategory
 *
 */
export type PerformanceCategory =
  $Result.DefaultSelection<Prisma.$PerformanceCategoryPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.performance`: Exposes CRUD operations for the **Performance** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Performances
   * const performances = await prisma.performance.findMany()
   * ```
   */
  get performance(): Prisma.PerformanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.performanceCategory`: Exposes CRUD operations for the **PerformanceCategory** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more PerformanceCategories
   * const performanceCategories = await prisma.performanceCategory.findMany()
   * ```
   */
  get performanceCategory(): Prisma.PerformanceCategoryDelegate<
    ExtArgs,
    ClientOptions
  >;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Category: 'Category';
    Performance: 'Performance';
    PerformanceCategory: 'PerformanceCategory';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: 'category' | 'performance' | 'performanceCategory';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>;
        fields: Prisma.CategoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[];
          };
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[];
          };
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[];
          };
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCategory>;
          };
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CategoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>;
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number;
          };
        };
      };
      Performance: {
        payload: Prisma.$PerformancePayload<ExtArgs>;
        fields: Prisma.PerformanceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PerformanceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerformancePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PerformanceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerformancePayload>;
          };
          findFirst: {
            args: Prisma.PerformanceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerformancePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PerformanceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerformancePayload>;
          };
          findMany: {
            args: Prisma.PerformanceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerformancePayload>[];
          };
          create: {
            args: Prisma.PerformanceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerformancePayload>;
          };
          createMany: {
            args: Prisma.PerformanceCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PerformanceCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerformancePayload>[];
          };
          delete: {
            args: Prisma.PerformanceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerformancePayload>;
          };
          update: {
            args: Prisma.PerformanceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerformancePayload>;
          };
          deleteMany: {
            args: Prisma.PerformanceDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PerformanceUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PerformanceUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerformancePayload>[];
          };
          upsert: {
            args: Prisma.PerformanceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerformancePayload>;
          };
          aggregate: {
            args: Prisma.PerformanceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePerformance>;
          };
          groupBy: {
            args: Prisma.PerformanceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PerformanceGroupByOutputType>[];
          };
          count: {
            args: Prisma.PerformanceCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<PerformanceCountAggregateOutputType>
              | number;
          };
        };
      };
      PerformanceCategory: {
        payload: Prisma.$PerformanceCategoryPayload<ExtArgs>;
        fields: Prisma.PerformanceCategoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PerformanceCategoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerformanceCategoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PerformanceCategoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerformanceCategoryPayload>;
          };
          findFirst: {
            args: Prisma.PerformanceCategoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerformanceCategoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PerformanceCategoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerformanceCategoryPayload>;
          };
          findMany: {
            args: Prisma.PerformanceCategoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerformanceCategoryPayload>[];
          };
          create: {
            args: Prisma.PerformanceCategoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerformanceCategoryPayload>;
          };
          createMany: {
            args: Prisma.PerformanceCategoryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PerformanceCategoryCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerformanceCategoryPayload>[];
          };
          delete: {
            args: Prisma.PerformanceCategoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerformanceCategoryPayload>;
          };
          update: {
            args: Prisma.PerformanceCategoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerformanceCategoryPayload>;
          };
          deleteMany: {
            args: Prisma.PerformanceCategoryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PerformanceCategoryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PerformanceCategoryUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerformanceCategoryPayload>[];
          };
          upsert: {
            args: Prisma.PerformanceCategoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerformanceCategoryPayload>;
          };
          aggregate: {
            args: Prisma.PerformanceCategoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePerformanceCategory>;
          };
          groupBy: {
            args: Prisma.PerformanceCategoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PerformanceCategoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.PerformanceCategoryCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<PerformanceCategoryCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    category?: CategoryOmit;
    performance?: PerformanceOmit;
    performanceCategory?: PerformanceCategoryOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    performances: number;
  };

  export type CategoryCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    performances?: boolean | CategoryCountOutputTypeCountPerformancesArgs;
  };

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountPerformancesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PerformanceCategoryWhereInput;
  };

  /**
   * Count Type PerformanceCountOutputType
   */

  export type PerformanceCountOutputType = {
    categories: number;
  };

  export type PerformanceCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    categories?: boolean | PerformanceCountOutputTypeCountCategoriesArgs;
  };

  // Custom InputTypes
  /**
   * PerformanceCountOutputType without action
   */
  export type PerformanceCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PerformanceCountOutputType
     */
    select?: PerformanceCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * PerformanceCountOutputType without action
   */
  export type PerformanceCountOutputTypeCountCategoriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PerformanceCategoryWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null;
    _avg: CategoryAvgAggregateOutputType | null;
    _sum: CategorySumAggregateOutputType | null;
    _min: CategoryMinAggregateOutputType | null;
    _max: CategoryMaxAggregateOutputType | null;
  };

  export type CategoryAvgAggregateOutputType = {
    id: number | null;
  };

  export type CategorySumAggregateOutputType = {
    id: bigint | null;
  };

  export type CategoryMinAggregateOutputType = {
    id: bigint | null;
    categoryName: string | null;
    description: string | null;
    votingEnabled: boolean | null;
    createdAt: Date | null;
    createdBy: string | null;
    updatedAt: Date | null;
    updatedBy: string | null;
  };

  export type CategoryMaxAggregateOutputType = {
    id: bigint | null;
    categoryName: string | null;
    description: string | null;
    votingEnabled: boolean | null;
    createdAt: Date | null;
    createdBy: string | null;
    updatedAt: Date | null;
    updatedBy: string | null;
  };

  export type CategoryCountAggregateOutputType = {
    id: number;
    categoryName: number;
    description: number;
    votingEnabled: number;
    createdAt: number;
    createdBy: number;
    updatedAt: number;
    updatedBy: number;
    _all: number;
  };

  export type CategoryAvgAggregateInputType = {
    id?: true;
  };

  export type CategorySumAggregateInputType = {
    id?: true;
  };

  export type CategoryMinAggregateInputType = {
    id?: true;
    categoryName?: true;
    description?: true;
    votingEnabled?: true;
    createdAt?: true;
    createdBy?: true;
    updatedAt?: true;
    updatedBy?: true;
  };

  export type CategoryMaxAggregateInputType = {
    id?: true;
    categoryName?: true;
    description?: true;
    votingEnabled?: true;
    createdAt?: true;
    createdBy?: true;
    updatedAt?: true;
    updatedBy?: true;
  };

  export type CategoryCountAggregateInputType = {
    id?: true;
    categoryName?: true;
    description?: true;
    votingEnabled?: true;
    createdAt?: true;
    createdBy?: true;
    updatedAt?: true;
    updatedBy?: true;
    _all?: true;
  };

  export type CategoryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Categories
     **/
    _count?: true | CategoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CategoryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CategorySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CategoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CategoryMaxAggregateInputType;
  };

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>;
  };

  export type CategoryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CategoryWhereInput;
    orderBy?:
      | CategoryOrderByWithAggregationInput
      | CategoryOrderByWithAggregationInput[];
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum;
    having?: CategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoryCountAggregateInputType | true;
    _avg?: CategoryAvgAggregateInputType;
    _sum?: CategorySumAggregateInputType;
    _min?: CategoryMinAggregateInputType;
    _max?: CategoryMaxAggregateInputType;
  };

  export type CategoryGroupByOutputType = {
    id: bigint;
    categoryName: string;
    description: string | null;
    votingEnabled: boolean | null;
    createdAt: Date;
    createdBy: string | null;
    updatedAt: Date | null;
    updatedBy: string | null;
    _count: CategoryCountAggregateOutputType | null;
    _avg: CategoryAvgAggregateOutputType | null;
    _sum: CategorySumAggregateOutputType | null;
    _min: CategoryMinAggregateOutputType | null;
    _max: CategoryMaxAggregateOutputType | null;
  };

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CategoryGroupByOutputType, T['by']> & {
          [P in keyof T & keyof CategoryGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>;
        }
      >
    >;

  export type CategorySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      categoryName?: boolean;
      description?: boolean;
      votingEnabled?: boolean;
      createdAt?: boolean;
      createdBy?: boolean;
      updatedAt?: boolean;
      updatedBy?: boolean;
      performances?: boolean | Category$performancesArgs<ExtArgs>;
      _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['category']
  >;

  export type CategorySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      categoryName?: boolean;
      description?: boolean;
      votingEnabled?: boolean;
      createdAt?: boolean;
      createdBy?: boolean;
      updatedAt?: boolean;
      updatedBy?: boolean;
    },
    ExtArgs['result']['category']
  >;

  export type CategorySelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      categoryName?: boolean;
      description?: boolean;
      votingEnabled?: boolean;
      createdAt?: boolean;
      createdBy?: boolean;
      updatedAt?: boolean;
      updatedBy?: boolean;
    },
    ExtArgs['result']['category']
  >;

  export type CategorySelectScalar = {
    id?: boolean;
    categoryName?: boolean;
    description?: boolean;
    votingEnabled?: boolean;
    createdAt?: boolean;
    createdBy?: boolean;
    updatedAt?: boolean;
    updatedBy?: boolean;
  };

  export type CategoryOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'categoryName'
    | 'description'
    | 'votingEnabled'
    | 'createdAt'
    | 'createdBy'
    | 'updatedAt'
    | 'updatedBy',
    ExtArgs['result']['category']
  >;
  export type CategoryInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    performances?: boolean | Category$performancesArgs<ExtArgs>;
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type CategoryIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type CategoryIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $CategoryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Category';
    objects: {
      performances: Prisma.$PerformanceCategoryPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: bigint;
        categoryName: string;
        description: string | null;
        votingEnabled: boolean | null;
        createdAt: Date;
        createdBy: string | null;
        updatedAt: Date | null;
        updatedBy: string | null;
      },
      ExtArgs['result']['category']
    >;
    composites: {};
  };

  type CategoryGetPayload<
    S extends boolean | null | undefined | CategoryDefaultArgs,
  > = $Result.GetResult<Prisma.$CategoryPayload, S>;

  type CategoryCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CategoryCountAggregateInputType | true;
  };

  export interface CategoryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Category'];
      meta: { name: 'Category' };
    };
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     *
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CategoryFindManyArgs>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     *
     */
    create<T extends CategoryCreateArgs>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CategoryCreateManyArgs>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     *
     */
    delete<T extends CategoryDeleteArgs>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CategoryUpdateArgs>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CategoryDeleteManyArgs>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CategoryUpdateManyArgs>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
     **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CategoryAggregateArgs>(
      args: Subset<T, CategoryAggregateArgs>,
    ): Prisma.PrismaPromise<GetCategoryAggregateType<T>>;

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetCategoryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Category model
     */
    readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    performances<T extends Category$performancesArgs<ExtArgs> = {}>(
      args?: Subset<T, Category$performancesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PerformanceCategoryPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<'Category', 'BigInt'>;
    readonly categoryName: FieldRef<'Category', 'String'>;
    readonly description: FieldRef<'Category', 'String'>;
    readonly votingEnabled: FieldRef<'Category', 'Boolean'>;
    readonly createdAt: FieldRef<'Category', 'DateTime'>;
    readonly createdBy: FieldRef<'Category', 'String'>;
    readonly updatedAt: FieldRef<'Category', 'DateTime'>;
    readonly updatedBy: FieldRef<'Category', 'String'>;
  }

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Category create
   */
  export type CategoryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>;
  };

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Category update
   */
  export type CategoryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>;
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Categories.
     */
    data: XOR<
      CategoryUpdateManyMutationInput,
      CategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput;
    /**
     * Limit how many Categories to update.
     */
    limit?: number;
  };

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * The data used to update Categories.
     */
    data: XOR<
      CategoryUpdateManyMutationInput,
      CategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput;
    /**
     * Limit how many Categories to update.
     */
    limit?: number;
  };

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput;
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>;
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>;
  };

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput;
    /**
     * Limit how many Categories to delete.
     */
    limit?: number;
  };

  /**
   * Category.performances
   */
  export type Category$performancesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PerformanceCategory
     */
    select?: PerformanceCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PerformanceCategory
     */
    omit?: PerformanceCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceCategoryInclude<ExtArgs> | null;
    where?: PerformanceCategoryWhereInput;
    orderBy?:
      | PerformanceCategoryOrderByWithRelationInput
      | PerformanceCategoryOrderByWithRelationInput[];
    cursor?: PerformanceCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | PerformanceCategoryScalarFieldEnum
      | PerformanceCategoryScalarFieldEnum[];
  };

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
  };

  /**
   * Model Performance
   */

  export type AggregatePerformance = {
    _count: PerformanceCountAggregateOutputType | null;
    _avg: PerformanceAvgAggregateOutputType | null;
    _sum: PerformanceSumAggregateOutputType | null;
    _min: PerformanceMinAggregateOutputType | null;
    _max: PerformanceMaxAggregateOutputType | null;
  };

  export type PerformanceAvgAggregateOutputType = {
    id: number | null;
  };

  export type PerformanceSumAggregateOutputType = {
    id: bigint | null;
  };

  export type PerformanceMinAggregateOutputType = {
    id: bigint | null;
    name: string | null;
    createdAt: Date | null;
    createdBy: string | null;
    updatedAt: Date | null;
    updatedBy: string | null;
  };

  export type PerformanceMaxAggregateOutputType = {
    id: bigint | null;
    name: string | null;
    createdAt: Date | null;
    createdBy: string | null;
    updatedAt: Date | null;
    updatedBy: string | null;
  };

  export type PerformanceCountAggregateOutputType = {
    id: number;
    name: number;
    createdAt: number;
    createdBy: number;
    updatedAt: number;
    updatedBy: number;
    _all: number;
  };

  export type PerformanceAvgAggregateInputType = {
    id?: true;
  };

  export type PerformanceSumAggregateInputType = {
    id?: true;
  };

  export type PerformanceMinAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    createdBy?: true;
    updatedAt?: true;
    updatedBy?: true;
  };

  export type PerformanceMaxAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    createdBy?: true;
    updatedAt?: true;
    updatedBy?: true;
  };

  export type PerformanceCountAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    createdBy?: true;
    updatedAt?: true;
    updatedBy?: true;
    _all?: true;
  };

  export type PerformanceAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Performance to aggregate.
     */
    where?: PerformanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Performances to fetch.
     */
    orderBy?:
      | PerformanceOrderByWithRelationInput
      | PerformanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PerformanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Performances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Performances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Performances
     **/
    _count?: true | PerformanceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PerformanceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PerformanceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PerformanceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PerformanceMaxAggregateInputType;
  };

  export type GetPerformanceAggregateType<T extends PerformanceAggregateArgs> =
    {
      [P in keyof T & keyof AggregatePerformance]: P extends '_count' | 'count'
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregatePerformance[P]>
        : GetScalarType<T[P], AggregatePerformance[P]>;
    };

  export type PerformanceGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PerformanceWhereInput;
    orderBy?:
      | PerformanceOrderByWithAggregationInput
      | PerformanceOrderByWithAggregationInput[];
    by: PerformanceScalarFieldEnum[] | PerformanceScalarFieldEnum;
    having?: PerformanceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PerformanceCountAggregateInputType | true;
    _avg?: PerformanceAvgAggregateInputType;
    _sum?: PerformanceSumAggregateInputType;
    _min?: PerformanceMinAggregateInputType;
    _max?: PerformanceMaxAggregateInputType;
  };

  export type PerformanceGroupByOutputType = {
    id: bigint;
    name: string;
    createdAt: Date;
    createdBy: string | null;
    updatedAt: Date | null;
    updatedBy: string | null;
    _count: PerformanceCountAggregateOutputType | null;
    _avg: PerformanceAvgAggregateOutputType | null;
    _sum: PerformanceSumAggregateOutputType | null;
    _min: PerformanceMinAggregateOutputType | null;
    _max: PerformanceMaxAggregateOutputType | null;
  };

  type GetPerformanceGroupByPayload<T extends PerformanceGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<PerformanceGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof PerformanceGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerformanceGroupByOutputType[P]>
            : GetScalarType<T[P], PerformanceGroupByOutputType[P]>;
        }
      >
    >;

  export type PerformanceSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      createdAt?: boolean;
      createdBy?: boolean;
      updatedAt?: boolean;
      updatedBy?: boolean;
      categories?: boolean | Performance$categoriesArgs<ExtArgs>;
      _count?: boolean | PerformanceCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['performance']
  >;

  export type PerformanceSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      createdAt?: boolean;
      createdBy?: boolean;
      updatedAt?: boolean;
      updatedBy?: boolean;
    },
    ExtArgs['result']['performance']
  >;

  export type PerformanceSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      createdAt?: boolean;
      createdBy?: boolean;
      updatedAt?: boolean;
      updatedBy?: boolean;
    },
    ExtArgs['result']['performance']
  >;

  export type PerformanceSelectScalar = {
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    createdBy?: boolean;
    updatedAt?: boolean;
    updatedBy?: boolean;
  };

  export type PerformanceOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'createdAt' | 'createdBy' | 'updatedAt' | 'updatedBy',
    ExtArgs['result']['performance']
  >;
  export type PerformanceInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    categories?: boolean | Performance$categoriesArgs<ExtArgs>;
    _count?: boolean | PerformanceCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type PerformanceIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type PerformanceIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $PerformancePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Performance';
    objects: {
      categories: Prisma.$PerformanceCategoryPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: bigint;
        name: string;
        createdAt: Date;
        createdBy: string | null;
        updatedAt: Date | null;
        updatedBy: string | null;
      },
      ExtArgs['result']['performance']
    >;
    composites: {};
  };

  type PerformanceGetPayload<
    S extends boolean | null | undefined | PerformanceDefaultArgs,
  > = $Result.GetResult<Prisma.$PerformancePayload, S>;

  type PerformanceCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    PerformanceFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: PerformanceCountAggregateInputType | true;
  };

  export interface PerformanceDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Performance'];
      meta: { name: 'Performance' };
    };
    /**
     * Find zero or one Performance that matches the filter.
     * @param {PerformanceFindUniqueArgs} args - Arguments to find a Performance
     * @example
     * // Get one Performance
     * const performance = await prisma.performance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PerformanceFindUniqueArgs>(
      args: SelectSubset<T, PerformanceFindUniqueArgs<ExtArgs>>,
    ): Prisma__PerformanceClient<
      $Result.GetResult<
        Prisma.$PerformancePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Performance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PerformanceFindUniqueOrThrowArgs} args - Arguments to find a Performance
     * @example
     * // Get one Performance
     * const performance = await prisma.performance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PerformanceFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PerformanceFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__PerformanceClient<
      $Result.GetResult<
        Prisma.$PerformancePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Performance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceFindFirstArgs} args - Arguments to find a Performance
     * @example
     * // Get one Performance
     * const performance = await prisma.performance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PerformanceFindFirstArgs>(
      args?: SelectSubset<T, PerformanceFindFirstArgs<ExtArgs>>,
    ): Prisma__PerformanceClient<
      $Result.GetResult<
        Prisma.$PerformancePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Performance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceFindFirstOrThrowArgs} args - Arguments to find a Performance
     * @example
     * // Get one Performance
     * const performance = await prisma.performance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PerformanceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PerformanceFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__PerformanceClient<
      $Result.GetResult<
        Prisma.$PerformancePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Performances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Performances
     * const performances = await prisma.performance.findMany()
     *
     * // Get first 10 Performances
     * const performances = await prisma.performance.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const performanceWithIdOnly = await prisma.performance.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PerformanceFindManyArgs>(
      args?: SelectSubset<T, PerformanceFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PerformancePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Performance.
     * @param {PerformanceCreateArgs} args - Arguments to create a Performance.
     * @example
     * // Create one Performance
     * const Performance = await prisma.performance.create({
     *   data: {
     *     // ... data to create a Performance
     *   }
     * })
     *
     */
    create<T extends PerformanceCreateArgs>(
      args: SelectSubset<T, PerformanceCreateArgs<ExtArgs>>,
    ): Prisma__PerformanceClient<
      $Result.GetResult<
        Prisma.$PerformancePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Performances.
     * @param {PerformanceCreateManyArgs} args - Arguments to create many Performances.
     * @example
     * // Create many Performances
     * const performance = await prisma.performance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PerformanceCreateManyArgs>(
      args?: SelectSubset<T, PerformanceCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Performances and returns the data saved in the database.
     * @param {PerformanceCreateManyAndReturnArgs} args - Arguments to create many Performances.
     * @example
     * // Create many Performances
     * const performance = await prisma.performance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Performances and only return the `id`
     * const performanceWithIdOnly = await prisma.performance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PerformanceCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PerformanceCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PerformancePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Performance.
     * @param {PerformanceDeleteArgs} args - Arguments to delete one Performance.
     * @example
     * // Delete one Performance
     * const Performance = await prisma.performance.delete({
     *   where: {
     *     // ... filter to delete one Performance
     *   }
     * })
     *
     */
    delete<T extends PerformanceDeleteArgs>(
      args: SelectSubset<T, PerformanceDeleteArgs<ExtArgs>>,
    ): Prisma__PerformanceClient<
      $Result.GetResult<
        Prisma.$PerformancePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Performance.
     * @param {PerformanceUpdateArgs} args - Arguments to update one Performance.
     * @example
     * // Update one Performance
     * const performance = await prisma.performance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PerformanceUpdateArgs>(
      args: SelectSubset<T, PerformanceUpdateArgs<ExtArgs>>,
    ): Prisma__PerformanceClient<
      $Result.GetResult<
        Prisma.$PerformancePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Performances.
     * @param {PerformanceDeleteManyArgs} args - Arguments to filter Performances to delete.
     * @example
     * // Delete a few Performances
     * const { count } = await prisma.performance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PerformanceDeleteManyArgs>(
      args?: SelectSubset<T, PerformanceDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Performances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Performances
     * const performance = await prisma.performance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PerformanceUpdateManyArgs>(
      args: SelectSubset<T, PerformanceUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Performances and returns the data updated in the database.
     * @param {PerformanceUpdateManyAndReturnArgs} args - Arguments to update many Performances.
     * @example
     * // Update many Performances
     * const performance = await prisma.performance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Performances and only return the `id`
     * const performanceWithIdOnly = await prisma.performance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PerformanceUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PerformanceUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PerformancePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Performance.
     * @param {PerformanceUpsertArgs} args - Arguments to update or create a Performance.
     * @example
     * // Update or create a Performance
     * const performance = await prisma.performance.upsert({
     *   create: {
     *     // ... data to create a Performance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Performance we want to update
     *   }
     * })
     */
    upsert<T extends PerformanceUpsertArgs>(
      args: SelectSubset<T, PerformanceUpsertArgs<ExtArgs>>,
    ): Prisma__PerformanceClient<
      $Result.GetResult<
        Prisma.$PerformancePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Performances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceCountArgs} args - Arguments to filter Performances to count.
     * @example
     * // Count the number of Performances
     * const count = await prisma.performance.count({
     *   where: {
     *     // ... the filter for the Performances we want to count
     *   }
     * })
     **/
    count<T extends PerformanceCountArgs>(
      args?: Subset<T, PerformanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerformanceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Performance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PerformanceAggregateArgs>(
      args: Subset<T, PerformanceAggregateArgs>,
    ): Prisma.PrismaPromise<GetPerformanceAggregateType<T>>;

    /**
     * Group by Performance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends PerformanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PerformanceGroupByArgs['orderBy'] }
        : { orderBy?: PerformanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PerformanceGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetPerformanceGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Performance model
     */
    readonly fields: PerformanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Performance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PerformanceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    categories<T extends Performance$categoriesArgs<ExtArgs> = {}>(
      args?: Subset<T, Performance$categoriesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PerformanceCategoryPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Performance model
   */
  interface PerformanceFieldRefs {
    readonly id: FieldRef<'Performance', 'BigInt'>;
    readonly name: FieldRef<'Performance', 'String'>;
    readonly createdAt: FieldRef<'Performance', 'DateTime'>;
    readonly createdBy: FieldRef<'Performance', 'String'>;
    readonly updatedAt: FieldRef<'Performance', 'DateTime'>;
    readonly updatedBy: FieldRef<'Performance', 'String'>;
  }

  // Custom InputTypes
  /**
   * Performance findUnique
   */
  export type PerformanceFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Performance
     */
    select?: PerformanceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Performance
     */
    omit?: PerformanceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceInclude<ExtArgs> | null;
    /**
     * Filter, which Performance to fetch.
     */
    where: PerformanceWhereUniqueInput;
  };

  /**
   * Performance findUniqueOrThrow
   */
  export type PerformanceFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Performance
     */
    select?: PerformanceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Performance
     */
    omit?: PerformanceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceInclude<ExtArgs> | null;
    /**
     * Filter, which Performance to fetch.
     */
    where: PerformanceWhereUniqueInput;
  };

  /**
   * Performance findFirst
   */
  export type PerformanceFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Performance
     */
    select?: PerformanceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Performance
     */
    omit?: PerformanceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceInclude<ExtArgs> | null;
    /**
     * Filter, which Performance to fetch.
     */
    where?: PerformanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Performances to fetch.
     */
    orderBy?:
      | PerformanceOrderByWithRelationInput
      | PerformanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Performances.
     */
    cursor?: PerformanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Performances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Performances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Performances.
     */
    distinct?: PerformanceScalarFieldEnum | PerformanceScalarFieldEnum[];
  };

  /**
   * Performance findFirstOrThrow
   */
  export type PerformanceFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Performance
     */
    select?: PerformanceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Performance
     */
    omit?: PerformanceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceInclude<ExtArgs> | null;
    /**
     * Filter, which Performance to fetch.
     */
    where?: PerformanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Performances to fetch.
     */
    orderBy?:
      | PerformanceOrderByWithRelationInput
      | PerformanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Performances.
     */
    cursor?: PerformanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Performances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Performances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Performances.
     */
    distinct?: PerformanceScalarFieldEnum | PerformanceScalarFieldEnum[];
  };

  /**
   * Performance findMany
   */
  export type PerformanceFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Performance
     */
    select?: PerformanceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Performance
     */
    omit?: PerformanceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceInclude<ExtArgs> | null;
    /**
     * Filter, which Performances to fetch.
     */
    where?: PerformanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Performances to fetch.
     */
    orderBy?:
      | PerformanceOrderByWithRelationInput
      | PerformanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Performances.
     */
    cursor?: PerformanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Performances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Performances.
     */
    skip?: number;
    distinct?: PerformanceScalarFieldEnum | PerformanceScalarFieldEnum[];
  };

  /**
   * Performance create
   */
  export type PerformanceCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Performance
     */
    select?: PerformanceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Performance
     */
    omit?: PerformanceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceInclude<ExtArgs> | null;
    /**
     * The data needed to create a Performance.
     */
    data: XOR<PerformanceCreateInput, PerformanceUncheckedCreateInput>;
  };

  /**
   * Performance createMany
   */
  export type PerformanceCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Performances.
     */
    data: PerformanceCreateManyInput | PerformanceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Performance createManyAndReturn
   */
  export type PerformanceCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Performance
     */
    select?: PerformanceSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Performance
     */
    omit?: PerformanceOmit<ExtArgs> | null;
    /**
     * The data used to create many Performances.
     */
    data: PerformanceCreateManyInput | PerformanceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Performance update
   */
  export type PerformanceUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Performance
     */
    select?: PerformanceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Performance
     */
    omit?: PerformanceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceInclude<ExtArgs> | null;
    /**
     * The data needed to update a Performance.
     */
    data: XOR<PerformanceUpdateInput, PerformanceUncheckedUpdateInput>;
    /**
     * Choose, which Performance to update.
     */
    where: PerformanceWhereUniqueInput;
  };

  /**
   * Performance updateMany
   */
  export type PerformanceUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Performances.
     */
    data: XOR<
      PerformanceUpdateManyMutationInput,
      PerformanceUncheckedUpdateManyInput
    >;
    /**
     * Filter which Performances to update
     */
    where?: PerformanceWhereInput;
    /**
     * Limit how many Performances to update.
     */
    limit?: number;
  };

  /**
   * Performance updateManyAndReturn
   */
  export type PerformanceUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Performance
     */
    select?: PerformanceSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Performance
     */
    omit?: PerformanceOmit<ExtArgs> | null;
    /**
     * The data used to update Performances.
     */
    data: XOR<
      PerformanceUpdateManyMutationInput,
      PerformanceUncheckedUpdateManyInput
    >;
    /**
     * Filter which Performances to update
     */
    where?: PerformanceWhereInput;
    /**
     * Limit how many Performances to update.
     */
    limit?: number;
  };

  /**
   * Performance upsert
   */
  export type PerformanceUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Performance
     */
    select?: PerformanceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Performance
     */
    omit?: PerformanceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceInclude<ExtArgs> | null;
    /**
     * The filter to search for the Performance to update in case it exists.
     */
    where: PerformanceWhereUniqueInput;
    /**
     * In case the Performance found by the `where` argument doesn't exist, create a new Performance with this data.
     */
    create: XOR<PerformanceCreateInput, PerformanceUncheckedCreateInput>;
    /**
     * In case the Performance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PerformanceUpdateInput, PerformanceUncheckedUpdateInput>;
  };

  /**
   * Performance delete
   */
  export type PerformanceDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Performance
     */
    select?: PerformanceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Performance
     */
    omit?: PerformanceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceInclude<ExtArgs> | null;
    /**
     * Filter which Performance to delete.
     */
    where: PerformanceWhereUniqueInput;
  };

  /**
   * Performance deleteMany
   */
  export type PerformanceDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Performances to delete
     */
    where?: PerformanceWhereInput;
    /**
     * Limit how many Performances to delete.
     */
    limit?: number;
  };

  /**
   * Performance.categories
   */
  export type Performance$categoriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PerformanceCategory
     */
    select?: PerformanceCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PerformanceCategory
     */
    omit?: PerformanceCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceCategoryInclude<ExtArgs> | null;
    where?: PerformanceCategoryWhereInput;
    orderBy?:
      | PerformanceCategoryOrderByWithRelationInput
      | PerformanceCategoryOrderByWithRelationInput[];
    cursor?: PerformanceCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | PerformanceCategoryScalarFieldEnum
      | PerformanceCategoryScalarFieldEnum[];
  };

  /**
   * Performance without action
   */
  export type PerformanceDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Performance
     */
    select?: PerformanceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Performance
     */
    omit?: PerformanceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceInclude<ExtArgs> | null;
  };

  /**
   * Model PerformanceCategory
   */

  export type AggregatePerformanceCategory = {
    _count: PerformanceCategoryCountAggregateOutputType | null;
    _avg: PerformanceCategoryAvgAggregateOutputType | null;
    _sum: PerformanceCategorySumAggregateOutputType | null;
    _min: PerformanceCategoryMinAggregateOutputType | null;
    _max: PerformanceCategoryMaxAggregateOutputType | null;
  };

  export type PerformanceCategoryAvgAggregateOutputType = {
    performance_id: number | null;
    category_id: number | null;
    vote: number | null;
  };

  export type PerformanceCategorySumAggregateOutputType = {
    performance_id: bigint | null;
    category_id: bigint | null;
    vote: number | null;
  };

  export type PerformanceCategoryMinAggregateOutputType = {
    performance_id: bigint | null;
    category_id: bigint | null;
    vote: number | null;
    createdAt: Date | null;
    createdBy: string | null;
    updatedAt: Date | null;
    updatedBy: string | null;
  };

  export type PerformanceCategoryMaxAggregateOutputType = {
    performance_id: bigint | null;
    category_id: bigint | null;
    vote: number | null;
    createdAt: Date | null;
    createdBy: string | null;
    updatedAt: Date | null;
    updatedBy: string | null;
  };

  export type PerformanceCategoryCountAggregateOutputType = {
    performance_id: number;
    category_id: number;
    vote: number;
    createdAt: number;
    createdBy: number;
    updatedAt: number;
    updatedBy: number;
    _all: number;
  };

  export type PerformanceCategoryAvgAggregateInputType = {
    performance_id?: true;
    category_id?: true;
    vote?: true;
  };

  export type PerformanceCategorySumAggregateInputType = {
    performance_id?: true;
    category_id?: true;
    vote?: true;
  };

  export type PerformanceCategoryMinAggregateInputType = {
    performance_id?: true;
    category_id?: true;
    vote?: true;
    createdAt?: true;
    createdBy?: true;
    updatedAt?: true;
    updatedBy?: true;
  };

  export type PerformanceCategoryMaxAggregateInputType = {
    performance_id?: true;
    category_id?: true;
    vote?: true;
    createdAt?: true;
    createdBy?: true;
    updatedAt?: true;
    updatedBy?: true;
  };

  export type PerformanceCategoryCountAggregateInputType = {
    performance_id?: true;
    category_id?: true;
    vote?: true;
    createdAt?: true;
    createdBy?: true;
    updatedAt?: true;
    updatedBy?: true;
    _all?: true;
  };

  export type PerformanceCategoryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PerformanceCategory to aggregate.
     */
    where?: PerformanceCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PerformanceCategories to fetch.
     */
    orderBy?:
      | PerformanceCategoryOrderByWithRelationInput
      | PerformanceCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PerformanceCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PerformanceCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PerformanceCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PerformanceCategories
     **/
    _count?: true | PerformanceCategoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PerformanceCategoryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PerformanceCategorySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PerformanceCategoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PerformanceCategoryMaxAggregateInputType;
  };

  export type GetPerformanceCategoryAggregateType<
    T extends PerformanceCategoryAggregateArgs,
  > = {
    [P in keyof T & keyof AggregatePerformanceCategory]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerformanceCategory[P]>
      : GetScalarType<T[P], AggregatePerformanceCategory[P]>;
  };

  export type PerformanceCategoryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PerformanceCategoryWhereInput;
    orderBy?:
      | PerformanceCategoryOrderByWithAggregationInput
      | PerformanceCategoryOrderByWithAggregationInput[];
    by:
      | PerformanceCategoryScalarFieldEnum[]
      | PerformanceCategoryScalarFieldEnum;
    having?: PerformanceCategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PerformanceCategoryCountAggregateInputType | true;
    _avg?: PerformanceCategoryAvgAggregateInputType;
    _sum?: PerformanceCategorySumAggregateInputType;
    _min?: PerformanceCategoryMinAggregateInputType;
    _max?: PerformanceCategoryMaxAggregateInputType;
  };

  export type PerformanceCategoryGroupByOutputType = {
    performance_id: bigint;
    category_id: bigint;
    vote: number;
    createdAt: Date;
    createdBy: string | null;
    updatedAt: Date | null;
    updatedBy: string | null;
    _count: PerformanceCategoryCountAggregateOutputType | null;
    _avg: PerformanceCategoryAvgAggregateOutputType | null;
    _sum: PerformanceCategorySumAggregateOutputType | null;
    _min: PerformanceCategoryMinAggregateOutputType | null;
    _max: PerformanceCategoryMaxAggregateOutputType | null;
  };

  type GetPerformanceCategoryGroupByPayload<
    T extends PerformanceCategoryGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerformanceCategoryGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof PerformanceCategoryGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PerformanceCategoryGroupByOutputType[P]>
          : GetScalarType<T[P], PerformanceCategoryGroupByOutputType[P]>;
      }
    >
  >;

  export type PerformanceCategorySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      performance_id?: boolean;
      category_id?: boolean;
      vote?: boolean;
      createdAt?: boolean;
      createdBy?: boolean;
      updatedAt?: boolean;
      updatedBy?: boolean;
      performances?: boolean | PerformanceDefaultArgs<ExtArgs>;
      categories?: boolean | CategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['performanceCategory']
  >;

  export type PerformanceCategorySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      performance_id?: boolean;
      category_id?: boolean;
      vote?: boolean;
      createdAt?: boolean;
      createdBy?: boolean;
      updatedAt?: boolean;
      updatedBy?: boolean;
      performances?: boolean | PerformanceDefaultArgs<ExtArgs>;
      categories?: boolean | CategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['performanceCategory']
  >;

  export type PerformanceCategorySelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      performance_id?: boolean;
      category_id?: boolean;
      vote?: boolean;
      createdAt?: boolean;
      createdBy?: boolean;
      updatedAt?: boolean;
      updatedBy?: boolean;
      performances?: boolean | PerformanceDefaultArgs<ExtArgs>;
      categories?: boolean | CategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['performanceCategory']
  >;

  export type PerformanceCategorySelectScalar = {
    performance_id?: boolean;
    category_id?: boolean;
    vote?: boolean;
    createdAt?: boolean;
    createdBy?: boolean;
    updatedAt?: boolean;
    updatedBy?: boolean;
  };

  export type PerformanceCategoryOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'performance_id'
    | 'category_id'
    | 'vote'
    | 'createdAt'
    | 'createdBy'
    | 'updatedAt'
    | 'updatedBy',
    ExtArgs['result']['performanceCategory']
  >;
  export type PerformanceCategoryInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    performances?: boolean | PerformanceDefaultArgs<ExtArgs>;
    categories?: boolean | CategoryDefaultArgs<ExtArgs>;
  };
  export type PerformanceCategoryIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    performances?: boolean | PerformanceDefaultArgs<ExtArgs>;
    categories?: boolean | CategoryDefaultArgs<ExtArgs>;
  };
  export type PerformanceCategoryIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    performances?: boolean | PerformanceDefaultArgs<ExtArgs>;
    categories?: boolean | CategoryDefaultArgs<ExtArgs>;
  };

  export type $PerformanceCategoryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'PerformanceCategory';
    objects: {
      performances: Prisma.$PerformancePayload<ExtArgs>;
      categories: Prisma.$CategoryPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        performance_id: bigint;
        category_id: bigint;
        vote: number;
        createdAt: Date;
        createdBy: string | null;
        updatedAt: Date | null;
        updatedBy: string | null;
      },
      ExtArgs['result']['performanceCategory']
    >;
    composites: {};
  };

  type PerformanceCategoryGetPayload<
    S extends boolean | null | undefined | PerformanceCategoryDefaultArgs,
  > = $Result.GetResult<Prisma.$PerformanceCategoryPayload, S>;

  type PerformanceCategoryCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    PerformanceCategoryFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: PerformanceCategoryCountAggregateInputType | true;
  };

  export interface PerformanceCategoryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['PerformanceCategory'];
      meta: { name: 'PerformanceCategory' };
    };
    /**
     * Find zero or one PerformanceCategory that matches the filter.
     * @param {PerformanceCategoryFindUniqueArgs} args - Arguments to find a PerformanceCategory
     * @example
     * // Get one PerformanceCategory
     * const performanceCategory = await prisma.performanceCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PerformanceCategoryFindUniqueArgs>(
      args: SelectSubset<T, PerformanceCategoryFindUniqueArgs<ExtArgs>>,
    ): Prisma__PerformanceCategoryClient<
      $Result.GetResult<
        Prisma.$PerformanceCategoryPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one PerformanceCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PerformanceCategoryFindUniqueOrThrowArgs} args - Arguments to find a PerformanceCategory
     * @example
     * // Get one PerformanceCategory
     * const performanceCategory = await prisma.performanceCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PerformanceCategoryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PerformanceCategoryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__PerformanceCategoryClient<
      $Result.GetResult<
        Prisma.$PerformanceCategoryPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first PerformanceCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceCategoryFindFirstArgs} args - Arguments to find a PerformanceCategory
     * @example
     * // Get one PerformanceCategory
     * const performanceCategory = await prisma.performanceCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PerformanceCategoryFindFirstArgs>(
      args?: SelectSubset<T, PerformanceCategoryFindFirstArgs<ExtArgs>>,
    ): Prisma__PerformanceCategoryClient<
      $Result.GetResult<
        Prisma.$PerformanceCategoryPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first PerformanceCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceCategoryFindFirstOrThrowArgs} args - Arguments to find a PerformanceCategory
     * @example
     * // Get one PerformanceCategory
     * const performanceCategory = await prisma.performanceCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PerformanceCategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PerformanceCategoryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__PerformanceCategoryClient<
      $Result.GetResult<
        Prisma.$PerformanceCategoryPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more PerformanceCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PerformanceCategories
     * const performanceCategories = await prisma.performanceCategory.findMany()
     *
     * // Get first 10 PerformanceCategories
     * const performanceCategories = await prisma.performanceCategory.findMany({ take: 10 })
     *
     * // Only select the `performance_id`
     * const performanceCategoryWithPerformance_idOnly = await prisma.performanceCategory.findMany({ select: { performance_id: true } })
     *
     */
    findMany<T extends PerformanceCategoryFindManyArgs>(
      args?: SelectSubset<T, PerformanceCategoryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PerformanceCategoryPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a PerformanceCategory.
     * @param {PerformanceCategoryCreateArgs} args - Arguments to create a PerformanceCategory.
     * @example
     * // Create one PerformanceCategory
     * const PerformanceCategory = await prisma.performanceCategory.create({
     *   data: {
     *     // ... data to create a PerformanceCategory
     *   }
     * })
     *
     */
    create<T extends PerformanceCategoryCreateArgs>(
      args: SelectSubset<T, PerformanceCategoryCreateArgs<ExtArgs>>,
    ): Prisma__PerformanceCategoryClient<
      $Result.GetResult<
        Prisma.$PerformanceCategoryPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many PerformanceCategories.
     * @param {PerformanceCategoryCreateManyArgs} args - Arguments to create many PerformanceCategories.
     * @example
     * // Create many PerformanceCategories
     * const performanceCategory = await prisma.performanceCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PerformanceCategoryCreateManyArgs>(
      args?: SelectSubset<T, PerformanceCategoryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many PerformanceCategories and returns the data saved in the database.
     * @param {PerformanceCategoryCreateManyAndReturnArgs} args - Arguments to create many PerformanceCategories.
     * @example
     * // Create many PerformanceCategories
     * const performanceCategory = await prisma.performanceCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PerformanceCategories and only return the `performance_id`
     * const performanceCategoryWithPerformance_idOnly = await prisma.performanceCategory.createManyAndReturn({
     *   select: { performance_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PerformanceCategoryCreateManyAndReturnArgs>(
      args?: SelectSubset<
        T,
        PerformanceCategoryCreateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PerformanceCategoryPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a PerformanceCategory.
     * @param {PerformanceCategoryDeleteArgs} args - Arguments to delete one PerformanceCategory.
     * @example
     * // Delete one PerformanceCategory
     * const PerformanceCategory = await prisma.performanceCategory.delete({
     *   where: {
     *     // ... filter to delete one PerformanceCategory
     *   }
     * })
     *
     */
    delete<T extends PerformanceCategoryDeleteArgs>(
      args: SelectSubset<T, PerformanceCategoryDeleteArgs<ExtArgs>>,
    ): Prisma__PerformanceCategoryClient<
      $Result.GetResult<
        Prisma.$PerformanceCategoryPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one PerformanceCategory.
     * @param {PerformanceCategoryUpdateArgs} args - Arguments to update one PerformanceCategory.
     * @example
     * // Update one PerformanceCategory
     * const performanceCategory = await prisma.performanceCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PerformanceCategoryUpdateArgs>(
      args: SelectSubset<T, PerformanceCategoryUpdateArgs<ExtArgs>>,
    ): Prisma__PerformanceCategoryClient<
      $Result.GetResult<
        Prisma.$PerformanceCategoryPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more PerformanceCategories.
     * @param {PerformanceCategoryDeleteManyArgs} args - Arguments to filter PerformanceCategories to delete.
     * @example
     * // Delete a few PerformanceCategories
     * const { count } = await prisma.performanceCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PerformanceCategoryDeleteManyArgs>(
      args?: SelectSubset<T, PerformanceCategoryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PerformanceCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PerformanceCategories
     * const performanceCategory = await prisma.performanceCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PerformanceCategoryUpdateManyArgs>(
      args: SelectSubset<T, PerformanceCategoryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PerformanceCategories and returns the data updated in the database.
     * @param {PerformanceCategoryUpdateManyAndReturnArgs} args - Arguments to update many PerformanceCategories.
     * @example
     * // Update many PerformanceCategories
     * const performanceCategory = await prisma.performanceCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PerformanceCategories and only return the `performance_id`
     * const performanceCategoryWithPerformance_idOnly = await prisma.performanceCategory.updateManyAndReturn({
     *   select: { performance_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PerformanceCategoryUpdateManyAndReturnArgs>(
      args: SelectSubset<
        T,
        PerformanceCategoryUpdateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PerformanceCategoryPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one PerformanceCategory.
     * @param {PerformanceCategoryUpsertArgs} args - Arguments to update or create a PerformanceCategory.
     * @example
     * // Update or create a PerformanceCategory
     * const performanceCategory = await prisma.performanceCategory.upsert({
     *   create: {
     *     // ... data to create a PerformanceCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PerformanceCategory we want to update
     *   }
     * })
     */
    upsert<T extends PerformanceCategoryUpsertArgs>(
      args: SelectSubset<T, PerformanceCategoryUpsertArgs<ExtArgs>>,
    ): Prisma__PerformanceCategoryClient<
      $Result.GetResult<
        Prisma.$PerformanceCategoryPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of PerformanceCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceCategoryCountArgs} args - Arguments to filter PerformanceCategories to count.
     * @example
     * // Count the number of PerformanceCategories
     * const count = await prisma.performanceCategory.count({
     *   where: {
     *     // ... the filter for the PerformanceCategories we want to count
     *   }
     * })
     **/
    count<T extends PerformanceCategoryCountArgs>(
      args?: Subset<T, PerformanceCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<
              T['select'],
              PerformanceCategoryCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a PerformanceCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PerformanceCategoryAggregateArgs>(
      args: Subset<T, PerformanceCategoryAggregateArgs>,
    ): Prisma.PrismaPromise<GetPerformanceCategoryAggregateType<T>>;

    /**
     * Group by PerformanceCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends PerformanceCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PerformanceCategoryGroupByArgs['orderBy'] }
        : { orderBy?: PerformanceCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PerformanceCategoryGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetPerformanceCategoryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PerformanceCategory model
     */
    readonly fields: PerformanceCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PerformanceCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PerformanceCategoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    performances<T extends PerformanceDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, PerformanceDefaultArgs<ExtArgs>>,
    ): Prisma__PerformanceClient<
      | $Result.GetResult<
          Prisma.$PerformancePayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    categories<T extends CategoryDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CategoryDefaultArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      | $Result.GetResult<
          Prisma.$CategoryPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the PerformanceCategory model
   */
  interface PerformanceCategoryFieldRefs {
    readonly performance_id: FieldRef<'PerformanceCategory', 'BigInt'>;
    readonly category_id: FieldRef<'PerformanceCategory', 'BigInt'>;
    readonly vote: FieldRef<'PerformanceCategory', 'Int'>;
    readonly createdAt: FieldRef<'PerformanceCategory', 'DateTime'>;
    readonly createdBy: FieldRef<'PerformanceCategory', 'String'>;
    readonly updatedAt: FieldRef<'PerformanceCategory', 'DateTime'>;
    readonly updatedBy: FieldRef<'PerformanceCategory', 'String'>;
  }

  // Custom InputTypes
  /**
   * PerformanceCategory findUnique
   */
  export type PerformanceCategoryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PerformanceCategory
     */
    select?: PerformanceCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PerformanceCategory
     */
    omit?: PerformanceCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which PerformanceCategory to fetch.
     */
    where: PerformanceCategoryWhereUniqueInput;
  };

  /**
   * PerformanceCategory findUniqueOrThrow
   */
  export type PerformanceCategoryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PerformanceCategory
     */
    select?: PerformanceCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PerformanceCategory
     */
    omit?: PerformanceCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which PerformanceCategory to fetch.
     */
    where: PerformanceCategoryWhereUniqueInput;
  };

  /**
   * PerformanceCategory findFirst
   */
  export type PerformanceCategoryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PerformanceCategory
     */
    select?: PerformanceCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PerformanceCategory
     */
    omit?: PerformanceCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which PerformanceCategory to fetch.
     */
    where?: PerformanceCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PerformanceCategories to fetch.
     */
    orderBy?:
      | PerformanceCategoryOrderByWithRelationInput
      | PerformanceCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PerformanceCategories.
     */
    cursor?: PerformanceCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PerformanceCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PerformanceCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PerformanceCategories.
     */
    distinct?:
      | PerformanceCategoryScalarFieldEnum
      | PerformanceCategoryScalarFieldEnum[];
  };

  /**
   * PerformanceCategory findFirstOrThrow
   */
  export type PerformanceCategoryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PerformanceCategory
     */
    select?: PerformanceCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PerformanceCategory
     */
    omit?: PerformanceCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which PerformanceCategory to fetch.
     */
    where?: PerformanceCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PerformanceCategories to fetch.
     */
    orderBy?:
      | PerformanceCategoryOrderByWithRelationInput
      | PerformanceCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PerformanceCategories.
     */
    cursor?: PerformanceCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PerformanceCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PerformanceCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PerformanceCategories.
     */
    distinct?:
      | PerformanceCategoryScalarFieldEnum
      | PerformanceCategoryScalarFieldEnum[];
  };

  /**
   * PerformanceCategory findMany
   */
  export type PerformanceCategoryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PerformanceCategory
     */
    select?: PerformanceCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PerformanceCategory
     */
    omit?: PerformanceCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which PerformanceCategories to fetch.
     */
    where?: PerformanceCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PerformanceCategories to fetch.
     */
    orderBy?:
      | PerformanceCategoryOrderByWithRelationInput
      | PerformanceCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PerformanceCategories.
     */
    cursor?: PerformanceCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PerformanceCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PerformanceCategories.
     */
    skip?: number;
    distinct?:
      | PerformanceCategoryScalarFieldEnum
      | PerformanceCategoryScalarFieldEnum[];
  };

  /**
   * PerformanceCategory create
   */
  export type PerformanceCategoryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PerformanceCategory
     */
    select?: PerformanceCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PerformanceCategory
     */
    omit?: PerformanceCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceCategoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a PerformanceCategory.
     */
    data: XOR<
      PerformanceCategoryCreateInput,
      PerformanceCategoryUncheckedCreateInput
    >;
  };

  /**
   * PerformanceCategory createMany
   */
  export type PerformanceCategoryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many PerformanceCategories.
     */
    data:
      | PerformanceCategoryCreateManyInput
      | PerformanceCategoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * PerformanceCategory createManyAndReturn
   */
  export type PerformanceCategoryCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PerformanceCategory
     */
    select?: PerformanceCategorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PerformanceCategory
     */
    omit?: PerformanceCategoryOmit<ExtArgs> | null;
    /**
     * The data used to create many PerformanceCategories.
     */
    data:
      | PerformanceCategoryCreateManyInput
      | PerformanceCategoryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceCategoryIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * PerformanceCategory update
   */
  export type PerformanceCategoryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PerformanceCategory
     */
    select?: PerformanceCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PerformanceCategory
     */
    omit?: PerformanceCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceCategoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a PerformanceCategory.
     */
    data: XOR<
      PerformanceCategoryUpdateInput,
      PerformanceCategoryUncheckedUpdateInput
    >;
    /**
     * Choose, which PerformanceCategory to update.
     */
    where: PerformanceCategoryWhereUniqueInput;
  };

  /**
   * PerformanceCategory updateMany
   */
  export type PerformanceCategoryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update PerformanceCategories.
     */
    data: XOR<
      PerformanceCategoryUpdateManyMutationInput,
      PerformanceCategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which PerformanceCategories to update
     */
    where?: PerformanceCategoryWhereInput;
    /**
     * Limit how many PerformanceCategories to update.
     */
    limit?: number;
  };

  /**
   * PerformanceCategory updateManyAndReturn
   */
  export type PerformanceCategoryUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PerformanceCategory
     */
    select?: PerformanceCategorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PerformanceCategory
     */
    omit?: PerformanceCategoryOmit<ExtArgs> | null;
    /**
     * The data used to update PerformanceCategories.
     */
    data: XOR<
      PerformanceCategoryUpdateManyMutationInput,
      PerformanceCategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which PerformanceCategories to update
     */
    where?: PerformanceCategoryWhereInput;
    /**
     * Limit how many PerformanceCategories to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceCategoryIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * PerformanceCategory upsert
   */
  export type PerformanceCategoryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PerformanceCategory
     */
    select?: PerformanceCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PerformanceCategory
     */
    omit?: PerformanceCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceCategoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the PerformanceCategory to update in case it exists.
     */
    where: PerformanceCategoryWhereUniqueInput;
    /**
     * In case the PerformanceCategory found by the `where` argument doesn't exist, create a new PerformanceCategory with this data.
     */
    create: XOR<
      PerformanceCategoryCreateInput,
      PerformanceCategoryUncheckedCreateInput
    >;
    /**
     * In case the PerformanceCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      PerformanceCategoryUpdateInput,
      PerformanceCategoryUncheckedUpdateInput
    >;
  };

  /**
   * PerformanceCategory delete
   */
  export type PerformanceCategoryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PerformanceCategory
     */
    select?: PerformanceCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PerformanceCategory
     */
    omit?: PerformanceCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceCategoryInclude<ExtArgs> | null;
    /**
     * Filter which PerformanceCategory to delete.
     */
    where: PerformanceCategoryWhereUniqueInput;
  };

  /**
   * PerformanceCategory deleteMany
   */
  export type PerformanceCategoryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PerformanceCategories to delete
     */
    where?: PerformanceCategoryWhereInput;
    /**
     * Limit how many PerformanceCategories to delete.
     */
    limit?: number;
  };

  /**
   * PerformanceCategory without action
   */
  export type PerformanceCategoryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PerformanceCategory
     */
    select?: PerformanceCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PerformanceCategory
     */
    omit?: PerformanceCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceCategoryInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CategoryScalarFieldEnum: {
    id: 'id';
    categoryName: 'categoryName';
    description: 'description';
    votingEnabled: 'votingEnabled';
    createdAt: 'createdAt';
    createdBy: 'createdBy';
    updatedAt: 'updatedAt';
    updatedBy: 'updatedBy';
  };

  export type CategoryScalarFieldEnum =
    (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];

  export const PerformanceScalarFieldEnum: {
    id: 'id';
    name: 'name';
    createdAt: 'createdAt';
    createdBy: 'createdBy';
    updatedAt: 'updatedAt';
    updatedBy: 'updatedBy';
  };

  export type PerformanceScalarFieldEnum =
    (typeof PerformanceScalarFieldEnum)[keyof typeof PerformanceScalarFieldEnum];

  export const PerformanceCategoryScalarFieldEnum: {
    performance_id: 'performance_id';
    category_id: 'category_id';
    vote: 'vote';
    createdAt: 'createdAt';
    createdBy: 'createdBy';
    updatedAt: 'updatedAt';
    updatedBy: 'updatedBy';
  };

  export type PerformanceCategoryScalarFieldEnum =
    (typeof PerformanceCategoryScalarFieldEnum)[keyof typeof PerformanceCategoryScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'BigInt'
  >;

  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'BigInt[]'
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[];
    OR?: CategoryWhereInput[];
    NOT?: CategoryWhereInput | CategoryWhereInput[];
    id?: BigIntFilter<'Category'> | bigint | number;
    categoryName?: StringFilter<'Category'> | string;
    description?: StringNullableFilter<'Category'> | string | null;
    votingEnabled?: BoolNullableFilter<'Category'> | boolean | null;
    createdAt?: DateTimeFilter<'Category'> | Date | string;
    createdBy?: StringNullableFilter<'Category'> | string | null;
    updatedAt?: DateTimeNullableFilter<'Category'> | Date | string | null;
    updatedBy?: StringNullableFilter<'Category'> | string | null;
    performances?: PerformanceCategoryListRelationFilter;
  };

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder;
    categoryName?: SortOrder;
    description?: SortOrderInput | SortOrder;
    votingEnabled?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    createdBy?: SortOrderInput | SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    updatedBy?: SortOrderInput | SortOrder;
    performances?: PerformanceCategoryOrderByRelationAggregateInput;
  };

  export type CategoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: bigint | number;
      AND?: CategoryWhereInput | CategoryWhereInput[];
      OR?: CategoryWhereInput[];
      NOT?: CategoryWhereInput | CategoryWhereInput[];
      categoryName?: StringFilter<'Category'> | string;
      description?: StringNullableFilter<'Category'> | string | null;
      votingEnabled?: BoolNullableFilter<'Category'> | boolean | null;
      createdAt?: DateTimeFilter<'Category'> | Date | string;
      createdBy?: StringNullableFilter<'Category'> | string | null;
      updatedAt?: DateTimeNullableFilter<'Category'> | Date | string | null;
      updatedBy?: StringNullableFilter<'Category'> | string | null;
      performances?: PerformanceCategoryListRelationFilter;
    },
    'id'
  >;

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder;
    categoryName?: SortOrder;
    description?: SortOrderInput | SortOrder;
    votingEnabled?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    createdBy?: SortOrderInput | SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    updatedBy?: SortOrderInput | SortOrder;
    _count?: CategoryCountOrderByAggregateInput;
    _avg?: CategoryAvgOrderByAggregateInput;
    _max?: CategoryMaxOrderByAggregateInput;
    _min?: CategoryMinOrderByAggregateInput;
    _sum?: CategorySumOrderByAggregateInput;
  };

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?:
      | CategoryScalarWhereWithAggregatesInput
      | CategoryScalarWhereWithAggregatesInput[];
    OR?: CategoryScalarWhereWithAggregatesInput[];
    NOT?:
      | CategoryScalarWhereWithAggregatesInput
      | CategoryScalarWhereWithAggregatesInput[];
    id?: BigIntWithAggregatesFilter<'Category'> | bigint | number;
    categoryName?: StringWithAggregatesFilter<'Category'> | string;
    description?:
      | StringNullableWithAggregatesFilter<'Category'>
      | string
      | null;
    votingEnabled?:
      | BoolNullableWithAggregatesFilter<'Category'>
      | boolean
      | null;
    createdAt?: DateTimeWithAggregatesFilter<'Category'> | Date | string;
    createdBy?: StringNullableWithAggregatesFilter<'Category'> | string | null;
    updatedAt?:
      | DateTimeNullableWithAggregatesFilter<'Category'>
      | Date
      | string
      | null;
    updatedBy?: StringNullableWithAggregatesFilter<'Category'> | string | null;
  };

  export type PerformanceWhereInput = {
    AND?: PerformanceWhereInput | PerformanceWhereInput[];
    OR?: PerformanceWhereInput[];
    NOT?: PerformanceWhereInput | PerformanceWhereInput[];
    id?: BigIntFilter<'Performance'> | bigint | number;
    name?: StringFilter<'Performance'> | string;
    createdAt?: DateTimeFilter<'Performance'> | Date | string;
    createdBy?: StringNullableFilter<'Performance'> | string | null;
    updatedAt?: DateTimeNullableFilter<'Performance'> | Date | string | null;
    updatedBy?: StringNullableFilter<'Performance'> | string | null;
    categories?: PerformanceCategoryListRelationFilter;
  };

  export type PerformanceOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    createdBy?: SortOrderInput | SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    updatedBy?: SortOrderInput | SortOrder;
    categories?: PerformanceCategoryOrderByRelationAggregateInput;
  };

  export type PerformanceWhereUniqueInput = Prisma.AtLeast<
    {
      id?: bigint | number;
      name?: string;
      AND?: PerformanceWhereInput | PerformanceWhereInput[];
      OR?: PerformanceWhereInput[];
      NOT?: PerformanceWhereInput | PerformanceWhereInput[];
      createdAt?: DateTimeFilter<'Performance'> | Date | string;
      createdBy?: StringNullableFilter<'Performance'> | string | null;
      updatedAt?: DateTimeNullableFilter<'Performance'> | Date | string | null;
      updatedBy?: StringNullableFilter<'Performance'> | string | null;
      categories?: PerformanceCategoryListRelationFilter;
    },
    'id' | 'name'
  >;

  export type PerformanceOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    createdBy?: SortOrderInput | SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    updatedBy?: SortOrderInput | SortOrder;
    _count?: PerformanceCountOrderByAggregateInput;
    _avg?: PerformanceAvgOrderByAggregateInput;
    _max?: PerformanceMaxOrderByAggregateInput;
    _min?: PerformanceMinOrderByAggregateInput;
    _sum?: PerformanceSumOrderByAggregateInput;
  };

  export type PerformanceScalarWhereWithAggregatesInput = {
    AND?:
      | PerformanceScalarWhereWithAggregatesInput
      | PerformanceScalarWhereWithAggregatesInput[];
    OR?: PerformanceScalarWhereWithAggregatesInput[];
    NOT?:
      | PerformanceScalarWhereWithAggregatesInput
      | PerformanceScalarWhereWithAggregatesInput[];
    id?: BigIntWithAggregatesFilter<'Performance'> | bigint | number;
    name?: StringWithAggregatesFilter<'Performance'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Performance'> | Date | string;
    createdBy?:
      | StringNullableWithAggregatesFilter<'Performance'>
      | string
      | null;
    updatedAt?:
      | DateTimeNullableWithAggregatesFilter<'Performance'>
      | Date
      | string
      | null;
    updatedBy?:
      | StringNullableWithAggregatesFilter<'Performance'>
      | string
      | null;
  };

  export type PerformanceCategoryWhereInput = {
    AND?: PerformanceCategoryWhereInput | PerformanceCategoryWhereInput[];
    OR?: PerformanceCategoryWhereInput[];
    NOT?: PerformanceCategoryWhereInput | PerformanceCategoryWhereInput[];
    performance_id?: BigIntFilter<'PerformanceCategory'> | bigint | number;
    category_id?: BigIntFilter<'PerformanceCategory'> | bigint | number;
    vote?: IntFilter<'PerformanceCategory'> | number;
    createdAt?: DateTimeFilter<'PerformanceCategory'> | Date | string;
    createdBy?: StringNullableFilter<'PerformanceCategory'> | string | null;
    updatedAt?:
      | DateTimeNullableFilter<'PerformanceCategory'>
      | Date
      | string
      | null;
    updatedBy?: StringNullableFilter<'PerformanceCategory'> | string | null;
    performances?: XOR<PerformanceScalarRelationFilter, PerformanceWhereInput>;
    categories?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>;
  };

  export type PerformanceCategoryOrderByWithRelationInput = {
    performance_id?: SortOrder;
    category_id?: SortOrder;
    vote?: SortOrder;
    createdAt?: SortOrder;
    createdBy?: SortOrderInput | SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    updatedBy?: SortOrderInput | SortOrder;
    performances?: PerformanceOrderByWithRelationInput;
    categories?: CategoryOrderByWithRelationInput;
  };

  export type PerformanceCategoryWhereUniqueInput = Prisma.AtLeast<
    {
      performance_id_category_id?: PerformanceCategoryPerformance_idCategory_idCompoundUniqueInput;
      AND?: PerformanceCategoryWhereInput | PerformanceCategoryWhereInput[];
      OR?: PerformanceCategoryWhereInput[];
      NOT?: PerformanceCategoryWhereInput | PerformanceCategoryWhereInput[];
      performance_id?: BigIntFilter<'PerformanceCategory'> | bigint | number;
      category_id?: BigIntFilter<'PerformanceCategory'> | bigint | number;
      vote?: IntFilter<'PerformanceCategory'> | number;
      createdAt?: DateTimeFilter<'PerformanceCategory'> | Date | string;
      createdBy?: StringNullableFilter<'PerformanceCategory'> | string | null;
      updatedAt?:
        | DateTimeNullableFilter<'PerformanceCategory'>
        | Date
        | string
        | null;
      updatedBy?: StringNullableFilter<'PerformanceCategory'> | string | null;
      performances?: XOR<
        PerformanceScalarRelationFilter,
        PerformanceWhereInput
      >;
      categories?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>;
    },
    'performance_id_category_id'
  >;

  export type PerformanceCategoryOrderByWithAggregationInput = {
    performance_id?: SortOrder;
    category_id?: SortOrder;
    vote?: SortOrder;
    createdAt?: SortOrder;
    createdBy?: SortOrderInput | SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    updatedBy?: SortOrderInput | SortOrder;
    _count?: PerformanceCategoryCountOrderByAggregateInput;
    _avg?: PerformanceCategoryAvgOrderByAggregateInput;
    _max?: PerformanceCategoryMaxOrderByAggregateInput;
    _min?: PerformanceCategoryMinOrderByAggregateInput;
    _sum?: PerformanceCategorySumOrderByAggregateInput;
  };

  export type PerformanceCategoryScalarWhereWithAggregatesInput = {
    AND?:
      | PerformanceCategoryScalarWhereWithAggregatesInput
      | PerformanceCategoryScalarWhereWithAggregatesInput[];
    OR?: PerformanceCategoryScalarWhereWithAggregatesInput[];
    NOT?:
      | PerformanceCategoryScalarWhereWithAggregatesInput
      | PerformanceCategoryScalarWhereWithAggregatesInput[];
    performance_id?:
      | BigIntWithAggregatesFilter<'PerformanceCategory'>
      | bigint
      | number;
    category_id?:
      | BigIntWithAggregatesFilter<'PerformanceCategory'>
      | bigint
      | number;
    vote?: IntWithAggregatesFilter<'PerformanceCategory'> | number;
    createdAt?:
      | DateTimeWithAggregatesFilter<'PerformanceCategory'>
      | Date
      | string;
    createdBy?:
      | StringNullableWithAggregatesFilter<'PerformanceCategory'>
      | string
      | null;
    updatedAt?:
      | DateTimeNullableWithAggregatesFilter<'PerformanceCategory'>
      | Date
      | string
      | null;
    updatedBy?:
      | StringNullableWithAggregatesFilter<'PerformanceCategory'>
      | string
      | null;
  };

  export type CategoryCreateInput = {
    id?: bigint | number;
    categoryName: string;
    description?: string | null;
    votingEnabled?: boolean | null;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string | null;
    updatedBy?: string | null;
    performances?: PerformanceCategoryCreateNestedManyWithoutCategoriesInput;
  };

  export type CategoryUncheckedCreateInput = {
    id?: bigint | number;
    categoryName: string;
    description?: string | null;
    votingEnabled?: boolean | null;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string | null;
    updatedBy?: string | null;
    performances?: PerformanceCategoryUncheckedCreateNestedManyWithoutCategoriesInput;
  };

  export type CategoryUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    categoryName?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    votingEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null;
    performances?: PerformanceCategoryUpdateManyWithoutCategoriesNestedInput;
  };

  export type CategoryUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    categoryName?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    votingEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null;
    performances?: PerformanceCategoryUncheckedUpdateManyWithoutCategoriesNestedInput;
  };

  export type CategoryCreateManyInput = {
    id?: bigint | number;
    categoryName: string;
    description?: string | null;
    votingEnabled?: boolean | null;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string | null;
    updatedBy?: string | null;
  };

  export type CategoryUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    categoryName?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    votingEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type CategoryUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    categoryName?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    votingEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type PerformanceCreateInput = {
    id?: bigint | number;
    name: string;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string | null;
    updatedBy?: string | null;
    categories?: PerformanceCategoryCreateNestedManyWithoutPerformancesInput;
  };

  export type PerformanceUncheckedCreateInput = {
    id?: bigint | number;
    name: string;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string | null;
    updatedBy?: string | null;
    categories?: PerformanceCategoryUncheckedCreateNestedManyWithoutPerformancesInput;
  };

  export type PerformanceUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null;
    categories?: PerformanceCategoryUpdateManyWithoutPerformancesNestedInput;
  };

  export type PerformanceUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null;
    categories?: PerformanceCategoryUncheckedUpdateManyWithoutPerformancesNestedInput;
  };

  export type PerformanceCreateManyInput = {
    id?: bigint | number;
    name: string;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string | null;
    updatedBy?: string | null;
  };

  export type PerformanceUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type PerformanceUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type PerformanceCategoryCreateInput = {
    vote: number;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string | null;
    updatedBy?: string | null;
    performances: PerformanceCreateNestedOneWithoutCategoriesInput;
    categories: CategoryCreateNestedOneWithoutPerformancesInput;
  };

  export type PerformanceCategoryUncheckedCreateInput = {
    performance_id: bigint | number;
    category_id: bigint | number;
    vote: number;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string | null;
    updatedBy?: string | null;
  };

  export type PerformanceCategoryUpdateInput = {
    vote?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null;
    performances?: PerformanceUpdateOneRequiredWithoutCategoriesNestedInput;
    categories?: CategoryUpdateOneRequiredWithoutPerformancesNestedInput;
  };

  export type PerformanceCategoryUncheckedUpdateInput = {
    performance_id?: BigIntFieldUpdateOperationsInput | bigint | number;
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number;
    vote?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type PerformanceCategoryCreateManyInput = {
    performance_id: bigint | number;
    category_id: bigint | number;
    vote: number;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string | null;
    updatedBy?: string | null;
  };

  export type PerformanceCategoryUpdateManyMutationInput = {
    vote?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type PerformanceCategoryUncheckedUpdateManyInput = {
    performance_id?: BigIntFieldUpdateOperationsInput | bigint | number;
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number;
    vote?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type PerformanceCategoryListRelationFilter = {
    every?: PerformanceCategoryWhereInput;
    some?: PerformanceCategoryWhereInput;
    none?: PerformanceCategoryWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type PerformanceCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder;
    categoryName?: SortOrder;
    description?: SortOrder;
    votingEnabled?: SortOrder;
    createdAt?: SortOrder;
    createdBy?: SortOrder;
    updatedAt?: SortOrder;
    updatedBy?: SortOrder;
  };

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    categoryName?: SortOrder;
    description?: SortOrder;
    votingEnabled?: SortOrder;
    createdAt?: SortOrder;
    createdBy?: SortOrder;
    updatedAt?: SortOrder;
    updatedBy?: SortOrder;
  };

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder;
    categoryName?: SortOrder;
    description?: SortOrder;
    votingEnabled?: SortOrder;
    createdAt?: SortOrder;
    createdBy?: SortOrder;
    updatedAt?: SortOrder;
    updatedBy?: SortOrder;
  };

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedBigIntFilter<$PrismaModel>;
    _min?: NestedBigIntFilter<$PrismaModel>;
    _max?: NestedBigIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedBoolNullableFilter<$PrismaModel>;
    _max?: NestedBoolNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type PerformanceCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    createdBy?: SortOrder;
    updatedAt?: SortOrder;
    updatedBy?: SortOrder;
  };

  export type PerformanceAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type PerformanceMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    createdBy?: SortOrder;
    updatedAt?: SortOrder;
    updatedBy?: SortOrder;
  };

  export type PerformanceMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    createdBy?: SortOrder;
    updatedAt?: SortOrder;
    updatedBy?: SortOrder;
  };

  export type PerformanceSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type PerformanceScalarRelationFilter = {
    is?: PerformanceWhereInput;
    isNot?: PerformanceWhereInput;
  };

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput;
    isNot?: CategoryWhereInput;
  };

  export type PerformanceCategoryPerformance_idCategory_idCompoundUniqueInput =
    {
      performance_id: bigint | number;
      category_id: bigint | number;
    };

  export type PerformanceCategoryCountOrderByAggregateInput = {
    performance_id?: SortOrder;
    category_id?: SortOrder;
    vote?: SortOrder;
    createdAt?: SortOrder;
    createdBy?: SortOrder;
    updatedAt?: SortOrder;
    updatedBy?: SortOrder;
  };

  export type PerformanceCategoryAvgOrderByAggregateInput = {
    performance_id?: SortOrder;
    category_id?: SortOrder;
    vote?: SortOrder;
  };

  export type PerformanceCategoryMaxOrderByAggregateInput = {
    performance_id?: SortOrder;
    category_id?: SortOrder;
    vote?: SortOrder;
    createdAt?: SortOrder;
    createdBy?: SortOrder;
    updatedAt?: SortOrder;
    updatedBy?: SortOrder;
  };

  export type PerformanceCategoryMinOrderByAggregateInput = {
    performance_id?: SortOrder;
    category_id?: SortOrder;
    vote?: SortOrder;
    createdAt?: SortOrder;
    createdBy?: SortOrder;
    updatedAt?: SortOrder;
    updatedBy?: SortOrder;
  };

  export type PerformanceCategorySumOrderByAggregateInput = {
    performance_id?: SortOrder;
    category_id?: SortOrder;
    vote?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type PerformanceCategoryCreateNestedManyWithoutCategoriesInput = {
    create?:
      | XOR<
          PerformanceCategoryCreateWithoutCategoriesInput,
          PerformanceCategoryUncheckedCreateWithoutCategoriesInput
        >
      | PerformanceCategoryCreateWithoutCategoriesInput[]
      | PerformanceCategoryUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?:
      | PerformanceCategoryCreateOrConnectWithoutCategoriesInput
      | PerformanceCategoryCreateOrConnectWithoutCategoriesInput[];
    createMany?: PerformanceCategoryCreateManyCategoriesInputEnvelope;
    connect?:
      | PerformanceCategoryWhereUniqueInput
      | PerformanceCategoryWhereUniqueInput[];
  };

  export type PerformanceCategoryUncheckedCreateNestedManyWithoutCategoriesInput =
    {
      create?:
        | XOR<
            PerformanceCategoryCreateWithoutCategoriesInput,
            PerformanceCategoryUncheckedCreateWithoutCategoriesInput
          >
        | PerformanceCategoryCreateWithoutCategoriesInput[]
        | PerformanceCategoryUncheckedCreateWithoutCategoriesInput[];
      connectOrCreate?:
        | PerformanceCategoryCreateOrConnectWithoutCategoriesInput
        | PerformanceCategoryCreateOrConnectWithoutCategoriesInput[];
      createMany?: PerformanceCategoryCreateManyCategoriesInputEnvelope;
      connect?:
        | PerformanceCategoryWhereUniqueInput
        | PerformanceCategoryWhereUniqueInput[];
    };

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type PerformanceCategoryUpdateManyWithoutCategoriesNestedInput = {
    create?:
      | XOR<
          PerformanceCategoryCreateWithoutCategoriesInput,
          PerformanceCategoryUncheckedCreateWithoutCategoriesInput
        >
      | PerformanceCategoryCreateWithoutCategoriesInput[]
      | PerformanceCategoryUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?:
      | PerformanceCategoryCreateOrConnectWithoutCategoriesInput
      | PerformanceCategoryCreateOrConnectWithoutCategoriesInput[];
    upsert?:
      | PerformanceCategoryUpsertWithWhereUniqueWithoutCategoriesInput
      | PerformanceCategoryUpsertWithWhereUniqueWithoutCategoriesInput[];
    createMany?: PerformanceCategoryCreateManyCategoriesInputEnvelope;
    set?:
      | PerformanceCategoryWhereUniqueInput
      | PerformanceCategoryWhereUniqueInput[];
    disconnect?:
      | PerformanceCategoryWhereUniqueInput
      | PerformanceCategoryWhereUniqueInput[];
    delete?:
      | PerformanceCategoryWhereUniqueInput
      | PerformanceCategoryWhereUniqueInput[];
    connect?:
      | PerformanceCategoryWhereUniqueInput
      | PerformanceCategoryWhereUniqueInput[];
    update?:
      | PerformanceCategoryUpdateWithWhereUniqueWithoutCategoriesInput
      | PerformanceCategoryUpdateWithWhereUniqueWithoutCategoriesInput[];
    updateMany?:
      | PerformanceCategoryUpdateManyWithWhereWithoutCategoriesInput
      | PerformanceCategoryUpdateManyWithWhereWithoutCategoriesInput[];
    deleteMany?:
      | PerformanceCategoryScalarWhereInput
      | PerformanceCategoryScalarWhereInput[];
  };

  export type PerformanceCategoryUncheckedUpdateManyWithoutCategoriesNestedInput =
    {
      create?:
        | XOR<
            PerformanceCategoryCreateWithoutCategoriesInput,
            PerformanceCategoryUncheckedCreateWithoutCategoriesInput
          >
        | PerformanceCategoryCreateWithoutCategoriesInput[]
        | PerformanceCategoryUncheckedCreateWithoutCategoriesInput[];
      connectOrCreate?:
        | PerformanceCategoryCreateOrConnectWithoutCategoriesInput
        | PerformanceCategoryCreateOrConnectWithoutCategoriesInput[];
      upsert?:
        | PerformanceCategoryUpsertWithWhereUniqueWithoutCategoriesInput
        | PerformanceCategoryUpsertWithWhereUniqueWithoutCategoriesInput[];
      createMany?: PerformanceCategoryCreateManyCategoriesInputEnvelope;
      set?:
        | PerformanceCategoryWhereUniqueInput
        | PerformanceCategoryWhereUniqueInput[];
      disconnect?:
        | PerformanceCategoryWhereUniqueInput
        | PerformanceCategoryWhereUniqueInput[];
      delete?:
        | PerformanceCategoryWhereUniqueInput
        | PerformanceCategoryWhereUniqueInput[];
      connect?:
        | PerformanceCategoryWhereUniqueInput
        | PerformanceCategoryWhereUniqueInput[];
      update?:
        | PerformanceCategoryUpdateWithWhereUniqueWithoutCategoriesInput
        | PerformanceCategoryUpdateWithWhereUniqueWithoutCategoriesInput[];
      updateMany?:
        | PerformanceCategoryUpdateManyWithWhereWithoutCategoriesInput
        | PerformanceCategoryUpdateManyWithWhereWithoutCategoriesInput[];
      deleteMany?:
        | PerformanceCategoryScalarWhereInput
        | PerformanceCategoryScalarWhereInput[];
    };

  export type PerformanceCategoryCreateNestedManyWithoutPerformancesInput = {
    create?:
      | XOR<
          PerformanceCategoryCreateWithoutPerformancesInput,
          PerformanceCategoryUncheckedCreateWithoutPerformancesInput
        >
      | PerformanceCategoryCreateWithoutPerformancesInput[]
      | PerformanceCategoryUncheckedCreateWithoutPerformancesInput[];
    connectOrCreate?:
      | PerformanceCategoryCreateOrConnectWithoutPerformancesInput
      | PerformanceCategoryCreateOrConnectWithoutPerformancesInput[];
    createMany?: PerformanceCategoryCreateManyPerformancesInputEnvelope;
    connect?:
      | PerformanceCategoryWhereUniqueInput
      | PerformanceCategoryWhereUniqueInput[];
  };

  export type PerformanceCategoryUncheckedCreateNestedManyWithoutPerformancesInput =
    {
      create?:
        | XOR<
            PerformanceCategoryCreateWithoutPerformancesInput,
            PerformanceCategoryUncheckedCreateWithoutPerformancesInput
          >
        | PerformanceCategoryCreateWithoutPerformancesInput[]
        | PerformanceCategoryUncheckedCreateWithoutPerformancesInput[];
      connectOrCreate?:
        | PerformanceCategoryCreateOrConnectWithoutPerformancesInput
        | PerformanceCategoryCreateOrConnectWithoutPerformancesInput[];
      createMany?: PerformanceCategoryCreateManyPerformancesInputEnvelope;
      connect?:
        | PerformanceCategoryWhereUniqueInput
        | PerformanceCategoryWhereUniqueInput[];
    };

  export type PerformanceCategoryUpdateManyWithoutPerformancesNestedInput = {
    create?:
      | XOR<
          PerformanceCategoryCreateWithoutPerformancesInput,
          PerformanceCategoryUncheckedCreateWithoutPerformancesInput
        >
      | PerformanceCategoryCreateWithoutPerformancesInput[]
      | PerformanceCategoryUncheckedCreateWithoutPerformancesInput[];
    connectOrCreate?:
      | PerformanceCategoryCreateOrConnectWithoutPerformancesInput
      | PerformanceCategoryCreateOrConnectWithoutPerformancesInput[];
    upsert?:
      | PerformanceCategoryUpsertWithWhereUniqueWithoutPerformancesInput
      | PerformanceCategoryUpsertWithWhereUniqueWithoutPerformancesInput[];
    createMany?: PerformanceCategoryCreateManyPerformancesInputEnvelope;
    set?:
      | PerformanceCategoryWhereUniqueInput
      | PerformanceCategoryWhereUniqueInput[];
    disconnect?:
      | PerformanceCategoryWhereUniqueInput
      | PerformanceCategoryWhereUniqueInput[];
    delete?:
      | PerformanceCategoryWhereUniqueInput
      | PerformanceCategoryWhereUniqueInput[];
    connect?:
      | PerformanceCategoryWhereUniqueInput
      | PerformanceCategoryWhereUniqueInput[];
    update?:
      | PerformanceCategoryUpdateWithWhereUniqueWithoutPerformancesInput
      | PerformanceCategoryUpdateWithWhereUniqueWithoutPerformancesInput[];
    updateMany?:
      | PerformanceCategoryUpdateManyWithWhereWithoutPerformancesInput
      | PerformanceCategoryUpdateManyWithWhereWithoutPerformancesInput[];
    deleteMany?:
      | PerformanceCategoryScalarWhereInput
      | PerformanceCategoryScalarWhereInput[];
  };

  export type PerformanceCategoryUncheckedUpdateManyWithoutPerformancesNestedInput =
    {
      create?:
        | XOR<
            PerformanceCategoryCreateWithoutPerformancesInput,
            PerformanceCategoryUncheckedCreateWithoutPerformancesInput
          >
        | PerformanceCategoryCreateWithoutPerformancesInput[]
        | PerformanceCategoryUncheckedCreateWithoutPerformancesInput[];
      connectOrCreate?:
        | PerformanceCategoryCreateOrConnectWithoutPerformancesInput
        | PerformanceCategoryCreateOrConnectWithoutPerformancesInput[];
      upsert?:
        | PerformanceCategoryUpsertWithWhereUniqueWithoutPerformancesInput
        | PerformanceCategoryUpsertWithWhereUniqueWithoutPerformancesInput[];
      createMany?: PerformanceCategoryCreateManyPerformancesInputEnvelope;
      set?:
        | PerformanceCategoryWhereUniqueInput
        | PerformanceCategoryWhereUniqueInput[];
      disconnect?:
        | PerformanceCategoryWhereUniqueInput
        | PerformanceCategoryWhereUniqueInput[];
      delete?:
        | PerformanceCategoryWhereUniqueInput
        | PerformanceCategoryWhereUniqueInput[];
      connect?:
        | PerformanceCategoryWhereUniqueInput
        | PerformanceCategoryWhereUniqueInput[];
      update?:
        | PerformanceCategoryUpdateWithWhereUniqueWithoutPerformancesInput
        | PerformanceCategoryUpdateWithWhereUniqueWithoutPerformancesInput[];
      updateMany?:
        | PerformanceCategoryUpdateManyWithWhereWithoutPerformancesInput
        | PerformanceCategoryUpdateManyWithWhereWithoutPerformancesInput[];
      deleteMany?:
        | PerformanceCategoryScalarWhereInput
        | PerformanceCategoryScalarWhereInput[];
    };

  export type PerformanceCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<
      PerformanceCreateWithoutCategoriesInput,
      PerformanceUncheckedCreateWithoutCategoriesInput
    >;
    connectOrCreate?: PerformanceCreateOrConnectWithoutCategoriesInput;
    connect?: PerformanceWhereUniqueInput;
  };

  export type CategoryCreateNestedOneWithoutPerformancesInput = {
    create?: XOR<
      CategoryCreateWithoutPerformancesInput,
      CategoryUncheckedCreateWithoutPerformancesInput
    >;
    connectOrCreate?: CategoryCreateOrConnectWithoutPerformancesInput;
    connect?: CategoryWhereUniqueInput;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type PerformanceUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<
      PerformanceCreateWithoutCategoriesInput,
      PerformanceUncheckedCreateWithoutCategoriesInput
    >;
    connectOrCreate?: PerformanceCreateOrConnectWithoutCategoriesInput;
    upsert?: PerformanceUpsertWithoutCategoriesInput;
    connect?: PerformanceWhereUniqueInput;
    update?: XOR<
      XOR<
        PerformanceUpdateToOneWithWhereWithoutCategoriesInput,
        PerformanceUpdateWithoutCategoriesInput
      >,
      PerformanceUncheckedUpdateWithoutCategoriesInput
    >;
  };

  export type CategoryUpdateOneRequiredWithoutPerformancesNestedInput = {
    create?: XOR<
      CategoryCreateWithoutPerformancesInput,
      CategoryUncheckedCreateWithoutPerformancesInput
    >;
    connectOrCreate?: CategoryCreateOrConnectWithoutPerformancesInput;
    upsert?: CategoryUpsertWithoutPerformancesInput;
    connect?: CategoryWhereUniqueInput;
    update?: XOR<
      XOR<
        CategoryUpdateToOneWithWhereWithoutPerformancesInput,
        CategoryUpdateWithoutPerformancesInput
      >,
      CategoryUncheckedUpdateWithoutPerformancesInput
    >;
  };

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>;
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>;
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedBigIntFilter<$PrismaModel>;
    _min?: NestedBigIntFilter<$PrismaModel>;
    _max?: NestedBigIntFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedBoolNullableFilter<$PrismaModel>;
    _max?: NestedBoolNullableFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      notIn?:
        | Date[]
        | string[]
        | ListDateTimeFieldRefInput<$PrismaModel>
        | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type PerformanceCategoryCreateWithoutCategoriesInput = {
    vote: number;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string | null;
    updatedBy?: string | null;
    performances: PerformanceCreateNestedOneWithoutCategoriesInput;
  };

  export type PerformanceCategoryUncheckedCreateWithoutCategoriesInput = {
    performance_id: bigint | number;
    vote: number;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string | null;
    updatedBy?: string | null;
  };

  export type PerformanceCategoryCreateOrConnectWithoutCategoriesInput = {
    where: PerformanceCategoryWhereUniqueInput;
    create: XOR<
      PerformanceCategoryCreateWithoutCategoriesInput,
      PerformanceCategoryUncheckedCreateWithoutCategoriesInput
    >;
  };

  export type PerformanceCategoryCreateManyCategoriesInputEnvelope = {
    data:
      | PerformanceCategoryCreateManyCategoriesInput
      | PerformanceCategoryCreateManyCategoriesInput[];
    skipDuplicates?: boolean;
  };

  export type PerformanceCategoryUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: PerformanceCategoryWhereUniqueInput;
    update: XOR<
      PerformanceCategoryUpdateWithoutCategoriesInput,
      PerformanceCategoryUncheckedUpdateWithoutCategoriesInput
    >;
    create: XOR<
      PerformanceCategoryCreateWithoutCategoriesInput,
      PerformanceCategoryUncheckedCreateWithoutCategoriesInput
    >;
  };

  export type PerformanceCategoryUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: PerformanceCategoryWhereUniqueInput;
    data: XOR<
      PerformanceCategoryUpdateWithoutCategoriesInput,
      PerformanceCategoryUncheckedUpdateWithoutCategoriesInput
    >;
  };

  export type PerformanceCategoryUpdateManyWithWhereWithoutCategoriesInput = {
    where: PerformanceCategoryScalarWhereInput;
    data: XOR<
      PerformanceCategoryUpdateManyMutationInput,
      PerformanceCategoryUncheckedUpdateManyWithoutCategoriesInput
    >;
  };

  export type PerformanceCategoryScalarWhereInput = {
    AND?:
      | PerformanceCategoryScalarWhereInput
      | PerformanceCategoryScalarWhereInput[];
    OR?: PerformanceCategoryScalarWhereInput[];
    NOT?:
      | PerformanceCategoryScalarWhereInput
      | PerformanceCategoryScalarWhereInput[];
    performance_id?: BigIntFilter<'PerformanceCategory'> | bigint | number;
    category_id?: BigIntFilter<'PerformanceCategory'> | bigint | number;
    vote?: IntFilter<'PerformanceCategory'> | number;
    createdAt?: DateTimeFilter<'PerformanceCategory'> | Date | string;
    createdBy?: StringNullableFilter<'PerformanceCategory'> | string | null;
    updatedAt?:
      | DateTimeNullableFilter<'PerformanceCategory'>
      | Date
      | string
      | null;
    updatedBy?: StringNullableFilter<'PerformanceCategory'> | string | null;
  };

  export type PerformanceCategoryCreateWithoutPerformancesInput = {
    vote: number;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string | null;
    updatedBy?: string | null;
    categories: CategoryCreateNestedOneWithoutPerformancesInput;
  };

  export type PerformanceCategoryUncheckedCreateWithoutPerformancesInput = {
    category_id: bigint | number;
    vote: number;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string | null;
    updatedBy?: string | null;
  };

  export type PerformanceCategoryCreateOrConnectWithoutPerformancesInput = {
    where: PerformanceCategoryWhereUniqueInput;
    create: XOR<
      PerformanceCategoryCreateWithoutPerformancesInput,
      PerformanceCategoryUncheckedCreateWithoutPerformancesInput
    >;
  };

  export type PerformanceCategoryCreateManyPerformancesInputEnvelope = {
    data:
      | PerformanceCategoryCreateManyPerformancesInput
      | PerformanceCategoryCreateManyPerformancesInput[];
    skipDuplicates?: boolean;
  };

  export type PerformanceCategoryUpsertWithWhereUniqueWithoutPerformancesInput =
    {
      where: PerformanceCategoryWhereUniqueInput;
      update: XOR<
        PerformanceCategoryUpdateWithoutPerformancesInput,
        PerformanceCategoryUncheckedUpdateWithoutPerformancesInput
      >;
      create: XOR<
        PerformanceCategoryCreateWithoutPerformancesInput,
        PerformanceCategoryUncheckedCreateWithoutPerformancesInput
      >;
    };

  export type PerformanceCategoryUpdateWithWhereUniqueWithoutPerformancesInput =
    {
      where: PerformanceCategoryWhereUniqueInput;
      data: XOR<
        PerformanceCategoryUpdateWithoutPerformancesInput,
        PerformanceCategoryUncheckedUpdateWithoutPerformancesInput
      >;
    };

  export type PerformanceCategoryUpdateManyWithWhereWithoutPerformancesInput = {
    where: PerformanceCategoryScalarWhereInput;
    data: XOR<
      PerformanceCategoryUpdateManyMutationInput,
      PerformanceCategoryUncheckedUpdateManyWithoutPerformancesInput
    >;
  };

  export type PerformanceCreateWithoutCategoriesInput = {
    id?: bigint | number;
    name: string;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string | null;
    updatedBy?: string | null;
  };

  export type PerformanceUncheckedCreateWithoutCategoriesInput = {
    id?: bigint | number;
    name: string;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string | null;
    updatedBy?: string | null;
  };

  export type PerformanceCreateOrConnectWithoutCategoriesInput = {
    where: PerformanceWhereUniqueInput;
    create: XOR<
      PerformanceCreateWithoutCategoriesInput,
      PerformanceUncheckedCreateWithoutCategoriesInput
    >;
  };

  export type CategoryCreateWithoutPerformancesInput = {
    id?: bigint | number;
    categoryName: string;
    description?: string | null;
    votingEnabled?: boolean | null;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string | null;
    updatedBy?: string | null;
  };

  export type CategoryUncheckedCreateWithoutPerformancesInput = {
    id?: bigint | number;
    categoryName: string;
    description?: string | null;
    votingEnabled?: boolean | null;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string | null;
    updatedBy?: string | null;
  };

  export type CategoryCreateOrConnectWithoutPerformancesInput = {
    where: CategoryWhereUniqueInput;
    create: XOR<
      CategoryCreateWithoutPerformancesInput,
      CategoryUncheckedCreateWithoutPerformancesInput
    >;
  };

  export type PerformanceUpsertWithoutCategoriesInput = {
    update: XOR<
      PerformanceUpdateWithoutCategoriesInput,
      PerformanceUncheckedUpdateWithoutCategoriesInput
    >;
    create: XOR<
      PerformanceCreateWithoutCategoriesInput,
      PerformanceUncheckedCreateWithoutCategoriesInput
    >;
    where?: PerformanceWhereInput;
  };

  export type PerformanceUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: PerformanceWhereInput;
    data: XOR<
      PerformanceUpdateWithoutCategoriesInput,
      PerformanceUncheckedUpdateWithoutCategoriesInput
    >;
  };

  export type PerformanceUpdateWithoutCategoriesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type PerformanceUncheckedUpdateWithoutCategoriesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type CategoryUpsertWithoutPerformancesInput = {
    update: XOR<
      CategoryUpdateWithoutPerformancesInput,
      CategoryUncheckedUpdateWithoutPerformancesInput
    >;
    create: XOR<
      CategoryCreateWithoutPerformancesInput,
      CategoryUncheckedCreateWithoutPerformancesInput
    >;
    where?: CategoryWhereInput;
  };

  export type CategoryUpdateToOneWithWhereWithoutPerformancesInput = {
    where?: CategoryWhereInput;
    data: XOR<
      CategoryUpdateWithoutPerformancesInput,
      CategoryUncheckedUpdateWithoutPerformancesInput
    >;
  };

  export type CategoryUpdateWithoutPerformancesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    categoryName?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    votingEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type CategoryUncheckedUpdateWithoutPerformancesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number;
    categoryName?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    votingEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type PerformanceCategoryCreateManyCategoriesInput = {
    performance_id: bigint | number;
    vote: number;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string | null;
    updatedBy?: string | null;
  };

  export type PerformanceCategoryUpdateWithoutCategoriesInput = {
    vote?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null;
    performances?: PerformanceUpdateOneRequiredWithoutCategoriesNestedInput;
  };

  export type PerformanceCategoryUncheckedUpdateWithoutCategoriesInput = {
    performance_id?: BigIntFieldUpdateOperationsInput | bigint | number;
    vote?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type PerformanceCategoryUncheckedUpdateManyWithoutCategoriesInput = {
    performance_id?: BigIntFieldUpdateOperationsInput | bigint | number;
    vote?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type PerformanceCategoryCreateManyPerformancesInput = {
    category_id: bigint | number;
    vote: number;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string | null;
    updatedBy?: string | null;
  };

  export type PerformanceCategoryUpdateWithoutPerformancesInput = {
    vote?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null;
    categories?: CategoryUpdateOneRequiredWithoutPerformancesNestedInput;
  };

  export type PerformanceCategoryUncheckedUpdateWithoutPerformancesInput = {
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number;
    vote?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type PerformanceCategoryUncheckedUpdateManyWithoutPerformancesInput = {
    category_id?: BigIntFieldUpdateOperationsInput | bigint | number;
    vote?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
