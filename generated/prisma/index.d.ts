
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
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Player
 * 
 */
export type Player = $Result.DefaultSelection<Prisma.$PlayerPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model Match
 * 
 */
export type Match = $Result.DefaultSelection<Prisma.$MatchPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Stat
 * 
 */
export type Stat = $Result.DefaultSelection<Prisma.$StatPayload>
/**
 * Model Leaderboard
 * 
 */
export type Leaderboard = $Result.DefaultSelection<Prisma.$LeaderboardPayload>
/**
 * Model GameMode
 * 
 */
export type GameMode = $Result.DefaultSelection<Prisma.$GameModePayload>
/**
 * Model Map
 * 
 */
export type Map = $Result.DefaultSelection<Prisma.$MapPayload>
/**
 * Model MatchMap
 * 
 */
export type MatchMap = $Result.DefaultSelection<Prisma.$MatchMapPayload>
/**
 * Model MatchMapPlayerStat
 * 
 */
export type MatchMapPlayerStat = $Result.DefaultSelection<Prisma.$MatchMapPlayerStatPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PlayerRole: {
  ENTRY_SMG: 'ENTRY_SMG',
  ROAMING_SMG: 'ROAMING_SMG',
  MAIN_AR: 'MAIN_AR',
  FLEX: 'FLEX'
};

export type PlayerRole = (typeof PlayerRole)[keyof typeof PlayerRole]

}

export type PlayerRole = $Enums.PlayerRole

export const PlayerRole: typeof $Enums.PlayerRole

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
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.player`: Exposes CRUD operations for the **Player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.PlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match`: Exposes CRUD operations for the **Match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.MatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stat`: Exposes CRUD operations for the **Stat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stats
    * const stats = await prisma.stat.findMany()
    * ```
    */
  get stat(): Prisma.StatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaderboard`: Exposes CRUD operations for the **Leaderboard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leaderboards
    * const leaderboards = await prisma.leaderboard.findMany()
    * ```
    */
  get leaderboard(): Prisma.LeaderboardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameMode`: Exposes CRUD operations for the **GameMode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameModes
    * const gameModes = await prisma.gameMode.findMany()
    * ```
    */
  get gameMode(): Prisma.GameModeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.map`: Exposes CRUD operations for the **Map** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maps
    * const maps = await prisma.map.findMany()
    * ```
    */
  get map(): Prisma.MapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matchMap`: Exposes CRUD operations for the **MatchMap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchMaps
    * const matchMaps = await prisma.matchMap.findMany()
    * ```
    */
  get matchMap(): Prisma.MatchMapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matchMapPlayerStat`: Exposes CRUD operations for the **MatchMapPlayerStat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchMapPlayerStats
    * const matchMapPlayerStats = await prisma.matchMapPlayerStat.findMany()
    * ```
    */
  get matchMapPlayerStat(): Prisma.MatchMapPlayerStatDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Profile: 'Profile',
    Player: 'Player',
    Team: 'Team',
    Match: 'Match',
    Event: 'Event',
    Stat: 'Stat',
    Leaderboard: 'Leaderboard',
    GameMode: 'GameMode',
    Map: 'Map',
    MatchMap: 'MatchMap',
    MatchMapPlayerStat: 'MatchMapPlayerStat'
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
      modelProps: "user" | "profile" | "player" | "team" | "match" | "event" | "stat" | "leaderboard" | "gameMode" | "map" | "matchMap" | "matchMapPlayerStat"
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
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Player: {
        payload: Prisma.$PlayerPayload<ExtArgs>
        fields: Prisma.PlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findFirst: {
            args: Prisma.PlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findMany: {
            args: Prisma.PlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          create: {
            args: Prisma.PlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          createMany: {
            args: Prisma.PlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          delete: {
            args: Prisma.PlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          update: {
            args: Prisma.PlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          deleteMany: {
            args: Prisma.PlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          upsert: {
            args: Prisma.PlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          aggregate: {
            args: Prisma.PlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer>
          }
          groupBy: {
            args: Prisma.PlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      Match: {
        payload: Prisma.$MatchPayload<ExtArgs>
        fields: Prisma.MatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findFirst: {
            args: Prisma.MatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findMany: {
            args: Prisma.MatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          create: {
            args: Prisma.MatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          createMany: {
            args: Prisma.MatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          delete: {
            args: Prisma.MatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          update: {
            args: Prisma.MatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          deleteMany: {
            args: Prisma.MatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          upsert: {
            args: Prisma.MatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch>
          }
          groupBy: {
            args: Prisma.MatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchCountArgs<ExtArgs>
            result: $Utils.Optional<MatchCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Stat: {
        payload: Prisma.$StatPayload<ExtArgs>
        fields: Prisma.StatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload>
          }
          findFirst: {
            args: Prisma.StatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload>
          }
          findMany: {
            args: Prisma.StatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload>[]
          }
          create: {
            args: Prisma.StatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload>
          }
          createMany: {
            args: Prisma.StatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload>[]
          }
          delete: {
            args: Prisma.StatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload>
          }
          update: {
            args: Prisma.StatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload>
          }
          deleteMany: {
            args: Prisma.StatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload>[]
          }
          upsert: {
            args: Prisma.StatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatPayload>
          }
          aggregate: {
            args: Prisma.StatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStat>
          }
          groupBy: {
            args: Prisma.StatGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatCountArgs<ExtArgs>
            result: $Utils.Optional<StatCountAggregateOutputType> | number
          }
        }
      }
      Leaderboard: {
        payload: Prisma.$LeaderboardPayload<ExtArgs>
        fields: Prisma.LeaderboardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaderboardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaderboardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload>
          }
          findFirst: {
            args: Prisma.LeaderboardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaderboardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload>
          }
          findMany: {
            args: Prisma.LeaderboardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload>[]
          }
          create: {
            args: Prisma.LeaderboardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload>
          }
          createMany: {
            args: Prisma.LeaderboardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaderboardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload>[]
          }
          delete: {
            args: Prisma.LeaderboardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload>
          }
          update: {
            args: Prisma.LeaderboardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload>
          }
          deleteMany: {
            args: Prisma.LeaderboardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaderboardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaderboardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload>[]
          }
          upsert: {
            args: Prisma.LeaderboardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardPayload>
          }
          aggregate: {
            args: Prisma.LeaderboardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaderboard>
          }
          groupBy: {
            args: Prisma.LeaderboardGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaderboardGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaderboardCountArgs<ExtArgs>
            result: $Utils.Optional<LeaderboardCountAggregateOutputType> | number
          }
        }
      }
      GameMode: {
        payload: Prisma.$GameModePayload<ExtArgs>
        fields: Prisma.GameModeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameModeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameModePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameModeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameModePayload>
          }
          findFirst: {
            args: Prisma.GameModeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameModePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameModeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameModePayload>
          }
          findMany: {
            args: Prisma.GameModeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameModePayload>[]
          }
          create: {
            args: Prisma.GameModeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameModePayload>
          }
          createMany: {
            args: Prisma.GameModeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameModeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameModePayload>[]
          }
          delete: {
            args: Prisma.GameModeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameModePayload>
          }
          update: {
            args: Prisma.GameModeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameModePayload>
          }
          deleteMany: {
            args: Prisma.GameModeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameModeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameModeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameModePayload>[]
          }
          upsert: {
            args: Prisma.GameModeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameModePayload>
          }
          aggregate: {
            args: Prisma.GameModeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameMode>
          }
          groupBy: {
            args: Prisma.GameModeGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameModeGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameModeCountArgs<ExtArgs>
            result: $Utils.Optional<GameModeCountAggregateOutputType> | number
          }
        }
      }
      Map: {
        payload: Prisma.$MapPayload<ExtArgs>
        fields: Prisma.MapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          findFirst: {
            args: Prisma.MapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          findMany: {
            args: Prisma.MapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>[]
          }
          create: {
            args: Prisma.MapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          createMany: {
            args: Prisma.MapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MapCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>[]
          }
          delete: {
            args: Prisma.MapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          update: {
            args: Prisma.MapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          deleteMany: {
            args: Prisma.MapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MapUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>[]
          }
          upsert: {
            args: Prisma.MapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapPayload>
          }
          aggregate: {
            args: Prisma.MapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMap>
          }
          groupBy: {
            args: Prisma.MapGroupByArgs<ExtArgs>
            result: $Utils.Optional<MapGroupByOutputType>[]
          }
          count: {
            args: Prisma.MapCountArgs<ExtArgs>
            result: $Utils.Optional<MapCountAggregateOutputType> | number
          }
        }
      }
      MatchMap: {
        payload: Prisma.$MatchMapPayload<ExtArgs>
        fields: Prisma.MatchMapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchMapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchMapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchMapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchMapPayload>
          }
          findFirst: {
            args: Prisma.MatchMapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchMapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchMapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchMapPayload>
          }
          findMany: {
            args: Prisma.MatchMapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchMapPayload>[]
          }
          create: {
            args: Prisma.MatchMapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchMapPayload>
          }
          createMany: {
            args: Prisma.MatchMapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchMapCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchMapPayload>[]
          }
          delete: {
            args: Prisma.MatchMapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchMapPayload>
          }
          update: {
            args: Prisma.MatchMapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchMapPayload>
          }
          deleteMany: {
            args: Prisma.MatchMapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchMapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchMapUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchMapPayload>[]
          }
          upsert: {
            args: Prisma.MatchMapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchMapPayload>
          }
          aggregate: {
            args: Prisma.MatchMapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatchMap>
          }
          groupBy: {
            args: Prisma.MatchMapGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchMapGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchMapCountArgs<ExtArgs>
            result: $Utils.Optional<MatchMapCountAggregateOutputType> | number
          }
        }
      }
      MatchMapPlayerStat: {
        payload: Prisma.$MatchMapPlayerStatPayload<ExtArgs>
        fields: Prisma.MatchMapPlayerStatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchMapPlayerStatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchMapPlayerStatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchMapPlayerStatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchMapPlayerStatPayload>
          }
          findFirst: {
            args: Prisma.MatchMapPlayerStatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchMapPlayerStatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchMapPlayerStatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchMapPlayerStatPayload>
          }
          findMany: {
            args: Prisma.MatchMapPlayerStatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchMapPlayerStatPayload>[]
          }
          create: {
            args: Prisma.MatchMapPlayerStatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchMapPlayerStatPayload>
          }
          createMany: {
            args: Prisma.MatchMapPlayerStatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchMapPlayerStatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchMapPlayerStatPayload>[]
          }
          delete: {
            args: Prisma.MatchMapPlayerStatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchMapPlayerStatPayload>
          }
          update: {
            args: Prisma.MatchMapPlayerStatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchMapPlayerStatPayload>
          }
          deleteMany: {
            args: Prisma.MatchMapPlayerStatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchMapPlayerStatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchMapPlayerStatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchMapPlayerStatPayload>[]
          }
          upsert: {
            args: Prisma.MatchMapPlayerStatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchMapPlayerStatPayload>
          }
          aggregate: {
            args: Prisma.MatchMapPlayerStatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatchMapPlayerStat>
          }
          groupBy: {
            args: Prisma.MatchMapPlayerStatGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchMapPlayerStatGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchMapPlayerStatCountArgs<ExtArgs>
            result: $Utils.Optional<MatchMapPlayerStatCountAggregateOutputType> | number
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
    profile?: ProfileOmit
    player?: PlayerOmit
    team?: TeamOmit
    match?: MatchOmit
    event?: EventOmit
    stat?: StatOmit
    leaderboard?: LeaderboardOmit
    gameMode?: GameModeOmit
    map?: MapOmit
    matchMap?: MatchMapOmit
    matchMapPlayerStat?: MatchMapPlayerStatOmit
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
   * Count Type PlayerCountOutputType
   */

  export type PlayerCountOutputType = {
    stats: number
    MatchMapPlayerStat: number
  }

  export type PlayerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stats?: boolean | PlayerCountOutputTypeCountStatsArgs
    MatchMapPlayerStat?: boolean | PlayerCountOutputTypeCountMatchMapPlayerStatArgs
  }

  // Custom InputTypes
  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCountOutputType
     */
    select?: PlayerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatWhereInput
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountMatchMapPlayerStatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchMapPlayerStatWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    players: number
    teamA_Matches: number
    teamB_Matches: number
    matchesWon: number
    MatchMap: number
    matchMapStats: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | TeamCountOutputTypeCountPlayersArgs
    teamA_Matches?: boolean | TeamCountOutputTypeCountTeamA_MatchesArgs
    teamB_Matches?: boolean | TeamCountOutputTypeCountTeamB_MatchesArgs
    matchesWon?: boolean | TeamCountOutputTypeCountMatchesWonArgs
    MatchMap?: boolean | TeamCountOutputTypeCountMatchMapArgs
    matchMapStats?: boolean | TeamCountOutputTypeCountMatchMapStatsArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountTeamA_MatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountTeamB_MatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMatchesWonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMatchMapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchMapWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMatchMapStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchMapPlayerStatWhereInput
  }


  /**
   * Count Type MatchCountOutputType
   */

  export type MatchCountOutputType = {
    stats: number
    MatchMap: number
  }

  export type MatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stats?: boolean | MatchCountOutputTypeCountStatsArgs
    MatchMap?: boolean | MatchCountOutputTypeCountMatchMapArgs
  }

  // Custom InputTypes
  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchCountOutputType
     */
    select?: MatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeCountStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatWhereInput
  }

  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeCountMatchMapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchMapWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    matches: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches?: boolean | EventCountOutputTypeCountMatchesArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }


  /**
   * Count Type GameModeCountOutputType
   */

  export type GameModeCountOutputType = {
    maps: number
    MatchMap: number
  }

  export type GameModeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maps?: boolean | GameModeCountOutputTypeCountMapsArgs
    MatchMap?: boolean | GameModeCountOutputTypeCountMatchMapArgs
  }

  // Custom InputTypes
  /**
   * GameModeCountOutputType without action
   */
  export type GameModeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameModeCountOutputType
     */
    select?: GameModeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameModeCountOutputType without action
   */
  export type GameModeCountOutputTypeCountMapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapWhereInput
  }

  /**
   * GameModeCountOutputType without action
   */
  export type GameModeCountOutputTypeCountMatchMapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchMapWhereInput
  }


  /**
   * Count Type MapCountOutputType
   */

  export type MapCountOutputType = {
    matchMaps: number
  }

  export type MapCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matchMaps?: boolean | MapCountOutputTypeCountMatchMapsArgs
  }

  // Custom InputTypes
  /**
   * MapCountOutputType without action
   */
  export type MapCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapCountOutputType
     */
    select?: MapCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MapCountOutputType without action
   */
  export type MapCountOutputTypeCountMatchMapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchMapWhereInput
  }


  /**
   * Count Type MatchMapCountOutputType
   */

  export type MatchMapCountOutputType = {
    stats: number
    MatchMapPlayerStat: number
  }

  export type MatchMapCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stats?: boolean | MatchMapCountOutputTypeCountStatsArgs
    MatchMapPlayerStat?: boolean | MatchMapCountOutputTypeCountMatchMapPlayerStatArgs
  }

  // Custom InputTypes
  /**
   * MatchMapCountOutputType without action
   */
  export type MatchMapCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMapCountOutputType
     */
    select?: MatchMapCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MatchMapCountOutputType without action
   */
  export type MatchMapCountOutputTypeCountStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatWhereInput
  }

  /**
   * MatchMapCountOutputType without action
   */
  export type MatchMapCountOutputTypeCountMatchMapPlayerStatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchMapPlayerStatWhereInput
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
    email: string | null
    password: string | null
    isVerified: boolean | null
    isActive: boolean | null
    verificationToken: string | null
    verificationTokenExpiry: Date | null
    passwordResetToken: string | null
    passwordResetTokenExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    isVerified: boolean | null
    isActive: boolean | null
    verificationToken: string | null
    verificationTokenExpiry: Date | null
    passwordResetToken: string | null
    passwordResetTokenExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    isVerified: number
    isActive: number
    verificationToken: number
    verificationTokenExpiry: number
    passwordResetToken: number
    passwordResetTokenExpiry: number
    createdAt: number
    updatedAt: number
    deletedAt: number
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
    email?: true
    password?: true
    isVerified?: true
    isActive?: true
    verificationToken?: true
    verificationTokenExpiry?: true
    passwordResetToken?: true
    passwordResetTokenExpiry?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    isVerified?: true
    isActive?: true
    verificationToken?: true
    verificationTokenExpiry?: true
    passwordResetToken?: true
    passwordResetTokenExpiry?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    isVerified?: true
    isActive?: true
    verificationToken?: true
    verificationTokenExpiry?: true
    passwordResetToken?: true
    passwordResetTokenExpiry?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
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
    email: string
    password: string
    isVerified: boolean
    isActive: boolean
    verificationToken: string | null
    verificationTokenExpiry: Date | null
    passwordResetToken: string | null
    passwordResetTokenExpiry: Date | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
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
    email?: boolean
    password?: boolean
    isVerified?: boolean
    isActive?: boolean
    verificationToken?: boolean
    verificationTokenExpiry?: boolean
    passwordResetToken?: boolean
    passwordResetTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    isVerified?: boolean
    isActive?: boolean
    verificationToken?: boolean
    verificationTokenExpiry?: boolean
    passwordResetToken?: boolean
    passwordResetTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    isVerified?: boolean
    isActive?: boolean
    verificationToken?: boolean
    verificationTokenExpiry?: boolean
    passwordResetToken?: boolean
    passwordResetTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    isVerified?: boolean
    isActive?: boolean
    verificationToken?: boolean
    verificationTokenExpiry?: boolean
    passwordResetToken?: boolean
    passwordResetTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "isVerified" | "isActive" | "verificationToken" | "verificationTokenExpiry" | "passwordResetToken" | "passwordResetTokenExpiry" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      isVerified: boolean
      isActive: boolean
      verificationToken: string | null
      verificationTokenExpiry: Date | null
      passwordResetToken: string | null
      passwordResetTokenExpiry: Date | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
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
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly verificationToken: FieldRef<"User", 'String'>
    readonly verificationTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly passwordResetToken: FieldRef<"User", 'String'>
    readonly passwordResetTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
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
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
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
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    username: string | null
    profileImage: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    username: string | null
    profileImage: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    username: number
    profileImage: number
    userId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    username?: true
    profileImage?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    username?: true
    profileImage?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    username?: true
    profileImage?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    username: string | null
    profileImage: string | null
    userId: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    profileImage?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    profileImage?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    profileImage?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    profileImage?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "username" | "profileImage" | "userId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      username: string | null
      profileImage: string | null
      userId: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'Int'>
    readonly firstName: FieldRef<"Profile", 'String'>
    readonly lastName: FieldRef<"Profile", 'String'>
    readonly username: FieldRef<"Profile", 'String'>
    readonly profileImage: FieldRef<"Profile", 'String'>
    readonly userId: FieldRef<"Profile", 'Int'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
    readonly deletedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Player
   */

  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerAvgAggregateOutputType = {
    id: number | null
    teamId: number | null
  }

  export type PlayerSumAggregateOutputType = {
    id: number | null
    teamId: number | null
  }

  export type PlayerMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    gamertag: string | null
    playerImage: string | null
    role: $Enums.PlayerRole | null
    teamId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PlayerMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    gamertag: string | null
    playerImage: string | null
    role: $Enums.PlayerRole | null
    teamId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PlayerCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    gamertag: number
    playerImage: number
    role: number
    teamId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type PlayerAvgAggregateInputType = {
    id?: true
    teamId?: true
  }

  export type PlayerSumAggregateInputType = {
    id?: true
    teamId?: true
  }

  export type PlayerMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    gamertag?: true
    playerImage?: true
    role?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PlayerMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    gamertag?: true
    playerImage?: true
    role?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PlayerCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    gamertag?: true
    playerImage?: true
    role?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type PlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Player to aggregate.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type PlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithAggregationInput | PlayerOrderByWithAggregationInput[]
    by: PlayerScalarFieldEnum[] | PlayerScalarFieldEnum
    having?: PlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _avg?: PlayerAvgAggregateInputType
    _sum?: PlayerSumAggregateInputType
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }

  export type PlayerGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    gamertag: string
    playerImage: string | null
    role: $Enums.PlayerRole
    teamId: number | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    gamertag?: boolean
    playerImage?: boolean
    role?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    team?: boolean | Player$teamArgs<ExtArgs>
    stats?: boolean | Player$statsArgs<ExtArgs>
    leaderboard?: boolean | Player$leaderboardArgs<ExtArgs>
    MatchMapPlayerStat?: boolean | Player$MatchMapPlayerStatArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    gamertag?: boolean
    playerImage?: boolean
    role?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    team?: boolean | Player$teamArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    gamertag?: boolean
    playerImage?: boolean
    role?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    team?: boolean | Player$teamArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    gamertag?: boolean
    playerImage?: boolean
    role?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type PlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "gamertag" | "playerImage" | "role" | "teamId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["player"]>
  export type PlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | Player$teamArgs<ExtArgs>
    stats?: boolean | Player$statsArgs<ExtArgs>
    leaderboard?: boolean | Player$leaderboardArgs<ExtArgs>
    MatchMapPlayerStat?: boolean | Player$MatchMapPlayerStatArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | Player$teamArgs<ExtArgs>
  }
  export type PlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | Player$teamArgs<ExtArgs>
  }

  export type $PlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Player"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs> | null
      stats: Prisma.$StatPayload<ExtArgs>[]
      leaderboard: Prisma.$LeaderboardPayload<ExtArgs> | null
      MatchMapPlayerStat: Prisma.$MatchMapPlayerStatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      gamertag: string
      playerImage: string | null
      role: $Enums.PlayerRole
      teamId: number | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["player"]>
    composites: {}
  }

  type PlayerGetPayload<S extends boolean | null | undefined | PlayerDefaultArgs> = $Result.GetResult<Prisma.$PlayerPayload, S>

  type PlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerCountAggregateInputType | true
    }

  export interface PlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Player'], meta: { name: 'Player' } }
    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerFindUniqueArgs>(args: SelectSubset<T, PlayerFindUniqueArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Player that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerFindFirstArgs>(args?: SelectSubset<T, PlayerFindFirstArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerWithIdOnly = await prisma.player.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerFindManyArgs>(args?: SelectSubset<T, PlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
     */
    create<T extends PlayerCreateArgs>(args: SelectSubset<T, PlayerCreateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Players.
     * @param {PlayerCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerCreateManyArgs>(args?: SelectSubset<T, PlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Players and returns the data saved in the database.
     * @param {PlayerCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
     */
    delete<T extends PlayerDeleteArgs>(args: SelectSubset<T, PlayerDeleteArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerUpdateArgs>(args: SelectSubset<T, PlayerUpdateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerDeleteManyArgs>(args?: SelectSubset<T, PlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerUpdateManyArgs>(args: SelectSubset<T, PlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players and returns the data updated in the database.
     * @param {PlayerUpdateManyAndReturnArgs} args - Arguments to update many Players.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
     */
    upsert<T extends PlayerUpsertArgs>(args: SelectSubset<T, PlayerUpsertArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayerCountArgs>(
      args?: Subset<T, PlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
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
      T extends PlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Player model
   */
  readonly fields: PlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends Player$teamArgs<ExtArgs> = {}>(args?: Subset<T, Player$teamArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    stats<T extends Player$statsArgs<ExtArgs> = {}>(args?: Subset<T, Player$statsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leaderboard<T extends Player$leaderboardArgs<ExtArgs> = {}>(args?: Subset<T, Player$leaderboardArgs<ExtArgs>>): Prisma__LeaderboardClient<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    MatchMapPlayerStat<T extends Player$MatchMapPlayerStatArgs<ExtArgs> = {}>(args?: Subset<T, Player$MatchMapPlayerStatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchMapPlayerStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Player model
   */
  interface PlayerFieldRefs {
    readonly id: FieldRef<"Player", 'Int'>
    readonly firstName: FieldRef<"Player", 'String'>
    readonly lastName: FieldRef<"Player", 'String'>
    readonly gamertag: FieldRef<"Player", 'String'>
    readonly playerImage: FieldRef<"Player", 'String'>
    readonly role: FieldRef<"Player", 'PlayerRole'>
    readonly teamId: FieldRef<"Player", 'Int'>
    readonly createdAt: FieldRef<"Player", 'DateTime'>
    readonly updatedAt: FieldRef<"Player", 'DateTime'>
    readonly deletedAt: FieldRef<"Player", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Player findUnique
   */
  export type PlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findUniqueOrThrow
   */
  export type PlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findFirst
   */
  export type PlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findFirstOrThrow
   */
  export type PlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findMany
   */
  export type PlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player create
   */
  export type PlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a Player.
     */
    data: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
  }

  /**
   * Player createMany
   */
  export type PlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player createManyAndReturn
   */
  export type PlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Player update
   */
  export type PlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a Player.
     */
    data: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
    /**
     * Choose, which Player to update.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player updateMany
   */
  export type PlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Player updateManyAndReturn
   */
  export type PlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Player upsert
   */
  export type PlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the Player to update in case it exists.
     */
    where: PlayerWhereUniqueInput
    /**
     * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
     */
    create: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
    /**
     * In case the Player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
  }

  /**
   * Player delete
   */
  export type PlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter which Player to delete.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player deleteMany
   */
  export type PlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to delete.
     */
    limit?: number
  }

  /**
   * Player.team
   */
  export type Player$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * Player.stats
   */
  export type Player$statsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stat
     */
    omit?: StatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatInclude<ExtArgs> | null
    where?: StatWhereInput
    orderBy?: StatOrderByWithRelationInput | StatOrderByWithRelationInput[]
    cursor?: StatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatScalarFieldEnum | StatScalarFieldEnum[]
  }

  /**
   * Player.leaderboard
   */
  export type Player$leaderboardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardInclude<ExtArgs> | null
    where?: LeaderboardWhereInput
  }

  /**
   * Player.MatchMapPlayerStat
   */
  export type Player$MatchMapPlayerStatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMapPlayerStat
     */
    select?: MatchMapPlayerStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMapPlayerStat
     */
    omit?: MatchMapPlayerStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapPlayerStatInclude<ExtArgs> | null
    where?: MatchMapPlayerStatWhereInput
    orderBy?: MatchMapPlayerStatOrderByWithRelationInput | MatchMapPlayerStatOrderByWithRelationInput[]
    cursor?: MatchMapPlayerStatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchMapPlayerStatScalarFieldEnum | MatchMapPlayerStatScalarFieldEnum[]
  }

  /**
   * Player without action
   */
  export type PlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    id: number | null
  }

  export type TeamSumAggregateOutputType = {
    id: number | null
  }

  export type TeamMinAggregateOutputType = {
    id: number | null
    name: string | null
    logo: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TeamMaxAggregateOutputType = {
    id: number | null
    name: string | null
    logo: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    logo: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    id?: true
  }

  export type TeamSumAggregateInputType = {
    id?: true
  }

  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: number
    name: string
    logo: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    players?: boolean | Team$playersArgs<ExtArgs>
    teamA_Matches?: boolean | Team$teamA_MatchesArgs<ExtArgs>
    teamB_Matches?: boolean | Team$teamB_MatchesArgs<ExtArgs>
    matchesWon?: boolean | Team$matchesWonArgs<ExtArgs>
    MatchMap?: boolean | Team$MatchMapArgs<ExtArgs>
    matchMapStats?: boolean | Team$matchMapStatsArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    logo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "logo" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | Team$playersArgs<ExtArgs>
    teamA_Matches?: boolean | Team$teamA_MatchesArgs<ExtArgs>
    teamB_Matches?: boolean | Team$teamB_MatchesArgs<ExtArgs>
    matchesWon?: boolean | Team$matchesWonArgs<ExtArgs>
    MatchMap?: boolean | Team$MatchMapArgs<ExtArgs>
    matchMapStats?: boolean | Team$matchMapStatsArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      players: Prisma.$PlayerPayload<ExtArgs>[]
      teamA_Matches: Prisma.$MatchPayload<ExtArgs>[]
      teamB_Matches: Prisma.$MatchPayload<ExtArgs>[]
      matchesWon: Prisma.$MatchPayload<ExtArgs>[]
      MatchMap: Prisma.$MatchMapPayload<ExtArgs>[]
      matchMapStats: Prisma.$MatchMapPlayerStatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      logo: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
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
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    players<T extends Team$playersArgs<ExtArgs> = {}>(args?: Subset<T, Team$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teamA_Matches<T extends Team$teamA_MatchesArgs<ExtArgs> = {}>(args?: Subset<T, Team$teamA_MatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teamB_Matches<T extends Team$teamB_MatchesArgs<ExtArgs> = {}>(args?: Subset<T, Team$teamB_MatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchesWon<T extends Team$matchesWonArgs<ExtArgs> = {}>(args?: Subset<T, Team$matchesWonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MatchMap<T extends Team$MatchMapArgs<ExtArgs> = {}>(args?: Subset<T, Team$MatchMapArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchMapStats<T extends Team$matchMapStatsArgs<ExtArgs> = {}>(args?: Subset<T, Team$matchMapStatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchMapPlayerStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'Int'>
    readonly name: FieldRef<"Team", 'String'>
    readonly logo: FieldRef<"Team", 'String'>
    readonly createdAt: FieldRef<"Team", 'DateTime'>
    readonly updatedAt: FieldRef<"Team", 'DateTime'>
    readonly deletedAt: FieldRef<"Team", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.players
   */
  export type Team$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    cursor?: PlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Team.teamA_Matches
   */
  export type Team$teamA_MatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Team.teamB_Matches
   */
  export type Team$teamB_MatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Team.matchesWon
   */
  export type Team$matchesWonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Team.MatchMap
   */
  export type Team$MatchMapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMap
     */
    select?: MatchMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMap
     */
    omit?: MatchMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapInclude<ExtArgs> | null
    where?: MatchMapWhereInput
    orderBy?: MatchMapOrderByWithRelationInput | MatchMapOrderByWithRelationInput[]
    cursor?: MatchMapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchMapScalarFieldEnum | MatchMapScalarFieldEnum[]
  }

  /**
   * Team.matchMapStats
   */
  export type Team$matchMapStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMapPlayerStat
     */
    select?: MatchMapPlayerStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMapPlayerStat
     */
    omit?: MatchMapPlayerStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapPlayerStatInclude<ExtArgs> | null
    where?: MatchMapPlayerStatWhereInput
    orderBy?: MatchMapPlayerStatOrderByWithRelationInput | MatchMapPlayerStatOrderByWithRelationInput[]
    cursor?: MatchMapPlayerStatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchMapPlayerStatScalarFieldEnum | MatchMapPlayerStatScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model Match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchAvgAggregateOutputType = {
    teamAId: number | null
    teamBId: number | null
    winnerId: number | null
  }

  export type MatchSumAggregateOutputType = {
    teamAId: number | null
    teamBId: number | null
    winnerId: number | null
  }

  export type MatchMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    teamAId: number | null
    teamBId: number | null
    winnerId: number | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    teamAId: number | null
    teamBId: number | null
    winnerId: number | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchCountAggregateOutputType = {
    id: number
    eventId: number
    teamAId: number
    teamBId: number
    winnerId: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MatchAvgAggregateInputType = {
    teamAId?: true
    teamBId?: true
    winnerId?: true
  }

  export type MatchSumAggregateInputType = {
    teamAId?: true
    teamBId?: true
    winnerId?: true
  }

  export type MatchMinAggregateInputType = {
    id?: true
    eventId?: true
    teamAId?: true
    teamBId?: true
    winnerId?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchMaxAggregateInputType = {
    id?: true
    eventId?: true
    teamAId?: true
    teamBId?: true
    winnerId?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchCountAggregateInputType = {
    id?: true
    eventId?: true
    teamAId?: true
    teamBId?: true
    winnerId?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Match to aggregate.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type MatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithAggregationInput | MatchOrderByWithAggregationInput[]
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum
    having?: MatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _avg?: MatchAvgAggregateInputType
    _sum?: MatchSumAggregateInputType
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }

  export type MatchGroupByOutputType = {
    id: string
    eventId: string | null
    teamAId: number
    teamBId: number
    winnerId: number | null
    date: Date
    createdAt: Date
    updatedAt: Date
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type MatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    teamAId?: boolean
    teamBId?: boolean
    winnerId?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | Match$eventArgs<ExtArgs>
    teamA?: boolean | TeamDefaultArgs<ExtArgs>
    teamB?: boolean | TeamDefaultArgs<ExtArgs>
    winner?: boolean | Match$winnerArgs<ExtArgs>
    stats?: boolean | Match$statsArgs<ExtArgs>
    MatchMap?: boolean | Match$MatchMapArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    teamAId?: boolean
    teamBId?: boolean
    winnerId?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | Match$eventArgs<ExtArgs>
    teamA?: boolean | TeamDefaultArgs<ExtArgs>
    teamB?: boolean | TeamDefaultArgs<ExtArgs>
    winner?: boolean | Match$winnerArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    teamAId?: boolean
    teamBId?: boolean
    winnerId?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | Match$eventArgs<ExtArgs>
    teamA?: boolean | TeamDefaultArgs<ExtArgs>
    teamB?: boolean | TeamDefaultArgs<ExtArgs>
    winner?: boolean | Match$winnerArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectScalar = {
    id?: boolean
    eventId?: boolean
    teamAId?: boolean
    teamBId?: boolean
    winnerId?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "teamAId" | "teamBId" | "winnerId" | "date" | "createdAt" | "updatedAt", ExtArgs["result"]["match"]>
  export type MatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | Match$eventArgs<ExtArgs>
    teamA?: boolean | TeamDefaultArgs<ExtArgs>
    teamB?: boolean | TeamDefaultArgs<ExtArgs>
    winner?: boolean | Match$winnerArgs<ExtArgs>
    stats?: boolean | Match$statsArgs<ExtArgs>
    MatchMap?: boolean | Match$MatchMapArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | Match$eventArgs<ExtArgs>
    teamA?: boolean | TeamDefaultArgs<ExtArgs>
    teamB?: boolean | TeamDefaultArgs<ExtArgs>
    winner?: boolean | Match$winnerArgs<ExtArgs>
  }
  export type MatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | Match$eventArgs<ExtArgs>
    teamA?: boolean | TeamDefaultArgs<ExtArgs>
    teamB?: boolean | TeamDefaultArgs<ExtArgs>
    winner?: boolean | Match$winnerArgs<ExtArgs>
  }

  export type $MatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Match"
    objects: {
      event: Prisma.$EventPayload<ExtArgs> | null
      teamA: Prisma.$TeamPayload<ExtArgs>
      teamB: Prisma.$TeamPayload<ExtArgs>
      winner: Prisma.$TeamPayload<ExtArgs> | null
      stats: Prisma.$StatPayload<ExtArgs>[]
      MatchMap: Prisma.$MatchMapPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string | null
      teamAId: number
      teamBId: number
      winnerId: number | null
      date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["match"]>
    composites: {}
  }

  type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = $Result.GetResult<Prisma.$MatchPayload, S>

  type MatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchCountAggregateInputType | true
    }

  export interface MatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Match'], meta: { name: 'Match' } }
    /**
     * Find zero or one Match that matches the filter.
     * @param {MatchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchFindUniqueArgs>(args: SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Match that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchFindFirstArgs>(args?: SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchWithIdOnly = await prisma.match.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchFindManyArgs>(args?: SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Match.
     * @param {MatchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
     */
    create<T extends MatchCreateArgs>(args: SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {MatchCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchCreateManyArgs>(args?: SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {MatchCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Match.
     * @param {MatchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
     */
    delete<T extends MatchDeleteArgs>(args: SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Match.
     * @param {MatchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchUpdateArgs>(args: SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {MatchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchDeleteManyArgs>(args?: SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchUpdateManyArgs>(args: SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches and returns the data updated in the database.
     * @param {MatchUpdateManyAndReturnArgs} args - Arguments to update many Matches.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.updateManyAndReturn({
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
    updateManyAndReturn<T extends MatchUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Match.
     * @param {MatchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
     */
    upsert<T extends MatchUpsertArgs>(args: SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchCountArgs>(
      args?: Subset<T, MatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchGroupByArgs} args - Group by arguments.
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
      T extends MatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchGroupByArgs['orderBy'] }
        : { orderBy?: MatchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Match model
   */
  readonly fields: MatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends Match$eventArgs<ExtArgs> = {}>(args?: Subset<T, Match$eventArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    teamA<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teamB<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    winner<T extends Match$winnerArgs<ExtArgs> = {}>(args?: Subset<T, Match$winnerArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    stats<T extends Match$statsArgs<ExtArgs> = {}>(args?: Subset<T, Match$statsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MatchMap<T extends Match$MatchMapArgs<ExtArgs> = {}>(args?: Subset<T, Match$MatchMapArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Match model
   */
  interface MatchFieldRefs {
    readonly id: FieldRef<"Match", 'String'>
    readonly eventId: FieldRef<"Match", 'String'>
    readonly teamAId: FieldRef<"Match", 'Int'>
    readonly teamBId: FieldRef<"Match", 'Int'>
    readonly winnerId: FieldRef<"Match", 'Int'>
    readonly date: FieldRef<"Match", 'DateTime'>
    readonly createdAt: FieldRef<"Match", 'DateTime'>
    readonly updatedAt: FieldRef<"Match", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Match findUnique
   */
  export type MatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findUniqueOrThrow
   */
  export type MatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findFirst
   */
  export type MatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findFirstOrThrow
   */
  export type MatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findMany
   */
  export type MatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match create
   */
  export type MatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Match.
     */
    data: XOR<MatchCreateInput, MatchUncheckedCreateInput>
  }

  /**
   * Match createMany
   */
  export type MatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Match createManyAndReturn
   */
  export type MatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match update
   */
  export type MatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Match.
     */
    data: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
    /**
     * Choose, which Match to update.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match updateMany
   */
  export type MatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
  }

  /**
   * Match updateManyAndReturn
   */
  export type MatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match upsert
   */
  export type MatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Match to update in case it exists.
     */
    where: MatchWhereUniqueInput
    /**
     * In case the Match found by the `where` argument doesn't exist, create a new Match with this data.
     */
    create: XOR<MatchCreateInput, MatchUncheckedCreateInput>
    /**
     * In case the Match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
  }

  /**
   * Match delete
   */
  export type MatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter which Match to delete.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match deleteMany
   */
  export type MatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to delete.
     */
    limit?: number
  }

  /**
   * Match.event
   */
  export type Match$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
  }

  /**
   * Match.winner
   */
  export type Match$winnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * Match.stats
   */
  export type Match$statsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stat
     */
    omit?: StatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatInclude<ExtArgs> | null
    where?: StatWhereInput
    orderBy?: StatOrderByWithRelationInput | StatOrderByWithRelationInput[]
    cursor?: StatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatScalarFieldEnum | StatScalarFieldEnum[]
  }

  /**
   * Match.MatchMap
   */
  export type Match$MatchMapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMap
     */
    select?: MatchMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMap
     */
    omit?: MatchMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapInclude<ExtArgs> | null
    where?: MatchMapWhereInput
    orderBy?: MatchMapOrderByWithRelationInput | MatchMapOrderByWithRelationInput[]
    cursor?: MatchMapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchMapScalarFieldEnum | MatchMapScalarFieldEnum[]
  }

  /**
   * Match without action
   */
  export type MatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    name: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    name: string
    startDate: Date
    endDate: Date
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    matches?: boolean | Event$matchesArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "startDate" | "endDate" | "createdAt" | "updatedAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches?: boolean | Event$matchesArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      matches: Prisma.$MatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      startDate: Date
      endDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matches<T extends Event$matchesArgs<ExtArgs> = {}>(args?: Subset<T, Event$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly name: FieldRef<"Event", 'String'>
    readonly startDate: FieldRef<"Event", 'DateTime'>
    readonly endDate: FieldRef<"Event", 'DateTime'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.matches
   */
  export type Event$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Stat
   */

  export type AggregateStat = {
    _count: StatCountAggregateOutputType | null
    _avg: StatAvgAggregateOutputType | null
    _sum: StatSumAggregateOutputType | null
    _min: StatMinAggregateOutputType | null
    _max: StatMaxAggregateOutputType | null
  }

  export type StatAvgAggregateOutputType = {
    playerId: number | null
    kills: number | null
    deaths: number | null
    assists: number | null
    damage: number | null
    objective: number | null
    score: number | null
  }

  export type StatSumAggregateOutputType = {
    playerId: number | null
    kills: number | null
    deaths: number | null
    assists: number | null
    damage: number | null
    objective: number | null
    score: number | null
  }

  export type StatMinAggregateOutputType = {
    id: string | null
    playerId: number | null
    matchMapId: string | null
    kills: number | null
    deaths: number | null
    assists: number | null
    damage: number | null
    objective: number | null
    score: number | null
    matchId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StatMaxAggregateOutputType = {
    id: string | null
    playerId: number | null
    matchMapId: string | null
    kills: number | null
    deaths: number | null
    assists: number | null
    damage: number | null
    objective: number | null
    score: number | null
    matchId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StatCountAggregateOutputType = {
    id: number
    playerId: number
    matchMapId: number
    kills: number
    deaths: number
    assists: number
    damage: number
    objective: number
    score: number
    matchId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StatAvgAggregateInputType = {
    playerId?: true
    kills?: true
    deaths?: true
    assists?: true
    damage?: true
    objective?: true
    score?: true
  }

  export type StatSumAggregateInputType = {
    playerId?: true
    kills?: true
    deaths?: true
    assists?: true
    damage?: true
    objective?: true
    score?: true
  }

  export type StatMinAggregateInputType = {
    id?: true
    playerId?: true
    matchMapId?: true
    kills?: true
    deaths?: true
    assists?: true
    damage?: true
    objective?: true
    score?: true
    matchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StatMaxAggregateInputType = {
    id?: true
    playerId?: true
    matchMapId?: true
    kills?: true
    deaths?: true
    assists?: true
    damage?: true
    objective?: true
    score?: true
    matchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StatCountAggregateInputType = {
    id?: true
    playerId?: true
    matchMapId?: true
    kills?: true
    deaths?: true
    assists?: true
    damage?: true
    objective?: true
    score?: true
    matchId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stat to aggregate.
     */
    where?: StatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatOrderByWithRelationInput | StatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stats
    **/
    _count?: true | StatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatMaxAggregateInputType
  }

  export type GetStatAggregateType<T extends StatAggregateArgs> = {
        [P in keyof T & keyof AggregateStat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStat[P]>
      : GetScalarType<T[P], AggregateStat[P]>
  }




  export type StatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatWhereInput
    orderBy?: StatOrderByWithAggregationInput | StatOrderByWithAggregationInput[]
    by: StatScalarFieldEnum[] | StatScalarFieldEnum
    having?: StatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatCountAggregateInputType | true
    _avg?: StatAvgAggregateInputType
    _sum?: StatSumAggregateInputType
    _min?: StatMinAggregateInputType
    _max?: StatMaxAggregateInputType
  }

  export type StatGroupByOutputType = {
    id: string
    playerId: number
    matchMapId: string
    kills: number
    deaths: number
    assists: number
    damage: number
    objective: number
    score: number
    matchId: string | null
    createdAt: Date
    updatedAt: Date
    _count: StatCountAggregateOutputType | null
    _avg: StatAvgAggregateOutputType | null
    _sum: StatSumAggregateOutputType | null
    _min: StatMinAggregateOutputType | null
    _max: StatMaxAggregateOutputType | null
  }

  type GetStatGroupByPayload<T extends StatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatGroupByOutputType[P]>
            : GetScalarType<T[P], StatGroupByOutputType[P]>
        }
      >
    >


  export type StatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    matchMapId?: boolean
    kills?: boolean
    deaths?: boolean
    assists?: boolean
    damage?: boolean
    objective?: boolean
    score?: boolean
    matchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    matchMap?: boolean | MatchMapDefaultArgs<ExtArgs>
    Match?: boolean | Stat$MatchArgs<ExtArgs>
  }, ExtArgs["result"]["stat"]>

  export type StatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    matchMapId?: boolean
    kills?: boolean
    deaths?: boolean
    assists?: boolean
    damage?: boolean
    objective?: boolean
    score?: boolean
    matchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    matchMap?: boolean | MatchMapDefaultArgs<ExtArgs>
    Match?: boolean | Stat$MatchArgs<ExtArgs>
  }, ExtArgs["result"]["stat"]>

  export type StatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    matchMapId?: boolean
    kills?: boolean
    deaths?: boolean
    assists?: boolean
    damage?: boolean
    objective?: boolean
    score?: boolean
    matchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    matchMap?: boolean | MatchMapDefaultArgs<ExtArgs>
    Match?: boolean | Stat$MatchArgs<ExtArgs>
  }, ExtArgs["result"]["stat"]>

  export type StatSelectScalar = {
    id?: boolean
    playerId?: boolean
    matchMapId?: boolean
    kills?: boolean
    deaths?: boolean
    assists?: boolean
    damage?: boolean
    objective?: boolean
    score?: boolean
    matchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerId" | "matchMapId" | "kills" | "deaths" | "assists" | "damage" | "objective" | "score" | "matchId" | "createdAt" | "updatedAt", ExtArgs["result"]["stat"]>
  export type StatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    matchMap?: boolean | MatchMapDefaultArgs<ExtArgs>
    Match?: boolean | Stat$MatchArgs<ExtArgs>
  }
  export type StatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    matchMap?: boolean | MatchMapDefaultArgs<ExtArgs>
    Match?: boolean | Stat$MatchArgs<ExtArgs>
  }
  export type StatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    matchMap?: boolean | MatchMapDefaultArgs<ExtArgs>
    Match?: boolean | Stat$MatchArgs<ExtArgs>
  }

  export type $StatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stat"
    objects: {
      player: Prisma.$PlayerPayload<ExtArgs>
      matchMap: Prisma.$MatchMapPayload<ExtArgs>
      Match: Prisma.$MatchPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playerId: number
      matchMapId: string
      kills: number
      deaths: number
      assists: number
      damage: number
      objective: number
      score: number
      matchId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["stat"]>
    composites: {}
  }

  type StatGetPayload<S extends boolean | null | undefined | StatDefaultArgs> = $Result.GetResult<Prisma.$StatPayload, S>

  type StatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatCountAggregateInputType | true
    }

  export interface StatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stat'], meta: { name: 'Stat' } }
    /**
     * Find zero or one Stat that matches the filter.
     * @param {StatFindUniqueArgs} args - Arguments to find a Stat
     * @example
     * // Get one Stat
     * const stat = await prisma.stat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatFindUniqueArgs>(args: SelectSubset<T, StatFindUniqueArgs<ExtArgs>>): Prisma__StatClient<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatFindUniqueOrThrowArgs} args - Arguments to find a Stat
     * @example
     * // Get one Stat
     * const stat = await prisma.stat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatFindUniqueOrThrowArgs>(args: SelectSubset<T, StatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatClient<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatFindFirstArgs} args - Arguments to find a Stat
     * @example
     * // Get one Stat
     * const stat = await prisma.stat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatFindFirstArgs>(args?: SelectSubset<T, StatFindFirstArgs<ExtArgs>>): Prisma__StatClient<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatFindFirstOrThrowArgs} args - Arguments to find a Stat
     * @example
     * // Get one Stat
     * const stat = await prisma.stat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatFindFirstOrThrowArgs>(args?: SelectSubset<T, StatFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatClient<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stats
     * const stats = await prisma.stat.findMany()
     * 
     * // Get first 10 Stats
     * const stats = await prisma.stat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statWithIdOnly = await prisma.stat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatFindManyArgs>(args?: SelectSubset<T, StatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stat.
     * @param {StatCreateArgs} args - Arguments to create a Stat.
     * @example
     * // Create one Stat
     * const Stat = await prisma.stat.create({
     *   data: {
     *     // ... data to create a Stat
     *   }
     * })
     * 
     */
    create<T extends StatCreateArgs>(args: SelectSubset<T, StatCreateArgs<ExtArgs>>): Prisma__StatClient<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stats.
     * @param {StatCreateManyArgs} args - Arguments to create many Stats.
     * @example
     * // Create many Stats
     * const stat = await prisma.stat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatCreateManyArgs>(args?: SelectSubset<T, StatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stats and returns the data saved in the database.
     * @param {StatCreateManyAndReturnArgs} args - Arguments to create many Stats.
     * @example
     * // Create many Stats
     * const stat = await prisma.stat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stats and only return the `id`
     * const statWithIdOnly = await prisma.stat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatCreateManyAndReturnArgs>(args?: SelectSubset<T, StatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stat.
     * @param {StatDeleteArgs} args - Arguments to delete one Stat.
     * @example
     * // Delete one Stat
     * const Stat = await prisma.stat.delete({
     *   where: {
     *     // ... filter to delete one Stat
     *   }
     * })
     * 
     */
    delete<T extends StatDeleteArgs>(args: SelectSubset<T, StatDeleteArgs<ExtArgs>>): Prisma__StatClient<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stat.
     * @param {StatUpdateArgs} args - Arguments to update one Stat.
     * @example
     * // Update one Stat
     * const stat = await prisma.stat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatUpdateArgs>(args: SelectSubset<T, StatUpdateArgs<ExtArgs>>): Prisma__StatClient<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stats.
     * @param {StatDeleteManyArgs} args - Arguments to filter Stats to delete.
     * @example
     * // Delete a few Stats
     * const { count } = await prisma.stat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatDeleteManyArgs>(args?: SelectSubset<T, StatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stats
     * const stat = await prisma.stat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatUpdateManyArgs>(args: SelectSubset<T, StatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stats and returns the data updated in the database.
     * @param {StatUpdateManyAndReturnArgs} args - Arguments to update many Stats.
     * @example
     * // Update many Stats
     * const stat = await prisma.stat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stats and only return the `id`
     * const statWithIdOnly = await prisma.stat.updateManyAndReturn({
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
    updateManyAndReturn<T extends StatUpdateManyAndReturnArgs>(args: SelectSubset<T, StatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stat.
     * @param {StatUpsertArgs} args - Arguments to update or create a Stat.
     * @example
     * // Update or create a Stat
     * const stat = await prisma.stat.upsert({
     *   create: {
     *     // ... data to create a Stat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stat we want to update
     *   }
     * })
     */
    upsert<T extends StatUpsertArgs>(args: SelectSubset<T, StatUpsertArgs<ExtArgs>>): Prisma__StatClient<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatCountArgs} args - Arguments to filter Stats to count.
     * @example
     * // Count the number of Stats
     * const count = await prisma.stat.count({
     *   where: {
     *     // ... the filter for the Stats we want to count
     *   }
     * })
    **/
    count<T extends StatCountArgs>(
      args?: Subset<T, StatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StatAggregateArgs>(args: Subset<T, StatAggregateArgs>): Prisma.PrismaPromise<GetStatAggregateType<T>>

    /**
     * Group by Stat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatGroupByArgs} args - Group by arguments.
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
      T extends StatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatGroupByArgs['orderBy'] }
        : { orderBy?: StatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stat model
   */
  readonly fields: StatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    matchMap<T extends MatchMapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchMapDefaultArgs<ExtArgs>>): Prisma__MatchMapClient<$Result.GetResult<Prisma.$MatchMapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Match<T extends Stat$MatchArgs<ExtArgs> = {}>(args?: Subset<T, Stat$MatchArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Stat model
   */
  interface StatFieldRefs {
    readonly id: FieldRef<"Stat", 'String'>
    readonly playerId: FieldRef<"Stat", 'Int'>
    readonly matchMapId: FieldRef<"Stat", 'String'>
    readonly kills: FieldRef<"Stat", 'Int'>
    readonly deaths: FieldRef<"Stat", 'Int'>
    readonly assists: FieldRef<"Stat", 'Int'>
    readonly damage: FieldRef<"Stat", 'Int'>
    readonly objective: FieldRef<"Stat", 'Int'>
    readonly score: FieldRef<"Stat", 'Int'>
    readonly matchId: FieldRef<"Stat", 'String'>
    readonly createdAt: FieldRef<"Stat", 'DateTime'>
    readonly updatedAt: FieldRef<"Stat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Stat findUnique
   */
  export type StatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stat
     */
    omit?: StatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatInclude<ExtArgs> | null
    /**
     * Filter, which Stat to fetch.
     */
    where: StatWhereUniqueInput
  }

  /**
   * Stat findUniqueOrThrow
   */
  export type StatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stat
     */
    omit?: StatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatInclude<ExtArgs> | null
    /**
     * Filter, which Stat to fetch.
     */
    where: StatWhereUniqueInput
  }

  /**
   * Stat findFirst
   */
  export type StatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stat
     */
    omit?: StatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatInclude<ExtArgs> | null
    /**
     * Filter, which Stat to fetch.
     */
    where?: StatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatOrderByWithRelationInput | StatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stats.
     */
    cursor?: StatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stats.
     */
    distinct?: StatScalarFieldEnum | StatScalarFieldEnum[]
  }

  /**
   * Stat findFirstOrThrow
   */
  export type StatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stat
     */
    omit?: StatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatInclude<ExtArgs> | null
    /**
     * Filter, which Stat to fetch.
     */
    where?: StatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatOrderByWithRelationInput | StatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stats.
     */
    cursor?: StatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stats.
     */
    distinct?: StatScalarFieldEnum | StatScalarFieldEnum[]
  }

  /**
   * Stat findMany
   */
  export type StatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stat
     */
    omit?: StatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatInclude<ExtArgs> | null
    /**
     * Filter, which Stats to fetch.
     */
    where?: StatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatOrderByWithRelationInput | StatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stats.
     */
    cursor?: StatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     */
    skip?: number
    distinct?: StatScalarFieldEnum | StatScalarFieldEnum[]
  }

  /**
   * Stat create
   */
  export type StatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stat
     */
    omit?: StatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatInclude<ExtArgs> | null
    /**
     * The data needed to create a Stat.
     */
    data: XOR<StatCreateInput, StatUncheckedCreateInput>
  }

  /**
   * Stat createMany
   */
  export type StatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stats.
     */
    data: StatCreateManyInput | StatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stat createManyAndReturn
   */
  export type StatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stat
     */
    omit?: StatOmit<ExtArgs> | null
    /**
     * The data used to create many Stats.
     */
    data: StatCreateManyInput | StatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stat update
   */
  export type StatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stat
     */
    omit?: StatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatInclude<ExtArgs> | null
    /**
     * The data needed to update a Stat.
     */
    data: XOR<StatUpdateInput, StatUncheckedUpdateInput>
    /**
     * Choose, which Stat to update.
     */
    where: StatWhereUniqueInput
  }

  /**
   * Stat updateMany
   */
  export type StatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stats.
     */
    data: XOR<StatUpdateManyMutationInput, StatUncheckedUpdateManyInput>
    /**
     * Filter which Stats to update
     */
    where?: StatWhereInput
    /**
     * Limit how many Stats to update.
     */
    limit?: number
  }

  /**
   * Stat updateManyAndReturn
   */
  export type StatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stat
     */
    omit?: StatOmit<ExtArgs> | null
    /**
     * The data used to update Stats.
     */
    data: XOR<StatUpdateManyMutationInput, StatUncheckedUpdateManyInput>
    /**
     * Filter which Stats to update
     */
    where?: StatWhereInput
    /**
     * Limit how many Stats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stat upsert
   */
  export type StatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stat
     */
    omit?: StatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatInclude<ExtArgs> | null
    /**
     * The filter to search for the Stat to update in case it exists.
     */
    where: StatWhereUniqueInput
    /**
     * In case the Stat found by the `where` argument doesn't exist, create a new Stat with this data.
     */
    create: XOR<StatCreateInput, StatUncheckedCreateInput>
    /**
     * In case the Stat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatUpdateInput, StatUncheckedUpdateInput>
  }

  /**
   * Stat delete
   */
  export type StatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stat
     */
    omit?: StatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatInclude<ExtArgs> | null
    /**
     * Filter which Stat to delete.
     */
    where: StatWhereUniqueInput
  }

  /**
   * Stat deleteMany
   */
  export type StatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stats to delete
     */
    where?: StatWhereInput
    /**
     * Limit how many Stats to delete.
     */
    limit?: number
  }

  /**
   * Stat.Match
   */
  export type Stat$MatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
  }

  /**
   * Stat without action
   */
  export type StatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stat
     */
    omit?: StatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatInclude<ExtArgs> | null
  }


  /**
   * Model Leaderboard
   */

  export type AggregateLeaderboard = {
    _count: LeaderboardCountAggregateOutputType | null
    _avg: LeaderboardAvgAggregateOutputType | null
    _sum: LeaderboardSumAggregateOutputType | null
    _min: LeaderboardMinAggregateOutputType | null
    _max: LeaderboardMaxAggregateOutputType | null
  }

  export type LeaderboardAvgAggregateOutputType = {
    playerId: number | null
    rank: number | null
    score: number | null
  }

  export type LeaderboardSumAggregateOutputType = {
    playerId: number | null
    rank: number | null
    score: number | null
  }

  export type LeaderboardMinAggregateOutputType = {
    id: string | null
    playerId: number | null
    rank: number | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeaderboardMaxAggregateOutputType = {
    id: string | null
    playerId: number | null
    rank: number | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeaderboardCountAggregateOutputType = {
    id: number
    playerId: number
    rank: number
    score: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LeaderboardAvgAggregateInputType = {
    playerId?: true
    rank?: true
    score?: true
  }

  export type LeaderboardSumAggregateInputType = {
    playerId?: true
    rank?: true
    score?: true
  }

  export type LeaderboardMinAggregateInputType = {
    id?: true
    playerId?: true
    rank?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeaderboardMaxAggregateInputType = {
    id?: true
    playerId?: true
    rank?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeaderboardCountAggregateInputType = {
    id?: true
    playerId?: true
    rank?: true
    score?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LeaderboardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leaderboard to aggregate.
     */
    where?: LeaderboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaderboards to fetch.
     */
    orderBy?: LeaderboardOrderByWithRelationInput | LeaderboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaderboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaderboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaderboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leaderboards
    **/
    _count?: true | LeaderboardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeaderboardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeaderboardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaderboardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaderboardMaxAggregateInputType
  }

  export type GetLeaderboardAggregateType<T extends LeaderboardAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaderboard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaderboard[P]>
      : GetScalarType<T[P], AggregateLeaderboard[P]>
  }




  export type LeaderboardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaderboardWhereInput
    orderBy?: LeaderboardOrderByWithAggregationInput | LeaderboardOrderByWithAggregationInput[]
    by: LeaderboardScalarFieldEnum[] | LeaderboardScalarFieldEnum
    having?: LeaderboardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaderboardCountAggregateInputType | true
    _avg?: LeaderboardAvgAggregateInputType
    _sum?: LeaderboardSumAggregateInputType
    _min?: LeaderboardMinAggregateInputType
    _max?: LeaderboardMaxAggregateInputType
  }

  export type LeaderboardGroupByOutputType = {
    id: string
    playerId: number
    rank: number
    score: number
    createdAt: Date
    updatedAt: Date
    _count: LeaderboardCountAggregateOutputType | null
    _avg: LeaderboardAvgAggregateOutputType | null
    _sum: LeaderboardSumAggregateOutputType | null
    _min: LeaderboardMinAggregateOutputType | null
    _max: LeaderboardMaxAggregateOutputType | null
  }

  type GetLeaderboardGroupByPayload<T extends LeaderboardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaderboardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaderboardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaderboardGroupByOutputType[P]>
            : GetScalarType<T[P], LeaderboardGroupByOutputType[P]>
        }
      >
    >


  export type LeaderboardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    rank?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaderboard"]>

  export type LeaderboardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    rank?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaderboard"]>

  export type LeaderboardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    rank?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaderboard"]>

  export type LeaderboardSelectScalar = {
    id?: boolean
    playerId?: boolean
    rank?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LeaderboardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerId" | "rank" | "score" | "createdAt" | "updatedAt", ExtArgs["result"]["leaderboard"]>
  export type LeaderboardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type LeaderboardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type LeaderboardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }

  export type $LeaderboardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Leaderboard"
    objects: {
      player: Prisma.$PlayerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playerId: number
      rank: number
      score: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["leaderboard"]>
    composites: {}
  }

  type LeaderboardGetPayload<S extends boolean | null | undefined | LeaderboardDefaultArgs> = $Result.GetResult<Prisma.$LeaderboardPayload, S>

  type LeaderboardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaderboardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaderboardCountAggregateInputType | true
    }

  export interface LeaderboardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Leaderboard'], meta: { name: 'Leaderboard' } }
    /**
     * Find zero or one Leaderboard that matches the filter.
     * @param {LeaderboardFindUniqueArgs} args - Arguments to find a Leaderboard
     * @example
     * // Get one Leaderboard
     * const leaderboard = await prisma.leaderboard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaderboardFindUniqueArgs>(args: SelectSubset<T, LeaderboardFindUniqueArgs<ExtArgs>>): Prisma__LeaderboardClient<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leaderboard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaderboardFindUniqueOrThrowArgs} args - Arguments to find a Leaderboard
     * @example
     * // Get one Leaderboard
     * const leaderboard = await prisma.leaderboard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaderboardFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaderboardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaderboardClient<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leaderboard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardFindFirstArgs} args - Arguments to find a Leaderboard
     * @example
     * // Get one Leaderboard
     * const leaderboard = await prisma.leaderboard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaderboardFindFirstArgs>(args?: SelectSubset<T, LeaderboardFindFirstArgs<ExtArgs>>): Prisma__LeaderboardClient<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leaderboard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardFindFirstOrThrowArgs} args - Arguments to find a Leaderboard
     * @example
     * // Get one Leaderboard
     * const leaderboard = await prisma.leaderboard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaderboardFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaderboardFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaderboardClient<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leaderboards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leaderboards
     * const leaderboards = await prisma.leaderboard.findMany()
     * 
     * // Get first 10 Leaderboards
     * const leaderboards = await prisma.leaderboard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaderboardWithIdOnly = await prisma.leaderboard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaderboardFindManyArgs>(args?: SelectSubset<T, LeaderboardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leaderboard.
     * @param {LeaderboardCreateArgs} args - Arguments to create a Leaderboard.
     * @example
     * // Create one Leaderboard
     * const Leaderboard = await prisma.leaderboard.create({
     *   data: {
     *     // ... data to create a Leaderboard
     *   }
     * })
     * 
     */
    create<T extends LeaderboardCreateArgs>(args: SelectSubset<T, LeaderboardCreateArgs<ExtArgs>>): Prisma__LeaderboardClient<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leaderboards.
     * @param {LeaderboardCreateManyArgs} args - Arguments to create many Leaderboards.
     * @example
     * // Create many Leaderboards
     * const leaderboard = await prisma.leaderboard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaderboardCreateManyArgs>(args?: SelectSubset<T, LeaderboardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leaderboards and returns the data saved in the database.
     * @param {LeaderboardCreateManyAndReturnArgs} args - Arguments to create many Leaderboards.
     * @example
     * // Create many Leaderboards
     * const leaderboard = await prisma.leaderboard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leaderboards and only return the `id`
     * const leaderboardWithIdOnly = await prisma.leaderboard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaderboardCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaderboardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leaderboard.
     * @param {LeaderboardDeleteArgs} args - Arguments to delete one Leaderboard.
     * @example
     * // Delete one Leaderboard
     * const Leaderboard = await prisma.leaderboard.delete({
     *   where: {
     *     // ... filter to delete one Leaderboard
     *   }
     * })
     * 
     */
    delete<T extends LeaderboardDeleteArgs>(args: SelectSubset<T, LeaderboardDeleteArgs<ExtArgs>>): Prisma__LeaderboardClient<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leaderboard.
     * @param {LeaderboardUpdateArgs} args - Arguments to update one Leaderboard.
     * @example
     * // Update one Leaderboard
     * const leaderboard = await prisma.leaderboard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaderboardUpdateArgs>(args: SelectSubset<T, LeaderboardUpdateArgs<ExtArgs>>): Prisma__LeaderboardClient<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leaderboards.
     * @param {LeaderboardDeleteManyArgs} args - Arguments to filter Leaderboards to delete.
     * @example
     * // Delete a few Leaderboards
     * const { count } = await prisma.leaderboard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaderboardDeleteManyArgs>(args?: SelectSubset<T, LeaderboardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leaderboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leaderboards
     * const leaderboard = await prisma.leaderboard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaderboardUpdateManyArgs>(args: SelectSubset<T, LeaderboardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leaderboards and returns the data updated in the database.
     * @param {LeaderboardUpdateManyAndReturnArgs} args - Arguments to update many Leaderboards.
     * @example
     * // Update many Leaderboards
     * const leaderboard = await prisma.leaderboard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leaderboards and only return the `id`
     * const leaderboardWithIdOnly = await prisma.leaderboard.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeaderboardUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaderboardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leaderboard.
     * @param {LeaderboardUpsertArgs} args - Arguments to update or create a Leaderboard.
     * @example
     * // Update or create a Leaderboard
     * const leaderboard = await prisma.leaderboard.upsert({
     *   create: {
     *     // ... data to create a Leaderboard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leaderboard we want to update
     *   }
     * })
     */
    upsert<T extends LeaderboardUpsertArgs>(args: SelectSubset<T, LeaderboardUpsertArgs<ExtArgs>>): Prisma__LeaderboardClient<$Result.GetResult<Prisma.$LeaderboardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leaderboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardCountArgs} args - Arguments to filter Leaderboards to count.
     * @example
     * // Count the number of Leaderboards
     * const count = await prisma.leaderboard.count({
     *   where: {
     *     // ... the filter for the Leaderboards we want to count
     *   }
     * })
    **/
    count<T extends LeaderboardCountArgs>(
      args?: Subset<T, LeaderboardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaderboardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leaderboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeaderboardAggregateArgs>(args: Subset<T, LeaderboardAggregateArgs>): Prisma.PrismaPromise<GetLeaderboardAggregateType<T>>

    /**
     * Group by Leaderboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardGroupByArgs} args - Group by arguments.
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
      T extends LeaderboardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaderboardGroupByArgs['orderBy'] }
        : { orderBy?: LeaderboardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeaderboardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaderboardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Leaderboard model
   */
  readonly fields: LeaderboardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Leaderboard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaderboardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Leaderboard model
   */
  interface LeaderboardFieldRefs {
    readonly id: FieldRef<"Leaderboard", 'String'>
    readonly playerId: FieldRef<"Leaderboard", 'Int'>
    readonly rank: FieldRef<"Leaderboard", 'Int'>
    readonly score: FieldRef<"Leaderboard", 'Int'>
    readonly createdAt: FieldRef<"Leaderboard", 'DateTime'>
    readonly updatedAt: FieldRef<"Leaderboard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Leaderboard findUnique
   */
  export type LeaderboardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardInclude<ExtArgs> | null
    /**
     * Filter, which Leaderboard to fetch.
     */
    where: LeaderboardWhereUniqueInput
  }

  /**
   * Leaderboard findUniqueOrThrow
   */
  export type LeaderboardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardInclude<ExtArgs> | null
    /**
     * Filter, which Leaderboard to fetch.
     */
    where: LeaderboardWhereUniqueInput
  }

  /**
   * Leaderboard findFirst
   */
  export type LeaderboardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardInclude<ExtArgs> | null
    /**
     * Filter, which Leaderboard to fetch.
     */
    where?: LeaderboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaderboards to fetch.
     */
    orderBy?: LeaderboardOrderByWithRelationInput | LeaderboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leaderboards.
     */
    cursor?: LeaderboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaderboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaderboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leaderboards.
     */
    distinct?: LeaderboardScalarFieldEnum | LeaderboardScalarFieldEnum[]
  }

  /**
   * Leaderboard findFirstOrThrow
   */
  export type LeaderboardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardInclude<ExtArgs> | null
    /**
     * Filter, which Leaderboard to fetch.
     */
    where?: LeaderboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaderboards to fetch.
     */
    orderBy?: LeaderboardOrderByWithRelationInput | LeaderboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leaderboards.
     */
    cursor?: LeaderboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaderboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaderboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leaderboards.
     */
    distinct?: LeaderboardScalarFieldEnum | LeaderboardScalarFieldEnum[]
  }

  /**
   * Leaderboard findMany
   */
  export type LeaderboardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardInclude<ExtArgs> | null
    /**
     * Filter, which Leaderboards to fetch.
     */
    where?: LeaderboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaderboards to fetch.
     */
    orderBy?: LeaderboardOrderByWithRelationInput | LeaderboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leaderboards.
     */
    cursor?: LeaderboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaderboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaderboards.
     */
    skip?: number
    distinct?: LeaderboardScalarFieldEnum | LeaderboardScalarFieldEnum[]
  }

  /**
   * Leaderboard create
   */
  export type LeaderboardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardInclude<ExtArgs> | null
    /**
     * The data needed to create a Leaderboard.
     */
    data: XOR<LeaderboardCreateInput, LeaderboardUncheckedCreateInput>
  }

  /**
   * Leaderboard createMany
   */
  export type LeaderboardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leaderboards.
     */
    data: LeaderboardCreateManyInput | LeaderboardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Leaderboard createManyAndReturn
   */
  export type LeaderboardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * The data used to create many Leaderboards.
     */
    data: LeaderboardCreateManyInput | LeaderboardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Leaderboard update
   */
  export type LeaderboardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardInclude<ExtArgs> | null
    /**
     * The data needed to update a Leaderboard.
     */
    data: XOR<LeaderboardUpdateInput, LeaderboardUncheckedUpdateInput>
    /**
     * Choose, which Leaderboard to update.
     */
    where: LeaderboardWhereUniqueInput
  }

  /**
   * Leaderboard updateMany
   */
  export type LeaderboardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leaderboards.
     */
    data: XOR<LeaderboardUpdateManyMutationInput, LeaderboardUncheckedUpdateManyInput>
    /**
     * Filter which Leaderboards to update
     */
    where?: LeaderboardWhereInput
    /**
     * Limit how many Leaderboards to update.
     */
    limit?: number
  }

  /**
   * Leaderboard updateManyAndReturn
   */
  export type LeaderboardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * The data used to update Leaderboards.
     */
    data: XOR<LeaderboardUpdateManyMutationInput, LeaderboardUncheckedUpdateManyInput>
    /**
     * Filter which Leaderboards to update
     */
    where?: LeaderboardWhereInput
    /**
     * Limit how many Leaderboards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Leaderboard upsert
   */
  export type LeaderboardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardInclude<ExtArgs> | null
    /**
     * The filter to search for the Leaderboard to update in case it exists.
     */
    where: LeaderboardWhereUniqueInput
    /**
     * In case the Leaderboard found by the `where` argument doesn't exist, create a new Leaderboard with this data.
     */
    create: XOR<LeaderboardCreateInput, LeaderboardUncheckedCreateInput>
    /**
     * In case the Leaderboard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaderboardUpdateInput, LeaderboardUncheckedUpdateInput>
  }

  /**
   * Leaderboard delete
   */
  export type LeaderboardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardInclude<ExtArgs> | null
    /**
     * Filter which Leaderboard to delete.
     */
    where: LeaderboardWhereUniqueInput
  }

  /**
   * Leaderboard deleteMany
   */
  export type LeaderboardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leaderboards to delete
     */
    where?: LeaderboardWhereInput
    /**
     * Limit how many Leaderboards to delete.
     */
    limit?: number
  }

  /**
   * Leaderboard without action
   */
  export type LeaderboardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaderboard
     */
    select?: LeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaderboard
     */
    omit?: LeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardInclude<ExtArgs> | null
  }


  /**
   * Model GameMode
   */

  export type AggregateGameMode = {
    _count: GameModeCountAggregateOutputType | null
    _avg: GameModeAvgAggregateOutputType | null
    _sum: GameModeSumAggregateOutputType | null
    _min: GameModeMinAggregateOutputType | null
    _max: GameModeMaxAggregateOutputType | null
  }

  export type GameModeAvgAggregateOutputType = {
    id: number | null
  }

  export type GameModeSumAggregateOutputType = {
    id: number | null
  }

  export type GameModeMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameModeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameModeCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameModeAvgAggregateInputType = {
    id?: true
  }

  export type GameModeSumAggregateInputType = {
    id?: true
  }

  export type GameModeMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameModeMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameModeCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameModeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameMode to aggregate.
     */
    where?: GameModeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameModes to fetch.
     */
    orderBy?: GameModeOrderByWithRelationInput | GameModeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameModeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameModes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameModes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameModes
    **/
    _count?: true | GameModeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameModeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameModeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameModeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameModeMaxAggregateInputType
  }

  export type GetGameModeAggregateType<T extends GameModeAggregateArgs> = {
        [P in keyof T & keyof AggregateGameMode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameMode[P]>
      : GetScalarType<T[P], AggregateGameMode[P]>
  }




  export type GameModeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameModeWhereInput
    orderBy?: GameModeOrderByWithAggregationInput | GameModeOrderByWithAggregationInput[]
    by: GameModeScalarFieldEnum[] | GameModeScalarFieldEnum
    having?: GameModeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameModeCountAggregateInputType | true
    _avg?: GameModeAvgAggregateInputType
    _sum?: GameModeSumAggregateInputType
    _min?: GameModeMinAggregateInputType
    _max?: GameModeMaxAggregateInputType
  }

  export type GameModeGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: GameModeCountAggregateOutputType | null
    _avg: GameModeAvgAggregateOutputType | null
    _sum: GameModeSumAggregateOutputType | null
    _min: GameModeMinAggregateOutputType | null
    _max: GameModeMaxAggregateOutputType | null
  }

  type GetGameModeGroupByPayload<T extends GameModeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameModeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameModeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameModeGroupByOutputType[P]>
            : GetScalarType<T[P], GameModeGroupByOutputType[P]>
        }
      >
    >


  export type GameModeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    maps?: boolean | GameMode$mapsArgs<ExtArgs>
    MatchMap?: boolean | GameMode$MatchMapArgs<ExtArgs>
    _count?: boolean | GameModeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameMode"]>

  export type GameModeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gameMode"]>

  export type GameModeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gameMode"]>

  export type GameModeSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GameModeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["gameMode"]>
  export type GameModeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maps?: boolean | GameMode$mapsArgs<ExtArgs>
    MatchMap?: boolean | GameMode$MatchMapArgs<ExtArgs>
    _count?: boolean | GameModeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameModeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GameModeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GameModePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameMode"
    objects: {
      maps: Prisma.$MapPayload<ExtArgs>[]
      MatchMap: Prisma.$MatchMapPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gameMode"]>
    composites: {}
  }

  type GameModeGetPayload<S extends boolean | null | undefined | GameModeDefaultArgs> = $Result.GetResult<Prisma.$GameModePayload, S>

  type GameModeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameModeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameModeCountAggregateInputType | true
    }

  export interface GameModeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameMode'], meta: { name: 'GameMode' } }
    /**
     * Find zero or one GameMode that matches the filter.
     * @param {GameModeFindUniqueArgs} args - Arguments to find a GameMode
     * @example
     * // Get one GameMode
     * const gameMode = await prisma.gameMode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameModeFindUniqueArgs>(args: SelectSubset<T, GameModeFindUniqueArgs<ExtArgs>>): Prisma__GameModeClient<$Result.GetResult<Prisma.$GameModePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameMode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameModeFindUniqueOrThrowArgs} args - Arguments to find a GameMode
     * @example
     * // Get one GameMode
     * const gameMode = await prisma.gameMode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameModeFindUniqueOrThrowArgs>(args: SelectSubset<T, GameModeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameModeClient<$Result.GetResult<Prisma.$GameModePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameMode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameModeFindFirstArgs} args - Arguments to find a GameMode
     * @example
     * // Get one GameMode
     * const gameMode = await prisma.gameMode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameModeFindFirstArgs>(args?: SelectSubset<T, GameModeFindFirstArgs<ExtArgs>>): Prisma__GameModeClient<$Result.GetResult<Prisma.$GameModePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameMode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameModeFindFirstOrThrowArgs} args - Arguments to find a GameMode
     * @example
     * // Get one GameMode
     * const gameMode = await prisma.gameMode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameModeFindFirstOrThrowArgs>(args?: SelectSubset<T, GameModeFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameModeClient<$Result.GetResult<Prisma.$GameModePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameModes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameModeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameModes
     * const gameModes = await prisma.gameMode.findMany()
     * 
     * // Get first 10 GameModes
     * const gameModes = await prisma.gameMode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameModeWithIdOnly = await prisma.gameMode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameModeFindManyArgs>(args?: SelectSubset<T, GameModeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameModePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameMode.
     * @param {GameModeCreateArgs} args - Arguments to create a GameMode.
     * @example
     * // Create one GameMode
     * const GameMode = await prisma.gameMode.create({
     *   data: {
     *     // ... data to create a GameMode
     *   }
     * })
     * 
     */
    create<T extends GameModeCreateArgs>(args: SelectSubset<T, GameModeCreateArgs<ExtArgs>>): Prisma__GameModeClient<$Result.GetResult<Prisma.$GameModePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameModes.
     * @param {GameModeCreateManyArgs} args - Arguments to create many GameModes.
     * @example
     * // Create many GameModes
     * const gameMode = await prisma.gameMode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameModeCreateManyArgs>(args?: SelectSubset<T, GameModeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameModes and returns the data saved in the database.
     * @param {GameModeCreateManyAndReturnArgs} args - Arguments to create many GameModes.
     * @example
     * // Create many GameModes
     * const gameMode = await prisma.gameMode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameModes and only return the `id`
     * const gameModeWithIdOnly = await prisma.gameMode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameModeCreateManyAndReturnArgs>(args?: SelectSubset<T, GameModeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameModePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameMode.
     * @param {GameModeDeleteArgs} args - Arguments to delete one GameMode.
     * @example
     * // Delete one GameMode
     * const GameMode = await prisma.gameMode.delete({
     *   where: {
     *     // ... filter to delete one GameMode
     *   }
     * })
     * 
     */
    delete<T extends GameModeDeleteArgs>(args: SelectSubset<T, GameModeDeleteArgs<ExtArgs>>): Prisma__GameModeClient<$Result.GetResult<Prisma.$GameModePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameMode.
     * @param {GameModeUpdateArgs} args - Arguments to update one GameMode.
     * @example
     * // Update one GameMode
     * const gameMode = await prisma.gameMode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameModeUpdateArgs>(args: SelectSubset<T, GameModeUpdateArgs<ExtArgs>>): Prisma__GameModeClient<$Result.GetResult<Prisma.$GameModePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameModes.
     * @param {GameModeDeleteManyArgs} args - Arguments to filter GameModes to delete.
     * @example
     * // Delete a few GameModes
     * const { count } = await prisma.gameMode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameModeDeleteManyArgs>(args?: SelectSubset<T, GameModeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameModes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameModeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameModes
     * const gameMode = await prisma.gameMode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameModeUpdateManyArgs>(args: SelectSubset<T, GameModeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameModes and returns the data updated in the database.
     * @param {GameModeUpdateManyAndReturnArgs} args - Arguments to update many GameModes.
     * @example
     * // Update many GameModes
     * const gameMode = await prisma.gameMode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameModes and only return the `id`
     * const gameModeWithIdOnly = await prisma.gameMode.updateManyAndReturn({
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
    updateManyAndReturn<T extends GameModeUpdateManyAndReturnArgs>(args: SelectSubset<T, GameModeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameModePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameMode.
     * @param {GameModeUpsertArgs} args - Arguments to update or create a GameMode.
     * @example
     * // Update or create a GameMode
     * const gameMode = await prisma.gameMode.upsert({
     *   create: {
     *     // ... data to create a GameMode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameMode we want to update
     *   }
     * })
     */
    upsert<T extends GameModeUpsertArgs>(args: SelectSubset<T, GameModeUpsertArgs<ExtArgs>>): Prisma__GameModeClient<$Result.GetResult<Prisma.$GameModePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameModes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameModeCountArgs} args - Arguments to filter GameModes to count.
     * @example
     * // Count the number of GameModes
     * const count = await prisma.gameMode.count({
     *   where: {
     *     // ... the filter for the GameModes we want to count
     *   }
     * })
    **/
    count<T extends GameModeCountArgs>(
      args?: Subset<T, GameModeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameModeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameMode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameModeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameModeAggregateArgs>(args: Subset<T, GameModeAggregateArgs>): Prisma.PrismaPromise<GetGameModeAggregateType<T>>

    /**
     * Group by GameMode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameModeGroupByArgs} args - Group by arguments.
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
      T extends GameModeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameModeGroupByArgs['orderBy'] }
        : { orderBy?: GameModeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameModeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameModeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameMode model
   */
  readonly fields: GameModeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameMode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameModeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    maps<T extends GameMode$mapsArgs<ExtArgs> = {}>(args?: Subset<T, GameMode$mapsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MatchMap<T extends GameMode$MatchMapArgs<ExtArgs> = {}>(args?: Subset<T, GameMode$MatchMapArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GameMode model
   */
  interface GameModeFieldRefs {
    readonly id: FieldRef<"GameMode", 'Int'>
    readonly name: FieldRef<"GameMode", 'String'>
    readonly createdAt: FieldRef<"GameMode", 'DateTime'>
    readonly updatedAt: FieldRef<"GameMode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameMode findUnique
   */
  export type GameModeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMode
     */
    select?: GameModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMode
     */
    omit?: GameModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameModeInclude<ExtArgs> | null
    /**
     * Filter, which GameMode to fetch.
     */
    where: GameModeWhereUniqueInput
  }

  /**
   * GameMode findUniqueOrThrow
   */
  export type GameModeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMode
     */
    select?: GameModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMode
     */
    omit?: GameModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameModeInclude<ExtArgs> | null
    /**
     * Filter, which GameMode to fetch.
     */
    where: GameModeWhereUniqueInput
  }

  /**
   * GameMode findFirst
   */
  export type GameModeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMode
     */
    select?: GameModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMode
     */
    omit?: GameModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameModeInclude<ExtArgs> | null
    /**
     * Filter, which GameMode to fetch.
     */
    where?: GameModeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameModes to fetch.
     */
    orderBy?: GameModeOrderByWithRelationInput | GameModeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameModes.
     */
    cursor?: GameModeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameModes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameModes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameModes.
     */
    distinct?: GameModeScalarFieldEnum | GameModeScalarFieldEnum[]
  }

  /**
   * GameMode findFirstOrThrow
   */
  export type GameModeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMode
     */
    select?: GameModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMode
     */
    omit?: GameModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameModeInclude<ExtArgs> | null
    /**
     * Filter, which GameMode to fetch.
     */
    where?: GameModeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameModes to fetch.
     */
    orderBy?: GameModeOrderByWithRelationInput | GameModeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameModes.
     */
    cursor?: GameModeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameModes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameModes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameModes.
     */
    distinct?: GameModeScalarFieldEnum | GameModeScalarFieldEnum[]
  }

  /**
   * GameMode findMany
   */
  export type GameModeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMode
     */
    select?: GameModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMode
     */
    omit?: GameModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameModeInclude<ExtArgs> | null
    /**
     * Filter, which GameModes to fetch.
     */
    where?: GameModeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameModes to fetch.
     */
    orderBy?: GameModeOrderByWithRelationInput | GameModeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameModes.
     */
    cursor?: GameModeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameModes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameModes.
     */
    skip?: number
    distinct?: GameModeScalarFieldEnum | GameModeScalarFieldEnum[]
  }

  /**
   * GameMode create
   */
  export type GameModeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMode
     */
    select?: GameModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMode
     */
    omit?: GameModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameModeInclude<ExtArgs> | null
    /**
     * The data needed to create a GameMode.
     */
    data: XOR<GameModeCreateInput, GameModeUncheckedCreateInput>
  }

  /**
   * GameMode createMany
   */
  export type GameModeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameModes.
     */
    data: GameModeCreateManyInput | GameModeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameMode createManyAndReturn
   */
  export type GameModeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMode
     */
    select?: GameModeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameMode
     */
    omit?: GameModeOmit<ExtArgs> | null
    /**
     * The data used to create many GameModes.
     */
    data: GameModeCreateManyInput | GameModeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameMode update
   */
  export type GameModeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMode
     */
    select?: GameModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMode
     */
    omit?: GameModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameModeInclude<ExtArgs> | null
    /**
     * The data needed to update a GameMode.
     */
    data: XOR<GameModeUpdateInput, GameModeUncheckedUpdateInput>
    /**
     * Choose, which GameMode to update.
     */
    where: GameModeWhereUniqueInput
  }

  /**
   * GameMode updateMany
   */
  export type GameModeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameModes.
     */
    data: XOR<GameModeUpdateManyMutationInput, GameModeUncheckedUpdateManyInput>
    /**
     * Filter which GameModes to update
     */
    where?: GameModeWhereInput
    /**
     * Limit how many GameModes to update.
     */
    limit?: number
  }

  /**
   * GameMode updateManyAndReturn
   */
  export type GameModeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMode
     */
    select?: GameModeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameMode
     */
    omit?: GameModeOmit<ExtArgs> | null
    /**
     * The data used to update GameModes.
     */
    data: XOR<GameModeUpdateManyMutationInput, GameModeUncheckedUpdateManyInput>
    /**
     * Filter which GameModes to update
     */
    where?: GameModeWhereInput
    /**
     * Limit how many GameModes to update.
     */
    limit?: number
  }

  /**
   * GameMode upsert
   */
  export type GameModeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMode
     */
    select?: GameModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMode
     */
    omit?: GameModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameModeInclude<ExtArgs> | null
    /**
     * The filter to search for the GameMode to update in case it exists.
     */
    where: GameModeWhereUniqueInput
    /**
     * In case the GameMode found by the `where` argument doesn't exist, create a new GameMode with this data.
     */
    create: XOR<GameModeCreateInput, GameModeUncheckedCreateInput>
    /**
     * In case the GameMode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameModeUpdateInput, GameModeUncheckedUpdateInput>
  }

  /**
   * GameMode delete
   */
  export type GameModeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMode
     */
    select?: GameModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMode
     */
    omit?: GameModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameModeInclude<ExtArgs> | null
    /**
     * Filter which GameMode to delete.
     */
    where: GameModeWhereUniqueInput
  }

  /**
   * GameMode deleteMany
   */
  export type GameModeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameModes to delete
     */
    where?: GameModeWhereInput
    /**
     * Limit how many GameModes to delete.
     */
    limit?: number
  }

  /**
   * GameMode.maps
   */
  export type GameMode$mapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    where?: MapWhereInput
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[]
    cursor?: MapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MapScalarFieldEnum | MapScalarFieldEnum[]
  }

  /**
   * GameMode.MatchMap
   */
  export type GameMode$MatchMapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMap
     */
    select?: MatchMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMap
     */
    omit?: MatchMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapInclude<ExtArgs> | null
    where?: MatchMapWhereInput
    orderBy?: MatchMapOrderByWithRelationInput | MatchMapOrderByWithRelationInput[]
    cursor?: MatchMapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchMapScalarFieldEnum | MatchMapScalarFieldEnum[]
  }

  /**
   * GameMode without action
   */
  export type GameModeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMode
     */
    select?: GameModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMode
     */
    omit?: GameModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameModeInclude<ExtArgs> | null
  }


  /**
   * Model Map
   */

  export type AggregateMap = {
    _count: MapCountAggregateOutputType | null
    _avg: MapAvgAggregateOutputType | null
    _sum: MapSumAggregateOutputType | null
    _min: MapMinAggregateOutputType | null
    _max: MapMaxAggregateOutputType | null
  }

  export type MapAvgAggregateOutputType = {
    id: number | null
    gameModeId: number | null
  }

  export type MapSumAggregateOutputType = {
    id: number | null
    gameModeId: number | null
  }

  export type MapMinAggregateOutputType = {
    id: number | null
    name: string | null
    gameModeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MapMaxAggregateOutputType = {
    id: number | null
    name: string | null
    gameModeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MapCountAggregateOutputType = {
    id: number
    name: number
    gameModeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MapAvgAggregateInputType = {
    id?: true
    gameModeId?: true
  }

  export type MapSumAggregateInputType = {
    id?: true
    gameModeId?: true
  }

  export type MapMinAggregateInputType = {
    id?: true
    name?: true
    gameModeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MapMaxAggregateInputType = {
    id?: true
    name?: true
    gameModeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MapCountAggregateInputType = {
    id?: true
    name?: true
    gameModeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Map to aggregate.
     */
    where?: MapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maps to fetch.
     */
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Maps
    **/
    _count?: true | MapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MapAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MapSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MapMaxAggregateInputType
  }

  export type GetMapAggregateType<T extends MapAggregateArgs> = {
        [P in keyof T & keyof AggregateMap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMap[P]>
      : GetScalarType<T[P], AggregateMap[P]>
  }




  export type MapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapWhereInput
    orderBy?: MapOrderByWithAggregationInput | MapOrderByWithAggregationInput[]
    by: MapScalarFieldEnum[] | MapScalarFieldEnum
    having?: MapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MapCountAggregateInputType | true
    _avg?: MapAvgAggregateInputType
    _sum?: MapSumAggregateInputType
    _min?: MapMinAggregateInputType
    _max?: MapMaxAggregateInputType
  }

  export type MapGroupByOutputType = {
    id: number
    name: string
    gameModeId: number
    createdAt: Date
    updatedAt: Date
    _count: MapCountAggregateOutputType | null
    _avg: MapAvgAggregateOutputType | null
    _sum: MapSumAggregateOutputType | null
    _min: MapMinAggregateOutputType | null
    _max: MapMaxAggregateOutputType | null
  }

  type GetMapGroupByPayload<T extends MapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MapGroupByOutputType[P]>
            : GetScalarType<T[P], MapGroupByOutputType[P]>
        }
      >
    >


  export type MapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gameModeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gameMode?: boolean | GameModeDefaultArgs<ExtArgs>
    matchMaps?: boolean | Map$matchMapsArgs<ExtArgs>
    _count?: boolean | MapCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["map"]>

  export type MapSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gameModeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gameMode?: boolean | GameModeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["map"]>

  export type MapSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gameModeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gameMode?: boolean | GameModeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["map"]>

  export type MapSelectScalar = {
    id?: boolean
    name?: boolean
    gameModeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "gameModeId" | "createdAt" | "updatedAt", ExtArgs["result"]["map"]>
  export type MapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameMode?: boolean | GameModeDefaultArgs<ExtArgs>
    matchMaps?: boolean | Map$matchMapsArgs<ExtArgs>
    _count?: boolean | MapCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MapIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameMode?: boolean | GameModeDefaultArgs<ExtArgs>
  }
  export type MapIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameMode?: boolean | GameModeDefaultArgs<ExtArgs>
  }

  export type $MapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Map"
    objects: {
      gameMode: Prisma.$GameModePayload<ExtArgs>
      matchMaps: Prisma.$MatchMapPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      gameModeId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["map"]>
    composites: {}
  }

  type MapGetPayload<S extends boolean | null | undefined | MapDefaultArgs> = $Result.GetResult<Prisma.$MapPayload, S>

  type MapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MapCountAggregateInputType | true
    }

  export interface MapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Map'], meta: { name: 'Map' } }
    /**
     * Find zero or one Map that matches the filter.
     * @param {MapFindUniqueArgs} args - Arguments to find a Map
     * @example
     * // Get one Map
     * const map = await prisma.map.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MapFindUniqueArgs>(args: SelectSubset<T, MapFindUniqueArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Map that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MapFindUniqueOrThrowArgs} args - Arguments to find a Map
     * @example
     * // Get one Map
     * const map = await prisma.map.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MapFindUniqueOrThrowArgs>(args: SelectSubset<T, MapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Map that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapFindFirstArgs} args - Arguments to find a Map
     * @example
     * // Get one Map
     * const map = await prisma.map.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MapFindFirstArgs>(args?: SelectSubset<T, MapFindFirstArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Map that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapFindFirstOrThrowArgs} args - Arguments to find a Map
     * @example
     * // Get one Map
     * const map = await prisma.map.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MapFindFirstOrThrowArgs>(args?: SelectSubset<T, MapFindFirstOrThrowArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Maps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maps
     * const maps = await prisma.map.findMany()
     * 
     * // Get first 10 Maps
     * const maps = await prisma.map.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mapWithIdOnly = await prisma.map.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MapFindManyArgs>(args?: SelectSubset<T, MapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Map.
     * @param {MapCreateArgs} args - Arguments to create a Map.
     * @example
     * // Create one Map
     * const Map = await prisma.map.create({
     *   data: {
     *     // ... data to create a Map
     *   }
     * })
     * 
     */
    create<T extends MapCreateArgs>(args: SelectSubset<T, MapCreateArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Maps.
     * @param {MapCreateManyArgs} args - Arguments to create many Maps.
     * @example
     * // Create many Maps
     * const map = await prisma.map.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MapCreateManyArgs>(args?: SelectSubset<T, MapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Maps and returns the data saved in the database.
     * @param {MapCreateManyAndReturnArgs} args - Arguments to create many Maps.
     * @example
     * // Create many Maps
     * const map = await prisma.map.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Maps and only return the `id`
     * const mapWithIdOnly = await prisma.map.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MapCreateManyAndReturnArgs>(args?: SelectSubset<T, MapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Map.
     * @param {MapDeleteArgs} args - Arguments to delete one Map.
     * @example
     * // Delete one Map
     * const Map = await prisma.map.delete({
     *   where: {
     *     // ... filter to delete one Map
     *   }
     * })
     * 
     */
    delete<T extends MapDeleteArgs>(args: SelectSubset<T, MapDeleteArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Map.
     * @param {MapUpdateArgs} args - Arguments to update one Map.
     * @example
     * // Update one Map
     * const map = await prisma.map.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MapUpdateArgs>(args: SelectSubset<T, MapUpdateArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Maps.
     * @param {MapDeleteManyArgs} args - Arguments to filter Maps to delete.
     * @example
     * // Delete a few Maps
     * const { count } = await prisma.map.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MapDeleteManyArgs>(args?: SelectSubset<T, MapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maps
     * const map = await prisma.map.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MapUpdateManyArgs>(args: SelectSubset<T, MapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maps and returns the data updated in the database.
     * @param {MapUpdateManyAndReturnArgs} args - Arguments to update many Maps.
     * @example
     * // Update many Maps
     * const map = await prisma.map.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Maps and only return the `id`
     * const mapWithIdOnly = await prisma.map.updateManyAndReturn({
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
    updateManyAndReturn<T extends MapUpdateManyAndReturnArgs>(args: SelectSubset<T, MapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Map.
     * @param {MapUpsertArgs} args - Arguments to update or create a Map.
     * @example
     * // Update or create a Map
     * const map = await prisma.map.upsert({
     *   create: {
     *     // ... data to create a Map
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Map we want to update
     *   }
     * })
     */
    upsert<T extends MapUpsertArgs>(args: SelectSubset<T, MapUpsertArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Maps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapCountArgs} args - Arguments to filter Maps to count.
     * @example
     * // Count the number of Maps
     * const count = await prisma.map.count({
     *   where: {
     *     // ... the filter for the Maps we want to count
     *   }
     * })
    **/
    count<T extends MapCountArgs>(
      args?: Subset<T, MapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Map.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MapAggregateArgs>(args: Subset<T, MapAggregateArgs>): Prisma.PrismaPromise<GetMapAggregateType<T>>

    /**
     * Group by Map.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapGroupByArgs} args - Group by arguments.
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
      T extends MapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MapGroupByArgs['orderBy'] }
        : { orderBy?: MapGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Map model
   */
  readonly fields: MapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Map.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gameMode<T extends GameModeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameModeDefaultArgs<ExtArgs>>): Prisma__GameModeClient<$Result.GetResult<Prisma.$GameModePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    matchMaps<T extends Map$matchMapsArgs<ExtArgs> = {}>(args?: Subset<T, Map$matchMapsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Map model
   */
  interface MapFieldRefs {
    readonly id: FieldRef<"Map", 'Int'>
    readonly name: FieldRef<"Map", 'String'>
    readonly gameModeId: FieldRef<"Map", 'Int'>
    readonly createdAt: FieldRef<"Map", 'DateTime'>
    readonly updatedAt: FieldRef<"Map", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Map findUnique
   */
  export type MapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * Filter, which Map to fetch.
     */
    where: MapWhereUniqueInput
  }

  /**
   * Map findUniqueOrThrow
   */
  export type MapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * Filter, which Map to fetch.
     */
    where: MapWhereUniqueInput
  }

  /**
   * Map findFirst
   */
  export type MapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * Filter, which Map to fetch.
     */
    where?: MapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maps to fetch.
     */
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maps.
     */
    cursor?: MapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maps.
     */
    distinct?: MapScalarFieldEnum | MapScalarFieldEnum[]
  }

  /**
   * Map findFirstOrThrow
   */
  export type MapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * Filter, which Map to fetch.
     */
    where?: MapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maps to fetch.
     */
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maps.
     */
    cursor?: MapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maps.
     */
    distinct?: MapScalarFieldEnum | MapScalarFieldEnum[]
  }

  /**
   * Map findMany
   */
  export type MapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * Filter, which Maps to fetch.
     */
    where?: MapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maps to fetch.
     */
    orderBy?: MapOrderByWithRelationInput | MapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Maps.
     */
    cursor?: MapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maps.
     */
    skip?: number
    distinct?: MapScalarFieldEnum | MapScalarFieldEnum[]
  }

  /**
   * Map create
   */
  export type MapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * The data needed to create a Map.
     */
    data: XOR<MapCreateInput, MapUncheckedCreateInput>
  }

  /**
   * Map createMany
   */
  export type MapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Maps.
     */
    data: MapCreateManyInput | MapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Map createManyAndReturn
   */
  export type MapCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * The data used to create many Maps.
     */
    data: MapCreateManyInput | MapCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Map update
   */
  export type MapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * The data needed to update a Map.
     */
    data: XOR<MapUpdateInput, MapUncheckedUpdateInput>
    /**
     * Choose, which Map to update.
     */
    where: MapWhereUniqueInput
  }

  /**
   * Map updateMany
   */
  export type MapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Maps.
     */
    data: XOR<MapUpdateManyMutationInput, MapUncheckedUpdateManyInput>
    /**
     * Filter which Maps to update
     */
    where?: MapWhereInput
    /**
     * Limit how many Maps to update.
     */
    limit?: number
  }

  /**
   * Map updateManyAndReturn
   */
  export type MapUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * The data used to update Maps.
     */
    data: XOR<MapUpdateManyMutationInput, MapUncheckedUpdateManyInput>
    /**
     * Filter which Maps to update
     */
    where?: MapWhereInput
    /**
     * Limit how many Maps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Map upsert
   */
  export type MapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * The filter to search for the Map to update in case it exists.
     */
    where: MapWhereUniqueInput
    /**
     * In case the Map found by the `where` argument doesn't exist, create a new Map with this data.
     */
    create: XOR<MapCreateInput, MapUncheckedCreateInput>
    /**
     * In case the Map was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MapUpdateInput, MapUncheckedUpdateInput>
  }

  /**
   * Map delete
   */
  export type MapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
    /**
     * Filter which Map to delete.
     */
    where: MapWhereUniqueInput
  }

  /**
   * Map deleteMany
   */
  export type MapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maps to delete
     */
    where?: MapWhereInput
    /**
     * Limit how many Maps to delete.
     */
    limit?: number
  }

  /**
   * Map.matchMaps
   */
  export type Map$matchMapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMap
     */
    select?: MatchMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMap
     */
    omit?: MatchMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapInclude<ExtArgs> | null
    where?: MatchMapWhereInput
    orderBy?: MatchMapOrderByWithRelationInput | MatchMapOrderByWithRelationInput[]
    cursor?: MatchMapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchMapScalarFieldEnum | MatchMapScalarFieldEnum[]
  }

  /**
   * Map without action
   */
  export type MapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Map
     */
    select?: MapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Map
     */
    omit?: MapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapInclude<ExtArgs> | null
  }


  /**
   * Model MatchMap
   */

  export type AggregateMatchMap = {
    _count: MatchMapCountAggregateOutputType | null
    _avg: MatchMapAvgAggregateOutputType | null
    _sum: MatchMapSumAggregateOutputType | null
    _min: MatchMapMinAggregateOutputType | null
    _max: MatchMapMaxAggregateOutputType | null
  }

  export type MatchMapAvgAggregateOutputType = {
    mapId: number | null
    gameModeId: number | null
    mapNumber: number | null
    winnerId: number | null
  }

  export type MatchMapSumAggregateOutputType = {
    mapId: number | null
    gameModeId: number | null
    mapNumber: number | null
    winnerId: number | null
  }

  export type MatchMapMinAggregateOutputType = {
    id: string | null
    matchId: string | null
    mapId: number | null
    gameModeId: number | null
    mapNumber: number | null
    winnerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchMapMaxAggregateOutputType = {
    id: string | null
    matchId: string | null
    mapId: number | null
    gameModeId: number | null
    mapNumber: number | null
    winnerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchMapCountAggregateOutputType = {
    id: number
    matchId: number
    mapId: number
    gameModeId: number
    mapNumber: number
    winnerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MatchMapAvgAggregateInputType = {
    mapId?: true
    gameModeId?: true
    mapNumber?: true
    winnerId?: true
  }

  export type MatchMapSumAggregateInputType = {
    mapId?: true
    gameModeId?: true
    mapNumber?: true
    winnerId?: true
  }

  export type MatchMapMinAggregateInputType = {
    id?: true
    matchId?: true
    mapId?: true
    gameModeId?: true
    mapNumber?: true
    winnerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchMapMaxAggregateInputType = {
    id?: true
    matchId?: true
    mapId?: true
    gameModeId?: true
    mapNumber?: true
    winnerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchMapCountAggregateInputType = {
    id?: true
    matchId?: true
    mapId?: true
    gameModeId?: true
    mapNumber?: true
    winnerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MatchMapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchMap to aggregate.
     */
    where?: MatchMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchMaps to fetch.
     */
    orderBy?: MatchMapOrderByWithRelationInput | MatchMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchMaps
    **/
    _count?: true | MatchMapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchMapAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchMapSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMapMaxAggregateInputType
  }

  export type GetMatchMapAggregateType<T extends MatchMapAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchMap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchMap[P]>
      : GetScalarType<T[P], AggregateMatchMap[P]>
  }




  export type MatchMapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchMapWhereInput
    orderBy?: MatchMapOrderByWithAggregationInput | MatchMapOrderByWithAggregationInput[]
    by: MatchMapScalarFieldEnum[] | MatchMapScalarFieldEnum
    having?: MatchMapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchMapCountAggregateInputType | true
    _avg?: MatchMapAvgAggregateInputType
    _sum?: MatchMapSumAggregateInputType
    _min?: MatchMapMinAggregateInputType
    _max?: MatchMapMaxAggregateInputType
  }

  export type MatchMapGroupByOutputType = {
    id: string
    matchId: string
    mapId: number
    gameModeId: number
    mapNumber: number
    winnerId: number | null
    createdAt: Date
    updatedAt: Date
    _count: MatchMapCountAggregateOutputType | null
    _avg: MatchMapAvgAggregateOutputType | null
    _sum: MatchMapSumAggregateOutputType | null
    _min: MatchMapMinAggregateOutputType | null
    _max: MatchMapMaxAggregateOutputType | null
  }

  type GetMatchMapGroupByPayload<T extends MatchMapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchMapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchMapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchMapGroupByOutputType[P]>
            : GetScalarType<T[P], MatchMapGroupByOutputType[P]>
        }
      >
    >


  export type MatchMapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    mapId?: boolean
    gameModeId?: boolean
    mapNumber?: boolean
    winnerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    map?: boolean | MapDefaultArgs<ExtArgs>
    gameMode?: boolean | GameModeDefaultArgs<ExtArgs>
    winner?: boolean | MatchMap$winnerArgs<ExtArgs>
    stats?: boolean | MatchMap$statsArgs<ExtArgs>
    MatchMapPlayerStat?: boolean | MatchMap$MatchMapPlayerStatArgs<ExtArgs>
    _count?: boolean | MatchMapCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchMap"]>

  export type MatchMapSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    mapId?: boolean
    gameModeId?: boolean
    mapNumber?: boolean
    winnerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    map?: boolean | MapDefaultArgs<ExtArgs>
    gameMode?: boolean | GameModeDefaultArgs<ExtArgs>
    winner?: boolean | MatchMap$winnerArgs<ExtArgs>
  }, ExtArgs["result"]["matchMap"]>

  export type MatchMapSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    mapId?: boolean
    gameModeId?: boolean
    mapNumber?: boolean
    winnerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    map?: boolean | MapDefaultArgs<ExtArgs>
    gameMode?: boolean | GameModeDefaultArgs<ExtArgs>
    winner?: boolean | MatchMap$winnerArgs<ExtArgs>
  }, ExtArgs["result"]["matchMap"]>

  export type MatchMapSelectScalar = {
    id?: boolean
    matchId?: boolean
    mapId?: boolean
    gameModeId?: boolean
    mapNumber?: boolean
    winnerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MatchMapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "matchId" | "mapId" | "gameModeId" | "mapNumber" | "winnerId" | "createdAt" | "updatedAt", ExtArgs["result"]["matchMap"]>
  export type MatchMapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    map?: boolean | MapDefaultArgs<ExtArgs>
    gameMode?: boolean | GameModeDefaultArgs<ExtArgs>
    winner?: boolean | MatchMap$winnerArgs<ExtArgs>
    stats?: boolean | MatchMap$statsArgs<ExtArgs>
    MatchMapPlayerStat?: boolean | MatchMap$MatchMapPlayerStatArgs<ExtArgs>
    _count?: boolean | MatchMapCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MatchMapIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    map?: boolean | MapDefaultArgs<ExtArgs>
    gameMode?: boolean | GameModeDefaultArgs<ExtArgs>
    winner?: boolean | MatchMap$winnerArgs<ExtArgs>
  }
  export type MatchMapIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    map?: boolean | MapDefaultArgs<ExtArgs>
    gameMode?: boolean | GameModeDefaultArgs<ExtArgs>
    winner?: boolean | MatchMap$winnerArgs<ExtArgs>
  }

  export type $MatchMapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchMap"
    objects: {
      match: Prisma.$MatchPayload<ExtArgs>
      map: Prisma.$MapPayload<ExtArgs>
      gameMode: Prisma.$GameModePayload<ExtArgs>
      winner: Prisma.$TeamPayload<ExtArgs> | null
      stats: Prisma.$StatPayload<ExtArgs>[]
      MatchMapPlayerStat: Prisma.$MatchMapPlayerStatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      matchId: string
      mapId: number
      gameModeId: number
      mapNumber: number
      winnerId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["matchMap"]>
    composites: {}
  }

  type MatchMapGetPayload<S extends boolean | null | undefined | MatchMapDefaultArgs> = $Result.GetResult<Prisma.$MatchMapPayload, S>

  type MatchMapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchMapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchMapCountAggregateInputType | true
    }

  export interface MatchMapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchMap'], meta: { name: 'MatchMap' } }
    /**
     * Find zero or one MatchMap that matches the filter.
     * @param {MatchMapFindUniqueArgs} args - Arguments to find a MatchMap
     * @example
     * // Get one MatchMap
     * const matchMap = await prisma.matchMap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchMapFindUniqueArgs>(args: SelectSubset<T, MatchMapFindUniqueArgs<ExtArgs>>): Prisma__MatchMapClient<$Result.GetResult<Prisma.$MatchMapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MatchMap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchMapFindUniqueOrThrowArgs} args - Arguments to find a MatchMap
     * @example
     * // Get one MatchMap
     * const matchMap = await prisma.matchMap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchMapFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchMapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchMapClient<$Result.GetResult<Prisma.$MatchMapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchMap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchMapFindFirstArgs} args - Arguments to find a MatchMap
     * @example
     * // Get one MatchMap
     * const matchMap = await prisma.matchMap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchMapFindFirstArgs>(args?: SelectSubset<T, MatchMapFindFirstArgs<ExtArgs>>): Prisma__MatchMapClient<$Result.GetResult<Prisma.$MatchMapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchMap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchMapFindFirstOrThrowArgs} args - Arguments to find a MatchMap
     * @example
     * // Get one MatchMap
     * const matchMap = await prisma.matchMap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchMapFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchMapFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchMapClient<$Result.GetResult<Prisma.$MatchMapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MatchMaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchMapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchMaps
     * const matchMaps = await prisma.matchMap.findMany()
     * 
     * // Get first 10 MatchMaps
     * const matchMaps = await prisma.matchMap.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchMapWithIdOnly = await prisma.matchMap.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchMapFindManyArgs>(args?: SelectSubset<T, MatchMapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MatchMap.
     * @param {MatchMapCreateArgs} args - Arguments to create a MatchMap.
     * @example
     * // Create one MatchMap
     * const MatchMap = await prisma.matchMap.create({
     *   data: {
     *     // ... data to create a MatchMap
     *   }
     * })
     * 
     */
    create<T extends MatchMapCreateArgs>(args: SelectSubset<T, MatchMapCreateArgs<ExtArgs>>): Prisma__MatchMapClient<$Result.GetResult<Prisma.$MatchMapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MatchMaps.
     * @param {MatchMapCreateManyArgs} args - Arguments to create many MatchMaps.
     * @example
     * // Create many MatchMaps
     * const matchMap = await prisma.matchMap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchMapCreateManyArgs>(args?: SelectSubset<T, MatchMapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MatchMaps and returns the data saved in the database.
     * @param {MatchMapCreateManyAndReturnArgs} args - Arguments to create many MatchMaps.
     * @example
     * // Create many MatchMaps
     * const matchMap = await prisma.matchMap.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MatchMaps and only return the `id`
     * const matchMapWithIdOnly = await prisma.matchMap.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchMapCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchMapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchMapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MatchMap.
     * @param {MatchMapDeleteArgs} args - Arguments to delete one MatchMap.
     * @example
     * // Delete one MatchMap
     * const MatchMap = await prisma.matchMap.delete({
     *   where: {
     *     // ... filter to delete one MatchMap
     *   }
     * })
     * 
     */
    delete<T extends MatchMapDeleteArgs>(args: SelectSubset<T, MatchMapDeleteArgs<ExtArgs>>): Prisma__MatchMapClient<$Result.GetResult<Prisma.$MatchMapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MatchMap.
     * @param {MatchMapUpdateArgs} args - Arguments to update one MatchMap.
     * @example
     * // Update one MatchMap
     * const matchMap = await prisma.matchMap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchMapUpdateArgs>(args: SelectSubset<T, MatchMapUpdateArgs<ExtArgs>>): Prisma__MatchMapClient<$Result.GetResult<Prisma.$MatchMapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MatchMaps.
     * @param {MatchMapDeleteManyArgs} args - Arguments to filter MatchMaps to delete.
     * @example
     * // Delete a few MatchMaps
     * const { count } = await prisma.matchMap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchMapDeleteManyArgs>(args?: SelectSubset<T, MatchMapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchMapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchMaps
     * const matchMap = await prisma.matchMap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchMapUpdateManyArgs>(args: SelectSubset<T, MatchMapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchMaps and returns the data updated in the database.
     * @param {MatchMapUpdateManyAndReturnArgs} args - Arguments to update many MatchMaps.
     * @example
     * // Update many MatchMaps
     * const matchMap = await prisma.matchMap.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MatchMaps and only return the `id`
     * const matchMapWithIdOnly = await prisma.matchMap.updateManyAndReturn({
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
    updateManyAndReturn<T extends MatchMapUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchMapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchMapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MatchMap.
     * @param {MatchMapUpsertArgs} args - Arguments to update or create a MatchMap.
     * @example
     * // Update or create a MatchMap
     * const matchMap = await prisma.matchMap.upsert({
     *   create: {
     *     // ... data to create a MatchMap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchMap we want to update
     *   }
     * })
     */
    upsert<T extends MatchMapUpsertArgs>(args: SelectSubset<T, MatchMapUpsertArgs<ExtArgs>>): Prisma__MatchMapClient<$Result.GetResult<Prisma.$MatchMapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MatchMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchMapCountArgs} args - Arguments to filter MatchMaps to count.
     * @example
     * // Count the number of MatchMaps
     * const count = await prisma.matchMap.count({
     *   where: {
     *     // ... the filter for the MatchMaps we want to count
     *   }
     * })
    **/
    count<T extends MatchMapCountArgs>(
      args?: Subset<T, MatchMapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchMapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchMapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchMapAggregateArgs>(args: Subset<T, MatchMapAggregateArgs>): Prisma.PrismaPromise<GetMatchMapAggregateType<T>>

    /**
     * Group by MatchMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchMapGroupByArgs} args - Group by arguments.
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
      T extends MatchMapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchMapGroupByArgs['orderBy'] }
        : { orderBy?: MatchMapGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchMapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchMapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchMap model
   */
  readonly fields: MatchMapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchMap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchMapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    match<T extends MatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchDefaultArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    map<T extends MapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MapDefaultArgs<ExtArgs>>): Prisma__MapClient<$Result.GetResult<Prisma.$MapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    gameMode<T extends GameModeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameModeDefaultArgs<ExtArgs>>): Prisma__GameModeClient<$Result.GetResult<Prisma.$GameModePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    winner<T extends MatchMap$winnerArgs<ExtArgs> = {}>(args?: Subset<T, MatchMap$winnerArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    stats<T extends MatchMap$statsArgs<ExtArgs> = {}>(args?: Subset<T, MatchMap$statsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MatchMapPlayerStat<T extends MatchMap$MatchMapPlayerStatArgs<ExtArgs> = {}>(args?: Subset<T, MatchMap$MatchMapPlayerStatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchMapPlayerStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MatchMap model
   */
  interface MatchMapFieldRefs {
    readonly id: FieldRef<"MatchMap", 'String'>
    readonly matchId: FieldRef<"MatchMap", 'String'>
    readonly mapId: FieldRef<"MatchMap", 'Int'>
    readonly gameModeId: FieldRef<"MatchMap", 'Int'>
    readonly mapNumber: FieldRef<"MatchMap", 'Int'>
    readonly winnerId: FieldRef<"MatchMap", 'Int'>
    readonly createdAt: FieldRef<"MatchMap", 'DateTime'>
    readonly updatedAt: FieldRef<"MatchMap", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MatchMap findUnique
   */
  export type MatchMapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMap
     */
    select?: MatchMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMap
     */
    omit?: MatchMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapInclude<ExtArgs> | null
    /**
     * Filter, which MatchMap to fetch.
     */
    where: MatchMapWhereUniqueInput
  }

  /**
   * MatchMap findUniqueOrThrow
   */
  export type MatchMapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMap
     */
    select?: MatchMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMap
     */
    omit?: MatchMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapInclude<ExtArgs> | null
    /**
     * Filter, which MatchMap to fetch.
     */
    where: MatchMapWhereUniqueInput
  }

  /**
   * MatchMap findFirst
   */
  export type MatchMapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMap
     */
    select?: MatchMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMap
     */
    omit?: MatchMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapInclude<ExtArgs> | null
    /**
     * Filter, which MatchMap to fetch.
     */
    where?: MatchMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchMaps to fetch.
     */
    orderBy?: MatchMapOrderByWithRelationInput | MatchMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchMaps.
     */
    cursor?: MatchMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchMaps.
     */
    distinct?: MatchMapScalarFieldEnum | MatchMapScalarFieldEnum[]
  }

  /**
   * MatchMap findFirstOrThrow
   */
  export type MatchMapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMap
     */
    select?: MatchMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMap
     */
    omit?: MatchMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapInclude<ExtArgs> | null
    /**
     * Filter, which MatchMap to fetch.
     */
    where?: MatchMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchMaps to fetch.
     */
    orderBy?: MatchMapOrderByWithRelationInput | MatchMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchMaps.
     */
    cursor?: MatchMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchMaps.
     */
    distinct?: MatchMapScalarFieldEnum | MatchMapScalarFieldEnum[]
  }

  /**
   * MatchMap findMany
   */
  export type MatchMapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMap
     */
    select?: MatchMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMap
     */
    omit?: MatchMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapInclude<ExtArgs> | null
    /**
     * Filter, which MatchMaps to fetch.
     */
    where?: MatchMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchMaps to fetch.
     */
    orderBy?: MatchMapOrderByWithRelationInput | MatchMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchMaps.
     */
    cursor?: MatchMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchMaps.
     */
    skip?: number
    distinct?: MatchMapScalarFieldEnum | MatchMapScalarFieldEnum[]
  }

  /**
   * MatchMap create
   */
  export type MatchMapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMap
     */
    select?: MatchMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMap
     */
    omit?: MatchMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchMap.
     */
    data: XOR<MatchMapCreateInput, MatchMapUncheckedCreateInput>
  }

  /**
   * MatchMap createMany
   */
  export type MatchMapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchMaps.
     */
    data: MatchMapCreateManyInput | MatchMapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MatchMap createManyAndReturn
   */
  export type MatchMapCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMap
     */
    select?: MatchMapSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMap
     */
    omit?: MatchMapOmit<ExtArgs> | null
    /**
     * The data used to create many MatchMaps.
     */
    data: MatchMapCreateManyInput | MatchMapCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchMap update
   */
  export type MatchMapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMap
     */
    select?: MatchMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMap
     */
    omit?: MatchMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchMap.
     */
    data: XOR<MatchMapUpdateInput, MatchMapUncheckedUpdateInput>
    /**
     * Choose, which MatchMap to update.
     */
    where: MatchMapWhereUniqueInput
  }

  /**
   * MatchMap updateMany
   */
  export type MatchMapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchMaps.
     */
    data: XOR<MatchMapUpdateManyMutationInput, MatchMapUncheckedUpdateManyInput>
    /**
     * Filter which MatchMaps to update
     */
    where?: MatchMapWhereInput
    /**
     * Limit how many MatchMaps to update.
     */
    limit?: number
  }

  /**
   * MatchMap updateManyAndReturn
   */
  export type MatchMapUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMap
     */
    select?: MatchMapSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMap
     */
    omit?: MatchMapOmit<ExtArgs> | null
    /**
     * The data used to update MatchMaps.
     */
    data: XOR<MatchMapUpdateManyMutationInput, MatchMapUncheckedUpdateManyInput>
    /**
     * Filter which MatchMaps to update
     */
    where?: MatchMapWhereInput
    /**
     * Limit how many MatchMaps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchMap upsert
   */
  export type MatchMapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMap
     */
    select?: MatchMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMap
     */
    omit?: MatchMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchMap to update in case it exists.
     */
    where: MatchMapWhereUniqueInput
    /**
     * In case the MatchMap found by the `where` argument doesn't exist, create a new MatchMap with this data.
     */
    create: XOR<MatchMapCreateInput, MatchMapUncheckedCreateInput>
    /**
     * In case the MatchMap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchMapUpdateInput, MatchMapUncheckedUpdateInput>
  }

  /**
   * MatchMap delete
   */
  export type MatchMapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMap
     */
    select?: MatchMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMap
     */
    omit?: MatchMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapInclude<ExtArgs> | null
    /**
     * Filter which MatchMap to delete.
     */
    where: MatchMapWhereUniqueInput
  }

  /**
   * MatchMap deleteMany
   */
  export type MatchMapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchMaps to delete
     */
    where?: MatchMapWhereInput
    /**
     * Limit how many MatchMaps to delete.
     */
    limit?: number
  }

  /**
   * MatchMap.winner
   */
  export type MatchMap$winnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * MatchMap.stats
   */
  export type MatchMap$statsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stat
     */
    select?: StatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stat
     */
    omit?: StatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatInclude<ExtArgs> | null
    where?: StatWhereInput
    orderBy?: StatOrderByWithRelationInput | StatOrderByWithRelationInput[]
    cursor?: StatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatScalarFieldEnum | StatScalarFieldEnum[]
  }

  /**
   * MatchMap.MatchMapPlayerStat
   */
  export type MatchMap$MatchMapPlayerStatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMapPlayerStat
     */
    select?: MatchMapPlayerStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMapPlayerStat
     */
    omit?: MatchMapPlayerStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapPlayerStatInclude<ExtArgs> | null
    where?: MatchMapPlayerStatWhereInput
    orderBy?: MatchMapPlayerStatOrderByWithRelationInput | MatchMapPlayerStatOrderByWithRelationInput[]
    cursor?: MatchMapPlayerStatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchMapPlayerStatScalarFieldEnum | MatchMapPlayerStatScalarFieldEnum[]
  }

  /**
   * MatchMap without action
   */
  export type MatchMapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMap
     */
    select?: MatchMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMap
     */
    omit?: MatchMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapInclude<ExtArgs> | null
  }


  /**
   * Model MatchMapPlayerStat
   */

  export type AggregateMatchMapPlayerStat = {
    _count: MatchMapPlayerStatCountAggregateOutputType | null
    _avg: MatchMapPlayerStatAvgAggregateOutputType | null
    _sum: MatchMapPlayerStatSumAggregateOutputType | null
    _min: MatchMapPlayerStatMinAggregateOutputType | null
    _max: MatchMapPlayerStatMaxAggregateOutputType | null
  }

  export type MatchMapPlayerStatAvgAggregateOutputType = {
    playerId: number | null
    kills: number | null
    deaths: number | null
    assists: number | null
    damage: number | null
    objective: number | null
    score: number | null
    teamId: number | null
  }

  export type MatchMapPlayerStatSumAggregateOutputType = {
    playerId: number | null
    kills: number | null
    deaths: number | null
    assists: number | null
    damage: number | null
    objective: number | null
    score: number | null
    teamId: number | null
  }

  export type MatchMapPlayerStatMinAggregateOutputType = {
    id: string | null
    matchMapId: string | null
    playerId: number | null
    kills: number | null
    deaths: number | null
    assists: number | null
    damage: number | null
    objective: number | null
    score: number | null
    teamId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchMapPlayerStatMaxAggregateOutputType = {
    id: string | null
    matchMapId: string | null
    playerId: number | null
    kills: number | null
    deaths: number | null
    assists: number | null
    damage: number | null
    objective: number | null
    score: number | null
    teamId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchMapPlayerStatCountAggregateOutputType = {
    id: number
    matchMapId: number
    playerId: number
    kills: number
    deaths: number
    assists: number
    damage: number
    objective: number
    score: number
    teamId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MatchMapPlayerStatAvgAggregateInputType = {
    playerId?: true
    kills?: true
    deaths?: true
    assists?: true
    damage?: true
    objective?: true
    score?: true
    teamId?: true
  }

  export type MatchMapPlayerStatSumAggregateInputType = {
    playerId?: true
    kills?: true
    deaths?: true
    assists?: true
    damage?: true
    objective?: true
    score?: true
    teamId?: true
  }

  export type MatchMapPlayerStatMinAggregateInputType = {
    id?: true
    matchMapId?: true
    playerId?: true
    kills?: true
    deaths?: true
    assists?: true
    damage?: true
    objective?: true
    score?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchMapPlayerStatMaxAggregateInputType = {
    id?: true
    matchMapId?: true
    playerId?: true
    kills?: true
    deaths?: true
    assists?: true
    damage?: true
    objective?: true
    score?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchMapPlayerStatCountAggregateInputType = {
    id?: true
    matchMapId?: true
    playerId?: true
    kills?: true
    deaths?: true
    assists?: true
    damage?: true
    objective?: true
    score?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MatchMapPlayerStatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchMapPlayerStat to aggregate.
     */
    where?: MatchMapPlayerStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchMapPlayerStats to fetch.
     */
    orderBy?: MatchMapPlayerStatOrderByWithRelationInput | MatchMapPlayerStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchMapPlayerStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchMapPlayerStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchMapPlayerStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchMapPlayerStats
    **/
    _count?: true | MatchMapPlayerStatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchMapPlayerStatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchMapPlayerStatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMapPlayerStatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMapPlayerStatMaxAggregateInputType
  }

  export type GetMatchMapPlayerStatAggregateType<T extends MatchMapPlayerStatAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchMapPlayerStat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchMapPlayerStat[P]>
      : GetScalarType<T[P], AggregateMatchMapPlayerStat[P]>
  }




  export type MatchMapPlayerStatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchMapPlayerStatWhereInput
    orderBy?: MatchMapPlayerStatOrderByWithAggregationInput | MatchMapPlayerStatOrderByWithAggregationInput[]
    by: MatchMapPlayerStatScalarFieldEnum[] | MatchMapPlayerStatScalarFieldEnum
    having?: MatchMapPlayerStatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchMapPlayerStatCountAggregateInputType | true
    _avg?: MatchMapPlayerStatAvgAggregateInputType
    _sum?: MatchMapPlayerStatSumAggregateInputType
    _min?: MatchMapPlayerStatMinAggregateInputType
    _max?: MatchMapPlayerStatMaxAggregateInputType
  }

  export type MatchMapPlayerStatGroupByOutputType = {
    id: string
    matchMapId: string
    playerId: number
    kills: number
    deaths: number
    assists: number
    damage: number
    objective: number
    score: number
    teamId: number | null
    createdAt: Date
    updatedAt: Date
    _count: MatchMapPlayerStatCountAggregateOutputType | null
    _avg: MatchMapPlayerStatAvgAggregateOutputType | null
    _sum: MatchMapPlayerStatSumAggregateOutputType | null
    _min: MatchMapPlayerStatMinAggregateOutputType | null
    _max: MatchMapPlayerStatMaxAggregateOutputType | null
  }

  type GetMatchMapPlayerStatGroupByPayload<T extends MatchMapPlayerStatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchMapPlayerStatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchMapPlayerStatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchMapPlayerStatGroupByOutputType[P]>
            : GetScalarType<T[P], MatchMapPlayerStatGroupByOutputType[P]>
        }
      >
    >


  export type MatchMapPlayerStatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchMapId?: boolean
    playerId?: boolean
    kills?: boolean
    deaths?: boolean
    assists?: boolean
    damage?: boolean
    objective?: boolean
    score?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    matchMap?: boolean | MatchMapDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    Team?: boolean | MatchMapPlayerStat$TeamArgs<ExtArgs>
  }, ExtArgs["result"]["matchMapPlayerStat"]>

  export type MatchMapPlayerStatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchMapId?: boolean
    playerId?: boolean
    kills?: boolean
    deaths?: boolean
    assists?: boolean
    damage?: boolean
    objective?: boolean
    score?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    matchMap?: boolean | MatchMapDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    Team?: boolean | MatchMapPlayerStat$TeamArgs<ExtArgs>
  }, ExtArgs["result"]["matchMapPlayerStat"]>

  export type MatchMapPlayerStatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchMapId?: boolean
    playerId?: boolean
    kills?: boolean
    deaths?: boolean
    assists?: boolean
    damage?: boolean
    objective?: boolean
    score?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    matchMap?: boolean | MatchMapDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    Team?: boolean | MatchMapPlayerStat$TeamArgs<ExtArgs>
  }, ExtArgs["result"]["matchMapPlayerStat"]>

  export type MatchMapPlayerStatSelectScalar = {
    id?: boolean
    matchMapId?: boolean
    playerId?: boolean
    kills?: boolean
    deaths?: boolean
    assists?: boolean
    damage?: boolean
    objective?: boolean
    score?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MatchMapPlayerStatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "matchMapId" | "playerId" | "kills" | "deaths" | "assists" | "damage" | "objective" | "score" | "teamId" | "createdAt" | "updatedAt", ExtArgs["result"]["matchMapPlayerStat"]>
  export type MatchMapPlayerStatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matchMap?: boolean | MatchMapDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    Team?: boolean | MatchMapPlayerStat$TeamArgs<ExtArgs>
  }
  export type MatchMapPlayerStatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matchMap?: boolean | MatchMapDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    Team?: boolean | MatchMapPlayerStat$TeamArgs<ExtArgs>
  }
  export type MatchMapPlayerStatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matchMap?: boolean | MatchMapDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    Team?: boolean | MatchMapPlayerStat$TeamArgs<ExtArgs>
  }

  export type $MatchMapPlayerStatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchMapPlayerStat"
    objects: {
      matchMap: Prisma.$MatchMapPayload<ExtArgs>
      player: Prisma.$PlayerPayload<ExtArgs>
      Team: Prisma.$TeamPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      matchMapId: string
      playerId: number
      kills: number
      deaths: number
      assists: number
      damage: number
      objective: number
      score: number
      teamId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["matchMapPlayerStat"]>
    composites: {}
  }

  type MatchMapPlayerStatGetPayload<S extends boolean | null | undefined | MatchMapPlayerStatDefaultArgs> = $Result.GetResult<Prisma.$MatchMapPlayerStatPayload, S>

  type MatchMapPlayerStatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchMapPlayerStatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchMapPlayerStatCountAggregateInputType | true
    }

  export interface MatchMapPlayerStatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchMapPlayerStat'], meta: { name: 'MatchMapPlayerStat' } }
    /**
     * Find zero or one MatchMapPlayerStat that matches the filter.
     * @param {MatchMapPlayerStatFindUniqueArgs} args - Arguments to find a MatchMapPlayerStat
     * @example
     * // Get one MatchMapPlayerStat
     * const matchMapPlayerStat = await prisma.matchMapPlayerStat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchMapPlayerStatFindUniqueArgs>(args: SelectSubset<T, MatchMapPlayerStatFindUniqueArgs<ExtArgs>>): Prisma__MatchMapPlayerStatClient<$Result.GetResult<Prisma.$MatchMapPlayerStatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MatchMapPlayerStat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchMapPlayerStatFindUniqueOrThrowArgs} args - Arguments to find a MatchMapPlayerStat
     * @example
     * // Get one MatchMapPlayerStat
     * const matchMapPlayerStat = await prisma.matchMapPlayerStat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchMapPlayerStatFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchMapPlayerStatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchMapPlayerStatClient<$Result.GetResult<Prisma.$MatchMapPlayerStatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchMapPlayerStat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchMapPlayerStatFindFirstArgs} args - Arguments to find a MatchMapPlayerStat
     * @example
     * // Get one MatchMapPlayerStat
     * const matchMapPlayerStat = await prisma.matchMapPlayerStat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchMapPlayerStatFindFirstArgs>(args?: SelectSubset<T, MatchMapPlayerStatFindFirstArgs<ExtArgs>>): Prisma__MatchMapPlayerStatClient<$Result.GetResult<Prisma.$MatchMapPlayerStatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchMapPlayerStat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchMapPlayerStatFindFirstOrThrowArgs} args - Arguments to find a MatchMapPlayerStat
     * @example
     * // Get one MatchMapPlayerStat
     * const matchMapPlayerStat = await prisma.matchMapPlayerStat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchMapPlayerStatFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchMapPlayerStatFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchMapPlayerStatClient<$Result.GetResult<Prisma.$MatchMapPlayerStatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MatchMapPlayerStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchMapPlayerStatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchMapPlayerStats
     * const matchMapPlayerStats = await prisma.matchMapPlayerStat.findMany()
     * 
     * // Get first 10 MatchMapPlayerStats
     * const matchMapPlayerStats = await prisma.matchMapPlayerStat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchMapPlayerStatWithIdOnly = await prisma.matchMapPlayerStat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchMapPlayerStatFindManyArgs>(args?: SelectSubset<T, MatchMapPlayerStatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchMapPlayerStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MatchMapPlayerStat.
     * @param {MatchMapPlayerStatCreateArgs} args - Arguments to create a MatchMapPlayerStat.
     * @example
     * // Create one MatchMapPlayerStat
     * const MatchMapPlayerStat = await prisma.matchMapPlayerStat.create({
     *   data: {
     *     // ... data to create a MatchMapPlayerStat
     *   }
     * })
     * 
     */
    create<T extends MatchMapPlayerStatCreateArgs>(args: SelectSubset<T, MatchMapPlayerStatCreateArgs<ExtArgs>>): Prisma__MatchMapPlayerStatClient<$Result.GetResult<Prisma.$MatchMapPlayerStatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MatchMapPlayerStats.
     * @param {MatchMapPlayerStatCreateManyArgs} args - Arguments to create many MatchMapPlayerStats.
     * @example
     * // Create many MatchMapPlayerStats
     * const matchMapPlayerStat = await prisma.matchMapPlayerStat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchMapPlayerStatCreateManyArgs>(args?: SelectSubset<T, MatchMapPlayerStatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MatchMapPlayerStats and returns the data saved in the database.
     * @param {MatchMapPlayerStatCreateManyAndReturnArgs} args - Arguments to create many MatchMapPlayerStats.
     * @example
     * // Create many MatchMapPlayerStats
     * const matchMapPlayerStat = await prisma.matchMapPlayerStat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MatchMapPlayerStats and only return the `id`
     * const matchMapPlayerStatWithIdOnly = await prisma.matchMapPlayerStat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchMapPlayerStatCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchMapPlayerStatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchMapPlayerStatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MatchMapPlayerStat.
     * @param {MatchMapPlayerStatDeleteArgs} args - Arguments to delete one MatchMapPlayerStat.
     * @example
     * // Delete one MatchMapPlayerStat
     * const MatchMapPlayerStat = await prisma.matchMapPlayerStat.delete({
     *   where: {
     *     // ... filter to delete one MatchMapPlayerStat
     *   }
     * })
     * 
     */
    delete<T extends MatchMapPlayerStatDeleteArgs>(args: SelectSubset<T, MatchMapPlayerStatDeleteArgs<ExtArgs>>): Prisma__MatchMapPlayerStatClient<$Result.GetResult<Prisma.$MatchMapPlayerStatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MatchMapPlayerStat.
     * @param {MatchMapPlayerStatUpdateArgs} args - Arguments to update one MatchMapPlayerStat.
     * @example
     * // Update one MatchMapPlayerStat
     * const matchMapPlayerStat = await prisma.matchMapPlayerStat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchMapPlayerStatUpdateArgs>(args: SelectSubset<T, MatchMapPlayerStatUpdateArgs<ExtArgs>>): Prisma__MatchMapPlayerStatClient<$Result.GetResult<Prisma.$MatchMapPlayerStatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MatchMapPlayerStats.
     * @param {MatchMapPlayerStatDeleteManyArgs} args - Arguments to filter MatchMapPlayerStats to delete.
     * @example
     * // Delete a few MatchMapPlayerStats
     * const { count } = await prisma.matchMapPlayerStat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchMapPlayerStatDeleteManyArgs>(args?: SelectSubset<T, MatchMapPlayerStatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchMapPlayerStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchMapPlayerStatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchMapPlayerStats
     * const matchMapPlayerStat = await prisma.matchMapPlayerStat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchMapPlayerStatUpdateManyArgs>(args: SelectSubset<T, MatchMapPlayerStatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchMapPlayerStats and returns the data updated in the database.
     * @param {MatchMapPlayerStatUpdateManyAndReturnArgs} args - Arguments to update many MatchMapPlayerStats.
     * @example
     * // Update many MatchMapPlayerStats
     * const matchMapPlayerStat = await prisma.matchMapPlayerStat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MatchMapPlayerStats and only return the `id`
     * const matchMapPlayerStatWithIdOnly = await prisma.matchMapPlayerStat.updateManyAndReturn({
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
    updateManyAndReturn<T extends MatchMapPlayerStatUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchMapPlayerStatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchMapPlayerStatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MatchMapPlayerStat.
     * @param {MatchMapPlayerStatUpsertArgs} args - Arguments to update or create a MatchMapPlayerStat.
     * @example
     * // Update or create a MatchMapPlayerStat
     * const matchMapPlayerStat = await prisma.matchMapPlayerStat.upsert({
     *   create: {
     *     // ... data to create a MatchMapPlayerStat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchMapPlayerStat we want to update
     *   }
     * })
     */
    upsert<T extends MatchMapPlayerStatUpsertArgs>(args: SelectSubset<T, MatchMapPlayerStatUpsertArgs<ExtArgs>>): Prisma__MatchMapPlayerStatClient<$Result.GetResult<Prisma.$MatchMapPlayerStatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MatchMapPlayerStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchMapPlayerStatCountArgs} args - Arguments to filter MatchMapPlayerStats to count.
     * @example
     * // Count the number of MatchMapPlayerStats
     * const count = await prisma.matchMapPlayerStat.count({
     *   where: {
     *     // ... the filter for the MatchMapPlayerStats we want to count
     *   }
     * })
    **/
    count<T extends MatchMapPlayerStatCountArgs>(
      args?: Subset<T, MatchMapPlayerStatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchMapPlayerStatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchMapPlayerStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchMapPlayerStatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchMapPlayerStatAggregateArgs>(args: Subset<T, MatchMapPlayerStatAggregateArgs>): Prisma.PrismaPromise<GetMatchMapPlayerStatAggregateType<T>>

    /**
     * Group by MatchMapPlayerStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchMapPlayerStatGroupByArgs} args - Group by arguments.
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
      T extends MatchMapPlayerStatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchMapPlayerStatGroupByArgs['orderBy'] }
        : { orderBy?: MatchMapPlayerStatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchMapPlayerStatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchMapPlayerStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchMapPlayerStat model
   */
  readonly fields: MatchMapPlayerStatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchMapPlayerStat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchMapPlayerStatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matchMap<T extends MatchMapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchMapDefaultArgs<ExtArgs>>): Prisma__MatchMapClient<$Result.GetResult<Prisma.$MatchMapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Team<T extends MatchMapPlayerStat$TeamArgs<ExtArgs> = {}>(args?: Subset<T, MatchMapPlayerStat$TeamArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MatchMapPlayerStat model
   */
  interface MatchMapPlayerStatFieldRefs {
    readonly id: FieldRef<"MatchMapPlayerStat", 'String'>
    readonly matchMapId: FieldRef<"MatchMapPlayerStat", 'String'>
    readonly playerId: FieldRef<"MatchMapPlayerStat", 'Int'>
    readonly kills: FieldRef<"MatchMapPlayerStat", 'Int'>
    readonly deaths: FieldRef<"MatchMapPlayerStat", 'Int'>
    readonly assists: FieldRef<"MatchMapPlayerStat", 'Int'>
    readonly damage: FieldRef<"MatchMapPlayerStat", 'Int'>
    readonly objective: FieldRef<"MatchMapPlayerStat", 'Int'>
    readonly score: FieldRef<"MatchMapPlayerStat", 'Int'>
    readonly teamId: FieldRef<"MatchMapPlayerStat", 'Int'>
    readonly createdAt: FieldRef<"MatchMapPlayerStat", 'DateTime'>
    readonly updatedAt: FieldRef<"MatchMapPlayerStat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MatchMapPlayerStat findUnique
   */
  export type MatchMapPlayerStatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMapPlayerStat
     */
    select?: MatchMapPlayerStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMapPlayerStat
     */
    omit?: MatchMapPlayerStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapPlayerStatInclude<ExtArgs> | null
    /**
     * Filter, which MatchMapPlayerStat to fetch.
     */
    where: MatchMapPlayerStatWhereUniqueInput
  }

  /**
   * MatchMapPlayerStat findUniqueOrThrow
   */
  export type MatchMapPlayerStatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMapPlayerStat
     */
    select?: MatchMapPlayerStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMapPlayerStat
     */
    omit?: MatchMapPlayerStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapPlayerStatInclude<ExtArgs> | null
    /**
     * Filter, which MatchMapPlayerStat to fetch.
     */
    where: MatchMapPlayerStatWhereUniqueInput
  }

  /**
   * MatchMapPlayerStat findFirst
   */
  export type MatchMapPlayerStatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMapPlayerStat
     */
    select?: MatchMapPlayerStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMapPlayerStat
     */
    omit?: MatchMapPlayerStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapPlayerStatInclude<ExtArgs> | null
    /**
     * Filter, which MatchMapPlayerStat to fetch.
     */
    where?: MatchMapPlayerStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchMapPlayerStats to fetch.
     */
    orderBy?: MatchMapPlayerStatOrderByWithRelationInput | MatchMapPlayerStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchMapPlayerStats.
     */
    cursor?: MatchMapPlayerStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchMapPlayerStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchMapPlayerStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchMapPlayerStats.
     */
    distinct?: MatchMapPlayerStatScalarFieldEnum | MatchMapPlayerStatScalarFieldEnum[]
  }

  /**
   * MatchMapPlayerStat findFirstOrThrow
   */
  export type MatchMapPlayerStatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMapPlayerStat
     */
    select?: MatchMapPlayerStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMapPlayerStat
     */
    omit?: MatchMapPlayerStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapPlayerStatInclude<ExtArgs> | null
    /**
     * Filter, which MatchMapPlayerStat to fetch.
     */
    where?: MatchMapPlayerStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchMapPlayerStats to fetch.
     */
    orderBy?: MatchMapPlayerStatOrderByWithRelationInput | MatchMapPlayerStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchMapPlayerStats.
     */
    cursor?: MatchMapPlayerStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchMapPlayerStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchMapPlayerStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchMapPlayerStats.
     */
    distinct?: MatchMapPlayerStatScalarFieldEnum | MatchMapPlayerStatScalarFieldEnum[]
  }

  /**
   * MatchMapPlayerStat findMany
   */
  export type MatchMapPlayerStatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMapPlayerStat
     */
    select?: MatchMapPlayerStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMapPlayerStat
     */
    omit?: MatchMapPlayerStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapPlayerStatInclude<ExtArgs> | null
    /**
     * Filter, which MatchMapPlayerStats to fetch.
     */
    where?: MatchMapPlayerStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchMapPlayerStats to fetch.
     */
    orderBy?: MatchMapPlayerStatOrderByWithRelationInput | MatchMapPlayerStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchMapPlayerStats.
     */
    cursor?: MatchMapPlayerStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchMapPlayerStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchMapPlayerStats.
     */
    skip?: number
    distinct?: MatchMapPlayerStatScalarFieldEnum | MatchMapPlayerStatScalarFieldEnum[]
  }

  /**
   * MatchMapPlayerStat create
   */
  export type MatchMapPlayerStatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMapPlayerStat
     */
    select?: MatchMapPlayerStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMapPlayerStat
     */
    omit?: MatchMapPlayerStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapPlayerStatInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchMapPlayerStat.
     */
    data: XOR<MatchMapPlayerStatCreateInput, MatchMapPlayerStatUncheckedCreateInput>
  }

  /**
   * MatchMapPlayerStat createMany
   */
  export type MatchMapPlayerStatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchMapPlayerStats.
     */
    data: MatchMapPlayerStatCreateManyInput | MatchMapPlayerStatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MatchMapPlayerStat createManyAndReturn
   */
  export type MatchMapPlayerStatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMapPlayerStat
     */
    select?: MatchMapPlayerStatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMapPlayerStat
     */
    omit?: MatchMapPlayerStatOmit<ExtArgs> | null
    /**
     * The data used to create many MatchMapPlayerStats.
     */
    data: MatchMapPlayerStatCreateManyInput | MatchMapPlayerStatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapPlayerStatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchMapPlayerStat update
   */
  export type MatchMapPlayerStatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMapPlayerStat
     */
    select?: MatchMapPlayerStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMapPlayerStat
     */
    omit?: MatchMapPlayerStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapPlayerStatInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchMapPlayerStat.
     */
    data: XOR<MatchMapPlayerStatUpdateInput, MatchMapPlayerStatUncheckedUpdateInput>
    /**
     * Choose, which MatchMapPlayerStat to update.
     */
    where: MatchMapPlayerStatWhereUniqueInput
  }

  /**
   * MatchMapPlayerStat updateMany
   */
  export type MatchMapPlayerStatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchMapPlayerStats.
     */
    data: XOR<MatchMapPlayerStatUpdateManyMutationInput, MatchMapPlayerStatUncheckedUpdateManyInput>
    /**
     * Filter which MatchMapPlayerStats to update
     */
    where?: MatchMapPlayerStatWhereInput
    /**
     * Limit how many MatchMapPlayerStats to update.
     */
    limit?: number
  }

  /**
   * MatchMapPlayerStat updateManyAndReturn
   */
  export type MatchMapPlayerStatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMapPlayerStat
     */
    select?: MatchMapPlayerStatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMapPlayerStat
     */
    omit?: MatchMapPlayerStatOmit<ExtArgs> | null
    /**
     * The data used to update MatchMapPlayerStats.
     */
    data: XOR<MatchMapPlayerStatUpdateManyMutationInput, MatchMapPlayerStatUncheckedUpdateManyInput>
    /**
     * Filter which MatchMapPlayerStats to update
     */
    where?: MatchMapPlayerStatWhereInput
    /**
     * Limit how many MatchMapPlayerStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapPlayerStatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchMapPlayerStat upsert
   */
  export type MatchMapPlayerStatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMapPlayerStat
     */
    select?: MatchMapPlayerStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMapPlayerStat
     */
    omit?: MatchMapPlayerStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapPlayerStatInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchMapPlayerStat to update in case it exists.
     */
    where: MatchMapPlayerStatWhereUniqueInput
    /**
     * In case the MatchMapPlayerStat found by the `where` argument doesn't exist, create a new MatchMapPlayerStat with this data.
     */
    create: XOR<MatchMapPlayerStatCreateInput, MatchMapPlayerStatUncheckedCreateInput>
    /**
     * In case the MatchMapPlayerStat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchMapPlayerStatUpdateInput, MatchMapPlayerStatUncheckedUpdateInput>
  }

  /**
   * MatchMapPlayerStat delete
   */
  export type MatchMapPlayerStatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMapPlayerStat
     */
    select?: MatchMapPlayerStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMapPlayerStat
     */
    omit?: MatchMapPlayerStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapPlayerStatInclude<ExtArgs> | null
    /**
     * Filter which MatchMapPlayerStat to delete.
     */
    where: MatchMapPlayerStatWhereUniqueInput
  }

  /**
   * MatchMapPlayerStat deleteMany
   */
  export type MatchMapPlayerStatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchMapPlayerStats to delete
     */
    where?: MatchMapPlayerStatWhereInput
    /**
     * Limit how many MatchMapPlayerStats to delete.
     */
    limit?: number
  }

  /**
   * MatchMapPlayerStat.Team
   */
  export type MatchMapPlayerStat$TeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * MatchMapPlayerStat without action
   */
  export type MatchMapPlayerStatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchMapPlayerStat
     */
    select?: MatchMapPlayerStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchMapPlayerStat
     */
    omit?: MatchMapPlayerStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchMapPlayerStatInclude<ExtArgs> | null
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
    email: 'email',
    password: 'password',
    isVerified: 'isVerified',
    isActive: 'isActive',
    verificationToken: 'verificationToken',
    verificationTokenExpiry: 'verificationTokenExpiry',
    passwordResetToken: 'passwordResetToken',
    passwordResetTokenExpiry: 'passwordResetTokenExpiry',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    username: 'username',
    profileImage: 'profileImage',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const PlayerScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    gamertag: 'gamertag',
    playerImage: 'playerImage',
    role: 'role',
    teamId: 'teamId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    logo: 'logo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const MatchScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    teamAId: 'teamAId',
    teamBId: 'teamBId',
    winnerId: 'winnerId',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    name: 'name',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const StatScalarFieldEnum: {
    id: 'id',
    playerId: 'playerId',
    matchMapId: 'matchMapId',
    kills: 'kills',
    deaths: 'deaths',
    assists: 'assists',
    damage: 'damage',
    objective: 'objective',
    score: 'score',
    matchId: 'matchId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StatScalarFieldEnum = (typeof StatScalarFieldEnum)[keyof typeof StatScalarFieldEnum]


  export const LeaderboardScalarFieldEnum: {
    id: 'id',
    playerId: 'playerId',
    rank: 'rank',
    score: 'score',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LeaderboardScalarFieldEnum = (typeof LeaderboardScalarFieldEnum)[keyof typeof LeaderboardScalarFieldEnum]


  export const GameModeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GameModeScalarFieldEnum = (typeof GameModeScalarFieldEnum)[keyof typeof GameModeScalarFieldEnum]


  export const MapScalarFieldEnum: {
    id: 'id',
    name: 'name',
    gameModeId: 'gameModeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MapScalarFieldEnum = (typeof MapScalarFieldEnum)[keyof typeof MapScalarFieldEnum]


  export const MatchMapScalarFieldEnum: {
    id: 'id',
    matchId: 'matchId',
    mapId: 'mapId',
    gameModeId: 'gameModeId',
    mapNumber: 'mapNumber',
    winnerId: 'winnerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MatchMapScalarFieldEnum = (typeof MatchMapScalarFieldEnum)[keyof typeof MatchMapScalarFieldEnum]


  export const MatchMapPlayerStatScalarFieldEnum: {
    id: 'id',
    matchMapId: 'matchMapId',
    playerId: 'playerId',
    kills: 'kills',
    deaths: 'deaths',
    assists: 'assists',
    damage: 'damage',
    objective: 'objective',
    score: 'score',
    teamId: 'teamId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MatchMapPlayerStatScalarFieldEnum = (typeof MatchMapPlayerStatScalarFieldEnum)[keyof typeof MatchMapPlayerStatScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PlayerRole'
   */
  export type EnumPlayerRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlayerRole'>
    


  /**
   * Reference to a field of type 'PlayerRole[]'
   */
  export type ListEnumPlayerRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlayerRole[]'>
    


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
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isVerified?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    verificationToken?: StringNullableFilter<"User"> | string | null
    verificationTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    passwordResetToken?: StringNullableFilter<"User"> | string | null
    passwordResetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    isActive?: SortOrder
    verificationToken?: SortOrderInput | SortOrder
    verificationTokenExpiry?: SortOrderInput | SortOrder
    passwordResetToken?: SortOrderInput | SortOrder
    passwordResetTokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    isVerified?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    verificationToken?: StringNullableFilter<"User"> | string | null
    verificationTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    passwordResetToken?: StringNullableFilter<"User"> | string | null
    passwordResetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    isActive?: SortOrder
    verificationToken?: SortOrderInput | SortOrder
    verificationTokenExpiry?: SortOrderInput | SortOrder
    passwordResetToken?: SortOrderInput | SortOrder
    passwordResetTokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
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
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    verificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    verificationTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    passwordResetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordResetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: IntFilter<"Profile"> | number
    firstName?: StringFilter<"Profile"> | string
    lastName?: StringFilter<"Profile"> | string
    username?: StringNullableFilter<"Profile"> | string | null
    profileImage?: StringNullableFilter<"Profile"> | string | null
    userId?: IntFilter<"Profile"> | number
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Profile"> | Date | string | null
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    firstName?: StringFilter<"Profile"> | string
    lastName?: StringFilter<"Profile"> | string
    username?: StringNullableFilter<"Profile"> | string | null
    profileImage?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Profile"> | Date | string | null
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profile"> | number
    firstName?: StringWithAggregatesFilter<"Profile"> | string
    lastName?: StringWithAggregatesFilter<"Profile"> | string
    username?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    profileImage?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    userId?: IntWithAggregatesFilter<"Profile"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Profile"> | Date | string | null
  }

  export type PlayerWhereInput = {
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    id?: IntFilter<"Player"> | number
    firstName?: StringFilter<"Player"> | string
    lastName?: StringFilter<"Player"> | string
    gamertag?: StringFilter<"Player"> | string
    playerImage?: StringNullableFilter<"Player"> | string | null
    role?: EnumPlayerRoleFilter<"Player"> | $Enums.PlayerRole
    teamId?: IntNullableFilter<"Player"> | number | null
    createdAt?: DateTimeFilter<"Player"> | Date | string
    updatedAt?: DateTimeFilter<"Player"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Player"> | Date | string | null
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    stats?: StatListRelationFilter
    leaderboard?: XOR<LeaderboardNullableScalarRelationFilter, LeaderboardWhereInput> | null
    MatchMapPlayerStat?: MatchMapPlayerStatListRelationFilter
  }

  export type PlayerOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gamertag?: SortOrder
    playerImage?: SortOrderInput | SortOrder
    role?: SortOrder
    teamId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    team?: TeamOrderByWithRelationInput
    stats?: StatOrderByRelationAggregateInput
    leaderboard?: LeaderboardOrderByWithRelationInput
    MatchMapPlayerStat?: MatchMapPlayerStatOrderByRelationAggregateInput
  }

  export type PlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    gamertag?: string
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    firstName?: StringFilter<"Player"> | string
    lastName?: StringFilter<"Player"> | string
    playerImage?: StringNullableFilter<"Player"> | string | null
    role?: EnumPlayerRoleFilter<"Player"> | $Enums.PlayerRole
    teamId?: IntNullableFilter<"Player"> | number | null
    createdAt?: DateTimeFilter<"Player"> | Date | string
    updatedAt?: DateTimeFilter<"Player"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Player"> | Date | string | null
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    stats?: StatListRelationFilter
    leaderboard?: XOR<LeaderboardNullableScalarRelationFilter, LeaderboardWhereInput> | null
    MatchMapPlayerStat?: MatchMapPlayerStatListRelationFilter
  }, "id" | "gamertag">

  export type PlayerOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gamertag?: SortOrder
    playerImage?: SortOrderInput | SortOrder
    role?: SortOrder
    teamId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: PlayerCountOrderByAggregateInput
    _avg?: PlayerAvgOrderByAggregateInput
    _max?: PlayerMaxOrderByAggregateInput
    _min?: PlayerMinOrderByAggregateInput
    _sum?: PlayerSumOrderByAggregateInput
  }

  export type PlayerScalarWhereWithAggregatesInput = {
    AND?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    OR?: PlayerScalarWhereWithAggregatesInput[]
    NOT?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Player"> | number
    firstName?: StringWithAggregatesFilter<"Player"> | string
    lastName?: StringWithAggregatesFilter<"Player"> | string
    gamertag?: StringWithAggregatesFilter<"Player"> | string
    playerImage?: StringNullableWithAggregatesFilter<"Player"> | string | null
    role?: EnumPlayerRoleWithAggregatesFilter<"Player"> | $Enums.PlayerRole
    teamId?: IntNullableWithAggregatesFilter<"Player"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Player"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Player"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Player"> | Date | string | null
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: IntFilter<"Team"> | number
    name?: StringFilter<"Team"> | string
    logo?: StringNullableFilter<"Team"> | string | null
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Team"> | Date | string | null
    players?: PlayerListRelationFilter
    teamA_Matches?: MatchListRelationFilter
    teamB_Matches?: MatchListRelationFilter
    matchesWon?: MatchListRelationFilter
    MatchMap?: MatchMapListRelationFilter
    matchMapStats?: MatchMapPlayerStatListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    players?: PlayerOrderByRelationAggregateInput
    teamA_Matches?: MatchOrderByRelationAggregateInput
    teamB_Matches?: MatchOrderByRelationAggregateInput
    matchesWon?: MatchOrderByRelationAggregateInput
    MatchMap?: MatchMapOrderByRelationAggregateInput
    matchMapStats?: MatchMapPlayerStatOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    logo?: StringNullableFilter<"Team"> | string | null
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Team"> | Date | string | null
    players?: PlayerListRelationFilter
    teamA_Matches?: MatchListRelationFilter
    teamB_Matches?: MatchListRelationFilter
    matchesWon?: MatchListRelationFilter
    MatchMap?: MatchMapListRelationFilter
    matchMapStats?: MatchMapPlayerStatListRelationFilter
  }, "id" | "name">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: TeamCountOrderByAggregateInput
    _avg?: TeamAvgOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
    _sum?: TeamSumOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Team"> | number
    name?: StringWithAggregatesFilter<"Team"> | string
    logo?: StringNullableWithAggregatesFilter<"Team"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Team"> | Date | string | null
  }

  export type MatchWhereInput = {
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    id?: StringFilter<"Match"> | string
    eventId?: StringNullableFilter<"Match"> | string | null
    teamAId?: IntFilter<"Match"> | number
    teamBId?: IntFilter<"Match"> | number
    winnerId?: IntNullableFilter<"Match"> | number | null
    date?: DateTimeFilter<"Match"> | Date | string
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
    teamA?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    teamB?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    winner?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    stats?: StatListRelationFilter
    MatchMap?: MatchMapListRelationFilter
  }

  export type MatchOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrderInput | SortOrder
    teamAId?: SortOrder
    teamBId?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    event?: EventOrderByWithRelationInput
    teamA?: TeamOrderByWithRelationInput
    teamB?: TeamOrderByWithRelationInput
    winner?: TeamOrderByWithRelationInput
    stats?: StatOrderByRelationAggregateInput
    MatchMap?: MatchMapOrderByRelationAggregateInput
  }

  export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    eventId?: StringNullableFilter<"Match"> | string | null
    teamAId?: IntFilter<"Match"> | number
    teamBId?: IntFilter<"Match"> | number
    winnerId?: IntNullableFilter<"Match"> | number | null
    date?: DateTimeFilter<"Match"> | Date | string
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
    teamA?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    teamB?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    winner?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    stats?: StatListRelationFilter
    MatchMap?: MatchMapListRelationFilter
  }, "id">

  export type MatchOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrderInput | SortOrder
    teamAId?: SortOrder
    teamBId?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MatchCountOrderByAggregateInput
    _avg?: MatchAvgOrderByAggregateInput
    _max?: MatchMaxOrderByAggregateInput
    _min?: MatchMinOrderByAggregateInput
    _sum?: MatchSumOrderByAggregateInput
  }

  export type MatchScalarWhereWithAggregatesInput = {
    AND?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    OR?: MatchScalarWhereWithAggregatesInput[]
    NOT?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Match"> | string
    eventId?: StringNullableWithAggregatesFilter<"Match"> | string | null
    teamAId?: IntWithAggregatesFilter<"Match"> | number
    teamBId?: IntWithAggregatesFilter<"Match"> | number
    winnerId?: IntNullableWithAggregatesFilter<"Match"> | number | null
    date?: DateTimeWithAggregatesFilter<"Match"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    name?: StringFilter<"Event"> | string
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    matches?: MatchListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    matches?: MatchOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    name?: StringFilter<"Event"> | string
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    matches?: MatchListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    name?: StringWithAggregatesFilter<"Event"> | string
    startDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type StatWhereInput = {
    AND?: StatWhereInput | StatWhereInput[]
    OR?: StatWhereInput[]
    NOT?: StatWhereInput | StatWhereInput[]
    id?: StringFilter<"Stat"> | string
    playerId?: IntFilter<"Stat"> | number
    matchMapId?: StringFilter<"Stat"> | string
    kills?: IntFilter<"Stat"> | number
    deaths?: IntFilter<"Stat"> | number
    assists?: IntFilter<"Stat"> | number
    damage?: IntFilter<"Stat"> | number
    objective?: IntFilter<"Stat"> | number
    score?: IntFilter<"Stat"> | number
    matchId?: StringNullableFilter<"Stat"> | string | null
    createdAt?: DateTimeFilter<"Stat"> | Date | string
    updatedAt?: DateTimeFilter<"Stat"> | Date | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
    matchMap?: XOR<MatchMapScalarRelationFilter, MatchMapWhereInput>
    Match?: XOR<MatchNullableScalarRelationFilter, MatchWhereInput> | null
  }

  export type StatOrderByWithRelationInput = {
    id?: SortOrder
    playerId?: SortOrder
    matchMapId?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    assists?: SortOrder
    damage?: SortOrder
    objective?: SortOrder
    score?: SortOrder
    matchId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    player?: PlayerOrderByWithRelationInput
    matchMap?: MatchMapOrderByWithRelationInput
    Match?: MatchOrderByWithRelationInput
  }

  export type StatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StatWhereInput | StatWhereInput[]
    OR?: StatWhereInput[]
    NOT?: StatWhereInput | StatWhereInput[]
    playerId?: IntFilter<"Stat"> | number
    matchMapId?: StringFilter<"Stat"> | string
    kills?: IntFilter<"Stat"> | number
    deaths?: IntFilter<"Stat"> | number
    assists?: IntFilter<"Stat"> | number
    damage?: IntFilter<"Stat"> | number
    objective?: IntFilter<"Stat"> | number
    score?: IntFilter<"Stat"> | number
    matchId?: StringNullableFilter<"Stat"> | string | null
    createdAt?: DateTimeFilter<"Stat"> | Date | string
    updatedAt?: DateTimeFilter<"Stat"> | Date | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
    matchMap?: XOR<MatchMapScalarRelationFilter, MatchMapWhereInput>
    Match?: XOR<MatchNullableScalarRelationFilter, MatchWhereInput> | null
  }, "id">

  export type StatOrderByWithAggregationInput = {
    id?: SortOrder
    playerId?: SortOrder
    matchMapId?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    assists?: SortOrder
    damage?: SortOrder
    objective?: SortOrder
    score?: SortOrder
    matchId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StatCountOrderByAggregateInput
    _avg?: StatAvgOrderByAggregateInput
    _max?: StatMaxOrderByAggregateInput
    _min?: StatMinOrderByAggregateInput
    _sum?: StatSumOrderByAggregateInput
  }

  export type StatScalarWhereWithAggregatesInput = {
    AND?: StatScalarWhereWithAggregatesInput | StatScalarWhereWithAggregatesInput[]
    OR?: StatScalarWhereWithAggregatesInput[]
    NOT?: StatScalarWhereWithAggregatesInput | StatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Stat"> | string
    playerId?: IntWithAggregatesFilter<"Stat"> | number
    matchMapId?: StringWithAggregatesFilter<"Stat"> | string
    kills?: IntWithAggregatesFilter<"Stat"> | number
    deaths?: IntWithAggregatesFilter<"Stat"> | number
    assists?: IntWithAggregatesFilter<"Stat"> | number
    damage?: IntWithAggregatesFilter<"Stat"> | number
    objective?: IntWithAggregatesFilter<"Stat"> | number
    score?: IntWithAggregatesFilter<"Stat"> | number
    matchId?: StringNullableWithAggregatesFilter<"Stat"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Stat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Stat"> | Date | string
  }

  export type LeaderboardWhereInput = {
    AND?: LeaderboardWhereInput | LeaderboardWhereInput[]
    OR?: LeaderboardWhereInput[]
    NOT?: LeaderboardWhereInput | LeaderboardWhereInput[]
    id?: StringFilter<"Leaderboard"> | string
    playerId?: IntFilter<"Leaderboard"> | number
    rank?: IntFilter<"Leaderboard"> | number
    score?: IntFilter<"Leaderboard"> | number
    createdAt?: DateTimeFilter<"Leaderboard"> | Date | string
    updatedAt?: DateTimeFilter<"Leaderboard"> | Date | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }

  export type LeaderboardOrderByWithRelationInput = {
    id?: SortOrder
    playerId?: SortOrder
    rank?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    player?: PlayerOrderByWithRelationInput
  }

  export type LeaderboardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    playerId?: number
    AND?: LeaderboardWhereInput | LeaderboardWhereInput[]
    OR?: LeaderboardWhereInput[]
    NOT?: LeaderboardWhereInput | LeaderboardWhereInput[]
    rank?: IntFilter<"Leaderboard"> | number
    score?: IntFilter<"Leaderboard"> | number
    createdAt?: DateTimeFilter<"Leaderboard"> | Date | string
    updatedAt?: DateTimeFilter<"Leaderboard"> | Date | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }, "id" | "playerId">

  export type LeaderboardOrderByWithAggregationInput = {
    id?: SortOrder
    playerId?: SortOrder
    rank?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LeaderboardCountOrderByAggregateInput
    _avg?: LeaderboardAvgOrderByAggregateInput
    _max?: LeaderboardMaxOrderByAggregateInput
    _min?: LeaderboardMinOrderByAggregateInput
    _sum?: LeaderboardSumOrderByAggregateInput
  }

  export type LeaderboardScalarWhereWithAggregatesInput = {
    AND?: LeaderboardScalarWhereWithAggregatesInput | LeaderboardScalarWhereWithAggregatesInput[]
    OR?: LeaderboardScalarWhereWithAggregatesInput[]
    NOT?: LeaderboardScalarWhereWithAggregatesInput | LeaderboardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Leaderboard"> | string
    playerId?: IntWithAggregatesFilter<"Leaderboard"> | number
    rank?: IntWithAggregatesFilter<"Leaderboard"> | number
    score?: IntWithAggregatesFilter<"Leaderboard"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Leaderboard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Leaderboard"> | Date | string
  }

  export type GameModeWhereInput = {
    AND?: GameModeWhereInput | GameModeWhereInput[]
    OR?: GameModeWhereInput[]
    NOT?: GameModeWhereInput | GameModeWhereInput[]
    id?: IntFilter<"GameMode"> | number
    name?: StringFilter<"GameMode"> | string
    createdAt?: DateTimeFilter<"GameMode"> | Date | string
    updatedAt?: DateTimeFilter<"GameMode"> | Date | string
    maps?: MapListRelationFilter
    MatchMap?: MatchMapListRelationFilter
  }

  export type GameModeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    maps?: MapOrderByRelationAggregateInput
    MatchMap?: MatchMapOrderByRelationAggregateInput
  }

  export type GameModeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: GameModeWhereInput | GameModeWhereInput[]
    OR?: GameModeWhereInput[]
    NOT?: GameModeWhereInput | GameModeWhereInput[]
    createdAt?: DateTimeFilter<"GameMode"> | Date | string
    updatedAt?: DateTimeFilter<"GameMode"> | Date | string
    maps?: MapListRelationFilter
    MatchMap?: MatchMapListRelationFilter
  }, "id" | "name">

  export type GameModeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GameModeCountOrderByAggregateInput
    _avg?: GameModeAvgOrderByAggregateInput
    _max?: GameModeMaxOrderByAggregateInput
    _min?: GameModeMinOrderByAggregateInput
    _sum?: GameModeSumOrderByAggregateInput
  }

  export type GameModeScalarWhereWithAggregatesInput = {
    AND?: GameModeScalarWhereWithAggregatesInput | GameModeScalarWhereWithAggregatesInput[]
    OR?: GameModeScalarWhereWithAggregatesInput[]
    NOT?: GameModeScalarWhereWithAggregatesInput | GameModeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GameMode"> | number
    name?: StringWithAggregatesFilter<"GameMode"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GameMode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GameMode"> | Date | string
  }

  export type MapWhereInput = {
    AND?: MapWhereInput | MapWhereInput[]
    OR?: MapWhereInput[]
    NOT?: MapWhereInput | MapWhereInput[]
    id?: IntFilter<"Map"> | number
    name?: StringFilter<"Map"> | string
    gameModeId?: IntFilter<"Map"> | number
    createdAt?: DateTimeFilter<"Map"> | Date | string
    updatedAt?: DateTimeFilter<"Map"> | Date | string
    gameMode?: XOR<GameModeScalarRelationFilter, GameModeWhereInput>
    matchMaps?: MatchMapListRelationFilter
  }

  export type MapOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    gameModeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gameMode?: GameModeOrderByWithRelationInput
    matchMaps?: MatchMapOrderByRelationAggregateInput
  }

  export type MapWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: MapWhereInput | MapWhereInput[]
    OR?: MapWhereInput[]
    NOT?: MapWhereInput | MapWhereInput[]
    gameModeId?: IntFilter<"Map"> | number
    createdAt?: DateTimeFilter<"Map"> | Date | string
    updatedAt?: DateTimeFilter<"Map"> | Date | string
    gameMode?: XOR<GameModeScalarRelationFilter, GameModeWhereInput>
    matchMaps?: MatchMapListRelationFilter
  }, "id" | "name">

  export type MapOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    gameModeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MapCountOrderByAggregateInput
    _avg?: MapAvgOrderByAggregateInput
    _max?: MapMaxOrderByAggregateInput
    _min?: MapMinOrderByAggregateInput
    _sum?: MapSumOrderByAggregateInput
  }

  export type MapScalarWhereWithAggregatesInput = {
    AND?: MapScalarWhereWithAggregatesInput | MapScalarWhereWithAggregatesInput[]
    OR?: MapScalarWhereWithAggregatesInput[]
    NOT?: MapScalarWhereWithAggregatesInput | MapScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Map"> | number
    name?: StringWithAggregatesFilter<"Map"> | string
    gameModeId?: IntWithAggregatesFilter<"Map"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Map"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Map"> | Date | string
  }

  export type MatchMapWhereInput = {
    AND?: MatchMapWhereInput | MatchMapWhereInput[]
    OR?: MatchMapWhereInput[]
    NOT?: MatchMapWhereInput | MatchMapWhereInput[]
    id?: StringFilter<"MatchMap"> | string
    matchId?: StringFilter<"MatchMap"> | string
    mapId?: IntFilter<"MatchMap"> | number
    gameModeId?: IntFilter<"MatchMap"> | number
    mapNumber?: IntFilter<"MatchMap"> | number
    winnerId?: IntNullableFilter<"MatchMap"> | number | null
    createdAt?: DateTimeFilter<"MatchMap"> | Date | string
    updatedAt?: DateTimeFilter<"MatchMap"> | Date | string
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
    map?: XOR<MapScalarRelationFilter, MapWhereInput>
    gameMode?: XOR<GameModeScalarRelationFilter, GameModeWhereInput>
    winner?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    stats?: StatListRelationFilter
    MatchMapPlayerStat?: MatchMapPlayerStatListRelationFilter
  }

  export type MatchMapOrderByWithRelationInput = {
    id?: SortOrder
    matchId?: SortOrder
    mapId?: SortOrder
    gameModeId?: SortOrder
    mapNumber?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    match?: MatchOrderByWithRelationInput
    map?: MapOrderByWithRelationInput
    gameMode?: GameModeOrderByWithRelationInput
    winner?: TeamOrderByWithRelationInput
    stats?: StatOrderByRelationAggregateInput
    MatchMapPlayerStat?: MatchMapPlayerStatOrderByRelationAggregateInput
  }

  export type MatchMapWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    matchId_mapNumber?: MatchMapMatchIdMapNumberCompoundUniqueInput
    AND?: MatchMapWhereInput | MatchMapWhereInput[]
    OR?: MatchMapWhereInput[]
    NOT?: MatchMapWhereInput | MatchMapWhereInput[]
    matchId?: StringFilter<"MatchMap"> | string
    mapId?: IntFilter<"MatchMap"> | number
    gameModeId?: IntFilter<"MatchMap"> | number
    mapNumber?: IntFilter<"MatchMap"> | number
    winnerId?: IntNullableFilter<"MatchMap"> | number | null
    createdAt?: DateTimeFilter<"MatchMap"> | Date | string
    updatedAt?: DateTimeFilter<"MatchMap"> | Date | string
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
    map?: XOR<MapScalarRelationFilter, MapWhereInput>
    gameMode?: XOR<GameModeScalarRelationFilter, GameModeWhereInput>
    winner?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    stats?: StatListRelationFilter
    MatchMapPlayerStat?: MatchMapPlayerStatListRelationFilter
  }, "id" | "matchId_mapNumber">

  export type MatchMapOrderByWithAggregationInput = {
    id?: SortOrder
    matchId?: SortOrder
    mapId?: SortOrder
    gameModeId?: SortOrder
    mapNumber?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MatchMapCountOrderByAggregateInput
    _avg?: MatchMapAvgOrderByAggregateInput
    _max?: MatchMapMaxOrderByAggregateInput
    _min?: MatchMapMinOrderByAggregateInput
    _sum?: MatchMapSumOrderByAggregateInput
  }

  export type MatchMapScalarWhereWithAggregatesInput = {
    AND?: MatchMapScalarWhereWithAggregatesInput | MatchMapScalarWhereWithAggregatesInput[]
    OR?: MatchMapScalarWhereWithAggregatesInput[]
    NOT?: MatchMapScalarWhereWithAggregatesInput | MatchMapScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MatchMap"> | string
    matchId?: StringWithAggregatesFilter<"MatchMap"> | string
    mapId?: IntWithAggregatesFilter<"MatchMap"> | number
    gameModeId?: IntWithAggregatesFilter<"MatchMap"> | number
    mapNumber?: IntWithAggregatesFilter<"MatchMap"> | number
    winnerId?: IntNullableWithAggregatesFilter<"MatchMap"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"MatchMap"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MatchMap"> | Date | string
  }

  export type MatchMapPlayerStatWhereInput = {
    AND?: MatchMapPlayerStatWhereInput | MatchMapPlayerStatWhereInput[]
    OR?: MatchMapPlayerStatWhereInput[]
    NOT?: MatchMapPlayerStatWhereInput | MatchMapPlayerStatWhereInput[]
    id?: StringFilter<"MatchMapPlayerStat"> | string
    matchMapId?: StringFilter<"MatchMapPlayerStat"> | string
    playerId?: IntFilter<"MatchMapPlayerStat"> | number
    kills?: IntFilter<"MatchMapPlayerStat"> | number
    deaths?: IntFilter<"MatchMapPlayerStat"> | number
    assists?: IntFilter<"MatchMapPlayerStat"> | number
    damage?: IntFilter<"MatchMapPlayerStat"> | number
    objective?: IntFilter<"MatchMapPlayerStat"> | number
    score?: IntFilter<"MatchMapPlayerStat"> | number
    teamId?: IntNullableFilter<"MatchMapPlayerStat"> | number | null
    createdAt?: DateTimeFilter<"MatchMapPlayerStat"> | Date | string
    updatedAt?: DateTimeFilter<"MatchMapPlayerStat"> | Date | string
    matchMap?: XOR<MatchMapScalarRelationFilter, MatchMapWhereInput>
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
    Team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
  }

  export type MatchMapPlayerStatOrderByWithRelationInput = {
    id?: SortOrder
    matchMapId?: SortOrder
    playerId?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    assists?: SortOrder
    damage?: SortOrder
    objective?: SortOrder
    score?: SortOrder
    teamId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    matchMap?: MatchMapOrderByWithRelationInput
    player?: PlayerOrderByWithRelationInput
    Team?: TeamOrderByWithRelationInput
  }

  export type MatchMapPlayerStatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    matchMapId_playerId?: MatchMapPlayerStatMatchMapIdPlayerIdCompoundUniqueInput
    AND?: MatchMapPlayerStatWhereInput | MatchMapPlayerStatWhereInput[]
    OR?: MatchMapPlayerStatWhereInput[]
    NOT?: MatchMapPlayerStatWhereInput | MatchMapPlayerStatWhereInput[]
    matchMapId?: StringFilter<"MatchMapPlayerStat"> | string
    playerId?: IntFilter<"MatchMapPlayerStat"> | number
    kills?: IntFilter<"MatchMapPlayerStat"> | number
    deaths?: IntFilter<"MatchMapPlayerStat"> | number
    assists?: IntFilter<"MatchMapPlayerStat"> | number
    damage?: IntFilter<"MatchMapPlayerStat"> | number
    objective?: IntFilter<"MatchMapPlayerStat"> | number
    score?: IntFilter<"MatchMapPlayerStat"> | number
    teamId?: IntNullableFilter<"MatchMapPlayerStat"> | number | null
    createdAt?: DateTimeFilter<"MatchMapPlayerStat"> | Date | string
    updatedAt?: DateTimeFilter<"MatchMapPlayerStat"> | Date | string
    matchMap?: XOR<MatchMapScalarRelationFilter, MatchMapWhereInput>
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
    Team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
  }, "id" | "matchMapId_playerId">

  export type MatchMapPlayerStatOrderByWithAggregationInput = {
    id?: SortOrder
    matchMapId?: SortOrder
    playerId?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    assists?: SortOrder
    damage?: SortOrder
    objective?: SortOrder
    score?: SortOrder
    teamId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MatchMapPlayerStatCountOrderByAggregateInput
    _avg?: MatchMapPlayerStatAvgOrderByAggregateInput
    _max?: MatchMapPlayerStatMaxOrderByAggregateInput
    _min?: MatchMapPlayerStatMinOrderByAggregateInput
    _sum?: MatchMapPlayerStatSumOrderByAggregateInput
  }

  export type MatchMapPlayerStatScalarWhereWithAggregatesInput = {
    AND?: MatchMapPlayerStatScalarWhereWithAggregatesInput | MatchMapPlayerStatScalarWhereWithAggregatesInput[]
    OR?: MatchMapPlayerStatScalarWhereWithAggregatesInput[]
    NOT?: MatchMapPlayerStatScalarWhereWithAggregatesInput | MatchMapPlayerStatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MatchMapPlayerStat"> | string
    matchMapId?: StringWithAggregatesFilter<"MatchMapPlayerStat"> | string
    playerId?: IntWithAggregatesFilter<"MatchMapPlayerStat"> | number
    kills?: IntWithAggregatesFilter<"MatchMapPlayerStat"> | number
    deaths?: IntWithAggregatesFilter<"MatchMapPlayerStat"> | number
    assists?: IntWithAggregatesFilter<"MatchMapPlayerStat"> | number
    damage?: IntWithAggregatesFilter<"MatchMapPlayerStat"> | number
    objective?: IntWithAggregatesFilter<"MatchMapPlayerStat"> | number
    score?: IntWithAggregatesFilter<"MatchMapPlayerStat"> | number
    teamId?: IntNullableWithAggregatesFilter<"MatchMapPlayerStat"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"MatchMapPlayerStat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MatchMapPlayerStat"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    isVerified?: boolean
    isActive?: boolean
    verificationToken?: string | null
    verificationTokenExpiry?: Date | string | null
    passwordResetToken?: string | null
    passwordResetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    isVerified?: boolean
    isActive?: boolean
    verificationToken?: string | null
    verificationTokenExpiry?: Date | string | null
    passwordResetToken?: string | null
    passwordResetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    isVerified?: boolean
    isActive?: boolean
    verificationToken?: string | null
    verificationTokenExpiry?: Date | string | null
    passwordResetToken?: string | null
    passwordResetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProfileCreateInput = {
    firstName: string
    lastName: string
    username?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    User: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    username?: string | null
    profileImage?: string | null
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProfileUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProfileCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    username?: string | null
    profileImage?: string | null
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProfileUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlayerCreateInput = {
    firstName: string
    lastName: string
    gamertag: string
    playerImage?: string | null
    role: $Enums.PlayerRole
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    team?: TeamCreateNestedOneWithoutPlayersInput
    stats?: StatCreateNestedManyWithoutPlayerInput
    leaderboard?: LeaderboardCreateNestedOneWithoutPlayerInput
    MatchMapPlayerStat?: MatchMapPlayerStatCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    gamertag: string
    playerImage?: string | null
    role: $Enums.PlayerRole
    teamId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    stats?: StatUncheckedCreateNestedManyWithoutPlayerInput
    leaderboard?: LeaderboardUncheckedCreateNestedOneWithoutPlayerInput
    MatchMapPlayerStat?: MatchMapPlayerStatUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    playerImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumPlayerRoleFieldUpdateOperationsInput | $Enums.PlayerRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: TeamUpdateOneWithoutPlayersNestedInput
    stats?: StatUpdateManyWithoutPlayerNestedInput
    leaderboard?: LeaderboardUpdateOneWithoutPlayerNestedInput
    MatchMapPlayerStat?: MatchMapPlayerStatUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    playerImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumPlayerRoleFieldUpdateOperationsInput | $Enums.PlayerRole
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stats?: StatUncheckedUpdateManyWithoutPlayerNestedInput
    leaderboard?: LeaderboardUncheckedUpdateOneWithoutPlayerNestedInput
    MatchMapPlayerStat?: MatchMapPlayerStatUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    gamertag: string
    playerImage?: string | null
    role: $Enums.PlayerRole
    teamId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PlayerUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    playerImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumPlayerRoleFieldUpdateOperationsInput | $Enums.PlayerRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlayerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    playerImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumPlayerRoleFieldUpdateOperationsInput | $Enums.PlayerRole
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TeamCreateInput = {
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    players?: PlayerCreateNestedManyWithoutTeamInput
    teamA_Matches?: MatchCreateNestedManyWithoutTeamAInput
    teamB_Matches?: MatchCreateNestedManyWithoutTeamBInput
    matchesWon?: MatchCreateNestedManyWithoutWinnerInput
    MatchMap?: MatchMapCreateNestedManyWithoutWinnerInput
    matchMapStats?: MatchMapPlayerStatCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: number
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    teamA_Matches?: MatchUncheckedCreateNestedManyWithoutTeamAInput
    teamB_Matches?: MatchUncheckedCreateNestedManyWithoutTeamBInput
    matchesWon?: MatchUncheckedCreateNestedManyWithoutWinnerInput
    MatchMap?: MatchMapUncheckedCreateNestedManyWithoutWinnerInput
    matchMapStats?: MatchMapPlayerStatUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    players?: PlayerUpdateManyWithoutTeamNestedInput
    teamA_Matches?: MatchUpdateManyWithoutTeamANestedInput
    teamB_Matches?: MatchUpdateManyWithoutTeamBNestedInput
    matchesWon?: MatchUpdateManyWithoutWinnerNestedInput
    MatchMap?: MatchMapUpdateManyWithoutWinnerNestedInput
    matchMapStats?: MatchMapPlayerStatUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    teamA_Matches?: MatchUncheckedUpdateManyWithoutTeamANestedInput
    teamB_Matches?: MatchUncheckedUpdateManyWithoutTeamBNestedInput
    matchesWon?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
    MatchMap?: MatchMapUncheckedUpdateManyWithoutWinnerNestedInput
    matchMapStats?: MatchMapPlayerStatUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: number
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TeamUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatchCreateInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    event?: EventCreateNestedOneWithoutMatchesInput
    teamA: TeamCreateNestedOneWithoutTeamA_MatchesInput
    teamB: TeamCreateNestedOneWithoutTeamB_MatchesInput
    winner?: TeamCreateNestedOneWithoutMatchesWonInput
    stats?: StatCreateNestedManyWithoutMatchInput
    MatchMap?: MatchMapCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateInput = {
    id?: string
    eventId?: string | null
    teamAId: number
    teamBId: number
    winnerId?: number | null
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: StatUncheckedCreateNestedManyWithoutMatchInput
    MatchMap?: MatchMapUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneWithoutMatchesNestedInput
    teamA?: TeamUpdateOneRequiredWithoutTeamA_MatchesNestedInput
    teamB?: TeamUpdateOneRequiredWithoutTeamB_MatchesNestedInput
    winner?: TeamUpdateOneWithoutMatchesWonNestedInput
    stats?: StatUpdateManyWithoutMatchNestedInput
    MatchMap?: MatchMapUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    teamAId?: IntFieldUpdateOperationsInput | number
    teamBId?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: StatUncheckedUpdateManyWithoutMatchNestedInput
    MatchMap?: MatchMapUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchCreateManyInput = {
    id?: string
    eventId?: string | null
    teamAId: number
    teamBId: number
    winnerId?: number | null
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    teamAId?: IntFieldUpdateOperationsInput | number
    teamBId?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    matches?: MatchCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    matches?: MatchUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: MatchUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: MatchUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatCreateInput = {
    id?: string
    kills: number
    deaths: number
    assists: number
    damage: number
    objective: number
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
    player: PlayerCreateNestedOneWithoutStatsInput
    matchMap: MatchMapCreateNestedOneWithoutStatsInput
    Match?: MatchCreateNestedOneWithoutStatsInput
  }

  export type StatUncheckedCreateInput = {
    id?: string
    playerId: number
    matchMapId: string
    kills: number
    deaths: number
    assists: number
    damage: number
    objective: number
    score: number
    matchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    damage?: IntFieldUpdateOperationsInput | number
    objective?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutStatsNestedInput
    matchMap?: MatchMapUpdateOneRequiredWithoutStatsNestedInput
    Match?: MatchUpdateOneWithoutStatsNestedInput
  }

  export type StatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: IntFieldUpdateOperationsInput | number
    matchMapId?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    damage?: IntFieldUpdateOperationsInput | number
    objective?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    matchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatCreateManyInput = {
    id?: string
    playerId: number
    matchMapId: string
    kills: number
    deaths: number
    assists: number
    damage: number
    objective: number
    score: number
    matchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    damage?: IntFieldUpdateOperationsInput | number
    objective?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: IntFieldUpdateOperationsInput | number
    matchMapId?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    damage?: IntFieldUpdateOperationsInput | number
    objective?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    matchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderboardCreateInput = {
    id?: string
    rank: number
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
    player: PlayerCreateNestedOneWithoutLeaderboardInput
  }

  export type LeaderboardUncheckedCreateInput = {
    id?: string
    playerId: number
    rank: number
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaderboardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutLeaderboardNestedInput
  }

  export type LeaderboardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderboardCreateManyInput = {
    id?: string
    playerId: number
    rank: number
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaderboardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderboardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameModeCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maps?: MapCreateNestedManyWithoutGameModeInput
    MatchMap?: MatchMapCreateNestedManyWithoutGameModeInput
  }

  export type GameModeUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maps?: MapUncheckedCreateNestedManyWithoutGameModeInput
    MatchMap?: MatchMapUncheckedCreateNestedManyWithoutGameModeInput
  }

  export type GameModeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maps?: MapUpdateManyWithoutGameModeNestedInput
    MatchMap?: MatchMapUpdateManyWithoutGameModeNestedInput
  }

  export type GameModeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maps?: MapUncheckedUpdateManyWithoutGameModeNestedInput
    MatchMap?: MatchMapUncheckedUpdateManyWithoutGameModeNestedInput
  }

  export type GameModeCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameModeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameModeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gameMode: GameModeCreateNestedOneWithoutMapsInput
    matchMaps?: MatchMapCreateNestedManyWithoutMapInput
  }

  export type MapUncheckedCreateInput = {
    id?: number
    name: string
    gameModeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    matchMaps?: MatchMapUncheckedCreateNestedManyWithoutMapInput
  }

  export type MapUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameMode?: GameModeUpdateOneRequiredWithoutMapsNestedInput
    matchMaps?: MatchMapUpdateManyWithoutMapNestedInput
  }

  export type MapUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gameModeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchMaps?: MatchMapUncheckedUpdateManyWithoutMapNestedInput
  }

  export type MapCreateManyInput = {
    id?: number
    name: string
    gameModeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MapUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gameModeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchMapCreateInput = {
    id?: string
    mapNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    match: MatchCreateNestedOneWithoutMatchMapInput
    map: MapCreateNestedOneWithoutMatchMapsInput
    gameMode: GameModeCreateNestedOneWithoutMatchMapInput
    winner?: TeamCreateNestedOneWithoutMatchMapInput
    stats?: StatCreateNestedManyWithoutMatchMapInput
    MatchMapPlayerStat?: MatchMapPlayerStatCreateNestedManyWithoutMatchMapInput
  }

  export type MatchMapUncheckedCreateInput = {
    id?: string
    matchId: string
    mapId: number
    gameModeId: number
    mapNumber: number
    winnerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: StatUncheckedCreateNestedManyWithoutMatchMapInput
    MatchMapPlayerStat?: MatchMapPlayerStatUncheckedCreateNestedManyWithoutMatchMapInput
  }

  export type MatchMapUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mapNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutMatchMapNestedInput
    map?: MapUpdateOneRequiredWithoutMatchMapsNestedInput
    gameMode?: GameModeUpdateOneRequiredWithoutMatchMapNestedInput
    winner?: TeamUpdateOneWithoutMatchMapNestedInput
    stats?: StatUpdateManyWithoutMatchMapNestedInput
    MatchMapPlayerStat?: MatchMapPlayerStatUpdateManyWithoutMatchMapNestedInput
  }

  export type MatchMapUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    mapId?: IntFieldUpdateOperationsInput | number
    gameModeId?: IntFieldUpdateOperationsInput | number
    mapNumber?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: StatUncheckedUpdateManyWithoutMatchMapNestedInput
    MatchMapPlayerStat?: MatchMapPlayerStatUncheckedUpdateManyWithoutMatchMapNestedInput
  }

  export type MatchMapCreateManyInput = {
    id?: string
    matchId: string
    mapId: number
    gameModeId: number
    mapNumber: number
    winnerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchMapUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mapNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchMapUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    mapId?: IntFieldUpdateOperationsInput | number
    gameModeId?: IntFieldUpdateOperationsInput | number
    mapNumber?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchMapPlayerStatCreateInput = {
    id?: string
    kills: number
    deaths: number
    assists: number
    damage: number
    objective: number
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
    matchMap: MatchMapCreateNestedOneWithoutMatchMapPlayerStatInput
    player: PlayerCreateNestedOneWithoutMatchMapPlayerStatInput
    Team?: TeamCreateNestedOneWithoutMatchMapStatsInput
  }

  export type MatchMapPlayerStatUncheckedCreateInput = {
    id?: string
    matchMapId: string
    playerId: number
    kills: number
    deaths: number
    assists: number
    damage: number
    objective: number
    score: number
    teamId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchMapPlayerStatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    damage?: IntFieldUpdateOperationsInput | number
    objective?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchMap?: MatchMapUpdateOneRequiredWithoutMatchMapPlayerStatNestedInput
    player?: PlayerUpdateOneRequiredWithoutMatchMapPlayerStatNestedInput
    Team?: TeamUpdateOneWithoutMatchMapStatsNestedInput
  }

  export type MatchMapPlayerStatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchMapId?: StringFieldUpdateOperationsInput | string
    playerId?: IntFieldUpdateOperationsInput | number
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    damage?: IntFieldUpdateOperationsInput | number
    objective?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchMapPlayerStatCreateManyInput = {
    id?: string
    matchMapId: string
    playerId: number
    kills: number
    deaths: number
    assists: number
    damage: number
    objective: number
    score: number
    teamId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchMapPlayerStatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    damage?: IntFieldUpdateOperationsInput | number
    objective?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchMapPlayerStatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchMapId?: StringFieldUpdateOperationsInput | string
    playerId?: IntFieldUpdateOperationsInput | number
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    damage?: IntFieldUpdateOperationsInput | number
    objective?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    isActive?: SortOrder
    verificationToken?: SortOrder
    verificationTokenExpiry?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetTokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    isActive?: SortOrder
    verificationToken?: SortOrder
    verificationTokenExpiry?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetTokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    isActive?: SortOrder
    verificationToken?: SortOrder
    verificationTokenExpiry?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetTokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    profileImage?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    profileImage?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    profileImage?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumPlayerRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerRole | EnumPlayerRoleFieldRefInput<$PrismaModel>
    in?: $Enums.PlayerRole[] | ListEnumPlayerRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlayerRole[] | ListEnumPlayerRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumPlayerRoleFilter<$PrismaModel> | $Enums.PlayerRole
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TeamNullableScalarRelationFilter = {
    is?: TeamWhereInput | null
    isNot?: TeamWhereInput | null
  }

  export type StatListRelationFilter = {
    every?: StatWhereInput
    some?: StatWhereInput
    none?: StatWhereInput
  }

  export type LeaderboardNullableScalarRelationFilter = {
    is?: LeaderboardWhereInput | null
    isNot?: LeaderboardWhereInput | null
  }

  export type MatchMapPlayerStatListRelationFilter = {
    every?: MatchMapPlayerStatWhereInput
    some?: MatchMapPlayerStatWhereInput
    none?: MatchMapPlayerStatWhereInput
  }

  export type StatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchMapPlayerStatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gamertag?: SortOrder
    playerImage?: SortOrder
    role?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PlayerAvgOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
  }

  export type PlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gamertag?: SortOrder
    playerImage?: SortOrder
    role?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PlayerMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gamertag?: SortOrder
    playerImage?: SortOrder
    role?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PlayerSumOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
  }

  export type EnumPlayerRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerRole | EnumPlayerRoleFieldRefInput<$PrismaModel>
    in?: $Enums.PlayerRole[] | ListEnumPlayerRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlayerRole[] | ListEnumPlayerRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumPlayerRoleWithAggregatesFilter<$PrismaModel> | $Enums.PlayerRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlayerRoleFilter<$PrismaModel>
    _max?: NestedEnumPlayerRoleFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PlayerListRelationFilter = {
    every?: PlayerWhereInput
    some?: PlayerWhereInput
    none?: PlayerWhereInput
  }

  export type MatchListRelationFilter = {
    every?: MatchWhereInput
    some?: MatchWhereInput
    none?: MatchWhereInput
  }

  export type MatchMapListRelationFilter = {
    every?: MatchMapWhereInput
    some?: MatchMapWhereInput
    none?: MatchMapWhereInput
  }

  export type PlayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchMapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TeamAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TeamSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventNullableScalarRelationFilter = {
    is?: EventWhereInput | null
    isNot?: EventWhereInput | null
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type MatchCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    teamAId?: SortOrder
    teamBId?: SortOrder
    winnerId?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchAvgOrderByAggregateInput = {
    teamAId?: SortOrder
    teamBId?: SortOrder
    winnerId?: SortOrder
  }

  export type MatchMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    teamAId?: SortOrder
    teamBId?: SortOrder
    winnerId?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    teamAId?: SortOrder
    teamBId?: SortOrder
    winnerId?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchSumOrderByAggregateInput = {
    teamAId?: SortOrder
    teamBId?: SortOrder
    winnerId?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerScalarRelationFilter = {
    is?: PlayerWhereInput
    isNot?: PlayerWhereInput
  }

  export type MatchMapScalarRelationFilter = {
    is?: MatchMapWhereInput
    isNot?: MatchMapWhereInput
  }

  export type MatchNullableScalarRelationFilter = {
    is?: MatchWhereInput | null
    isNot?: MatchWhereInput | null
  }

  export type StatCountOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    matchMapId?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    assists?: SortOrder
    damage?: SortOrder
    objective?: SortOrder
    score?: SortOrder
    matchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StatAvgOrderByAggregateInput = {
    playerId?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    assists?: SortOrder
    damage?: SortOrder
    objective?: SortOrder
    score?: SortOrder
  }

  export type StatMaxOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    matchMapId?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    assists?: SortOrder
    damage?: SortOrder
    objective?: SortOrder
    score?: SortOrder
    matchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StatMinOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    matchMapId?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    assists?: SortOrder
    damage?: SortOrder
    objective?: SortOrder
    score?: SortOrder
    matchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StatSumOrderByAggregateInput = {
    playerId?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    assists?: SortOrder
    damage?: SortOrder
    objective?: SortOrder
    score?: SortOrder
  }

  export type LeaderboardCountOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    rank?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaderboardAvgOrderByAggregateInput = {
    playerId?: SortOrder
    rank?: SortOrder
    score?: SortOrder
  }

  export type LeaderboardMaxOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    rank?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaderboardMinOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    rank?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaderboardSumOrderByAggregateInput = {
    playerId?: SortOrder
    rank?: SortOrder
    score?: SortOrder
  }

  export type MapListRelationFilter = {
    every?: MapWhereInput
    some?: MapWhereInput
    none?: MapWhereInput
  }

  export type MapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameModeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameModeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GameModeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameModeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameModeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GameModeScalarRelationFilter = {
    is?: GameModeWhereInput
    isNot?: GameModeWhereInput
  }

  export type MapCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gameModeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MapAvgOrderByAggregateInput = {
    id?: SortOrder
    gameModeId?: SortOrder
  }

  export type MapMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gameModeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MapMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gameModeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MapSumOrderByAggregateInput = {
    id?: SortOrder
    gameModeId?: SortOrder
  }

  export type MatchScalarRelationFilter = {
    is?: MatchWhereInput
    isNot?: MatchWhereInput
  }

  export type MapScalarRelationFilter = {
    is?: MapWhereInput
    isNot?: MapWhereInput
  }

  export type MatchMapMatchIdMapNumberCompoundUniqueInput = {
    matchId: string
    mapNumber: number
  }

  export type MatchMapCountOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    mapId?: SortOrder
    gameModeId?: SortOrder
    mapNumber?: SortOrder
    winnerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchMapAvgOrderByAggregateInput = {
    mapId?: SortOrder
    gameModeId?: SortOrder
    mapNumber?: SortOrder
    winnerId?: SortOrder
  }

  export type MatchMapMaxOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    mapId?: SortOrder
    gameModeId?: SortOrder
    mapNumber?: SortOrder
    winnerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchMapMinOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    mapId?: SortOrder
    gameModeId?: SortOrder
    mapNumber?: SortOrder
    winnerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchMapSumOrderByAggregateInput = {
    mapId?: SortOrder
    gameModeId?: SortOrder
    mapNumber?: SortOrder
    winnerId?: SortOrder
  }

  export type MatchMapPlayerStatMatchMapIdPlayerIdCompoundUniqueInput = {
    matchMapId: string
    playerId: number
  }

  export type MatchMapPlayerStatCountOrderByAggregateInput = {
    id?: SortOrder
    matchMapId?: SortOrder
    playerId?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    assists?: SortOrder
    damage?: SortOrder
    objective?: SortOrder
    score?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchMapPlayerStatAvgOrderByAggregateInput = {
    playerId?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    assists?: SortOrder
    damage?: SortOrder
    objective?: SortOrder
    score?: SortOrder
    teamId?: SortOrder
  }

  export type MatchMapPlayerStatMaxOrderByAggregateInput = {
    id?: SortOrder
    matchMapId?: SortOrder
    playerId?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    assists?: SortOrder
    damage?: SortOrder
    objective?: SortOrder
    score?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchMapPlayerStatMinOrderByAggregateInput = {
    id?: SortOrder
    matchMapId?: SortOrder
    playerId?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    assists?: SortOrder
    damage?: SortOrder
    objective?: SortOrder
    score?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchMapPlayerStatSumOrderByAggregateInput = {
    playerId?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    assists?: SortOrder
    damage?: SortOrder
    objective?: SortOrder
    score?: SortOrder
    teamId?: SortOrder
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type TeamCreateNestedOneWithoutPlayersInput = {
    create?: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPlayersInput
    connect?: TeamWhereUniqueInput
  }

  export type StatCreateNestedManyWithoutPlayerInput = {
    create?: XOR<StatCreateWithoutPlayerInput, StatUncheckedCreateWithoutPlayerInput> | StatCreateWithoutPlayerInput[] | StatUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: StatCreateOrConnectWithoutPlayerInput | StatCreateOrConnectWithoutPlayerInput[]
    createMany?: StatCreateManyPlayerInputEnvelope
    connect?: StatWhereUniqueInput | StatWhereUniqueInput[]
  }

  export type LeaderboardCreateNestedOneWithoutPlayerInput = {
    create?: XOR<LeaderboardCreateWithoutPlayerInput, LeaderboardUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: LeaderboardCreateOrConnectWithoutPlayerInput
    connect?: LeaderboardWhereUniqueInput
  }

  export type MatchMapPlayerStatCreateNestedManyWithoutPlayerInput = {
    create?: XOR<MatchMapPlayerStatCreateWithoutPlayerInput, MatchMapPlayerStatUncheckedCreateWithoutPlayerInput> | MatchMapPlayerStatCreateWithoutPlayerInput[] | MatchMapPlayerStatUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: MatchMapPlayerStatCreateOrConnectWithoutPlayerInput | MatchMapPlayerStatCreateOrConnectWithoutPlayerInput[]
    createMany?: MatchMapPlayerStatCreateManyPlayerInputEnvelope
    connect?: MatchMapPlayerStatWhereUniqueInput | MatchMapPlayerStatWhereUniqueInput[]
  }

  export type StatUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<StatCreateWithoutPlayerInput, StatUncheckedCreateWithoutPlayerInput> | StatCreateWithoutPlayerInput[] | StatUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: StatCreateOrConnectWithoutPlayerInput | StatCreateOrConnectWithoutPlayerInput[]
    createMany?: StatCreateManyPlayerInputEnvelope
    connect?: StatWhereUniqueInput | StatWhereUniqueInput[]
  }

  export type LeaderboardUncheckedCreateNestedOneWithoutPlayerInput = {
    create?: XOR<LeaderboardCreateWithoutPlayerInput, LeaderboardUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: LeaderboardCreateOrConnectWithoutPlayerInput
    connect?: LeaderboardWhereUniqueInput
  }

  export type MatchMapPlayerStatUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<MatchMapPlayerStatCreateWithoutPlayerInput, MatchMapPlayerStatUncheckedCreateWithoutPlayerInput> | MatchMapPlayerStatCreateWithoutPlayerInput[] | MatchMapPlayerStatUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: MatchMapPlayerStatCreateOrConnectWithoutPlayerInput | MatchMapPlayerStatCreateOrConnectWithoutPlayerInput[]
    createMany?: MatchMapPlayerStatCreateManyPlayerInputEnvelope
    connect?: MatchMapPlayerStatWhereUniqueInput | MatchMapPlayerStatWhereUniqueInput[]
  }

  export type EnumPlayerRoleFieldUpdateOperationsInput = {
    set?: $Enums.PlayerRole
  }

  export type TeamUpdateOneWithoutPlayersNestedInput = {
    create?: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPlayersInput
    upsert?: TeamUpsertWithoutPlayersInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutPlayersInput, TeamUpdateWithoutPlayersInput>, TeamUncheckedUpdateWithoutPlayersInput>
  }

  export type StatUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<StatCreateWithoutPlayerInput, StatUncheckedCreateWithoutPlayerInput> | StatCreateWithoutPlayerInput[] | StatUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: StatCreateOrConnectWithoutPlayerInput | StatCreateOrConnectWithoutPlayerInput[]
    upsert?: StatUpsertWithWhereUniqueWithoutPlayerInput | StatUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: StatCreateManyPlayerInputEnvelope
    set?: StatWhereUniqueInput | StatWhereUniqueInput[]
    disconnect?: StatWhereUniqueInput | StatWhereUniqueInput[]
    delete?: StatWhereUniqueInput | StatWhereUniqueInput[]
    connect?: StatWhereUniqueInput | StatWhereUniqueInput[]
    update?: StatUpdateWithWhereUniqueWithoutPlayerInput | StatUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: StatUpdateManyWithWhereWithoutPlayerInput | StatUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: StatScalarWhereInput | StatScalarWhereInput[]
  }

  export type LeaderboardUpdateOneWithoutPlayerNestedInput = {
    create?: XOR<LeaderboardCreateWithoutPlayerInput, LeaderboardUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: LeaderboardCreateOrConnectWithoutPlayerInput
    upsert?: LeaderboardUpsertWithoutPlayerInput
    disconnect?: LeaderboardWhereInput | boolean
    delete?: LeaderboardWhereInput | boolean
    connect?: LeaderboardWhereUniqueInput
    update?: XOR<XOR<LeaderboardUpdateToOneWithWhereWithoutPlayerInput, LeaderboardUpdateWithoutPlayerInput>, LeaderboardUncheckedUpdateWithoutPlayerInput>
  }

  export type MatchMapPlayerStatUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<MatchMapPlayerStatCreateWithoutPlayerInput, MatchMapPlayerStatUncheckedCreateWithoutPlayerInput> | MatchMapPlayerStatCreateWithoutPlayerInput[] | MatchMapPlayerStatUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: MatchMapPlayerStatCreateOrConnectWithoutPlayerInput | MatchMapPlayerStatCreateOrConnectWithoutPlayerInput[]
    upsert?: MatchMapPlayerStatUpsertWithWhereUniqueWithoutPlayerInput | MatchMapPlayerStatUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: MatchMapPlayerStatCreateManyPlayerInputEnvelope
    set?: MatchMapPlayerStatWhereUniqueInput | MatchMapPlayerStatWhereUniqueInput[]
    disconnect?: MatchMapPlayerStatWhereUniqueInput | MatchMapPlayerStatWhereUniqueInput[]
    delete?: MatchMapPlayerStatWhereUniqueInput | MatchMapPlayerStatWhereUniqueInput[]
    connect?: MatchMapPlayerStatWhereUniqueInput | MatchMapPlayerStatWhereUniqueInput[]
    update?: MatchMapPlayerStatUpdateWithWhereUniqueWithoutPlayerInput | MatchMapPlayerStatUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: MatchMapPlayerStatUpdateManyWithWhereWithoutPlayerInput | MatchMapPlayerStatUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: MatchMapPlayerStatScalarWhereInput | MatchMapPlayerStatScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StatUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<StatCreateWithoutPlayerInput, StatUncheckedCreateWithoutPlayerInput> | StatCreateWithoutPlayerInput[] | StatUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: StatCreateOrConnectWithoutPlayerInput | StatCreateOrConnectWithoutPlayerInput[]
    upsert?: StatUpsertWithWhereUniqueWithoutPlayerInput | StatUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: StatCreateManyPlayerInputEnvelope
    set?: StatWhereUniqueInput | StatWhereUniqueInput[]
    disconnect?: StatWhereUniqueInput | StatWhereUniqueInput[]
    delete?: StatWhereUniqueInput | StatWhereUniqueInput[]
    connect?: StatWhereUniqueInput | StatWhereUniqueInput[]
    update?: StatUpdateWithWhereUniqueWithoutPlayerInput | StatUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: StatUpdateManyWithWhereWithoutPlayerInput | StatUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: StatScalarWhereInput | StatScalarWhereInput[]
  }

  export type LeaderboardUncheckedUpdateOneWithoutPlayerNestedInput = {
    create?: XOR<LeaderboardCreateWithoutPlayerInput, LeaderboardUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: LeaderboardCreateOrConnectWithoutPlayerInput
    upsert?: LeaderboardUpsertWithoutPlayerInput
    disconnect?: LeaderboardWhereInput | boolean
    delete?: LeaderboardWhereInput | boolean
    connect?: LeaderboardWhereUniqueInput
    update?: XOR<XOR<LeaderboardUpdateToOneWithWhereWithoutPlayerInput, LeaderboardUpdateWithoutPlayerInput>, LeaderboardUncheckedUpdateWithoutPlayerInput>
  }

  export type MatchMapPlayerStatUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<MatchMapPlayerStatCreateWithoutPlayerInput, MatchMapPlayerStatUncheckedCreateWithoutPlayerInput> | MatchMapPlayerStatCreateWithoutPlayerInput[] | MatchMapPlayerStatUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: MatchMapPlayerStatCreateOrConnectWithoutPlayerInput | MatchMapPlayerStatCreateOrConnectWithoutPlayerInput[]
    upsert?: MatchMapPlayerStatUpsertWithWhereUniqueWithoutPlayerInput | MatchMapPlayerStatUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: MatchMapPlayerStatCreateManyPlayerInputEnvelope
    set?: MatchMapPlayerStatWhereUniqueInput | MatchMapPlayerStatWhereUniqueInput[]
    disconnect?: MatchMapPlayerStatWhereUniqueInput | MatchMapPlayerStatWhereUniqueInput[]
    delete?: MatchMapPlayerStatWhereUniqueInput | MatchMapPlayerStatWhereUniqueInput[]
    connect?: MatchMapPlayerStatWhereUniqueInput | MatchMapPlayerStatWhereUniqueInput[]
    update?: MatchMapPlayerStatUpdateWithWhereUniqueWithoutPlayerInput | MatchMapPlayerStatUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: MatchMapPlayerStatUpdateManyWithWhereWithoutPlayerInput | MatchMapPlayerStatUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: MatchMapPlayerStatScalarWhereInput | MatchMapPlayerStatScalarWhereInput[]
  }

  export type PlayerCreateNestedManyWithoutTeamInput = {
    create?: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput> | PlayerCreateWithoutTeamInput[] | PlayerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTeamInput | PlayerCreateOrConnectWithoutTeamInput[]
    createMany?: PlayerCreateManyTeamInputEnvelope
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutTeamAInput = {
    create?: XOR<MatchCreateWithoutTeamAInput, MatchUncheckedCreateWithoutTeamAInput> | MatchCreateWithoutTeamAInput[] | MatchUncheckedCreateWithoutTeamAInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTeamAInput | MatchCreateOrConnectWithoutTeamAInput[]
    createMany?: MatchCreateManyTeamAInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutTeamBInput = {
    create?: XOR<MatchCreateWithoutTeamBInput, MatchUncheckedCreateWithoutTeamBInput> | MatchCreateWithoutTeamBInput[] | MatchUncheckedCreateWithoutTeamBInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTeamBInput | MatchCreateOrConnectWithoutTeamBInput[]
    createMany?: MatchCreateManyTeamBInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutWinnerInput = {
    create?: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput> | MatchCreateWithoutWinnerInput[] | MatchUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerInput | MatchCreateOrConnectWithoutWinnerInput[]
    createMany?: MatchCreateManyWinnerInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchMapCreateNestedManyWithoutWinnerInput = {
    create?: XOR<MatchMapCreateWithoutWinnerInput, MatchMapUncheckedCreateWithoutWinnerInput> | MatchMapCreateWithoutWinnerInput[] | MatchMapUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchMapCreateOrConnectWithoutWinnerInput | MatchMapCreateOrConnectWithoutWinnerInput[]
    createMany?: MatchMapCreateManyWinnerInputEnvelope
    connect?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
  }

  export type MatchMapPlayerStatCreateNestedManyWithoutTeamInput = {
    create?: XOR<MatchMapPlayerStatCreateWithoutTeamInput, MatchMapPlayerStatUncheckedCreateWithoutTeamInput> | MatchMapPlayerStatCreateWithoutTeamInput[] | MatchMapPlayerStatUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MatchMapPlayerStatCreateOrConnectWithoutTeamInput | MatchMapPlayerStatCreateOrConnectWithoutTeamInput[]
    createMany?: MatchMapPlayerStatCreateManyTeamInputEnvelope
    connect?: MatchMapPlayerStatWhereUniqueInput | MatchMapPlayerStatWhereUniqueInput[]
  }

  export type PlayerUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput> | PlayerCreateWithoutTeamInput[] | PlayerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTeamInput | PlayerCreateOrConnectWithoutTeamInput[]
    createMany?: PlayerCreateManyTeamInputEnvelope
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutTeamAInput = {
    create?: XOR<MatchCreateWithoutTeamAInput, MatchUncheckedCreateWithoutTeamAInput> | MatchCreateWithoutTeamAInput[] | MatchUncheckedCreateWithoutTeamAInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTeamAInput | MatchCreateOrConnectWithoutTeamAInput[]
    createMany?: MatchCreateManyTeamAInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutTeamBInput = {
    create?: XOR<MatchCreateWithoutTeamBInput, MatchUncheckedCreateWithoutTeamBInput> | MatchCreateWithoutTeamBInput[] | MatchUncheckedCreateWithoutTeamBInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTeamBInput | MatchCreateOrConnectWithoutTeamBInput[]
    createMany?: MatchCreateManyTeamBInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutWinnerInput = {
    create?: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput> | MatchCreateWithoutWinnerInput[] | MatchUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerInput | MatchCreateOrConnectWithoutWinnerInput[]
    createMany?: MatchCreateManyWinnerInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchMapUncheckedCreateNestedManyWithoutWinnerInput = {
    create?: XOR<MatchMapCreateWithoutWinnerInput, MatchMapUncheckedCreateWithoutWinnerInput> | MatchMapCreateWithoutWinnerInput[] | MatchMapUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchMapCreateOrConnectWithoutWinnerInput | MatchMapCreateOrConnectWithoutWinnerInput[]
    createMany?: MatchMapCreateManyWinnerInputEnvelope
    connect?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
  }

  export type MatchMapPlayerStatUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<MatchMapPlayerStatCreateWithoutTeamInput, MatchMapPlayerStatUncheckedCreateWithoutTeamInput> | MatchMapPlayerStatCreateWithoutTeamInput[] | MatchMapPlayerStatUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MatchMapPlayerStatCreateOrConnectWithoutTeamInput | MatchMapPlayerStatCreateOrConnectWithoutTeamInput[]
    createMany?: MatchMapPlayerStatCreateManyTeamInputEnvelope
    connect?: MatchMapPlayerStatWhereUniqueInput | MatchMapPlayerStatWhereUniqueInput[]
  }

  export type PlayerUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput> | PlayerCreateWithoutTeamInput[] | PlayerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTeamInput | PlayerCreateOrConnectWithoutTeamInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutTeamInput | PlayerUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PlayerCreateManyTeamInputEnvelope
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutTeamInput | PlayerUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutTeamInput | PlayerUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutTeamANestedInput = {
    create?: XOR<MatchCreateWithoutTeamAInput, MatchUncheckedCreateWithoutTeamAInput> | MatchCreateWithoutTeamAInput[] | MatchUncheckedCreateWithoutTeamAInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTeamAInput | MatchCreateOrConnectWithoutTeamAInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutTeamAInput | MatchUpsertWithWhereUniqueWithoutTeamAInput[]
    createMany?: MatchCreateManyTeamAInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutTeamAInput | MatchUpdateWithWhereUniqueWithoutTeamAInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutTeamAInput | MatchUpdateManyWithWhereWithoutTeamAInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutTeamBNestedInput = {
    create?: XOR<MatchCreateWithoutTeamBInput, MatchUncheckedCreateWithoutTeamBInput> | MatchCreateWithoutTeamBInput[] | MatchUncheckedCreateWithoutTeamBInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTeamBInput | MatchCreateOrConnectWithoutTeamBInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutTeamBInput | MatchUpsertWithWhereUniqueWithoutTeamBInput[]
    createMany?: MatchCreateManyTeamBInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutTeamBInput | MatchUpdateWithWhereUniqueWithoutTeamBInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutTeamBInput | MatchUpdateManyWithWhereWithoutTeamBInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput> | MatchCreateWithoutWinnerInput[] | MatchUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerInput | MatchCreateOrConnectWithoutWinnerInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutWinnerInput | MatchUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: MatchCreateManyWinnerInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutWinnerInput | MatchUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutWinnerInput | MatchUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchMapUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<MatchMapCreateWithoutWinnerInput, MatchMapUncheckedCreateWithoutWinnerInput> | MatchMapCreateWithoutWinnerInput[] | MatchMapUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchMapCreateOrConnectWithoutWinnerInput | MatchMapCreateOrConnectWithoutWinnerInput[]
    upsert?: MatchMapUpsertWithWhereUniqueWithoutWinnerInput | MatchMapUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: MatchMapCreateManyWinnerInputEnvelope
    set?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    disconnect?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    delete?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    connect?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    update?: MatchMapUpdateWithWhereUniqueWithoutWinnerInput | MatchMapUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: MatchMapUpdateManyWithWhereWithoutWinnerInput | MatchMapUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: MatchMapScalarWhereInput | MatchMapScalarWhereInput[]
  }

  export type MatchMapPlayerStatUpdateManyWithoutTeamNestedInput = {
    create?: XOR<MatchMapPlayerStatCreateWithoutTeamInput, MatchMapPlayerStatUncheckedCreateWithoutTeamInput> | MatchMapPlayerStatCreateWithoutTeamInput[] | MatchMapPlayerStatUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MatchMapPlayerStatCreateOrConnectWithoutTeamInput | MatchMapPlayerStatCreateOrConnectWithoutTeamInput[]
    upsert?: MatchMapPlayerStatUpsertWithWhereUniqueWithoutTeamInput | MatchMapPlayerStatUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: MatchMapPlayerStatCreateManyTeamInputEnvelope
    set?: MatchMapPlayerStatWhereUniqueInput | MatchMapPlayerStatWhereUniqueInput[]
    disconnect?: MatchMapPlayerStatWhereUniqueInput | MatchMapPlayerStatWhereUniqueInput[]
    delete?: MatchMapPlayerStatWhereUniqueInput | MatchMapPlayerStatWhereUniqueInput[]
    connect?: MatchMapPlayerStatWhereUniqueInput | MatchMapPlayerStatWhereUniqueInput[]
    update?: MatchMapPlayerStatUpdateWithWhereUniqueWithoutTeamInput | MatchMapPlayerStatUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: MatchMapPlayerStatUpdateManyWithWhereWithoutTeamInput | MatchMapPlayerStatUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: MatchMapPlayerStatScalarWhereInput | MatchMapPlayerStatScalarWhereInput[]
  }

  export type PlayerUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput> | PlayerCreateWithoutTeamInput[] | PlayerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTeamInput | PlayerCreateOrConnectWithoutTeamInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutTeamInput | PlayerUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PlayerCreateManyTeamInputEnvelope
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutTeamInput | PlayerUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutTeamInput | PlayerUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutTeamANestedInput = {
    create?: XOR<MatchCreateWithoutTeamAInput, MatchUncheckedCreateWithoutTeamAInput> | MatchCreateWithoutTeamAInput[] | MatchUncheckedCreateWithoutTeamAInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTeamAInput | MatchCreateOrConnectWithoutTeamAInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutTeamAInput | MatchUpsertWithWhereUniqueWithoutTeamAInput[]
    createMany?: MatchCreateManyTeamAInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutTeamAInput | MatchUpdateWithWhereUniqueWithoutTeamAInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutTeamAInput | MatchUpdateManyWithWhereWithoutTeamAInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutTeamBNestedInput = {
    create?: XOR<MatchCreateWithoutTeamBInput, MatchUncheckedCreateWithoutTeamBInput> | MatchCreateWithoutTeamBInput[] | MatchUncheckedCreateWithoutTeamBInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTeamBInput | MatchCreateOrConnectWithoutTeamBInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutTeamBInput | MatchUpsertWithWhereUniqueWithoutTeamBInput[]
    createMany?: MatchCreateManyTeamBInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutTeamBInput | MatchUpdateWithWhereUniqueWithoutTeamBInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutTeamBInput | MatchUpdateManyWithWhereWithoutTeamBInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput> | MatchCreateWithoutWinnerInput[] | MatchUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerInput | MatchCreateOrConnectWithoutWinnerInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutWinnerInput | MatchUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: MatchCreateManyWinnerInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutWinnerInput | MatchUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutWinnerInput | MatchUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchMapUncheckedUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<MatchMapCreateWithoutWinnerInput, MatchMapUncheckedCreateWithoutWinnerInput> | MatchMapCreateWithoutWinnerInput[] | MatchMapUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchMapCreateOrConnectWithoutWinnerInput | MatchMapCreateOrConnectWithoutWinnerInput[]
    upsert?: MatchMapUpsertWithWhereUniqueWithoutWinnerInput | MatchMapUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: MatchMapCreateManyWinnerInputEnvelope
    set?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    disconnect?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    delete?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    connect?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    update?: MatchMapUpdateWithWhereUniqueWithoutWinnerInput | MatchMapUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: MatchMapUpdateManyWithWhereWithoutWinnerInput | MatchMapUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: MatchMapScalarWhereInput | MatchMapScalarWhereInput[]
  }

  export type MatchMapPlayerStatUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<MatchMapPlayerStatCreateWithoutTeamInput, MatchMapPlayerStatUncheckedCreateWithoutTeamInput> | MatchMapPlayerStatCreateWithoutTeamInput[] | MatchMapPlayerStatUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MatchMapPlayerStatCreateOrConnectWithoutTeamInput | MatchMapPlayerStatCreateOrConnectWithoutTeamInput[]
    upsert?: MatchMapPlayerStatUpsertWithWhereUniqueWithoutTeamInput | MatchMapPlayerStatUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: MatchMapPlayerStatCreateManyTeamInputEnvelope
    set?: MatchMapPlayerStatWhereUniqueInput | MatchMapPlayerStatWhereUniqueInput[]
    disconnect?: MatchMapPlayerStatWhereUniqueInput | MatchMapPlayerStatWhereUniqueInput[]
    delete?: MatchMapPlayerStatWhereUniqueInput | MatchMapPlayerStatWhereUniqueInput[]
    connect?: MatchMapPlayerStatWhereUniqueInput | MatchMapPlayerStatWhereUniqueInput[]
    update?: MatchMapPlayerStatUpdateWithWhereUniqueWithoutTeamInput | MatchMapPlayerStatUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: MatchMapPlayerStatUpdateManyWithWhereWithoutTeamInput | MatchMapPlayerStatUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: MatchMapPlayerStatScalarWhereInput | MatchMapPlayerStatScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutMatchesInput = {
    create?: XOR<EventCreateWithoutMatchesInput, EventUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: EventCreateOrConnectWithoutMatchesInput
    connect?: EventWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutTeamA_MatchesInput = {
    create?: XOR<TeamCreateWithoutTeamA_MatchesInput, TeamUncheckedCreateWithoutTeamA_MatchesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutTeamA_MatchesInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutTeamB_MatchesInput = {
    create?: XOR<TeamCreateWithoutTeamB_MatchesInput, TeamUncheckedCreateWithoutTeamB_MatchesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutTeamB_MatchesInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutMatchesWonInput = {
    create?: XOR<TeamCreateWithoutMatchesWonInput, TeamUncheckedCreateWithoutMatchesWonInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMatchesWonInput
    connect?: TeamWhereUniqueInput
  }

  export type StatCreateNestedManyWithoutMatchInput = {
    create?: XOR<StatCreateWithoutMatchInput, StatUncheckedCreateWithoutMatchInput> | StatCreateWithoutMatchInput[] | StatUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: StatCreateOrConnectWithoutMatchInput | StatCreateOrConnectWithoutMatchInput[]
    createMany?: StatCreateManyMatchInputEnvelope
    connect?: StatWhereUniqueInput | StatWhereUniqueInput[]
  }

  export type MatchMapCreateNestedManyWithoutMatchInput = {
    create?: XOR<MatchMapCreateWithoutMatchInput, MatchMapUncheckedCreateWithoutMatchInput> | MatchMapCreateWithoutMatchInput[] | MatchMapUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchMapCreateOrConnectWithoutMatchInput | MatchMapCreateOrConnectWithoutMatchInput[]
    createMany?: MatchMapCreateManyMatchInputEnvelope
    connect?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
  }

  export type StatUncheckedCreateNestedManyWithoutMatchInput = {
    create?: XOR<StatCreateWithoutMatchInput, StatUncheckedCreateWithoutMatchInput> | StatCreateWithoutMatchInput[] | StatUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: StatCreateOrConnectWithoutMatchInput | StatCreateOrConnectWithoutMatchInput[]
    createMany?: StatCreateManyMatchInputEnvelope
    connect?: StatWhereUniqueInput | StatWhereUniqueInput[]
  }

  export type MatchMapUncheckedCreateNestedManyWithoutMatchInput = {
    create?: XOR<MatchMapCreateWithoutMatchInput, MatchMapUncheckedCreateWithoutMatchInput> | MatchMapCreateWithoutMatchInput[] | MatchMapUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchMapCreateOrConnectWithoutMatchInput | MatchMapCreateOrConnectWithoutMatchInput[]
    createMany?: MatchMapCreateManyMatchInputEnvelope
    connect?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
  }

  export type EventUpdateOneWithoutMatchesNestedInput = {
    create?: XOR<EventCreateWithoutMatchesInput, EventUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: EventCreateOrConnectWithoutMatchesInput
    upsert?: EventUpsertWithoutMatchesInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutMatchesInput, EventUpdateWithoutMatchesInput>, EventUncheckedUpdateWithoutMatchesInput>
  }

  export type TeamUpdateOneRequiredWithoutTeamA_MatchesNestedInput = {
    create?: XOR<TeamCreateWithoutTeamA_MatchesInput, TeamUncheckedCreateWithoutTeamA_MatchesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutTeamA_MatchesInput
    upsert?: TeamUpsertWithoutTeamA_MatchesInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutTeamA_MatchesInput, TeamUpdateWithoutTeamA_MatchesInput>, TeamUncheckedUpdateWithoutTeamA_MatchesInput>
  }

  export type TeamUpdateOneRequiredWithoutTeamB_MatchesNestedInput = {
    create?: XOR<TeamCreateWithoutTeamB_MatchesInput, TeamUncheckedCreateWithoutTeamB_MatchesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutTeamB_MatchesInput
    upsert?: TeamUpsertWithoutTeamB_MatchesInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutTeamB_MatchesInput, TeamUpdateWithoutTeamB_MatchesInput>, TeamUncheckedUpdateWithoutTeamB_MatchesInput>
  }

  export type TeamUpdateOneWithoutMatchesWonNestedInput = {
    create?: XOR<TeamCreateWithoutMatchesWonInput, TeamUncheckedCreateWithoutMatchesWonInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMatchesWonInput
    upsert?: TeamUpsertWithoutMatchesWonInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutMatchesWonInput, TeamUpdateWithoutMatchesWonInput>, TeamUncheckedUpdateWithoutMatchesWonInput>
  }

  export type StatUpdateManyWithoutMatchNestedInput = {
    create?: XOR<StatCreateWithoutMatchInput, StatUncheckedCreateWithoutMatchInput> | StatCreateWithoutMatchInput[] | StatUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: StatCreateOrConnectWithoutMatchInput | StatCreateOrConnectWithoutMatchInput[]
    upsert?: StatUpsertWithWhereUniqueWithoutMatchInput | StatUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: StatCreateManyMatchInputEnvelope
    set?: StatWhereUniqueInput | StatWhereUniqueInput[]
    disconnect?: StatWhereUniqueInput | StatWhereUniqueInput[]
    delete?: StatWhereUniqueInput | StatWhereUniqueInput[]
    connect?: StatWhereUniqueInput | StatWhereUniqueInput[]
    update?: StatUpdateWithWhereUniqueWithoutMatchInput | StatUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: StatUpdateManyWithWhereWithoutMatchInput | StatUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: StatScalarWhereInput | StatScalarWhereInput[]
  }

  export type MatchMapUpdateManyWithoutMatchNestedInput = {
    create?: XOR<MatchMapCreateWithoutMatchInput, MatchMapUncheckedCreateWithoutMatchInput> | MatchMapCreateWithoutMatchInput[] | MatchMapUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchMapCreateOrConnectWithoutMatchInput | MatchMapCreateOrConnectWithoutMatchInput[]
    upsert?: MatchMapUpsertWithWhereUniqueWithoutMatchInput | MatchMapUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: MatchMapCreateManyMatchInputEnvelope
    set?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    disconnect?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    delete?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    connect?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    update?: MatchMapUpdateWithWhereUniqueWithoutMatchInput | MatchMapUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: MatchMapUpdateManyWithWhereWithoutMatchInput | MatchMapUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: MatchMapScalarWhereInput | MatchMapScalarWhereInput[]
  }

  export type StatUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: XOR<StatCreateWithoutMatchInput, StatUncheckedCreateWithoutMatchInput> | StatCreateWithoutMatchInput[] | StatUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: StatCreateOrConnectWithoutMatchInput | StatCreateOrConnectWithoutMatchInput[]
    upsert?: StatUpsertWithWhereUniqueWithoutMatchInput | StatUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: StatCreateManyMatchInputEnvelope
    set?: StatWhereUniqueInput | StatWhereUniqueInput[]
    disconnect?: StatWhereUniqueInput | StatWhereUniqueInput[]
    delete?: StatWhereUniqueInput | StatWhereUniqueInput[]
    connect?: StatWhereUniqueInput | StatWhereUniqueInput[]
    update?: StatUpdateWithWhereUniqueWithoutMatchInput | StatUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: StatUpdateManyWithWhereWithoutMatchInput | StatUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: StatScalarWhereInput | StatScalarWhereInput[]
  }

  export type MatchMapUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: XOR<MatchMapCreateWithoutMatchInput, MatchMapUncheckedCreateWithoutMatchInput> | MatchMapCreateWithoutMatchInput[] | MatchMapUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchMapCreateOrConnectWithoutMatchInput | MatchMapCreateOrConnectWithoutMatchInput[]
    upsert?: MatchMapUpsertWithWhereUniqueWithoutMatchInput | MatchMapUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: MatchMapCreateManyMatchInputEnvelope
    set?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    disconnect?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    delete?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    connect?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    update?: MatchMapUpdateWithWhereUniqueWithoutMatchInput | MatchMapUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: MatchMapUpdateManyWithWhereWithoutMatchInput | MatchMapUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: MatchMapScalarWhereInput | MatchMapScalarWhereInput[]
  }

  export type MatchCreateNestedManyWithoutEventInput = {
    create?: XOR<MatchCreateWithoutEventInput, MatchUncheckedCreateWithoutEventInput> | MatchCreateWithoutEventInput[] | MatchUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutEventInput | MatchCreateOrConnectWithoutEventInput[]
    createMany?: MatchCreateManyEventInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<MatchCreateWithoutEventInput, MatchUncheckedCreateWithoutEventInput> | MatchCreateWithoutEventInput[] | MatchUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutEventInput | MatchCreateOrConnectWithoutEventInput[]
    createMany?: MatchCreateManyEventInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUpdateManyWithoutEventNestedInput = {
    create?: XOR<MatchCreateWithoutEventInput, MatchUncheckedCreateWithoutEventInput> | MatchCreateWithoutEventInput[] | MatchUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutEventInput | MatchCreateOrConnectWithoutEventInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutEventInput | MatchUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: MatchCreateManyEventInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutEventInput | MatchUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutEventInput | MatchUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<MatchCreateWithoutEventInput, MatchUncheckedCreateWithoutEventInput> | MatchCreateWithoutEventInput[] | MatchUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutEventInput | MatchCreateOrConnectWithoutEventInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutEventInput | MatchUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: MatchCreateManyEventInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutEventInput | MatchUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutEventInput | MatchUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type PlayerCreateNestedOneWithoutStatsInput = {
    create?: XOR<PlayerCreateWithoutStatsInput, PlayerUncheckedCreateWithoutStatsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutStatsInput
    connect?: PlayerWhereUniqueInput
  }

  export type MatchMapCreateNestedOneWithoutStatsInput = {
    create?: XOR<MatchMapCreateWithoutStatsInput, MatchMapUncheckedCreateWithoutStatsInput>
    connectOrCreate?: MatchMapCreateOrConnectWithoutStatsInput
    connect?: MatchMapWhereUniqueInput
  }

  export type MatchCreateNestedOneWithoutStatsInput = {
    create?: XOR<MatchCreateWithoutStatsInput, MatchUncheckedCreateWithoutStatsInput>
    connectOrCreate?: MatchCreateOrConnectWithoutStatsInput
    connect?: MatchWhereUniqueInput
  }

  export type PlayerUpdateOneRequiredWithoutStatsNestedInput = {
    create?: XOR<PlayerCreateWithoutStatsInput, PlayerUncheckedCreateWithoutStatsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutStatsInput
    upsert?: PlayerUpsertWithoutStatsInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutStatsInput, PlayerUpdateWithoutStatsInput>, PlayerUncheckedUpdateWithoutStatsInput>
  }

  export type MatchMapUpdateOneRequiredWithoutStatsNestedInput = {
    create?: XOR<MatchMapCreateWithoutStatsInput, MatchMapUncheckedCreateWithoutStatsInput>
    connectOrCreate?: MatchMapCreateOrConnectWithoutStatsInput
    upsert?: MatchMapUpsertWithoutStatsInput
    connect?: MatchMapWhereUniqueInput
    update?: XOR<XOR<MatchMapUpdateToOneWithWhereWithoutStatsInput, MatchMapUpdateWithoutStatsInput>, MatchMapUncheckedUpdateWithoutStatsInput>
  }

  export type MatchUpdateOneWithoutStatsNestedInput = {
    create?: XOR<MatchCreateWithoutStatsInput, MatchUncheckedCreateWithoutStatsInput>
    connectOrCreate?: MatchCreateOrConnectWithoutStatsInput
    upsert?: MatchUpsertWithoutStatsInput
    disconnect?: MatchWhereInput | boolean
    delete?: MatchWhereInput | boolean
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutStatsInput, MatchUpdateWithoutStatsInput>, MatchUncheckedUpdateWithoutStatsInput>
  }

  export type PlayerCreateNestedOneWithoutLeaderboardInput = {
    create?: XOR<PlayerCreateWithoutLeaderboardInput, PlayerUncheckedCreateWithoutLeaderboardInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutLeaderboardInput
    connect?: PlayerWhereUniqueInput
  }

  export type PlayerUpdateOneRequiredWithoutLeaderboardNestedInput = {
    create?: XOR<PlayerCreateWithoutLeaderboardInput, PlayerUncheckedCreateWithoutLeaderboardInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutLeaderboardInput
    upsert?: PlayerUpsertWithoutLeaderboardInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutLeaderboardInput, PlayerUpdateWithoutLeaderboardInput>, PlayerUncheckedUpdateWithoutLeaderboardInput>
  }

  export type MapCreateNestedManyWithoutGameModeInput = {
    create?: XOR<MapCreateWithoutGameModeInput, MapUncheckedCreateWithoutGameModeInput> | MapCreateWithoutGameModeInput[] | MapUncheckedCreateWithoutGameModeInput[]
    connectOrCreate?: MapCreateOrConnectWithoutGameModeInput | MapCreateOrConnectWithoutGameModeInput[]
    createMany?: MapCreateManyGameModeInputEnvelope
    connect?: MapWhereUniqueInput | MapWhereUniqueInput[]
  }

  export type MatchMapCreateNestedManyWithoutGameModeInput = {
    create?: XOR<MatchMapCreateWithoutGameModeInput, MatchMapUncheckedCreateWithoutGameModeInput> | MatchMapCreateWithoutGameModeInput[] | MatchMapUncheckedCreateWithoutGameModeInput[]
    connectOrCreate?: MatchMapCreateOrConnectWithoutGameModeInput | MatchMapCreateOrConnectWithoutGameModeInput[]
    createMany?: MatchMapCreateManyGameModeInputEnvelope
    connect?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
  }

  export type MapUncheckedCreateNestedManyWithoutGameModeInput = {
    create?: XOR<MapCreateWithoutGameModeInput, MapUncheckedCreateWithoutGameModeInput> | MapCreateWithoutGameModeInput[] | MapUncheckedCreateWithoutGameModeInput[]
    connectOrCreate?: MapCreateOrConnectWithoutGameModeInput | MapCreateOrConnectWithoutGameModeInput[]
    createMany?: MapCreateManyGameModeInputEnvelope
    connect?: MapWhereUniqueInput | MapWhereUniqueInput[]
  }

  export type MatchMapUncheckedCreateNestedManyWithoutGameModeInput = {
    create?: XOR<MatchMapCreateWithoutGameModeInput, MatchMapUncheckedCreateWithoutGameModeInput> | MatchMapCreateWithoutGameModeInput[] | MatchMapUncheckedCreateWithoutGameModeInput[]
    connectOrCreate?: MatchMapCreateOrConnectWithoutGameModeInput | MatchMapCreateOrConnectWithoutGameModeInput[]
    createMany?: MatchMapCreateManyGameModeInputEnvelope
    connect?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
  }

  export type MapUpdateManyWithoutGameModeNestedInput = {
    create?: XOR<MapCreateWithoutGameModeInput, MapUncheckedCreateWithoutGameModeInput> | MapCreateWithoutGameModeInput[] | MapUncheckedCreateWithoutGameModeInput[]
    connectOrCreate?: MapCreateOrConnectWithoutGameModeInput | MapCreateOrConnectWithoutGameModeInput[]
    upsert?: MapUpsertWithWhereUniqueWithoutGameModeInput | MapUpsertWithWhereUniqueWithoutGameModeInput[]
    createMany?: MapCreateManyGameModeInputEnvelope
    set?: MapWhereUniqueInput | MapWhereUniqueInput[]
    disconnect?: MapWhereUniqueInput | MapWhereUniqueInput[]
    delete?: MapWhereUniqueInput | MapWhereUniqueInput[]
    connect?: MapWhereUniqueInput | MapWhereUniqueInput[]
    update?: MapUpdateWithWhereUniqueWithoutGameModeInput | MapUpdateWithWhereUniqueWithoutGameModeInput[]
    updateMany?: MapUpdateManyWithWhereWithoutGameModeInput | MapUpdateManyWithWhereWithoutGameModeInput[]
    deleteMany?: MapScalarWhereInput | MapScalarWhereInput[]
  }

  export type MatchMapUpdateManyWithoutGameModeNestedInput = {
    create?: XOR<MatchMapCreateWithoutGameModeInput, MatchMapUncheckedCreateWithoutGameModeInput> | MatchMapCreateWithoutGameModeInput[] | MatchMapUncheckedCreateWithoutGameModeInput[]
    connectOrCreate?: MatchMapCreateOrConnectWithoutGameModeInput | MatchMapCreateOrConnectWithoutGameModeInput[]
    upsert?: MatchMapUpsertWithWhereUniqueWithoutGameModeInput | MatchMapUpsertWithWhereUniqueWithoutGameModeInput[]
    createMany?: MatchMapCreateManyGameModeInputEnvelope
    set?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    disconnect?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    delete?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    connect?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    update?: MatchMapUpdateWithWhereUniqueWithoutGameModeInput | MatchMapUpdateWithWhereUniqueWithoutGameModeInput[]
    updateMany?: MatchMapUpdateManyWithWhereWithoutGameModeInput | MatchMapUpdateManyWithWhereWithoutGameModeInput[]
    deleteMany?: MatchMapScalarWhereInput | MatchMapScalarWhereInput[]
  }

  export type MapUncheckedUpdateManyWithoutGameModeNestedInput = {
    create?: XOR<MapCreateWithoutGameModeInput, MapUncheckedCreateWithoutGameModeInput> | MapCreateWithoutGameModeInput[] | MapUncheckedCreateWithoutGameModeInput[]
    connectOrCreate?: MapCreateOrConnectWithoutGameModeInput | MapCreateOrConnectWithoutGameModeInput[]
    upsert?: MapUpsertWithWhereUniqueWithoutGameModeInput | MapUpsertWithWhereUniqueWithoutGameModeInput[]
    createMany?: MapCreateManyGameModeInputEnvelope
    set?: MapWhereUniqueInput | MapWhereUniqueInput[]
    disconnect?: MapWhereUniqueInput | MapWhereUniqueInput[]
    delete?: MapWhereUniqueInput | MapWhereUniqueInput[]
    connect?: MapWhereUniqueInput | MapWhereUniqueInput[]
    update?: MapUpdateWithWhereUniqueWithoutGameModeInput | MapUpdateWithWhereUniqueWithoutGameModeInput[]
    updateMany?: MapUpdateManyWithWhereWithoutGameModeInput | MapUpdateManyWithWhereWithoutGameModeInput[]
    deleteMany?: MapScalarWhereInput | MapScalarWhereInput[]
  }

  export type MatchMapUncheckedUpdateManyWithoutGameModeNestedInput = {
    create?: XOR<MatchMapCreateWithoutGameModeInput, MatchMapUncheckedCreateWithoutGameModeInput> | MatchMapCreateWithoutGameModeInput[] | MatchMapUncheckedCreateWithoutGameModeInput[]
    connectOrCreate?: MatchMapCreateOrConnectWithoutGameModeInput | MatchMapCreateOrConnectWithoutGameModeInput[]
    upsert?: MatchMapUpsertWithWhereUniqueWithoutGameModeInput | MatchMapUpsertWithWhereUniqueWithoutGameModeInput[]
    createMany?: MatchMapCreateManyGameModeInputEnvelope
    set?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    disconnect?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    delete?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    connect?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    update?: MatchMapUpdateWithWhereUniqueWithoutGameModeInput | MatchMapUpdateWithWhereUniqueWithoutGameModeInput[]
    updateMany?: MatchMapUpdateManyWithWhereWithoutGameModeInput | MatchMapUpdateManyWithWhereWithoutGameModeInput[]
    deleteMany?: MatchMapScalarWhereInput | MatchMapScalarWhereInput[]
  }

  export type GameModeCreateNestedOneWithoutMapsInput = {
    create?: XOR<GameModeCreateWithoutMapsInput, GameModeUncheckedCreateWithoutMapsInput>
    connectOrCreate?: GameModeCreateOrConnectWithoutMapsInput
    connect?: GameModeWhereUniqueInput
  }

  export type MatchMapCreateNestedManyWithoutMapInput = {
    create?: XOR<MatchMapCreateWithoutMapInput, MatchMapUncheckedCreateWithoutMapInput> | MatchMapCreateWithoutMapInput[] | MatchMapUncheckedCreateWithoutMapInput[]
    connectOrCreate?: MatchMapCreateOrConnectWithoutMapInput | MatchMapCreateOrConnectWithoutMapInput[]
    createMany?: MatchMapCreateManyMapInputEnvelope
    connect?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
  }

  export type MatchMapUncheckedCreateNestedManyWithoutMapInput = {
    create?: XOR<MatchMapCreateWithoutMapInput, MatchMapUncheckedCreateWithoutMapInput> | MatchMapCreateWithoutMapInput[] | MatchMapUncheckedCreateWithoutMapInput[]
    connectOrCreate?: MatchMapCreateOrConnectWithoutMapInput | MatchMapCreateOrConnectWithoutMapInput[]
    createMany?: MatchMapCreateManyMapInputEnvelope
    connect?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
  }

  export type GameModeUpdateOneRequiredWithoutMapsNestedInput = {
    create?: XOR<GameModeCreateWithoutMapsInput, GameModeUncheckedCreateWithoutMapsInput>
    connectOrCreate?: GameModeCreateOrConnectWithoutMapsInput
    upsert?: GameModeUpsertWithoutMapsInput
    connect?: GameModeWhereUniqueInput
    update?: XOR<XOR<GameModeUpdateToOneWithWhereWithoutMapsInput, GameModeUpdateWithoutMapsInput>, GameModeUncheckedUpdateWithoutMapsInput>
  }

  export type MatchMapUpdateManyWithoutMapNestedInput = {
    create?: XOR<MatchMapCreateWithoutMapInput, MatchMapUncheckedCreateWithoutMapInput> | MatchMapCreateWithoutMapInput[] | MatchMapUncheckedCreateWithoutMapInput[]
    connectOrCreate?: MatchMapCreateOrConnectWithoutMapInput | MatchMapCreateOrConnectWithoutMapInput[]
    upsert?: MatchMapUpsertWithWhereUniqueWithoutMapInput | MatchMapUpsertWithWhereUniqueWithoutMapInput[]
    createMany?: MatchMapCreateManyMapInputEnvelope
    set?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    disconnect?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    delete?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    connect?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    update?: MatchMapUpdateWithWhereUniqueWithoutMapInput | MatchMapUpdateWithWhereUniqueWithoutMapInput[]
    updateMany?: MatchMapUpdateManyWithWhereWithoutMapInput | MatchMapUpdateManyWithWhereWithoutMapInput[]
    deleteMany?: MatchMapScalarWhereInput | MatchMapScalarWhereInput[]
  }

  export type MatchMapUncheckedUpdateManyWithoutMapNestedInput = {
    create?: XOR<MatchMapCreateWithoutMapInput, MatchMapUncheckedCreateWithoutMapInput> | MatchMapCreateWithoutMapInput[] | MatchMapUncheckedCreateWithoutMapInput[]
    connectOrCreate?: MatchMapCreateOrConnectWithoutMapInput | MatchMapCreateOrConnectWithoutMapInput[]
    upsert?: MatchMapUpsertWithWhereUniqueWithoutMapInput | MatchMapUpsertWithWhereUniqueWithoutMapInput[]
    createMany?: MatchMapCreateManyMapInputEnvelope
    set?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    disconnect?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    delete?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    connect?: MatchMapWhereUniqueInput | MatchMapWhereUniqueInput[]
    update?: MatchMapUpdateWithWhereUniqueWithoutMapInput | MatchMapUpdateWithWhereUniqueWithoutMapInput[]
    updateMany?: MatchMapUpdateManyWithWhereWithoutMapInput | MatchMapUpdateManyWithWhereWithoutMapInput[]
    deleteMany?: MatchMapScalarWhereInput | MatchMapScalarWhereInput[]
  }

  export type MatchCreateNestedOneWithoutMatchMapInput = {
    create?: XOR<MatchCreateWithoutMatchMapInput, MatchUncheckedCreateWithoutMatchMapInput>
    connectOrCreate?: MatchCreateOrConnectWithoutMatchMapInput
    connect?: MatchWhereUniqueInput
  }

  export type MapCreateNestedOneWithoutMatchMapsInput = {
    create?: XOR<MapCreateWithoutMatchMapsInput, MapUncheckedCreateWithoutMatchMapsInput>
    connectOrCreate?: MapCreateOrConnectWithoutMatchMapsInput
    connect?: MapWhereUniqueInput
  }

  export type GameModeCreateNestedOneWithoutMatchMapInput = {
    create?: XOR<GameModeCreateWithoutMatchMapInput, GameModeUncheckedCreateWithoutMatchMapInput>
    connectOrCreate?: GameModeCreateOrConnectWithoutMatchMapInput
    connect?: GameModeWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutMatchMapInput = {
    create?: XOR<TeamCreateWithoutMatchMapInput, TeamUncheckedCreateWithoutMatchMapInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMatchMapInput
    connect?: TeamWhereUniqueInput
  }

  export type StatCreateNestedManyWithoutMatchMapInput = {
    create?: XOR<StatCreateWithoutMatchMapInput, StatUncheckedCreateWithoutMatchMapInput> | StatCreateWithoutMatchMapInput[] | StatUncheckedCreateWithoutMatchMapInput[]
    connectOrCreate?: StatCreateOrConnectWithoutMatchMapInput | StatCreateOrConnectWithoutMatchMapInput[]
    createMany?: StatCreateManyMatchMapInputEnvelope
    connect?: StatWhereUniqueInput | StatWhereUniqueInput[]
  }

  export type MatchMapPlayerStatCreateNestedManyWithoutMatchMapInput = {
    create?: XOR<MatchMapPlayerStatCreateWithoutMatchMapInput, MatchMapPlayerStatUncheckedCreateWithoutMatchMapInput> | MatchMapPlayerStatCreateWithoutMatchMapInput[] | MatchMapPlayerStatUncheckedCreateWithoutMatchMapInput[]
    connectOrCreate?: MatchMapPlayerStatCreateOrConnectWithoutMatchMapInput | MatchMapPlayerStatCreateOrConnectWithoutMatchMapInput[]
    createMany?: MatchMapPlayerStatCreateManyMatchMapInputEnvelope
    connect?: MatchMapPlayerStatWhereUniqueInput | MatchMapPlayerStatWhereUniqueInput[]
  }

  export type StatUncheckedCreateNestedManyWithoutMatchMapInput = {
    create?: XOR<StatCreateWithoutMatchMapInput, StatUncheckedCreateWithoutMatchMapInput> | StatCreateWithoutMatchMapInput[] | StatUncheckedCreateWithoutMatchMapInput[]
    connectOrCreate?: StatCreateOrConnectWithoutMatchMapInput | StatCreateOrConnectWithoutMatchMapInput[]
    createMany?: StatCreateManyMatchMapInputEnvelope
    connect?: StatWhereUniqueInput | StatWhereUniqueInput[]
  }

  export type MatchMapPlayerStatUncheckedCreateNestedManyWithoutMatchMapInput = {
    create?: XOR<MatchMapPlayerStatCreateWithoutMatchMapInput, MatchMapPlayerStatUncheckedCreateWithoutMatchMapInput> | MatchMapPlayerStatCreateWithoutMatchMapInput[] | MatchMapPlayerStatUncheckedCreateWithoutMatchMapInput[]
    connectOrCreate?: MatchMapPlayerStatCreateOrConnectWithoutMatchMapInput | MatchMapPlayerStatCreateOrConnectWithoutMatchMapInput[]
    createMany?: MatchMapPlayerStatCreateManyMatchMapInputEnvelope
    connect?: MatchMapPlayerStatWhereUniqueInput | MatchMapPlayerStatWhereUniqueInput[]
  }

  export type MatchUpdateOneRequiredWithoutMatchMapNestedInput = {
    create?: XOR<MatchCreateWithoutMatchMapInput, MatchUncheckedCreateWithoutMatchMapInput>
    connectOrCreate?: MatchCreateOrConnectWithoutMatchMapInput
    upsert?: MatchUpsertWithoutMatchMapInput
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutMatchMapInput, MatchUpdateWithoutMatchMapInput>, MatchUncheckedUpdateWithoutMatchMapInput>
  }

  export type MapUpdateOneRequiredWithoutMatchMapsNestedInput = {
    create?: XOR<MapCreateWithoutMatchMapsInput, MapUncheckedCreateWithoutMatchMapsInput>
    connectOrCreate?: MapCreateOrConnectWithoutMatchMapsInput
    upsert?: MapUpsertWithoutMatchMapsInput
    connect?: MapWhereUniqueInput
    update?: XOR<XOR<MapUpdateToOneWithWhereWithoutMatchMapsInput, MapUpdateWithoutMatchMapsInput>, MapUncheckedUpdateWithoutMatchMapsInput>
  }

  export type GameModeUpdateOneRequiredWithoutMatchMapNestedInput = {
    create?: XOR<GameModeCreateWithoutMatchMapInput, GameModeUncheckedCreateWithoutMatchMapInput>
    connectOrCreate?: GameModeCreateOrConnectWithoutMatchMapInput
    upsert?: GameModeUpsertWithoutMatchMapInput
    connect?: GameModeWhereUniqueInput
    update?: XOR<XOR<GameModeUpdateToOneWithWhereWithoutMatchMapInput, GameModeUpdateWithoutMatchMapInput>, GameModeUncheckedUpdateWithoutMatchMapInput>
  }

  export type TeamUpdateOneWithoutMatchMapNestedInput = {
    create?: XOR<TeamCreateWithoutMatchMapInput, TeamUncheckedCreateWithoutMatchMapInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMatchMapInput
    upsert?: TeamUpsertWithoutMatchMapInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutMatchMapInput, TeamUpdateWithoutMatchMapInput>, TeamUncheckedUpdateWithoutMatchMapInput>
  }

  export type StatUpdateManyWithoutMatchMapNestedInput = {
    create?: XOR<StatCreateWithoutMatchMapInput, StatUncheckedCreateWithoutMatchMapInput> | StatCreateWithoutMatchMapInput[] | StatUncheckedCreateWithoutMatchMapInput[]
    connectOrCreate?: StatCreateOrConnectWithoutMatchMapInput | StatCreateOrConnectWithoutMatchMapInput[]
    upsert?: StatUpsertWithWhereUniqueWithoutMatchMapInput | StatUpsertWithWhereUniqueWithoutMatchMapInput[]
    createMany?: StatCreateManyMatchMapInputEnvelope
    set?: StatWhereUniqueInput | StatWhereUniqueInput[]
    disconnect?: StatWhereUniqueInput | StatWhereUniqueInput[]
    delete?: StatWhereUniqueInput | StatWhereUniqueInput[]
    connect?: StatWhereUniqueInput | StatWhereUniqueInput[]
    update?: StatUpdateWithWhereUniqueWithoutMatchMapInput | StatUpdateWithWhereUniqueWithoutMatchMapInput[]
    updateMany?: StatUpdateManyWithWhereWithoutMatchMapInput | StatUpdateManyWithWhereWithoutMatchMapInput[]
    deleteMany?: StatScalarWhereInput | StatScalarWhereInput[]
  }

  export type MatchMapPlayerStatUpdateManyWithoutMatchMapNestedInput = {
    create?: XOR<MatchMapPlayerStatCreateWithoutMatchMapInput, MatchMapPlayerStatUncheckedCreateWithoutMatchMapInput> | MatchMapPlayerStatCreateWithoutMatchMapInput[] | MatchMapPlayerStatUncheckedCreateWithoutMatchMapInput[]
    connectOrCreate?: MatchMapPlayerStatCreateOrConnectWithoutMatchMapInput | MatchMapPlayerStatCreateOrConnectWithoutMatchMapInput[]
    upsert?: MatchMapPlayerStatUpsertWithWhereUniqueWithoutMatchMapInput | MatchMapPlayerStatUpsertWithWhereUniqueWithoutMatchMapInput[]
    createMany?: MatchMapPlayerStatCreateManyMatchMapInputEnvelope
    set?: MatchMapPlayerStatWhereUniqueInput | MatchMapPlayerStatWhereUniqueInput[]
    disconnect?: MatchMapPlayerStatWhereUniqueInput | MatchMapPlayerStatWhereUniqueInput[]
    delete?: MatchMapPlayerStatWhereUniqueInput | MatchMapPlayerStatWhereUniqueInput[]
    connect?: MatchMapPlayerStatWhereUniqueInput | MatchMapPlayerStatWhereUniqueInput[]
    update?: MatchMapPlayerStatUpdateWithWhereUniqueWithoutMatchMapInput | MatchMapPlayerStatUpdateWithWhereUniqueWithoutMatchMapInput[]
    updateMany?: MatchMapPlayerStatUpdateManyWithWhereWithoutMatchMapInput | MatchMapPlayerStatUpdateManyWithWhereWithoutMatchMapInput[]
    deleteMany?: MatchMapPlayerStatScalarWhereInput | MatchMapPlayerStatScalarWhereInput[]
  }

  export type StatUncheckedUpdateManyWithoutMatchMapNestedInput = {
    create?: XOR<StatCreateWithoutMatchMapInput, StatUncheckedCreateWithoutMatchMapInput> | StatCreateWithoutMatchMapInput[] | StatUncheckedCreateWithoutMatchMapInput[]
    connectOrCreate?: StatCreateOrConnectWithoutMatchMapInput | StatCreateOrConnectWithoutMatchMapInput[]
    upsert?: StatUpsertWithWhereUniqueWithoutMatchMapInput | StatUpsertWithWhereUniqueWithoutMatchMapInput[]
    createMany?: StatCreateManyMatchMapInputEnvelope
    set?: StatWhereUniqueInput | StatWhereUniqueInput[]
    disconnect?: StatWhereUniqueInput | StatWhereUniqueInput[]
    delete?: StatWhereUniqueInput | StatWhereUniqueInput[]
    connect?: StatWhereUniqueInput | StatWhereUniqueInput[]
    update?: StatUpdateWithWhereUniqueWithoutMatchMapInput | StatUpdateWithWhereUniqueWithoutMatchMapInput[]
    updateMany?: StatUpdateManyWithWhereWithoutMatchMapInput | StatUpdateManyWithWhereWithoutMatchMapInput[]
    deleteMany?: StatScalarWhereInput | StatScalarWhereInput[]
  }

  export type MatchMapPlayerStatUncheckedUpdateManyWithoutMatchMapNestedInput = {
    create?: XOR<MatchMapPlayerStatCreateWithoutMatchMapInput, MatchMapPlayerStatUncheckedCreateWithoutMatchMapInput> | MatchMapPlayerStatCreateWithoutMatchMapInput[] | MatchMapPlayerStatUncheckedCreateWithoutMatchMapInput[]
    connectOrCreate?: MatchMapPlayerStatCreateOrConnectWithoutMatchMapInput | MatchMapPlayerStatCreateOrConnectWithoutMatchMapInput[]
    upsert?: MatchMapPlayerStatUpsertWithWhereUniqueWithoutMatchMapInput | MatchMapPlayerStatUpsertWithWhereUniqueWithoutMatchMapInput[]
    createMany?: MatchMapPlayerStatCreateManyMatchMapInputEnvelope
    set?: MatchMapPlayerStatWhereUniqueInput | MatchMapPlayerStatWhereUniqueInput[]
    disconnect?: MatchMapPlayerStatWhereUniqueInput | MatchMapPlayerStatWhereUniqueInput[]
    delete?: MatchMapPlayerStatWhereUniqueInput | MatchMapPlayerStatWhereUniqueInput[]
    connect?: MatchMapPlayerStatWhereUniqueInput | MatchMapPlayerStatWhereUniqueInput[]
    update?: MatchMapPlayerStatUpdateWithWhereUniqueWithoutMatchMapInput | MatchMapPlayerStatUpdateWithWhereUniqueWithoutMatchMapInput[]
    updateMany?: MatchMapPlayerStatUpdateManyWithWhereWithoutMatchMapInput | MatchMapPlayerStatUpdateManyWithWhereWithoutMatchMapInput[]
    deleteMany?: MatchMapPlayerStatScalarWhereInput | MatchMapPlayerStatScalarWhereInput[]
  }

  export type MatchMapCreateNestedOneWithoutMatchMapPlayerStatInput = {
    create?: XOR<MatchMapCreateWithoutMatchMapPlayerStatInput, MatchMapUncheckedCreateWithoutMatchMapPlayerStatInput>
    connectOrCreate?: MatchMapCreateOrConnectWithoutMatchMapPlayerStatInput
    connect?: MatchMapWhereUniqueInput
  }

  export type PlayerCreateNestedOneWithoutMatchMapPlayerStatInput = {
    create?: XOR<PlayerCreateWithoutMatchMapPlayerStatInput, PlayerUncheckedCreateWithoutMatchMapPlayerStatInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutMatchMapPlayerStatInput
    connect?: PlayerWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutMatchMapStatsInput = {
    create?: XOR<TeamCreateWithoutMatchMapStatsInput, TeamUncheckedCreateWithoutMatchMapStatsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMatchMapStatsInput
    connect?: TeamWhereUniqueInput
  }

  export type MatchMapUpdateOneRequiredWithoutMatchMapPlayerStatNestedInput = {
    create?: XOR<MatchMapCreateWithoutMatchMapPlayerStatInput, MatchMapUncheckedCreateWithoutMatchMapPlayerStatInput>
    connectOrCreate?: MatchMapCreateOrConnectWithoutMatchMapPlayerStatInput
    upsert?: MatchMapUpsertWithoutMatchMapPlayerStatInput
    connect?: MatchMapWhereUniqueInput
    update?: XOR<XOR<MatchMapUpdateToOneWithWhereWithoutMatchMapPlayerStatInput, MatchMapUpdateWithoutMatchMapPlayerStatInput>, MatchMapUncheckedUpdateWithoutMatchMapPlayerStatInput>
  }

  export type PlayerUpdateOneRequiredWithoutMatchMapPlayerStatNestedInput = {
    create?: XOR<PlayerCreateWithoutMatchMapPlayerStatInput, PlayerUncheckedCreateWithoutMatchMapPlayerStatInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutMatchMapPlayerStatInput
    upsert?: PlayerUpsertWithoutMatchMapPlayerStatInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutMatchMapPlayerStatInput, PlayerUpdateWithoutMatchMapPlayerStatInput>, PlayerUncheckedUpdateWithoutMatchMapPlayerStatInput>
  }

  export type TeamUpdateOneWithoutMatchMapStatsNestedInput = {
    create?: XOR<TeamCreateWithoutMatchMapStatsInput, TeamUncheckedCreateWithoutMatchMapStatsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMatchMapStatsInput
    upsert?: TeamUpsertWithoutMatchMapStatsInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutMatchMapStatsInput, TeamUpdateWithoutMatchMapStatsInput>, TeamUncheckedUpdateWithoutMatchMapStatsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedEnumPlayerRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerRole | EnumPlayerRoleFieldRefInput<$PrismaModel>
    in?: $Enums.PlayerRole[] | ListEnumPlayerRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlayerRole[] | ListEnumPlayerRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumPlayerRoleFilter<$PrismaModel> | $Enums.PlayerRole
  }

  export type NestedEnumPlayerRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerRole | EnumPlayerRoleFieldRefInput<$PrismaModel>
    in?: $Enums.PlayerRole[] | ListEnumPlayerRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlayerRole[] | ListEnumPlayerRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumPlayerRoleWithAggregatesFilter<$PrismaModel> | $Enums.PlayerRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlayerRoleFilter<$PrismaModel>
    _max?: NestedEnumPlayerRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ProfileCreateWithoutUserInput = {
    firstName: string
    lastName: string
    username?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: number
    firstName: string
    lastName: string
    username?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateWithoutProfileInput = {
    email: string
    password: string
    isVerified?: boolean
    isActive?: boolean
    verificationToken?: string | null
    verificationTokenExpiry?: Date | string | null
    passwordResetToken?: string | null
    passwordResetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: number
    email: string
    password: string
    isVerified?: boolean
    isActive?: boolean
    verificationToken?: string | null
    verificationTokenExpiry?: Date | string | null
    passwordResetToken?: string | null
    passwordResetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TeamCreateWithoutPlayersInput = {
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    teamA_Matches?: MatchCreateNestedManyWithoutTeamAInput
    teamB_Matches?: MatchCreateNestedManyWithoutTeamBInput
    matchesWon?: MatchCreateNestedManyWithoutWinnerInput
    MatchMap?: MatchMapCreateNestedManyWithoutWinnerInput
    matchMapStats?: MatchMapPlayerStatCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutPlayersInput = {
    id?: number
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    teamA_Matches?: MatchUncheckedCreateNestedManyWithoutTeamAInput
    teamB_Matches?: MatchUncheckedCreateNestedManyWithoutTeamBInput
    matchesWon?: MatchUncheckedCreateNestedManyWithoutWinnerInput
    MatchMap?: MatchMapUncheckedCreateNestedManyWithoutWinnerInput
    matchMapStats?: MatchMapPlayerStatUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutPlayersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
  }

  export type StatCreateWithoutPlayerInput = {
    id?: string
    kills: number
    deaths: number
    assists: number
    damage: number
    objective: number
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
    matchMap: MatchMapCreateNestedOneWithoutStatsInput
    Match?: MatchCreateNestedOneWithoutStatsInput
  }

  export type StatUncheckedCreateWithoutPlayerInput = {
    id?: string
    matchMapId: string
    kills: number
    deaths: number
    assists: number
    damage: number
    objective: number
    score: number
    matchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StatCreateOrConnectWithoutPlayerInput = {
    where: StatWhereUniqueInput
    create: XOR<StatCreateWithoutPlayerInput, StatUncheckedCreateWithoutPlayerInput>
  }

  export type StatCreateManyPlayerInputEnvelope = {
    data: StatCreateManyPlayerInput | StatCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type LeaderboardCreateWithoutPlayerInput = {
    id?: string
    rank: number
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaderboardUncheckedCreateWithoutPlayerInput = {
    id?: string
    rank: number
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaderboardCreateOrConnectWithoutPlayerInput = {
    where: LeaderboardWhereUniqueInput
    create: XOR<LeaderboardCreateWithoutPlayerInput, LeaderboardUncheckedCreateWithoutPlayerInput>
  }

  export type MatchMapPlayerStatCreateWithoutPlayerInput = {
    id?: string
    kills: number
    deaths: number
    assists: number
    damage: number
    objective: number
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
    matchMap: MatchMapCreateNestedOneWithoutMatchMapPlayerStatInput
    Team?: TeamCreateNestedOneWithoutMatchMapStatsInput
  }

  export type MatchMapPlayerStatUncheckedCreateWithoutPlayerInput = {
    id?: string
    matchMapId: string
    kills: number
    deaths: number
    assists: number
    damage: number
    objective: number
    score: number
    teamId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchMapPlayerStatCreateOrConnectWithoutPlayerInput = {
    where: MatchMapPlayerStatWhereUniqueInput
    create: XOR<MatchMapPlayerStatCreateWithoutPlayerInput, MatchMapPlayerStatUncheckedCreateWithoutPlayerInput>
  }

  export type MatchMapPlayerStatCreateManyPlayerInputEnvelope = {
    data: MatchMapPlayerStatCreateManyPlayerInput | MatchMapPlayerStatCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type TeamUpsertWithoutPlayersInput = {
    update: XOR<TeamUpdateWithoutPlayersInput, TeamUncheckedUpdateWithoutPlayersInput>
    create: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutPlayersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutPlayersInput, TeamUncheckedUpdateWithoutPlayersInput>
  }

  export type TeamUpdateWithoutPlayersInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teamA_Matches?: MatchUpdateManyWithoutTeamANestedInput
    teamB_Matches?: MatchUpdateManyWithoutTeamBNestedInput
    matchesWon?: MatchUpdateManyWithoutWinnerNestedInput
    MatchMap?: MatchMapUpdateManyWithoutWinnerNestedInput
    matchMapStats?: MatchMapPlayerStatUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutPlayersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teamA_Matches?: MatchUncheckedUpdateManyWithoutTeamANestedInput
    teamB_Matches?: MatchUncheckedUpdateManyWithoutTeamBNestedInput
    matchesWon?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
    MatchMap?: MatchMapUncheckedUpdateManyWithoutWinnerNestedInput
    matchMapStats?: MatchMapPlayerStatUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type StatUpsertWithWhereUniqueWithoutPlayerInput = {
    where: StatWhereUniqueInput
    update: XOR<StatUpdateWithoutPlayerInput, StatUncheckedUpdateWithoutPlayerInput>
    create: XOR<StatCreateWithoutPlayerInput, StatUncheckedCreateWithoutPlayerInput>
  }

  export type StatUpdateWithWhereUniqueWithoutPlayerInput = {
    where: StatWhereUniqueInput
    data: XOR<StatUpdateWithoutPlayerInput, StatUncheckedUpdateWithoutPlayerInput>
  }

  export type StatUpdateManyWithWhereWithoutPlayerInput = {
    where: StatScalarWhereInput
    data: XOR<StatUpdateManyMutationInput, StatUncheckedUpdateManyWithoutPlayerInput>
  }

  export type StatScalarWhereInput = {
    AND?: StatScalarWhereInput | StatScalarWhereInput[]
    OR?: StatScalarWhereInput[]
    NOT?: StatScalarWhereInput | StatScalarWhereInput[]
    id?: StringFilter<"Stat"> | string
    playerId?: IntFilter<"Stat"> | number
    matchMapId?: StringFilter<"Stat"> | string
    kills?: IntFilter<"Stat"> | number
    deaths?: IntFilter<"Stat"> | number
    assists?: IntFilter<"Stat"> | number
    damage?: IntFilter<"Stat"> | number
    objective?: IntFilter<"Stat"> | number
    score?: IntFilter<"Stat"> | number
    matchId?: StringNullableFilter<"Stat"> | string | null
    createdAt?: DateTimeFilter<"Stat"> | Date | string
    updatedAt?: DateTimeFilter<"Stat"> | Date | string
  }

  export type LeaderboardUpsertWithoutPlayerInput = {
    update: XOR<LeaderboardUpdateWithoutPlayerInput, LeaderboardUncheckedUpdateWithoutPlayerInput>
    create: XOR<LeaderboardCreateWithoutPlayerInput, LeaderboardUncheckedCreateWithoutPlayerInput>
    where?: LeaderboardWhereInput
  }

  export type LeaderboardUpdateToOneWithWhereWithoutPlayerInput = {
    where?: LeaderboardWhereInput
    data: XOR<LeaderboardUpdateWithoutPlayerInput, LeaderboardUncheckedUpdateWithoutPlayerInput>
  }

  export type LeaderboardUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderboardUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchMapPlayerStatUpsertWithWhereUniqueWithoutPlayerInput = {
    where: MatchMapPlayerStatWhereUniqueInput
    update: XOR<MatchMapPlayerStatUpdateWithoutPlayerInput, MatchMapPlayerStatUncheckedUpdateWithoutPlayerInput>
    create: XOR<MatchMapPlayerStatCreateWithoutPlayerInput, MatchMapPlayerStatUncheckedCreateWithoutPlayerInput>
  }

  export type MatchMapPlayerStatUpdateWithWhereUniqueWithoutPlayerInput = {
    where: MatchMapPlayerStatWhereUniqueInput
    data: XOR<MatchMapPlayerStatUpdateWithoutPlayerInput, MatchMapPlayerStatUncheckedUpdateWithoutPlayerInput>
  }

  export type MatchMapPlayerStatUpdateManyWithWhereWithoutPlayerInput = {
    where: MatchMapPlayerStatScalarWhereInput
    data: XOR<MatchMapPlayerStatUpdateManyMutationInput, MatchMapPlayerStatUncheckedUpdateManyWithoutPlayerInput>
  }

  export type MatchMapPlayerStatScalarWhereInput = {
    AND?: MatchMapPlayerStatScalarWhereInput | MatchMapPlayerStatScalarWhereInput[]
    OR?: MatchMapPlayerStatScalarWhereInput[]
    NOT?: MatchMapPlayerStatScalarWhereInput | MatchMapPlayerStatScalarWhereInput[]
    id?: StringFilter<"MatchMapPlayerStat"> | string
    matchMapId?: StringFilter<"MatchMapPlayerStat"> | string
    playerId?: IntFilter<"MatchMapPlayerStat"> | number
    kills?: IntFilter<"MatchMapPlayerStat"> | number
    deaths?: IntFilter<"MatchMapPlayerStat"> | number
    assists?: IntFilter<"MatchMapPlayerStat"> | number
    damage?: IntFilter<"MatchMapPlayerStat"> | number
    objective?: IntFilter<"MatchMapPlayerStat"> | number
    score?: IntFilter<"MatchMapPlayerStat"> | number
    teamId?: IntNullableFilter<"MatchMapPlayerStat"> | number | null
    createdAt?: DateTimeFilter<"MatchMapPlayerStat"> | Date | string
    updatedAt?: DateTimeFilter<"MatchMapPlayerStat"> | Date | string
  }

  export type PlayerCreateWithoutTeamInput = {
    firstName: string
    lastName: string
    gamertag: string
    playerImage?: string | null
    role: $Enums.PlayerRole
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    stats?: StatCreateNestedManyWithoutPlayerInput
    leaderboard?: LeaderboardCreateNestedOneWithoutPlayerInput
    MatchMapPlayerStat?: MatchMapPlayerStatCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutTeamInput = {
    id?: number
    firstName: string
    lastName: string
    gamertag: string
    playerImage?: string | null
    role: $Enums.PlayerRole
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    stats?: StatUncheckedCreateNestedManyWithoutPlayerInput
    leaderboard?: LeaderboardUncheckedCreateNestedOneWithoutPlayerInput
    MatchMapPlayerStat?: MatchMapPlayerStatUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutTeamInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput>
  }

  export type PlayerCreateManyTeamInputEnvelope = {
    data: PlayerCreateManyTeamInput | PlayerCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutTeamAInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    event?: EventCreateNestedOneWithoutMatchesInput
    teamB: TeamCreateNestedOneWithoutTeamB_MatchesInput
    winner?: TeamCreateNestedOneWithoutMatchesWonInput
    stats?: StatCreateNestedManyWithoutMatchInput
    MatchMap?: MatchMapCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutTeamAInput = {
    id?: string
    eventId?: string | null
    teamBId: number
    winnerId?: number | null
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: StatUncheckedCreateNestedManyWithoutMatchInput
    MatchMap?: MatchMapUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutTeamAInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutTeamAInput, MatchUncheckedCreateWithoutTeamAInput>
  }

  export type MatchCreateManyTeamAInputEnvelope = {
    data: MatchCreateManyTeamAInput | MatchCreateManyTeamAInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutTeamBInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    event?: EventCreateNestedOneWithoutMatchesInput
    teamA: TeamCreateNestedOneWithoutTeamA_MatchesInput
    winner?: TeamCreateNestedOneWithoutMatchesWonInput
    stats?: StatCreateNestedManyWithoutMatchInput
    MatchMap?: MatchMapCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutTeamBInput = {
    id?: string
    eventId?: string | null
    teamAId: number
    winnerId?: number | null
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: StatUncheckedCreateNestedManyWithoutMatchInput
    MatchMap?: MatchMapUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutTeamBInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutTeamBInput, MatchUncheckedCreateWithoutTeamBInput>
  }

  export type MatchCreateManyTeamBInputEnvelope = {
    data: MatchCreateManyTeamBInput | MatchCreateManyTeamBInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutWinnerInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    event?: EventCreateNestedOneWithoutMatchesInput
    teamA: TeamCreateNestedOneWithoutTeamA_MatchesInput
    teamB: TeamCreateNestedOneWithoutTeamB_MatchesInput
    stats?: StatCreateNestedManyWithoutMatchInput
    MatchMap?: MatchMapCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutWinnerInput = {
    id?: string
    eventId?: string | null
    teamAId: number
    teamBId: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: StatUncheckedCreateNestedManyWithoutMatchInput
    MatchMap?: MatchMapUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutWinnerInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput>
  }

  export type MatchCreateManyWinnerInputEnvelope = {
    data: MatchCreateManyWinnerInput | MatchCreateManyWinnerInput[]
    skipDuplicates?: boolean
  }

  export type MatchMapCreateWithoutWinnerInput = {
    id?: string
    mapNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    match: MatchCreateNestedOneWithoutMatchMapInput
    map: MapCreateNestedOneWithoutMatchMapsInput
    gameMode: GameModeCreateNestedOneWithoutMatchMapInput
    stats?: StatCreateNestedManyWithoutMatchMapInput
    MatchMapPlayerStat?: MatchMapPlayerStatCreateNestedManyWithoutMatchMapInput
  }

  export type MatchMapUncheckedCreateWithoutWinnerInput = {
    id?: string
    matchId: string
    mapId: number
    gameModeId: number
    mapNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: StatUncheckedCreateNestedManyWithoutMatchMapInput
    MatchMapPlayerStat?: MatchMapPlayerStatUncheckedCreateNestedManyWithoutMatchMapInput
  }

  export type MatchMapCreateOrConnectWithoutWinnerInput = {
    where: MatchMapWhereUniqueInput
    create: XOR<MatchMapCreateWithoutWinnerInput, MatchMapUncheckedCreateWithoutWinnerInput>
  }

  export type MatchMapCreateManyWinnerInputEnvelope = {
    data: MatchMapCreateManyWinnerInput | MatchMapCreateManyWinnerInput[]
    skipDuplicates?: boolean
  }

  export type MatchMapPlayerStatCreateWithoutTeamInput = {
    id?: string
    kills: number
    deaths: number
    assists: number
    damage: number
    objective: number
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
    matchMap: MatchMapCreateNestedOneWithoutMatchMapPlayerStatInput
    player: PlayerCreateNestedOneWithoutMatchMapPlayerStatInput
  }

  export type MatchMapPlayerStatUncheckedCreateWithoutTeamInput = {
    id?: string
    matchMapId: string
    playerId: number
    kills: number
    deaths: number
    assists: number
    damage: number
    objective: number
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchMapPlayerStatCreateOrConnectWithoutTeamInput = {
    where: MatchMapPlayerStatWhereUniqueInput
    create: XOR<MatchMapPlayerStatCreateWithoutTeamInput, MatchMapPlayerStatUncheckedCreateWithoutTeamInput>
  }

  export type MatchMapPlayerStatCreateManyTeamInputEnvelope = {
    data: MatchMapPlayerStatCreateManyTeamInput | MatchMapPlayerStatCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type PlayerUpsertWithWhereUniqueWithoutTeamInput = {
    where: PlayerWhereUniqueInput
    update: XOR<PlayerUpdateWithoutTeamInput, PlayerUncheckedUpdateWithoutTeamInput>
    create: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput>
  }

  export type PlayerUpdateWithWhereUniqueWithoutTeamInput = {
    where: PlayerWhereUniqueInput
    data: XOR<PlayerUpdateWithoutTeamInput, PlayerUncheckedUpdateWithoutTeamInput>
  }

  export type PlayerUpdateManyWithWhereWithoutTeamInput = {
    where: PlayerScalarWhereInput
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyWithoutTeamInput>
  }

  export type PlayerScalarWhereInput = {
    AND?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
    OR?: PlayerScalarWhereInput[]
    NOT?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
    id?: IntFilter<"Player"> | number
    firstName?: StringFilter<"Player"> | string
    lastName?: StringFilter<"Player"> | string
    gamertag?: StringFilter<"Player"> | string
    playerImage?: StringNullableFilter<"Player"> | string | null
    role?: EnumPlayerRoleFilter<"Player"> | $Enums.PlayerRole
    teamId?: IntNullableFilter<"Player"> | number | null
    createdAt?: DateTimeFilter<"Player"> | Date | string
    updatedAt?: DateTimeFilter<"Player"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Player"> | Date | string | null
  }

  export type MatchUpsertWithWhereUniqueWithoutTeamAInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutTeamAInput, MatchUncheckedUpdateWithoutTeamAInput>
    create: XOR<MatchCreateWithoutTeamAInput, MatchUncheckedCreateWithoutTeamAInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutTeamAInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutTeamAInput, MatchUncheckedUpdateWithoutTeamAInput>
  }

  export type MatchUpdateManyWithWhereWithoutTeamAInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutTeamAInput>
  }

  export type MatchScalarWhereInput = {
    AND?: MatchScalarWhereInput | MatchScalarWhereInput[]
    OR?: MatchScalarWhereInput[]
    NOT?: MatchScalarWhereInput | MatchScalarWhereInput[]
    id?: StringFilter<"Match"> | string
    eventId?: StringNullableFilter<"Match"> | string | null
    teamAId?: IntFilter<"Match"> | number
    teamBId?: IntFilter<"Match"> | number
    winnerId?: IntNullableFilter<"Match"> | number | null
    date?: DateTimeFilter<"Match"> | Date | string
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
  }

  export type MatchUpsertWithWhereUniqueWithoutTeamBInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutTeamBInput, MatchUncheckedUpdateWithoutTeamBInput>
    create: XOR<MatchCreateWithoutTeamBInput, MatchUncheckedCreateWithoutTeamBInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutTeamBInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutTeamBInput, MatchUncheckedUpdateWithoutTeamBInput>
  }

  export type MatchUpdateManyWithWhereWithoutTeamBInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutTeamBInput>
  }

  export type MatchUpsertWithWhereUniqueWithoutWinnerInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutWinnerInput, MatchUncheckedUpdateWithoutWinnerInput>
    create: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutWinnerInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutWinnerInput, MatchUncheckedUpdateWithoutWinnerInput>
  }

  export type MatchUpdateManyWithWhereWithoutWinnerInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutWinnerInput>
  }

  export type MatchMapUpsertWithWhereUniqueWithoutWinnerInput = {
    where: MatchMapWhereUniqueInput
    update: XOR<MatchMapUpdateWithoutWinnerInput, MatchMapUncheckedUpdateWithoutWinnerInput>
    create: XOR<MatchMapCreateWithoutWinnerInput, MatchMapUncheckedCreateWithoutWinnerInput>
  }

  export type MatchMapUpdateWithWhereUniqueWithoutWinnerInput = {
    where: MatchMapWhereUniqueInput
    data: XOR<MatchMapUpdateWithoutWinnerInput, MatchMapUncheckedUpdateWithoutWinnerInput>
  }

  export type MatchMapUpdateManyWithWhereWithoutWinnerInput = {
    where: MatchMapScalarWhereInput
    data: XOR<MatchMapUpdateManyMutationInput, MatchMapUncheckedUpdateManyWithoutWinnerInput>
  }

  export type MatchMapScalarWhereInput = {
    AND?: MatchMapScalarWhereInput | MatchMapScalarWhereInput[]
    OR?: MatchMapScalarWhereInput[]
    NOT?: MatchMapScalarWhereInput | MatchMapScalarWhereInput[]
    id?: StringFilter<"MatchMap"> | string
    matchId?: StringFilter<"MatchMap"> | string
    mapId?: IntFilter<"MatchMap"> | number
    gameModeId?: IntFilter<"MatchMap"> | number
    mapNumber?: IntFilter<"MatchMap"> | number
    winnerId?: IntNullableFilter<"MatchMap"> | number | null
    createdAt?: DateTimeFilter<"MatchMap"> | Date | string
    updatedAt?: DateTimeFilter<"MatchMap"> | Date | string
  }

  export type MatchMapPlayerStatUpsertWithWhereUniqueWithoutTeamInput = {
    where: MatchMapPlayerStatWhereUniqueInput
    update: XOR<MatchMapPlayerStatUpdateWithoutTeamInput, MatchMapPlayerStatUncheckedUpdateWithoutTeamInput>
    create: XOR<MatchMapPlayerStatCreateWithoutTeamInput, MatchMapPlayerStatUncheckedCreateWithoutTeamInput>
  }

  export type MatchMapPlayerStatUpdateWithWhereUniqueWithoutTeamInput = {
    where: MatchMapPlayerStatWhereUniqueInput
    data: XOR<MatchMapPlayerStatUpdateWithoutTeamInput, MatchMapPlayerStatUncheckedUpdateWithoutTeamInput>
  }

  export type MatchMapPlayerStatUpdateManyWithWhereWithoutTeamInput = {
    where: MatchMapPlayerStatScalarWhereInput
    data: XOR<MatchMapPlayerStatUpdateManyMutationInput, MatchMapPlayerStatUncheckedUpdateManyWithoutTeamInput>
  }

  export type EventCreateWithoutMatchesInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUncheckedCreateWithoutMatchesInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateOrConnectWithoutMatchesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutMatchesInput, EventUncheckedCreateWithoutMatchesInput>
  }

  export type TeamCreateWithoutTeamA_MatchesInput = {
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    players?: PlayerCreateNestedManyWithoutTeamInput
    teamB_Matches?: MatchCreateNestedManyWithoutTeamBInput
    matchesWon?: MatchCreateNestedManyWithoutWinnerInput
    MatchMap?: MatchMapCreateNestedManyWithoutWinnerInput
    matchMapStats?: MatchMapPlayerStatCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutTeamA_MatchesInput = {
    id?: number
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    teamB_Matches?: MatchUncheckedCreateNestedManyWithoutTeamBInput
    matchesWon?: MatchUncheckedCreateNestedManyWithoutWinnerInput
    MatchMap?: MatchMapUncheckedCreateNestedManyWithoutWinnerInput
    matchMapStats?: MatchMapPlayerStatUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutTeamA_MatchesInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutTeamA_MatchesInput, TeamUncheckedCreateWithoutTeamA_MatchesInput>
  }

  export type TeamCreateWithoutTeamB_MatchesInput = {
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    players?: PlayerCreateNestedManyWithoutTeamInput
    teamA_Matches?: MatchCreateNestedManyWithoutTeamAInput
    matchesWon?: MatchCreateNestedManyWithoutWinnerInput
    MatchMap?: MatchMapCreateNestedManyWithoutWinnerInput
    matchMapStats?: MatchMapPlayerStatCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutTeamB_MatchesInput = {
    id?: number
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    teamA_Matches?: MatchUncheckedCreateNestedManyWithoutTeamAInput
    matchesWon?: MatchUncheckedCreateNestedManyWithoutWinnerInput
    MatchMap?: MatchMapUncheckedCreateNestedManyWithoutWinnerInput
    matchMapStats?: MatchMapPlayerStatUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutTeamB_MatchesInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutTeamB_MatchesInput, TeamUncheckedCreateWithoutTeamB_MatchesInput>
  }

  export type TeamCreateWithoutMatchesWonInput = {
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    players?: PlayerCreateNestedManyWithoutTeamInput
    teamA_Matches?: MatchCreateNestedManyWithoutTeamAInput
    teamB_Matches?: MatchCreateNestedManyWithoutTeamBInput
    MatchMap?: MatchMapCreateNestedManyWithoutWinnerInput
    matchMapStats?: MatchMapPlayerStatCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutMatchesWonInput = {
    id?: number
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    teamA_Matches?: MatchUncheckedCreateNestedManyWithoutTeamAInput
    teamB_Matches?: MatchUncheckedCreateNestedManyWithoutTeamBInput
    MatchMap?: MatchMapUncheckedCreateNestedManyWithoutWinnerInput
    matchMapStats?: MatchMapPlayerStatUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutMatchesWonInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMatchesWonInput, TeamUncheckedCreateWithoutMatchesWonInput>
  }

  export type StatCreateWithoutMatchInput = {
    id?: string
    kills: number
    deaths: number
    assists: number
    damage: number
    objective: number
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
    player: PlayerCreateNestedOneWithoutStatsInput
    matchMap: MatchMapCreateNestedOneWithoutStatsInput
  }

  export type StatUncheckedCreateWithoutMatchInput = {
    id?: string
    playerId: number
    matchMapId: string
    kills: number
    deaths: number
    assists: number
    damage: number
    objective: number
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StatCreateOrConnectWithoutMatchInput = {
    where: StatWhereUniqueInput
    create: XOR<StatCreateWithoutMatchInput, StatUncheckedCreateWithoutMatchInput>
  }

  export type StatCreateManyMatchInputEnvelope = {
    data: StatCreateManyMatchInput | StatCreateManyMatchInput[]
    skipDuplicates?: boolean
  }

  export type MatchMapCreateWithoutMatchInput = {
    id?: string
    mapNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    map: MapCreateNestedOneWithoutMatchMapsInput
    gameMode: GameModeCreateNestedOneWithoutMatchMapInput
    winner?: TeamCreateNestedOneWithoutMatchMapInput
    stats?: StatCreateNestedManyWithoutMatchMapInput
    MatchMapPlayerStat?: MatchMapPlayerStatCreateNestedManyWithoutMatchMapInput
  }

  export type MatchMapUncheckedCreateWithoutMatchInput = {
    id?: string
    mapId: number
    gameModeId: number
    mapNumber: number
    winnerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: StatUncheckedCreateNestedManyWithoutMatchMapInput
    MatchMapPlayerStat?: MatchMapPlayerStatUncheckedCreateNestedManyWithoutMatchMapInput
  }

  export type MatchMapCreateOrConnectWithoutMatchInput = {
    where: MatchMapWhereUniqueInput
    create: XOR<MatchMapCreateWithoutMatchInput, MatchMapUncheckedCreateWithoutMatchInput>
  }

  export type MatchMapCreateManyMatchInputEnvelope = {
    data: MatchMapCreateManyMatchInput | MatchMapCreateManyMatchInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutMatchesInput = {
    update: XOR<EventUpdateWithoutMatchesInput, EventUncheckedUpdateWithoutMatchesInput>
    create: XOR<EventCreateWithoutMatchesInput, EventUncheckedCreateWithoutMatchesInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutMatchesInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutMatchesInput, EventUncheckedUpdateWithoutMatchesInput>
  }

  export type EventUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUpsertWithoutTeamA_MatchesInput = {
    update: XOR<TeamUpdateWithoutTeamA_MatchesInput, TeamUncheckedUpdateWithoutTeamA_MatchesInput>
    create: XOR<TeamCreateWithoutTeamA_MatchesInput, TeamUncheckedCreateWithoutTeamA_MatchesInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutTeamA_MatchesInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutTeamA_MatchesInput, TeamUncheckedUpdateWithoutTeamA_MatchesInput>
  }

  export type TeamUpdateWithoutTeamA_MatchesInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    players?: PlayerUpdateManyWithoutTeamNestedInput
    teamB_Matches?: MatchUpdateManyWithoutTeamBNestedInput
    matchesWon?: MatchUpdateManyWithoutWinnerNestedInput
    MatchMap?: MatchMapUpdateManyWithoutWinnerNestedInput
    matchMapStats?: MatchMapPlayerStatUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutTeamA_MatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    teamB_Matches?: MatchUncheckedUpdateManyWithoutTeamBNestedInput
    matchesWon?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
    MatchMap?: MatchMapUncheckedUpdateManyWithoutWinnerNestedInput
    matchMapStats?: MatchMapPlayerStatUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamUpsertWithoutTeamB_MatchesInput = {
    update: XOR<TeamUpdateWithoutTeamB_MatchesInput, TeamUncheckedUpdateWithoutTeamB_MatchesInput>
    create: XOR<TeamCreateWithoutTeamB_MatchesInput, TeamUncheckedCreateWithoutTeamB_MatchesInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutTeamB_MatchesInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutTeamB_MatchesInput, TeamUncheckedUpdateWithoutTeamB_MatchesInput>
  }

  export type TeamUpdateWithoutTeamB_MatchesInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    players?: PlayerUpdateManyWithoutTeamNestedInput
    teamA_Matches?: MatchUpdateManyWithoutTeamANestedInput
    matchesWon?: MatchUpdateManyWithoutWinnerNestedInput
    MatchMap?: MatchMapUpdateManyWithoutWinnerNestedInput
    matchMapStats?: MatchMapPlayerStatUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutTeamB_MatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    teamA_Matches?: MatchUncheckedUpdateManyWithoutTeamANestedInput
    matchesWon?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
    MatchMap?: MatchMapUncheckedUpdateManyWithoutWinnerNestedInput
    matchMapStats?: MatchMapPlayerStatUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamUpsertWithoutMatchesWonInput = {
    update: XOR<TeamUpdateWithoutMatchesWonInput, TeamUncheckedUpdateWithoutMatchesWonInput>
    create: XOR<TeamCreateWithoutMatchesWonInput, TeamUncheckedCreateWithoutMatchesWonInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutMatchesWonInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutMatchesWonInput, TeamUncheckedUpdateWithoutMatchesWonInput>
  }

  export type TeamUpdateWithoutMatchesWonInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    players?: PlayerUpdateManyWithoutTeamNestedInput
    teamA_Matches?: MatchUpdateManyWithoutTeamANestedInput
    teamB_Matches?: MatchUpdateManyWithoutTeamBNestedInput
    MatchMap?: MatchMapUpdateManyWithoutWinnerNestedInput
    matchMapStats?: MatchMapPlayerStatUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutMatchesWonInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    teamA_Matches?: MatchUncheckedUpdateManyWithoutTeamANestedInput
    teamB_Matches?: MatchUncheckedUpdateManyWithoutTeamBNestedInput
    MatchMap?: MatchMapUncheckedUpdateManyWithoutWinnerNestedInput
    matchMapStats?: MatchMapPlayerStatUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type StatUpsertWithWhereUniqueWithoutMatchInput = {
    where: StatWhereUniqueInput
    update: XOR<StatUpdateWithoutMatchInput, StatUncheckedUpdateWithoutMatchInput>
    create: XOR<StatCreateWithoutMatchInput, StatUncheckedCreateWithoutMatchInput>
  }

  export type StatUpdateWithWhereUniqueWithoutMatchInput = {
    where: StatWhereUniqueInput
    data: XOR<StatUpdateWithoutMatchInput, StatUncheckedUpdateWithoutMatchInput>
  }

  export type StatUpdateManyWithWhereWithoutMatchInput = {
    where: StatScalarWhereInput
    data: XOR<StatUpdateManyMutationInput, StatUncheckedUpdateManyWithoutMatchInput>
  }

  export type MatchMapUpsertWithWhereUniqueWithoutMatchInput = {
    where: MatchMapWhereUniqueInput
    update: XOR<MatchMapUpdateWithoutMatchInput, MatchMapUncheckedUpdateWithoutMatchInput>
    create: XOR<MatchMapCreateWithoutMatchInput, MatchMapUncheckedCreateWithoutMatchInput>
  }

  export type MatchMapUpdateWithWhereUniqueWithoutMatchInput = {
    where: MatchMapWhereUniqueInput
    data: XOR<MatchMapUpdateWithoutMatchInput, MatchMapUncheckedUpdateWithoutMatchInput>
  }

  export type MatchMapUpdateManyWithWhereWithoutMatchInput = {
    where: MatchMapScalarWhereInput
    data: XOR<MatchMapUpdateManyMutationInput, MatchMapUncheckedUpdateManyWithoutMatchInput>
  }

  export type MatchCreateWithoutEventInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    teamA: TeamCreateNestedOneWithoutTeamA_MatchesInput
    teamB: TeamCreateNestedOneWithoutTeamB_MatchesInput
    winner?: TeamCreateNestedOneWithoutMatchesWonInput
    stats?: StatCreateNestedManyWithoutMatchInput
    MatchMap?: MatchMapCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutEventInput = {
    id?: string
    teamAId: number
    teamBId: number
    winnerId?: number | null
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: StatUncheckedCreateNestedManyWithoutMatchInput
    MatchMap?: MatchMapUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutEventInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutEventInput, MatchUncheckedCreateWithoutEventInput>
  }

  export type MatchCreateManyEventInputEnvelope = {
    data: MatchCreateManyEventInput | MatchCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type MatchUpsertWithWhereUniqueWithoutEventInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutEventInput, MatchUncheckedUpdateWithoutEventInput>
    create: XOR<MatchCreateWithoutEventInput, MatchUncheckedCreateWithoutEventInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutEventInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutEventInput, MatchUncheckedUpdateWithoutEventInput>
  }

  export type MatchUpdateManyWithWhereWithoutEventInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutEventInput>
  }

  export type PlayerCreateWithoutStatsInput = {
    firstName: string
    lastName: string
    gamertag: string
    playerImage?: string | null
    role: $Enums.PlayerRole
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    team?: TeamCreateNestedOneWithoutPlayersInput
    leaderboard?: LeaderboardCreateNestedOneWithoutPlayerInput
    MatchMapPlayerStat?: MatchMapPlayerStatCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutStatsInput = {
    id?: number
    firstName: string
    lastName: string
    gamertag: string
    playerImage?: string | null
    role: $Enums.PlayerRole
    teamId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    leaderboard?: LeaderboardUncheckedCreateNestedOneWithoutPlayerInput
    MatchMapPlayerStat?: MatchMapPlayerStatUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutStatsInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutStatsInput, PlayerUncheckedCreateWithoutStatsInput>
  }

  export type MatchMapCreateWithoutStatsInput = {
    id?: string
    mapNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    match: MatchCreateNestedOneWithoutMatchMapInput
    map: MapCreateNestedOneWithoutMatchMapsInput
    gameMode: GameModeCreateNestedOneWithoutMatchMapInput
    winner?: TeamCreateNestedOneWithoutMatchMapInput
    MatchMapPlayerStat?: MatchMapPlayerStatCreateNestedManyWithoutMatchMapInput
  }

  export type MatchMapUncheckedCreateWithoutStatsInput = {
    id?: string
    matchId: string
    mapId: number
    gameModeId: number
    mapNumber: number
    winnerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    MatchMapPlayerStat?: MatchMapPlayerStatUncheckedCreateNestedManyWithoutMatchMapInput
  }

  export type MatchMapCreateOrConnectWithoutStatsInput = {
    where: MatchMapWhereUniqueInput
    create: XOR<MatchMapCreateWithoutStatsInput, MatchMapUncheckedCreateWithoutStatsInput>
  }

  export type MatchCreateWithoutStatsInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    event?: EventCreateNestedOneWithoutMatchesInput
    teamA: TeamCreateNestedOneWithoutTeamA_MatchesInput
    teamB: TeamCreateNestedOneWithoutTeamB_MatchesInput
    winner?: TeamCreateNestedOneWithoutMatchesWonInput
    MatchMap?: MatchMapCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutStatsInput = {
    id?: string
    eventId?: string | null
    teamAId: number
    teamBId: number
    winnerId?: number | null
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    MatchMap?: MatchMapUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutStatsInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutStatsInput, MatchUncheckedCreateWithoutStatsInput>
  }

  export type PlayerUpsertWithoutStatsInput = {
    update: XOR<PlayerUpdateWithoutStatsInput, PlayerUncheckedUpdateWithoutStatsInput>
    create: XOR<PlayerCreateWithoutStatsInput, PlayerUncheckedCreateWithoutStatsInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutStatsInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutStatsInput, PlayerUncheckedUpdateWithoutStatsInput>
  }

  export type PlayerUpdateWithoutStatsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    playerImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumPlayerRoleFieldUpdateOperationsInput | $Enums.PlayerRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: TeamUpdateOneWithoutPlayersNestedInput
    leaderboard?: LeaderboardUpdateOneWithoutPlayerNestedInput
    MatchMapPlayerStat?: MatchMapPlayerStatUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutStatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    playerImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumPlayerRoleFieldUpdateOperationsInput | $Enums.PlayerRole
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaderboard?: LeaderboardUncheckedUpdateOneWithoutPlayerNestedInput
    MatchMapPlayerStat?: MatchMapPlayerStatUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type MatchMapUpsertWithoutStatsInput = {
    update: XOR<MatchMapUpdateWithoutStatsInput, MatchMapUncheckedUpdateWithoutStatsInput>
    create: XOR<MatchMapCreateWithoutStatsInput, MatchMapUncheckedCreateWithoutStatsInput>
    where?: MatchMapWhereInput
  }

  export type MatchMapUpdateToOneWithWhereWithoutStatsInput = {
    where?: MatchMapWhereInput
    data: XOR<MatchMapUpdateWithoutStatsInput, MatchMapUncheckedUpdateWithoutStatsInput>
  }

  export type MatchMapUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    mapNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutMatchMapNestedInput
    map?: MapUpdateOneRequiredWithoutMatchMapsNestedInput
    gameMode?: GameModeUpdateOneRequiredWithoutMatchMapNestedInput
    winner?: TeamUpdateOneWithoutMatchMapNestedInput
    MatchMapPlayerStat?: MatchMapPlayerStatUpdateManyWithoutMatchMapNestedInput
  }

  export type MatchMapUncheckedUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    mapId?: IntFieldUpdateOperationsInput | number
    gameModeId?: IntFieldUpdateOperationsInput | number
    mapNumber?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MatchMapPlayerStat?: MatchMapPlayerStatUncheckedUpdateManyWithoutMatchMapNestedInput
  }

  export type MatchUpsertWithoutStatsInput = {
    update: XOR<MatchUpdateWithoutStatsInput, MatchUncheckedUpdateWithoutStatsInput>
    create: XOR<MatchCreateWithoutStatsInput, MatchUncheckedCreateWithoutStatsInput>
    where?: MatchWhereInput
  }

  export type MatchUpdateToOneWithWhereWithoutStatsInput = {
    where?: MatchWhereInput
    data: XOR<MatchUpdateWithoutStatsInput, MatchUncheckedUpdateWithoutStatsInput>
  }

  export type MatchUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneWithoutMatchesNestedInput
    teamA?: TeamUpdateOneRequiredWithoutTeamA_MatchesNestedInput
    teamB?: TeamUpdateOneRequiredWithoutTeamB_MatchesNestedInput
    winner?: TeamUpdateOneWithoutMatchesWonNestedInput
    MatchMap?: MatchMapUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    teamAId?: IntFieldUpdateOperationsInput | number
    teamBId?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MatchMap?: MatchMapUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type PlayerCreateWithoutLeaderboardInput = {
    firstName: string
    lastName: string
    gamertag: string
    playerImage?: string | null
    role: $Enums.PlayerRole
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    team?: TeamCreateNestedOneWithoutPlayersInput
    stats?: StatCreateNestedManyWithoutPlayerInput
    MatchMapPlayerStat?: MatchMapPlayerStatCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutLeaderboardInput = {
    id?: number
    firstName: string
    lastName: string
    gamertag: string
    playerImage?: string | null
    role: $Enums.PlayerRole
    teamId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    stats?: StatUncheckedCreateNestedManyWithoutPlayerInput
    MatchMapPlayerStat?: MatchMapPlayerStatUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutLeaderboardInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutLeaderboardInput, PlayerUncheckedCreateWithoutLeaderboardInput>
  }

  export type PlayerUpsertWithoutLeaderboardInput = {
    update: XOR<PlayerUpdateWithoutLeaderboardInput, PlayerUncheckedUpdateWithoutLeaderboardInput>
    create: XOR<PlayerCreateWithoutLeaderboardInput, PlayerUncheckedCreateWithoutLeaderboardInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutLeaderboardInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutLeaderboardInput, PlayerUncheckedUpdateWithoutLeaderboardInput>
  }

  export type PlayerUpdateWithoutLeaderboardInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    playerImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumPlayerRoleFieldUpdateOperationsInput | $Enums.PlayerRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: TeamUpdateOneWithoutPlayersNestedInput
    stats?: StatUpdateManyWithoutPlayerNestedInput
    MatchMapPlayerStat?: MatchMapPlayerStatUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutLeaderboardInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    playerImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumPlayerRoleFieldUpdateOperationsInput | $Enums.PlayerRole
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stats?: StatUncheckedUpdateManyWithoutPlayerNestedInput
    MatchMapPlayerStat?: MatchMapPlayerStatUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type MapCreateWithoutGameModeInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    matchMaps?: MatchMapCreateNestedManyWithoutMapInput
  }

  export type MapUncheckedCreateWithoutGameModeInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    matchMaps?: MatchMapUncheckedCreateNestedManyWithoutMapInput
  }

  export type MapCreateOrConnectWithoutGameModeInput = {
    where: MapWhereUniqueInput
    create: XOR<MapCreateWithoutGameModeInput, MapUncheckedCreateWithoutGameModeInput>
  }

  export type MapCreateManyGameModeInputEnvelope = {
    data: MapCreateManyGameModeInput | MapCreateManyGameModeInput[]
    skipDuplicates?: boolean
  }

  export type MatchMapCreateWithoutGameModeInput = {
    id?: string
    mapNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    match: MatchCreateNestedOneWithoutMatchMapInput
    map: MapCreateNestedOneWithoutMatchMapsInput
    winner?: TeamCreateNestedOneWithoutMatchMapInput
    stats?: StatCreateNestedManyWithoutMatchMapInput
    MatchMapPlayerStat?: MatchMapPlayerStatCreateNestedManyWithoutMatchMapInput
  }

  export type MatchMapUncheckedCreateWithoutGameModeInput = {
    id?: string
    matchId: string
    mapId: number
    mapNumber: number
    winnerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: StatUncheckedCreateNestedManyWithoutMatchMapInput
    MatchMapPlayerStat?: MatchMapPlayerStatUncheckedCreateNestedManyWithoutMatchMapInput
  }

  export type MatchMapCreateOrConnectWithoutGameModeInput = {
    where: MatchMapWhereUniqueInput
    create: XOR<MatchMapCreateWithoutGameModeInput, MatchMapUncheckedCreateWithoutGameModeInput>
  }

  export type MatchMapCreateManyGameModeInputEnvelope = {
    data: MatchMapCreateManyGameModeInput | MatchMapCreateManyGameModeInput[]
    skipDuplicates?: boolean
  }

  export type MapUpsertWithWhereUniqueWithoutGameModeInput = {
    where: MapWhereUniqueInput
    update: XOR<MapUpdateWithoutGameModeInput, MapUncheckedUpdateWithoutGameModeInput>
    create: XOR<MapCreateWithoutGameModeInput, MapUncheckedCreateWithoutGameModeInput>
  }

  export type MapUpdateWithWhereUniqueWithoutGameModeInput = {
    where: MapWhereUniqueInput
    data: XOR<MapUpdateWithoutGameModeInput, MapUncheckedUpdateWithoutGameModeInput>
  }

  export type MapUpdateManyWithWhereWithoutGameModeInput = {
    where: MapScalarWhereInput
    data: XOR<MapUpdateManyMutationInput, MapUncheckedUpdateManyWithoutGameModeInput>
  }

  export type MapScalarWhereInput = {
    AND?: MapScalarWhereInput | MapScalarWhereInput[]
    OR?: MapScalarWhereInput[]
    NOT?: MapScalarWhereInput | MapScalarWhereInput[]
    id?: IntFilter<"Map"> | number
    name?: StringFilter<"Map"> | string
    gameModeId?: IntFilter<"Map"> | number
    createdAt?: DateTimeFilter<"Map"> | Date | string
    updatedAt?: DateTimeFilter<"Map"> | Date | string
  }

  export type MatchMapUpsertWithWhereUniqueWithoutGameModeInput = {
    where: MatchMapWhereUniqueInput
    update: XOR<MatchMapUpdateWithoutGameModeInput, MatchMapUncheckedUpdateWithoutGameModeInput>
    create: XOR<MatchMapCreateWithoutGameModeInput, MatchMapUncheckedCreateWithoutGameModeInput>
  }

  export type MatchMapUpdateWithWhereUniqueWithoutGameModeInput = {
    where: MatchMapWhereUniqueInput
    data: XOR<MatchMapUpdateWithoutGameModeInput, MatchMapUncheckedUpdateWithoutGameModeInput>
  }

  export type MatchMapUpdateManyWithWhereWithoutGameModeInput = {
    where: MatchMapScalarWhereInput
    data: XOR<MatchMapUpdateManyMutationInput, MatchMapUncheckedUpdateManyWithoutGameModeInput>
  }

  export type GameModeCreateWithoutMapsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    MatchMap?: MatchMapCreateNestedManyWithoutGameModeInput
  }

  export type GameModeUncheckedCreateWithoutMapsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    MatchMap?: MatchMapUncheckedCreateNestedManyWithoutGameModeInput
  }

  export type GameModeCreateOrConnectWithoutMapsInput = {
    where: GameModeWhereUniqueInput
    create: XOR<GameModeCreateWithoutMapsInput, GameModeUncheckedCreateWithoutMapsInput>
  }

  export type MatchMapCreateWithoutMapInput = {
    id?: string
    mapNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    match: MatchCreateNestedOneWithoutMatchMapInput
    gameMode: GameModeCreateNestedOneWithoutMatchMapInput
    winner?: TeamCreateNestedOneWithoutMatchMapInput
    stats?: StatCreateNestedManyWithoutMatchMapInput
    MatchMapPlayerStat?: MatchMapPlayerStatCreateNestedManyWithoutMatchMapInput
  }

  export type MatchMapUncheckedCreateWithoutMapInput = {
    id?: string
    matchId: string
    gameModeId: number
    mapNumber: number
    winnerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: StatUncheckedCreateNestedManyWithoutMatchMapInput
    MatchMapPlayerStat?: MatchMapPlayerStatUncheckedCreateNestedManyWithoutMatchMapInput
  }

  export type MatchMapCreateOrConnectWithoutMapInput = {
    where: MatchMapWhereUniqueInput
    create: XOR<MatchMapCreateWithoutMapInput, MatchMapUncheckedCreateWithoutMapInput>
  }

  export type MatchMapCreateManyMapInputEnvelope = {
    data: MatchMapCreateManyMapInput | MatchMapCreateManyMapInput[]
    skipDuplicates?: boolean
  }

  export type GameModeUpsertWithoutMapsInput = {
    update: XOR<GameModeUpdateWithoutMapsInput, GameModeUncheckedUpdateWithoutMapsInput>
    create: XOR<GameModeCreateWithoutMapsInput, GameModeUncheckedCreateWithoutMapsInput>
    where?: GameModeWhereInput
  }

  export type GameModeUpdateToOneWithWhereWithoutMapsInput = {
    where?: GameModeWhereInput
    data: XOR<GameModeUpdateWithoutMapsInput, GameModeUncheckedUpdateWithoutMapsInput>
  }

  export type GameModeUpdateWithoutMapsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MatchMap?: MatchMapUpdateManyWithoutGameModeNestedInput
  }

  export type GameModeUncheckedUpdateWithoutMapsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MatchMap?: MatchMapUncheckedUpdateManyWithoutGameModeNestedInput
  }

  export type MatchMapUpsertWithWhereUniqueWithoutMapInput = {
    where: MatchMapWhereUniqueInput
    update: XOR<MatchMapUpdateWithoutMapInput, MatchMapUncheckedUpdateWithoutMapInput>
    create: XOR<MatchMapCreateWithoutMapInput, MatchMapUncheckedCreateWithoutMapInput>
  }

  export type MatchMapUpdateWithWhereUniqueWithoutMapInput = {
    where: MatchMapWhereUniqueInput
    data: XOR<MatchMapUpdateWithoutMapInput, MatchMapUncheckedUpdateWithoutMapInput>
  }

  export type MatchMapUpdateManyWithWhereWithoutMapInput = {
    where: MatchMapScalarWhereInput
    data: XOR<MatchMapUpdateManyMutationInput, MatchMapUncheckedUpdateManyWithoutMapInput>
  }

  export type MatchCreateWithoutMatchMapInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    event?: EventCreateNestedOneWithoutMatchesInput
    teamA: TeamCreateNestedOneWithoutTeamA_MatchesInput
    teamB: TeamCreateNestedOneWithoutTeamB_MatchesInput
    winner?: TeamCreateNestedOneWithoutMatchesWonInput
    stats?: StatCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutMatchMapInput = {
    id?: string
    eventId?: string | null
    teamAId: number
    teamBId: number
    winnerId?: number | null
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: StatUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutMatchMapInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutMatchMapInput, MatchUncheckedCreateWithoutMatchMapInput>
  }

  export type MapCreateWithoutMatchMapsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gameMode: GameModeCreateNestedOneWithoutMapsInput
  }

  export type MapUncheckedCreateWithoutMatchMapsInput = {
    id?: number
    name: string
    gameModeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MapCreateOrConnectWithoutMatchMapsInput = {
    where: MapWhereUniqueInput
    create: XOR<MapCreateWithoutMatchMapsInput, MapUncheckedCreateWithoutMatchMapsInput>
  }

  export type GameModeCreateWithoutMatchMapInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maps?: MapCreateNestedManyWithoutGameModeInput
  }

  export type GameModeUncheckedCreateWithoutMatchMapInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maps?: MapUncheckedCreateNestedManyWithoutGameModeInput
  }

  export type GameModeCreateOrConnectWithoutMatchMapInput = {
    where: GameModeWhereUniqueInput
    create: XOR<GameModeCreateWithoutMatchMapInput, GameModeUncheckedCreateWithoutMatchMapInput>
  }

  export type TeamCreateWithoutMatchMapInput = {
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    players?: PlayerCreateNestedManyWithoutTeamInput
    teamA_Matches?: MatchCreateNestedManyWithoutTeamAInput
    teamB_Matches?: MatchCreateNestedManyWithoutTeamBInput
    matchesWon?: MatchCreateNestedManyWithoutWinnerInput
    matchMapStats?: MatchMapPlayerStatCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutMatchMapInput = {
    id?: number
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    teamA_Matches?: MatchUncheckedCreateNestedManyWithoutTeamAInput
    teamB_Matches?: MatchUncheckedCreateNestedManyWithoutTeamBInput
    matchesWon?: MatchUncheckedCreateNestedManyWithoutWinnerInput
    matchMapStats?: MatchMapPlayerStatUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutMatchMapInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMatchMapInput, TeamUncheckedCreateWithoutMatchMapInput>
  }

  export type StatCreateWithoutMatchMapInput = {
    id?: string
    kills: number
    deaths: number
    assists: number
    damage: number
    objective: number
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
    player: PlayerCreateNestedOneWithoutStatsInput
    Match?: MatchCreateNestedOneWithoutStatsInput
  }

  export type StatUncheckedCreateWithoutMatchMapInput = {
    id?: string
    playerId: number
    kills: number
    deaths: number
    assists: number
    damage: number
    objective: number
    score: number
    matchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StatCreateOrConnectWithoutMatchMapInput = {
    where: StatWhereUniqueInput
    create: XOR<StatCreateWithoutMatchMapInput, StatUncheckedCreateWithoutMatchMapInput>
  }

  export type StatCreateManyMatchMapInputEnvelope = {
    data: StatCreateManyMatchMapInput | StatCreateManyMatchMapInput[]
    skipDuplicates?: boolean
  }

  export type MatchMapPlayerStatCreateWithoutMatchMapInput = {
    id?: string
    kills: number
    deaths: number
    assists: number
    damage: number
    objective: number
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
    player: PlayerCreateNestedOneWithoutMatchMapPlayerStatInput
    Team?: TeamCreateNestedOneWithoutMatchMapStatsInput
  }

  export type MatchMapPlayerStatUncheckedCreateWithoutMatchMapInput = {
    id?: string
    playerId: number
    kills: number
    deaths: number
    assists: number
    damage: number
    objective: number
    score: number
    teamId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchMapPlayerStatCreateOrConnectWithoutMatchMapInput = {
    where: MatchMapPlayerStatWhereUniqueInput
    create: XOR<MatchMapPlayerStatCreateWithoutMatchMapInput, MatchMapPlayerStatUncheckedCreateWithoutMatchMapInput>
  }

  export type MatchMapPlayerStatCreateManyMatchMapInputEnvelope = {
    data: MatchMapPlayerStatCreateManyMatchMapInput | MatchMapPlayerStatCreateManyMatchMapInput[]
    skipDuplicates?: boolean
  }

  export type MatchUpsertWithoutMatchMapInput = {
    update: XOR<MatchUpdateWithoutMatchMapInput, MatchUncheckedUpdateWithoutMatchMapInput>
    create: XOR<MatchCreateWithoutMatchMapInput, MatchUncheckedCreateWithoutMatchMapInput>
    where?: MatchWhereInput
  }

  export type MatchUpdateToOneWithWhereWithoutMatchMapInput = {
    where?: MatchWhereInput
    data: XOR<MatchUpdateWithoutMatchMapInput, MatchUncheckedUpdateWithoutMatchMapInput>
  }

  export type MatchUpdateWithoutMatchMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneWithoutMatchesNestedInput
    teamA?: TeamUpdateOneRequiredWithoutTeamA_MatchesNestedInput
    teamB?: TeamUpdateOneRequiredWithoutTeamB_MatchesNestedInput
    winner?: TeamUpdateOneWithoutMatchesWonNestedInput
    stats?: StatUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutMatchMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    teamAId?: IntFieldUpdateOperationsInput | number
    teamBId?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: StatUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MapUpsertWithoutMatchMapsInput = {
    update: XOR<MapUpdateWithoutMatchMapsInput, MapUncheckedUpdateWithoutMatchMapsInput>
    create: XOR<MapCreateWithoutMatchMapsInput, MapUncheckedCreateWithoutMatchMapsInput>
    where?: MapWhereInput
  }

  export type MapUpdateToOneWithWhereWithoutMatchMapsInput = {
    where?: MapWhereInput
    data: XOR<MapUpdateWithoutMatchMapsInput, MapUncheckedUpdateWithoutMatchMapsInput>
  }

  export type MapUpdateWithoutMatchMapsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameMode?: GameModeUpdateOneRequiredWithoutMapsNestedInput
  }

  export type MapUncheckedUpdateWithoutMatchMapsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gameModeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameModeUpsertWithoutMatchMapInput = {
    update: XOR<GameModeUpdateWithoutMatchMapInput, GameModeUncheckedUpdateWithoutMatchMapInput>
    create: XOR<GameModeCreateWithoutMatchMapInput, GameModeUncheckedCreateWithoutMatchMapInput>
    where?: GameModeWhereInput
  }

  export type GameModeUpdateToOneWithWhereWithoutMatchMapInput = {
    where?: GameModeWhereInput
    data: XOR<GameModeUpdateWithoutMatchMapInput, GameModeUncheckedUpdateWithoutMatchMapInput>
  }

  export type GameModeUpdateWithoutMatchMapInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maps?: MapUpdateManyWithoutGameModeNestedInput
  }

  export type GameModeUncheckedUpdateWithoutMatchMapInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maps?: MapUncheckedUpdateManyWithoutGameModeNestedInput
  }

  export type TeamUpsertWithoutMatchMapInput = {
    update: XOR<TeamUpdateWithoutMatchMapInput, TeamUncheckedUpdateWithoutMatchMapInput>
    create: XOR<TeamCreateWithoutMatchMapInput, TeamUncheckedCreateWithoutMatchMapInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutMatchMapInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutMatchMapInput, TeamUncheckedUpdateWithoutMatchMapInput>
  }

  export type TeamUpdateWithoutMatchMapInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    players?: PlayerUpdateManyWithoutTeamNestedInput
    teamA_Matches?: MatchUpdateManyWithoutTeamANestedInput
    teamB_Matches?: MatchUpdateManyWithoutTeamBNestedInput
    matchesWon?: MatchUpdateManyWithoutWinnerNestedInput
    matchMapStats?: MatchMapPlayerStatUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutMatchMapInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    teamA_Matches?: MatchUncheckedUpdateManyWithoutTeamANestedInput
    teamB_Matches?: MatchUncheckedUpdateManyWithoutTeamBNestedInput
    matchesWon?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
    matchMapStats?: MatchMapPlayerStatUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type StatUpsertWithWhereUniqueWithoutMatchMapInput = {
    where: StatWhereUniqueInput
    update: XOR<StatUpdateWithoutMatchMapInput, StatUncheckedUpdateWithoutMatchMapInput>
    create: XOR<StatCreateWithoutMatchMapInput, StatUncheckedCreateWithoutMatchMapInput>
  }

  export type StatUpdateWithWhereUniqueWithoutMatchMapInput = {
    where: StatWhereUniqueInput
    data: XOR<StatUpdateWithoutMatchMapInput, StatUncheckedUpdateWithoutMatchMapInput>
  }

  export type StatUpdateManyWithWhereWithoutMatchMapInput = {
    where: StatScalarWhereInput
    data: XOR<StatUpdateManyMutationInput, StatUncheckedUpdateManyWithoutMatchMapInput>
  }

  export type MatchMapPlayerStatUpsertWithWhereUniqueWithoutMatchMapInput = {
    where: MatchMapPlayerStatWhereUniqueInput
    update: XOR<MatchMapPlayerStatUpdateWithoutMatchMapInput, MatchMapPlayerStatUncheckedUpdateWithoutMatchMapInput>
    create: XOR<MatchMapPlayerStatCreateWithoutMatchMapInput, MatchMapPlayerStatUncheckedCreateWithoutMatchMapInput>
  }

  export type MatchMapPlayerStatUpdateWithWhereUniqueWithoutMatchMapInput = {
    where: MatchMapPlayerStatWhereUniqueInput
    data: XOR<MatchMapPlayerStatUpdateWithoutMatchMapInput, MatchMapPlayerStatUncheckedUpdateWithoutMatchMapInput>
  }

  export type MatchMapPlayerStatUpdateManyWithWhereWithoutMatchMapInput = {
    where: MatchMapPlayerStatScalarWhereInput
    data: XOR<MatchMapPlayerStatUpdateManyMutationInput, MatchMapPlayerStatUncheckedUpdateManyWithoutMatchMapInput>
  }

  export type MatchMapCreateWithoutMatchMapPlayerStatInput = {
    id?: string
    mapNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    match: MatchCreateNestedOneWithoutMatchMapInput
    map: MapCreateNestedOneWithoutMatchMapsInput
    gameMode: GameModeCreateNestedOneWithoutMatchMapInput
    winner?: TeamCreateNestedOneWithoutMatchMapInput
    stats?: StatCreateNestedManyWithoutMatchMapInput
  }

  export type MatchMapUncheckedCreateWithoutMatchMapPlayerStatInput = {
    id?: string
    matchId: string
    mapId: number
    gameModeId: number
    mapNumber: number
    winnerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: StatUncheckedCreateNestedManyWithoutMatchMapInput
  }

  export type MatchMapCreateOrConnectWithoutMatchMapPlayerStatInput = {
    where: MatchMapWhereUniqueInput
    create: XOR<MatchMapCreateWithoutMatchMapPlayerStatInput, MatchMapUncheckedCreateWithoutMatchMapPlayerStatInput>
  }

  export type PlayerCreateWithoutMatchMapPlayerStatInput = {
    firstName: string
    lastName: string
    gamertag: string
    playerImage?: string | null
    role: $Enums.PlayerRole
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    team?: TeamCreateNestedOneWithoutPlayersInput
    stats?: StatCreateNestedManyWithoutPlayerInput
    leaderboard?: LeaderboardCreateNestedOneWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutMatchMapPlayerStatInput = {
    id?: number
    firstName: string
    lastName: string
    gamertag: string
    playerImage?: string | null
    role: $Enums.PlayerRole
    teamId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    stats?: StatUncheckedCreateNestedManyWithoutPlayerInput
    leaderboard?: LeaderboardUncheckedCreateNestedOneWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutMatchMapPlayerStatInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutMatchMapPlayerStatInput, PlayerUncheckedCreateWithoutMatchMapPlayerStatInput>
  }

  export type TeamCreateWithoutMatchMapStatsInput = {
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    players?: PlayerCreateNestedManyWithoutTeamInput
    teamA_Matches?: MatchCreateNestedManyWithoutTeamAInput
    teamB_Matches?: MatchCreateNestedManyWithoutTeamBInput
    matchesWon?: MatchCreateNestedManyWithoutWinnerInput
    MatchMap?: MatchMapCreateNestedManyWithoutWinnerInput
  }

  export type TeamUncheckedCreateWithoutMatchMapStatsInput = {
    id?: number
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    teamA_Matches?: MatchUncheckedCreateNestedManyWithoutTeamAInput
    teamB_Matches?: MatchUncheckedCreateNestedManyWithoutTeamBInput
    matchesWon?: MatchUncheckedCreateNestedManyWithoutWinnerInput
    MatchMap?: MatchMapUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type TeamCreateOrConnectWithoutMatchMapStatsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMatchMapStatsInput, TeamUncheckedCreateWithoutMatchMapStatsInput>
  }

  export type MatchMapUpsertWithoutMatchMapPlayerStatInput = {
    update: XOR<MatchMapUpdateWithoutMatchMapPlayerStatInput, MatchMapUncheckedUpdateWithoutMatchMapPlayerStatInput>
    create: XOR<MatchMapCreateWithoutMatchMapPlayerStatInput, MatchMapUncheckedCreateWithoutMatchMapPlayerStatInput>
    where?: MatchMapWhereInput
  }

  export type MatchMapUpdateToOneWithWhereWithoutMatchMapPlayerStatInput = {
    where?: MatchMapWhereInput
    data: XOR<MatchMapUpdateWithoutMatchMapPlayerStatInput, MatchMapUncheckedUpdateWithoutMatchMapPlayerStatInput>
  }

  export type MatchMapUpdateWithoutMatchMapPlayerStatInput = {
    id?: StringFieldUpdateOperationsInput | string
    mapNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutMatchMapNestedInput
    map?: MapUpdateOneRequiredWithoutMatchMapsNestedInput
    gameMode?: GameModeUpdateOneRequiredWithoutMatchMapNestedInput
    winner?: TeamUpdateOneWithoutMatchMapNestedInput
    stats?: StatUpdateManyWithoutMatchMapNestedInput
  }

  export type MatchMapUncheckedUpdateWithoutMatchMapPlayerStatInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    mapId?: IntFieldUpdateOperationsInput | number
    gameModeId?: IntFieldUpdateOperationsInput | number
    mapNumber?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: StatUncheckedUpdateManyWithoutMatchMapNestedInput
  }

  export type PlayerUpsertWithoutMatchMapPlayerStatInput = {
    update: XOR<PlayerUpdateWithoutMatchMapPlayerStatInput, PlayerUncheckedUpdateWithoutMatchMapPlayerStatInput>
    create: XOR<PlayerCreateWithoutMatchMapPlayerStatInput, PlayerUncheckedCreateWithoutMatchMapPlayerStatInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutMatchMapPlayerStatInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutMatchMapPlayerStatInput, PlayerUncheckedUpdateWithoutMatchMapPlayerStatInput>
  }

  export type PlayerUpdateWithoutMatchMapPlayerStatInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    playerImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumPlayerRoleFieldUpdateOperationsInput | $Enums.PlayerRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: TeamUpdateOneWithoutPlayersNestedInput
    stats?: StatUpdateManyWithoutPlayerNestedInput
    leaderboard?: LeaderboardUpdateOneWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutMatchMapPlayerStatInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    playerImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumPlayerRoleFieldUpdateOperationsInput | $Enums.PlayerRole
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stats?: StatUncheckedUpdateManyWithoutPlayerNestedInput
    leaderboard?: LeaderboardUncheckedUpdateOneWithoutPlayerNestedInput
  }

  export type TeamUpsertWithoutMatchMapStatsInput = {
    update: XOR<TeamUpdateWithoutMatchMapStatsInput, TeamUncheckedUpdateWithoutMatchMapStatsInput>
    create: XOR<TeamCreateWithoutMatchMapStatsInput, TeamUncheckedCreateWithoutMatchMapStatsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutMatchMapStatsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutMatchMapStatsInput, TeamUncheckedUpdateWithoutMatchMapStatsInput>
  }

  export type TeamUpdateWithoutMatchMapStatsInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    players?: PlayerUpdateManyWithoutTeamNestedInput
    teamA_Matches?: MatchUpdateManyWithoutTeamANestedInput
    teamB_Matches?: MatchUpdateManyWithoutTeamBNestedInput
    matchesWon?: MatchUpdateManyWithoutWinnerNestedInput
    MatchMap?: MatchMapUpdateManyWithoutWinnerNestedInput
  }

  export type TeamUncheckedUpdateWithoutMatchMapStatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    teamA_Matches?: MatchUncheckedUpdateManyWithoutTeamANestedInput
    teamB_Matches?: MatchUncheckedUpdateManyWithoutTeamBNestedInput
    matchesWon?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
    MatchMap?: MatchMapUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type StatCreateManyPlayerInput = {
    id?: string
    matchMapId: string
    kills: number
    deaths: number
    assists: number
    damage: number
    objective: number
    score: number
    matchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchMapPlayerStatCreateManyPlayerInput = {
    id?: string
    matchMapId: string
    kills: number
    deaths: number
    assists: number
    damage: number
    objective: number
    score: number
    teamId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StatUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    damage?: IntFieldUpdateOperationsInput | number
    objective?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchMap?: MatchMapUpdateOneRequiredWithoutStatsNestedInput
    Match?: MatchUpdateOneWithoutStatsNestedInput
  }

  export type StatUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchMapId?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    damage?: IntFieldUpdateOperationsInput | number
    objective?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    matchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatUncheckedUpdateManyWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchMapId?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    damage?: IntFieldUpdateOperationsInput | number
    objective?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    matchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchMapPlayerStatUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    damage?: IntFieldUpdateOperationsInput | number
    objective?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchMap?: MatchMapUpdateOneRequiredWithoutMatchMapPlayerStatNestedInput
    Team?: TeamUpdateOneWithoutMatchMapStatsNestedInput
  }

  export type MatchMapPlayerStatUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchMapId?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    damage?: IntFieldUpdateOperationsInput | number
    objective?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchMapPlayerStatUncheckedUpdateManyWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchMapId?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    damage?: IntFieldUpdateOperationsInput | number
    objective?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerCreateManyTeamInput = {
    id?: number
    firstName: string
    lastName: string
    gamertag: string
    playerImage?: string | null
    role: $Enums.PlayerRole
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type MatchCreateManyTeamAInput = {
    id?: string
    eventId?: string | null
    teamBId: number
    winnerId?: number | null
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateManyTeamBInput = {
    id?: string
    eventId?: string | null
    teamAId: number
    winnerId?: number | null
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateManyWinnerInput = {
    id?: string
    eventId?: string | null
    teamAId: number
    teamBId: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchMapCreateManyWinnerInput = {
    id?: string
    matchId: string
    mapId: number
    gameModeId: number
    mapNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchMapPlayerStatCreateManyTeamInput = {
    id?: string
    matchMapId: string
    playerId: number
    kills: number
    deaths: number
    assists: number
    damage: number
    objective: number
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerUpdateWithoutTeamInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    playerImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumPlayerRoleFieldUpdateOperationsInput | $Enums.PlayerRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stats?: StatUpdateManyWithoutPlayerNestedInput
    leaderboard?: LeaderboardUpdateOneWithoutPlayerNestedInput
    MatchMapPlayerStat?: MatchMapPlayerStatUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    playerImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumPlayerRoleFieldUpdateOperationsInput | $Enums.PlayerRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stats?: StatUncheckedUpdateManyWithoutPlayerNestedInput
    leaderboard?: LeaderboardUncheckedUpdateOneWithoutPlayerNestedInput
    MatchMapPlayerStat?: MatchMapPlayerStatUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    playerImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumPlayerRoleFieldUpdateOperationsInput | $Enums.PlayerRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatchUpdateWithoutTeamAInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneWithoutMatchesNestedInput
    teamB?: TeamUpdateOneRequiredWithoutTeamB_MatchesNestedInput
    winner?: TeamUpdateOneWithoutMatchesWonNestedInput
    stats?: StatUpdateManyWithoutMatchNestedInput
    MatchMap?: MatchMapUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutTeamAInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    teamBId?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: StatUncheckedUpdateManyWithoutMatchNestedInput
    MatchMap?: MatchMapUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutTeamAInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    teamBId?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutTeamBInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneWithoutMatchesNestedInput
    teamA?: TeamUpdateOneRequiredWithoutTeamA_MatchesNestedInput
    winner?: TeamUpdateOneWithoutMatchesWonNestedInput
    stats?: StatUpdateManyWithoutMatchNestedInput
    MatchMap?: MatchMapUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutTeamBInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    teamAId?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: StatUncheckedUpdateManyWithoutMatchNestedInput
    MatchMap?: MatchMapUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutTeamBInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    teamAId?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneWithoutMatchesNestedInput
    teamA?: TeamUpdateOneRequiredWithoutTeamA_MatchesNestedInput
    teamB?: TeamUpdateOneRequiredWithoutTeamB_MatchesNestedInput
    stats?: StatUpdateManyWithoutMatchNestedInput
    MatchMap?: MatchMapUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    teamAId?: IntFieldUpdateOperationsInput | number
    teamBId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: StatUncheckedUpdateManyWithoutMatchNestedInput
    MatchMap?: MatchMapUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    teamAId?: IntFieldUpdateOperationsInput | number
    teamBId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchMapUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    mapNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutMatchMapNestedInput
    map?: MapUpdateOneRequiredWithoutMatchMapsNestedInput
    gameMode?: GameModeUpdateOneRequiredWithoutMatchMapNestedInput
    stats?: StatUpdateManyWithoutMatchMapNestedInput
    MatchMapPlayerStat?: MatchMapPlayerStatUpdateManyWithoutMatchMapNestedInput
  }

  export type MatchMapUncheckedUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    mapId?: IntFieldUpdateOperationsInput | number
    gameModeId?: IntFieldUpdateOperationsInput | number
    mapNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: StatUncheckedUpdateManyWithoutMatchMapNestedInput
    MatchMapPlayerStat?: MatchMapPlayerStatUncheckedUpdateManyWithoutMatchMapNestedInput
  }

  export type MatchMapUncheckedUpdateManyWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    mapId?: IntFieldUpdateOperationsInput | number
    gameModeId?: IntFieldUpdateOperationsInput | number
    mapNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchMapPlayerStatUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    damage?: IntFieldUpdateOperationsInput | number
    objective?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchMap?: MatchMapUpdateOneRequiredWithoutMatchMapPlayerStatNestedInput
    player?: PlayerUpdateOneRequiredWithoutMatchMapPlayerStatNestedInput
  }

  export type MatchMapPlayerStatUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchMapId?: StringFieldUpdateOperationsInput | string
    playerId?: IntFieldUpdateOperationsInput | number
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    damage?: IntFieldUpdateOperationsInput | number
    objective?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchMapPlayerStatUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchMapId?: StringFieldUpdateOperationsInput | string
    playerId?: IntFieldUpdateOperationsInput | number
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    damage?: IntFieldUpdateOperationsInput | number
    objective?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatCreateManyMatchInput = {
    id?: string
    playerId: number
    matchMapId: string
    kills: number
    deaths: number
    assists: number
    damage: number
    objective: number
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchMapCreateManyMatchInput = {
    id?: string
    mapId: number
    gameModeId: number
    mapNumber: number
    winnerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StatUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    damage?: IntFieldUpdateOperationsInput | number
    objective?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutStatsNestedInput
    matchMap?: MatchMapUpdateOneRequiredWithoutStatsNestedInput
  }

  export type StatUncheckedUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: IntFieldUpdateOperationsInput | number
    matchMapId?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    damage?: IntFieldUpdateOperationsInput | number
    objective?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatUncheckedUpdateManyWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: IntFieldUpdateOperationsInput | number
    matchMapId?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    damage?: IntFieldUpdateOperationsInput | number
    objective?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchMapUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    mapNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    map?: MapUpdateOneRequiredWithoutMatchMapsNestedInput
    gameMode?: GameModeUpdateOneRequiredWithoutMatchMapNestedInput
    winner?: TeamUpdateOneWithoutMatchMapNestedInput
    stats?: StatUpdateManyWithoutMatchMapNestedInput
    MatchMapPlayerStat?: MatchMapPlayerStatUpdateManyWithoutMatchMapNestedInput
  }

  export type MatchMapUncheckedUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    mapId?: IntFieldUpdateOperationsInput | number
    gameModeId?: IntFieldUpdateOperationsInput | number
    mapNumber?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: StatUncheckedUpdateManyWithoutMatchMapNestedInput
    MatchMapPlayerStat?: MatchMapPlayerStatUncheckedUpdateManyWithoutMatchMapNestedInput
  }

  export type MatchMapUncheckedUpdateManyWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    mapId?: IntFieldUpdateOperationsInput | number
    gameModeId?: IntFieldUpdateOperationsInput | number
    mapNumber?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateManyEventInput = {
    id?: string
    teamAId: number
    teamBId: number
    winnerId?: number | null
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamA?: TeamUpdateOneRequiredWithoutTeamA_MatchesNestedInput
    teamB?: TeamUpdateOneRequiredWithoutTeamB_MatchesNestedInput
    winner?: TeamUpdateOneWithoutMatchesWonNestedInput
    stats?: StatUpdateManyWithoutMatchNestedInput
    MatchMap?: MatchMapUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamAId?: IntFieldUpdateOperationsInput | number
    teamBId?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: StatUncheckedUpdateManyWithoutMatchNestedInput
    MatchMap?: MatchMapUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamAId?: IntFieldUpdateOperationsInput | number
    teamBId?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapCreateManyGameModeInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchMapCreateManyGameModeInput = {
    id?: string
    matchId: string
    mapId: number
    mapNumber: number
    winnerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MapUpdateWithoutGameModeInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchMaps?: MatchMapUpdateManyWithoutMapNestedInput
  }

  export type MapUncheckedUpdateWithoutGameModeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchMaps?: MatchMapUncheckedUpdateManyWithoutMapNestedInput
  }

  export type MapUncheckedUpdateManyWithoutGameModeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchMapUpdateWithoutGameModeInput = {
    id?: StringFieldUpdateOperationsInput | string
    mapNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutMatchMapNestedInput
    map?: MapUpdateOneRequiredWithoutMatchMapsNestedInput
    winner?: TeamUpdateOneWithoutMatchMapNestedInput
    stats?: StatUpdateManyWithoutMatchMapNestedInput
    MatchMapPlayerStat?: MatchMapPlayerStatUpdateManyWithoutMatchMapNestedInput
  }

  export type MatchMapUncheckedUpdateWithoutGameModeInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    mapId?: IntFieldUpdateOperationsInput | number
    mapNumber?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: StatUncheckedUpdateManyWithoutMatchMapNestedInput
    MatchMapPlayerStat?: MatchMapPlayerStatUncheckedUpdateManyWithoutMatchMapNestedInput
  }

  export type MatchMapUncheckedUpdateManyWithoutGameModeInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    mapId?: IntFieldUpdateOperationsInput | number
    mapNumber?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchMapCreateManyMapInput = {
    id?: string
    matchId: string
    gameModeId: number
    mapNumber: number
    winnerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchMapUpdateWithoutMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    mapNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutMatchMapNestedInput
    gameMode?: GameModeUpdateOneRequiredWithoutMatchMapNestedInput
    winner?: TeamUpdateOneWithoutMatchMapNestedInput
    stats?: StatUpdateManyWithoutMatchMapNestedInput
    MatchMapPlayerStat?: MatchMapPlayerStatUpdateManyWithoutMatchMapNestedInput
  }

  export type MatchMapUncheckedUpdateWithoutMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    gameModeId?: IntFieldUpdateOperationsInput | number
    mapNumber?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: StatUncheckedUpdateManyWithoutMatchMapNestedInput
    MatchMapPlayerStat?: MatchMapPlayerStatUncheckedUpdateManyWithoutMatchMapNestedInput
  }

  export type MatchMapUncheckedUpdateManyWithoutMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    gameModeId?: IntFieldUpdateOperationsInput | number
    mapNumber?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatCreateManyMatchMapInput = {
    id?: string
    playerId: number
    kills: number
    deaths: number
    assists: number
    damage: number
    objective: number
    score: number
    matchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchMapPlayerStatCreateManyMatchMapInput = {
    id?: string
    playerId: number
    kills: number
    deaths: number
    assists: number
    damage: number
    objective: number
    score: number
    teamId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StatUpdateWithoutMatchMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    damage?: IntFieldUpdateOperationsInput | number
    objective?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutStatsNestedInput
    Match?: MatchUpdateOneWithoutStatsNestedInput
  }

  export type StatUncheckedUpdateWithoutMatchMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: IntFieldUpdateOperationsInput | number
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    damage?: IntFieldUpdateOperationsInput | number
    objective?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    matchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatUncheckedUpdateManyWithoutMatchMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: IntFieldUpdateOperationsInput | number
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    damage?: IntFieldUpdateOperationsInput | number
    objective?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    matchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchMapPlayerStatUpdateWithoutMatchMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    damage?: IntFieldUpdateOperationsInput | number
    objective?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutMatchMapPlayerStatNestedInput
    Team?: TeamUpdateOneWithoutMatchMapStatsNestedInput
  }

  export type MatchMapPlayerStatUncheckedUpdateWithoutMatchMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: IntFieldUpdateOperationsInput | number
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    damage?: IntFieldUpdateOperationsInput | number
    objective?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchMapPlayerStatUncheckedUpdateManyWithoutMatchMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: IntFieldUpdateOperationsInput | number
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    damage?: IntFieldUpdateOperationsInput | number
    objective?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
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