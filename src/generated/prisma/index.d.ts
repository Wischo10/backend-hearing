
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UploadedDocument
 * 
 */
export type UploadedDocument = $Result.DefaultSelection<Prisma.$UploadedDocumentPayload>
/**
 * Model LaporanKegiatan
 * 
 */
export type LaporanKegiatan = $Result.DefaultSelection<Prisma.$LaporanKegiatanPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uploadedDocument`: Exposes CRUD operations for the **UploadedDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UploadedDocuments
    * const uploadedDocuments = await prisma.uploadedDocument.findMany()
    * ```
    */
  get uploadedDocument(): Prisma.UploadedDocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.laporanKegiatan`: Exposes CRUD operations for the **LaporanKegiatan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LaporanKegiatans
    * const laporanKegiatans = await prisma.laporanKegiatan.findMany()
    * ```
    */
  get laporanKegiatan(): Prisma.LaporanKegiatanDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UploadedDocument: 'UploadedDocument',
    LaporanKegiatan: 'LaporanKegiatan'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "uploadedDocument" | "laporanKegiatan"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UploadedDocument: {
        payload: Prisma.$UploadedDocumentPayload<ExtArgs>
        fields: Prisma.UploadedDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UploadedDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UploadedDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedDocumentPayload>
          }
          findFirst: {
            args: Prisma.UploadedDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UploadedDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedDocumentPayload>
          }
          findMany: {
            args: Prisma.UploadedDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedDocumentPayload>[]
          }
          create: {
            args: Prisma.UploadedDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedDocumentPayload>
          }
          createMany: {
            args: Prisma.UploadedDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UploadedDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedDocumentPayload>[]
          }
          delete: {
            args: Prisma.UploadedDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedDocumentPayload>
          }
          update: {
            args: Prisma.UploadedDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedDocumentPayload>
          }
          deleteMany: {
            args: Prisma.UploadedDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UploadedDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UploadedDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedDocumentPayload>[]
          }
          upsert: {
            args: Prisma.UploadedDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedDocumentPayload>
          }
          aggregate: {
            args: Prisma.UploadedDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUploadedDocument>
          }
          groupBy: {
            args: Prisma.UploadedDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<UploadedDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.UploadedDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<UploadedDocumentCountAggregateOutputType> | number
          }
        }
      }
      LaporanKegiatan: {
        payload: Prisma.$LaporanKegiatanPayload<ExtArgs>
        fields: Prisma.LaporanKegiatanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LaporanKegiatanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanKegiatanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LaporanKegiatanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanKegiatanPayload>
          }
          findFirst: {
            args: Prisma.LaporanKegiatanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanKegiatanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LaporanKegiatanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanKegiatanPayload>
          }
          findMany: {
            args: Prisma.LaporanKegiatanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanKegiatanPayload>[]
          }
          create: {
            args: Prisma.LaporanKegiatanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanKegiatanPayload>
          }
          createMany: {
            args: Prisma.LaporanKegiatanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LaporanKegiatanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanKegiatanPayload>[]
          }
          delete: {
            args: Prisma.LaporanKegiatanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanKegiatanPayload>
          }
          update: {
            args: Prisma.LaporanKegiatanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanKegiatanPayload>
          }
          deleteMany: {
            args: Prisma.LaporanKegiatanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LaporanKegiatanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LaporanKegiatanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanKegiatanPayload>[]
          }
          upsert: {
            args: Prisma.LaporanKegiatanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanKegiatanPayload>
          }
          aggregate: {
            args: Prisma.LaporanKegiatanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLaporanKegiatan>
          }
          groupBy: {
            args: Prisma.LaporanKegiatanGroupByArgs<ExtArgs>
            result: $Utils.Optional<LaporanKegiatanGroupByOutputType>[]
          }
          count: {
            args: Prisma.LaporanKegiatanCountArgs<ExtArgs>
            result: $Utils.Optional<LaporanKegiatanCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    uploadedDocument?: UploadedDocumentOmit
    laporanKegiatan?: LaporanKegiatanOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
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
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    laporanKegiatan: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laporanKegiatan?: boolean | UserCountOutputTypeCountLaporanKegiatanArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLaporanKegiatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaporanKegiatanWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    laporanKegiatan?: boolean | User$laporanKegiatanArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laporanKegiatan?: boolean | User$laporanKegiatanArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      laporanKegiatan: Prisma.$LaporanKegiatanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    laporanKegiatan<T extends User$laporanKegiatanArgs<ExtArgs> = {}>(args?: Subset<T, User$laporanKegiatanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanKegiatanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.laporanKegiatan
   */
  export type User$laporanKegiatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanKegiatan
     */
    select?: LaporanKegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanKegiatan
     */
    omit?: LaporanKegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanKegiatanInclude<ExtArgs> | null
    where?: LaporanKegiatanWhereInput
    orderBy?: LaporanKegiatanOrderByWithRelationInput | LaporanKegiatanOrderByWithRelationInput[]
    cursor?: LaporanKegiatanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LaporanKegiatanScalarFieldEnum | LaporanKegiatanScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UploadedDocument
   */

  export type AggregateUploadedDocument = {
    _count: UploadedDocumentCountAggregateOutputType | null
    _avg: UploadedDocumentAvgAggregateOutputType | null
    _sum: UploadedDocumentSumAggregateOutputType | null
    _min: UploadedDocumentMinAggregateOutputType | null
    _max: UploadedDocumentMaxAggregateOutputType | null
  }

  export type UploadedDocumentAvgAggregateOutputType = {
    id: number | null
    fileSize: number | null
  }

  export type UploadedDocumentSumAggregateOutputType = {
    id: number | null
    fileSize: number | null
  }

  export type UploadedDocumentMinAggregateOutputType = {
    id: number | null
    namaPengirim: string | null
    fileName: string | null
    filePath: string | null
    fileMimeType: string | null
    fileSize: number | null
    uploadDate: Date | null
    status: string | null
    reviewedAt: Date | null
  }

  export type UploadedDocumentMaxAggregateOutputType = {
    id: number | null
    namaPengirim: string | null
    fileName: string | null
    filePath: string | null
    fileMimeType: string | null
    fileSize: number | null
    uploadDate: Date | null
    status: string | null
    reviewedAt: Date | null
  }

  export type UploadedDocumentCountAggregateOutputType = {
    id: number
    namaPengirim: number
    fileName: number
    filePath: number
    fileMimeType: number
    fileSize: number
    uploadDate: number
    status: number
    reviewedAt: number
    _all: number
  }


  export type UploadedDocumentAvgAggregateInputType = {
    id?: true
    fileSize?: true
  }

  export type UploadedDocumentSumAggregateInputType = {
    id?: true
    fileSize?: true
  }

  export type UploadedDocumentMinAggregateInputType = {
    id?: true
    namaPengirim?: true
    fileName?: true
    filePath?: true
    fileMimeType?: true
    fileSize?: true
    uploadDate?: true
    status?: true
    reviewedAt?: true
  }

  export type UploadedDocumentMaxAggregateInputType = {
    id?: true
    namaPengirim?: true
    fileName?: true
    filePath?: true
    fileMimeType?: true
    fileSize?: true
    uploadDate?: true
    status?: true
    reviewedAt?: true
  }

  export type UploadedDocumentCountAggregateInputType = {
    id?: true
    namaPengirim?: true
    fileName?: true
    filePath?: true
    fileMimeType?: true
    fileSize?: true
    uploadDate?: true
    status?: true
    reviewedAt?: true
    _all?: true
  }

  export type UploadedDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UploadedDocument to aggregate.
     */
    where?: UploadedDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadedDocuments to fetch.
     */
    orderBy?: UploadedDocumentOrderByWithRelationInput | UploadedDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UploadedDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadedDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadedDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UploadedDocuments
    **/
    _count?: true | UploadedDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UploadedDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UploadedDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UploadedDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UploadedDocumentMaxAggregateInputType
  }

  export type GetUploadedDocumentAggregateType<T extends UploadedDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateUploadedDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUploadedDocument[P]>
      : GetScalarType<T[P], AggregateUploadedDocument[P]>
  }




  export type UploadedDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UploadedDocumentWhereInput
    orderBy?: UploadedDocumentOrderByWithAggregationInput | UploadedDocumentOrderByWithAggregationInput[]
    by: UploadedDocumentScalarFieldEnum[] | UploadedDocumentScalarFieldEnum
    having?: UploadedDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UploadedDocumentCountAggregateInputType | true
    _avg?: UploadedDocumentAvgAggregateInputType
    _sum?: UploadedDocumentSumAggregateInputType
    _min?: UploadedDocumentMinAggregateInputType
    _max?: UploadedDocumentMaxAggregateInputType
  }

  export type UploadedDocumentGroupByOutputType = {
    id: number
    namaPengirim: string
    fileName: string
    filePath: string
    fileMimeType: string
    fileSize: number
    uploadDate: Date
    status: string
    reviewedAt: Date | null
    _count: UploadedDocumentCountAggregateOutputType | null
    _avg: UploadedDocumentAvgAggregateOutputType | null
    _sum: UploadedDocumentSumAggregateOutputType | null
    _min: UploadedDocumentMinAggregateOutputType | null
    _max: UploadedDocumentMaxAggregateOutputType | null
  }

  type GetUploadedDocumentGroupByPayload<T extends UploadedDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UploadedDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UploadedDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UploadedDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], UploadedDocumentGroupByOutputType[P]>
        }
      >
    >


  export type UploadedDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaPengirim?: boolean
    fileName?: boolean
    filePath?: boolean
    fileMimeType?: boolean
    fileSize?: boolean
    uploadDate?: boolean
    status?: boolean
    reviewedAt?: boolean
  }, ExtArgs["result"]["uploadedDocument"]>

  export type UploadedDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaPengirim?: boolean
    fileName?: boolean
    filePath?: boolean
    fileMimeType?: boolean
    fileSize?: boolean
    uploadDate?: boolean
    status?: boolean
    reviewedAt?: boolean
  }, ExtArgs["result"]["uploadedDocument"]>

  export type UploadedDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaPengirim?: boolean
    fileName?: boolean
    filePath?: boolean
    fileMimeType?: boolean
    fileSize?: boolean
    uploadDate?: boolean
    status?: boolean
    reviewedAt?: boolean
  }, ExtArgs["result"]["uploadedDocument"]>

  export type UploadedDocumentSelectScalar = {
    id?: boolean
    namaPengirim?: boolean
    fileName?: boolean
    filePath?: boolean
    fileMimeType?: boolean
    fileSize?: boolean
    uploadDate?: boolean
    status?: boolean
    reviewedAt?: boolean
  }

  export type UploadedDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "namaPengirim" | "fileName" | "filePath" | "fileMimeType" | "fileSize" | "uploadDate" | "status" | "reviewedAt", ExtArgs["result"]["uploadedDocument"]>

  export type $UploadedDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UploadedDocument"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      namaPengirim: string
      fileName: string
      filePath: string
      fileMimeType: string
      fileSize: number
      uploadDate: Date
      status: string
      reviewedAt: Date | null
    }, ExtArgs["result"]["uploadedDocument"]>
    composites: {}
  }

  type UploadedDocumentGetPayload<S extends boolean | null | undefined | UploadedDocumentDefaultArgs> = $Result.GetResult<Prisma.$UploadedDocumentPayload, S>

  type UploadedDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UploadedDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UploadedDocumentCountAggregateInputType | true
    }

  export interface UploadedDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UploadedDocument'], meta: { name: 'UploadedDocument' } }
    /**
     * Find zero or one UploadedDocument that matches the filter.
     * @param {UploadedDocumentFindUniqueArgs} args - Arguments to find a UploadedDocument
     * @example
     * // Get one UploadedDocument
     * const uploadedDocument = await prisma.uploadedDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UploadedDocumentFindUniqueArgs>(args: SelectSubset<T, UploadedDocumentFindUniqueArgs<ExtArgs>>): Prisma__UploadedDocumentClient<$Result.GetResult<Prisma.$UploadedDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UploadedDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UploadedDocumentFindUniqueOrThrowArgs} args - Arguments to find a UploadedDocument
     * @example
     * // Get one UploadedDocument
     * const uploadedDocument = await prisma.uploadedDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UploadedDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, UploadedDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UploadedDocumentClient<$Result.GetResult<Prisma.$UploadedDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UploadedDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedDocumentFindFirstArgs} args - Arguments to find a UploadedDocument
     * @example
     * // Get one UploadedDocument
     * const uploadedDocument = await prisma.uploadedDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UploadedDocumentFindFirstArgs>(args?: SelectSubset<T, UploadedDocumentFindFirstArgs<ExtArgs>>): Prisma__UploadedDocumentClient<$Result.GetResult<Prisma.$UploadedDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UploadedDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedDocumentFindFirstOrThrowArgs} args - Arguments to find a UploadedDocument
     * @example
     * // Get one UploadedDocument
     * const uploadedDocument = await prisma.uploadedDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UploadedDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, UploadedDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__UploadedDocumentClient<$Result.GetResult<Prisma.$UploadedDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UploadedDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UploadedDocuments
     * const uploadedDocuments = await prisma.uploadedDocument.findMany()
     * 
     * // Get first 10 UploadedDocuments
     * const uploadedDocuments = await prisma.uploadedDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uploadedDocumentWithIdOnly = await prisma.uploadedDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UploadedDocumentFindManyArgs>(args?: SelectSubset<T, UploadedDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadedDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UploadedDocument.
     * @param {UploadedDocumentCreateArgs} args - Arguments to create a UploadedDocument.
     * @example
     * // Create one UploadedDocument
     * const UploadedDocument = await prisma.uploadedDocument.create({
     *   data: {
     *     // ... data to create a UploadedDocument
     *   }
     * })
     * 
     */
    create<T extends UploadedDocumentCreateArgs>(args: SelectSubset<T, UploadedDocumentCreateArgs<ExtArgs>>): Prisma__UploadedDocumentClient<$Result.GetResult<Prisma.$UploadedDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UploadedDocuments.
     * @param {UploadedDocumentCreateManyArgs} args - Arguments to create many UploadedDocuments.
     * @example
     * // Create many UploadedDocuments
     * const uploadedDocument = await prisma.uploadedDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UploadedDocumentCreateManyArgs>(args?: SelectSubset<T, UploadedDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UploadedDocuments and returns the data saved in the database.
     * @param {UploadedDocumentCreateManyAndReturnArgs} args - Arguments to create many UploadedDocuments.
     * @example
     * // Create many UploadedDocuments
     * const uploadedDocument = await prisma.uploadedDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UploadedDocuments and only return the `id`
     * const uploadedDocumentWithIdOnly = await prisma.uploadedDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UploadedDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, UploadedDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadedDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UploadedDocument.
     * @param {UploadedDocumentDeleteArgs} args - Arguments to delete one UploadedDocument.
     * @example
     * // Delete one UploadedDocument
     * const UploadedDocument = await prisma.uploadedDocument.delete({
     *   where: {
     *     // ... filter to delete one UploadedDocument
     *   }
     * })
     * 
     */
    delete<T extends UploadedDocumentDeleteArgs>(args: SelectSubset<T, UploadedDocumentDeleteArgs<ExtArgs>>): Prisma__UploadedDocumentClient<$Result.GetResult<Prisma.$UploadedDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UploadedDocument.
     * @param {UploadedDocumentUpdateArgs} args - Arguments to update one UploadedDocument.
     * @example
     * // Update one UploadedDocument
     * const uploadedDocument = await prisma.uploadedDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UploadedDocumentUpdateArgs>(args: SelectSubset<T, UploadedDocumentUpdateArgs<ExtArgs>>): Prisma__UploadedDocumentClient<$Result.GetResult<Prisma.$UploadedDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UploadedDocuments.
     * @param {UploadedDocumentDeleteManyArgs} args - Arguments to filter UploadedDocuments to delete.
     * @example
     * // Delete a few UploadedDocuments
     * const { count } = await prisma.uploadedDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UploadedDocumentDeleteManyArgs>(args?: SelectSubset<T, UploadedDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UploadedDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UploadedDocuments
     * const uploadedDocument = await prisma.uploadedDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UploadedDocumentUpdateManyArgs>(args: SelectSubset<T, UploadedDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UploadedDocuments and returns the data updated in the database.
     * @param {UploadedDocumentUpdateManyAndReturnArgs} args - Arguments to update many UploadedDocuments.
     * @example
     * // Update many UploadedDocuments
     * const uploadedDocument = await prisma.uploadedDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UploadedDocuments and only return the `id`
     * const uploadedDocumentWithIdOnly = await prisma.uploadedDocument.updateManyAndReturn({
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
    updateManyAndReturn<T extends UploadedDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, UploadedDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadedDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UploadedDocument.
     * @param {UploadedDocumentUpsertArgs} args - Arguments to update or create a UploadedDocument.
     * @example
     * // Update or create a UploadedDocument
     * const uploadedDocument = await prisma.uploadedDocument.upsert({
     *   create: {
     *     // ... data to create a UploadedDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UploadedDocument we want to update
     *   }
     * })
     */
    upsert<T extends UploadedDocumentUpsertArgs>(args: SelectSubset<T, UploadedDocumentUpsertArgs<ExtArgs>>): Prisma__UploadedDocumentClient<$Result.GetResult<Prisma.$UploadedDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UploadedDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedDocumentCountArgs} args - Arguments to filter UploadedDocuments to count.
     * @example
     * // Count the number of UploadedDocuments
     * const count = await prisma.uploadedDocument.count({
     *   where: {
     *     // ... the filter for the UploadedDocuments we want to count
     *   }
     * })
    **/
    count<T extends UploadedDocumentCountArgs>(
      args?: Subset<T, UploadedDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UploadedDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UploadedDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UploadedDocumentAggregateArgs>(args: Subset<T, UploadedDocumentAggregateArgs>): Prisma.PrismaPromise<GetUploadedDocumentAggregateType<T>>

    /**
     * Group by UploadedDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedDocumentGroupByArgs} args - Group by arguments.
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
      T extends UploadedDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UploadedDocumentGroupByArgs['orderBy'] }
        : { orderBy?: UploadedDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UploadedDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUploadedDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UploadedDocument model
   */
  readonly fields: UploadedDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UploadedDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UploadedDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UploadedDocument model
   */
  interface UploadedDocumentFieldRefs {
    readonly id: FieldRef<"UploadedDocument", 'Int'>
    readonly namaPengirim: FieldRef<"UploadedDocument", 'String'>
    readonly fileName: FieldRef<"UploadedDocument", 'String'>
    readonly filePath: FieldRef<"UploadedDocument", 'String'>
    readonly fileMimeType: FieldRef<"UploadedDocument", 'String'>
    readonly fileSize: FieldRef<"UploadedDocument", 'Int'>
    readonly uploadDate: FieldRef<"UploadedDocument", 'DateTime'>
    readonly status: FieldRef<"UploadedDocument", 'String'>
    readonly reviewedAt: FieldRef<"UploadedDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UploadedDocument findUnique
   */
  export type UploadedDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedDocument
     */
    select?: UploadedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedDocument
     */
    omit?: UploadedDocumentOmit<ExtArgs> | null
    /**
     * Filter, which UploadedDocument to fetch.
     */
    where: UploadedDocumentWhereUniqueInput
  }

  /**
   * UploadedDocument findUniqueOrThrow
   */
  export type UploadedDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedDocument
     */
    select?: UploadedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedDocument
     */
    omit?: UploadedDocumentOmit<ExtArgs> | null
    /**
     * Filter, which UploadedDocument to fetch.
     */
    where: UploadedDocumentWhereUniqueInput
  }

  /**
   * UploadedDocument findFirst
   */
  export type UploadedDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedDocument
     */
    select?: UploadedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedDocument
     */
    omit?: UploadedDocumentOmit<ExtArgs> | null
    /**
     * Filter, which UploadedDocument to fetch.
     */
    where?: UploadedDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadedDocuments to fetch.
     */
    orderBy?: UploadedDocumentOrderByWithRelationInput | UploadedDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UploadedDocuments.
     */
    cursor?: UploadedDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadedDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadedDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadedDocuments.
     */
    distinct?: UploadedDocumentScalarFieldEnum | UploadedDocumentScalarFieldEnum[]
  }

  /**
   * UploadedDocument findFirstOrThrow
   */
  export type UploadedDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedDocument
     */
    select?: UploadedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedDocument
     */
    omit?: UploadedDocumentOmit<ExtArgs> | null
    /**
     * Filter, which UploadedDocument to fetch.
     */
    where?: UploadedDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadedDocuments to fetch.
     */
    orderBy?: UploadedDocumentOrderByWithRelationInput | UploadedDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UploadedDocuments.
     */
    cursor?: UploadedDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadedDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadedDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadedDocuments.
     */
    distinct?: UploadedDocumentScalarFieldEnum | UploadedDocumentScalarFieldEnum[]
  }

  /**
   * UploadedDocument findMany
   */
  export type UploadedDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedDocument
     */
    select?: UploadedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedDocument
     */
    omit?: UploadedDocumentOmit<ExtArgs> | null
    /**
     * Filter, which UploadedDocuments to fetch.
     */
    where?: UploadedDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadedDocuments to fetch.
     */
    orderBy?: UploadedDocumentOrderByWithRelationInput | UploadedDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UploadedDocuments.
     */
    cursor?: UploadedDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadedDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadedDocuments.
     */
    skip?: number
    distinct?: UploadedDocumentScalarFieldEnum | UploadedDocumentScalarFieldEnum[]
  }

  /**
   * UploadedDocument create
   */
  export type UploadedDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedDocument
     */
    select?: UploadedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedDocument
     */
    omit?: UploadedDocumentOmit<ExtArgs> | null
    /**
     * The data needed to create a UploadedDocument.
     */
    data: XOR<UploadedDocumentCreateInput, UploadedDocumentUncheckedCreateInput>
  }

  /**
   * UploadedDocument createMany
   */
  export type UploadedDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UploadedDocuments.
     */
    data: UploadedDocumentCreateManyInput | UploadedDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UploadedDocument createManyAndReturn
   */
  export type UploadedDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedDocument
     */
    select?: UploadedDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedDocument
     */
    omit?: UploadedDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many UploadedDocuments.
     */
    data: UploadedDocumentCreateManyInput | UploadedDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UploadedDocument update
   */
  export type UploadedDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedDocument
     */
    select?: UploadedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedDocument
     */
    omit?: UploadedDocumentOmit<ExtArgs> | null
    /**
     * The data needed to update a UploadedDocument.
     */
    data: XOR<UploadedDocumentUpdateInput, UploadedDocumentUncheckedUpdateInput>
    /**
     * Choose, which UploadedDocument to update.
     */
    where: UploadedDocumentWhereUniqueInput
  }

  /**
   * UploadedDocument updateMany
   */
  export type UploadedDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UploadedDocuments.
     */
    data: XOR<UploadedDocumentUpdateManyMutationInput, UploadedDocumentUncheckedUpdateManyInput>
    /**
     * Filter which UploadedDocuments to update
     */
    where?: UploadedDocumentWhereInput
    /**
     * Limit how many UploadedDocuments to update.
     */
    limit?: number
  }

  /**
   * UploadedDocument updateManyAndReturn
   */
  export type UploadedDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedDocument
     */
    select?: UploadedDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedDocument
     */
    omit?: UploadedDocumentOmit<ExtArgs> | null
    /**
     * The data used to update UploadedDocuments.
     */
    data: XOR<UploadedDocumentUpdateManyMutationInput, UploadedDocumentUncheckedUpdateManyInput>
    /**
     * Filter which UploadedDocuments to update
     */
    where?: UploadedDocumentWhereInput
    /**
     * Limit how many UploadedDocuments to update.
     */
    limit?: number
  }

  /**
   * UploadedDocument upsert
   */
  export type UploadedDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedDocument
     */
    select?: UploadedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedDocument
     */
    omit?: UploadedDocumentOmit<ExtArgs> | null
    /**
     * The filter to search for the UploadedDocument to update in case it exists.
     */
    where: UploadedDocumentWhereUniqueInput
    /**
     * In case the UploadedDocument found by the `where` argument doesn't exist, create a new UploadedDocument with this data.
     */
    create: XOR<UploadedDocumentCreateInput, UploadedDocumentUncheckedCreateInput>
    /**
     * In case the UploadedDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UploadedDocumentUpdateInput, UploadedDocumentUncheckedUpdateInput>
  }

  /**
   * UploadedDocument delete
   */
  export type UploadedDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedDocument
     */
    select?: UploadedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedDocument
     */
    omit?: UploadedDocumentOmit<ExtArgs> | null
    /**
     * Filter which UploadedDocument to delete.
     */
    where: UploadedDocumentWhereUniqueInput
  }

  /**
   * UploadedDocument deleteMany
   */
  export type UploadedDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UploadedDocuments to delete
     */
    where?: UploadedDocumentWhereInput
    /**
     * Limit how many UploadedDocuments to delete.
     */
    limit?: number
  }

  /**
   * UploadedDocument without action
   */
  export type UploadedDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedDocument
     */
    select?: UploadedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedDocument
     */
    omit?: UploadedDocumentOmit<ExtArgs> | null
  }


  /**
   * Model LaporanKegiatan
   */

  export type AggregateLaporanKegiatan = {
    _count: LaporanKegiatanCountAggregateOutputType | null
    _avg: LaporanKegiatanAvgAggregateOutputType | null
    _sum: LaporanKegiatanSumAggregateOutputType | null
    _min: LaporanKegiatanMinAggregateOutputType | null
    _max: LaporanKegiatanMaxAggregateOutputType | null
  }

  export type LaporanKegiatanAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LaporanKegiatanSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LaporanKegiatanMinAggregateOutputType = {
    id: number | null
    userId: number | null
    deskripsi: string | null
    fotoKegiatanUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LaporanKegiatanMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    deskripsi: string | null
    fotoKegiatanUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LaporanKegiatanCountAggregateOutputType = {
    id: number
    userId: number
    deskripsi: number
    fotoKegiatanUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LaporanKegiatanAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LaporanKegiatanSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LaporanKegiatanMinAggregateInputType = {
    id?: true
    userId?: true
    deskripsi?: true
    fotoKegiatanUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LaporanKegiatanMaxAggregateInputType = {
    id?: true
    userId?: true
    deskripsi?: true
    fotoKegiatanUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LaporanKegiatanCountAggregateInputType = {
    id?: true
    userId?: true
    deskripsi?: true
    fotoKegiatanUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LaporanKegiatanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LaporanKegiatan to aggregate.
     */
    where?: LaporanKegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaporanKegiatans to fetch.
     */
    orderBy?: LaporanKegiatanOrderByWithRelationInput | LaporanKegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LaporanKegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaporanKegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaporanKegiatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LaporanKegiatans
    **/
    _count?: true | LaporanKegiatanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LaporanKegiatanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LaporanKegiatanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LaporanKegiatanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LaporanKegiatanMaxAggregateInputType
  }

  export type GetLaporanKegiatanAggregateType<T extends LaporanKegiatanAggregateArgs> = {
        [P in keyof T & keyof AggregateLaporanKegiatan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLaporanKegiatan[P]>
      : GetScalarType<T[P], AggregateLaporanKegiatan[P]>
  }




  export type LaporanKegiatanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaporanKegiatanWhereInput
    orderBy?: LaporanKegiatanOrderByWithAggregationInput | LaporanKegiatanOrderByWithAggregationInput[]
    by: LaporanKegiatanScalarFieldEnum[] | LaporanKegiatanScalarFieldEnum
    having?: LaporanKegiatanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LaporanKegiatanCountAggregateInputType | true
    _avg?: LaporanKegiatanAvgAggregateInputType
    _sum?: LaporanKegiatanSumAggregateInputType
    _min?: LaporanKegiatanMinAggregateInputType
    _max?: LaporanKegiatanMaxAggregateInputType
  }

  export type LaporanKegiatanGroupByOutputType = {
    id: number
    userId: number
    deskripsi: string
    fotoKegiatanUrl: string
    createdAt: Date
    updatedAt: Date
    _count: LaporanKegiatanCountAggregateOutputType | null
    _avg: LaporanKegiatanAvgAggregateOutputType | null
    _sum: LaporanKegiatanSumAggregateOutputType | null
    _min: LaporanKegiatanMinAggregateOutputType | null
    _max: LaporanKegiatanMaxAggregateOutputType | null
  }

  type GetLaporanKegiatanGroupByPayload<T extends LaporanKegiatanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LaporanKegiatanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LaporanKegiatanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LaporanKegiatanGroupByOutputType[P]>
            : GetScalarType<T[P], LaporanKegiatanGroupByOutputType[P]>
        }
      >
    >


  export type LaporanKegiatanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deskripsi?: boolean
    fotoKegiatanUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["laporanKegiatan"]>

  export type LaporanKegiatanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deskripsi?: boolean
    fotoKegiatanUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["laporanKegiatan"]>

  export type LaporanKegiatanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deskripsi?: boolean
    fotoKegiatanUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["laporanKegiatan"]>

  export type LaporanKegiatanSelectScalar = {
    id?: boolean
    userId?: boolean
    deskripsi?: boolean
    fotoKegiatanUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LaporanKegiatanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "deskripsi" | "fotoKegiatanUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["laporanKegiatan"]>
  export type LaporanKegiatanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LaporanKegiatanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LaporanKegiatanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LaporanKegiatanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LaporanKegiatan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      deskripsi: string
      fotoKegiatanUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["laporanKegiatan"]>
    composites: {}
  }

  type LaporanKegiatanGetPayload<S extends boolean | null | undefined | LaporanKegiatanDefaultArgs> = $Result.GetResult<Prisma.$LaporanKegiatanPayload, S>

  type LaporanKegiatanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LaporanKegiatanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LaporanKegiatanCountAggregateInputType | true
    }

  export interface LaporanKegiatanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LaporanKegiatan'], meta: { name: 'LaporanKegiatan' } }
    /**
     * Find zero or one LaporanKegiatan that matches the filter.
     * @param {LaporanKegiatanFindUniqueArgs} args - Arguments to find a LaporanKegiatan
     * @example
     * // Get one LaporanKegiatan
     * const laporanKegiatan = await prisma.laporanKegiatan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LaporanKegiatanFindUniqueArgs>(args: SelectSubset<T, LaporanKegiatanFindUniqueArgs<ExtArgs>>): Prisma__LaporanKegiatanClient<$Result.GetResult<Prisma.$LaporanKegiatanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LaporanKegiatan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LaporanKegiatanFindUniqueOrThrowArgs} args - Arguments to find a LaporanKegiatan
     * @example
     * // Get one LaporanKegiatan
     * const laporanKegiatan = await prisma.laporanKegiatan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LaporanKegiatanFindUniqueOrThrowArgs>(args: SelectSubset<T, LaporanKegiatanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LaporanKegiatanClient<$Result.GetResult<Prisma.$LaporanKegiatanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LaporanKegiatan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanKegiatanFindFirstArgs} args - Arguments to find a LaporanKegiatan
     * @example
     * // Get one LaporanKegiatan
     * const laporanKegiatan = await prisma.laporanKegiatan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LaporanKegiatanFindFirstArgs>(args?: SelectSubset<T, LaporanKegiatanFindFirstArgs<ExtArgs>>): Prisma__LaporanKegiatanClient<$Result.GetResult<Prisma.$LaporanKegiatanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LaporanKegiatan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanKegiatanFindFirstOrThrowArgs} args - Arguments to find a LaporanKegiatan
     * @example
     * // Get one LaporanKegiatan
     * const laporanKegiatan = await prisma.laporanKegiatan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LaporanKegiatanFindFirstOrThrowArgs>(args?: SelectSubset<T, LaporanKegiatanFindFirstOrThrowArgs<ExtArgs>>): Prisma__LaporanKegiatanClient<$Result.GetResult<Prisma.$LaporanKegiatanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LaporanKegiatans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanKegiatanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LaporanKegiatans
     * const laporanKegiatans = await prisma.laporanKegiatan.findMany()
     * 
     * // Get first 10 LaporanKegiatans
     * const laporanKegiatans = await prisma.laporanKegiatan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const laporanKegiatanWithIdOnly = await prisma.laporanKegiatan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LaporanKegiatanFindManyArgs>(args?: SelectSubset<T, LaporanKegiatanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanKegiatanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LaporanKegiatan.
     * @param {LaporanKegiatanCreateArgs} args - Arguments to create a LaporanKegiatan.
     * @example
     * // Create one LaporanKegiatan
     * const LaporanKegiatan = await prisma.laporanKegiatan.create({
     *   data: {
     *     // ... data to create a LaporanKegiatan
     *   }
     * })
     * 
     */
    create<T extends LaporanKegiatanCreateArgs>(args: SelectSubset<T, LaporanKegiatanCreateArgs<ExtArgs>>): Prisma__LaporanKegiatanClient<$Result.GetResult<Prisma.$LaporanKegiatanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LaporanKegiatans.
     * @param {LaporanKegiatanCreateManyArgs} args - Arguments to create many LaporanKegiatans.
     * @example
     * // Create many LaporanKegiatans
     * const laporanKegiatan = await prisma.laporanKegiatan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LaporanKegiatanCreateManyArgs>(args?: SelectSubset<T, LaporanKegiatanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LaporanKegiatans and returns the data saved in the database.
     * @param {LaporanKegiatanCreateManyAndReturnArgs} args - Arguments to create many LaporanKegiatans.
     * @example
     * // Create many LaporanKegiatans
     * const laporanKegiatan = await prisma.laporanKegiatan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LaporanKegiatans and only return the `id`
     * const laporanKegiatanWithIdOnly = await prisma.laporanKegiatan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LaporanKegiatanCreateManyAndReturnArgs>(args?: SelectSubset<T, LaporanKegiatanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanKegiatanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LaporanKegiatan.
     * @param {LaporanKegiatanDeleteArgs} args - Arguments to delete one LaporanKegiatan.
     * @example
     * // Delete one LaporanKegiatan
     * const LaporanKegiatan = await prisma.laporanKegiatan.delete({
     *   where: {
     *     // ... filter to delete one LaporanKegiatan
     *   }
     * })
     * 
     */
    delete<T extends LaporanKegiatanDeleteArgs>(args: SelectSubset<T, LaporanKegiatanDeleteArgs<ExtArgs>>): Prisma__LaporanKegiatanClient<$Result.GetResult<Prisma.$LaporanKegiatanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LaporanKegiatan.
     * @param {LaporanKegiatanUpdateArgs} args - Arguments to update one LaporanKegiatan.
     * @example
     * // Update one LaporanKegiatan
     * const laporanKegiatan = await prisma.laporanKegiatan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LaporanKegiatanUpdateArgs>(args: SelectSubset<T, LaporanKegiatanUpdateArgs<ExtArgs>>): Prisma__LaporanKegiatanClient<$Result.GetResult<Prisma.$LaporanKegiatanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LaporanKegiatans.
     * @param {LaporanKegiatanDeleteManyArgs} args - Arguments to filter LaporanKegiatans to delete.
     * @example
     * // Delete a few LaporanKegiatans
     * const { count } = await prisma.laporanKegiatan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LaporanKegiatanDeleteManyArgs>(args?: SelectSubset<T, LaporanKegiatanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LaporanKegiatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanKegiatanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LaporanKegiatans
     * const laporanKegiatan = await prisma.laporanKegiatan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LaporanKegiatanUpdateManyArgs>(args: SelectSubset<T, LaporanKegiatanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LaporanKegiatans and returns the data updated in the database.
     * @param {LaporanKegiatanUpdateManyAndReturnArgs} args - Arguments to update many LaporanKegiatans.
     * @example
     * // Update many LaporanKegiatans
     * const laporanKegiatan = await prisma.laporanKegiatan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LaporanKegiatans and only return the `id`
     * const laporanKegiatanWithIdOnly = await prisma.laporanKegiatan.updateManyAndReturn({
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
    updateManyAndReturn<T extends LaporanKegiatanUpdateManyAndReturnArgs>(args: SelectSubset<T, LaporanKegiatanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanKegiatanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LaporanKegiatan.
     * @param {LaporanKegiatanUpsertArgs} args - Arguments to update or create a LaporanKegiatan.
     * @example
     * // Update or create a LaporanKegiatan
     * const laporanKegiatan = await prisma.laporanKegiatan.upsert({
     *   create: {
     *     // ... data to create a LaporanKegiatan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LaporanKegiatan we want to update
     *   }
     * })
     */
    upsert<T extends LaporanKegiatanUpsertArgs>(args: SelectSubset<T, LaporanKegiatanUpsertArgs<ExtArgs>>): Prisma__LaporanKegiatanClient<$Result.GetResult<Prisma.$LaporanKegiatanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LaporanKegiatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanKegiatanCountArgs} args - Arguments to filter LaporanKegiatans to count.
     * @example
     * // Count the number of LaporanKegiatans
     * const count = await prisma.laporanKegiatan.count({
     *   where: {
     *     // ... the filter for the LaporanKegiatans we want to count
     *   }
     * })
    **/
    count<T extends LaporanKegiatanCountArgs>(
      args?: Subset<T, LaporanKegiatanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LaporanKegiatanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LaporanKegiatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanKegiatanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LaporanKegiatanAggregateArgs>(args: Subset<T, LaporanKegiatanAggregateArgs>): Prisma.PrismaPromise<GetLaporanKegiatanAggregateType<T>>

    /**
     * Group by LaporanKegiatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanKegiatanGroupByArgs} args - Group by arguments.
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
      T extends LaporanKegiatanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LaporanKegiatanGroupByArgs['orderBy'] }
        : { orderBy?: LaporanKegiatanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LaporanKegiatanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLaporanKegiatanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LaporanKegiatan model
   */
  readonly fields: LaporanKegiatanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LaporanKegiatan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LaporanKegiatanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LaporanKegiatan model
   */
  interface LaporanKegiatanFieldRefs {
    readonly id: FieldRef<"LaporanKegiatan", 'Int'>
    readonly userId: FieldRef<"LaporanKegiatan", 'Int'>
    readonly deskripsi: FieldRef<"LaporanKegiatan", 'String'>
    readonly fotoKegiatanUrl: FieldRef<"LaporanKegiatan", 'String'>
    readonly createdAt: FieldRef<"LaporanKegiatan", 'DateTime'>
    readonly updatedAt: FieldRef<"LaporanKegiatan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LaporanKegiatan findUnique
   */
  export type LaporanKegiatanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanKegiatan
     */
    select?: LaporanKegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanKegiatan
     */
    omit?: LaporanKegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanKegiatanInclude<ExtArgs> | null
    /**
     * Filter, which LaporanKegiatan to fetch.
     */
    where: LaporanKegiatanWhereUniqueInput
  }

  /**
   * LaporanKegiatan findUniqueOrThrow
   */
  export type LaporanKegiatanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanKegiatan
     */
    select?: LaporanKegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanKegiatan
     */
    omit?: LaporanKegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanKegiatanInclude<ExtArgs> | null
    /**
     * Filter, which LaporanKegiatan to fetch.
     */
    where: LaporanKegiatanWhereUniqueInput
  }

  /**
   * LaporanKegiatan findFirst
   */
  export type LaporanKegiatanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanKegiatan
     */
    select?: LaporanKegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanKegiatan
     */
    omit?: LaporanKegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanKegiatanInclude<ExtArgs> | null
    /**
     * Filter, which LaporanKegiatan to fetch.
     */
    where?: LaporanKegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaporanKegiatans to fetch.
     */
    orderBy?: LaporanKegiatanOrderByWithRelationInput | LaporanKegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LaporanKegiatans.
     */
    cursor?: LaporanKegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaporanKegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaporanKegiatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LaporanKegiatans.
     */
    distinct?: LaporanKegiatanScalarFieldEnum | LaporanKegiatanScalarFieldEnum[]
  }

  /**
   * LaporanKegiatan findFirstOrThrow
   */
  export type LaporanKegiatanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanKegiatan
     */
    select?: LaporanKegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanKegiatan
     */
    omit?: LaporanKegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanKegiatanInclude<ExtArgs> | null
    /**
     * Filter, which LaporanKegiatan to fetch.
     */
    where?: LaporanKegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaporanKegiatans to fetch.
     */
    orderBy?: LaporanKegiatanOrderByWithRelationInput | LaporanKegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LaporanKegiatans.
     */
    cursor?: LaporanKegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaporanKegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaporanKegiatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LaporanKegiatans.
     */
    distinct?: LaporanKegiatanScalarFieldEnum | LaporanKegiatanScalarFieldEnum[]
  }

  /**
   * LaporanKegiatan findMany
   */
  export type LaporanKegiatanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanKegiatan
     */
    select?: LaporanKegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanKegiatan
     */
    omit?: LaporanKegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanKegiatanInclude<ExtArgs> | null
    /**
     * Filter, which LaporanKegiatans to fetch.
     */
    where?: LaporanKegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaporanKegiatans to fetch.
     */
    orderBy?: LaporanKegiatanOrderByWithRelationInput | LaporanKegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LaporanKegiatans.
     */
    cursor?: LaporanKegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaporanKegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaporanKegiatans.
     */
    skip?: number
    distinct?: LaporanKegiatanScalarFieldEnum | LaporanKegiatanScalarFieldEnum[]
  }

  /**
   * LaporanKegiatan create
   */
  export type LaporanKegiatanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanKegiatan
     */
    select?: LaporanKegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanKegiatan
     */
    omit?: LaporanKegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanKegiatanInclude<ExtArgs> | null
    /**
     * The data needed to create a LaporanKegiatan.
     */
    data: XOR<LaporanKegiatanCreateInput, LaporanKegiatanUncheckedCreateInput>
  }

  /**
   * LaporanKegiatan createMany
   */
  export type LaporanKegiatanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LaporanKegiatans.
     */
    data: LaporanKegiatanCreateManyInput | LaporanKegiatanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LaporanKegiatan createManyAndReturn
   */
  export type LaporanKegiatanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanKegiatan
     */
    select?: LaporanKegiatanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanKegiatan
     */
    omit?: LaporanKegiatanOmit<ExtArgs> | null
    /**
     * The data used to create many LaporanKegiatans.
     */
    data: LaporanKegiatanCreateManyInput | LaporanKegiatanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanKegiatanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LaporanKegiatan update
   */
  export type LaporanKegiatanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanKegiatan
     */
    select?: LaporanKegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanKegiatan
     */
    omit?: LaporanKegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanKegiatanInclude<ExtArgs> | null
    /**
     * The data needed to update a LaporanKegiatan.
     */
    data: XOR<LaporanKegiatanUpdateInput, LaporanKegiatanUncheckedUpdateInput>
    /**
     * Choose, which LaporanKegiatan to update.
     */
    where: LaporanKegiatanWhereUniqueInput
  }

  /**
   * LaporanKegiatan updateMany
   */
  export type LaporanKegiatanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LaporanKegiatans.
     */
    data: XOR<LaporanKegiatanUpdateManyMutationInput, LaporanKegiatanUncheckedUpdateManyInput>
    /**
     * Filter which LaporanKegiatans to update
     */
    where?: LaporanKegiatanWhereInput
    /**
     * Limit how many LaporanKegiatans to update.
     */
    limit?: number
  }

  /**
   * LaporanKegiatan updateManyAndReturn
   */
  export type LaporanKegiatanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanKegiatan
     */
    select?: LaporanKegiatanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanKegiatan
     */
    omit?: LaporanKegiatanOmit<ExtArgs> | null
    /**
     * The data used to update LaporanKegiatans.
     */
    data: XOR<LaporanKegiatanUpdateManyMutationInput, LaporanKegiatanUncheckedUpdateManyInput>
    /**
     * Filter which LaporanKegiatans to update
     */
    where?: LaporanKegiatanWhereInput
    /**
     * Limit how many LaporanKegiatans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanKegiatanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LaporanKegiatan upsert
   */
  export type LaporanKegiatanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanKegiatan
     */
    select?: LaporanKegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanKegiatan
     */
    omit?: LaporanKegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanKegiatanInclude<ExtArgs> | null
    /**
     * The filter to search for the LaporanKegiatan to update in case it exists.
     */
    where: LaporanKegiatanWhereUniqueInput
    /**
     * In case the LaporanKegiatan found by the `where` argument doesn't exist, create a new LaporanKegiatan with this data.
     */
    create: XOR<LaporanKegiatanCreateInput, LaporanKegiatanUncheckedCreateInput>
    /**
     * In case the LaporanKegiatan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LaporanKegiatanUpdateInput, LaporanKegiatanUncheckedUpdateInput>
  }

  /**
   * LaporanKegiatan delete
   */
  export type LaporanKegiatanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanKegiatan
     */
    select?: LaporanKegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanKegiatan
     */
    omit?: LaporanKegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanKegiatanInclude<ExtArgs> | null
    /**
     * Filter which LaporanKegiatan to delete.
     */
    where: LaporanKegiatanWhereUniqueInput
  }

  /**
   * LaporanKegiatan deleteMany
   */
  export type LaporanKegiatanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LaporanKegiatans to delete
     */
    where?: LaporanKegiatanWhereInput
    /**
     * Limit how many LaporanKegiatans to delete.
     */
    limit?: number
  }

  /**
   * LaporanKegiatan without action
   */
  export type LaporanKegiatanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanKegiatan
     */
    select?: LaporanKegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanKegiatan
     */
    omit?: LaporanKegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanKegiatanInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UploadedDocumentScalarFieldEnum: {
    id: 'id',
    namaPengirim: 'namaPengirim',
    fileName: 'fileName',
    filePath: 'filePath',
    fileMimeType: 'fileMimeType',
    fileSize: 'fileSize',
    uploadDate: 'uploadDate',
    status: 'status',
    reviewedAt: 'reviewedAt'
  };

  export type UploadedDocumentScalarFieldEnum = (typeof UploadedDocumentScalarFieldEnum)[keyof typeof UploadedDocumentScalarFieldEnum]


  export const LaporanKegiatanScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    deskripsi: 'deskripsi',
    fotoKegiatanUrl: 'fotoKegiatanUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LaporanKegiatanScalarFieldEnum = (typeof LaporanKegiatanScalarFieldEnum)[keyof typeof LaporanKegiatanScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    laporanKegiatan?: LaporanKegiatanListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    laporanKegiatan?: LaporanKegiatanOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    laporanKegiatan?: LaporanKegiatanListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type UploadedDocumentWhereInput = {
    AND?: UploadedDocumentWhereInput | UploadedDocumentWhereInput[]
    OR?: UploadedDocumentWhereInput[]
    NOT?: UploadedDocumentWhereInput | UploadedDocumentWhereInput[]
    id?: IntFilter<"UploadedDocument"> | number
    namaPengirim?: StringFilter<"UploadedDocument"> | string
    fileName?: StringFilter<"UploadedDocument"> | string
    filePath?: StringFilter<"UploadedDocument"> | string
    fileMimeType?: StringFilter<"UploadedDocument"> | string
    fileSize?: IntFilter<"UploadedDocument"> | number
    uploadDate?: DateTimeFilter<"UploadedDocument"> | Date | string
    status?: StringFilter<"UploadedDocument"> | string
    reviewedAt?: DateTimeNullableFilter<"UploadedDocument"> | Date | string | null
  }

  export type UploadedDocumentOrderByWithRelationInput = {
    id?: SortOrder
    namaPengirim?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    fileMimeType?: SortOrder
    fileSize?: SortOrder
    uploadDate?: SortOrder
    status?: SortOrder
    reviewedAt?: SortOrderInput | SortOrder
  }

  export type UploadedDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    filePath?: string
    AND?: UploadedDocumentWhereInput | UploadedDocumentWhereInput[]
    OR?: UploadedDocumentWhereInput[]
    NOT?: UploadedDocumentWhereInput | UploadedDocumentWhereInput[]
    namaPengirim?: StringFilter<"UploadedDocument"> | string
    fileName?: StringFilter<"UploadedDocument"> | string
    fileMimeType?: StringFilter<"UploadedDocument"> | string
    fileSize?: IntFilter<"UploadedDocument"> | number
    uploadDate?: DateTimeFilter<"UploadedDocument"> | Date | string
    status?: StringFilter<"UploadedDocument"> | string
    reviewedAt?: DateTimeNullableFilter<"UploadedDocument"> | Date | string | null
  }, "id" | "filePath">

  export type UploadedDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    namaPengirim?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    fileMimeType?: SortOrder
    fileSize?: SortOrder
    uploadDate?: SortOrder
    status?: SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    _count?: UploadedDocumentCountOrderByAggregateInput
    _avg?: UploadedDocumentAvgOrderByAggregateInput
    _max?: UploadedDocumentMaxOrderByAggregateInput
    _min?: UploadedDocumentMinOrderByAggregateInput
    _sum?: UploadedDocumentSumOrderByAggregateInput
  }

  export type UploadedDocumentScalarWhereWithAggregatesInput = {
    AND?: UploadedDocumentScalarWhereWithAggregatesInput | UploadedDocumentScalarWhereWithAggregatesInput[]
    OR?: UploadedDocumentScalarWhereWithAggregatesInput[]
    NOT?: UploadedDocumentScalarWhereWithAggregatesInput | UploadedDocumentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UploadedDocument"> | number
    namaPengirim?: StringWithAggregatesFilter<"UploadedDocument"> | string
    fileName?: StringWithAggregatesFilter<"UploadedDocument"> | string
    filePath?: StringWithAggregatesFilter<"UploadedDocument"> | string
    fileMimeType?: StringWithAggregatesFilter<"UploadedDocument"> | string
    fileSize?: IntWithAggregatesFilter<"UploadedDocument"> | number
    uploadDate?: DateTimeWithAggregatesFilter<"UploadedDocument"> | Date | string
    status?: StringWithAggregatesFilter<"UploadedDocument"> | string
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"UploadedDocument"> | Date | string | null
  }

  export type LaporanKegiatanWhereInput = {
    AND?: LaporanKegiatanWhereInput | LaporanKegiatanWhereInput[]
    OR?: LaporanKegiatanWhereInput[]
    NOT?: LaporanKegiatanWhereInput | LaporanKegiatanWhereInput[]
    id?: IntFilter<"LaporanKegiatan"> | number
    userId?: IntFilter<"LaporanKegiatan"> | number
    deskripsi?: StringFilter<"LaporanKegiatan"> | string
    fotoKegiatanUrl?: StringFilter<"LaporanKegiatan"> | string
    createdAt?: DateTimeFilter<"LaporanKegiatan"> | Date | string
    updatedAt?: DateTimeFilter<"LaporanKegiatan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LaporanKegiatanOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    deskripsi?: SortOrder
    fotoKegiatanUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LaporanKegiatanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LaporanKegiatanWhereInput | LaporanKegiatanWhereInput[]
    OR?: LaporanKegiatanWhereInput[]
    NOT?: LaporanKegiatanWhereInput | LaporanKegiatanWhereInput[]
    userId?: IntFilter<"LaporanKegiatan"> | number
    deskripsi?: StringFilter<"LaporanKegiatan"> | string
    fotoKegiatanUrl?: StringFilter<"LaporanKegiatan"> | string
    createdAt?: DateTimeFilter<"LaporanKegiatan"> | Date | string
    updatedAt?: DateTimeFilter<"LaporanKegiatan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LaporanKegiatanOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    deskripsi?: SortOrder
    fotoKegiatanUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LaporanKegiatanCountOrderByAggregateInput
    _avg?: LaporanKegiatanAvgOrderByAggregateInput
    _max?: LaporanKegiatanMaxOrderByAggregateInput
    _min?: LaporanKegiatanMinOrderByAggregateInput
    _sum?: LaporanKegiatanSumOrderByAggregateInput
  }

  export type LaporanKegiatanScalarWhereWithAggregatesInput = {
    AND?: LaporanKegiatanScalarWhereWithAggregatesInput | LaporanKegiatanScalarWhereWithAggregatesInput[]
    OR?: LaporanKegiatanScalarWhereWithAggregatesInput[]
    NOT?: LaporanKegiatanScalarWhereWithAggregatesInput | LaporanKegiatanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LaporanKegiatan"> | number
    userId?: IntWithAggregatesFilter<"LaporanKegiatan"> | number
    deskripsi?: StringWithAggregatesFilter<"LaporanKegiatan"> | string
    fotoKegiatanUrl?: StringWithAggregatesFilter<"LaporanKegiatan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LaporanKegiatan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LaporanKegiatan"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    laporanKegiatan?: LaporanKegiatanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    laporanKegiatan?: LaporanKegiatanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    laporanKegiatan?: LaporanKegiatanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    laporanKegiatan?: LaporanKegiatanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UploadedDocumentCreateInput = {
    namaPengirim: string
    fileName: string
    filePath: string
    fileMimeType: string
    fileSize: number
    uploadDate?: Date | string
    status?: string
    reviewedAt?: Date | string | null
  }

  export type UploadedDocumentUncheckedCreateInput = {
    id?: number
    namaPengirim: string
    fileName: string
    filePath: string
    fileMimeType: string
    fileSize: number
    uploadDate?: Date | string
    status?: string
    reviewedAt?: Date | string | null
  }

  export type UploadedDocumentUpdateInput = {
    namaPengirim?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileMimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UploadedDocumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaPengirim?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileMimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UploadedDocumentCreateManyInput = {
    id?: number
    namaPengirim: string
    fileName: string
    filePath: string
    fileMimeType: string
    fileSize: number
    uploadDate?: Date | string
    status?: string
    reviewedAt?: Date | string | null
  }

  export type UploadedDocumentUpdateManyMutationInput = {
    namaPengirim?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileMimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UploadedDocumentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaPengirim?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileMimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LaporanKegiatanCreateInput = {
    deskripsi: string
    fotoKegiatanUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLaporanKegiatanInput
  }

  export type LaporanKegiatanUncheckedCreateInput = {
    id?: number
    userId: number
    deskripsi: string
    fotoKegiatanUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LaporanKegiatanUpdateInput = {
    deskripsi?: StringFieldUpdateOperationsInput | string
    fotoKegiatanUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLaporanKegiatanNestedInput
  }

  export type LaporanKegiatanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    fotoKegiatanUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanKegiatanCreateManyInput = {
    id?: number
    userId: number
    deskripsi: string
    fotoKegiatanUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LaporanKegiatanUpdateManyMutationInput = {
    deskripsi?: StringFieldUpdateOperationsInput | string
    fotoKegiatanUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanKegiatanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    fotoKegiatanUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type LaporanKegiatanListRelationFilter = {
    every?: LaporanKegiatanWhereInput
    some?: LaporanKegiatanWhereInput
    none?: LaporanKegiatanWhereInput
  }

  export type LaporanKegiatanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UploadedDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    namaPengirim?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    fileMimeType?: SortOrder
    fileSize?: SortOrder
    uploadDate?: SortOrder
    status?: SortOrder
    reviewedAt?: SortOrder
  }

  export type UploadedDocumentAvgOrderByAggregateInput = {
    id?: SortOrder
    fileSize?: SortOrder
  }

  export type UploadedDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    namaPengirim?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    fileMimeType?: SortOrder
    fileSize?: SortOrder
    uploadDate?: SortOrder
    status?: SortOrder
    reviewedAt?: SortOrder
  }

  export type UploadedDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    namaPengirim?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    fileMimeType?: SortOrder
    fileSize?: SortOrder
    uploadDate?: SortOrder
    status?: SortOrder
    reviewedAt?: SortOrder
  }

  export type UploadedDocumentSumOrderByAggregateInput = {
    id?: SortOrder
    fileSize?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LaporanKegiatanCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deskripsi?: SortOrder
    fotoKegiatanUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LaporanKegiatanAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type LaporanKegiatanMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deskripsi?: SortOrder
    fotoKegiatanUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LaporanKegiatanMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deskripsi?: SortOrder
    fotoKegiatanUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LaporanKegiatanSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type LaporanKegiatanCreateNestedManyWithoutUserInput = {
    create?: XOR<LaporanKegiatanCreateWithoutUserInput, LaporanKegiatanUncheckedCreateWithoutUserInput> | LaporanKegiatanCreateWithoutUserInput[] | LaporanKegiatanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LaporanKegiatanCreateOrConnectWithoutUserInput | LaporanKegiatanCreateOrConnectWithoutUserInput[]
    createMany?: LaporanKegiatanCreateManyUserInputEnvelope
    connect?: LaporanKegiatanWhereUniqueInput | LaporanKegiatanWhereUniqueInput[]
  }

  export type LaporanKegiatanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LaporanKegiatanCreateWithoutUserInput, LaporanKegiatanUncheckedCreateWithoutUserInput> | LaporanKegiatanCreateWithoutUserInput[] | LaporanKegiatanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LaporanKegiatanCreateOrConnectWithoutUserInput | LaporanKegiatanCreateOrConnectWithoutUserInput[]
    createMany?: LaporanKegiatanCreateManyUserInputEnvelope
    connect?: LaporanKegiatanWhereUniqueInput | LaporanKegiatanWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type LaporanKegiatanUpdateManyWithoutUserNestedInput = {
    create?: XOR<LaporanKegiatanCreateWithoutUserInput, LaporanKegiatanUncheckedCreateWithoutUserInput> | LaporanKegiatanCreateWithoutUserInput[] | LaporanKegiatanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LaporanKegiatanCreateOrConnectWithoutUserInput | LaporanKegiatanCreateOrConnectWithoutUserInput[]
    upsert?: LaporanKegiatanUpsertWithWhereUniqueWithoutUserInput | LaporanKegiatanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LaporanKegiatanCreateManyUserInputEnvelope
    set?: LaporanKegiatanWhereUniqueInput | LaporanKegiatanWhereUniqueInput[]
    disconnect?: LaporanKegiatanWhereUniqueInput | LaporanKegiatanWhereUniqueInput[]
    delete?: LaporanKegiatanWhereUniqueInput | LaporanKegiatanWhereUniqueInput[]
    connect?: LaporanKegiatanWhereUniqueInput | LaporanKegiatanWhereUniqueInput[]
    update?: LaporanKegiatanUpdateWithWhereUniqueWithoutUserInput | LaporanKegiatanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LaporanKegiatanUpdateManyWithWhereWithoutUserInput | LaporanKegiatanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LaporanKegiatanScalarWhereInput | LaporanKegiatanScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LaporanKegiatanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LaporanKegiatanCreateWithoutUserInput, LaporanKegiatanUncheckedCreateWithoutUserInput> | LaporanKegiatanCreateWithoutUserInput[] | LaporanKegiatanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LaporanKegiatanCreateOrConnectWithoutUserInput | LaporanKegiatanCreateOrConnectWithoutUserInput[]
    upsert?: LaporanKegiatanUpsertWithWhereUniqueWithoutUserInput | LaporanKegiatanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LaporanKegiatanCreateManyUserInputEnvelope
    set?: LaporanKegiatanWhereUniqueInput | LaporanKegiatanWhereUniqueInput[]
    disconnect?: LaporanKegiatanWhereUniqueInput | LaporanKegiatanWhereUniqueInput[]
    delete?: LaporanKegiatanWhereUniqueInput | LaporanKegiatanWhereUniqueInput[]
    connect?: LaporanKegiatanWhereUniqueInput | LaporanKegiatanWhereUniqueInput[]
    update?: LaporanKegiatanUpdateWithWhereUniqueWithoutUserInput | LaporanKegiatanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LaporanKegiatanUpdateManyWithWhereWithoutUserInput | LaporanKegiatanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LaporanKegiatanScalarWhereInput | LaporanKegiatanScalarWhereInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserCreateNestedOneWithoutLaporanKegiatanInput = {
    create?: XOR<UserCreateWithoutLaporanKegiatanInput, UserUncheckedCreateWithoutLaporanKegiatanInput>
    connectOrCreate?: UserCreateOrConnectWithoutLaporanKegiatanInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLaporanKegiatanNestedInput = {
    create?: XOR<UserCreateWithoutLaporanKegiatanInput, UserUncheckedCreateWithoutLaporanKegiatanInput>
    connectOrCreate?: UserCreateOrConnectWithoutLaporanKegiatanInput
    upsert?: UserUpsertWithoutLaporanKegiatanInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLaporanKegiatanInput, UserUpdateWithoutLaporanKegiatanInput>, UserUncheckedUpdateWithoutLaporanKegiatanInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type LaporanKegiatanCreateWithoutUserInput = {
    deskripsi: string
    fotoKegiatanUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LaporanKegiatanUncheckedCreateWithoutUserInput = {
    id?: number
    deskripsi: string
    fotoKegiatanUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LaporanKegiatanCreateOrConnectWithoutUserInput = {
    where: LaporanKegiatanWhereUniqueInput
    create: XOR<LaporanKegiatanCreateWithoutUserInput, LaporanKegiatanUncheckedCreateWithoutUserInput>
  }

  export type LaporanKegiatanCreateManyUserInputEnvelope = {
    data: LaporanKegiatanCreateManyUserInput | LaporanKegiatanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LaporanKegiatanUpsertWithWhereUniqueWithoutUserInput = {
    where: LaporanKegiatanWhereUniqueInput
    update: XOR<LaporanKegiatanUpdateWithoutUserInput, LaporanKegiatanUncheckedUpdateWithoutUserInput>
    create: XOR<LaporanKegiatanCreateWithoutUserInput, LaporanKegiatanUncheckedCreateWithoutUserInput>
  }

  export type LaporanKegiatanUpdateWithWhereUniqueWithoutUserInput = {
    where: LaporanKegiatanWhereUniqueInput
    data: XOR<LaporanKegiatanUpdateWithoutUserInput, LaporanKegiatanUncheckedUpdateWithoutUserInput>
  }

  export type LaporanKegiatanUpdateManyWithWhereWithoutUserInput = {
    where: LaporanKegiatanScalarWhereInput
    data: XOR<LaporanKegiatanUpdateManyMutationInput, LaporanKegiatanUncheckedUpdateManyWithoutUserInput>
  }

  export type LaporanKegiatanScalarWhereInput = {
    AND?: LaporanKegiatanScalarWhereInput | LaporanKegiatanScalarWhereInput[]
    OR?: LaporanKegiatanScalarWhereInput[]
    NOT?: LaporanKegiatanScalarWhereInput | LaporanKegiatanScalarWhereInput[]
    id?: IntFilter<"LaporanKegiatan"> | number
    userId?: IntFilter<"LaporanKegiatan"> | number
    deskripsi?: StringFilter<"LaporanKegiatan"> | string
    fotoKegiatanUrl?: StringFilter<"LaporanKegiatan"> | string
    createdAt?: DateTimeFilter<"LaporanKegiatan"> | Date | string
    updatedAt?: DateTimeFilter<"LaporanKegiatan"> | Date | string
  }

  export type UserCreateWithoutLaporanKegiatanInput = {
    username: string
    email: string
    password: string
  }

  export type UserUncheckedCreateWithoutLaporanKegiatanInput = {
    id?: number
    username: string
    email: string
    password: string
  }

  export type UserCreateOrConnectWithoutLaporanKegiatanInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLaporanKegiatanInput, UserUncheckedCreateWithoutLaporanKegiatanInput>
  }

  export type UserUpsertWithoutLaporanKegiatanInput = {
    update: XOR<UserUpdateWithoutLaporanKegiatanInput, UserUncheckedUpdateWithoutLaporanKegiatanInput>
    create: XOR<UserCreateWithoutLaporanKegiatanInput, UserUncheckedCreateWithoutLaporanKegiatanInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLaporanKegiatanInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLaporanKegiatanInput, UserUncheckedUpdateWithoutLaporanKegiatanInput>
  }

  export type UserUpdateWithoutLaporanKegiatanInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutLaporanKegiatanInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type LaporanKegiatanCreateManyUserInput = {
    id?: number
    deskripsi: string
    fotoKegiatanUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LaporanKegiatanUpdateWithoutUserInput = {
    deskripsi?: StringFieldUpdateOperationsInput | string
    fotoKegiatanUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanKegiatanUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    fotoKegiatanUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanKegiatanUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    fotoKegiatanUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}