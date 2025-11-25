
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
 * Model usuario
 * 
 */
export type usuario = $Result.DefaultSelection<Prisma.$usuarioPayload>
/**
 * Model mindcard
 * 
 */
export type mindcard = $Result.DefaultSelection<Prisma.$mindcardPayload>
/**
 * Model card
 * 
 */
export type card = $Result.DefaultSelection<Prisma.$cardPayload>
/**
 * Model opcao_resposta
 * 
 */
export type opcao_resposta = $Result.DefaultSelection<Prisma.$opcao_respostaPayload>
/**
 * Model pratica
 * 
 */
export type pratica = $Result.DefaultSelection<Prisma.$praticaPayload>
/**
 * Model faculdade
 * 
 */
export type faculdade = $Result.DefaultSelection<Prisma.$faculdadePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const tipo_card: {
  ABERTA: 'ABERTA',
  MULTIPLA_ESCOLHA: 'MULTIPLA_ESCOLHA',
  ALTERNATIVA: 'ALTERNATIVA'
};

export type tipo_card = (typeof tipo_card)[keyof typeof tipo_card]


export const dificuldade: {
  FACIL: 'FACIL',
  MEDIO: 'MEDIO',
  DIFICIL: 'DIFICIL'
};

export type dificuldade = (typeof dificuldade)[keyof typeof dificuldade]


export const StatusProcessamento: {
  PENDENTE: 'PENDENTE',
  PROCESSANDO: 'PROCESSANDO',
  CONCLUIDO: 'CONCLUIDO',
  FALHOU: 'FALHOU'
};

export type StatusProcessamento = (typeof StatusProcessamento)[keyof typeof StatusProcessamento]


export const CategoriaIES: {
  PRIVADA: 'PRIVADA',
  PUBLICA: 'PUBLICA'
};

export type CategoriaIES = (typeof CategoriaIES)[keyof typeof CategoriaIES]


export const SituacaoIES: {
  ATIVA: 'ATIVA',
  INATIVA: 'INATIVA'
};

export type SituacaoIES = (typeof SituacaoIES)[keyof typeof SituacaoIES]

}

export type tipo_card = $Enums.tipo_card

export const tipo_card: typeof $Enums.tipo_card

export type dificuldade = $Enums.dificuldade

export const dificuldade: typeof $Enums.dificuldade

export type StatusProcessamento = $Enums.StatusProcessamento

export const StatusProcessamento: typeof $Enums.StatusProcessamento

export type CategoriaIES = $Enums.CategoriaIES

export const CategoriaIES: typeof $Enums.CategoriaIES

export type SituacaoIES = $Enums.SituacaoIES

export const SituacaoIES: typeof $Enums.SituacaoIES

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.usuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mindcard`: Exposes CRUD operations for the **mindcard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mindcards
    * const mindcards = await prisma.mindcard.findMany()
    * ```
    */
  get mindcard(): Prisma.mindcardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.card`: Exposes CRUD operations for the **card** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cards
    * const cards = await prisma.card.findMany()
    * ```
    */
  get card(): Prisma.cardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.opcao_resposta`: Exposes CRUD operations for the **opcao_resposta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Opcao_respostas
    * const opcao_respostas = await prisma.opcao_resposta.findMany()
    * ```
    */
  get opcao_resposta(): Prisma.opcao_respostaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pratica`: Exposes CRUD operations for the **pratica** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Praticas
    * const praticas = await prisma.pratica.findMany()
    * ```
    */
  get pratica(): Prisma.praticaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.faculdade`: Exposes CRUD operations for the **faculdade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Faculdades
    * const faculdades = await prisma.faculdade.findMany()
    * ```
    */
  get faculdade(): Prisma.faculdadeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    usuario: 'usuario',
    mindcard: 'mindcard',
    card: 'card',
    opcao_resposta: 'opcao_resposta',
    pratica: 'pratica',
    faculdade: 'faculdade'
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
      modelProps: "usuario" | "mindcard" | "card" | "opcao_resposta" | "pratica" | "faculdade"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      usuario: {
        payload: Prisma.$usuarioPayload<ExtArgs>
        fields: Prisma.usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findFirst: {
            args: Prisma.usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findMany: {
            args: Prisma.usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          create: {
            args: Prisma.usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          createMany: {
            args: Prisma.usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          delete: {
            args: Prisma.usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          update: {
            args: Prisma.usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          deleteMany: {
            args: Prisma.usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          upsert: {
            args: Prisma.usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      mindcard: {
        payload: Prisma.$mindcardPayload<ExtArgs>
        fields: Prisma.mindcardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mindcardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mindcardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mindcardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mindcardPayload>
          }
          findFirst: {
            args: Prisma.mindcardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mindcardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mindcardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mindcardPayload>
          }
          findMany: {
            args: Prisma.mindcardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mindcardPayload>[]
          }
          create: {
            args: Prisma.mindcardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mindcardPayload>
          }
          createMany: {
            args: Prisma.mindcardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mindcardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mindcardPayload>[]
          }
          delete: {
            args: Prisma.mindcardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mindcardPayload>
          }
          update: {
            args: Prisma.mindcardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mindcardPayload>
          }
          deleteMany: {
            args: Prisma.mindcardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mindcardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mindcardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mindcardPayload>[]
          }
          upsert: {
            args: Prisma.mindcardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mindcardPayload>
          }
          aggregate: {
            args: Prisma.MindcardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMindcard>
          }
          groupBy: {
            args: Prisma.mindcardGroupByArgs<ExtArgs>
            result: $Utils.Optional<MindcardGroupByOutputType>[]
          }
          count: {
            args: Prisma.mindcardCountArgs<ExtArgs>
            result: $Utils.Optional<MindcardCountAggregateOutputType> | number
          }
        }
      }
      card: {
        payload: Prisma.$cardPayload<ExtArgs>
        fields: Prisma.cardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardPayload>
          }
          findFirst: {
            args: Prisma.cardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardPayload>
          }
          findMany: {
            args: Prisma.cardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardPayload>[]
          }
          create: {
            args: Prisma.cardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardPayload>
          }
          createMany: {
            args: Prisma.cardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardPayload>[]
          }
          delete: {
            args: Prisma.cardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardPayload>
          }
          update: {
            args: Prisma.cardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardPayload>
          }
          deleteMany: {
            args: Prisma.cardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardPayload>[]
          }
          upsert: {
            args: Prisma.cardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cardPayload>
          }
          aggregate: {
            args: Prisma.CardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCard>
          }
          groupBy: {
            args: Prisma.cardGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardGroupByOutputType>[]
          }
          count: {
            args: Prisma.cardCountArgs<ExtArgs>
            result: $Utils.Optional<CardCountAggregateOutputType> | number
          }
        }
      }
      opcao_resposta: {
        payload: Prisma.$opcao_respostaPayload<ExtArgs>
        fields: Prisma.opcao_respostaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.opcao_respostaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opcao_respostaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.opcao_respostaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opcao_respostaPayload>
          }
          findFirst: {
            args: Prisma.opcao_respostaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opcao_respostaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.opcao_respostaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opcao_respostaPayload>
          }
          findMany: {
            args: Prisma.opcao_respostaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opcao_respostaPayload>[]
          }
          create: {
            args: Prisma.opcao_respostaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opcao_respostaPayload>
          }
          createMany: {
            args: Prisma.opcao_respostaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.opcao_respostaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opcao_respostaPayload>[]
          }
          delete: {
            args: Prisma.opcao_respostaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opcao_respostaPayload>
          }
          update: {
            args: Prisma.opcao_respostaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opcao_respostaPayload>
          }
          deleteMany: {
            args: Prisma.opcao_respostaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.opcao_respostaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.opcao_respostaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opcao_respostaPayload>[]
          }
          upsert: {
            args: Prisma.opcao_respostaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$opcao_respostaPayload>
          }
          aggregate: {
            args: Prisma.Opcao_respostaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpcao_resposta>
          }
          groupBy: {
            args: Prisma.opcao_respostaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Opcao_respostaGroupByOutputType>[]
          }
          count: {
            args: Prisma.opcao_respostaCountArgs<ExtArgs>
            result: $Utils.Optional<Opcao_respostaCountAggregateOutputType> | number
          }
        }
      }
      pratica: {
        payload: Prisma.$praticaPayload<ExtArgs>
        fields: Prisma.praticaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.praticaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$praticaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.praticaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$praticaPayload>
          }
          findFirst: {
            args: Prisma.praticaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$praticaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.praticaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$praticaPayload>
          }
          findMany: {
            args: Prisma.praticaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$praticaPayload>[]
          }
          create: {
            args: Prisma.praticaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$praticaPayload>
          }
          createMany: {
            args: Prisma.praticaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.praticaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$praticaPayload>[]
          }
          delete: {
            args: Prisma.praticaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$praticaPayload>
          }
          update: {
            args: Prisma.praticaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$praticaPayload>
          }
          deleteMany: {
            args: Prisma.praticaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.praticaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.praticaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$praticaPayload>[]
          }
          upsert: {
            args: Prisma.praticaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$praticaPayload>
          }
          aggregate: {
            args: Prisma.PraticaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePratica>
          }
          groupBy: {
            args: Prisma.praticaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PraticaGroupByOutputType>[]
          }
          count: {
            args: Prisma.praticaCountArgs<ExtArgs>
            result: $Utils.Optional<PraticaCountAggregateOutputType> | number
          }
        }
      }
      faculdade: {
        payload: Prisma.$faculdadePayload<ExtArgs>
        fields: Prisma.faculdadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.faculdadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faculdadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.faculdadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faculdadePayload>
          }
          findFirst: {
            args: Prisma.faculdadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faculdadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.faculdadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faculdadePayload>
          }
          findMany: {
            args: Prisma.faculdadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faculdadePayload>[]
          }
          create: {
            args: Prisma.faculdadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faculdadePayload>
          }
          createMany: {
            args: Prisma.faculdadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.faculdadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faculdadePayload>[]
          }
          delete: {
            args: Prisma.faculdadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faculdadePayload>
          }
          update: {
            args: Prisma.faculdadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faculdadePayload>
          }
          deleteMany: {
            args: Prisma.faculdadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.faculdadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.faculdadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faculdadePayload>[]
          }
          upsert: {
            args: Prisma.faculdadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faculdadePayload>
          }
          aggregate: {
            args: Prisma.FaculdadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFaculdade>
          }
          groupBy: {
            args: Prisma.faculdadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<FaculdadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.faculdadeCountArgs<ExtArgs>
            result: $Utils.Optional<FaculdadeCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    usuario?: usuarioOmit
    mindcard?: mindcardOmit
    card?: cardOmit
    opcao_resposta?: opcao_respostaOmit
    pratica?: praticaOmit
    faculdade?: faculdadeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    mindcards: number
    praticas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mindcards?: boolean | UsuarioCountOutputTypeCountMindcardsArgs
    praticas?: boolean | UsuarioCountOutputTypeCountPraticasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountMindcardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mindcardWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPraticasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: praticaWhereInput
  }


  /**
   * Count Type MindcardCountOutputType
   */

  export type MindcardCountOutputType = {
    cards: number
    praticas: number
  }

  export type MindcardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cards?: boolean | MindcardCountOutputTypeCountCardsArgs
    praticas?: boolean | MindcardCountOutputTypeCountPraticasArgs
  }

  // Custom InputTypes
  /**
   * MindcardCountOutputType without action
   */
  export type MindcardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MindcardCountOutputType
     */
    select?: MindcardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MindcardCountOutputType without action
   */
  export type MindcardCountOutputTypeCountCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cardWhereInput
  }

  /**
   * MindcardCountOutputType without action
   */
  export type MindcardCountOutputTypeCountPraticasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: praticaWhereInput
  }


  /**
   * Count Type CardCountOutputType
   */

  export type CardCountOutputType = {
    opcoes: number
  }

  export type CardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opcoes?: boolean | CardCountOutputTypeCountOpcoesArgs
  }

  // Custom InputTypes
  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardCountOutputType
     */
    select?: CardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeCountOpcoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: opcao_respostaWhereInput
  }


  /**
   * Count Type FaculdadeCountOutputType
   */

  export type FaculdadeCountOutputType = {
    usuarios: number
  }

  export type FaculdadeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | FaculdadeCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * FaculdadeCountOutputType without action
   */
  export type FaculdadeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaculdadeCountOutputType
     */
    select?: FaculdadeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FaculdadeCountOutputType without action
   */
  export type FaculdadeCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    xp_total: number | null
    sequencia_atual: number | null
    sequencia_recorde: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    xp_total: number | null
    sequencia_atual: number | null
    sequencia_recorde: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    nome: string | null
    usuario: string | null
    email: string | null
    senha: string | null
    faculdade_id: string | null
    idioma: string | null
    data_registro: Date | null
    xp_total: number | null
    sequencia_atual: number | null
    sequencia_recorde: number | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    usuario: string | null
    email: string | null
    senha: string | null
    faculdade_id: string | null
    idioma: string | null
    data_registro: Date | null
    xp_total: number | null
    sequencia_atual: number | null
    sequencia_recorde: number | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    usuario: number
    email: number
    senha: number
    faculdade_id: number
    idioma: number
    data_registro: number
    xp_total: number
    sequencia_atual: number
    sequencia_recorde: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    xp_total?: true
    sequencia_atual?: true
    sequencia_recorde?: true
  }

  export type UsuarioSumAggregateInputType = {
    xp_total?: true
    sequencia_atual?: true
    sequencia_recorde?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    usuario?: true
    email?: true
    senha?: true
    faculdade_id?: true
    idioma?: true
    data_registro?: true
    xp_total?: true
    sequencia_atual?: true
    sequencia_recorde?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    usuario?: true
    email?: true
    senha?: true
    faculdade_id?: true
    idioma?: true
    data_registro?: true
    xp_total?: true
    sequencia_atual?: true
    sequencia_recorde?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    usuario?: true
    email?: true
    senha?: true
    faculdade_id?: true
    idioma?: true
    data_registro?: true
    xp_total?: true
    sequencia_atual?: true
    sequencia_recorde?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithAggregationInput | usuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    nome: string
    usuario: string
    email: string
    senha: string
    faculdade_id: string | null
    idioma: string
    data_registro: Date
    xp_total: number
    sequencia_atual: number
    sequencia_recorde: number
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    usuario?: boolean
    email?: boolean
    senha?: boolean
    faculdade_id?: boolean
    idioma?: boolean
    data_registro?: boolean
    xp_total?: boolean
    sequencia_atual?: boolean
    sequencia_recorde?: boolean
    faculdade?: boolean | usuario$faculdadeArgs<ExtArgs>
    mindcards?: boolean | usuario$mindcardsArgs<ExtArgs>
    praticas?: boolean | usuario$praticasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    usuario?: boolean
    email?: boolean
    senha?: boolean
    faculdade_id?: boolean
    idioma?: boolean
    data_registro?: boolean
    xp_total?: boolean
    sequencia_atual?: boolean
    sequencia_recorde?: boolean
    faculdade?: boolean | usuario$faculdadeArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    usuario?: boolean
    email?: boolean
    senha?: boolean
    faculdade_id?: boolean
    idioma?: boolean
    data_registro?: boolean
    xp_total?: boolean
    sequencia_atual?: boolean
    sequencia_recorde?: boolean
    faculdade?: boolean | usuario$faculdadeArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    usuario?: boolean
    email?: boolean
    senha?: boolean
    faculdade_id?: boolean
    idioma?: boolean
    data_registro?: boolean
    xp_total?: boolean
    sequencia_atual?: boolean
    sequencia_recorde?: boolean
  }

  export type usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "usuario" | "email" | "senha" | "faculdade_id" | "idioma" | "data_registro" | "xp_total" | "sequencia_atual" | "sequencia_recorde", ExtArgs["result"]["usuario"]>
  export type usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculdade?: boolean | usuario$faculdadeArgs<ExtArgs>
    mindcards?: boolean | usuario$mindcardsArgs<ExtArgs>
    praticas?: boolean | usuario$praticasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculdade?: boolean | usuario$faculdadeArgs<ExtArgs>
  }
  export type usuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculdade?: boolean | usuario$faculdadeArgs<ExtArgs>
  }

  export type $usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario"
    objects: {
      faculdade: Prisma.$faculdadePayload<ExtArgs> | null
      mindcards: Prisma.$mindcardPayload<ExtArgs>[]
      praticas: Prisma.$praticaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      usuario: string
      email: string
      senha: string
      faculdade_id: string | null
      idioma: string
      data_registro: Date
      xp_total: number
      sequencia_atual: number
      sequencia_recorde: number
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = $Result.GetResult<Prisma.$usuarioPayload, S>

  type usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario'], meta: { name: 'usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioFindUniqueArgs>(args: SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioFindFirstArgs>(args?: SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuarioFindManyArgs>(args?: SelectSubset<T, usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends usuarioCreateArgs>(args: SelectSubset<T, usuarioCreateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarioCreateManyArgs>(args?: SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, usuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends usuarioDeleteArgs>(args: SelectSubset<T, usuarioDeleteArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarioUpdateArgs>(args: SelectSubset<T, usuarioUpdateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarioDeleteManyArgs>(args?: SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarioUpdateManyArgs>(args: SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends usuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, usuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends usuarioUpsertArgs>(args: SelectSubset<T, usuarioUpsertArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(
      args?: Subset<T, usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioGroupByArgs} args - Group by arguments.
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
      T extends usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioGroupByArgs['orderBy'] }
        : { orderBy?: usuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario model
   */
  readonly fields: usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    faculdade<T extends usuario$faculdadeArgs<ExtArgs> = {}>(args?: Subset<T, usuario$faculdadeArgs<ExtArgs>>): Prisma__faculdadeClient<$Result.GetResult<Prisma.$faculdadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mindcards<T extends usuario$mindcardsArgs<ExtArgs> = {}>(args?: Subset<T, usuario$mindcardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mindcardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    praticas<T extends usuario$praticasArgs<ExtArgs> = {}>(args?: Subset<T, usuario$praticasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$praticaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the usuario model
   */
  interface usuarioFieldRefs {
    readonly id: FieldRef<"usuario", 'String'>
    readonly nome: FieldRef<"usuario", 'String'>
    readonly usuario: FieldRef<"usuario", 'String'>
    readonly email: FieldRef<"usuario", 'String'>
    readonly senha: FieldRef<"usuario", 'String'>
    readonly faculdade_id: FieldRef<"usuario", 'String'>
    readonly idioma: FieldRef<"usuario", 'String'>
    readonly data_registro: FieldRef<"usuario", 'DateTime'>
    readonly xp_total: FieldRef<"usuario", 'Int'>
    readonly sequencia_atual: FieldRef<"usuario", 'Int'>
    readonly sequencia_recorde: FieldRef<"usuario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * usuario findUnique
   */
  export type usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findUniqueOrThrow
   */
  export type usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findFirst
   */
  export type usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findFirstOrThrow
   */
  export type usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findMany
   */
  export type usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario create
   */
  export type usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario.
     */
    data: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
  }

  /**
   * usuario createMany
   */
  export type usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario createManyAndReturn
   */
  export type usuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuario update
   */
  export type usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario.
     */
    data: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
    /**
     * Choose, which usuario to update.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario updateMany
   */
  export type usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuario updateManyAndReturn
   */
  export type usuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuario upsert
   */
  export type usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: usuarioWhereUniqueInput
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
  }

  /**
   * usuario delete
   */
  export type usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter which usuario to delete.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario deleteMany
   */
  export type usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuario.faculdade
   */
  export type usuario$faculdadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faculdade
     */
    select?: faculdadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faculdade
     */
    omit?: faculdadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: faculdadeInclude<ExtArgs> | null
    where?: faculdadeWhereInput
  }

  /**
   * usuario.mindcards
   */
  export type usuario$mindcardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mindcard
     */
    select?: mindcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mindcard
     */
    omit?: mindcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mindcardInclude<ExtArgs> | null
    where?: mindcardWhereInput
    orderBy?: mindcardOrderByWithRelationInput | mindcardOrderByWithRelationInput[]
    cursor?: mindcardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MindcardScalarFieldEnum | MindcardScalarFieldEnum[]
  }

  /**
   * usuario.praticas
   */
  export type usuario$praticasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pratica
     */
    select?: praticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pratica
     */
    omit?: praticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: praticaInclude<ExtArgs> | null
    where?: praticaWhereInput
    orderBy?: praticaOrderByWithRelationInput | praticaOrderByWithRelationInput[]
    cursor?: praticaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PraticaScalarFieldEnum | PraticaScalarFieldEnum[]
  }

  /**
   * usuario without action
   */
  export type usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
  }


  /**
   * Model mindcard
   */

  export type AggregateMindcard = {
    _count: MindcardCountAggregateOutputType | null
    _min: MindcardMinAggregateOutputType | null
    _max: MindcardMaxAggregateOutputType | null
  }

  export type MindcardMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    fonte_arquivo: string | null
    prompt_personalizado: string | null
    usuario_id: string | null
    data_criacao: Date | null
    status_processamento: $Enums.StatusProcessamento | null
    job_id: string | null
    mensagem_erro: string | null
    iniciado_em: Date | null
    concluido_em: Date | null
  }

  export type MindcardMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    fonte_arquivo: string | null
    prompt_personalizado: string | null
    usuario_id: string | null
    data_criacao: Date | null
    status_processamento: $Enums.StatusProcessamento | null
    job_id: string | null
    mensagem_erro: string | null
    iniciado_em: Date | null
    concluido_em: Date | null
  }

  export type MindcardCountAggregateOutputType = {
    id: number
    titulo: number
    fonte_arquivo: number
    prompt_personalizado: number
    usuario_id: number
    data_criacao: number
    status_processamento: number
    job_id: number
    mensagem_erro: number
    iniciado_em: number
    concluido_em: number
    _all: number
  }


  export type MindcardMinAggregateInputType = {
    id?: true
    titulo?: true
    fonte_arquivo?: true
    prompt_personalizado?: true
    usuario_id?: true
    data_criacao?: true
    status_processamento?: true
    job_id?: true
    mensagem_erro?: true
    iniciado_em?: true
    concluido_em?: true
  }

  export type MindcardMaxAggregateInputType = {
    id?: true
    titulo?: true
    fonte_arquivo?: true
    prompt_personalizado?: true
    usuario_id?: true
    data_criacao?: true
    status_processamento?: true
    job_id?: true
    mensagem_erro?: true
    iniciado_em?: true
    concluido_em?: true
  }

  export type MindcardCountAggregateInputType = {
    id?: true
    titulo?: true
    fonte_arquivo?: true
    prompt_personalizado?: true
    usuario_id?: true
    data_criacao?: true
    status_processamento?: true
    job_id?: true
    mensagem_erro?: true
    iniciado_em?: true
    concluido_em?: true
    _all?: true
  }

  export type MindcardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mindcard to aggregate.
     */
    where?: mindcardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mindcards to fetch.
     */
    orderBy?: mindcardOrderByWithRelationInput | mindcardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mindcardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mindcards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mindcards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mindcards
    **/
    _count?: true | MindcardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MindcardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MindcardMaxAggregateInputType
  }

  export type GetMindcardAggregateType<T extends MindcardAggregateArgs> = {
        [P in keyof T & keyof AggregateMindcard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMindcard[P]>
      : GetScalarType<T[P], AggregateMindcard[P]>
  }




  export type mindcardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mindcardWhereInput
    orderBy?: mindcardOrderByWithAggregationInput | mindcardOrderByWithAggregationInput[]
    by: MindcardScalarFieldEnum[] | MindcardScalarFieldEnum
    having?: mindcardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MindcardCountAggregateInputType | true
    _min?: MindcardMinAggregateInputType
    _max?: MindcardMaxAggregateInputType
  }

  export type MindcardGroupByOutputType = {
    id: string
    titulo: string
    fonte_arquivo: string | null
    prompt_personalizado: string | null
    usuario_id: string
    data_criacao: Date
    status_processamento: $Enums.StatusProcessamento
    job_id: string | null
    mensagem_erro: string | null
    iniciado_em: Date | null
    concluido_em: Date | null
    _count: MindcardCountAggregateOutputType | null
    _min: MindcardMinAggregateOutputType | null
    _max: MindcardMaxAggregateOutputType | null
  }

  type GetMindcardGroupByPayload<T extends mindcardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MindcardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MindcardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MindcardGroupByOutputType[P]>
            : GetScalarType<T[P], MindcardGroupByOutputType[P]>
        }
      >
    >


  export type mindcardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    fonte_arquivo?: boolean
    prompt_personalizado?: boolean
    usuario_id?: boolean
    data_criacao?: boolean
    status_processamento?: boolean
    job_id?: boolean
    mensagem_erro?: boolean
    iniciado_em?: boolean
    concluido_em?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    cards?: boolean | mindcard$cardsArgs<ExtArgs>
    praticas?: boolean | mindcard$praticasArgs<ExtArgs>
    _count?: boolean | MindcardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mindcard"]>

  export type mindcardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    fonte_arquivo?: boolean
    prompt_personalizado?: boolean
    usuario_id?: boolean
    data_criacao?: boolean
    status_processamento?: boolean
    job_id?: boolean
    mensagem_erro?: boolean
    iniciado_em?: boolean
    concluido_em?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mindcard"]>

  export type mindcardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    fonte_arquivo?: boolean
    prompt_personalizado?: boolean
    usuario_id?: boolean
    data_criacao?: boolean
    status_processamento?: boolean
    job_id?: boolean
    mensagem_erro?: boolean
    iniciado_em?: boolean
    concluido_em?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mindcard"]>

  export type mindcardSelectScalar = {
    id?: boolean
    titulo?: boolean
    fonte_arquivo?: boolean
    prompt_personalizado?: boolean
    usuario_id?: boolean
    data_criacao?: boolean
    status_processamento?: boolean
    job_id?: boolean
    mensagem_erro?: boolean
    iniciado_em?: boolean
    concluido_em?: boolean
  }

  export type mindcardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "fonte_arquivo" | "prompt_personalizado" | "usuario_id" | "data_criacao" | "status_processamento" | "job_id" | "mensagem_erro" | "iniciado_em" | "concluido_em", ExtArgs["result"]["mindcard"]>
  export type mindcardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    cards?: boolean | mindcard$cardsArgs<ExtArgs>
    praticas?: boolean | mindcard$praticasArgs<ExtArgs>
    _count?: boolean | MindcardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type mindcardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }
  export type mindcardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }

  export type $mindcardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mindcard"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs>
      cards: Prisma.$cardPayload<ExtArgs>[]
      praticas: Prisma.$praticaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      fonte_arquivo: string | null
      prompt_personalizado: string | null
      usuario_id: string
      data_criacao: Date
      status_processamento: $Enums.StatusProcessamento
      job_id: string | null
      mensagem_erro: string | null
      iniciado_em: Date | null
      concluido_em: Date | null
    }, ExtArgs["result"]["mindcard"]>
    composites: {}
  }

  type mindcardGetPayload<S extends boolean | null | undefined | mindcardDefaultArgs> = $Result.GetResult<Prisma.$mindcardPayload, S>

  type mindcardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mindcardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MindcardCountAggregateInputType | true
    }

  export interface mindcardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mindcard'], meta: { name: 'mindcard' } }
    /**
     * Find zero or one Mindcard that matches the filter.
     * @param {mindcardFindUniqueArgs} args - Arguments to find a Mindcard
     * @example
     * // Get one Mindcard
     * const mindcard = await prisma.mindcard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mindcardFindUniqueArgs>(args: SelectSubset<T, mindcardFindUniqueArgs<ExtArgs>>): Prisma__mindcardClient<$Result.GetResult<Prisma.$mindcardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mindcard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mindcardFindUniqueOrThrowArgs} args - Arguments to find a Mindcard
     * @example
     * // Get one Mindcard
     * const mindcard = await prisma.mindcard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mindcardFindUniqueOrThrowArgs>(args: SelectSubset<T, mindcardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mindcardClient<$Result.GetResult<Prisma.$mindcardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mindcard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mindcardFindFirstArgs} args - Arguments to find a Mindcard
     * @example
     * // Get one Mindcard
     * const mindcard = await prisma.mindcard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mindcardFindFirstArgs>(args?: SelectSubset<T, mindcardFindFirstArgs<ExtArgs>>): Prisma__mindcardClient<$Result.GetResult<Prisma.$mindcardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mindcard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mindcardFindFirstOrThrowArgs} args - Arguments to find a Mindcard
     * @example
     * // Get one Mindcard
     * const mindcard = await prisma.mindcard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mindcardFindFirstOrThrowArgs>(args?: SelectSubset<T, mindcardFindFirstOrThrowArgs<ExtArgs>>): Prisma__mindcardClient<$Result.GetResult<Prisma.$mindcardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mindcards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mindcardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mindcards
     * const mindcards = await prisma.mindcard.findMany()
     * 
     * // Get first 10 Mindcards
     * const mindcards = await prisma.mindcard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mindcardWithIdOnly = await prisma.mindcard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mindcardFindManyArgs>(args?: SelectSubset<T, mindcardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mindcardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mindcard.
     * @param {mindcardCreateArgs} args - Arguments to create a Mindcard.
     * @example
     * // Create one Mindcard
     * const Mindcard = await prisma.mindcard.create({
     *   data: {
     *     // ... data to create a Mindcard
     *   }
     * })
     * 
     */
    create<T extends mindcardCreateArgs>(args: SelectSubset<T, mindcardCreateArgs<ExtArgs>>): Prisma__mindcardClient<$Result.GetResult<Prisma.$mindcardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mindcards.
     * @param {mindcardCreateManyArgs} args - Arguments to create many Mindcards.
     * @example
     * // Create many Mindcards
     * const mindcard = await prisma.mindcard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mindcardCreateManyArgs>(args?: SelectSubset<T, mindcardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mindcards and returns the data saved in the database.
     * @param {mindcardCreateManyAndReturnArgs} args - Arguments to create many Mindcards.
     * @example
     * // Create many Mindcards
     * const mindcard = await prisma.mindcard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mindcards and only return the `id`
     * const mindcardWithIdOnly = await prisma.mindcard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mindcardCreateManyAndReturnArgs>(args?: SelectSubset<T, mindcardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mindcardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mindcard.
     * @param {mindcardDeleteArgs} args - Arguments to delete one Mindcard.
     * @example
     * // Delete one Mindcard
     * const Mindcard = await prisma.mindcard.delete({
     *   where: {
     *     // ... filter to delete one Mindcard
     *   }
     * })
     * 
     */
    delete<T extends mindcardDeleteArgs>(args: SelectSubset<T, mindcardDeleteArgs<ExtArgs>>): Prisma__mindcardClient<$Result.GetResult<Prisma.$mindcardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mindcard.
     * @param {mindcardUpdateArgs} args - Arguments to update one Mindcard.
     * @example
     * // Update one Mindcard
     * const mindcard = await prisma.mindcard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mindcardUpdateArgs>(args: SelectSubset<T, mindcardUpdateArgs<ExtArgs>>): Prisma__mindcardClient<$Result.GetResult<Prisma.$mindcardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mindcards.
     * @param {mindcardDeleteManyArgs} args - Arguments to filter Mindcards to delete.
     * @example
     * // Delete a few Mindcards
     * const { count } = await prisma.mindcard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mindcardDeleteManyArgs>(args?: SelectSubset<T, mindcardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mindcards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mindcardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mindcards
     * const mindcard = await prisma.mindcard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mindcardUpdateManyArgs>(args: SelectSubset<T, mindcardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mindcards and returns the data updated in the database.
     * @param {mindcardUpdateManyAndReturnArgs} args - Arguments to update many Mindcards.
     * @example
     * // Update many Mindcards
     * const mindcard = await prisma.mindcard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mindcards and only return the `id`
     * const mindcardWithIdOnly = await prisma.mindcard.updateManyAndReturn({
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
    updateManyAndReturn<T extends mindcardUpdateManyAndReturnArgs>(args: SelectSubset<T, mindcardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mindcardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mindcard.
     * @param {mindcardUpsertArgs} args - Arguments to update or create a Mindcard.
     * @example
     * // Update or create a Mindcard
     * const mindcard = await prisma.mindcard.upsert({
     *   create: {
     *     // ... data to create a Mindcard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mindcard we want to update
     *   }
     * })
     */
    upsert<T extends mindcardUpsertArgs>(args: SelectSubset<T, mindcardUpsertArgs<ExtArgs>>): Prisma__mindcardClient<$Result.GetResult<Prisma.$mindcardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mindcards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mindcardCountArgs} args - Arguments to filter Mindcards to count.
     * @example
     * // Count the number of Mindcards
     * const count = await prisma.mindcard.count({
     *   where: {
     *     // ... the filter for the Mindcards we want to count
     *   }
     * })
    **/
    count<T extends mindcardCountArgs>(
      args?: Subset<T, mindcardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MindcardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mindcard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MindcardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MindcardAggregateArgs>(args: Subset<T, MindcardAggregateArgs>): Prisma.PrismaPromise<GetMindcardAggregateType<T>>

    /**
     * Group by Mindcard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mindcardGroupByArgs} args - Group by arguments.
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
      T extends mindcardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mindcardGroupByArgs['orderBy'] }
        : { orderBy?: mindcardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mindcardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMindcardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mindcard model
   */
  readonly fields: mindcardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mindcard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mindcardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cards<T extends mindcard$cardsArgs<ExtArgs> = {}>(args?: Subset<T, mindcard$cardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    praticas<T extends mindcard$praticasArgs<ExtArgs> = {}>(args?: Subset<T, mindcard$praticasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$praticaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the mindcard model
   */
  interface mindcardFieldRefs {
    readonly id: FieldRef<"mindcard", 'String'>
    readonly titulo: FieldRef<"mindcard", 'String'>
    readonly fonte_arquivo: FieldRef<"mindcard", 'String'>
    readonly prompt_personalizado: FieldRef<"mindcard", 'String'>
    readonly usuario_id: FieldRef<"mindcard", 'String'>
    readonly data_criacao: FieldRef<"mindcard", 'DateTime'>
    readonly status_processamento: FieldRef<"mindcard", 'StatusProcessamento'>
    readonly job_id: FieldRef<"mindcard", 'String'>
    readonly mensagem_erro: FieldRef<"mindcard", 'String'>
    readonly iniciado_em: FieldRef<"mindcard", 'DateTime'>
    readonly concluido_em: FieldRef<"mindcard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * mindcard findUnique
   */
  export type mindcardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mindcard
     */
    select?: mindcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mindcard
     */
    omit?: mindcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mindcardInclude<ExtArgs> | null
    /**
     * Filter, which mindcard to fetch.
     */
    where: mindcardWhereUniqueInput
  }

  /**
   * mindcard findUniqueOrThrow
   */
  export type mindcardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mindcard
     */
    select?: mindcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mindcard
     */
    omit?: mindcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mindcardInclude<ExtArgs> | null
    /**
     * Filter, which mindcard to fetch.
     */
    where: mindcardWhereUniqueInput
  }

  /**
   * mindcard findFirst
   */
  export type mindcardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mindcard
     */
    select?: mindcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mindcard
     */
    omit?: mindcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mindcardInclude<ExtArgs> | null
    /**
     * Filter, which mindcard to fetch.
     */
    where?: mindcardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mindcards to fetch.
     */
    orderBy?: mindcardOrderByWithRelationInput | mindcardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mindcards.
     */
    cursor?: mindcardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mindcards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mindcards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mindcards.
     */
    distinct?: MindcardScalarFieldEnum | MindcardScalarFieldEnum[]
  }

  /**
   * mindcard findFirstOrThrow
   */
  export type mindcardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mindcard
     */
    select?: mindcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mindcard
     */
    omit?: mindcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mindcardInclude<ExtArgs> | null
    /**
     * Filter, which mindcard to fetch.
     */
    where?: mindcardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mindcards to fetch.
     */
    orderBy?: mindcardOrderByWithRelationInput | mindcardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mindcards.
     */
    cursor?: mindcardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mindcards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mindcards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mindcards.
     */
    distinct?: MindcardScalarFieldEnum | MindcardScalarFieldEnum[]
  }

  /**
   * mindcard findMany
   */
  export type mindcardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mindcard
     */
    select?: mindcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mindcard
     */
    omit?: mindcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mindcardInclude<ExtArgs> | null
    /**
     * Filter, which mindcards to fetch.
     */
    where?: mindcardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mindcards to fetch.
     */
    orderBy?: mindcardOrderByWithRelationInput | mindcardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mindcards.
     */
    cursor?: mindcardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mindcards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mindcards.
     */
    skip?: number
    distinct?: MindcardScalarFieldEnum | MindcardScalarFieldEnum[]
  }

  /**
   * mindcard create
   */
  export type mindcardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mindcard
     */
    select?: mindcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mindcard
     */
    omit?: mindcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mindcardInclude<ExtArgs> | null
    /**
     * The data needed to create a mindcard.
     */
    data: XOR<mindcardCreateInput, mindcardUncheckedCreateInput>
  }

  /**
   * mindcard createMany
   */
  export type mindcardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mindcards.
     */
    data: mindcardCreateManyInput | mindcardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mindcard createManyAndReturn
   */
  export type mindcardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mindcard
     */
    select?: mindcardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mindcard
     */
    omit?: mindcardOmit<ExtArgs> | null
    /**
     * The data used to create many mindcards.
     */
    data: mindcardCreateManyInput | mindcardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mindcardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * mindcard update
   */
  export type mindcardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mindcard
     */
    select?: mindcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mindcard
     */
    omit?: mindcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mindcardInclude<ExtArgs> | null
    /**
     * The data needed to update a mindcard.
     */
    data: XOR<mindcardUpdateInput, mindcardUncheckedUpdateInput>
    /**
     * Choose, which mindcard to update.
     */
    where: mindcardWhereUniqueInput
  }

  /**
   * mindcard updateMany
   */
  export type mindcardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mindcards.
     */
    data: XOR<mindcardUpdateManyMutationInput, mindcardUncheckedUpdateManyInput>
    /**
     * Filter which mindcards to update
     */
    where?: mindcardWhereInput
    /**
     * Limit how many mindcards to update.
     */
    limit?: number
  }

  /**
   * mindcard updateManyAndReturn
   */
  export type mindcardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mindcard
     */
    select?: mindcardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mindcard
     */
    omit?: mindcardOmit<ExtArgs> | null
    /**
     * The data used to update mindcards.
     */
    data: XOR<mindcardUpdateManyMutationInput, mindcardUncheckedUpdateManyInput>
    /**
     * Filter which mindcards to update
     */
    where?: mindcardWhereInput
    /**
     * Limit how many mindcards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mindcardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * mindcard upsert
   */
  export type mindcardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mindcard
     */
    select?: mindcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mindcard
     */
    omit?: mindcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mindcardInclude<ExtArgs> | null
    /**
     * The filter to search for the mindcard to update in case it exists.
     */
    where: mindcardWhereUniqueInput
    /**
     * In case the mindcard found by the `where` argument doesn't exist, create a new mindcard with this data.
     */
    create: XOR<mindcardCreateInput, mindcardUncheckedCreateInput>
    /**
     * In case the mindcard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mindcardUpdateInput, mindcardUncheckedUpdateInput>
  }

  /**
   * mindcard delete
   */
  export type mindcardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mindcard
     */
    select?: mindcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mindcard
     */
    omit?: mindcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mindcardInclude<ExtArgs> | null
    /**
     * Filter which mindcard to delete.
     */
    where: mindcardWhereUniqueInput
  }

  /**
   * mindcard deleteMany
   */
  export type mindcardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mindcards to delete
     */
    where?: mindcardWhereInput
    /**
     * Limit how many mindcards to delete.
     */
    limit?: number
  }

  /**
   * mindcard.cards
   */
  export type mindcard$cardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card
     */
    select?: cardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card
     */
    omit?: cardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardInclude<ExtArgs> | null
    where?: cardWhereInput
    orderBy?: cardOrderByWithRelationInput | cardOrderByWithRelationInput[]
    cursor?: cardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * mindcard.praticas
   */
  export type mindcard$praticasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pratica
     */
    select?: praticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pratica
     */
    omit?: praticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: praticaInclude<ExtArgs> | null
    where?: praticaWhereInput
    orderBy?: praticaOrderByWithRelationInput | praticaOrderByWithRelationInput[]
    cursor?: praticaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PraticaScalarFieldEnum | PraticaScalarFieldEnum[]
  }

  /**
   * mindcard without action
   */
  export type mindcardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mindcard
     */
    select?: mindcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mindcard
     */
    omit?: mindcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mindcardInclude<ExtArgs> | null
  }


  /**
   * Model card
   */

  export type AggregateCard = {
    _count: CardCountAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  export type CardMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    tipo: $Enums.tipo_card | null
    dificuldade: $Enums.dificuldade | null
    pergunta: string | null
    resposta_correta: string | null
    alternativa_texto: string | null
    mindcard_id: string | null
  }

  export type CardMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    tipo: $Enums.tipo_card | null
    dificuldade: $Enums.dificuldade | null
    pergunta: string | null
    resposta_correta: string | null
    alternativa_texto: string | null
    mindcard_id: string | null
  }

  export type CardCountAggregateOutputType = {
    id: number
    titulo: number
    tipo: number
    dificuldade: number
    pergunta: number
    resposta_correta: number
    alternativa_texto: number
    mindcard_id: number
    _all: number
  }


  export type CardMinAggregateInputType = {
    id?: true
    titulo?: true
    tipo?: true
    dificuldade?: true
    pergunta?: true
    resposta_correta?: true
    alternativa_texto?: true
    mindcard_id?: true
  }

  export type CardMaxAggregateInputType = {
    id?: true
    titulo?: true
    tipo?: true
    dificuldade?: true
    pergunta?: true
    resposta_correta?: true
    alternativa_texto?: true
    mindcard_id?: true
  }

  export type CardCountAggregateInputType = {
    id?: true
    titulo?: true
    tipo?: true
    dificuldade?: true
    pergunta?: true
    resposta_correta?: true
    alternativa_texto?: true
    mindcard_id?: true
    _all?: true
  }

  export type CardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which card to aggregate.
     */
    where?: cardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cards to fetch.
     */
    orderBy?: cardOrderByWithRelationInput | cardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cards
    **/
    _count?: true | CardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardMaxAggregateInputType
  }

  export type GetCardAggregateType<T extends CardAggregateArgs> = {
        [P in keyof T & keyof AggregateCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCard[P]>
      : GetScalarType<T[P], AggregateCard[P]>
  }




  export type cardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cardWhereInput
    orderBy?: cardOrderByWithAggregationInput | cardOrderByWithAggregationInput[]
    by: CardScalarFieldEnum[] | CardScalarFieldEnum
    having?: cardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardCountAggregateInputType | true
    _min?: CardMinAggregateInputType
    _max?: CardMaxAggregateInputType
  }

  export type CardGroupByOutputType = {
    id: string
    titulo: string
    tipo: $Enums.tipo_card
    dificuldade: $Enums.dificuldade
    pergunta: string
    resposta_correta: string | null
    alternativa_texto: string | null
    mindcard_id: string
    _count: CardCountAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  type GetCardGroupByPayload<T extends cardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardGroupByOutputType[P]>
            : GetScalarType<T[P], CardGroupByOutputType[P]>
        }
      >
    >


  export type cardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    tipo?: boolean
    dificuldade?: boolean
    pergunta?: boolean
    resposta_correta?: boolean
    alternativa_texto?: boolean
    mindcard_id?: boolean
    mindcard?: boolean | mindcardDefaultArgs<ExtArgs>
    opcoes?: boolean | card$opcoesArgs<ExtArgs>
    _count?: boolean | CardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type cardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    tipo?: boolean
    dificuldade?: boolean
    pergunta?: boolean
    resposta_correta?: boolean
    alternativa_texto?: boolean
    mindcard_id?: boolean
    mindcard?: boolean | mindcardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type cardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    tipo?: boolean
    dificuldade?: boolean
    pergunta?: boolean
    resposta_correta?: boolean
    alternativa_texto?: boolean
    mindcard_id?: boolean
    mindcard?: boolean | mindcardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type cardSelectScalar = {
    id?: boolean
    titulo?: boolean
    tipo?: boolean
    dificuldade?: boolean
    pergunta?: boolean
    resposta_correta?: boolean
    alternativa_texto?: boolean
    mindcard_id?: boolean
  }

  export type cardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "tipo" | "dificuldade" | "pergunta" | "resposta_correta" | "alternativa_texto" | "mindcard_id", ExtArgs["result"]["card"]>
  export type cardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mindcard?: boolean | mindcardDefaultArgs<ExtArgs>
    opcoes?: boolean | card$opcoesArgs<ExtArgs>
    _count?: boolean | CardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mindcard?: boolean | mindcardDefaultArgs<ExtArgs>
  }
  export type cardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mindcard?: boolean | mindcardDefaultArgs<ExtArgs>
  }

  export type $cardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "card"
    objects: {
      mindcard: Prisma.$mindcardPayload<ExtArgs>
      opcoes: Prisma.$opcao_respostaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      tipo: $Enums.tipo_card
      dificuldade: $Enums.dificuldade
      pergunta: string
      resposta_correta: string | null
      alternativa_texto: string | null
      mindcard_id: string
    }, ExtArgs["result"]["card"]>
    composites: {}
  }

  type cardGetPayload<S extends boolean | null | undefined | cardDefaultArgs> = $Result.GetResult<Prisma.$cardPayload, S>

  type cardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardCountAggregateInputType | true
    }

  export interface cardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['card'], meta: { name: 'card' } }
    /**
     * Find zero or one Card that matches the filter.
     * @param {cardFindUniqueArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cardFindUniqueArgs>(args: SelectSubset<T, cardFindUniqueArgs<ExtArgs>>): Prisma__cardClient<$Result.GetResult<Prisma.$cardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Card that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cardFindUniqueOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cardFindUniqueOrThrowArgs>(args: SelectSubset<T, cardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cardClient<$Result.GetResult<Prisma.$cardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cardFindFirstArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cardFindFirstArgs>(args?: SelectSubset<T, cardFindFirstArgs<ExtArgs>>): Prisma__cardClient<$Result.GetResult<Prisma.$cardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cardFindFirstOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cardFindFirstOrThrowArgs>(args?: SelectSubset<T, cardFindFirstOrThrowArgs<ExtArgs>>): Prisma__cardClient<$Result.GetResult<Prisma.$cardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cards
     * const cards = await prisma.card.findMany()
     * 
     * // Get first 10 Cards
     * const cards = await prisma.card.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardWithIdOnly = await prisma.card.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cardFindManyArgs>(args?: SelectSubset<T, cardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Card.
     * @param {cardCreateArgs} args - Arguments to create a Card.
     * @example
     * // Create one Card
     * const Card = await prisma.card.create({
     *   data: {
     *     // ... data to create a Card
     *   }
     * })
     * 
     */
    create<T extends cardCreateArgs>(args: SelectSubset<T, cardCreateArgs<ExtArgs>>): Prisma__cardClient<$Result.GetResult<Prisma.$cardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cards.
     * @param {cardCreateManyArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cardCreateManyArgs>(args?: SelectSubset<T, cardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cards and returns the data saved in the database.
     * @param {cardCreateManyAndReturnArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cardCreateManyAndReturnArgs>(args?: SelectSubset<T, cardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Card.
     * @param {cardDeleteArgs} args - Arguments to delete one Card.
     * @example
     * // Delete one Card
     * const Card = await prisma.card.delete({
     *   where: {
     *     // ... filter to delete one Card
     *   }
     * })
     * 
     */
    delete<T extends cardDeleteArgs>(args: SelectSubset<T, cardDeleteArgs<ExtArgs>>): Prisma__cardClient<$Result.GetResult<Prisma.$cardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Card.
     * @param {cardUpdateArgs} args - Arguments to update one Card.
     * @example
     * // Update one Card
     * const card = await prisma.card.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cardUpdateArgs>(args: SelectSubset<T, cardUpdateArgs<ExtArgs>>): Prisma__cardClient<$Result.GetResult<Prisma.$cardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cards.
     * @param {cardDeleteManyArgs} args - Arguments to filter Cards to delete.
     * @example
     * // Delete a few Cards
     * const { count } = await prisma.card.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cardDeleteManyArgs>(args?: SelectSubset<T, cardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cardUpdateManyArgs>(args: SelectSubset<T, cardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards and returns the data updated in the database.
     * @param {cardUpdateManyAndReturnArgs} args - Arguments to update many Cards.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.updateManyAndReturn({
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
    updateManyAndReturn<T extends cardUpdateManyAndReturnArgs>(args: SelectSubset<T, cardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Card.
     * @param {cardUpsertArgs} args - Arguments to update or create a Card.
     * @example
     * // Update or create a Card
     * const card = await prisma.card.upsert({
     *   create: {
     *     // ... data to create a Card
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Card we want to update
     *   }
     * })
     */
    upsert<T extends cardUpsertArgs>(args: SelectSubset<T, cardUpsertArgs<ExtArgs>>): Prisma__cardClient<$Result.GetResult<Prisma.$cardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cardCountArgs} args - Arguments to filter Cards to count.
     * @example
     * // Count the number of Cards
     * const count = await prisma.card.count({
     *   where: {
     *     // ... the filter for the Cards we want to count
     *   }
     * })
    **/
    count<T extends cardCountArgs>(
      args?: Subset<T, cardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CardAggregateArgs>(args: Subset<T, CardAggregateArgs>): Prisma.PrismaPromise<GetCardAggregateType<T>>

    /**
     * Group by Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cardGroupByArgs} args - Group by arguments.
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
      T extends cardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cardGroupByArgs['orderBy'] }
        : { orderBy?: cardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the card model
   */
  readonly fields: cardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for card.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mindcard<T extends mindcardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, mindcardDefaultArgs<ExtArgs>>): Prisma__mindcardClient<$Result.GetResult<Prisma.$mindcardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    opcoes<T extends card$opcoesArgs<ExtArgs> = {}>(args?: Subset<T, card$opcoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$opcao_respostaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the card model
   */
  interface cardFieldRefs {
    readonly id: FieldRef<"card", 'String'>
    readonly titulo: FieldRef<"card", 'String'>
    readonly tipo: FieldRef<"card", 'tipo_card'>
    readonly dificuldade: FieldRef<"card", 'dificuldade'>
    readonly pergunta: FieldRef<"card", 'String'>
    readonly resposta_correta: FieldRef<"card", 'String'>
    readonly alternativa_texto: FieldRef<"card", 'String'>
    readonly mindcard_id: FieldRef<"card", 'String'>
  }
    

  // Custom InputTypes
  /**
   * card findUnique
   */
  export type cardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card
     */
    select?: cardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card
     */
    omit?: cardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardInclude<ExtArgs> | null
    /**
     * Filter, which card to fetch.
     */
    where: cardWhereUniqueInput
  }

  /**
   * card findUniqueOrThrow
   */
  export type cardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card
     */
    select?: cardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card
     */
    omit?: cardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardInclude<ExtArgs> | null
    /**
     * Filter, which card to fetch.
     */
    where: cardWhereUniqueInput
  }

  /**
   * card findFirst
   */
  export type cardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card
     */
    select?: cardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card
     */
    omit?: cardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardInclude<ExtArgs> | null
    /**
     * Filter, which card to fetch.
     */
    where?: cardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cards to fetch.
     */
    orderBy?: cardOrderByWithRelationInput | cardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cards.
     */
    cursor?: cardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * card findFirstOrThrow
   */
  export type cardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card
     */
    select?: cardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card
     */
    omit?: cardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardInclude<ExtArgs> | null
    /**
     * Filter, which card to fetch.
     */
    where?: cardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cards to fetch.
     */
    orderBy?: cardOrderByWithRelationInput | cardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cards.
     */
    cursor?: cardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * card findMany
   */
  export type cardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card
     */
    select?: cardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card
     */
    omit?: cardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardInclude<ExtArgs> | null
    /**
     * Filter, which cards to fetch.
     */
    where?: cardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cards to fetch.
     */
    orderBy?: cardOrderByWithRelationInput | cardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cards.
     */
    cursor?: cardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cards.
     */
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * card create
   */
  export type cardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card
     */
    select?: cardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card
     */
    omit?: cardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardInclude<ExtArgs> | null
    /**
     * The data needed to create a card.
     */
    data: XOR<cardCreateInput, cardUncheckedCreateInput>
  }

  /**
   * card createMany
   */
  export type cardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cards.
     */
    data: cardCreateManyInput | cardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * card createManyAndReturn
   */
  export type cardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card
     */
    select?: cardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the card
     */
    omit?: cardOmit<ExtArgs> | null
    /**
     * The data used to create many cards.
     */
    data: cardCreateManyInput | cardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * card update
   */
  export type cardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card
     */
    select?: cardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card
     */
    omit?: cardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardInclude<ExtArgs> | null
    /**
     * The data needed to update a card.
     */
    data: XOR<cardUpdateInput, cardUncheckedUpdateInput>
    /**
     * Choose, which card to update.
     */
    where: cardWhereUniqueInput
  }

  /**
   * card updateMany
   */
  export type cardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cards.
     */
    data: XOR<cardUpdateManyMutationInput, cardUncheckedUpdateManyInput>
    /**
     * Filter which cards to update
     */
    where?: cardWhereInput
    /**
     * Limit how many cards to update.
     */
    limit?: number
  }

  /**
   * card updateManyAndReturn
   */
  export type cardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card
     */
    select?: cardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the card
     */
    omit?: cardOmit<ExtArgs> | null
    /**
     * The data used to update cards.
     */
    data: XOR<cardUpdateManyMutationInput, cardUncheckedUpdateManyInput>
    /**
     * Filter which cards to update
     */
    where?: cardWhereInput
    /**
     * Limit how many cards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * card upsert
   */
  export type cardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card
     */
    select?: cardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card
     */
    omit?: cardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardInclude<ExtArgs> | null
    /**
     * The filter to search for the card to update in case it exists.
     */
    where: cardWhereUniqueInput
    /**
     * In case the card found by the `where` argument doesn't exist, create a new card with this data.
     */
    create: XOR<cardCreateInput, cardUncheckedCreateInput>
    /**
     * In case the card was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cardUpdateInput, cardUncheckedUpdateInput>
  }

  /**
   * card delete
   */
  export type cardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card
     */
    select?: cardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card
     */
    omit?: cardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardInclude<ExtArgs> | null
    /**
     * Filter which card to delete.
     */
    where: cardWhereUniqueInput
  }

  /**
   * card deleteMany
   */
  export type cardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cards to delete
     */
    where?: cardWhereInput
    /**
     * Limit how many cards to delete.
     */
    limit?: number
  }

  /**
   * card.opcoes
   */
  export type card$opcoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opcao_resposta
     */
    select?: opcao_respostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opcao_resposta
     */
    omit?: opcao_respostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opcao_respostaInclude<ExtArgs> | null
    where?: opcao_respostaWhereInput
    orderBy?: opcao_respostaOrderByWithRelationInput | opcao_respostaOrderByWithRelationInput[]
    cursor?: opcao_respostaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Opcao_respostaScalarFieldEnum | Opcao_respostaScalarFieldEnum[]
  }

  /**
   * card without action
   */
  export type cardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card
     */
    select?: cardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the card
     */
    omit?: cardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cardInclude<ExtArgs> | null
  }


  /**
   * Model opcao_resposta
   */

  export type AggregateOpcao_resposta = {
    _count: Opcao_respostaCountAggregateOutputType | null
    _min: Opcao_respostaMinAggregateOutputType | null
    _max: Opcao_respostaMaxAggregateOutputType | null
  }

  export type Opcao_respostaMinAggregateOutputType = {
    id: string | null
    texto: string | null
    correta: boolean | null
    card_id: string | null
  }

  export type Opcao_respostaMaxAggregateOutputType = {
    id: string | null
    texto: string | null
    correta: boolean | null
    card_id: string | null
  }

  export type Opcao_respostaCountAggregateOutputType = {
    id: number
    texto: number
    correta: number
    card_id: number
    _all: number
  }


  export type Opcao_respostaMinAggregateInputType = {
    id?: true
    texto?: true
    correta?: true
    card_id?: true
  }

  export type Opcao_respostaMaxAggregateInputType = {
    id?: true
    texto?: true
    correta?: true
    card_id?: true
  }

  export type Opcao_respostaCountAggregateInputType = {
    id?: true
    texto?: true
    correta?: true
    card_id?: true
    _all?: true
  }

  export type Opcao_respostaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which opcao_resposta to aggregate.
     */
    where?: opcao_respostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of opcao_respostas to fetch.
     */
    orderBy?: opcao_respostaOrderByWithRelationInput | opcao_respostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: opcao_respostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` opcao_respostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` opcao_respostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned opcao_respostas
    **/
    _count?: true | Opcao_respostaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Opcao_respostaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Opcao_respostaMaxAggregateInputType
  }

  export type GetOpcao_respostaAggregateType<T extends Opcao_respostaAggregateArgs> = {
        [P in keyof T & keyof AggregateOpcao_resposta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpcao_resposta[P]>
      : GetScalarType<T[P], AggregateOpcao_resposta[P]>
  }




  export type opcao_respostaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: opcao_respostaWhereInput
    orderBy?: opcao_respostaOrderByWithAggregationInput | opcao_respostaOrderByWithAggregationInput[]
    by: Opcao_respostaScalarFieldEnum[] | Opcao_respostaScalarFieldEnum
    having?: opcao_respostaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Opcao_respostaCountAggregateInputType | true
    _min?: Opcao_respostaMinAggregateInputType
    _max?: Opcao_respostaMaxAggregateInputType
  }

  export type Opcao_respostaGroupByOutputType = {
    id: string
    texto: string
    correta: boolean
    card_id: string
    _count: Opcao_respostaCountAggregateOutputType | null
    _min: Opcao_respostaMinAggregateOutputType | null
    _max: Opcao_respostaMaxAggregateOutputType | null
  }

  type GetOpcao_respostaGroupByPayload<T extends opcao_respostaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Opcao_respostaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Opcao_respostaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Opcao_respostaGroupByOutputType[P]>
            : GetScalarType<T[P], Opcao_respostaGroupByOutputType[P]>
        }
      >
    >


  export type opcao_respostaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    texto?: boolean
    correta?: boolean
    card_id?: boolean
    card?: boolean | cardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opcao_resposta"]>

  export type opcao_respostaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    texto?: boolean
    correta?: boolean
    card_id?: boolean
    card?: boolean | cardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opcao_resposta"]>

  export type opcao_respostaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    texto?: boolean
    correta?: boolean
    card_id?: boolean
    card?: boolean | cardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opcao_resposta"]>

  export type opcao_respostaSelectScalar = {
    id?: boolean
    texto?: boolean
    correta?: boolean
    card_id?: boolean
  }

  export type opcao_respostaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "texto" | "correta" | "card_id", ExtArgs["result"]["opcao_resposta"]>
  export type opcao_respostaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | cardDefaultArgs<ExtArgs>
  }
  export type opcao_respostaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | cardDefaultArgs<ExtArgs>
  }
  export type opcao_respostaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | cardDefaultArgs<ExtArgs>
  }

  export type $opcao_respostaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "opcao_resposta"
    objects: {
      card: Prisma.$cardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      texto: string
      correta: boolean
      card_id: string
    }, ExtArgs["result"]["opcao_resposta"]>
    composites: {}
  }

  type opcao_respostaGetPayload<S extends boolean | null | undefined | opcao_respostaDefaultArgs> = $Result.GetResult<Prisma.$opcao_respostaPayload, S>

  type opcao_respostaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<opcao_respostaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Opcao_respostaCountAggregateInputType | true
    }

  export interface opcao_respostaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['opcao_resposta'], meta: { name: 'opcao_resposta' } }
    /**
     * Find zero or one Opcao_resposta that matches the filter.
     * @param {opcao_respostaFindUniqueArgs} args - Arguments to find a Opcao_resposta
     * @example
     * // Get one Opcao_resposta
     * const opcao_resposta = await prisma.opcao_resposta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends opcao_respostaFindUniqueArgs>(args: SelectSubset<T, opcao_respostaFindUniqueArgs<ExtArgs>>): Prisma__opcao_respostaClient<$Result.GetResult<Prisma.$opcao_respostaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Opcao_resposta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {opcao_respostaFindUniqueOrThrowArgs} args - Arguments to find a Opcao_resposta
     * @example
     * // Get one Opcao_resposta
     * const opcao_resposta = await prisma.opcao_resposta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends opcao_respostaFindUniqueOrThrowArgs>(args: SelectSubset<T, opcao_respostaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__opcao_respostaClient<$Result.GetResult<Prisma.$opcao_respostaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Opcao_resposta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {opcao_respostaFindFirstArgs} args - Arguments to find a Opcao_resposta
     * @example
     * // Get one Opcao_resposta
     * const opcao_resposta = await prisma.opcao_resposta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends opcao_respostaFindFirstArgs>(args?: SelectSubset<T, opcao_respostaFindFirstArgs<ExtArgs>>): Prisma__opcao_respostaClient<$Result.GetResult<Prisma.$opcao_respostaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Opcao_resposta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {opcao_respostaFindFirstOrThrowArgs} args - Arguments to find a Opcao_resposta
     * @example
     * // Get one Opcao_resposta
     * const opcao_resposta = await prisma.opcao_resposta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends opcao_respostaFindFirstOrThrowArgs>(args?: SelectSubset<T, opcao_respostaFindFirstOrThrowArgs<ExtArgs>>): Prisma__opcao_respostaClient<$Result.GetResult<Prisma.$opcao_respostaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Opcao_respostas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {opcao_respostaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Opcao_respostas
     * const opcao_respostas = await prisma.opcao_resposta.findMany()
     * 
     * // Get first 10 Opcao_respostas
     * const opcao_respostas = await prisma.opcao_resposta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const opcao_respostaWithIdOnly = await prisma.opcao_resposta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends opcao_respostaFindManyArgs>(args?: SelectSubset<T, opcao_respostaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$opcao_respostaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Opcao_resposta.
     * @param {opcao_respostaCreateArgs} args - Arguments to create a Opcao_resposta.
     * @example
     * // Create one Opcao_resposta
     * const Opcao_resposta = await prisma.opcao_resposta.create({
     *   data: {
     *     // ... data to create a Opcao_resposta
     *   }
     * })
     * 
     */
    create<T extends opcao_respostaCreateArgs>(args: SelectSubset<T, opcao_respostaCreateArgs<ExtArgs>>): Prisma__opcao_respostaClient<$Result.GetResult<Prisma.$opcao_respostaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Opcao_respostas.
     * @param {opcao_respostaCreateManyArgs} args - Arguments to create many Opcao_respostas.
     * @example
     * // Create many Opcao_respostas
     * const opcao_resposta = await prisma.opcao_resposta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends opcao_respostaCreateManyArgs>(args?: SelectSubset<T, opcao_respostaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Opcao_respostas and returns the data saved in the database.
     * @param {opcao_respostaCreateManyAndReturnArgs} args - Arguments to create many Opcao_respostas.
     * @example
     * // Create many Opcao_respostas
     * const opcao_resposta = await prisma.opcao_resposta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Opcao_respostas and only return the `id`
     * const opcao_respostaWithIdOnly = await prisma.opcao_resposta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends opcao_respostaCreateManyAndReturnArgs>(args?: SelectSubset<T, opcao_respostaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$opcao_respostaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Opcao_resposta.
     * @param {opcao_respostaDeleteArgs} args - Arguments to delete one Opcao_resposta.
     * @example
     * // Delete one Opcao_resposta
     * const Opcao_resposta = await prisma.opcao_resposta.delete({
     *   where: {
     *     // ... filter to delete one Opcao_resposta
     *   }
     * })
     * 
     */
    delete<T extends opcao_respostaDeleteArgs>(args: SelectSubset<T, opcao_respostaDeleteArgs<ExtArgs>>): Prisma__opcao_respostaClient<$Result.GetResult<Prisma.$opcao_respostaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Opcao_resposta.
     * @param {opcao_respostaUpdateArgs} args - Arguments to update one Opcao_resposta.
     * @example
     * // Update one Opcao_resposta
     * const opcao_resposta = await prisma.opcao_resposta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends opcao_respostaUpdateArgs>(args: SelectSubset<T, opcao_respostaUpdateArgs<ExtArgs>>): Prisma__opcao_respostaClient<$Result.GetResult<Prisma.$opcao_respostaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Opcao_respostas.
     * @param {opcao_respostaDeleteManyArgs} args - Arguments to filter Opcao_respostas to delete.
     * @example
     * // Delete a few Opcao_respostas
     * const { count } = await prisma.opcao_resposta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends opcao_respostaDeleteManyArgs>(args?: SelectSubset<T, opcao_respostaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Opcao_respostas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {opcao_respostaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Opcao_respostas
     * const opcao_resposta = await prisma.opcao_resposta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends opcao_respostaUpdateManyArgs>(args: SelectSubset<T, opcao_respostaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Opcao_respostas and returns the data updated in the database.
     * @param {opcao_respostaUpdateManyAndReturnArgs} args - Arguments to update many Opcao_respostas.
     * @example
     * // Update many Opcao_respostas
     * const opcao_resposta = await prisma.opcao_resposta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Opcao_respostas and only return the `id`
     * const opcao_respostaWithIdOnly = await prisma.opcao_resposta.updateManyAndReturn({
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
    updateManyAndReturn<T extends opcao_respostaUpdateManyAndReturnArgs>(args: SelectSubset<T, opcao_respostaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$opcao_respostaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Opcao_resposta.
     * @param {opcao_respostaUpsertArgs} args - Arguments to update or create a Opcao_resposta.
     * @example
     * // Update or create a Opcao_resposta
     * const opcao_resposta = await prisma.opcao_resposta.upsert({
     *   create: {
     *     // ... data to create a Opcao_resposta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Opcao_resposta we want to update
     *   }
     * })
     */
    upsert<T extends opcao_respostaUpsertArgs>(args: SelectSubset<T, opcao_respostaUpsertArgs<ExtArgs>>): Prisma__opcao_respostaClient<$Result.GetResult<Prisma.$opcao_respostaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Opcao_respostas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {opcao_respostaCountArgs} args - Arguments to filter Opcao_respostas to count.
     * @example
     * // Count the number of Opcao_respostas
     * const count = await prisma.opcao_resposta.count({
     *   where: {
     *     // ... the filter for the Opcao_respostas we want to count
     *   }
     * })
    **/
    count<T extends opcao_respostaCountArgs>(
      args?: Subset<T, opcao_respostaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Opcao_respostaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Opcao_resposta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Opcao_respostaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Opcao_respostaAggregateArgs>(args: Subset<T, Opcao_respostaAggregateArgs>): Prisma.PrismaPromise<GetOpcao_respostaAggregateType<T>>

    /**
     * Group by Opcao_resposta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {opcao_respostaGroupByArgs} args - Group by arguments.
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
      T extends opcao_respostaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: opcao_respostaGroupByArgs['orderBy'] }
        : { orderBy?: opcao_respostaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, opcao_respostaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpcao_respostaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the opcao_resposta model
   */
  readonly fields: opcao_respostaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for opcao_resposta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__opcao_respostaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    card<T extends cardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cardDefaultArgs<ExtArgs>>): Prisma__cardClient<$Result.GetResult<Prisma.$cardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the opcao_resposta model
   */
  interface opcao_respostaFieldRefs {
    readonly id: FieldRef<"opcao_resposta", 'String'>
    readonly texto: FieldRef<"opcao_resposta", 'String'>
    readonly correta: FieldRef<"opcao_resposta", 'Boolean'>
    readonly card_id: FieldRef<"opcao_resposta", 'String'>
  }
    

  // Custom InputTypes
  /**
   * opcao_resposta findUnique
   */
  export type opcao_respostaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opcao_resposta
     */
    select?: opcao_respostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opcao_resposta
     */
    omit?: opcao_respostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opcao_respostaInclude<ExtArgs> | null
    /**
     * Filter, which opcao_resposta to fetch.
     */
    where: opcao_respostaWhereUniqueInput
  }

  /**
   * opcao_resposta findUniqueOrThrow
   */
  export type opcao_respostaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opcao_resposta
     */
    select?: opcao_respostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opcao_resposta
     */
    omit?: opcao_respostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opcao_respostaInclude<ExtArgs> | null
    /**
     * Filter, which opcao_resposta to fetch.
     */
    where: opcao_respostaWhereUniqueInput
  }

  /**
   * opcao_resposta findFirst
   */
  export type opcao_respostaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opcao_resposta
     */
    select?: opcao_respostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opcao_resposta
     */
    omit?: opcao_respostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opcao_respostaInclude<ExtArgs> | null
    /**
     * Filter, which opcao_resposta to fetch.
     */
    where?: opcao_respostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of opcao_respostas to fetch.
     */
    orderBy?: opcao_respostaOrderByWithRelationInput | opcao_respostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for opcao_respostas.
     */
    cursor?: opcao_respostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` opcao_respostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` opcao_respostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of opcao_respostas.
     */
    distinct?: Opcao_respostaScalarFieldEnum | Opcao_respostaScalarFieldEnum[]
  }

  /**
   * opcao_resposta findFirstOrThrow
   */
  export type opcao_respostaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opcao_resposta
     */
    select?: opcao_respostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opcao_resposta
     */
    omit?: opcao_respostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opcao_respostaInclude<ExtArgs> | null
    /**
     * Filter, which opcao_resposta to fetch.
     */
    where?: opcao_respostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of opcao_respostas to fetch.
     */
    orderBy?: opcao_respostaOrderByWithRelationInput | opcao_respostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for opcao_respostas.
     */
    cursor?: opcao_respostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` opcao_respostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` opcao_respostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of opcao_respostas.
     */
    distinct?: Opcao_respostaScalarFieldEnum | Opcao_respostaScalarFieldEnum[]
  }

  /**
   * opcao_resposta findMany
   */
  export type opcao_respostaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opcao_resposta
     */
    select?: opcao_respostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opcao_resposta
     */
    omit?: opcao_respostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opcao_respostaInclude<ExtArgs> | null
    /**
     * Filter, which opcao_respostas to fetch.
     */
    where?: opcao_respostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of opcao_respostas to fetch.
     */
    orderBy?: opcao_respostaOrderByWithRelationInput | opcao_respostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing opcao_respostas.
     */
    cursor?: opcao_respostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` opcao_respostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` opcao_respostas.
     */
    skip?: number
    distinct?: Opcao_respostaScalarFieldEnum | Opcao_respostaScalarFieldEnum[]
  }

  /**
   * opcao_resposta create
   */
  export type opcao_respostaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opcao_resposta
     */
    select?: opcao_respostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opcao_resposta
     */
    omit?: opcao_respostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opcao_respostaInclude<ExtArgs> | null
    /**
     * The data needed to create a opcao_resposta.
     */
    data: XOR<opcao_respostaCreateInput, opcao_respostaUncheckedCreateInput>
  }

  /**
   * opcao_resposta createMany
   */
  export type opcao_respostaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many opcao_respostas.
     */
    data: opcao_respostaCreateManyInput | opcao_respostaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * opcao_resposta createManyAndReturn
   */
  export type opcao_respostaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opcao_resposta
     */
    select?: opcao_respostaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the opcao_resposta
     */
    omit?: opcao_respostaOmit<ExtArgs> | null
    /**
     * The data used to create many opcao_respostas.
     */
    data: opcao_respostaCreateManyInput | opcao_respostaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opcao_respostaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * opcao_resposta update
   */
  export type opcao_respostaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opcao_resposta
     */
    select?: opcao_respostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opcao_resposta
     */
    omit?: opcao_respostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opcao_respostaInclude<ExtArgs> | null
    /**
     * The data needed to update a opcao_resposta.
     */
    data: XOR<opcao_respostaUpdateInput, opcao_respostaUncheckedUpdateInput>
    /**
     * Choose, which opcao_resposta to update.
     */
    where: opcao_respostaWhereUniqueInput
  }

  /**
   * opcao_resposta updateMany
   */
  export type opcao_respostaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update opcao_respostas.
     */
    data: XOR<opcao_respostaUpdateManyMutationInput, opcao_respostaUncheckedUpdateManyInput>
    /**
     * Filter which opcao_respostas to update
     */
    where?: opcao_respostaWhereInput
    /**
     * Limit how many opcao_respostas to update.
     */
    limit?: number
  }

  /**
   * opcao_resposta updateManyAndReturn
   */
  export type opcao_respostaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opcao_resposta
     */
    select?: opcao_respostaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the opcao_resposta
     */
    omit?: opcao_respostaOmit<ExtArgs> | null
    /**
     * The data used to update opcao_respostas.
     */
    data: XOR<opcao_respostaUpdateManyMutationInput, opcao_respostaUncheckedUpdateManyInput>
    /**
     * Filter which opcao_respostas to update
     */
    where?: opcao_respostaWhereInput
    /**
     * Limit how many opcao_respostas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opcao_respostaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * opcao_resposta upsert
   */
  export type opcao_respostaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opcao_resposta
     */
    select?: opcao_respostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opcao_resposta
     */
    omit?: opcao_respostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opcao_respostaInclude<ExtArgs> | null
    /**
     * The filter to search for the opcao_resposta to update in case it exists.
     */
    where: opcao_respostaWhereUniqueInput
    /**
     * In case the opcao_resposta found by the `where` argument doesn't exist, create a new opcao_resposta with this data.
     */
    create: XOR<opcao_respostaCreateInput, opcao_respostaUncheckedCreateInput>
    /**
     * In case the opcao_resposta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<opcao_respostaUpdateInput, opcao_respostaUncheckedUpdateInput>
  }

  /**
   * opcao_resposta delete
   */
  export type opcao_respostaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opcao_resposta
     */
    select?: opcao_respostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opcao_resposta
     */
    omit?: opcao_respostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opcao_respostaInclude<ExtArgs> | null
    /**
     * Filter which opcao_resposta to delete.
     */
    where: opcao_respostaWhereUniqueInput
  }

  /**
   * opcao_resposta deleteMany
   */
  export type opcao_respostaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which opcao_respostas to delete
     */
    where?: opcao_respostaWhereInput
    /**
     * Limit how many opcao_respostas to delete.
     */
    limit?: number
  }

  /**
   * opcao_resposta without action
   */
  export type opcao_respostaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the opcao_resposta
     */
    select?: opcao_respostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the opcao_resposta
     */
    omit?: opcao_respostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: opcao_respostaInclude<ExtArgs> | null
  }


  /**
   * Model pratica
   */

  export type AggregatePratica = {
    _count: PraticaCountAggregateOutputType | null
    _avg: PraticaAvgAggregateOutputType | null
    _sum: PraticaSumAggregateOutputType | null
    _min: PraticaMinAggregateOutputType | null
    _max: PraticaMaxAggregateOutputType | null
  }

  export type PraticaAvgAggregateOutputType = {
    acertos: number | null
    erros: number | null
    sequencia_conquistada: number | null
    xp_ganho: number | null
  }

  export type PraticaSumAggregateOutputType = {
    acertos: number | null
    erros: number | null
    sequencia_conquistada: number | null
    xp_ganho: number | null
  }

  export type PraticaMinAggregateOutputType = {
    id: string | null
    usuario_id: string | null
    mindcard_id: string | null
    acertos: number | null
    erros: number | null
    sequencia_conquistada: number | null
    xp_ganho: number | null
    data_pratica: Date | null
  }

  export type PraticaMaxAggregateOutputType = {
    id: string | null
    usuario_id: string | null
    mindcard_id: string | null
    acertos: number | null
    erros: number | null
    sequencia_conquistada: number | null
    xp_ganho: number | null
    data_pratica: Date | null
  }

  export type PraticaCountAggregateOutputType = {
    id: number
    usuario_id: number
    mindcard_id: number
    acertos: number
    erros: number
    sequencia_conquistada: number
    xp_ganho: number
    data_pratica: number
    _all: number
  }


  export type PraticaAvgAggregateInputType = {
    acertos?: true
    erros?: true
    sequencia_conquistada?: true
    xp_ganho?: true
  }

  export type PraticaSumAggregateInputType = {
    acertos?: true
    erros?: true
    sequencia_conquistada?: true
    xp_ganho?: true
  }

  export type PraticaMinAggregateInputType = {
    id?: true
    usuario_id?: true
    mindcard_id?: true
    acertos?: true
    erros?: true
    sequencia_conquistada?: true
    xp_ganho?: true
    data_pratica?: true
  }

  export type PraticaMaxAggregateInputType = {
    id?: true
    usuario_id?: true
    mindcard_id?: true
    acertos?: true
    erros?: true
    sequencia_conquistada?: true
    xp_ganho?: true
    data_pratica?: true
  }

  export type PraticaCountAggregateInputType = {
    id?: true
    usuario_id?: true
    mindcard_id?: true
    acertos?: true
    erros?: true
    sequencia_conquistada?: true
    xp_ganho?: true
    data_pratica?: true
    _all?: true
  }

  export type PraticaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pratica to aggregate.
     */
    where?: praticaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of praticas to fetch.
     */
    orderBy?: praticaOrderByWithRelationInput | praticaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: praticaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` praticas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` praticas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned praticas
    **/
    _count?: true | PraticaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PraticaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PraticaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PraticaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PraticaMaxAggregateInputType
  }

  export type GetPraticaAggregateType<T extends PraticaAggregateArgs> = {
        [P in keyof T & keyof AggregatePratica]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePratica[P]>
      : GetScalarType<T[P], AggregatePratica[P]>
  }




  export type praticaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: praticaWhereInput
    orderBy?: praticaOrderByWithAggregationInput | praticaOrderByWithAggregationInput[]
    by: PraticaScalarFieldEnum[] | PraticaScalarFieldEnum
    having?: praticaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PraticaCountAggregateInputType | true
    _avg?: PraticaAvgAggregateInputType
    _sum?: PraticaSumAggregateInputType
    _min?: PraticaMinAggregateInputType
    _max?: PraticaMaxAggregateInputType
  }

  export type PraticaGroupByOutputType = {
    id: string
    usuario_id: string
    mindcard_id: string | null
    acertos: number
    erros: number
    sequencia_conquistada: number
    xp_ganho: number
    data_pratica: Date
    _count: PraticaCountAggregateOutputType | null
    _avg: PraticaAvgAggregateOutputType | null
    _sum: PraticaSumAggregateOutputType | null
    _min: PraticaMinAggregateOutputType | null
    _max: PraticaMaxAggregateOutputType | null
  }

  type GetPraticaGroupByPayload<T extends praticaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PraticaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PraticaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PraticaGroupByOutputType[P]>
            : GetScalarType<T[P], PraticaGroupByOutputType[P]>
        }
      >
    >


  export type praticaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    mindcard_id?: boolean
    acertos?: boolean
    erros?: boolean
    sequencia_conquistada?: boolean
    xp_ganho?: boolean
    data_pratica?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    mindcard?: boolean | pratica$mindcardArgs<ExtArgs>
  }, ExtArgs["result"]["pratica"]>

  export type praticaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    mindcard_id?: boolean
    acertos?: boolean
    erros?: boolean
    sequencia_conquistada?: boolean
    xp_ganho?: boolean
    data_pratica?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    mindcard?: boolean | pratica$mindcardArgs<ExtArgs>
  }, ExtArgs["result"]["pratica"]>

  export type praticaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    mindcard_id?: boolean
    acertos?: boolean
    erros?: boolean
    sequencia_conquistada?: boolean
    xp_ganho?: boolean
    data_pratica?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    mindcard?: boolean | pratica$mindcardArgs<ExtArgs>
  }, ExtArgs["result"]["pratica"]>

  export type praticaSelectScalar = {
    id?: boolean
    usuario_id?: boolean
    mindcard_id?: boolean
    acertos?: boolean
    erros?: boolean
    sequencia_conquistada?: boolean
    xp_ganho?: boolean
    data_pratica?: boolean
  }

  export type praticaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_id" | "mindcard_id" | "acertos" | "erros" | "sequencia_conquistada" | "xp_ganho" | "data_pratica", ExtArgs["result"]["pratica"]>
  export type praticaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    mindcard?: boolean | pratica$mindcardArgs<ExtArgs>
  }
  export type praticaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    mindcard?: boolean | pratica$mindcardArgs<ExtArgs>
  }
  export type praticaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    mindcard?: boolean | pratica$mindcardArgs<ExtArgs>
  }

  export type $praticaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pratica"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs>
      mindcard: Prisma.$mindcardPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuario_id: string
      mindcard_id: string | null
      acertos: number
      erros: number
      sequencia_conquistada: number
      xp_ganho: number
      data_pratica: Date
    }, ExtArgs["result"]["pratica"]>
    composites: {}
  }

  type praticaGetPayload<S extends boolean | null | undefined | praticaDefaultArgs> = $Result.GetResult<Prisma.$praticaPayload, S>

  type praticaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<praticaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PraticaCountAggregateInputType | true
    }

  export interface praticaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pratica'], meta: { name: 'pratica' } }
    /**
     * Find zero or one Pratica that matches the filter.
     * @param {praticaFindUniqueArgs} args - Arguments to find a Pratica
     * @example
     * // Get one Pratica
     * const pratica = await prisma.pratica.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends praticaFindUniqueArgs>(args: SelectSubset<T, praticaFindUniqueArgs<ExtArgs>>): Prisma__praticaClient<$Result.GetResult<Prisma.$praticaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pratica that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {praticaFindUniqueOrThrowArgs} args - Arguments to find a Pratica
     * @example
     * // Get one Pratica
     * const pratica = await prisma.pratica.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends praticaFindUniqueOrThrowArgs>(args: SelectSubset<T, praticaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__praticaClient<$Result.GetResult<Prisma.$praticaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pratica that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {praticaFindFirstArgs} args - Arguments to find a Pratica
     * @example
     * // Get one Pratica
     * const pratica = await prisma.pratica.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends praticaFindFirstArgs>(args?: SelectSubset<T, praticaFindFirstArgs<ExtArgs>>): Prisma__praticaClient<$Result.GetResult<Prisma.$praticaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pratica that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {praticaFindFirstOrThrowArgs} args - Arguments to find a Pratica
     * @example
     * // Get one Pratica
     * const pratica = await prisma.pratica.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends praticaFindFirstOrThrowArgs>(args?: SelectSubset<T, praticaFindFirstOrThrowArgs<ExtArgs>>): Prisma__praticaClient<$Result.GetResult<Prisma.$praticaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Praticas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {praticaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Praticas
     * const praticas = await prisma.pratica.findMany()
     * 
     * // Get first 10 Praticas
     * const praticas = await prisma.pratica.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const praticaWithIdOnly = await prisma.pratica.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends praticaFindManyArgs>(args?: SelectSubset<T, praticaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$praticaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pratica.
     * @param {praticaCreateArgs} args - Arguments to create a Pratica.
     * @example
     * // Create one Pratica
     * const Pratica = await prisma.pratica.create({
     *   data: {
     *     // ... data to create a Pratica
     *   }
     * })
     * 
     */
    create<T extends praticaCreateArgs>(args: SelectSubset<T, praticaCreateArgs<ExtArgs>>): Prisma__praticaClient<$Result.GetResult<Prisma.$praticaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Praticas.
     * @param {praticaCreateManyArgs} args - Arguments to create many Praticas.
     * @example
     * // Create many Praticas
     * const pratica = await prisma.pratica.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends praticaCreateManyArgs>(args?: SelectSubset<T, praticaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Praticas and returns the data saved in the database.
     * @param {praticaCreateManyAndReturnArgs} args - Arguments to create many Praticas.
     * @example
     * // Create many Praticas
     * const pratica = await prisma.pratica.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Praticas and only return the `id`
     * const praticaWithIdOnly = await prisma.pratica.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends praticaCreateManyAndReturnArgs>(args?: SelectSubset<T, praticaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$praticaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pratica.
     * @param {praticaDeleteArgs} args - Arguments to delete one Pratica.
     * @example
     * // Delete one Pratica
     * const Pratica = await prisma.pratica.delete({
     *   where: {
     *     // ... filter to delete one Pratica
     *   }
     * })
     * 
     */
    delete<T extends praticaDeleteArgs>(args: SelectSubset<T, praticaDeleteArgs<ExtArgs>>): Prisma__praticaClient<$Result.GetResult<Prisma.$praticaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pratica.
     * @param {praticaUpdateArgs} args - Arguments to update one Pratica.
     * @example
     * // Update one Pratica
     * const pratica = await prisma.pratica.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends praticaUpdateArgs>(args: SelectSubset<T, praticaUpdateArgs<ExtArgs>>): Prisma__praticaClient<$Result.GetResult<Prisma.$praticaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Praticas.
     * @param {praticaDeleteManyArgs} args - Arguments to filter Praticas to delete.
     * @example
     * // Delete a few Praticas
     * const { count } = await prisma.pratica.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends praticaDeleteManyArgs>(args?: SelectSubset<T, praticaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Praticas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {praticaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Praticas
     * const pratica = await prisma.pratica.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends praticaUpdateManyArgs>(args: SelectSubset<T, praticaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Praticas and returns the data updated in the database.
     * @param {praticaUpdateManyAndReturnArgs} args - Arguments to update many Praticas.
     * @example
     * // Update many Praticas
     * const pratica = await prisma.pratica.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Praticas and only return the `id`
     * const praticaWithIdOnly = await prisma.pratica.updateManyAndReturn({
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
    updateManyAndReturn<T extends praticaUpdateManyAndReturnArgs>(args: SelectSubset<T, praticaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$praticaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pratica.
     * @param {praticaUpsertArgs} args - Arguments to update or create a Pratica.
     * @example
     * // Update or create a Pratica
     * const pratica = await prisma.pratica.upsert({
     *   create: {
     *     // ... data to create a Pratica
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pratica we want to update
     *   }
     * })
     */
    upsert<T extends praticaUpsertArgs>(args: SelectSubset<T, praticaUpsertArgs<ExtArgs>>): Prisma__praticaClient<$Result.GetResult<Prisma.$praticaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Praticas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {praticaCountArgs} args - Arguments to filter Praticas to count.
     * @example
     * // Count the number of Praticas
     * const count = await prisma.pratica.count({
     *   where: {
     *     // ... the filter for the Praticas we want to count
     *   }
     * })
    **/
    count<T extends praticaCountArgs>(
      args?: Subset<T, praticaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PraticaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pratica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PraticaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PraticaAggregateArgs>(args: Subset<T, PraticaAggregateArgs>): Prisma.PrismaPromise<GetPraticaAggregateType<T>>

    /**
     * Group by Pratica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {praticaGroupByArgs} args - Group by arguments.
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
      T extends praticaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: praticaGroupByArgs['orderBy'] }
        : { orderBy?: praticaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, praticaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPraticaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pratica model
   */
  readonly fields: praticaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pratica.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__praticaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mindcard<T extends pratica$mindcardArgs<ExtArgs> = {}>(args?: Subset<T, pratica$mindcardArgs<ExtArgs>>): Prisma__mindcardClient<$Result.GetResult<Prisma.$mindcardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the pratica model
   */
  interface praticaFieldRefs {
    readonly id: FieldRef<"pratica", 'String'>
    readonly usuario_id: FieldRef<"pratica", 'String'>
    readonly mindcard_id: FieldRef<"pratica", 'String'>
    readonly acertos: FieldRef<"pratica", 'Int'>
    readonly erros: FieldRef<"pratica", 'Int'>
    readonly sequencia_conquistada: FieldRef<"pratica", 'Int'>
    readonly xp_ganho: FieldRef<"pratica", 'Int'>
    readonly data_pratica: FieldRef<"pratica", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * pratica findUnique
   */
  export type praticaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pratica
     */
    select?: praticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pratica
     */
    omit?: praticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: praticaInclude<ExtArgs> | null
    /**
     * Filter, which pratica to fetch.
     */
    where: praticaWhereUniqueInput
  }

  /**
   * pratica findUniqueOrThrow
   */
  export type praticaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pratica
     */
    select?: praticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pratica
     */
    omit?: praticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: praticaInclude<ExtArgs> | null
    /**
     * Filter, which pratica to fetch.
     */
    where: praticaWhereUniqueInput
  }

  /**
   * pratica findFirst
   */
  export type praticaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pratica
     */
    select?: praticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pratica
     */
    omit?: praticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: praticaInclude<ExtArgs> | null
    /**
     * Filter, which pratica to fetch.
     */
    where?: praticaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of praticas to fetch.
     */
    orderBy?: praticaOrderByWithRelationInput | praticaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for praticas.
     */
    cursor?: praticaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` praticas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` praticas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of praticas.
     */
    distinct?: PraticaScalarFieldEnum | PraticaScalarFieldEnum[]
  }

  /**
   * pratica findFirstOrThrow
   */
  export type praticaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pratica
     */
    select?: praticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pratica
     */
    omit?: praticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: praticaInclude<ExtArgs> | null
    /**
     * Filter, which pratica to fetch.
     */
    where?: praticaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of praticas to fetch.
     */
    orderBy?: praticaOrderByWithRelationInput | praticaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for praticas.
     */
    cursor?: praticaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` praticas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` praticas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of praticas.
     */
    distinct?: PraticaScalarFieldEnum | PraticaScalarFieldEnum[]
  }

  /**
   * pratica findMany
   */
  export type praticaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pratica
     */
    select?: praticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pratica
     */
    omit?: praticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: praticaInclude<ExtArgs> | null
    /**
     * Filter, which praticas to fetch.
     */
    where?: praticaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of praticas to fetch.
     */
    orderBy?: praticaOrderByWithRelationInput | praticaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing praticas.
     */
    cursor?: praticaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` praticas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` praticas.
     */
    skip?: number
    distinct?: PraticaScalarFieldEnum | PraticaScalarFieldEnum[]
  }

  /**
   * pratica create
   */
  export type praticaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pratica
     */
    select?: praticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pratica
     */
    omit?: praticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: praticaInclude<ExtArgs> | null
    /**
     * The data needed to create a pratica.
     */
    data: XOR<praticaCreateInput, praticaUncheckedCreateInput>
  }

  /**
   * pratica createMany
   */
  export type praticaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many praticas.
     */
    data: praticaCreateManyInput | praticaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pratica createManyAndReturn
   */
  export type praticaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pratica
     */
    select?: praticaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pratica
     */
    omit?: praticaOmit<ExtArgs> | null
    /**
     * The data used to create many praticas.
     */
    data: praticaCreateManyInput | praticaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: praticaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pratica update
   */
  export type praticaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pratica
     */
    select?: praticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pratica
     */
    omit?: praticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: praticaInclude<ExtArgs> | null
    /**
     * The data needed to update a pratica.
     */
    data: XOR<praticaUpdateInput, praticaUncheckedUpdateInput>
    /**
     * Choose, which pratica to update.
     */
    where: praticaWhereUniqueInput
  }

  /**
   * pratica updateMany
   */
  export type praticaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update praticas.
     */
    data: XOR<praticaUpdateManyMutationInput, praticaUncheckedUpdateManyInput>
    /**
     * Filter which praticas to update
     */
    where?: praticaWhereInput
    /**
     * Limit how many praticas to update.
     */
    limit?: number
  }

  /**
   * pratica updateManyAndReturn
   */
  export type praticaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pratica
     */
    select?: praticaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pratica
     */
    omit?: praticaOmit<ExtArgs> | null
    /**
     * The data used to update praticas.
     */
    data: XOR<praticaUpdateManyMutationInput, praticaUncheckedUpdateManyInput>
    /**
     * Filter which praticas to update
     */
    where?: praticaWhereInput
    /**
     * Limit how many praticas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: praticaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pratica upsert
   */
  export type praticaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pratica
     */
    select?: praticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pratica
     */
    omit?: praticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: praticaInclude<ExtArgs> | null
    /**
     * The filter to search for the pratica to update in case it exists.
     */
    where: praticaWhereUniqueInput
    /**
     * In case the pratica found by the `where` argument doesn't exist, create a new pratica with this data.
     */
    create: XOR<praticaCreateInput, praticaUncheckedCreateInput>
    /**
     * In case the pratica was found with the provided `where` argument, update it with this data.
     */
    update: XOR<praticaUpdateInput, praticaUncheckedUpdateInput>
  }

  /**
   * pratica delete
   */
  export type praticaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pratica
     */
    select?: praticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pratica
     */
    omit?: praticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: praticaInclude<ExtArgs> | null
    /**
     * Filter which pratica to delete.
     */
    where: praticaWhereUniqueInput
  }

  /**
   * pratica deleteMany
   */
  export type praticaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which praticas to delete
     */
    where?: praticaWhereInput
    /**
     * Limit how many praticas to delete.
     */
    limit?: number
  }

  /**
   * pratica.mindcard
   */
  export type pratica$mindcardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mindcard
     */
    select?: mindcardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mindcard
     */
    omit?: mindcardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mindcardInclude<ExtArgs> | null
    where?: mindcardWhereInput
  }

  /**
   * pratica without action
   */
  export type praticaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pratica
     */
    select?: praticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pratica
     */
    omit?: praticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: praticaInclude<ExtArgs> | null
  }


  /**
   * Model faculdade
   */

  export type AggregateFaculdade = {
    _count: FaculdadeCountAggregateOutputType | null
    _avg: FaculdadeAvgAggregateOutputType | null
    _sum: FaculdadeSumAggregateOutputType | null
    _min: FaculdadeMinAggregateOutputType | null
    _max: FaculdadeMaxAggregateOutputType | null
  }

  export type FaculdadeAvgAggregateOutputType = {
    codigo_ies: number | null
  }

  export type FaculdadeSumAggregateOutputType = {
    codigo_ies: number | null
  }

  export type FaculdadeMinAggregateOutputType = {
    id: string | null
    codigo_ies: number | null
    nome: string | null
    sigla: string | null
    categoria: $Enums.CategoriaIES | null
    organizacao_academica: string | null
    codigo_municipio_ibge: string | null
    municipio: string | null
    uf: string | null
    situacao: $Enums.SituacaoIES | null
  }

  export type FaculdadeMaxAggregateOutputType = {
    id: string | null
    codigo_ies: number | null
    nome: string | null
    sigla: string | null
    categoria: $Enums.CategoriaIES | null
    organizacao_academica: string | null
    codigo_municipio_ibge: string | null
    municipio: string | null
    uf: string | null
    situacao: $Enums.SituacaoIES | null
  }

  export type FaculdadeCountAggregateOutputType = {
    id: number
    codigo_ies: number
    nome: number
    sigla: number
    categoria: number
    organizacao_academica: number
    codigo_municipio_ibge: number
    municipio: number
    uf: number
    situacao: number
    _all: number
  }


  export type FaculdadeAvgAggregateInputType = {
    codigo_ies?: true
  }

  export type FaculdadeSumAggregateInputType = {
    codigo_ies?: true
  }

  export type FaculdadeMinAggregateInputType = {
    id?: true
    codigo_ies?: true
    nome?: true
    sigla?: true
    categoria?: true
    organizacao_academica?: true
    codigo_municipio_ibge?: true
    municipio?: true
    uf?: true
    situacao?: true
  }

  export type FaculdadeMaxAggregateInputType = {
    id?: true
    codigo_ies?: true
    nome?: true
    sigla?: true
    categoria?: true
    organizacao_academica?: true
    codigo_municipio_ibge?: true
    municipio?: true
    uf?: true
    situacao?: true
  }

  export type FaculdadeCountAggregateInputType = {
    id?: true
    codigo_ies?: true
    nome?: true
    sigla?: true
    categoria?: true
    organizacao_academica?: true
    codigo_municipio_ibge?: true
    municipio?: true
    uf?: true
    situacao?: true
    _all?: true
  }

  export type FaculdadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which faculdade to aggregate.
     */
    where?: faculdadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of faculdades to fetch.
     */
    orderBy?: faculdadeOrderByWithRelationInput | faculdadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: faculdadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` faculdades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` faculdades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned faculdades
    **/
    _count?: true | FaculdadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FaculdadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FaculdadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FaculdadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FaculdadeMaxAggregateInputType
  }

  export type GetFaculdadeAggregateType<T extends FaculdadeAggregateArgs> = {
        [P in keyof T & keyof AggregateFaculdade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFaculdade[P]>
      : GetScalarType<T[P], AggregateFaculdade[P]>
  }




  export type faculdadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: faculdadeWhereInput
    orderBy?: faculdadeOrderByWithAggregationInput | faculdadeOrderByWithAggregationInput[]
    by: FaculdadeScalarFieldEnum[] | FaculdadeScalarFieldEnum
    having?: faculdadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FaculdadeCountAggregateInputType | true
    _avg?: FaculdadeAvgAggregateInputType
    _sum?: FaculdadeSumAggregateInputType
    _min?: FaculdadeMinAggregateInputType
    _max?: FaculdadeMaxAggregateInputType
  }

  export type FaculdadeGroupByOutputType = {
    id: string
    codigo_ies: number
    nome: string
    sigla: string | null
    categoria: $Enums.CategoriaIES | null
    organizacao_academica: string | null
    codigo_municipio_ibge: string | null
    municipio: string
    uf: string
    situacao: $Enums.SituacaoIES
    _count: FaculdadeCountAggregateOutputType | null
    _avg: FaculdadeAvgAggregateOutputType | null
    _sum: FaculdadeSumAggregateOutputType | null
    _min: FaculdadeMinAggregateOutputType | null
    _max: FaculdadeMaxAggregateOutputType | null
  }

  type GetFaculdadeGroupByPayload<T extends faculdadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FaculdadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FaculdadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FaculdadeGroupByOutputType[P]>
            : GetScalarType<T[P], FaculdadeGroupByOutputType[P]>
        }
      >
    >


  export type faculdadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo_ies?: boolean
    nome?: boolean
    sigla?: boolean
    categoria?: boolean
    organizacao_academica?: boolean
    codigo_municipio_ibge?: boolean
    municipio?: boolean
    uf?: boolean
    situacao?: boolean
    usuarios?: boolean | faculdade$usuariosArgs<ExtArgs>
    _count?: boolean | FaculdadeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["faculdade"]>

  export type faculdadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo_ies?: boolean
    nome?: boolean
    sigla?: boolean
    categoria?: boolean
    organizacao_academica?: boolean
    codigo_municipio_ibge?: boolean
    municipio?: boolean
    uf?: boolean
    situacao?: boolean
  }, ExtArgs["result"]["faculdade"]>

  export type faculdadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo_ies?: boolean
    nome?: boolean
    sigla?: boolean
    categoria?: boolean
    organizacao_academica?: boolean
    codigo_municipio_ibge?: boolean
    municipio?: boolean
    uf?: boolean
    situacao?: boolean
  }, ExtArgs["result"]["faculdade"]>

  export type faculdadeSelectScalar = {
    id?: boolean
    codigo_ies?: boolean
    nome?: boolean
    sigla?: boolean
    categoria?: boolean
    organizacao_academica?: boolean
    codigo_municipio_ibge?: boolean
    municipio?: boolean
    uf?: boolean
    situacao?: boolean
  }

  export type faculdadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigo_ies" | "nome" | "sigla" | "categoria" | "organizacao_academica" | "codigo_municipio_ibge" | "municipio" | "uf" | "situacao", ExtArgs["result"]["faculdade"]>
  export type faculdadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | faculdade$usuariosArgs<ExtArgs>
    _count?: boolean | FaculdadeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type faculdadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type faculdadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $faculdadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "faculdade"
    objects: {
      usuarios: Prisma.$usuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      codigo_ies: number
      nome: string
      sigla: string | null
      categoria: $Enums.CategoriaIES | null
      organizacao_academica: string | null
      codigo_municipio_ibge: string | null
      municipio: string
      uf: string
      situacao: $Enums.SituacaoIES
    }, ExtArgs["result"]["faculdade"]>
    composites: {}
  }

  type faculdadeGetPayload<S extends boolean | null | undefined | faculdadeDefaultArgs> = $Result.GetResult<Prisma.$faculdadePayload, S>

  type faculdadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<faculdadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FaculdadeCountAggregateInputType | true
    }

  export interface faculdadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['faculdade'], meta: { name: 'faculdade' } }
    /**
     * Find zero or one Faculdade that matches the filter.
     * @param {faculdadeFindUniqueArgs} args - Arguments to find a Faculdade
     * @example
     * // Get one Faculdade
     * const faculdade = await prisma.faculdade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends faculdadeFindUniqueArgs>(args: SelectSubset<T, faculdadeFindUniqueArgs<ExtArgs>>): Prisma__faculdadeClient<$Result.GetResult<Prisma.$faculdadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Faculdade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {faculdadeFindUniqueOrThrowArgs} args - Arguments to find a Faculdade
     * @example
     * // Get one Faculdade
     * const faculdade = await prisma.faculdade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends faculdadeFindUniqueOrThrowArgs>(args: SelectSubset<T, faculdadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__faculdadeClient<$Result.GetResult<Prisma.$faculdadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faculdade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {faculdadeFindFirstArgs} args - Arguments to find a Faculdade
     * @example
     * // Get one Faculdade
     * const faculdade = await prisma.faculdade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends faculdadeFindFirstArgs>(args?: SelectSubset<T, faculdadeFindFirstArgs<ExtArgs>>): Prisma__faculdadeClient<$Result.GetResult<Prisma.$faculdadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faculdade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {faculdadeFindFirstOrThrowArgs} args - Arguments to find a Faculdade
     * @example
     * // Get one Faculdade
     * const faculdade = await prisma.faculdade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends faculdadeFindFirstOrThrowArgs>(args?: SelectSubset<T, faculdadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__faculdadeClient<$Result.GetResult<Prisma.$faculdadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Faculdades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {faculdadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Faculdades
     * const faculdades = await prisma.faculdade.findMany()
     * 
     * // Get first 10 Faculdades
     * const faculdades = await prisma.faculdade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const faculdadeWithIdOnly = await prisma.faculdade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends faculdadeFindManyArgs>(args?: SelectSubset<T, faculdadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$faculdadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Faculdade.
     * @param {faculdadeCreateArgs} args - Arguments to create a Faculdade.
     * @example
     * // Create one Faculdade
     * const Faculdade = await prisma.faculdade.create({
     *   data: {
     *     // ... data to create a Faculdade
     *   }
     * })
     * 
     */
    create<T extends faculdadeCreateArgs>(args: SelectSubset<T, faculdadeCreateArgs<ExtArgs>>): Prisma__faculdadeClient<$Result.GetResult<Prisma.$faculdadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Faculdades.
     * @param {faculdadeCreateManyArgs} args - Arguments to create many Faculdades.
     * @example
     * // Create many Faculdades
     * const faculdade = await prisma.faculdade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends faculdadeCreateManyArgs>(args?: SelectSubset<T, faculdadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Faculdades and returns the data saved in the database.
     * @param {faculdadeCreateManyAndReturnArgs} args - Arguments to create many Faculdades.
     * @example
     * // Create many Faculdades
     * const faculdade = await prisma.faculdade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Faculdades and only return the `id`
     * const faculdadeWithIdOnly = await prisma.faculdade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends faculdadeCreateManyAndReturnArgs>(args?: SelectSubset<T, faculdadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$faculdadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Faculdade.
     * @param {faculdadeDeleteArgs} args - Arguments to delete one Faculdade.
     * @example
     * // Delete one Faculdade
     * const Faculdade = await prisma.faculdade.delete({
     *   where: {
     *     // ... filter to delete one Faculdade
     *   }
     * })
     * 
     */
    delete<T extends faculdadeDeleteArgs>(args: SelectSubset<T, faculdadeDeleteArgs<ExtArgs>>): Prisma__faculdadeClient<$Result.GetResult<Prisma.$faculdadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Faculdade.
     * @param {faculdadeUpdateArgs} args - Arguments to update one Faculdade.
     * @example
     * // Update one Faculdade
     * const faculdade = await prisma.faculdade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends faculdadeUpdateArgs>(args: SelectSubset<T, faculdadeUpdateArgs<ExtArgs>>): Prisma__faculdadeClient<$Result.GetResult<Prisma.$faculdadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Faculdades.
     * @param {faculdadeDeleteManyArgs} args - Arguments to filter Faculdades to delete.
     * @example
     * // Delete a few Faculdades
     * const { count } = await prisma.faculdade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends faculdadeDeleteManyArgs>(args?: SelectSubset<T, faculdadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faculdades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {faculdadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Faculdades
     * const faculdade = await prisma.faculdade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends faculdadeUpdateManyArgs>(args: SelectSubset<T, faculdadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faculdades and returns the data updated in the database.
     * @param {faculdadeUpdateManyAndReturnArgs} args - Arguments to update many Faculdades.
     * @example
     * // Update many Faculdades
     * const faculdade = await prisma.faculdade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Faculdades and only return the `id`
     * const faculdadeWithIdOnly = await prisma.faculdade.updateManyAndReturn({
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
    updateManyAndReturn<T extends faculdadeUpdateManyAndReturnArgs>(args: SelectSubset<T, faculdadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$faculdadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Faculdade.
     * @param {faculdadeUpsertArgs} args - Arguments to update or create a Faculdade.
     * @example
     * // Update or create a Faculdade
     * const faculdade = await prisma.faculdade.upsert({
     *   create: {
     *     // ... data to create a Faculdade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Faculdade we want to update
     *   }
     * })
     */
    upsert<T extends faculdadeUpsertArgs>(args: SelectSubset<T, faculdadeUpsertArgs<ExtArgs>>): Prisma__faculdadeClient<$Result.GetResult<Prisma.$faculdadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Faculdades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {faculdadeCountArgs} args - Arguments to filter Faculdades to count.
     * @example
     * // Count the number of Faculdades
     * const count = await prisma.faculdade.count({
     *   where: {
     *     // ... the filter for the Faculdades we want to count
     *   }
     * })
    **/
    count<T extends faculdadeCountArgs>(
      args?: Subset<T, faculdadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FaculdadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Faculdade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaculdadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FaculdadeAggregateArgs>(args: Subset<T, FaculdadeAggregateArgs>): Prisma.PrismaPromise<GetFaculdadeAggregateType<T>>

    /**
     * Group by Faculdade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {faculdadeGroupByArgs} args - Group by arguments.
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
      T extends faculdadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: faculdadeGroupByArgs['orderBy'] }
        : { orderBy?: faculdadeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, faculdadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFaculdadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the faculdade model
   */
  readonly fields: faculdadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for faculdade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__faculdadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends faculdade$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, faculdade$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the faculdade model
   */
  interface faculdadeFieldRefs {
    readonly id: FieldRef<"faculdade", 'String'>
    readonly codigo_ies: FieldRef<"faculdade", 'Int'>
    readonly nome: FieldRef<"faculdade", 'String'>
    readonly sigla: FieldRef<"faculdade", 'String'>
    readonly categoria: FieldRef<"faculdade", 'CategoriaIES'>
    readonly organizacao_academica: FieldRef<"faculdade", 'String'>
    readonly codigo_municipio_ibge: FieldRef<"faculdade", 'String'>
    readonly municipio: FieldRef<"faculdade", 'String'>
    readonly uf: FieldRef<"faculdade", 'String'>
    readonly situacao: FieldRef<"faculdade", 'SituacaoIES'>
  }
    

  // Custom InputTypes
  /**
   * faculdade findUnique
   */
  export type faculdadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faculdade
     */
    select?: faculdadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faculdade
     */
    omit?: faculdadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: faculdadeInclude<ExtArgs> | null
    /**
     * Filter, which faculdade to fetch.
     */
    where: faculdadeWhereUniqueInput
  }

  /**
   * faculdade findUniqueOrThrow
   */
  export type faculdadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faculdade
     */
    select?: faculdadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faculdade
     */
    omit?: faculdadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: faculdadeInclude<ExtArgs> | null
    /**
     * Filter, which faculdade to fetch.
     */
    where: faculdadeWhereUniqueInput
  }

  /**
   * faculdade findFirst
   */
  export type faculdadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faculdade
     */
    select?: faculdadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faculdade
     */
    omit?: faculdadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: faculdadeInclude<ExtArgs> | null
    /**
     * Filter, which faculdade to fetch.
     */
    where?: faculdadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of faculdades to fetch.
     */
    orderBy?: faculdadeOrderByWithRelationInput | faculdadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for faculdades.
     */
    cursor?: faculdadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` faculdades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` faculdades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of faculdades.
     */
    distinct?: FaculdadeScalarFieldEnum | FaculdadeScalarFieldEnum[]
  }

  /**
   * faculdade findFirstOrThrow
   */
  export type faculdadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faculdade
     */
    select?: faculdadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faculdade
     */
    omit?: faculdadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: faculdadeInclude<ExtArgs> | null
    /**
     * Filter, which faculdade to fetch.
     */
    where?: faculdadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of faculdades to fetch.
     */
    orderBy?: faculdadeOrderByWithRelationInput | faculdadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for faculdades.
     */
    cursor?: faculdadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` faculdades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` faculdades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of faculdades.
     */
    distinct?: FaculdadeScalarFieldEnum | FaculdadeScalarFieldEnum[]
  }

  /**
   * faculdade findMany
   */
  export type faculdadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faculdade
     */
    select?: faculdadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faculdade
     */
    omit?: faculdadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: faculdadeInclude<ExtArgs> | null
    /**
     * Filter, which faculdades to fetch.
     */
    where?: faculdadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of faculdades to fetch.
     */
    orderBy?: faculdadeOrderByWithRelationInput | faculdadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing faculdades.
     */
    cursor?: faculdadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` faculdades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` faculdades.
     */
    skip?: number
    distinct?: FaculdadeScalarFieldEnum | FaculdadeScalarFieldEnum[]
  }

  /**
   * faculdade create
   */
  export type faculdadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faculdade
     */
    select?: faculdadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faculdade
     */
    omit?: faculdadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: faculdadeInclude<ExtArgs> | null
    /**
     * The data needed to create a faculdade.
     */
    data: XOR<faculdadeCreateInput, faculdadeUncheckedCreateInput>
  }

  /**
   * faculdade createMany
   */
  export type faculdadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many faculdades.
     */
    data: faculdadeCreateManyInput | faculdadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * faculdade createManyAndReturn
   */
  export type faculdadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faculdade
     */
    select?: faculdadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the faculdade
     */
    omit?: faculdadeOmit<ExtArgs> | null
    /**
     * The data used to create many faculdades.
     */
    data: faculdadeCreateManyInput | faculdadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * faculdade update
   */
  export type faculdadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faculdade
     */
    select?: faculdadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faculdade
     */
    omit?: faculdadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: faculdadeInclude<ExtArgs> | null
    /**
     * The data needed to update a faculdade.
     */
    data: XOR<faculdadeUpdateInput, faculdadeUncheckedUpdateInput>
    /**
     * Choose, which faculdade to update.
     */
    where: faculdadeWhereUniqueInput
  }

  /**
   * faculdade updateMany
   */
  export type faculdadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update faculdades.
     */
    data: XOR<faculdadeUpdateManyMutationInput, faculdadeUncheckedUpdateManyInput>
    /**
     * Filter which faculdades to update
     */
    where?: faculdadeWhereInput
    /**
     * Limit how many faculdades to update.
     */
    limit?: number
  }

  /**
   * faculdade updateManyAndReturn
   */
  export type faculdadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faculdade
     */
    select?: faculdadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the faculdade
     */
    omit?: faculdadeOmit<ExtArgs> | null
    /**
     * The data used to update faculdades.
     */
    data: XOR<faculdadeUpdateManyMutationInput, faculdadeUncheckedUpdateManyInput>
    /**
     * Filter which faculdades to update
     */
    where?: faculdadeWhereInput
    /**
     * Limit how many faculdades to update.
     */
    limit?: number
  }

  /**
   * faculdade upsert
   */
  export type faculdadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faculdade
     */
    select?: faculdadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faculdade
     */
    omit?: faculdadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: faculdadeInclude<ExtArgs> | null
    /**
     * The filter to search for the faculdade to update in case it exists.
     */
    where: faculdadeWhereUniqueInput
    /**
     * In case the faculdade found by the `where` argument doesn't exist, create a new faculdade with this data.
     */
    create: XOR<faculdadeCreateInput, faculdadeUncheckedCreateInput>
    /**
     * In case the faculdade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<faculdadeUpdateInput, faculdadeUncheckedUpdateInput>
  }

  /**
   * faculdade delete
   */
  export type faculdadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faculdade
     */
    select?: faculdadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faculdade
     */
    omit?: faculdadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: faculdadeInclude<ExtArgs> | null
    /**
     * Filter which faculdade to delete.
     */
    where: faculdadeWhereUniqueInput
  }

  /**
   * faculdade deleteMany
   */
  export type faculdadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which faculdades to delete
     */
    where?: faculdadeWhereInput
    /**
     * Limit how many faculdades to delete.
     */
    limit?: number
  }

  /**
   * faculdade.usuarios
   */
  export type faculdade$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    cursor?: usuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * faculdade without action
   */
  export type faculdadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faculdade
     */
    select?: faculdadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faculdade
     */
    omit?: faculdadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: faculdadeInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    usuario: 'usuario',
    email: 'email',
    senha: 'senha',
    faculdade_id: 'faculdade_id',
    idioma: 'idioma',
    data_registro: 'data_registro',
    xp_total: 'xp_total',
    sequencia_atual: 'sequencia_atual',
    sequencia_recorde: 'sequencia_recorde'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const MindcardScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    fonte_arquivo: 'fonte_arquivo',
    prompt_personalizado: 'prompt_personalizado',
    usuario_id: 'usuario_id',
    data_criacao: 'data_criacao',
    status_processamento: 'status_processamento',
    job_id: 'job_id',
    mensagem_erro: 'mensagem_erro',
    iniciado_em: 'iniciado_em',
    concluido_em: 'concluido_em'
  };

  export type MindcardScalarFieldEnum = (typeof MindcardScalarFieldEnum)[keyof typeof MindcardScalarFieldEnum]


  export const CardScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    tipo: 'tipo',
    dificuldade: 'dificuldade',
    pergunta: 'pergunta',
    resposta_correta: 'resposta_correta',
    alternativa_texto: 'alternativa_texto',
    mindcard_id: 'mindcard_id'
  };

  export type CardScalarFieldEnum = (typeof CardScalarFieldEnum)[keyof typeof CardScalarFieldEnum]


  export const Opcao_respostaScalarFieldEnum: {
    id: 'id',
    texto: 'texto',
    correta: 'correta',
    card_id: 'card_id'
  };

  export type Opcao_respostaScalarFieldEnum = (typeof Opcao_respostaScalarFieldEnum)[keyof typeof Opcao_respostaScalarFieldEnum]


  export const PraticaScalarFieldEnum: {
    id: 'id',
    usuario_id: 'usuario_id',
    mindcard_id: 'mindcard_id',
    acertos: 'acertos',
    erros: 'erros',
    sequencia_conquistada: 'sequencia_conquistada',
    xp_ganho: 'xp_ganho',
    data_pratica: 'data_pratica'
  };

  export type PraticaScalarFieldEnum = (typeof PraticaScalarFieldEnum)[keyof typeof PraticaScalarFieldEnum]


  export const FaculdadeScalarFieldEnum: {
    id: 'id',
    codigo_ies: 'codigo_ies',
    nome: 'nome',
    sigla: 'sigla',
    categoria: 'categoria',
    organizacao_academica: 'organizacao_academica',
    codigo_municipio_ibge: 'codigo_municipio_ibge',
    municipio: 'municipio',
    uf: 'uf',
    situacao: 'situacao'
  };

  export type FaculdadeScalarFieldEnum = (typeof FaculdadeScalarFieldEnum)[keyof typeof FaculdadeScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'StatusProcessamento'
   */
  export type EnumStatusProcessamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusProcessamento'>
    


  /**
   * Reference to a field of type 'StatusProcessamento[]'
   */
  export type ListEnumStatusProcessamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusProcessamento[]'>
    


  /**
   * Reference to a field of type 'tipo_card'
   */
  export type Enumtipo_cardFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tipo_card'>
    


  /**
   * Reference to a field of type 'tipo_card[]'
   */
  export type ListEnumtipo_cardFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tipo_card[]'>
    


  /**
   * Reference to a field of type 'dificuldade'
   */
  export type EnumdificuldadeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'dificuldade'>
    


  /**
   * Reference to a field of type 'dificuldade[]'
   */
  export type ListEnumdificuldadeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'dificuldade[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'CategoriaIES'
   */
  export type EnumCategoriaIESFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoriaIES'>
    


  /**
   * Reference to a field of type 'CategoriaIES[]'
   */
  export type ListEnumCategoriaIESFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoriaIES[]'>
    


  /**
   * Reference to a field of type 'SituacaoIES'
   */
  export type EnumSituacaoIESFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SituacaoIES'>
    


  /**
   * Reference to a field of type 'SituacaoIES[]'
   */
  export type ListEnumSituacaoIESFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SituacaoIES[]'>
    


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


  export type usuarioWhereInput = {
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    id?: StringFilter<"usuario"> | string
    nome?: StringFilter<"usuario"> | string
    usuario?: StringFilter<"usuario"> | string
    email?: StringFilter<"usuario"> | string
    senha?: StringFilter<"usuario"> | string
    faculdade_id?: StringNullableFilter<"usuario"> | string | null
    idioma?: StringFilter<"usuario"> | string
    data_registro?: DateTimeFilter<"usuario"> | Date | string
    xp_total?: IntFilter<"usuario"> | number
    sequencia_atual?: IntFilter<"usuario"> | number
    sequencia_recorde?: IntFilter<"usuario"> | number
    faculdade?: XOR<FaculdadeNullableScalarRelationFilter, faculdadeWhereInput> | null
    mindcards?: MindcardListRelationFilter
    praticas?: PraticaListRelationFilter
  }

  export type usuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    usuario?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    faculdade_id?: SortOrderInput | SortOrder
    idioma?: SortOrder
    data_registro?: SortOrder
    xp_total?: SortOrder
    sequencia_atual?: SortOrder
    sequencia_recorde?: SortOrder
    faculdade?: faculdadeOrderByWithRelationInput
    mindcards?: mindcardOrderByRelationAggregateInput
    praticas?: praticaOrderByRelationAggregateInput
  }

  export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    usuario?: string
    email?: string
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    nome?: StringFilter<"usuario"> | string
    senha?: StringFilter<"usuario"> | string
    faculdade_id?: StringNullableFilter<"usuario"> | string | null
    idioma?: StringFilter<"usuario"> | string
    data_registro?: DateTimeFilter<"usuario"> | Date | string
    xp_total?: IntFilter<"usuario"> | number
    sequencia_atual?: IntFilter<"usuario"> | number
    sequencia_recorde?: IntFilter<"usuario"> | number
    faculdade?: XOR<FaculdadeNullableScalarRelationFilter, faculdadeWhereInput> | null
    mindcards?: MindcardListRelationFilter
    praticas?: PraticaListRelationFilter
  }, "id" | "usuario" | "email">

  export type usuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    usuario?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    faculdade_id?: SortOrderInput | SortOrder
    idioma?: SortOrder
    data_registro?: SortOrder
    xp_total?: SortOrder
    sequencia_atual?: SortOrder
    sequencia_recorde?: SortOrder
    _count?: usuarioCountOrderByAggregateInput
    _avg?: usuarioAvgOrderByAggregateInput
    _max?: usuarioMaxOrderByAggregateInput
    _min?: usuarioMinOrderByAggregateInput
    _sum?: usuarioSumOrderByAggregateInput
  }

  export type usuarioScalarWhereWithAggregatesInput = {
    AND?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    OR?: usuarioScalarWhereWithAggregatesInput[]
    NOT?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"usuario"> | string
    nome?: StringWithAggregatesFilter<"usuario"> | string
    usuario?: StringWithAggregatesFilter<"usuario"> | string
    email?: StringWithAggregatesFilter<"usuario"> | string
    senha?: StringWithAggregatesFilter<"usuario"> | string
    faculdade_id?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    idioma?: StringWithAggregatesFilter<"usuario"> | string
    data_registro?: DateTimeWithAggregatesFilter<"usuario"> | Date | string
    xp_total?: IntWithAggregatesFilter<"usuario"> | number
    sequencia_atual?: IntWithAggregatesFilter<"usuario"> | number
    sequencia_recorde?: IntWithAggregatesFilter<"usuario"> | number
  }

  export type mindcardWhereInput = {
    AND?: mindcardWhereInput | mindcardWhereInput[]
    OR?: mindcardWhereInput[]
    NOT?: mindcardWhereInput | mindcardWhereInput[]
    id?: StringFilter<"mindcard"> | string
    titulo?: StringFilter<"mindcard"> | string
    fonte_arquivo?: StringNullableFilter<"mindcard"> | string | null
    prompt_personalizado?: StringNullableFilter<"mindcard"> | string | null
    usuario_id?: StringFilter<"mindcard"> | string
    data_criacao?: DateTimeFilter<"mindcard"> | Date | string
    status_processamento?: EnumStatusProcessamentoFilter<"mindcard"> | $Enums.StatusProcessamento
    job_id?: StringNullableFilter<"mindcard"> | string | null
    mensagem_erro?: StringNullableFilter<"mindcard"> | string | null
    iniciado_em?: DateTimeNullableFilter<"mindcard"> | Date | string | null
    concluido_em?: DateTimeNullableFilter<"mindcard"> | Date | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    cards?: CardListRelationFilter
    praticas?: PraticaListRelationFilter
  }

  export type mindcardOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    fonte_arquivo?: SortOrderInput | SortOrder
    prompt_personalizado?: SortOrderInput | SortOrder
    usuario_id?: SortOrder
    data_criacao?: SortOrder
    status_processamento?: SortOrder
    job_id?: SortOrderInput | SortOrder
    mensagem_erro?: SortOrderInput | SortOrder
    iniciado_em?: SortOrderInput | SortOrder
    concluido_em?: SortOrderInput | SortOrder
    usuario?: usuarioOrderByWithRelationInput
    cards?: cardOrderByRelationAggregateInput
    praticas?: praticaOrderByRelationAggregateInput
  }

  export type mindcardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    job_id?: string
    AND?: mindcardWhereInput | mindcardWhereInput[]
    OR?: mindcardWhereInput[]
    NOT?: mindcardWhereInput | mindcardWhereInput[]
    titulo?: StringFilter<"mindcard"> | string
    fonte_arquivo?: StringNullableFilter<"mindcard"> | string | null
    prompt_personalizado?: StringNullableFilter<"mindcard"> | string | null
    usuario_id?: StringFilter<"mindcard"> | string
    data_criacao?: DateTimeFilter<"mindcard"> | Date | string
    status_processamento?: EnumStatusProcessamentoFilter<"mindcard"> | $Enums.StatusProcessamento
    mensagem_erro?: StringNullableFilter<"mindcard"> | string | null
    iniciado_em?: DateTimeNullableFilter<"mindcard"> | Date | string | null
    concluido_em?: DateTimeNullableFilter<"mindcard"> | Date | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    cards?: CardListRelationFilter
    praticas?: PraticaListRelationFilter
  }, "id" | "job_id">

  export type mindcardOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    fonte_arquivo?: SortOrderInput | SortOrder
    prompt_personalizado?: SortOrderInput | SortOrder
    usuario_id?: SortOrder
    data_criacao?: SortOrder
    status_processamento?: SortOrder
    job_id?: SortOrderInput | SortOrder
    mensagem_erro?: SortOrderInput | SortOrder
    iniciado_em?: SortOrderInput | SortOrder
    concluido_em?: SortOrderInput | SortOrder
    _count?: mindcardCountOrderByAggregateInput
    _max?: mindcardMaxOrderByAggregateInput
    _min?: mindcardMinOrderByAggregateInput
  }

  export type mindcardScalarWhereWithAggregatesInput = {
    AND?: mindcardScalarWhereWithAggregatesInput | mindcardScalarWhereWithAggregatesInput[]
    OR?: mindcardScalarWhereWithAggregatesInput[]
    NOT?: mindcardScalarWhereWithAggregatesInput | mindcardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"mindcard"> | string
    titulo?: StringWithAggregatesFilter<"mindcard"> | string
    fonte_arquivo?: StringNullableWithAggregatesFilter<"mindcard"> | string | null
    prompt_personalizado?: StringNullableWithAggregatesFilter<"mindcard"> | string | null
    usuario_id?: StringWithAggregatesFilter<"mindcard"> | string
    data_criacao?: DateTimeWithAggregatesFilter<"mindcard"> | Date | string
    status_processamento?: EnumStatusProcessamentoWithAggregatesFilter<"mindcard"> | $Enums.StatusProcessamento
    job_id?: StringNullableWithAggregatesFilter<"mindcard"> | string | null
    mensagem_erro?: StringNullableWithAggregatesFilter<"mindcard"> | string | null
    iniciado_em?: DateTimeNullableWithAggregatesFilter<"mindcard"> | Date | string | null
    concluido_em?: DateTimeNullableWithAggregatesFilter<"mindcard"> | Date | string | null
  }

  export type cardWhereInput = {
    AND?: cardWhereInput | cardWhereInput[]
    OR?: cardWhereInput[]
    NOT?: cardWhereInput | cardWhereInput[]
    id?: StringFilter<"card"> | string
    titulo?: StringFilter<"card"> | string
    tipo?: Enumtipo_cardFilter<"card"> | $Enums.tipo_card
    dificuldade?: EnumdificuldadeFilter<"card"> | $Enums.dificuldade
    pergunta?: StringFilter<"card"> | string
    resposta_correta?: StringNullableFilter<"card"> | string | null
    alternativa_texto?: StringNullableFilter<"card"> | string | null
    mindcard_id?: StringFilter<"card"> | string
    mindcard?: XOR<MindcardScalarRelationFilter, mindcardWhereInput>
    opcoes?: Opcao_respostaListRelationFilter
  }

  export type cardOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    tipo?: SortOrder
    dificuldade?: SortOrder
    pergunta?: SortOrder
    resposta_correta?: SortOrderInput | SortOrder
    alternativa_texto?: SortOrderInput | SortOrder
    mindcard_id?: SortOrder
    mindcard?: mindcardOrderByWithRelationInput
    opcoes?: opcao_respostaOrderByRelationAggregateInput
  }

  export type cardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: cardWhereInput | cardWhereInput[]
    OR?: cardWhereInput[]
    NOT?: cardWhereInput | cardWhereInput[]
    titulo?: StringFilter<"card"> | string
    tipo?: Enumtipo_cardFilter<"card"> | $Enums.tipo_card
    dificuldade?: EnumdificuldadeFilter<"card"> | $Enums.dificuldade
    pergunta?: StringFilter<"card"> | string
    resposta_correta?: StringNullableFilter<"card"> | string | null
    alternativa_texto?: StringNullableFilter<"card"> | string | null
    mindcard_id?: StringFilter<"card"> | string
    mindcard?: XOR<MindcardScalarRelationFilter, mindcardWhereInput>
    opcoes?: Opcao_respostaListRelationFilter
  }, "id">

  export type cardOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    tipo?: SortOrder
    dificuldade?: SortOrder
    pergunta?: SortOrder
    resposta_correta?: SortOrderInput | SortOrder
    alternativa_texto?: SortOrderInput | SortOrder
    mindcard_id?: SortOrder
    _count?: cardCountOrderByAggregateInput
    _max?: cardMaxOrderByAggregateInput
    _min?: cardMinOrderByAggregateInput
  }

  export type cardScalarWhereWithAggregatesInput = {
    AND?: cardScalarWhereWithAggregatesInput | cardScalarWhereWithAggregatesInput[]
    OR?: cardScalarWhereWithAggregatesInput[]
    NOT?: cardScalarWhereWithAggregatesInput | cardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"card"> | string
    titulo?: StringWithAggregatesFilter<"card"> | string
    tipo?: Enumtipo_cardWithAggregatesFilter<"card"> | $Enums.tipo_card
    dificuldade?: EnumdificuldadeWithAggregatesFilter<"card"> | $Enums.dificuldade
    pergunta?: StringWithAggregatesFilter<"card"> | string
    resposta_correta?: StringNullableWithAggregatesFilter<"card"> | string | null
    alternativa_texto?: StringNullableWithAggregatesFilter<"card"> | string | null
    mindcard_id?: StringWithAggregatesFilter<"card"> | string
  }

  export type opcao_respostaWhereInput = {
    AND?: opcao_respostaWhereInput | opcao_respostaWhereInput[]
    OR?: opcao_respostaWhereInput[]
    NOT?: opcao_respostaWhereInput | opcao_respostaWhereInput[]
    id?: StringFilter<"opcao_resposta"> | string
    texto?: StringFilter<"opcao_resposta"> | string
    correta?: BoolFilter<"opcao_resposta"> | boolean
    card_id?: StringFilter<"opcao_resposta"> | string
    card?: XOR<CardScalarRelationFilter, cardWhereInput>
  }

  export type opcao_respostaOrderByWithRelationInput = {
    id?: SortOrder
    texto?: SortOrder
    correta?: SortOrder
    card_id?: SortOrder
    card?: cardOrderByWithRelationInput
  }

  export type opcao_respostaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: opcao_respostaWhereInput | opcao_respostaWhereInput[]
    OR?: opcao_respostaWhereInput[]
    NOT?: opcao_respostaWhereInput | opcao_respostaWhereInput[]
    texto?: StringFilter<"opcao_resposta"> | string
    correta?: BoolFilter<"opcao_resposta"> | boolean
    card_id?: StringFilter<"opcao_resposta"> | string
    card?: XOR<CardScalarRelationFilter, cardWhereInput>
  }, "id">

  export type opcao_respostaOrderByWithAggregationInput = {
    id?: SortOrder
    texto?: SortOrder
    correta?: SortOrder
    card_id?: SortOrder
    _count?: opcao_respostaCountOrderByAggregateInput
    _max?: opcao_respostaMaxOrderByAggregateInput
    _min?: opcao_respostaMinOrderByAggregateInput
  }

  export type opcao_respostaScalarWhereWithAggregatesInput = {
    AND?: opcao_respostaScalarWhereWithAggregatesInput | opcao_respostaScalarWhereWithAggregatesInput[]
    OR?: opcao_respostaScalarWhereWithAggregatesInput[]
    NOT?: opcao_respostaScalarWhereWithAggregatesInput | opcao_respostaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"opcao_resposta"> | string
    texto?: StringWithAggregatesFilter<"opcao_resposta"> | string
    correta?: BoolWithAggregatesFilter<"opcao_resposta"> | boolean
    card_id?: StringWithAggregatesFilter<"opcao_resposta"> | string
  }

  export type praticaWhereInput = {
    AND?: praticaWhereInput | praticaWhereInput[]
    OR?: praticaWhereInput[]
    NOT?: praticaWhereInput | praticaWhereInput[]
    id?: StringFilter<"pratica"> | string
    usuario_id?: StringFilter<"pratica"> | string
    mindcard_id?: StringNullableFilter<"pratica"> | string | null
    acertos?: IntFilter<"pratica"> | number
    erros?: IntFilter<"pratica"> | number
    sequencia_conquistada?: IntFilter<"pratica"> | number
    xp_ganho?: IntFilter<"pratica"> | number
    data_pratica?: DateTimeFilter<"pratica"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    mindcard?: XOR<MindcardNullableScalarRelationFilter, mindcardWhereInput> | null
  }

  export type praticaOrderByWithRelationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    mindcard_id?: SortOrderInput | SortOrder
    acertos?: SortOrder
    erros?: SortOrder
    sequencia_conquistada?: SortOrder
    xp_ganho?: SortOrder
    data_pratica?: SortOrder
    usuario?: usuarioOrderByWithRelationInput
    mindcard?: mindcardOrderByWithRelationInput
  }

  export type praticaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: praticaWhereInput | praticaWhereInput[]
    OR?: praticaWhereInput[]
    NOT?: praticaWhereInput | praticaWhereInput[]
    usuario_id?: StringFilter<"pratica"> | string
    mindcard_id?: StringNullableFilter<"pratica"> | string | null
    acertos?: IntFilter<"pratica"> | number
    erros?: IntFilter<"pratica"> | number
    sequencia_conquistada?: IntFilter<"pratica"> | number
    xp_ganho?: IntFilter<"pratica"> | number
    data_pratica?: DateTimeFilter<"pratica"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    mindcard?: XOR<MindcardNullableScalarRelationFilter, mindcardWhereInput> | null
  }, "id">

  export type praticaOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    mindcard_id?: SortOrderInput | SortOrder
    acertos?: SortOrder
    erros?: SortOrder
    sequencia_conquistada?: SortOrder
    xp_ganho?: SortOrder
    data_pratica?: SortOrder
    _count?: praticaCountOrderByAggregateInput
    _avg?: praticaAvgOrderByAggregateInput
    _max?: praticaMaxOrderByAggregateInput
    _min?: praticaMinOrderByAggregateInput
    _sum?: praticaSumOrderByAggregateInput
  }

  export type praticaScalarWhereWithAggregatesInput = {
    AND?: praticaScalarWhereWithAggregatesInput | praticaScalarWhereWithAggregatesInput[]
    OR?: praticaScalarWhereWithAggregatesInput[]
    NOT?: praticaScalarWhereWithAggregatesInput | praticaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"pratica"> | string
    usuario_id?: StringWithAggregatesFilter<"pratica"> | string
    mindcard_id?: StringNullableWithAggregatesFilter<"pratica"> | string | null
    acertos?: IntWithAggregatesFilter<"pratica"> | number
    erros?: IntWithAggregatesFilter<"pratica"> | number
    sequencia_conquistada?: IntWithAggregatesFilter<"pratica"> | number
    xp_ganho?: IntWithAggregatesFilter<"pratica"> | number
    data_pratica?: DateTimeWithAggregatesFilter<"pratica"> | Date | string
  }

  export type faculdadeWhereInput = {
    AND?: faculdadeWhereInput | faculdadeWhereInput[]
    OR?: faculdadeWhereInput[]
    NOT?: faculdadeWhereInput | faculdadeWhereInput[]
    id?: StringFilter<"faculdade"> | string
    codigo_ies?: IntFilter<"faculdade"> | number
    nome?: StringFilter<"faculdade"> | string
    sigla?: StringNullableFilter<"faculdade"> | string | null
    categoria?: EnumCategoriaIESNullableFilter<"faculdade"> | $Enums.CategoriaIES | null
    organizacao_academica?: StringNullableFilter<"faculdade"> | string | null
    codigo_municipio_ibge?: StringNullableFilter<"faculdade"> | string | null
    municipio?: StringFilter<"faculdade"> | string
    uf?: StringFilter<"faculdade"> | string
    situacao?: EnumSituacaoIESFilter<"faculdade"> | $Enums.SituacaoIES
    usuarios?: UsuarioListRelationFilter
  }

  export type faculdadeOrderByWithRelationInput = {
    id?: SortOrder
    codigo_ies?: SortOrder
    nome?: SortOrder
    sigla?: SortOrderInput | SortOrder
    categoria?: SortOrderInput | SortOrder
    organizacao_academica?: SortOrderInput | SortOrder
    codigo_municipio_ibge?: SortOrderInput | SortOrder
    municipio?: SortOrder
    uf?: SortOrder
    situacao?: SortOrder
    usuarios?: usuarioOrderByRelationAggregateInput
  }

  export type faculdadeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    codigo_ies?: number
    AND?: faculdadeWhereInput | faculdadeWhereInput[]
    OR?: faculdadeWhereInput[]
    NOT?: faculdadeWhereInput | faculdadeWhereInput[]
    nome?: StringFilter<"faculdade"> | string
    sigla?: StringNullableFilter<"faculdade"> | string | null
    categoria?: EnumCategoriaIESNullableFilter<"faculdade"> | $Enums.CategoriaIES | null
    organizacao_academica?: StringNullableFilter<"faculdade"> | string | null
    codigo_municipio_ibge?: StringNullableFilter<"faculdade"> | string | null
    municipio?: StringFilter<"faculdade"> | string
    uf?: StringFilter<"faculdade"> | string
    situacao?: EnumSituacaoIESFilter<"faculdade"> | $Enums.SituacaoIES
    usuarios?: UsuarioListRelationFilter
  }, "id" | "codigo_ies">

  export type faculdadeOrderByWithAggregationInput = {
    id?: SortOrder
    codigo_ies?: SortOrder
    nome?: SortOrder
    sigla?: SortOrderInput | SortOrder
    categoria?: SortOrderInput | SortOrder
    organizacao_academica?: SortOrderInput | SortOrder
    codigo_municipio_ibge?: SortOrderInput | SortOrder
    municipio?: SortOrder
    uf?: SortOrder
    situacao?: SortOrder
    _count?: faculdadeCountOrderByAggregateInput
    _avg?: faculdadeAvgOrderByAggregateInput
    _max?: faculdadeMaxOrderByAggregateInput
    _min?: faculdadeMinOrderByAggregateInput
    _sum?: faculdadeSumOrderByAggregateInput
  }

  export type faculdadeScalarWhereWithAggregatesInput = {
    AND?: faculdadeScalarWhereWithAggregatesInput | faculdadeScalarWhereWithAggregatesInput[]
    OR?: faculdadeScalarWhereWithAggregatesInput[]
    NOT?: faculdadeScalarWhereWithAggregatesInput | faculdadeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"faculdade"> | string
    codigo_ies?: IntWithAggregatesFilter<"faculdade"> | number
    nome?: StringWithAggregatesFilter<"faculdade"> | string
    sigla?: StringNullableWithAggregatesFilter<"faculdade"> | string | null
    categoria?: EnumCategoriaIESNullableWithAggregatesFilter<"faculdade"> | $Enums.CategoriaIES | null
    organizacao_academica?: StringNullableWithAggregatesFilter<"faculdade"> | string | null
    codigo_municipio_ibge?: StringNullableWithAggregatesFilter<"faculdade"> | string | null
    municipio?: StringWithAggregatesFilter<"faculdade"> | string
    uf?: StringWithAggregatesFilter<"faculdade"> | string
    situacao?: EnumSituacaoIESWithAggregatesFilter<"faculdade"> | $Enums.SituacaoIES
  }

  export type usuarioCreateInput = {
    id?: string
    nome: string
    usuario: string
    email: string
    senha: string
    idioma?: string
    data_registro?: Date | string
    xp_total?: number
    sequencia_atual?: number
    sequencia_recorde?: number
    faculdade?: faculdadeCreateNestedOneWithoutUsuariosInput
    mindcards?: mindcardCreateNestedManyWithoutUsuarioInput
    praticas?: praticaCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateInput = {
    id?: string
    nome: string
    usuario: string
    email: string
    senha: string
    faculdade_id?: string | null
    idioma?: string
    data_registro?: Date | string
    xp_total?: number
    sequencia_atual?: number
    sequencia_recorde?: number
    mindcards?: mindcardUncheckedCreateNestedManyWithoutUsuarioInput
    praticas?: praticaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    idioma?: StringFieldUpdateOperationsInput | string
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    xp_total?: IntFieldUpdateOperationsInput | number
    sequencia_atual?: IntFieldUpdateOperationsInput | number
    sequencia_recorde?: IntFieldUpdateOperationsInput | number
    faculdade?: faculdadeUpdateOneWithoutUsuariosNestedInput
    mindcards?: mindcardUpdateManyWithoutUsuarioNestedInput
    praticas?: praticaUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    faculdade_id?: NullableStringFieldUpdateOperationsInput | string | null
    idioma?: StringFieldUpdateOperationsInput | string
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    xp_total?: IntFieldUpdateOperationsInput | number
    sequencia_atual?: IntFieldUpdateOperationsInput | number
    sequencia_recorde?: IntFieldUpdateOperationsInput | number
    mindcards?: mindcardUncheckedUpdateManyWithoutUsuarioNestedInput
    praticas?: praticaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioCreateManyInput = {
    id?: string
    nome: string
    usuario: string
    email: string
    senha: string
    faculdade_id?: string | null
    idioma?: string
    data_registro?: Date | string
    xp_total?: number
    sequencia_atual?: number
    sequencia_recorde?: number
  }

  export type usuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    idioma?: StringFieldUpdateOperationsInput | string
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    xp_total?: IntFieldUpdateOperationsInput | number
    sequencia_atual?: IntFieldUpdateOperationsInput | number
    sequencia_recorde?: IntFieldUpdateOperationsInput | number
  }

  export type usuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    faculdade_id?: NullableStringFieldUpdateOperationsInput | string | null
    idioma?: StringFieldUpdateOperationsInput | string
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    xp_total?: IntFieldUpdateOperationsInput | number
    sequencia_atual?: IntFieldUpdateOperationsInput | number
    sequencia_recorde?: IntFieldUpdateOperationsInput | number
  }

  export type mindcardCreateInput = {
    id?: string
    titulo: string
    fonte_arquivo?: string | null
    prompt_personalizado?: string | null
    data_criacao?: Date | string
    status_processamento?: $Enums.StatusProcessamento
    job_id?: string | null
    mensagem_erro?: string | null
    iniciado_em?: Date | string | null
    concluido_em?: Date | string | null
    usuario: usuarioCreateNestedOneWithoutMindcardsInput
    cards?: cardCreateNestedManyWithoutMindcardInput
    praticas?: praticaCreateNestedManyWithoutMindcardInput
  }

  export type mindcardUncheckedCreateInput = {
    id?: string
    titulo: string
    fonte_arquivo?: string | null
    prompt_personalizado?: string | null
    usuario_id: string
    data_criacao?: Date | string
    status_processamento?: $Enums.StatusProcessamento
    job_id?: string | null
    mensagem_erro?: string | null
    iniciado_em?: Date | string | null
    concluido_em?: Date | string | null
    cards?: cardUncheckedCreateNestedManyWithoutMindcardInput
    praticas?: praticaUncheckedCreateNestedManyWithoutMindcardInput
  }

  export type mindcardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    fonte_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    prompt_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_processamento?: EnumStatusProcessamentoFieldUpdateOperationsInput | $Enums.StatusProcessamento
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem_erro?: NullableStringFieldUpdateOperationsInput | string | null
    iniciado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    concluido_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: usuarioUpdateOneRequiredWithoutMindcardsNestedInput
    cards?: cardUpdateManyWithoutMindcardNestedInput
    praticas?: praticaUpdateManyWithoutMindcardNestedInput
  }

  export type mindcardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    fonte_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    prompt_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_id?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_processamento?: EnumStatusProcessamentoFieldUpdateOperationsInput | $Enums.StatusProcessamento
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem_erro?: NullableStringFieldUpdateOperationsInput | string | null
    iniciado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    concluido_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cards?: cardUncheckedUpdateManyWithoutMindcardNestedInput
    praticas?: praticaUncheckedUpdateManyWithoutMindcardNestedInput
  }

  export type mindcardCreateManyInput = {
    id?: string
    titulo: string
    fonte_arquivo?: string | null
    prompt_personalizado?: string | null
    usuario_id: string
    data_criacao?: Date | string
    status_processamento?: $Enums.StatusProcessamento
    job_id?: string | null
    mensagem_erro?: string | null
    iniciado_em?: Date | string | null
    concluido_em?: Date | string | null
  }

  export type mindcardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    fonte_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    prompt_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_processamento?: EnumStatusProcessamentoFieldUpdateOperationsInput | $Enums.StatusProcessamento
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem_erro?: NullableStringFieldUpdateOperationsInput | string | null
    iniciado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    concluido_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mindcardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    fonte_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    prompt_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_id?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_processamento?: EnumStatusProcessamentoFieldUpdateOperationsInput | $Enums.StatusProcessamento
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem_erro?: NullableStringFieldUpdateOperationsInput | string | null
    iniciado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    concluido_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cardCreateInput = {
    id?: string
    titulo: string
    tipo: $Enums.tipo_card
    dificuldade: $Enums.dificuldade
    pergunta: string
    resposta_correta?: string | null
    alternativa_texto?: string | null
    mindcard: mindcardCreateNestedOneWithoutCardsInput
    opcoes?: opcao_respostaCreateNestedManyWithoutCardInput
  }

  export type cardUncheckedCreateInput = {
    id?: string
    titulo: string
    tipo: $Enums.tipo_card
    dificuldade: $Enums.dificuldade
    pergunta: string
    resposta_correta?: string | null
    alternativa_texto?: string | null
    mindcard_id: string
    opcoes?: opcao_respostaUncheckedCreateNestedManyWithoutCardInput
  }

  export type cardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_cardFieldUpdateOperationsInput | $Enums.tipo_card
    dificuldade?: EnumdificuldadeFieldUpdateOperationsInput | $Enums.dificuldade
    pergunta?: StringFieldUpdateOperationsInput | string
    resposta_correta?: NullableStringFieldUpdateOperationsInput | string | null
    alternativa_texto?: NullableStringFieldUpdateOperationsInput | string | null
    mindcard?: mindcardUpdateOneRequiredWithoutCardsNestedInput
    opcoes?: opcao_respostaUpdateManyWithoutCardNestedInput
  }

  export type cardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_cardFieldUpdateOperationsInput | $Enums.tipo_card
    dificuldade?: EnumdificuldadeFieldUpdateOperationsInput | $Enums.dificuldade
    pergunta?: StringFieldUpdateOperationsInput | string
    resposta_correta?: NullableStringFieldUpdateOperationsInput | string | null
    alternativa_texto?: NullableStringFieldUpdateOperationsInput | string | null
    mindcard_id?: StringFieldUpdateOperationsInput | string
    opcoes?: opcao_respostaUncheckedUpdateManyWithoutCardNestedInput
  }

  export type cardCreateManyInput = {
    id?: string
    titulo: string
    tipo: $Enums.tipo_card
    dificuldade: $Enums.dificuldade
    pergunta: string
    resposta_correta?: string | null
    alternativa_texto?: string | null
    mindcard_id: string
  }

  export type cardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_cardFieldUpdateOperationsInput | $Enums.tipo_card
    dificuldade?: EnumdificuldadeFieldUpdateOperationsInput | $Enums.dificuldade
    pergunta?: StringFieldUpdateOperationsInput | string
    resposta_correta?: NullableStringFieldUpdateOperationsInput | string | null
    alternativa_texto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_cardFieldUpdateOperationsInput | $Enums.tipo_card
    dificuldade?: EnumdificuldadeFieldUpdateOperationsInput | $Enums.dificuldade
    pergunta?: StringFieldUpdateOperationsInput | string
    resposta_correta?: NullableStringFieldUpdateOperationsInput | string | null
    alternativa_texto?: NullableStringFieldUpdateOperationsInput | string | null
    mindcard_id?: StringFieldUpdateOperationsInput | string
  }

  export type opcao_respostaCreateInput = {
    id?: string
    texto: string
    correta?: boolean
    card: cardCreateNestedOneWithoutOpcoesInput
  }

  export type opcao_respostaUncheckedCreateInput = {
    id?: string
    texto: string
    correta?: boolean
    card_id: string
  }

  export type opcao_respostaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    correta?: BoolFieldUpdateOperationsInput | boolean
    card?: cardUpdateOneRequiredWithoutOpcoesNestedInput
  }

  export type opcao_respostaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    correta?: BoolFieldUpdateOperationsInput | boolean
    card_id?: StringFieldUpdateOperationsInput | string
  }

  export type opcao_respostaCreateManyInput = {
    id?: string
    texto: string
    correta?: boolean
    card_id: string
  }

  export type opcao_respostaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    correta?: BoolFieldUpdateOperationsInput | boolean
  }

  export type opcao_respostaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    correta?: BoolFieldUpdateOperationsInput | boolean
    card_id?: StringFieldUpdateOperationsInput | string
  }

  export type praticaCreateInput = {
    id?: string
    acertos?: number
    erros?: number
    sequencia_conquistada?: number
    xp_ganho?: number
    data_pratica?: Date | string
    usuario: usuarioCreateNestedOneWithoutPraticasInput
    mindcard?: mindcardCreateNestedOneWithoutPraticasInput
  }

  export type praticaUncheckedCreateInput = {
    id?: string
    usuario_id: string
    mindcard_id?: string | null
    acertos?: number
    erros?: number
    sequencia_conquistada?: number
    xp_ganho?: number
    data_pratica?: Date | string
  }

  export type praticaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    acertos?: IntFieldUpdateOperationsInput | number
    erros?: IntFieldUpdateOperationsInput | number
    sequencia_conquistada?: IntFieldUpdateOperationsInput | number
    xp_ganho?: IntFieldUpdateOperationsInput | number
    data_pratica?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuarioUpdateOneRequiredWithoutPraticasNestedInput
    mindcard?: mindcardUpdateOneWithoutPraticasNestedInput
  }

  export type praticaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_id?: StringFieldUpdateOperationsInput | string
    mindcard_id?: NullableStringFieldUpdateOperationsInput | string | null
    acertos?: IntFieldUpdateOperationsInput | number
    erros?: IntFieldUpdateOperationsInput | number
    sequencia_conquistada?: IntFieldUpdateOperationsInput | number
    xp_ganho?: IntFieldUpdateOperationsInput | number
    data_pratica?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type praticaCreateManyInput = {
    id?: string
    usuario_id: string
    mindcard_id?: string | null
    acertos?: number
    erros?: number
    sequencia_conquistada?: number
    xp_ganho?: number
    data_pratica?: Date | string
  }

  export type praticaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    acertos?: IntFieldUpdateOperationsInput | number
    erros?: IntFieldUpdateOperationsInput | number
    sequencia_conquistada?: IntFieldUpdateOperationsInput | number
    xp_ganho?: IntFieldUpdateOperationsInput | number
    data_pratica?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type praticaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_id?: StringFieldUpdateOperationsInput | string
    mindcard_id?: NullableStringFieldUpdateOperationsInput | string | null
    acertos?: IntFieldUpdateOperationsInput | number
    erros?: IntFieldUpdateOperationsInput | number
    sequencia_conquistada?: IntFieldUpdateOperationsInput | number
    xp_ganho?: IntFieldUpdateOperationsInput | number
    data_pratica?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type faculdadeCreateInput = {
    id?: string
    codigo_ies: number
    nome: string
    sigla?: string | null
    categoria?: $Enums.CategoriaIES | null
    organizacao_academica?: string | null
    codigo_municipio_ibge?: string | null
    municipio: string
    uf: string
    situacao: $Enums.SituacaoIES
    usuarios?: usuarioCreateNestedManyWithoutFaculdadeInput
  }

  export type faculdadeUncheckedCreateInput = {
    id?: string
    codigo_ies: number
    nome: string
    sigla?: string | null
    categoria?: $Enums.CategoriaIES | null
    organizacao_academica?: string | null
    codigo_municipio_ibge?: string | null
    municipio: string
    uf: string
    situacao: $Enums.SituacaoIES
    usuarios?: usuarioUncheckedCreateNestedManyWithoutFaculdadeInput
  }

  export type faculdadeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo_ies?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableEnumCategoriaIESFieldUpdateOperationsInput | $Enums.CategoriaIES | null
    organizacao_academica?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_municipio_ibge?: NullableStringFieldUpdateOperationsInput | string | null
    municipio?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    situacao?: EnumSituacaoIESFieldUpdateOperationsInput | $Enums.SituacaoIES
    usuarios?: usuarioUpdateManyWithoutFaculdadeNestedInput
  }

  export type faculdadeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo_ies?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableEnumCategoriaIESFieldUpdateOperationsInput | $Enums.CategoriaIES | null
    organizacao_academica?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_municipio_ibge?: NullableStringFieldUpdateOperationsInput | string | null
    municipio?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    situacao?: EnumSituacaoIESFieldUpdateOperationsInput | $Enums.SituacaoIES
    usuarios?: usuarioUncheckedUpdateManyWithoutFaculdadeNestedInput
  }

  export type faculdadeCreateManyInput = {
    id?: string
    codigo_ies: number
    nome: string
    sigla?: string | null
    categoria?: $Enums.CategoriaIES | null
    organizacao_academica?: string | null
    codigo_municipio_ibge?: string | null
    municipio: string
    uf: string
    situacao: $Enums.SituacaoIES
  }

  export type faculdadeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo_ies?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableEnumCategoriaIESFieldUpdateOperationsInput | $Enums.CategoriaIES | null
    organizacao_academica?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_municipio_ibge?: NullableStringFieldUpdateOperationsInput | string | null
    municipio?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    situacao?: EnumSituacaoIESFieldUpdateOperationsInput | $Enums.SituacaoIES
  }

  export type faculdadeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo_ies?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableEnumCategoriaIESFieldUpdateOperationsInput | $Enums.CategoriaIES | null
    organizacao_academica?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_municipio_ibge?: NullableStringFieldUpdateOperationsInput | string | null
    municipio?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    situacao?: EnumSituacaoIESFieldUpdateOperationsInput | $Enums.SituacaoIES
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

  export type FaculdadeNullableScalarRelationFilter = {
    is?: faculdadeWhereInput | null
    isNot?: faculdadeWhereInput | null
  }

  export type MindcardListRelationFilter = {
    every?: mindcardWhereInput
    some?: mindcardWhereInput
    none?: mindcardWhereInput
  }

  export type PraticaListRelationFilter = {
    every?: praticaWhereInput
    some?: praticaWhereInput
    none?: praticaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type mindcardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type praticaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    usuario?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    faculdade_id?: SortOrder
    idioma?: SortOrder
    data_registro?: SortOrder
    xp_total?: SortOrder
    sequencia_atual?: SortOrder
    sequencia_recorde?: SortOrder
  }

  export type usuarioAvgOrderByAggregateInput = {
    xp_total?: SortOrder
    sequencia_atual?: SortOrder
    sequencia_recorde?: SortOrder
  }

  export type usuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    usuario?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    faculdade_id?: SortOrder
    idioma?: SortOrder
    data_registro?: SortOrder
    xp_total?: SortOrder
    sequencia_atual?: SortOrder
    sequencia_recorde?: SortOrder
  }

  export type usuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    usuario?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    faculdade_id?: SortOrder
    idioma?: SortOrder
    data_registro?: SortOrder
    xp_total?: SortOrder
    sequencia_atual?: SortOrder
    sequencia_recorde?: SortOrder
  }

  export type usuarioSumOrderByAggregateInput = {
    xp_total?: SortOrder
    sequencia_atual?: SortOrder
    sequencia_recorde?: SortOrder
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

  export type EnumStatusProcessamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusProcessamento | EnumStatusProcessamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusProcessamento[] | ListEnumStatusProcessamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusProcessamento[] | ListEnumStatusProcessamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusProcessamentoFilter<$PrismaModel> | $Enums.StatusProcessamento
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

  export type UsuarioScalarRelationFilter = {
    is?: usuarioWhereInput
    isNot?: usuarioWhereInput
  }

  export type CardListRelationFilter = {
    every?: cardWhereInput
    some?: cardWhereInput
    none?: cardWhereInput
  }

  export type cardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mindcardCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    fonte_arquivo?: SortOrder
    prompt_personalizado?: SortOrder
    usuario_id?: SortOrder
    data_criacao?: SortOrder
    status_processamento?: SortOrder
    job_id?: SortOrder
    mensagem_erro?: SortOrder
    iniciado_em?: SortOrder
    concluido_em?: SortOrder
  }

  export type mindcardMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    fonte_arquivo?: SortOrder
    prompt_personalizado?: SortOrder
    usuario_id?: SortOrder
    data_criacao?: SortOrder
    status_processamento?: SortOrder
    job_id?: SortOrder
    mensagem_erro?: SortOrder
    iniciado_em?: SortOrder
    concluido_em?: SortOrder
  }

  export type mindcardMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    fonte_arquivo?: SortOrder
    prompt_personalizado?: SortOrder
    usuario_id?: SortOrder
    data_criacao?: SortOrder
    status_processamento?: SortOrder
    job_id?: SortOrder
    mensagem_erro?: SortOrder
    iniciado_em?: SortOrder
    concluido_em?: SortOrder
  }

  export type EnumStatusProcessamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusProcessamento | EnumStatusProcessamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusProcessamento[] | ListEnumStatusProcessamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusProcessamento[] | ListEnumStatusProcessamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusProcessamentoWithAggregatesFilter<$PrismaModel> | $Enums.StatusProcessamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusProcessamentoFilter<$PrismaModel>
    _max?: NestedEnumStatusProcessamentoFilter<$PrismaModel>
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

  export type Enumtipo_cardFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_card | Enumtipo_cardFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_card[] | ListEnumtipo_cardFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_card[] | ListEnumtipo_cardFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_cardFilter<$PrismaModel> | $Enums.tipo_card
  }

  export type EnumdificuldadeFilter<$PrismaModel = never> = {
    equals?: $Enums.dificuldade | EnumdificuldadeFieldRefInput<$PrismaModel>
    in?: $Enums.dificuldade[] | ListEnumdificuldadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.dificuldade[] | ListEnumdificuldadeFieldRefInput<$PrismaModel>
    not?: NestedEnumdificuldadeFilter<$PrismaModel> | $Enums.dificuldade
  }

  export type MindcardScalarRelationFilter = {
    is?: mindcardWhereInput
    isNot?: mindcardWhereInput
  }

  export type Opcao_respostaListRelationFilter = {
    every?: opcao_respostaWhereInput
    some?: opcao_respostaWhereInput
    none?: opcao_respostaWhereInput
  }

  export type opcao_respostaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cardCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    tipo?: SortOrder
    dificuldade?: SortOrder
    pergunta?: SortOrder
    resposta_correta?: SortOrder
    alternativa_texto?: SortOrder
    mindcard_id?: SortOrder
  }

  export type cardMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    tipo?: SortOrder
    dificuldade?: SortOrder
    pergunta?: SortOrder
    resposta_correta?: SortOrder
    alternativa_texto?: SortOrder
    mindcard_id?: SortOrder
  }

  export type cardMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    tipo?: SortOrder
    dificuldade?: SortOrder
    pergunta?: SortOrder
    resposta_correta?: SortOrder
    alternativa_texto?: SortOrder
    mindcard_id?: SortOrder
  }

  export type Enumtipo_cardWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_card | Enumtipo_cardFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_card[] | ListEnumtipo_cardFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_card[] | ListEnumtipo_cardFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_cardWithAggregatesFilter<$PrismaModel> | $Enums.tipo_card
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtipo_cardFilter<$PrismaModel>
    _max?: NestedEnumtipo_cardFilter<$PrismaModel>
  }

  export type EnumdificuldadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.dificuldade | EnumdificuldadeFieldRefInput<$PrismaModel>
    in?: $Enums.dificuldade[] | ListEnumdificuldadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.dificuldade[] | ListEnumdificuldadeFieldRefInput<$PrismaModel>
    not?: NestedEnumdificuldadeWithAggregatesFilter<$PrismaModel> | $Enums.dificuldade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumdificuldadeFilter<$PrismaModel>
    _max?: NestedEnumdificuldadeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CardScalarRelationFilter = {
    is?: cardWhereInput
    isNot?: cardWhereInput
  }

  export type opcao_respostaCountOrderByAggregateInput = {
    id?: SortOrder
    texto?: SortOrder
    correta?: SortOrder
    card_id?: SortOrder
  }

  export type opcao_respostaMaxOrderByAggregateInput = {
    id?: SortOrder
    texto?: SortOrder
    correta?: SortOrder
    card_id?: SortOrder
  }

  export type opcao_respostaMinOrderByAggregateInput = {
    id?: SortOrder
    texto?: SortOrder
    correta?: SortOrder
    card_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MindcardNullableScalarRelationFilter = {
    is?: mindcardWhereInput | null
    isNot?: mindcardWhereInput | null
  }

  export type praticaCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    mindcard_id?: SortOrder
    acertos?: SortOrder
    erros?: SortOrder
    sequencia_conquistada?: SortOrder
    xp_ganho?: SortOrder
    data_pratica?: SortOrder
  }

  export type praticaAvgOrderByAggregateInput = {
    acertos?: SortOrder
    erros?: SortOrder
    sequencia_conquistada?: SortOrder
    xp_ganho?: SortOrder
  }

  export type praticaMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    mindcard_id?: SortOrder
    acertos?: SortOrder
    erros?: SortOrder
    sequencia_conquistada?: SortOrder
    xp_ganho?: SortOrder
    data_pratica?: SortOrder
  }

  export type praticaMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    mindcard_id?: SortOrder
    acertos?: SortOrder
    erros?: SortOrder
    sequencia_conquistada?: SortOrder
    xp_ganho?: SortOrder
    data_pratica?: SortOrder
  }

  export type praticaSumOrderByAggregateInput = {
    acertos?: SortOrder
    erros?: SortOrder
    sequencia_conquistada?: SortOrder
    xp_ganho?: SortOrder
  }

  export type EnumCategoriaIESNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoriaIES | EnumCategoriaIESFieldRefInput<$PrismaModel> | null
    in?: $Enums.CategoriaIES[] | ListEnumCategoriaIESFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CategoriaIES[] | ListEnumCategoriaIESFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCategoriaIESNullableFilter<$PrismaModel> | $Enums.CategoriaIES | null
  }

  export type EnumSituacaoIESFilter<$PrismaModel = never> = {
    equals?: $Enums.SituacaoIES | EnumSituacaoIESFieldRefInput<$PrismaModel>
    in?: $Enums.SituacaoIES[] | ListEnumSituacaoIESFieldRefInput<$PrismaModel>
    notIn?: $Enums.SituacaoIES[] | ListEnumSituacaoIESFieldRefInput<$PrismaModel>
    not?: NestedEnumSituacaoIESFilter<$PrismaModel> | $Enums.SituacaoIES
  }

  export type UsuarioListRelationFilter = {
    every?: usuarioWhereInput
    some?: usuarioWhereInput
    none?: usuarioWhereInput
  }

  export type usuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type faculdadeCountOrderByAggregateInput = {
    id?: SortOrder
    codigo_ies?: SortOrder
    nome?: SortOrder
    sigla?: SortOrder
    categoria?: SortOrder
    organizacao_academica?: SortOrder
    codigo_municipio_ibge?: SortOrder
    municipio?: SortOrder
    uf?: SortOrder
    situacao?: SortOrder
  }

  export type faculdadeAvgOrderByAggregateInput = {
    codigo_ies?: SortOrder
  }

  export type faculdadeMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo_ies?: SortOrder
    nome?: SortOrder
    sigla?: SortOrder
    categoria?: SortOrder
    organizacao_academica?: SortOrder
    codigo_municipio_ibge?: SortOrder
    municipio?: SortOrder
    uf?: SortOrder
    situacao?: SortOrder
  }

  export type faculdadeMinOrderByAggregateInput = {
    id?: SortOrder
    codigo_ies?: SortOrder
    nome?: SortOrder
    sigla?: SortOrder
    categoria?: SortOrder
    organizacao_academica?: SortOrder
    codigo_municipio_ibge?: SortOrder
    municipio?: SortOrder
    uf?: SortOrder
    situacao?: SortOrder
  }

  export type faculdadeSumOrderByAggregateInput = {
    codigo_ies?: SortOrder
  }

  export type EnumCategoriaIESNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoriaIES | EnumCategoriaIESFieldRefInput<$PrismaModel> | null
    in?: $Enums.CategoriaIES[] | ListEnumCategoriaIESFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CategoriaIES[] | ListEnumCategoriaIESFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCategoriaIESNullableWithAggregatesFilter<$PrismaModel> | $Enums.CategoriaIES | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCategoriaIESNullableFilter<$PrismaModel>
    _max?: NestedEnumCategoriaIESNullableFilter<$PrismaModel>
  }

  export type EnumSituacaoIESWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SituacaoIES | EnumSituacaoIESFieldRefInput<$PrismaModel>
    in?: $Enums.SituacaoIES[] | ListEnumSituacaoIESFieldRefInput<$PrismaModel>
    notIn?: $Enums.SituacaoIES[] | ListEnumSituacaoIESFieldRefInput<$PrismaModel>
    not?: NestedEnumSituacaoIESWithAggregatesFilter<$PrismaModel> | $Enums.SituacaoIES
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSituacaoIESFilter<$PrismaModel>
    _max?: NestedEnumSituacaoIESFilter<$PrismaModel>
  }

  export type faculdadeCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<faculdadeCreateWithoutUsuariosInput, faculdadeUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: faculdadeCreateOrConnectWithoutUsuariosInput
    connect?: faculdadeWhereUniqueInput
  }

  export type mindcardCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<mindcardCreateWithoutUsuarioInput, mindcardUncheckedCreateWithoutUsuarioInput> | mindcardCreateWithoutUsuarioInput[] | mindcardUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: mindcardCreateOrConnectWithoutUsuarioInput | mindcardCreateOrConnectWithoutUsuarioInput[]
    createMany?: mindcardCreateManyUsuarioInputEnvelope
    connect?: mindcardWhereUniqueInput | mindcardWhereUniqueInput[]
  }

  export type praticaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<praticaCreateWithoutUsuarioInput, praticaUncheckedCreateWithoutUsuarioInput> | praticaCreateWithoutUsuarioInput[] | praticaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: praticaCreateOrConnectWithoutUsuarioInput | praticaCreateOrConnectWithoutUsuarioInput[]
    createMany?: praticaCreateManyUsuarioInputEnvelope
    connect?: praticaWhereUniqueInput | praticaWhereUniqueInput[]
  }

  export type mindcardUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<mindcardCreateWithoutUsuarioInput, mindcardUncheckedCreateWithoutUsuarioInput> | mindcardCreateWithoutUsuarioInput[] | mindcardUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: mindcardCreateOrConnectWithoutUsuarioInput | mindcardCreateOrConnectWithoutUsuarioInput[]
    createMany?: mindcardCreateManyUsuarioInputEnvelope
    connect?: mindcardWhereUniqueInput | mindcardWhereUniqueInput[]
  }

  export type praticaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<praticaCreateWithoutUsuarioInput, praticaUncheckedCreateWithoutUsuarioInput> | praticaCreateWithoutUsuarioInput[] | praticaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: praticaCreateOrConnectWithoutUsuarioInput | praticaCreateOrConnectWithoutUsuarioInput[]
    createMany?: praticaCreateManyUsuarioInputEnvelope
    connect?: praticaWhereUniqueInput | praticaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type faculdadeUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<faculdadeCreateWithoutUsuariosInput, faculdadeUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: faculdadeCreateOrConnectWithoutUsuariosInput
    upsert?: faculdadeUpsertWithoutUsuariosInput
    disconnect?: faculdadeWhereInput | boolean
    delete?: faculdadeWhereInput | boolean
    connect?: faculdadeWhereUniqueInput
    update?: XOR<XOR<faculdadeUpdateToOneWithWhereWithoutUsuariosInput, faculdadeUpdateWithoutUsuariosInput>, faculdadeUncheckedUpdateWithoutUsuariosInput>
  }

  export type mindcardUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<mindcardCreateWithoutUsuarioInput, mindcardUncheckedCreateWithoutUsuarioInput> | mindcardCreateWithoutUsuarioInput[] | mindcardUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: mindcardCreateOrConnectWithoutUsuarioInput | mindcardCreateOrConnectWithoutUsuarioInput[]
    upsert?: mindcardUpsertWithWhereUniqueWithoutUsuarioInput | mindcardUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: mindcardCreateManyUsuarioInputEnvelope
    set?: mindcardWhereUniqueInput | mindcardWhereUniqueInput[]
    disconnect?: mindcardWhereUniqueInput | mindcardWhereUniqueInput[]
    delete?: mindcardWhereUniqueInput | mindcardWhereUniqueInput[]
    connect?: mindcardWhereUniqueInput | mindcardWhereUniqueInput[]
    update?: mindcardUpdateWithWhereUniqueWithoutUsuarioInput | mindcardUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: mindcardUpdateManyWithWhereWithoutUsuarioInput | mindcardUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: mindcardScalarWhereInput | mindcardScalarWhereInput[]
  }

  export type praticaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<praticaCreateWithoutUsuarioInput, praticaUncheckedCreateWithoutUsuarioInput> | praticaCreateWithoutUsuarioInput[] | praticaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: praticaCreateOrConnectWithoutUsuarioInput | praticaCreateOrConnectWithoutUsuarioInput[]
    upsert?: praticaUpsertWithWhereUniqueWithoutUsuarioInput | praticaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: praticaCreateManyUsuarioInputEnvelope
    set?: praticaWhereUniqueInput | praticaWhereUniqueInput[]
    disconnect?: praticaWhereUniqueInput | praticaWhereUniqueInput[]
    delete?: praticaWhereUniqueInput | praticaWhereUniqueInput[]
    connect?: praticaWhereUniqueInput | praticaWhereUniqueInput[]
    update?: praticaUpdateWithWhereUniqueWithoutUsuarioInput | praticaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: praticaUpdateManyWithWhereWithoutUsuarioInput | praticaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: praticaScalarWhereInput | praticaScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type mindcardUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<mindcardCreateWithoutUsuarioInput, mindcardUncheckedCreateWithoutUsuarioInput> | mindcardCreateWithoutUsuarioInput[] | mindcardUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: mindcardCreateOrConnectWithoutUsuarioInput | mindcardCreateOrConnectWithoutUsuarioInput[]
    upsert?: mindcardUpsertWithWhereUniqueWithoutUsuarioInput | mindcardUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: mindcardCreateManyUsuarioInputEnvelope
    set?: mindcardWhereUniqueInput | mindcardWhereUniqueInput[]
    disconnect?: mindcardWhereUniqueInput | mindcardWhereUniqueInput[]
    delete?: mindcardWhereUniqueInput | mindcardWhereUniqueInput[]
    connect?: mindcardWhereUniqueInput | mindcardWhereUniqueInput[]
    update?: mindcardUpdateWithWhereUniqueWithoutUsuarioInput | mindcardUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: mindcardUpdateManyWithWhereWithoutUsuarioInput | mindcardUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: mindcardScalarWhereInput | mindcardScalarWhereInput[]
  }

  export type praticaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<praticaCreateWithoutUsuarioInput, praticaUncheckedCreateWithoutUsuarioInput> | praticaCreateWithoutUsuarioInput[] | praticaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: praticaCreateOrConnectWithoutUsuarioInput | praticaCreateOrConnectWithoutUsuarioInput[]
    upsert?: praticaUpsertWithWhereUniqueWithoutUsuarioInput | praticaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: praticaCreateManyUsuarioInputEnvelope
    set?: praticaWhereUniqueInput | praticaWhereUniqueInput[]
    disconnect?: praticaWhereUniqueInput | praticaWhereUniqueInput[]
    delete?: praticaWhereUniqueInput | praticaWhereUniqueInput[]
    connect?: praticaWhereUniqueInput | praticaWhereUniqueInput[]
    update?: praticaUpdateWithWhereUniqueWithoutUsuarioInput | praticaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: praticaUpdateManyWithWhereWithoutUsuarioInput | praticaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: praticaScalarWhereInput | praticaScalarWhereInput[]
  }

  export type usuarioCreateNestedOneWithoutMindcardsInput = {
    create?: XOR<usuarioCreateWithoutMindcardsInput, usuarioUncheckedCreateWithoutMindcardsInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutMindcardsInput
    connect?: usuarioWhereUniqueInput
  }

  export type cardCreateNestedManyWithoutMindcardInput = {
    create?: XOR<cardCreateWithoutMindcardInput, cardUncheckedCreateWithoutMindcardInput> | cardCreateWithoutMindcardInput[] | cardUncheckedCreateWithoutMindcardInput[]
    connectOrCreate?: cardCreateOrConnectWithoutMindcardInput | cardCreateOrConnectWithoutMindcardInput[]
    createMany?: cardCreateManyMindcardInputEnvelope
    connect?: cardWhereUniqueInput | cardWhereUniqueInput[]
  }

  export type praticaCreateNestedManyWithoutMindcardInput = {
    create?: XOR<praticaCreateWithoutMindcardInput, praticaUncheckedCreateWithoutMindcardInput> | praticaCreateWithoutMindcardInput[] | praticaUncheckedCreateWithoutMindcardInput[]
    connectOrCreate?: praticaCreateOrConnectWithoutMindcardInput | praticaCreateOrConnectWithoutMindcardInput[]
    createMany?: praticaCreateManyMindcardInputEnvelope
    connect?: praticaWhereUniqueInput | praticaWhereUniqueInput[]
  }

  export type cardUncheckedCreateNestedManyWithoutMindcardInput = {
    create?: XOR<cardCreateWithoutMindcardInput, cardUncheckedCreateWithoutMindcardInput> | cardCreateWithoutMindcardInput[] | cardUncheckedCreateWithoutMindcardInput[]
    connectOrCreate?: cardCreateOrConnectWithoutMindcardInput | cardCreateOrConnectWithoutMindcardInput[]
    createMany?: cardCreateManyMindcardInputEnvelope
    connect?: cardWhereUniqueInput | cardWhereUniqueInput[]
  }

  export type praticaUncheckedCreateNestedManyWithoutMindcardInput = {
    create?: XOR<praticaCreateWithoutMindcardInput, praticaUncheckedCreateWithoutMindcardInput> | praticaCreateWithoutMindcardInput[] | praticaUncheckedCreateWithoutMindcardInput[]
    connectOrCreate?: praticaCreateOrConnectWithoutMindcardInput | praticaCreateOrConnectWithoutMindcardInput[]
    createMany?: praticaCreateManyMindcardInputEnvelope
    connect?: praticaWhereUniqueInput | praticaWhereUniqueInput[]
  }

  export type EnumStatusProcessamentoFieldUpdateOperationsInput = {
    set?: $Enums.StatusProcessamento
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usuarioUpdateOneRequiredWithoutMindcardsNestedInput = {
    create?: XOR<usuarioCreateWithoutMindcardsInput, usuarioUncheckedCreateWithoutMindcardsInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutMindcardsInput
    upsert?: usuarioUpsertWithoutMindcardsInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutMindcardsInput, usuarioUpdateWithoutMindcardsInput>, usuarioUncheckedUpdateWithoutMindcardsInput>
  }

  export type cardUpdateManyWithoutMindcardNestedInput = {
    create?: XOR<cardCreateWithoutMindcardInput, cardUncheckedCreateWithoutMindcardInput> | cardCreateWithoutMindcardInput[] | cardUncheckedCreateWithoutMindcardInput[]
    connectOrCreate?: cardCreateOrConnectWithoutMindcardInput | cardCreateOrConnectWithoutMindcardInput[]
    upsert?: cardUpsertWithWhereUniqueWithoutMindcardInput | cardUpsertWithWhereUniqueWithoutMindcardInput[]
    createMany?: cardCreateManyMindcardInputEnvelope
    set?: cardWhereUniqueInput | cardWhereUniqueInput[]
    disconnect?: cardWhereUniqueInput | cardWhereUniqueInput[]
    delete?: cardWhereUniqueInput | cardWhereUniqueInput[]
    connect?: cardWhereUniqueInput | cardWhereUniqueInput[]
    update?: cardUpdateWithWhereUniqueWithoutMindcardInput | cardUpdateWithWhereUniqueWithoutMindcardInput[]
    updateMany?: cardUpdateManyWithWhereWithoutMindcardInput | cardUpdateManyWithWhereWithoutMindcardInput[]
    deleteMany?: cardScalarWhereInput | cardScalarWhereInput[]
  }

  export type praticaUpdateManyWithoutMindcardNestedInput = {
    create?: XOR<praticaCreateWithoutMindcardInput, praticaUncheckedCreateWithoutMindcardInput> | praticaCreateWithoutMindcardInput[] | praticaUncheckedCreateWithoutMindcardInput[]
    connectOrCreate?: praticaCreateOrConnectWithoutMindcardInput | praticaCreateOrConnectWithoutMindcardInput[]
    upsert?: praticaUpsertWithWhereUniqueWithoutMindcardInput | praticaUpsertWithWhereUniqueWithoutMindcardInput[]
    createMany?: praticaCreateManyMindcardInputEnvelope
    set?: praticaWhereUniqueInput | praticaWhereUniqueInput[]
    disconnect?: praticaWhereUniqueInput | praticaWhereUniqueInput[]
    delete?: praticaWhereUniqueInput | praticaWhereUniqueInput[]
    connect?: praticaWhereUniqueInput | praticaWhereUniqueInput[]
    update?: praticaUpdateWithWhereUniqueWithoutMindcardInput | praticaUpdateWithWhereUniqueWithoutMindcardInput[]
    updateMany?: praticaUpdateManyWithWhereWithoutMindcardInput | praticaUpdateManyWithWhereWithoutMindcardInput[]
    deleteMany?: praticaScalarWhereInput | praticaScalarWhereInput[]
  }

  export type cardUncheckedUpdateManyWithoutMindcardNestedInput = {
    create?: XOR<cardCreateWithoutMindcardInput, cardUncheckedCreateWithoutMindcardInput> | cardCreateWithoutMindcardInput[] | cardUncheckedCreateWithoutMindcardInput[]
    connectOrCreate?: cardCreateOrConnectWithoutMindcardInput | cardCreateOrConnectWithoutMindcardInput[]
    upsert?: cardUpsertWithWhereUniqueWithoutMindcardInput | cardUpsertWithWhereUniqueWithoutMindcardInput[]
    createMany?: cardCreateManyMindcardInputEnvelope
    set?: cardWhereUniqueInput | cardWhereUniqueInput[]
    disconnect?: cardWhereUniqueInput | cardWhereUniqueInput[]
    delete?: cardWhereUniqueInput | cardWhereUniqueInput[]
    connect?: cardWhereUniqueInput | cardWhereUniqueInput[]
    update?: cardUpdateWithWhereUniqueWithoutMindcardInput | cardUpdateWithWhereUniqueWithoutMindcardInput[]
    updateMany?: cardUpdateManyWithWhereWithoutMindcardInput | cardUpdateManyWithWhereWithoutMindcardInput[]
    deleteMany?: cardScalarWhereInput | cardScalarWhereInput[]
  }

  export type praticaUncheckedUpdateManyWithoutMindcardNestedInput = {
    create?: XOR<praticaCreateWithoutMindcardInput, praticaUncheckedCreateWithoutMindcardInput> | praticaCreateWithoutMindcardInput[] | praticaUncheckedCreateWithoutMindcardInput[]
    connectOrCreate?: praticaCreateOrConnectWithoutMindcardInput | praticaCreateOrConnectWithoutMindcardInput[]
    upsert?: praticaUpsertWithWhereUniqueWithoutMindcardInput | praticaUpsertWithWhereUniqueWithoutMindcardInput[]
    createMany?: praticaCreateManyMindcardInputEnvelope
    set?: praticaWhereUniqueInput | praticaWhereUniqueInput[]
    disconnect?: praticaWhereUniqueInput | praticaWhereUniqueInput[]
    delete?: praticaWhereUniqueInput | praticaWhereUniqueInput[]
    connect?: praticaWhereUniqueInput | praticaWhereUniqueInput[]
    update?: praticaUpdateWithWhereUniqueWithoutMindcardInput | praticaUpdateWithWhereUniqueWithoutMindcardInput[]
    updateMany?: praticaUpdateManyWithWhereWithoutMindcardInput | praticaUpdateManyWithWhereWithoutMindcardInput[]
    deleteMany?: praticaScalarWhereInput | praticaScalarWhereInput[]
  }

  export type mindcardCreateNestedOneWithoutCardsInput = {
    create?: XOR<mindcardCreateWithoutCardsInput, mindcardUncheckedCreateWithoutCardsInput>
    connectOrCreate?: mindcardCreateOrConnectWithoutCardsInput
    connect?: mindcardWhereUniqueInput
  }

  export type opcao_respostaCreateNestedManyWithoutCardInput = {
    create?: XOR<opcao_respostaCreateWithoutCardInput, opcao_respostaUncheckedCreateWithoutCardInput> | opcao_respostaCreateWithoutCardInput[] | opcao_respostaUncheckedCreateWithoutCardInput[]
    connectOrCreate?: opcao_respostaCreateOrConnectWithoutCardInput | opcao_respostaCreateOrConnectWithoutCardInput[]
    createMany?: opcao_respostaCreateManyCardInputEnvelope
    connect?: opcao_respostaWhereUniqueInput | opcao_respostaWhereUniqueInput[]
  }

  export type opcao_respostaUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<opcao_respostaCreateWithoutCardInput, opcao_respostaUncheckedCreateWithoutCardInput> | opcao_respostaCreateWithoutCardInput[] | opcao_respostaUncheckedCreateWithoutCardInput[]
    connectOrCreate?: opcao_respostaCreateOrConnectWithoutCardInput | opcao_respostaCreateOrConnectWithoutCardInput[]
    createMany?: opcao_respostaCreateManyCardInputEnvelope
    connect?: opcao_respostaWhereUniqueInput | opcao_respostaWhereUniqueInput[]
  }

  export type Enumtipo_cardFieldUpdateOperationsInput = {
    set?: $Enums.tipo_card
  }

  export type EnumdificuldadeFieldUpdateOperationsInput = {
    set?: $Enums.dificuldade
  }

  export type mindcardUpdateOneRequiredWithoutCardsNestedInput = {
    create?: XOR<mindcardCreateWithoutCardsInput, mindcardUncheckedCreateWithoutCardsInput>
    connectOrCreate?: mindcardCreateOrConnectWithoutCardsInput
    upsert?: mindcardUpsertWithoutCardsInput
    connect?: mindcardWhereUniqueInput
    update?: XOR<XOR<mindcardUpdateToOneWithWhereWithoutCardsInput, mindcardUpdateWithoutCardsInput>, mindcardUncheckedUpdateWithoutCardsInput>
  }

  export type opcao_respostaUpdateManyWithoutCardNestedInput = {
    create?: XOR<opcao_respostaCreateWithoutCardInput, opcao_respostaUncheckedCreateWithoutCardInput> | opcao_respostaCreateWithoutCardInput[] | opcao_respostaUncheckedCreateWithoutCardInput[]
    connectOrCreate?: opcao_respostaCreateOrConnectWithoutCardInput | opcao_respostaCreateOrConnectWithoutCardInput[]
    upsert?: opcao_respostaUpsertWithWhereUniqueWithoutCardInput | opcao_respostaUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: opcao_respostaCreateManyCardInputEnvelope
    set?: opcao_respostaWhereUniqueInput | opcao_respostaWhereUniqueInput[]
    disconnect?: opcao_respostaWhereUniqueInput | opcao_respostaWhereUniqueInput[]
    delete?: opcao_respostaWhereUniqueInput | opcao_respostaWhereUniqueInput[]
    connect?: opcao_respostaWhereUniqueInput | opcao_respostaWhereUniqueInput[]
    update?: opcao_respostaUpdateWithWhereUniqueWithoutCardInput | opcao_respostaUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: opcao_respostaUpdateManyWithWhereWithoutCardInput | opcao_respostaUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: opcao_respostaScalarWhereInput | opcao_respostaScalarWhereInput[]
  }

  export type opcao_respostaUncheckedUpdateManyWithoutCardNestedInput = {
    create?: XOR<opcao_respostaCreateWithoutCardInput, opcao_respostaUncheckedCreateWithoutCardInput> | opcao_respostaCreateWithoutCardInput[] | opcao_respostaUncheckedCreateWithoutCardInput[]
    connectOrCreate?: opcao_respostaCreateOrConnectWithoutCardInput | opcao_respostaCreateOrConnectWithoutCardInput[]
    upsert?: opcao_respostaUpsertWithWhereUniqueWithoutCardInput | opcao_respostaUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: opcao_respostaCreateManyCardInputEnvelope
    set?: opcao_respostaWhereUniqueInput | opcao_respostaWhereUniqueInput[]
    disconnect?: opcao_respostaWhereUniqueInput | opcao_respostaWhereUniqueInput[]
    delete?: opcao_respostaWhereUniqueInput | opcao_respostaWhereUniqueInput[]
    connect?: opcao_respostaWhereUniqueInput | opcao_respostaWhereUniqueInput[]
    update?: opcao_respostaUpdateWithWhereUniqueWithoutCardInput | opcao_respostaUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: opcao_respostaUpdateManyWithWhereWithoutCardInput | opcao_respostaUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: opcao_respostaScalarWhereInput | opcao_respostaScalarWhereInput[]
  }

  export type cardCreateNestedOneWithoutOpcoesInput = {
    create?: XOR<cardCreateWithoutOpcoesInput, cardUncheckedCreateWithoutOpcoesInput>
    connectOrCreate?: cardCreateOrConnectWithoutOpcoesInput
    connect?: cardWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type cardUpdateOneRequiredWithoutOpcoesNestedInput = {
    create?: XOR<cardCreateWithoutOpcoesInput, cardUncheckedCreateWithoutOpcoesInput>
    connectOrCreate?: cardCreateOrConnectWithoutOpcoesInput
    upsert?: cardUpsertWithoutOpcoesInput
    connect?: cardWhereUniqueInput
    update?: XOR<XOR<cardUpdateToOneWithWhereWithoutOpcoesInput, cardUpdateWithoutOpcoesInput>, cardUncheckedUpdateWithoutOpcoesInput>
  }

  export type usuarioCreateNestedOneWithoutPraticasInput = {
    create?: XOR<usuarioCreateWithoutPraticasInput, usuarioUncheckedCreateWithoutPraticasInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutPraticasInput
    connect?: usuarioWhereUniqueInput
  }

  export type mindcardCreateNestedOneWithoutPraticasInput = {
    create?: XOR<mindcardCreateWithoutPraticasInput, mindcardUncheckedCreateWithoutPraticasInput>
    connectOrCreate?: mindcardCreateOrConnectWithoutPraticasInput
    connect?: mindcardWhereUniqueInput
  }

  export type usuarioUpdateOneRequiredWithoutPraticasNestedInput = {
    create?: XOR<usuarioCreateWithoutPraticasInput, usuarioUncheckedCreateWithoutPraticasInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutPraticasInput
    upsert?: usuarioUpsertWithoutPraticasInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutPraticasInput, usuarioUpdateWithoutPraticasInput>, usuarioUncheckedUpdateWithoutPraticasInput>
  }

  export type mindcardUpdateOneWithoutPraticasNestedInput = {
    create?: XOR<mindcardCreateWithoutPraticasInput, mindcardUncheckedCreateWithoutPraticasInput>
    connectOrCreate?: mindcardCreateOrConnectWithoutPraticasInput
    upsert?: mindcardUpsertWithoutPraticasInput
    disconnect?: mindcardWhereInput | boolean
    delete?: mindcardWhereInput | boolean
    connect?: mindcardWhereUniqueInput
    update?: XOR<XOR<mindcardUpdateToOneWithWhereWithoutPraticasInput, mindcardUpdateWithoutPraticasInput>, mindcardUncheckedUpdateWithoutPraticasInput>
  }

  export type usuarioCreateNestedManyWithoutFaculdadeInput = {
    create?: XOR<usuarioCreateWithoutFaculdadeInput, usuarioUncheckedCreateWithoutFaculdadeInput> | usuarioCreateWithoutFaculdadeInput[] | usuarioUncheckedCreateWithoutFaculdadeInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutFaculdadeInput | usuarioCreateOrConnectWithoutFaculdadeInput[]
    createMany?: usuarioCreateManyFaculdadeInputEnvelope
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
  }

  export type usuarioUncheckedCreateNestedManyWithoutFaculdadeInput = {
    create?: XOR<usuarioCreateWithoutFaculdadeInput, usuarioUncheckedCreateWithoutFaculdadeInput> | usuarioCreateWithoutFaculdadeInput[] | usuarioUncheckedCreateWithoutFaculdadeInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutFaculdadeInput | usuarioCreateOrConnectWithoutFaculdadeInput[]
    createMany?: usuarioCreateManyFaculdadeInputEnvelope
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
  }

  export type NullableEnumCategoriaIESFieldUpdateOperationsInput = {
    set?: $Enums.CategoriaIES | null
  }

  export type EnumSituacaoIESFieldUpdateOperationsInput = {
    set?: $Enums.SituacaoIES
  }

  export type usuarioUpdateManyWithoutFaculdadeNestedInput = {
    create?: XOR<usuarioCreateWithoutFaculdadeInput, usuarioUncheckedCreateWithoutFaculdadeInput> | usuarioCreateWithoutFaculdadeInput[] | usuarioUncheckedCreateWithoutFaculdadeInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutFaculdadeInput | usuarioCreateOrConnectWithoutFaculdadeInput[]
    upsert?: usuarioUpsertWithWhereUniqueWithoutFaculdadeInput | usuarioUpsertWithWhereUniqueWithoutFaculdadeInput[]
    createMany?: usuarioCreateManyFaculdadeInputEnvelope
    set?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    disconnect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    delete?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    update?: usuarioUpdateWithWhereUniqueWithoutFaculdadeInput | usuarioUpdateWithWhereUniqueWithoutFaculdadeInput[]
    updateMany?: usuarioUpdateManyWithWhereWithoutFaculdadeInput | usuarioUpdateManyWithWhereWithoutFaculdadeInput[]
    deleteMany?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
  }

  export type usuarioUncheckedUpdateManyWithoutFaculdadeNestedInput = {
    create?: XOR<usuarioCreateWithoutFaculdadeInput, usuarioUncheckedCreateWithoutFaculdadeInput> | usuarioCreateWithoutFaculdadeInput[] | usuarioUncheckedCreateWithoutFaculdadeInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutFaculdadeInput | usuarioCreateOrConnectWithoutFaculdadeInput[]
    upsert?: usuarioUpsertWithWhereUniqueWithoutFaculdadeInput | usuarioUpsertWithWhereUniqueWithoutFaculdadeInput[]
    createMany?: usuarioCreateManyFaculdadeInputEnvelope
    set?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    disconnect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    delete?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    update?: usuarioUpdateWithWhereUniqueWithoutFaculdadeInput | usuarioUpdateWithWhereUniqueWithoutFaculdadeInput[]
    updateMany?: usuarioUpdateManyWithWhereWithoutFaculdadeInput | usuarioUpdateManyWithWhereWithoutFaculdadeInput[]
    deleteMany?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
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

  export type NestedEnumStatusProcessamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusProcessamento | EnumStatusProcessamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusProcessamento[] | ListEnumStatusProcessamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusProcessamento[] | ListEnumStatusProcessamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusProcessamentoFilter<$PrismaModel> | $Enums.StatusProcessamento
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

  export type NestedEnumStatusProcessamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusProcessamento | EnumStatusProcessamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusProcessamento[] | ListEnumStatusProcessamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusProcessamento[] | ListEnumStatusProcessamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusProcessamentoWithAggregatesFilter<$PrismaModel> | $Enums.StatusProcessamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusProcessamentoFilter<$PrismaModel>
    _max?: NestedEnumStatusProcessamentoFilter<$PrismaModel>
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

  export type NestedEnumtipo_cardFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_card | Enumtipo_cardFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_card[] | ListEnumtipo_cardFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_card[] | ListEnumtipo_cardFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_cardFilter<$PrismaModel> | $Enums.tipo_card
  }

  export type NestedEnumdificuldadeFilter<$PrismaModel = never> = {
    equals?: $Enums.dificuldade | EnumdificuldadeFieldRefInput<$PrismaModel>
    in?: $Enums.dificuldade[] | ListEnumdificuldadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.dificuldade[] | ListEnumdificuldadeFieldRefInput<$PrismaModel>
    not?: NestedEnumdificuldadeFilter<$PrismaModel> | $Enums.dificuldade
  }

  export type NestedEnumtipo_cardWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_card | Enumtipo_cardFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_card[] | ListEnumtipo_cardFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_card[] | ListEnumtipo_cardFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_cardWithAggregatesFilter<$PrismaModel> | $Enums.tipo_card
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtipo_cardFilter<$PrismaModel>
    _max?: NestedEnumtipo_cardFilter<$PrismaModel>
  }

  export type NestedEnumdificuldadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.dificuldade | EnumdificuldadeFieldRefInput<$PrismaModel>
    in?: $Enums.dificuldade[] | ListEnumdificuldadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.dificuldade[] | ListEnumdificuldadeFieldRefInput<$PrismaModel>
    not?: NestedEnumdificuldadeWithAggregatesFilter<$PrismaModel> | $Enums.dificuldade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumdificuldadeFilter<$PrismaModel>
    _max?: NestedEnumdificuldadeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumCategoriaIESNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoriaIES | EnumCategoriaIESFieldRefInput<$PrismaModel> | null
    in?: $Enums.CategoriaIES[] | ListEnumCategoriaIESFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CategoriaIES[] | ListEnumCategoriaIESFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCategoriaIESNullableFilter<$PrismaModel> | $Enums.CategoriaIES | null
  }

  export type NestedEnumSituacaoIESFilter<$PrismaModel = never> = {
    equals?: $Enums.SituacaoIES | EnumSituacaoIESFieldRefInput<$PrismaModel>
    in?: $Enums.SituacaoIES[] | ListEnumSituacaoIESFieldRefInput<$PrismaModel>
    notIn?: $Enums.SituacaoIES[] | ListEnumSituacaoIESFieldRefInput<$PrismaModel>
    not?: NestedEnumSituacaoIESFilter<$PrismaModel> | $Enums.SituacaoIES
  }

  export type NestedEnumCategoriaIESNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoriaIES | EnumCategoriaIESFieldRefInput<$PrismaModel> | null
    in?: $Enums.CategoriaIES[] | ListEnumCategoriaIESFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CategoriaIES[] | ListEnumCategoriaIESFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCategoriaIESNullableWithAggregatesFilter<$PrismaModel> | $Enums.CategoriaIES | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCategoriaIESNullableFilter<$PrismaModel>
    _max?: NestedEnumCategoriaIESNullableFilter<$PrismaModel>
  }

  export type NestedEnumSituacaoIESWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SituacaoIES | EnumSituacaoIESFieldRefInput<$PrismaModel>
    in?: $Enums.SituacaoIES[] | ListEnumSituacaoIESFieldRefInput<$PrismaModel>
    notIn?: $Enums.SituacaoIES[] | ListEnumSituacaoIESFieldRefInput<$PrismaModel>
    not?: NestedEnumSituacaoIESWithAggregatesFilter<$PrismaModel> | $Enums.SituacaoIES
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSituacaoIESFilter<$PrismaModel>
    _max?: NestedEnumSituacaoIESFilter<$PrismaModel>
  }

  export type faculdadeCreateWithoutUsuariosInput = {
    id?: string
    codigo_ies: number
    nome: string
    sigla?: string | null
    categoria?: $Enums.CategoriaIES | null
    organizacao_academica?: string | null
    codigo_municipio_ibge?: string | null
    municipio: string
    uf: string
    situacao: $Enums.SituacaoIES
  }

  export type faculdadeUncheckedCreateWithoutUsuariosInput = {
    id?: string
    codigo_ies: number
    nome: string
    sigla?: string | null
    categoria?: $Enums.CategoriaIES | null
    organizacao_academica?: string | null
    codigo_municipio_ibge?: string | null
    municipio: string
    uf: string
    situacao: $Enums.SituacaoIES
  }

  export type faculdadeCreateOrConnectWithoutUsuariosInput = {
    where: faculdadeWhereUniqueInput
    create: XOR<faculdadeCreateWithoutUsuariosInput, faculdadeUncheckedCreateWithoutUsuariosInput>
  }

  export type mindcardCreateWithoutUsuarioInput = {
    id?: string
    titulo: string
    fonte_arquivo?: string | null
    prompt_personalizado?: string | null
    data_criacao?: Date | string
    status_processamento?: $Enums.StatusProcessamento
    job_id?: string | null
    mensagem_erro?: string | null
    iniciado_em?: Date | string | null
    concluido_em?: Date | string | null
    cards?: cardCreateNestedManyWithoutMindcardInput
    praticas?: praticaCreateNestedManyWithoutMindcardInput
  }

  export type mindcardUncheckedCreateWithoutUsuarioInput = {
    id?: string
    titulo: string
    fonte_arquivo?: string | null
    prompt_personalizado?: string | null
    data_criacao?: Date | string
    status_processamento?: $Enums.StatusProcessamento
    job_id?: string | null
    mensagem_erro?: string | null
    iniciado_em?: Date | string | null
    concluido_em?: Date | string | null
    cards?: cardUncheckedCreateNestedManyWithoutMindcardInput
    praticas?: praticaUncheckedCreateNestedManyWithoutMindcardInput
  }

  export type mindcardCreateOrConnectWithoutUsuarioInput = {
    where: mindcardWhereUniqueInput
    create: XOR<mindcardCreateWithoutUsuarioInput, mindcardUncheckedCreateWithoutUsuarioInput>
  }

  export type mindcardCreateManyUsuarioInputEnvelope = {
    data: mindcardCreateManyUsuarioInput | mindcardCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type praticaCreateWithoutUsuarioInput = {
    id?: string
    acertos?: number
    erros?: number
    sequencia_conquistada?: number
    xp_ganho?: number
    data_pratica?: Date | string
    mindcard?: mindcardCreateNestedOneWithoutPraticasInput
  }

  export type praticaUncheckedCreateWithoutUsuarioInput = {
    id?: string
    mindcard_id?: string | null
    acertos?: number
    erros?: number
    sequencia_conquistada?: number
    xp_ganho?: number
    data_pratica?: Date | string
  }

  export type praticaCreateOrConnectWithoutUsuarioInput = {
    where: praticaWhereUniqueInput
    create: XOR<praticaCreateWithoutUsuarioInput, praticaUncheckedCreateWithoutUsuarioInput>
  }

  export type praticaCreateManyUsuarioInputEnvelope = {
    data: praticaCreateManyUsuarioInput | praticaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type faculdadeUpsertWithoutUsuariosInput = {
    update: XOR<faculdadeUpdateWithoutUsuariosInput, faculdadeUncheckedUpdateWithoutUsuariosInput>
    create: XOR<faculdadeCreateWithoutUsuariosInput, faculdadeUncheckedCreateWithoutUsuariosInput>
    where?: faculdadeWhereInput
  }

  export type faculdadeUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: faculdadeWhereInput
    data: XOR<faculdadeUpdateWithoutUsuariosInput, faculdadeUncheckedUpdateWithoutUsuariosInput>
  }

  export type faculdadeUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo_ies?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableEnumCategoriaIESFieldUpdateOperationsInput | $Enums.CategoriaIES | null
    organizacao_academica?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_municipio_ibge?: NullableStringFieldUpdateOperationsInput | string | null
    municipio?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    situacao?: EnumSituacaoIESFieldUpdateOperationsInput | $Enums.SituacaoIES
  }

  export type faculdadeUncheckedUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo_ies?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableEnumCategoriaIESFieldUpdateOperationsInput | $Enums.CategoriaIES | null
    organizacao_academica?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_municipio_ibge?: NullableStringFieldUpdateOperationsInput | string | null
    municipio?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    situacao?: EnumSituacaoIESFieldUpdateOperationsInput | $Enums.SituacaoIES
  }

  export type mindcardUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: mindcardWhereUniqueInput
    update: XOR<mindcardUpdateWithoutUsuarioInput, mindcardUncheckedUpdateWithoutUsuarioInput>
    create: XOR<mindcardCreateWithoutUsuarioInput, mindcardUncheckedCreateWithoutUsuarioInput>
  }

  export type mindcardUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: mindcardWhereUniqueInput
    data: XOR<mindcardUpdateWithoutUsuarioInput, mindcardUncheckedUpdateWithoutUsuarioInput>
  }

  export type mindcardUpdateManyWithWhereWithoutUsuarioInput = {
    where: mindcardScalarWhereInput
    data: XOR<mindcardUpdateManyMutationInput, mindcardUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type mindcardScalarWhereInput = {
    AND?: mindcardScalarWhereInput | mindcardScalarWhereInput[]
    OR?: mindcardScalarWhereInput[]
    NOT?: mindcardScalarWhereInput | mindcardScalarWhereInput[]
    id?: StringFilter<"mindcard"> | string
    titulo?: StringFilter<"mindcard"> | string
    fonte_arquivo?: StringNullableFilter<"mindcard"> | string | null
    prompt_personalizado?: StringNullableFilter<"mindcard"> | string | null
    usuario_id?: StringFilter<"mindcard"> | string
    data_criacao?: DateTimeFilter<"mindcard"> | Date | string
    status_processamento?: EnumStatusProcessamentoFilter<"mindcard"> | $Enums.StatusProcessamento
    job_id?: StringNullableFilter<"mindcard"> | string | null
    mensagem_erro?: StringNullableFilter<"mindcard"> | string | null
    iniciado_em?: DateTimeNullableFilter<"mindcard"> | Date | string | null
    concluido_em?: DateTimeNullableFilter<"mindcard"> | Date | string | null
  }

  export type praticaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: praticaWhereUniqueInput
    update: XOR<praticaUpdateWithoutUsuarioInput, praticaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<praticaCreateWithoutUsuarioInput, praticaUncheckedCreateWithoutUsuarioInput>
  }

  export type praticaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: praticaWhereUniqueInput
    data: XOR<praticaUpdateWithoutUsuarioInput, praticaUncheckedUpdateWithoutUsuarioInput>
  }

  export type praticaUpdateManyWithWhereWithoutUsuarioInput = {
    where: praticaScalarWhereInput
    data: XOR<praticaUpdateManyMutationInput, praticaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type praticaScalarWhereInput = {
    AND?: praticaScalarWhereInput | praticaScalarWhereInput[]
    OR?: praticaScalarWhereInput[]
    NOT?: praticaScalarWhereInput | praticaScalarWhereInput[]
    id?: StringFilter<"pratica"> | string
    usuario_id?: StringFilter<"pratica"> | string
    mindcard_id?: StringNullableFilter<"pratica"> | string | null
    acertos?: IntFilter<"pratica"> | number
    erros?: IntFilter<"pratica"> | number
    sequencia_conquistada?: IntFilter<"pratica"> | number
    xp_ganho?: IntFilter<"pratica"> | number
    data_pratica?: DateTimeFilter<"pratica"> | Date | string
  }

  export type usuarioCreateWithoutMindcardsInput = {
    id?: string
    nome: string
    usuario: string
    email: string
    senha: string
    idioma?: string
    data_registro?: Date | string
    xp_total?: number
    sequencia_atual?: number
    sequencia_recorde?: number
    faculdade?: faculdadeCreateNestedOneWithoutUsuariosInput
    praticas?: praticaCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutMindcardsInput = {
    id?: string
    nome: string
    usuario: string
    email: string
    senha: string
    faculdade_id?: string | null
    idioma?: string
    data_registro?: Date | string
    xp_total?: number
    sequencia_atual?: number
    sequencia_recorde?: number
    praticas?: praticaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutMindcardsInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutMindcardsInput, usuarioUncheckedCreateWithoutMindcardsInput>
  }

  export type cardCreateWithoutMindcardInput = {
    id?: string
    titulo: string
    tipo: $Enums.tipo_card
    dificuldade: $Enums.dificuldade
    pergunta: string
    resposta_correta?: string | null
    alternativa_texto?: string | null
    opcoes?: opcao_respostaCreateNestedManyWithoutCardInput
  }

  export type cardUncheckedCreateWithoutMindcardInput = {
    id?: string
    titulo: string
    tipo: $Enums.tipo_card
    dificuldade: $Enums.dificuldade
    pergunta: string
    resposta_correta?: string | null
    alternativa_texto?: string | null
    opcoes?: opcao_respostaUncheckedCreateNestedManyWithoutCardInput
  }

  export type cardCreateOrConnectWithoutMindcardInput = {
    where: cardWhereUniqueInput
    create: XOR<cardCreateWithoutMindcardInput, cardUncheckedCreateWithoutMindcardInput>
  }

  export type cardCreateManyMindcardInputEnvelope = {
    data: cardCreateManyMindcardInput | cardCreateManyMindcardInput[]
    skipDuplicates?: boolean
  }

  export type praticaCreateWithoutMindcardInput = {
    id?: string
    acertos?: number
    erros?: number
    sequencia_conquistada?: number
    xp_ganho?: number
    data_pratica?: Date | string
    usuario: usuarioCreateNestedOneWithoutPraticasInput
  }

  export type praticaUncheckedCreateWithoutMindcardInput = {
    id?: string
    usuario_id: string
    acertos?: number
    erros?: number
    sequencia_conquistada?: number
    xp_ganho?: number
    data_pratica?: Date | string
  }

  export type praticaCreateOrConnectWithoutMindcardInput = {
    where: praticaWhereUniqueInput
    create: XOR<praticaCreateWithoutMindcardInput, praticaUncheckedCreateWithoutMindcardInput>
  }

  export type praticaCreateManyMindcardInputEnvelope = {
    data: praticaCreateManyMindcardInput | praticaCreateManyMindcardInput[]
    skipDuplicates?: boolean
  }

  export type usuarioUpsertWithoutMindcardsInput = {
    update: XOR<usuarioUpdateWithoutMindcardsInput, usuarioUncheckedUpdateWithoutMindcardsInput>
    create: XOR<usuarioCreateWithoutMindcardsInput, usuarioUncheckedCreateWithoutMindcardsInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutMindcardsInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutMindcardsInput, usuarioUncheckedUpdateWithoutMindcardsInput>
  }

  export type usuarioUpdateWithoutMindcardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    idioma?: StringFieldUpdateOperationsInput | string
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    xp_total?: IntFieldUpdateOperationsInput | number
    sequencia_atual?: IntFieldUpdateOperationsInput | number
    sequencia_recorde?: IntFieldUpdateOperationsInput | number
    faculdade?: faculdadeUpdateOneWithoutUsuariosNestedInput
    praticas?: praticaUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutMindcardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    faculdade_id?: NullableStringFieldUpdateOperationsInput | string | null
    idioma?: StringFieldUpdateOperationsInput | string
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    xp_total?: IntFieldUpdateOperationsInput | number
    sequencia_atual?: IntFieldUpdateOperationsInput | number
    sequencia_recorde?: IntFieldUpdateOperationsInput | number
    praticas?: praticaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type cardUpsertWithWhereUniqueWithoutMindcardInput = {
    where: cardWhereUniqueInput
    update: XOR<cardUpdateWithoutMindcardInput, cardUncheckedUpdateWithoutMindcardInput>
    create: XOR<cardCreateWithoutMindcardInput, cardUncheckedCreateWithoutMindcardInput>
  }

  export type cardUpdateWithWhereUniqueWithoutMindcardInput = {
    where: cardWhereUniqueInput
    data: XOR<cardUpdateWithoutMindcardInput, cardUncheckedUpdateWithoutMindcardInput>
  }

  export type cardUpdateManyWithWhereWithoutMindcardInput = {
    where: cardScalarWhereInput
    data: XOR<cardUpdateManyMutationInput, cardUncheckedUpdateManyWithoutMindcardInput>
  }

  export type cardScalarWhereInput = {
    AND?: cardScalarWhereInput | cardScalarWhereInput[]
    OR?: cardScalarWhereInput[]
    NOT?: cardScalarWhereInput | cardScalarWhereInput[]
    id?: StringFilter<"card"> | string
    titulo?: StringFilter<"card"> | string
    tipo?: Enumtipo_cardFilter<"card"> | $Enums.tipo_card
    dificuldade?: EnumdificuldadeFilter<"card"> | $Enums.dificuldade
    pergunta?: StringFilter<"card"> | string
    resposta_correta?: StringNullableFilter<"card"> | string | null
    alternativa_texto?: StringNullableFilter<"card"> | string | null
    mindcard_id?: StringFilter<"card"> | string
  }

  export type praticaUpsertWithWhereUniqueWithoutMindcardInput = {
    where: praticaWhereUniqueInput
    update: XOR<praticaUpdateWithoutMindcardInput, praticaUncheckedUpdateWithoutMindcardInput>
    create: XOR<praticaCreateWithoutMindcardInput, praticaUncheckedCreateWithoutMindcardInput>
  }

  export type praticaUpdateWithWhereUniqueWithoutMindcardInput = {
    where: praticaWhereUniqueInput
    data: XOR<praticaUpdateWithoutMindcardInput, praticaUncheckedUpdateWithoutMindcardInput>
  }

  export type praticaUpdateManyWithWhereWithoutMindcardInput = {
    where: praticaScalarWhereInput
    data: XOR<praticaUpdateManyMutationInput, praticaUncheckedUpdateManyWithoutMindcardInput>
  }

  export type mindcardCreateWithoutCardsInput = {
    id?: string
    titulo: string
    fonte_arquivo?: string | null
    prompt_personalizado?: string | null
    data_criacao?: Date | string
    status_processamento?: $Enums.StatusProcessamento
    job_id?: string | null
    mensagem_erro?: string | null
    iniciado_em?: Date | string | null
    concluido_em?: Date | string | null
    usuario: usuarioCreateNestedOneWithoutMindcardsInput
    praticas?: praticaCreateNestedManyWithoutMindcardInput
  }

  export type mindcardUncheckedCreateWithoutCardsInput = {
    id?: string
    titulo: string
    fonte_arquivo?: string | null
    prompt_personalizado?: string | null
    usuario_id: string
    data_criacao?: Date | string
    status_processamento?: $Enums.StatusProcessamento
    job_id?: string | null
    mensagem_erro?: string | null
    iniciado_em?: Date | string | null
    concluido_em?: Date | string | null
    praticas?: praticaUncheckedCreateNestedManyWithoutMindcardInput
  }

  export type mindcardCreateOrConnectWithoutCardsInput = {
    where: mindcardWhereUniqueInput
    create: XOR<mindcardCreateWithoutCardsInput, mindcardUncheckedCreateWithoutCardsInput>
  }

  export type opcao_respostaCreateWithoutCardInput = {
    id?: string
    texto: string
    correta?: boolean
  }

  export type opcao_respostaUncheckedCreateWithoutCardInput = {
    id?: string
    texto: string
    correta?: boolean
  }

  export type opcao_respostaCreateOrConnectWithoutCardInput = {
    where: opcao_respostaWhereUniqueInput
    create: XOR<opcao_respostaCreateWithoutCardInput, opcao_respostaUncheckedCreateWithoutCardInput>
  }

  export type opcao_respostaCreateManyCardInputEnvelope = {
    data: opcao_respostaCreateManyCardInput | opcao_respostaCreateManyCardInput[]
    skipDuplicates?: boolean
  }

  export type mindcardUpsertWithoutCardsInput = {
    update: XOR<mindcardUpdateWithoutCardsInput, mindcardUncheckedUpdateWithoutCardsInput>
    create: XOR<mindcardCreateWithoutCardsInput, mindcardUncheckedCreateWithoutCardsInput>
    where?: mindcardWhereInput
  }

  export type mindcardUpdateToOneWithWhereWithoutCardsInput = {
    where?: mindcardWhereInput
    data: XOR<mindcardUpdateWithoutCardsInput, mindcardUncheckedUpdateWithoutCardsInput>
  }

  export type mindcardUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    fonte_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    prompt_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_processamento?: EnumStatusProcessamentoFieldUpdateOperationsInput | $Enums.StatusProcessamento
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem_erro?: NullableStringFieldUpdateOperationsInput | string | null
    iniciado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    concluido_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: usuarioUpdateOneRequiredWithoutMindcardsNestedInput
    praticas?: praticaUpdateManyWithoutMindcardNestedInput
  }

  export type mindcardUncheckedUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    fonte_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    prompt_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_id?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_processamento?: EnumStatusProcessamentoFieldUpdateOperationsInput | $Enums.StatusProcessamento
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem_erro?: NullableStringFieldUpdateOperationsInput | string | null
    iniciado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    concluido_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    praticas?: praticaUncheckedUpdateManyWithoutMindcardNestedInput
  }

  export type opcao_respostaUpsertWithWhereUniqueWithoutCardInput = {
    where: opcao_respostaWhereUniqueInput
    update: XOR<opcao_respostaUpdateWithoutCardInput, opcao_respostaUncheckedUpdateWithoutCardInput>
    create: XOR<opcao_respostaCreateWithoutCardInput, opcao_respostaUncheckedCreateWithoutCardInput>
  }

  export type opcao_respostaUpdateWithWhereUniqueWithoutCardInput = {
    where: opcao_respostaWhereUniqueInput
    data: XOR<opcao_respostaUpdateWithoutCardInput, opcao_respostaUncheckedUpdateWithoutCardInput>
  }

  export type opcao_respostaUpdateManyWithWhereWithoutCardInput = {
    where: opcao_respostaScalarWhereInput
    data: XOR<opcao_respostaUpdateManyMutationInput, opcao_respostaUncheckedUpdateManyWithoutCardInput>
  }

  export type opcao_respostaScalarWhereInput = {
    AND?: opcao_respostaScalarWhereInput | opcao_respostaScalarWhereInput[]
    OR?: opcao_respostaScalarWhereInput[]
    NOT?: opcao_respostaScalarWhereInput | opcao_respostaScalarWhereInput[]
    id?: StringFilter<"opcao_resposta"> | string
    texto?: StringFilter<"opcao_resposta"> | string
    correta?: BoolFilter<"opcao_resposta"> | boolean
    card_id?: StringFilter<"opcao_resposta"> | string
  }

  export type cardCreateWithoutOpcoesInput = {
    id?: string
    titulo: string
    tipo: $Enums.tipo_card
    dificuldade: $Enums.dificuldade
    pergunta: string
    resposta_correta?: string | null
    alternativa_texto?: string | null
    mindcard: mindcardCreateNestedOneWithoutCardsInput
  }

  export type cardUncheckedCreateWithoutOpcoesInput = {
    id?: string
    titulo: string
    tipo: $Enums.tipo_card
    dificuldade: $Enums.dificuldade
    pergunta: string
    resposta_correta?: string | null
    alternativa_texto?: string | null
    mindcard_id: string
  }

  export type cardCreateOrConnectWithoutOpcoesInput = {
    where: cardWhereUniqueInput
    create: XOR<cardCreateWithoutOpcoesInput, cardUncheckedCreateWithoutOpcoesInput>
  }

  export type cardUpsertWithoutOpcoesInput = {
    update: XOR<cardUpdateWithoutOpcoesInput, cardUncheckedUpdateWithoutOpcoesInput>
    create: XOR<cardCreateWithoutOpcoesInput, cardUncheckedCreateWithoutOpcoesInput>
    where?: cardWhereInput
  }

  export type cardUpdateToOneWithWhereWithoutOpcoesInput = {
    where?: cardWhereInput
    data: XOR<cardUpdateWithoutOpcoesInput, cardUncheckedUpdateWithoutOpcoesInput>
  }

  export type cardUpdateWithoutOpcoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_cardFieldUpdateOperationsInput | $Enums.tipo_card
    dificuldade?: EnumdificuldadeFieldUpdateOperationsInput | $Enums.dificuldade
    pergunta?: StringFieldUpdateOperationsInput | string
    resposta_correta?: NullableStringFieldUpdateOperationsInput | string | null
    alternativa_texto?: NullableStringFieldUpdateOperationsInput | string | null
    mindcard?: mindcardUpdateOneRequiredWithoutCardsNestedInput
  }

  export type cardUncheckedUpdateWithoutOpcoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_cardFieldUpdateOperationsInput | $Enums.tipo_card
    dificuldade?: EnumdificuldadeFieldUpdateOperationsInput | $Enums.dificuldade
    pergunta?: StringFieldUpdateOperationsInput | string
    resposta_correta?: NullableStringFieldUpdateOperationsInput | string | null
    alternativa_texto?: NullableStringFieldUpdateOperationsInput | string | null
    mindcard_id?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioCreateWithoutPraticasInput = {
    id?: string
    nome: string
    usuario: string
    email: string
    senha: string
    idioma?: string
    data_registro?: Date | string
    xp_total?: number
    sequencia_atual?: number
    sequencia_recorde?: number
    faculdade?: faculdadeCreateNestedOneWithoutUsuariosInput
    mindcards?: mindcardCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutPraticasInput = {
    id?: string
    nome: string
    usuario: string
    email: string
    senha: string
    faculdade_id?: string | null
    idioma?: string
    data_registro?: Date | string
    xp_total?: number
    sequencia_atual?: number
    sequencia_recorde?: number
    mindcards?: mindcardUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutPraticasInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutPraticasInput, usuarioUncheckedCreateWithoutPraticasInput>
  }

  export type mindcardCreateWithoutPraticasInput = {
    id?: string
    titulo: string
    fonte_arquivo?: string | null
    prompt_personalizado?: string | null
    data_criacao?: Date | string
    status_processamento?: $Enums.StatusProcessamento
    job_id?: string | null
    mensagem_erro?: string | null
    iniciado_em?: Date | string | null
    concluido_em?: Date | string | null
    usuario: usuarioCreateNestedOneWithoutMindcardsInput
    cards?: cardCreateNestedManyWithoutMindcardInput
  }

  export type mindcardUncheckedCreateWithoutPraticasInput = {
    id?: string
    titulo: string
    fonte_arquivo?: string | null
    prompt_personalizado?: string | null
    usuario_id: string
    data_criacao?: Date | string
    status_processamento?: $Enums.StatusProcessamento
    job_id?: string | null
    mensagem_erro?: string | null
    iniciado_em?: Date | string | null
    concluido_em?: Date | string | null
    cards?: cardUncheckedCreateNestedManyWithoutMindcardInput
  }

  export type mindcardCreateOrConnectWithoutPraticasInput = {
    where: mindcardWhereUniqueInput
    create: XOR<mindcardCreateWithoutPraticasInput, mindcardUncheckedCreateWithoutPraticasInput>
  }

  export type usuarioUpsertWithoutPraticasInput = {
    update: XOR<usuarioUpdateWithoutPraticasInput, usuarioUncheckedUpdateWithoutPraticasInput>
    create: XOR<usuarioCreateWithoutPraticasInput, usuarioUncheckedCreateWithoutPraticasInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutPraticasInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutPraticasInput, usuarioUncheckedUpdateWithoutPraticasInput>
  }

  export type usuarioUpdateWithoutPraticasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    idioma?: StringFieldUpdateOperationsInput | string
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    xp_total?: IntFieldUpdateOperationsInput | number
    sequencia_atual?: IntFieldUpdateOperationsInput | number
    sequencia_recorde?: IntFieldUpdateOperationsInput | number
    faculdade?: faculdadeUpdateOneWithoutUsuariosNestedInput
    mindcards?: mindcardUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutPraticasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    faculdade_id?: NullableStringFieldUpdateOperationsInput | string | null
    idioma?: StringFieldUpdateOperationsInput | string
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    xp_total?: IntFieldUpdateOperationsInput | number
    sequencia_atual?: IntFieldUpdateOperationsInput | number
    sequencia_recorde?: IntFieldUpdateOperationsInput | number
    mindcards?: mindcardUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type mindcardUpsertWithoutPraticasInput = {
    update: XOR<mindcardUpdateWithoutPraticasInput, mindcardUncheckedUpdateWithoutPraticasInput>
    create: XOR<mindcardCreateWithoutPraticasInput, mindcardUncheckedCreateWithoutPraticasInput>
    where?: mindcardWhereInput
  }

  export type mindcardUpdateToOneWithWhereWithoutPraticasInput = {
    where?: mindcardWhereInput
    data: XOR<mindcardUpdateWithoutPraticasInput, mindcardUncheckedUpdateWithoutPraticasInput>
  }

  export type mindcardUpdateWithoutPraticasInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    fonte_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    prompt_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_processamento?: EnumStatusProcessamentoFieldUpdateOperationsInput | $Enums.StatusProcessamento
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem_erro?: NullableStringFieldUpdateOperationsInput | string | null
    iniciado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    concluido_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: usuarioUpdateOneRequiredWithoutMindcardsNestedInput
    cards?: cardUpdateManyWithoutMindcardNestedInput
  }

  export type mindcardUncheckedUpdateWithoutPraticasInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    fonte_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    prompt_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_id?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_processamento?: EnumStatusProcessamentoFieldUpdateOperationsInput | $Enums.StatusProcessamento
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem_erro?: NullableStringFieldUpdateOperationsInput | string | null
    iniciado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    concluido_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cards?: cardUncheckedUpdateManyWithoutMindcardNestedInput
  }

  export type usuarioCreateWithoutFaculdadeInput = {
    id?: string
    nome: string
    usuario: string
    email: string
    senha: string
    idioma?: string
    data_registro?: Date | string
    xp_total?: number
    sequencia_atual?: number
    sequencia_recorde?: number
    mindcards?: mindcardCreateNestedManyWithoutUsuarioInput
    praticas?: praticaCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutFaculdadeInput = {
    id?: string
    nome: string
    usuario: string
    email: string
    senha: string
    idioma?: string
    data_registro?: Date | string
    xp_total?: number
    sequencia_atual?: number
    sequencia_recorde?: number
    mindcards?: mindcardUncheckedCreateNestedManyWithoutUsuarioInput
    praticas?: praticaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutFaculdadeInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutFaculdadeInput, usuarioUncheckedCreateWithoutFaculdadeInput>
  }

  export type usuarioCreateManyFaculdadeInputEnvelope = {
    data: usuarioCreateManyFaculdadeInput | usuarioCreateManyFaculdadeInput[]
    skipDuplicates?: boolean
  }

  export type usuarioUpsertWithWhereUniqueWithoutFaculdadeInput = {
    where: usuarioWhereUniqueInput
    update: XOR<usuarioUpdateWithoutFaculdadeInput, usuarioUncheckedUpdateWithoutFaculdadeInput>
    create: XOR<usuarioCreateWithoutFaculdadeInput, usuarioUncheckedCreateWithoutFaculdadeInput>
  }

  export type usuarioUpdateWithWhereUniqueWithoutFaculdadeInput = {
    where: usuarioWhereUniqueInput
    data: XOR<usuarioUpdateWithoutFaculdadeInput, usuarioUncheckedUpdateWithoutFaculdadeInput>
  }

  export type usuarioUpdateManyWithWhereWithoutFaculdadeInput = {
    where: usuarioScalarWhereInput
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyWithoutFaculdadeInput>
  }

  export type usuarioScalarWhereInput = {
    AND?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
    OR?: usuarioScalarWhereInput[]
    NOT?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
    id?: StringFilter<"usuario"> | string
    nome?: StringFilter<"usuario"> | string
    usuario?: StringFilter<"usuario"> | string
    email?: StringFilter<"usuario"> | string
    senha?: StringFilter<"usuario"> | string
    faculdade_id?: StringNullableFilter<"usuario"> | string | null
    idioma?: StringFilter<"usuario"> | string
    data_registro?: DateTimeFilter<"usuario"> | Date | string
    xp_total?: IntFilter<"usuario"> | number
    sequencia_atual?: IntFilter<"usuario"> | number
    sequencia_recorde?: IntFilter<"usuario"> | number
  }

  export type mindcardCreateManyUsuarioInput = {
    id?: string
    titulo: string
    fonte_arquivo?: string | null
    prompt_personalizado?: string | null
    data_criacao?: Date | string
    status_processamento?: $Enums.StatusProcessamento
    job_id?: string | null
    mensagem_erro?: string | null
    iniciado_em?: Date | string | null
    concluido_em?: Date | string | null
  }

  export type praticaCreateManyUsuarioInput = {
    id?: string
    mindcard_id?: string | null
    acertos?: number
    erros?: number
    sequencia_conquistada?: number
    xp_ganho?: number
    data_pratica?: Date | string
  }

  export type mindcardUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    fonte_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    prompt_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_processamento?: EnumStatusProcessamentoFieldUpdateOperationsInput | $Enums.StatusProcessamento
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem_erro?: NullableStringFieldUpdateOperationsInput | string | null
    iniciado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    concluido_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cards?: cardUpdateManyWithoutMindcardNestedInput
    praticas?: praticaUpdateManyWithoutMindcardNestedInput
  }

  export type mindcardUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    fonte_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    prompt_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_processamento?: EnumStatusProcessamentoFieldUpdateOperationsInput | $Enums.StatusProcessamento
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem_erro?: NullableStringFieldUpdateOperationsInput | string | null
    iniciado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    concluido_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cards?: cardUncheckedUpdateManyWithoutMindcardNestedInput
    praticas?: praticaUncheckedUpdateManyWithoutMindcardNestedInput
  }

  export type mindcardUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    fonte_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    prompt_personalizado?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_processamento?: EnumStatusProcessamentoFieldUpdateOperationsInput | $Enums.StatusProcessamento
    job_id?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem_erro?: NullableStringFieldUpdateOperationsInput | string | null
    iniciado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    concluido_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type praticaUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    acertos?: IntFieldUpdateOperationsInput | number
    erros?: IntFieldUpdateOperationsInput | number
    sequencia_conquistada?: IntFieldUpdateOperationsInput | number
    xp_ganho?: IntFieldUpdateOperationsInput | number
    data_pratica?: DateTimeFieldUpdateOperationsInput | Date | string
    mindcard?: mindcardUpdateOneWithoutPraticasNestedInput
  }

  export type praticaUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    mindcard_id?: NullableStringFieldUpdateOperationsInput | string | null
    acertos?: IntFieldUpdateOperationsInput | number
    erros?: IntFieldUpdateOperationsInput | number
    sequencia_conquistada?: IntFieldUpdateOperationsInput | number
    xp_ganho?: IntFieldUpdateOperationsInput | number
    data_pratica?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type praticaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    mindcard_id?: NullableStringFieldUpdateOperationsInput | string | null
    acertos?: IntFieldUpdateOperationsInput | number
    erros?: IntFieldUpdateOperationsInput | number
    sequencia_conquistada?: IntFieldUpdateOperationsInput | number
    xp_ganho?: IntFieldUpdateOperationsInput | number
    data_pratica?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cardCreateManyMindcardInput = {
    id?: string
    titulo: string
    tipo: $Enums.tipo_card
    dificuldade: $Enums.dificuldade
    pergunta: string
    resposta_correta?: string | null
    alternativa_texto?: string | null
  }

  export type praticaCreateManyMindcardInput = {
    id?: string
    usuario_id: string
    acertos?: number
    erros?: number
    sequencia_conquistada?: number
    xp_ganho?: number
    data_pratica?: Date | string
  }

  export type cardUpdateWithoutMindcardInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_cardFieldUpdateOperationsInput | $Enums.tipo_card
    dificuldade?: EnumdificuldadeFieldUpdateOperationsInput | $Enums.dificuldade
    pergunta?: StringFieldUpdateOperationsInput | string
    resposta_correta?: NullableStringFieldUpdateOperationsInput | string | null
    alternativa_texto?: NullableStringFieldUpdateOperationsInput | string | null
    opcoes?: opcao_respostaUpdateManyWithoutCardNestedInput
  }

  export type cardUncheckedUpdateWithoutMindcardInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_cardFieldUpdateOperationsInput | $Enums.tipo_card
    dificuldade?: EnumdificuldadeFieldUpdateOperationsInput | $Enums.dificuldade
    pergunta?: StringFieldUpdateOperationsInput | string
    resposta_correta?: NullableStringFieldUpdateOperationsInput | string | null
    alternativa_texto?: NullableStringFieldUpdateOperationsInput | string | null
    opcoes?: opcao_respostaUncheckedUpdateManyWithoutCardNestedInput
  }

  export type cardUncheckedUpdateManyWithoutMindcardInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_cardFieldUpdateOperationsInput | $Enums.tipo_card
    dificuldade?: EnumdificuldadeFieldUpdateOperationsInput | $Enums.dificuldade
    pergunta?: StringFieldUpdateOperationsInput | string
    resposta_correta?: NullableStringFieldUpdateOperationsInput | string | null
    alternativa_texto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type praticaUpdateWithoutMindcardInput = {
    id?: StringFieldUpdateOperationsInput | string
    acertos?: IntFieldUpdateOperationsInput | number
    erros?: IntFieldUpdateOperationsInput | number
    sequencia_conquistada?: IntFieldUpdateOperationsInput | number
    xp_ganho?: IntFieldUpdateOperationsInput | number
    data_pratica?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuarioUpdateOneRequiredWithoutPraticasNestedInput
  }

  export type praticaUncheckedUpdateWithoutMindcardInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_id?: StringFieldUpdateOperationsInput | string
    acertos?: IntFieldUpdateOperationsInput | number
    erros?: IntFieldUpdateOperationsInput | number
    sequencia_conquistada?: IntFieldUpdateOperationsInput | number
    xp_ganho?: IntFieldUpdateOperationsInput | number
    data_pratica?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type praticaUncheckedUpdateManyWithoutMindcardInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_id?: StringFieldUpdateOperationsInput | string
    acertos?: IntFieldUpdateOperationsInput | number
    erros?: IntFieldUpdateOperationsInput | number
    sequencia_conquistada?: IntFieldUpdateOperationsInput | number
    xp_ganho?: IntFieldUpdateOperationsInput | number
    data_pratica?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type opcao_respostaCreateManyCardInput = {
    id?: string
    texto: string
    correta?: boolean
  }

  export type opcao_respostaUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    correta?: BoolFieldUpdateOperationsInput | boolean
  }

  export type opcao_respostaUncheckedUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    correta?: BoolFieldUpdateOperationsInput | boolean
  }

  export type opcao_respostaUncheckedUpdateManyWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    correta?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usuarioCreateManyFaculdadeInput = {
    id?: string
    nome: string
    usuario: string
    email: string
    senha: string
    idioma?: string
    data_registro?: Date | string
    xp_total?: number
    sequencia_atual?: number
    sequencia_recorde?: number
  }

  export type usuarioUpdateWithoutFaculdadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    idioma?: StringFieldUpdateOperationsInput | string
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    xp_total?: IntFieldUpdateOperationsInput | number
    sequencia_atual?: IntFieldUpdateOperationsInput | number
    sequencia_recorde?: IntFieldUpdateOperationsInput | number
    mindcards?: mindcardUpdateManyWithoutUsuarioNestedInput
    praticas?: praticaUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutFaculdadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    idioma?: StringFieldUpdateOperationsInput | string
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    xp_total?: IntFieldUpdateOperationsInput | number
    sequencia_atual?: IntFieldUpdateOperationsInput | number
    sequencia_recorde?: IntFieldUpdateOperationsInput | number
    mindcards?: mindcardUncheckedUpdateManyWithoutUsuarioNestedInput
    praticas?: praticaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateManyWithoutFaculdadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    idioma?: StringFieldUpdateOperationsInput | string
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    xp_total?: IntFieldUpdateOperationsInput | number
    sequencia_atual?: IntFieldUpdateOperationsInput | number
    sequencia_recorde?: IntFieldUpdateOperationsInput | number
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