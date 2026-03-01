
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Classe
 * 
 */
export type Classe = $Result.DefaultSelection<Prisma.$ClassePayload>
/**
 * Model Curso
 * 
 */
export type Curso = $Result.DefaultSelection<Prisma.$CursoPayload>
/**
 * Model DiaSemana
 * 
 */
export type DiaSemana = $Result.DefaultSelection<Prisma.$DiaSemanaPayload>
/**
 * Model Disciplina
 * 
 */
export type Disciplina = $Result.DefaultSelection<Prisma.$DisciplinaPayload>
/**
 * Model Disponibilidade
 * 
 */
export type Disponibilidade = $Result.DefaultSelection<Prisma.$DisponibilidadePayload>
/**
 * Model Periodo
 * 
 */
export type Periodo = $Result.DefaultSelection<Prisma.$PeriodoPayload>
/**
 * Model Professor
 * 
 */
export type Professor = $Result.DefaultSelection<Prisma.$ProfessorPayload>
/**
 * Model ProfDisciplinas
 * 
 */
export type ProfDisciplinas = $Result.DefaultSelection<Prisma.$ProfDisciplinasPayload>
/**
 * Model Sala
 * 
 */
export type Sala = $Result.DefaultSelection<Prisma.$SalaPayload>
/**
 * Model Tempo_Lectivo
 * 
 */
export type Tempo_Lectivo = $Result.DefaultSelection<Prisma.$Tempo_LectivoPayload>
/**
 * Model Turma
 * 
 */
export type Turma = $Result.DefaultSelection<Prisma.$TurmaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Classes
 * const classes = await prisma.classe.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * // Fetch zero or more Classes
   * const classes = await prisma.classe.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.classe`: Exposes CRUD operations for the **Classe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.classe.findMany()
    * ```
    */
  get classe(): Prisma.ClasseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.curso`: Exposes CRUD operations for the **Curso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cursos
    * const cursos = await prisma.curso.findMany()
    * ```
    */
  get curso(): Prisma.CursoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diaSemana`: Exposes CRUD operations for the **DiaSemana** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiaSemanas
    * const diaSemanas = await prisma.diaSemana.findMany()
    * ```
    */
  get diaSemana(): Prisma.DiaSemanaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disciplina`: Exposes CRUD operations for the **Disciplina** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disciplinas
    * const disciplinas = await prisma.disciplina.findMany()
    * ```
    */
  get disciplina(): Prisma.DisciplinaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disponibilidade`: Exposes CRUD operations for the **Disponibilidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disponibilidades
    * const disponibilidades = await prisma.disponibilidade.findMany()
    * ```
    */
  get disponibilidade(): Prisma.DisponibilidadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.periodo`: Exposes CRUD operations for the **Periodo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Periodos
    * const periodos = await prisma.periodo.findMany()
    * ```
    */
  get periodo(): Prisma.PeriodoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professor`: Exposes CRUD operations for the **Professor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professors
    * const professors = await prisma.professor.findMany()
    * ```
    */
  get professor(): Prisma.ProfessorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profDisciplinas`: Exposes CRUD operations for the **ProfDisciplinas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfDisciplinas
    * const profDisciplinas = await prisma.profDisciplinas.findMany()
    * ```
    */
  get profDisciplinas(): Prisma.ProfDisciplinasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sala`: Exposes CRUD operations for the **Sala** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Salas
    * const salas = await prisma.sala.findMany()
    * ```
    */
  get sala(): Prisma.SalaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tempo_Lectivo`: Exposes CRUD operations for the **Tempo_Lectivo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tempo_Lectivos
    * const tempo_Lectivos = await prisma.tempo_Lectivo.findMany()
    * ```
    */
  get tempo_Lectivo(): Prisma.Tempo_LectivoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.turma`: Exposes CRUD operations for the **Turma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Turmas
    * const turmas = await prisma.turma.findMany()
    * ```
    */
  get turma(): Prisma.TurmaDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    Classe: 'Classe',
    Curso: 'Curso',
    DiaSemana: 'DiaSemana',
    Disciplina: 'Disciplina',
    Disponibilidade: 'Disponibilidade',
    Periodo: 'Periodo',
    Professor: 'Professor',
    ProfDisciplinas: 'ProfDisciplinas',
    Sala: 'Sala',
    Tempo_Lectivo: 'Tempo_Lectivo',
    Turma: 'Turma'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "classe" | "curso" | "diaSemana" | "disciplina" | "disponibilidade" | "periodo" | "professor" | "profDisciplinas" | "sala" | "tempo_Lectivo" | "turma"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Classe: {
        payload: Prisma.$ClassePayload<ExtArgs>
        fields: Prisma.ClasseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClasseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClasseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>
          }
          findFirst: {
            args: Prisma.ClasseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClasseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>
          }
          findMany: {
            args: Prisma.ClasseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>[]
          }
          create: {
            args: Prisma.ClasseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>
          }
          createMany: {
            args: Prisma.ClasseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClasseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>[]
          }
          delete: {
            args: Prisma.ClasseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>
          }
          update: {
            args: Prisma.ClasseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>
          }
          deleteMany: {
            args: Prisma.ClasseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClasseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClasseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>[]
          }
          upsert: {
            args: Prisma.ClasseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>
          }
          aggregate: {
            args: Prisma.ClasseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClasse>
          }
          groupBy: {
            args: Prisma.ClasseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClasseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClasseCountArgs<ExtArgs>
            result: $Utils.Optional<ClasseCountAggregateOutputType> | number
          }
        }
      }
      Curso: {
        payload: Prisma.$CursoPayload<ExtArgs>
        fields: Prisma.CursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          findFirst: {
            args: Prisma.CursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          findMany: {
            args: Prisma.CursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          create: {
            args: Prisma.CursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          createMany: {
            args: Prisma.CursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CursoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          delete: {
            args: Prisma.CursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          update: {
            args: Prisma.CursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          deleteMany: {
            args: Prisma.CursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CursoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          upsert: {
            args: Prisma.CursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          aggregate: {
            args: Prisma.CursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurso>
          }
          groupBy: {
            args: Prisma.CursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CursoCountArgs<ExtArgs>
            result: $Utils.Optional<CursoCountAggregateOutputType> | number
          }
        }
      }
      DiaSemana: {
        payload: Prisma.$DiaSemanaPayload<ExtArgs>
        fields: Prisma.DiaSemanaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiaSemanaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiaSemanaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>
          }
          findFirst: {
            args: Prisma.DiaSemanaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiaSemanaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>
          }
          findMany: {
            args: Prisma.DiaSemanaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>[]
          }
          create: {
            args: Prisma.DiaSemanaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>
          }
          createMany: {
            args: Prisma.DiaSemanaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiaSemanaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>[]
          }
          delete: {
            args: Prisma.DiaSemanaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>
          }
          update: {
            args: Prisma.DiaSemanaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>
          }
          deleteMany: {
            args: Prisma.DiaSemanaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiaSemanaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiaSemanaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>[]
          }
          upsert: {
            args: Prisma.DiaSemanaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>
          }
          aggregate: {
            args: Prisma.DiaSemanaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiaSemana>
          }
          groupBy: {
            args: Prisma.DiaSemanaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiaSemanaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiaSemanaCountArgs<ExtArgs>
            result: $Utils.Optional<DiaSemanaCountAggregateOutputType> | number
          }
        }
      }
      Disciplina: {
        payload: Prisma.$DisciplinaPayload<ExtArgs>
        fields: Prisma.DisciplinaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisciplinaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisciplinaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          findFirst: {
            args: Prisma.DisciplinaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisciplinaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          findMany: {
            args: Prisma.DisciplinaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>[]
          }
          create: {
            args: Prisma.DisciplinaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          createMany: {
            args: Prisma.DisciplinaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisciplinaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>[]
          }
          delete: {
            args: Prisma.DisciplinaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          update: {
            args: Prisma.DisciplinaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          deleteMany: {
            args: Prisma.DisciplinaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisciplinaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DisciplinaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>[]
          }
          upsert: {
            args: Prisma.DisciplinaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          aggregate: {
            args: Prisma.DisciplinaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisciplina>
          }
          groupBy: {
            args: Prisma.DisciplinaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisciplinaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisciplinaCountArgs<ExtArgs>
            result: $Utils.Optional<DisciplinaCountAggregateOutputType> | number
          }
        }
      }
      Disponibilidade: {
        payload: Prisma.$DisponibilidadePayload<ExtArgs>
        fields: Prisma.DisponibilidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisponibilidadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisponibilidadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>
          }
          findFirst: {
            args: Prisma.DisponibilidadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisponibilidadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>
          }
          findMany: {
            args: Prisma.DisponibilidadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>[]
          }
          create: {
            args: Prisma.DisponibilidadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>
          }
          createMany: {
            args: Prisma.DisponibilidadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisponibilidadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>[]
          }
          delete: {
            args: Prisma.DisponibilidadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>
          }
          update: {
            args: Prisma.DisponibilidadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>
          }
          deleteMany: {
            args: Prisma.DisponibilidadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisponibilidadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DisponibilidadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>[]
          }
          upsert: {
            args: Prisma.DisponibilidadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>
          }
          aggregate: {
            args: Prisma.DisponibilidadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisponibilidade>
          }
          groupBy: {
            args: Prisma.DisponibilidadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisponibilidadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisponibilidadeCountArgs<ExtArgs>
            result: $Utils.Optional<DisponibilidadeCountAggregateOutputType> | number
          }
        }
      }
      Periodo: {
        payload: Prisma.$PeriodoPayload<ExtArgs>
        fields: Prisma.PeriodoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeriodoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeriodoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>
          }
          findFirst: {
            args: Prisma.PeriodoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeriodoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>
          }
          findMany: {
            args: Prisma.PeriodoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>[]
          }
          create: {
            args: Prisma.PeriodoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>
          }
          createMany: {
            args: Prisma.PeriodoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PeriodoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>[]
          }
          delete: {
            args: Prisma.PeriodoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>
          }
          update: {
            args: Prisma.PeriodoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>
          }
          deleteMany: {
            args: Prisma.PeriodoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PeriodoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PeriodoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>[]
          }
          upsert: {
            args: Prisma.PeriodoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>
          }
          aggregate: {
            args: Prisma.PeriodoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeriodo>
          }
          groupBy: {
            args: Prisma.PeriodoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeriodoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeriodoCountArgs<ExtArgs>
            result: $Utils.Optional<PeriodoCountAggregateOutputType> | number
          }
        }
      }
      Professor: {
        payload: Prisma.$ProfessorPayload<ExtArgs>
        fields: Prisma.ProfessorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          findFirst: {
            args: Prisma.ProfessorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          findMany: {
            args: Prisma.ProfessorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          create: {
            args: Prisma.ProfessorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          createMany: {
            args: Prisma.ProfessorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfessorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          delete: {
            args: Prisma.ProfessorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          update: {
            args: Prisma.ProfessorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          deleteMany: {
            args: Prisma.ProfessorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfessorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          upsert: {
            args: Prisma.ProfessorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          aggregate: {
            args: Prisma.ProfessorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessor>
          }
          groupBy: {
            args: Prisma.ProfessorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessorCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessorCountAggregateOutputType> | number
          }
        }
      }
      ProfDisciplinas: {
        payload: Prisma.$ProfDisciplinasPayload<ExtArgs>
        fields: Prisma.ProfDisciplinasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfDisciplinasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfDisciplinasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfDisciplinasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfDisciplinasPayload>
          }
          findFirst: {
            args: Prisma.ProfDisciplinasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfDisciplinasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfDisciplinasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfDisciplinasPayload>
          }
          findMany: {
            args: Prisma.ProfDisciplinasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfDisciplinasPayload>[]
          }
          create: {
            args: Prisma.ProfDisciplinasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfDisciplinasPayload>
          }
          createMany: {
            args: Prisma.ProfDisciplinasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfDisciplinasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfDisciplinasPayload>[]
          }
          delete: {
            args: Prisma.ProfDisciplinasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfDisciplinasPayload>
          }
          update: {
            args: Prisma.ProfDisciplinasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfDisciplinasPayload>
          }
          deleteMany: {
            args: Prisma.ProfDisciplinasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfDisciplinasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfDisciplinasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfDisciplinasPayload>[]
          }
          upsert: {
            args: Prisma.ProfDisciplinasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfDisciplinasPayload>
          }
          aggregate: {
            args: Prisma.ProfDisciplinasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfDisciplinas>
          }
          groupBy: {
            args: Prisma.ProfDisciplinasGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfDisciplinasGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfDisciplinasCountArgs<ExtArgs>
            result: $Utils.Optional<ProfDisciplinasCountAggregateOutputType> | number
          }
        }
      }
      Sala: {
        payload: Prisma.$SalaPayload<ExtArgs>
        fields: Prisma.SalaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          findFirst: {
            args: Prisma.SalaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          findMany: {
            args: Prisma.SalaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>[]
          }
          create: {
            args: Prisma.SalaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          createMany: {
            args: Prisma.SalaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>[]
          }
          delete: {
            args: Prisma.SalaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          update: {
            args: Prisma.SalaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          deleteMany: {
            args: Prisma.SalaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>[]
          }
          upsert: {
            args: Prisma.SalaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          aggregate: {
            args: Prisma.SalaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSala>
          }
          groupBy: {
            args: Prisma.SalaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalaCountArgs<ExtArgs>
            result: $Utils.Optional<SalaCountAggregateOutputType> | number
          }
        }
      }
      Tempo_Lectivo: {
        payload: Prisma.$Tempo_LectivoPayload<ExtArgs>
        fields: Prisma.Tempo_LectivoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Tempo_LectivoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tempo_LectivoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Tempo_LectivoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tempo_LectivoPayload>
          }
          findFirst: {
            args: Prisma.Tempo_LectivoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tempo_LectivoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Tempo_LectivoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tempo_LectivoPayload>
          }
          findMany: {
            args: Prisma.Tempo_LectivoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tempo_LectivoPayload>[]
          }
          create: {
            args: Prisma.Tempo_LectivoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tempo_LectivoPayload>
          }
          createMany: {
            args: Prisma.Tempo_LectivoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Tempo_LectivoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tempo_LectivoPayload>[]
          }
          delete: {
            args: Prisma.Tempo_LectivoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tempo_LectivoPayload>
          }
          update: {
            args: Prisma.Tempo_LectivoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tempo_LectivoPayload>
          }
          deleteMany: {
            args: Prisma.Tempo_LectivoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Tempo_LectivoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Tempo_LectivoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tempo_LectivoPayload>[]
          }
          upsert: {
            args: Prisma.Tempo_LectivoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tempo_LectivoPayload>
          }
          aggregate: {
            args: Prisma.Tempo_LectivoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTempo_Lectivo>
          }
          groupBy: {
            args: Prisma.Tempo_LectivoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tempo_LectivoGroupByOutputType>[]
          }
          count: {
            args: Prisma.Tempo_LectivoCountArgs<ExtArgs>
            result: $Utils.Optional<Tempo_LectivoCountAggregateOutputType> | number
          }
        }
      }
      Turma: {
        payload: Prisma.$TurmaPayload<ExtArgs>
        fields: Prisma.TurmaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TurmaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TurmaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          findFirst: {
            args: Prisma.TurmaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TurmaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          findMany: {
            args: Prisma.TurmaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>[]
          }
          create: {
            args: Prisma.TurmaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          createMany: {
            args: Prisma.TurmaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TurmaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>[]
          }
          delete: {
            args: Prisma.TurmaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          update: {
            args: Prisma.TurmaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          deleteMany: {
            args: Prisma.TurmaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TurmaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TurmaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>[]
          }
          upsert: {
            args: Prisma.TurmaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          aggregate: {
            args: Prisma.TurmaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTurma>
          }
          groupBy: {
            args: Prisma.TurmaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TurmaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TurmaCountArgs<ExtArgs>
            result: $Utils.Optional<TurmaCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    classe?: ClasseOmit
    curso?: CursoOmit
    diaSemana?: DiaSemanaOmit
    disciplina?: DisciplinaOmit
    disponibilidade?: DisponibilidadeOmit
    periodo?: PeriodoOmit
    professor?: ProfessorOmit
    profDisciplinas?: ProfDisciplinasOmit
    sala?: SalaOmit
    tempo_Lectivo?: Tempo_LectivoOmit
    turma?: TurmaOmit
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
   * Count Type ClasseCountOutputType
   */

  export type ClasseCountOutputType = {
    turmas: number
  }

  export type ClasseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turmas?: boolean | ClasseCountOutputTypeCountTurmasArgs
  }

  // Custom InputTypes
  /**
   * ClasseCountOutputType without action
   */
  export type ClasseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClasseCountOutputType
     */
    select?: ClasseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClasseCountOutputType without action
   */
  export type ClasseCountOutputTypeCountTurmasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurmaWhereInput
  }


  /**
   * Count Type CursoCountOutputType
   */

  export type CursoCountOutputType = {
    turmas: number
  }

  export type CursoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turmas?: boolean | CursoCountOutputTypeCountTurmasArgs
  }

  // Custom InputTypes
  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CursoCountOutputType
     */
    select?: CursoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountTurmasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurmaWhereInput
  }


  /**
   * Count Type DiaSemanaCountOutputType
   */

  export type DiaSemanaCountOutputType = {
    disponibilidades: number
    tempo_lectivo: number
  }

  export type DiaSemanaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disponibilidades?: boolean | DiaSemanaCountOutputTypeCountDisponibilidadesArgs
    tempo_lectivo?: boolean | DiaSemanaCountOutputTypeCountTempo_lectivoArgs
  }

  // Custom InputTypes
  /**
   * DiaSemanaCountOutputType without action
   */
  export type DiaSemanaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemanaCountOutputType
     */
    select?: DiaSemanaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiaSemanaCountOutputType without action
   */
  export type DiaSemanaCountOutputTypeCountDisponibilidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisponibilidadeWhereInput
  }

  /**
   * DiaSemanaCountOutputType without action
   */
  export type DiaSemanaCountOutputTypeCountTempo_lectivoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Tempo_LectivoWhereInput
  }


  /**
   * Count Type DisciplinaCountOutputType
   */

  export type DisciplinaCountOutputType = {
    profDisciplinas: number
    tempo_lectivo: number
  }

  export type DisciplinaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profDisciplinas?: boolean | DisciplinaCountOutputTypeCountProfDisciplinasArgs
    tempo_lectivo?: boolean | DisciplinaCountOutputTypeCountTempo_lectivoArgs
  }

  // Custom InputTypes
  /**
   * DisciplinaCountOutputType without action
   */
  export type DisciplinaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplinaCountOutputType
     */
    select?: DisciplinaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DisciplinaCountOutputType without action
   */
  export type DisciplinaCountOutputTypeCountProfDisciplinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfDisciplinasWhereInput
  }

  /**
   * DisciplinaCountOutputType without action
   */
  export type DisciplinaCountOutputTypeCountTempo_lectivoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Tempo_LectivoWhereInput
  }


  /**
   * Count Type PeriodoCountOutputType
   */

  export type PeriodoCountOutputType = {
    disponibilidades: number
    tempo_lectivo: number
  }

  export type PeriodoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disponibilidades?: boolean | PeriodoCountOutputTypeCountDisponibilidadesArgs
    tempo_lectivo?: boolean | PeriodoCountOutputTypeCountTempo_lectivoArgs
  }

  // Custom InputTypes
  /**
   * PeriodoCountOutputType without action
   */
  export type PeriodoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodoCountOutputType
     */
    select?: PeriodoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PeriodoCountOutputType without action
   */
  export type PeriodoCountOutputTypeCountDisponibilidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisponibilidadeWhereInput
  }

  /**
   * PeriodoCountOutputType without action
   */
  export type PeriodoCountOutputTypeCountTempo_lectivoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Tempo_LectivoWhereInput
  }


  /**
   * Count Type ProfessorCountOutputType
   */

  export type ProfessorCountOutputType = {
    profDisciplinas: number
    disponibilidades: number
    tempo_lectivo: number
  }

  export type ProfessorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profDisciplinas?: boolean | ProfessorCountOutputTypeCountProfDisciplinasArgs
    disponibilidades?: boolean | ProfessorCountOutputTypeCountDisponibilidadesArgs
    tempo_lectivo?: boolean | ProfessorCountOutputTypeCountTempo_lectivoArgs
  }

  // Custom InputTypes
  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorCountOutputType
     */
    select?: ProfessorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeCountProfDisciplinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfDisciplinasWhereInput
  }

  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeCountDisponibilidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisponibilidadeWhereInput
  }

  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeCountTempo_lectivoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Tempo_LectivoWhereInput
  }


  /**
   * Count Type SalaCountOutputType
   */

  export type SalaCountOutputType = {
    tempo_lectivo: number
  }

  export type SalaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tempo_lectivo?: boolean | SalaCountOutputTypeCountTempo_lectivoArgs
  }

  // Custom InputTypes
  /**
   * SalaCountOutputType without action
   */
  export type SalaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaCountOutputType
     */
    select?: SalaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SalaCountOutputType without action
   */
  export type SalaCountOutputTypeCountTempo_lectivoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Tempo_LectivoWhereInput
  }


  /**
   * Count Type TurmaCountOutputType
   */

  export type TurmaCountOutputType = {
    tempo_lectivo: number
  }

  export type TurmaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tempo_lectivo?: boolean | TurmaCountOutputTypeCountTempo_lectivoArgs
  }

  // Custom InputTypes
  /**
   * TurmaCountOutputType without action
   */
  export type TurmaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurmaCountOutputType
     */
    select?: TurmaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TurmaCountOutputType without action
   */
  export type TurmaCountOutputTypeCountTempo_lectivoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Tempo_LectivoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Classe
   */

  export type AggregateClasse = {
    _count: ClasseCountAggregateOutputType | null
    _min: ClasseMinAggregateOutputType | null
    _max: ClasseMaxAggregateOutputType | null
  }

  export type ClasseMinAggregateOutputType = {
    nome_classe: string | null
  }

  export type ClasseMaxAggregateOutputType = {
    nome_classe: string | null
  }

  export type ClasseCountAggregateOutputType = {
    nome_classe: number
    _all: number
  }


  export type ClasseMinAggregateInputType = {
    nome_classe?: true
  }

  export type ClasseMaxAggregateInputType = {
    nome_classe?: true
  }

  export type ClasseCountAggregateInputType = {
    nome_classe?: true
    _all?: true
  }

  export type ClasseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classe to aggregate.
     */
    where?: ClasseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClasseOrderByWithRelationInput | ClasseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClasseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClasseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClasseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClasseMaxAggregateInputType
  }

  export type GetClasseAggregateType<T extends ClasseAggregateArgs> = {
        [P in keyof T & keyof AggregateClasse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClasse[P]>
      : GetScalarType<T[P], AggregateClasse[P]>
  }




  export type ClasseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClasseWhereInput
    orderBy?: ClasseOrderByWithAggregationInput | ClasseOrderByWithAggregationInput[]
    by: ClasseScalarFieldEnum[] | ClasseScalarFieldEnum
    having?: ClasseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClasseCountAggregateInputType | true
    _min?: ClasseMinAggregateInputType
    _max?: ClasseMaxAggregateInputType
  }

  export type ClasseGroupByOutputType = {
    nome_classe: string
    _count: ClasseCountAggregateOutputType | null
    _min: ClasseMinAggregateOutputType | null
    _max: ClasseMaxAggregateOutputType | null
  }

  type GetClasseGroupByPayload<T extends ClasseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClasseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClasseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClasseGroupByOutputType[P]>
            : GetScalarType<T[P], ClasseGroupByOutputType[P]>
        }
      >
    >


  export type ClasseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome_classe?: boolean
    turmas?: boolean | Classe$turmasArgs<ExtArgs>
    _count?: boolean | ClasseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classe"]>

  export type ClasseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome_classe?: boolean
  }, ExtArgs["result"]["classe"]>

  export type ClasseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome_classe?: boolean
  }, ExtArgs["result"]["classe"]>

  export type ClasseSelectScalar = {
    nome_classe?: boolean
  }

  export type ClasseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nome_classe", ExtArgs["result"]["classe"]>
  export type ClasseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turmas?: boolean | Classe$turmasArgs<ExtArgs>
    _count?: boolean | ClasseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClasseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClasseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClassePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Classe"
    objects: {
      turmas: Prisma.$TurmaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nome_classe: string
    }, ExtArgs["result"]["classe"]>
    composites: {}
  }

  type ClasseGetPayload<S extends boolean | null | undefined | ClasseDefaultArgs> = $Result.GetResult<Prisma.$ClassePayload, S>

  type ClasseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClasseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClasseCountAggregateInputType | true
    }

  export interface ClasseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Classe'], meta: { name: 'Classe' } }
    /**
     * Find zero or one Classe that matches the filter.
     * @param {ClasseFindUniqueArgs} args - Arguments to find a Classe
     * @example
     * // Get one Classe
     * const classe = await prisma.classe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClasseFindUniqueArgs>(args: SelectSubset<T, ClasseFindUniqueArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Classe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClasseFindUniqueOrThrowArgs} args - Arguments to find a Classe
     * @example
     * // Get one Classe
     * const classe = await prisma.classe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClasseFindUniqueOrThrowArgs>(args: SelectSubset<T, ClasseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasseFindFirstArgs} args - Arguments to find a Classe
     * @example
     * // Get one Classe
     * const classe = await prisma.classe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClasseFindFirstArgs>(args?: SelectSubset<T, ClasseFindFirstArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasseFindFirstOrThrowArgs} args - Arguments to find a Classe
     * @example
     * // Get one Classe
     * const classe = await prisma.classe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClasseFindFirstOrThrowArgs>(args?: SelectSubset<T, ClasseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.classe.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.classe.findMany({ take: 10 })
     * 
     * // Only select the `nome_classe`
     * const classeWithNome_classeOnly = await prisma.classe.findMany({ select: { nome_classe: true } })
     * 
     */
    findMany<T extends ClasseFindManyArgs>(args?: SelectSubset<T, ClasseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Classe.
     * @param {ClasseCreateArgs} args - Arguments to create a Classe.
     * @example
     * // Create one Classe
     * const Classe = await prisma.classe.create({
     *   data: {
     *     // ... data to create a Classe
     *   }
     * })
     * 
     */
    create<T extends ClasseCreateArgs>(args: SelectSubset<T, ClasseCreateArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {ClasseCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const classe = await prisma.classe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClasseCreateManyArgs>(args?: SelectSubset<T, ClasseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {ClasseCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const classe = await prisma.classe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `nome_classe`
     * const classeWithNome_classeOnly = await prisma.classe.createManyAndReturn({
     *   select: { nome_classe: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClasseCreateManyAndReturnArgs>(args?: SelectSubset<T, ClasseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Classe.
     * @param {ClasseDeleteArgs} args - Arguments to delete one Classe.
     * @example
     * // Delete one Classe
     * const Classe = await prisma.classe.delete({
     *   where: {
     *     // ... filter to delete one Classe
     *   }
     * })
     * 
     */
    delete<T extends ClasseDeleteArgs>(args: SelectSubset<T, ClasseDeleteArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Classe.
     * @param {ClasseUpdateArgs} args - Arguments to update one Classe.
     * @example
     * // Update one Classe
     * const classe = await prisma.classe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClasseUpdateArgs>(args: SelectSubset<T, ClasseUpdateArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {ClasseDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.classe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClasseDeleteManyArgs>(args?: SelectSubset<T, ClasseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const classe = await prisma.classe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClasseUpdateManyArgs>(args: SelectSubset<T, ClasseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes and returns the data updated in the database.
     * @param {ClasseUpdateManyAndReturnArgs} args - Arguments to update many Classes.
     * @example
     * // Update many Classes
     * const classe = await prisma.classe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classes and only return the `nome_classe`
     * const classeWithNome_classeOnly = await prisma.classe.updateManyAndReturn({
     *   select: { nome_classe: true },
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
    updateManyAndReturn<T extends ClasseUpdateManyAndReturnArgs>(args: SelectSubset<T, ClasseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Classe.
     * @param {ClasseUpsertArgs} args - Arguments to update or create a Classe.
     * @example
     * // Update or create a Classe
     * const classe = await prisma.classe.upsert({
     *   create: {
     *     // ... data to create a Classe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classe we want to update
     *   }
     * })
     */
    upsert<T extends ClasseUpsertArgs>(args: SelectSubset<T, ClasseUpsertArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasseCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.classe.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClasseCountArgs>(
      args?: Subset<T, ClasseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClasseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClasseAggregateArgs>(args: Subset<T, ClasseAggregateArgs>): Prisma.PrismaPromise<GetClasseAggregateType<T>>

    /**
     * Group by Classe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasseGroupByArgs} args - Group by arguments.
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
      T extends ClasseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClasseGroupByArgs['orderBy'] }
        : { orderBy?: ClasseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClasseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClasseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Classe model
   */
  readonly fields: ClasseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Classe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClasseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    turmas<T extends Classe$turmasArgs<ExtArgs> = {}>(args?: Subset<T, Classe$turmasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Classe model
   */
  interface ClasseFieldRefs {
    readonly nome_classe: FieldRef<"Classe", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Classe findUnique
   */
  export type ClasseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * Filter, which Classe to fetch.
     */
    where: ClasseWhereUniqueInput
  }

  /**
   * Classe findUniqueOrThrow
   */
  export type ClasseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * Filter, which Classe to fetch.
     */
    where: ClasseWhereUniqueInput
  }

  /**
   * Classe findFirst
   */
  export type ClasseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * Filter, which Classe to fetch.
     */
    where?: ClasseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClasseOrderByWithRelationInput | ClasseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClasseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClasseScalarFieldEnum | ClasseScalarFieldEnum[]
  }

  /**
   * Classe findFirstOrThrow
   */
  export type ClasseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * Filter, which Classe to fetch.
     */
    where?: ClasseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClasseOrderByWithRelationInput | ClasseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClasseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClasseScalarFieldEnum | ClasseScalarFieldEnum[]
  }

  /**
   * Classe findMany
   */
  export type ClasseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClasseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClasseOrderByWithRelationInput | ClasseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClasseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClasseScalarFieldEnum | ClasseScalarFieldEnum[]
  }

  /**
   * Classe create
   */
  export type ClasseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * The data needed to create a Classe.
     */
    data: XOR<ClasseCreateInput, ClasseUncheckedCreateInput>
  }

  /**
   * Classe createMany
   */
  export type ClasseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClasseCreateManyInput | ClasseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Classe createManyAndReturn
   */
  export type ClasseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * The data used to create many Classes.
     */
    data: ClasseCreateManyInput | ClasseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Classe update
   */
  export type ClasseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * The data needed to update a Classe.
     */
    data: XOR<ClasseUpdateInput, ClasseUncheckedUpdateInput>
    /**
     * Choose, which Classe to update.
     */
    where: ClasseWhereUniqueInput
  }

  /**
   * Classe updateMany
   */
  export type ClasseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClasseUpdateManyMutationInput, ClasseUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClasseWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Classe updateManyAndReturn
   */
  export type ClasseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * The data used to update Classes.
     */
    data: XOR<ClasseUpdateManyMutationInput, ClasseUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClasseWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Classe upsert
   */
  export type ClasseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * The filter to search for the Classe to update in case it exists.
     */
    where: ClasseWhereUniqueInput
    /**
     * In case the Classe found by the `where` argument doesn't exist, create a new Classe with this data.
     */
    create: XOR<ClasseCreateInput, ClasseUncheckedCreateInput>
    /**
     * In case the Classe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClasseUpdateInput, ClasseUncheckedUpdateInput>
  }

  /**
   * Classe delete
   */
  export type ClasseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * Filter which Classe to delete.
     */
    where: ClasseWhereUniqueInput
  }

  /**
   * Classe deleteMany
   */
  export type ClasseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClasseWhereInput
    /**
     * Limit how many Classes to delete.
     */
    limit?: number
  }

  /**
   * Classe.turmas
   */
  export type Classe$turmasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    where?: TurmaWhereInput
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    cursor?: TurmaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Classe without action
   */
  export type ClasseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
  }


  /**
   * Model Curso
   */

  export type AggregateCurso = {
    _count: CursoCountAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  export type CursoMinAggregateOutputType = {
    nome_curso: string | null
  }

  export type CursoMaxAggregateOutputType = {
    nome_curso: string | null
  }

  export type CursoCountAggregateOutputType = {
    nome_curso: number
    _all: number
  }


  export type CursoMinAggregateInputType = {
    nome_curso?: true
  }

  export type CursoMaxAggregateInputType = {
    nome_curso?: true
  }

  export type CursoCountAggregateInputType = {
    nome_curso?: true
    _all?: true
  }

  export type CursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Curso to aggregate.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cursos
    **/
    _count?: true | CursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CursoMaxAggregateInputType
  }

  export type GetCursoAggregateType<T extends CursoAggregateArgs> = {
        [P in keyof T & keyof AggregateCurso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurso[P]>
      : GetScalarType<T[P], AggregateCurso[P]>
  }




  export type CursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursoWhereInput
    orderBy?: CursoOrderByWithAggregationInput | CursoOrderByWithAggregationInput[]
    by: CursoScalarFieldEnum[] | CursoScalarFieldEnum
    having?: CursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CursoCountAggregateInputType | true
    _min?: CursoMinAggregateInputType
    _max?: CursoMaxAggregateInputType
  }

  export type CursoGroupByOutputType = {
    nome_curso: string
    _count: CursoCountAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  type GetCursoGroupByPayload<T extends CursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CursoGroupByOutputType[P]>
            : GetScalarType<T[P], CursoGroupByOutputType[P]>
        }
      >
    >


  export type CursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome_curso?: boolean
    turmas?: boolean | Curso$turmasArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curso"]>

  export type CursoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome_curso?: boolean
  }, ExtArgs["result"]["curso"]>

  export type CursoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome_curso?: boolean
  }, ExtArgs["result"]["curso"]>

  export type CursoSelectScalar = {
    nome_curso?: boolean
  }

  export type CursoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nome_curso", ExtArgs["result"]["curso"]>
  export type CursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turmas?: boolean | Curso$turmasArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CursoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CursoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Curso"
    objects: {
      turmas: Prisma.$TurmaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nome_curso: string
    }, ExtArgs["result"]["curso"]>
    composites: {}
  }

  type CursoGetPayload<S extends boolean | null | undefined | CursoDefaultArgs> = $Result.GetResult<Prisma.$CursoPayload, S>

  type CursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CursoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CursoCountAggregateInputType | true
    }

  export interface CursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Curso'], meta: { name: 'Curso' } }
    /**
     * Find zero or one Curso that matches the filter.
     * @param {CursoFindUniqueArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CursoFindUniqueArgs>(args: SelectSubset<T, CursoFindUniqueArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Curso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CursoFindUniqueOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CursoFindUniqueOrThrowArgs>(args: SelectSubset<T, CursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindFirstArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CursoFindFirstArgs>(args?: SelectSubset<T, CursoFindFirstArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindFirstOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CursoFindFirstOrThrowArgs>(args?: SelectSubset<T, CursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cursos
     * const cursos = await prisma.curso.findMany()
     * 
     * // Get first 10 Cursos
     * const cursos = await prisma.curso.findMany({ take: 10 })
     * 
     * // Only select the `nome_curso`
     * const cursoWithNome_cursoOnly = await prisma.curso.findMany({ select: { nome_curso: true } })
     * 
     */
    findMany<T extends CursoFindManyArgs>(args?: SelectSubset<T, CursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Curso.
     * @param {CursoCreateArgs} args - Arguments to create a Curso.
     * @example
     * // Create one Curso
     * const Curso = await prisma.curso.create({
     *   data: {
     *     // ... data to create a Curso
     *   }
     * })
     * 
     */
    create<T extends CursoCreateArgs>(args: SelectSubset<T, CursoCreateArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cursos.
     * @param {CursoCreateManyArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const curso = await prisma.curso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CursoCreateManyArgs>(args?: SelectSubset<T, CursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cursos and returns the data saved in the database.
     * @param {CursoCreateManyAndReturnArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const curso = await prisma.curso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cursos and only return the `nome_curso`
     * const cursoWithNome_cursoOnly = await prisma.curso.createManyAndReturn({
     *   select: { nome_curso: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CursoCreateManyAndReturnArgs>(args?: SelectSubset<T, CursoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Curso.
     * @param {CursoDeleteArgs} args - Arguments to delete one Curso.
     * @example
     * // Delete one Curso
     * const Curso = await prisma.curso.delete({
     *   where: {
     *     // ... filter to delete one Curso
     *   }
     * })
     * 
     */
    delete<T extends CursoDeleteArgs>(args: SelectSubset<T, CursoDeleteArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Curso.
     * @param {CursoUpdateArgs} args - Arguments to update one Curso.
     * @example
     * // Update one Curso
     * const curso = await prisma.curso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CursoUpdateArgs>(args: SelectSubset<T, CursoUpdateArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cursos.
     * @param {CursoDeleteManyArgs} args - Arguments to filter Cursos to delete.
     * @example
     * // Delete a few Cursos
     * const { count } = await prisma.curso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CursoDeleteManyArgs>(args?: SelectSubset<T, CursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cursos
     * const curso = await prisma.curso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CursoUpdateManyArgs>(args: SelectSubset<T, CursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos and returns the data updated in the database.
     * @param {CursoUpdateManyAndReturnArgs} args - Arguments to update many Cursos.
     * @example
     * // Update many Cursos
     * const curso = await prisma.curso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cursos and only return the `nome_curso`
     * const cursoWithNome_cursoOnly = await prisma.curso.updateManyAndReturn({
     *   select: { nome_curso: true },
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
    updateManyAndReturn<T extends CursoUpdateManyAndReturnArgs>(args: SelectSubset<T, CursoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Curso.
     * @param {CursoUpsertArgs} args - Arguments to update or create a Curso.
     * @example
     * // Update or create a Curso
     * const curso = await prisma.curso.upsert({
     *   create: {
     *     // ... data to create a Curso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Curso we want to update
     *   }
     * })
     */
    upsert<T extends CursoUpsertArgs>(args: SelectSubset<T, CursoUpsertArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoCountArgs} args - Arguments to filter Cursos to count.
     * @example
     * // Count the number of Cursos
     * const count = await prisma.curso.count({
     *   where: {
     *     // ... the filter for the Cursos we want to count
     *   }
     * })
    **/
    count<T extends CursoCountArgs>(
      args?: Subset<T, CursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CursoAggregateArgs>(args: Subset<T, CursoAggregateArgs>): Prisma.PrismaPromise<GetCursoAggregateType<T>>

    /**
     * Group by Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoGroupByArgs} args - Group by arguments.
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
      T extends CursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CursoGroupByArgs['orderBy'] }
        : { orderBy?: CursoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Curso model
   */
  readonly fields: CursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Curso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    turmas<T extends Curso$turmasArgs<ExtArgs> = {}>(args?: Subset<T, Curso$turmasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Curso model
   */
  interface CursoFieldRefs {
    readonly nome_curso: FieldRef<"Curso", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Curso findUnique
   */
  export type CursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso findUniqueOrThrow
   */
  export type CursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso findFirst
   */
  export type CursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso findFirstOrThrow
   */
  export type CursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso findMany
   */
  export type CursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Cursos to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso create
   */
  export type CursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The data needed to create a Curso.
     */
    data: XOR<CursoCreateInput, CursoUncheckedCreateInput>
  }

  /**
   * Curso createMany
   */
  export type CursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cursos.
     */
    data: CursoCreateManyInput | CursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Curso createManyAndReturn
   */
  export type CursoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * The data used to create many Cursos.
     */
    data: CursoCreateManyInput | CursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Curso update
   */
  export type CursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The data needed to update a Curso.
     */
    data: XOR<CursoUpdateInput, CursoUncheckedUpdateInput>
    /**
     * Choose, which Curso to update.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso updateMany
   */
  export type CursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cursos.
     */
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyInput>
    /**
     * Filter which Cursos to update
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to update.
     */
    limit?: number
  }

  /**
   * Curso updateManyAndReturn
   */
  export type CursoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * The data used to update Cursos.
     */
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyInput>
    /**
     * Filter which Cursos to update
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to update.
     */
    limit?: number
  }

  /**
   * Curso upsert
   */
  export type CursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The filter to search for the Curso to update in case it exists.
     */
    where: CursoWhereUniqueInput
    /**
     * In case the Curso found by the `where` argument doesn't exist, create a new Curso with this data.
     */
    create: XOR<CursoCreateInput, CursoUncheckedCreateInput>
    /**
     * In case the Curso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CursoUpdateInput, CursoUncheckedUpdateInput>
  }

  /**
   * Curso delete
   */
  export type CursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter which Curso to delete.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso deleteMany
   */
  export type CursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cursos to delete
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to delete.
     */
    limit?: number
  }

  /**
   * Curso.turmas
   */
  export type Curso$turmasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    where?: TurmaWhereInput
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    cursor?: TurmaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Curso without action
   */
  export type CursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
  }


  /**
   * Model DiaSemana
   */

  export type AggregateDiaSemana = {
    _count: DiaSemanaCountAggregateOutputType | null
    _min: DiaSemanaMinAggregateOutputType | null
    _max: DiaSemanaMaxAggregateOutputType | null
  }

  export type DiaSemanaMinAggregateOutputType = {
    nome_dia: string | null
  }

  export type DiaSemanaMaxAggregateOutputType = {
    nome_dia: string | null
  }

  export type DiaSemanaCountAggregateOutputType = {
    nome_dia: number
    _all: number
  }


  export type DiaSemanaMinAggregateInputType = {
    nome_dia?: true
  }

  export type DiaSemanaMaxAggregateInputType = {
    nome_dia?: true
  }

  export type DiaSemanaCountAggregateInputType = {
    nome_dia?: true
    _all?: true
  }

  export type DiaSemanaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiaSemana to aggregate.
     */
    where?: DiaSemanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiaSemanas to fetch.
     */
    orderBy?: DiaSemanaOrderByWithRelationInput | DiaSemanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiaSemanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiaSemanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiaSemanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiaSemanas
    **/
    _count?: true | DiaSemanaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiaSemanaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiaSemanaMaxAggregateInputType
  }

  export type GetDiaSemanaAggregateType<T extends DiaSemanaAggregateArgs> = {
        [P in keyof T & keyof AggregateDiaSemana]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiaSemana[P]>
      : GetScalarType<T[P], AggregateDiaSemana[P]>
  }




  export type DiaSemanaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiaSemanaWhereInput
    orderBy?: DiaSemanaOrderByWithAggregationInput | DiaSemanaOrderByWithAggregationInput[]
    by: DiaSemanaScalarFieldEnum[] | DiaSemanaScalarFieldEnum
    having?: DiaSemanaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiaSemanaCountAggregateInputType | true
    _min?: DiaSemanaMinAggregateInputType
    _max?: DiaSemanaMaxAggregateInputType
  }

  export type DiaSemanaGroupByOutputType = {
    nome_dia: string
    _count: DiaSemanaCountAggregateOutputType | null
    _min: DiaSemanaMinAggregateOutputType | null
    _max: DiaSemanaMaxAggregateOutputType | null
  }

  type GetDiaSemanaGroupByPayload<T extends DiaSemanaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiaSemanaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiaSemanaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiaSemanaGroupByOutputType[P]>
            : GetScalarType<T[P], DiaSemanaGroupByOutputType[P]>
        }
      >
    >


  export type DiaSemanaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome_dia?: boolean
    disponibilidades?: boolean | DiaSemana$disponibilidadesArgs<ExtArgs>
    tempo_lectivo?: boolean | DiaSemana$tempo_lectivoArgs<ExtArgs>
    _count?: boolean | DiaSemanaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diaSemana"]>

  export type DiaSemanaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome_dia?: boolean
  }, ExtArgs["result"]["diaSemana"]>

  export type DiaSemanaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome_dia?: boolean
  }, ExtArgs["result"]["diaSemana"]>

  export type DiaSemanaSelectScalar = {
    nome_dia?: boolean
  }

  export type DiaSemanaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nome_dia", ExtArgs["result"]["diaSemana"]>
  export type DiaSemanaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disponibilidades?: boolean | DiaSemana$disponibilidadesArgs<ExtArgs>
    tempo_lectivo?: boolean | DiaSemana$tempo_lectivoArgs<ExtArgs>
    _count?: boolean | DiaSemanaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DiaSemanaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DiaSemanaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DiaSemanaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiaSemana"
    objects: {
      disponibilidades: Prisma.$DisponibilidadePayload<ExtArgs>[]
      tempo_lectivo: Prisma.$Tempo_LectivoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nome_dia: string
    }, ExtArgs["result"]["diaSemana"]>
    composites: {}
  }

  type DiaSemanaGetPayload<S extends boolean | null | undefined | DiaSemanaDefaultArgs> = $Result.GetResult<Prisma.$DiaSemanaPayload, S>

  type DiaSemanaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiaSemanaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiaSemanaCountAggregateInputType | true
    }

  export interface DiaSemanaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiaSemana'], meta: { name: 'DiaSemana' } }
    /**
     * Find zero or one DiaSemana that matches the filter.
     * @param {DiaSemanaFindUniqueArgs} args - Arguments to find a DiaSemana
     * @example
     * // Get one DiaSemana
     * const diaSemana = await prisma.diaSemana.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiaSemanaFindUniqueArgs>(args: SelectSubset<T, DiaSemanaFindUniqueArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiaSemana that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiaSemanaFindUniqueOrThrowArgs} args - Arguments to find a DiaSemana
     * @example
     * // Get one DiaSemana
     * const diaSemana = await prisma.diaSemana.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiaSemanaFindUniqueOrThrowArgs>(args: SelectSubset<T, DiaSemanaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiaSemana that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaSemanaFindFirstArgs} args - Arguments to find a DiaSemana
     * @example
     * // Get one DiaSemana
     * const diaSemana = await prisma.diaSemana.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiaSemanaFindFirstArgs>(args?: SelectSubset<T, DiaSemanaFindFirstArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiaSemana that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaSemanaFindFirstOrThrowArgs} args - Arguments to find a DiaSemana
     * @example
     * // Get one DiaSemana
     * const diaSemana = await prisma.diaSemana.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiaSemanaFindFirstOrThrowArgs>(args?: SelectSubset<T, DiaSemanaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiaSemanas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaSemanaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiaSemanas
     * const diaSemanas = await prisma.diaSemana.findMany()
     * 
     * // Get first 10 DiaSemanas
     * const diaSemanas = await prisma.diaSemana.findMany({ take: 10 })
     * 
     * // Only select the `nome_dia`
     * const diaSemanaWithNome_diaOnly = await prisma.diaSemana.findMany({ select: { nome_dia: true } })
     * 
     */
    findMany<T extends DiaSemanaFindManyArgs>(args?: SelectSubset<T, DiaSemanaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiaSemana.
     * @param {DiaSemanaCreateArgs} args - Arguments to create a DiaSemana.
     * @example
     * // Create one DiaSemana
     * const DiaSemana = await prisma.diaSemana.create({
     *   data: {
     *     // ... data to create a DiaSemana
     *   }
     * })
     * 
     */
    create<T extends DiaSemanaCreateArgs>(args: SelectSubset<T, DiaSemanaCreateArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiaSemanas.
     * @param {DiaSemanaCreateManyArgs} args - Arguments to create many DiaSemanas.
     * @example
     * // Create many DiaSemanas
     * const diaSemana = await prisma.diaSemana.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiaSemanaCreateManyArgs>(args?: SelectSubset<T, DiaSemanaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiaSemanas and returns the data saved in the database.
     * @param {DiaSemanaCreateManyAndReturnArgs} args - Arguments to create many DiaSemanas.
     * @example
     * // Create many DiaSemanas
     * const diaSemana = await prisma.diaSemana.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiaSemanas and only return the `nome_dia`
     * const diaSemanaWithNome_diaOnly = await prisma.diaSemana.createManyAndReturn({
     *   select: { nome_dia: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiaSemanaCreateManyAndReturnArgs>(args?: SelectSubset<T, DiaSemanaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DiaSemana.
     * @param {DiaSemanaDeleteArgs} args - Arguments to delete one DiaSemana.
     * @example
     * // Delete one DiaSemana
     * const DiaSemana = await prisma.diaSemana.delete({
     *   where: {
     *     // ... filter to delete one DiaSemana
     *   }
     * })
     * 
     */
    delete<T extends DiaSemanaDeleteArgs>(args: SelectSubset<T, DiaSemanaDeleteArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiaSemana.
     * @param {DiaSemanaUpdateArgs} args - Arguments to update one DiaSemana.
     * @example
     * // Update one DiaSemana
     * const diaSemana = await prisma.diaSemana.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiaSemanaUpdateArgs>(args: SelectSubset<T, DiaSemanaUpdateArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiaSemanas.
     * @param {DiaSemanaDeleteManyArgs} args - Arguments to filter DiaSemanas to delete.
     * @example
     * // Delete a few DiaSemanas
     * const { count } = await prisma.diaSemana.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiaSemanaDeleteManyArgs>(args?: SelectSubset<T, DiaSemanaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiaSemanas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaSemanaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiaSemanas
     * const diaSemana = await prisma.diaSemana.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiaSemanaUpdateManyArgs>(args: SelectSubset<T, DiaSemanaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiaSemanas and returns the data updated in the database.
     * @param {DiaSemanaUpdateManyAndReturnArgs} args - Arguments to update many DiaSemanas.
     * @example
     * // Update many DiaSemanas
     * const diaSemana = await prisma.diaSemana.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DiaSemanas and only return the `nome_dia`
     * const diaSemanaWithNome_diaOnly = await prisma.diaSemana.updateManyAndReturn({
     *   select: { nome_dia: true },
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
    updateManyAndReturn<T extends DiaSemanaUpdateManyAndReturnArgs>(args: SelectSubset<T, DiaSemanaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DiaSemana.
     * @param {DiaSemanaUpsertArgs} args - Arguments to update or create a DiaSemana.
     * @example
     * // Update or create a DiaSemana
     * const diaSemana = await prisma.diaSemana.upsert({
     *   create: {
     *     // ... data to create a DiaSemana
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiaSemana we want to update
     *   }
     * })
     */
    upsert<T extends DiaSemanaUpsertArgs>(args: SelectSubset<T, DiaSemanaUpsertArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiaSemanas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaSemanaCountArgs} args - Arguments to filter DiaSemanas to count.
     * @example
     * // Count the number of DiaSemanas
     * const count = await prisma.diaSemana.count({
     *   where: {
     *     // ... the filter for the DiaSemanas we want to count
     *   }
     * })
    **/
    count<T extends DiaSemanaCountArgs>(
      args?: Subset<T, DiaSemanaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiaSemanaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiaSemana.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaSemanaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiaSemanaAggregateArgs>(args: Subset<T, DiaSemanaAggregateArgs>): Prisma.PrismaPromise<GetDiaSemanaAggregateType<T>>

    /**
     * Group by DiaSemana.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaSemanaGroupByArgs} args - Group by arguments.
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
      T extends DiaSemanaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiaSemanaGroupByArgs['orderBy'] }
        : { orderBy?: DiaSemanaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiaSemanaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiaSemanaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiaSemana model
   */
  readonly fields: DiaSemanaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiaSemana.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiaSemanaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    disponibilidades<T extends DiaSemana$disponibilidadesArgs<ExtArgs> = {}>(args?: Subset<T, DiaSemana$disponibilidadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tempo_lectivo<T extends DiaSemana$tempo_lectivoArgs<ExtArgs> = {}>(args?: Subset<T, DiaSemana$tempo_lectivoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tempo_LectivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DiaSemana model
   */
  interface DiaSemanaFieldRefs {
    readonly nome_dia: FieldRef<"DiaSemana", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DiaSemana findUnique
   */
  export type DiaSemanaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * Filter, which DiaSemana to fetch.
     */
    where: DiaSemanaWhereUniqueInput
  }

  /**
   * DiaSemana findUniqueOrThrow
   */
  export type DiaSemanaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * Filter, which DiaSemana to fetch.
     */
    where: DiaSemanaWhereUniqueInput
  }

  /**
   * DiaSemana findFirst
   */
  export type DiaSemanaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * Filter, which DiaSemana to fetch.
     */
    where?: DiaSemanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiaSemanas to fetch.
     */
    orderBy?: DiaSemanaOrderByWithRelationInput | DiaSemanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiaSemanas.
     */
    cursor?: DiaSemanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiaSemanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiaSemanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiaSemanas.
     */
    distinct?: DiaSemanaScalarFieldEnum | DiaSemanaScalarFieldEnum[]
  }

  /**
   * DiaSemana findFirstOrThrow
   */
  export type DiaSemanaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * Filter, which DiaSemana to fetch.
     */
    where?: DiaSemanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiaSemanas to fetch.
     */
    orderBy?: DiaSemanaOrderByWithRelationInput | DiaSemanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiaSemanas.
     */
    cursor?: DiaSemanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiaSemanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiaSemanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiaSemanas.
     */
    distinct?: DiaSemanaScalarFieldEnum | DiaSemanaScalarFieldEnum[]
  }

  /**
   * DiaSemana findMany
   */
  export type DiaSemanaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * Filter, which DiaSemanas to fetch.
     */
    where?: DiaSemanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiaSemanas to fetch.
     */
    orderBy?: DiaSemanaOrderByWithRelationInput | DiaSemanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiaSemanas.
     */
    cursor?: DiaSemanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiaSemanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiaSemanas.
     */
    skip?: number
    distinct?: DiaSemanaScalarFieldEnum | DiaSemanaScalarFieldEnum[]
  }

  /**
   * DiaSemana create
   */
  export type DiaSemanaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * The data needed to create a DiaSemana.
     */
    data: XOR<DiaSemanaCreateInput, DiaSemanaUncheckedCreateInput>
  }

  /**
   * DiaSemana createMany
   */
  export type DiaSemanaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiaSemanas.
     */
    data: DiaSemanaCreateManyInput | DiaSemanaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiaSemana createManyAndReturn
   */
  export type DiaSemanaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * The data used to create many DiaSemanas.
     */
    data: DiaSemanaCreateManyInput | DiaSemanaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiaSemana update
   */
  export type DiaSemanaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * The data needed to update a DiaSemana.
     */
    data: XOR<DiaSemanaUpdateInput, DiaSemanaUncheckedUpdateInput>
    /**
     * Choose, which DiaSemana to update.
     */
    where: DiaSemanaWhereUniqueInput
  }

  /**
   * DiaSemana updateMany
   */
  export type DiaSemanaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiaSemanas.
     */
    data: XOR<DiaSemanaUpdateManyMutationInput, DiaSemanaUncheckedUpdateManyInput>
    /**
     * Filter which DiaSemanas to update
     */
    where?: DiaSemanaWhereInput
    /**
     * Limit how many DiaSemanas to update.
     */
    limit?: number
  }

  /**
   * DiaSemana updateManyAndReturn
   */
  export type DiaSemanaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * The data used to update DiaSemanas.
     */
    data: XOR<DiaSemanaUpdateManyMutationInput, DiaSemanaUncheckedUpdateManyInput>
    /**
     * Filter which DiaSemanas to update
     */
    where?: DiaSemanaWhereInput
    /**
     * Limit how many DiaSemanas to update.
     */
    limit?: number
  }

  /**
   * DiaSemana upsert
   */
  export type DiaSemanaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * The filter to search for the DiaSemana to update in case it exists.
     */
    where: DiaSemanaWhereUniqueInput
    /**
     * In case the DiaSemana found by the `where` argument doesn't exist, create a new DiaSemana with this data.
     */
    create: XOR<DiaSemanaCreateInput, DiaSemanaUncheckedCreateInput>
    /**
     * In case the DiaSemana was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiaSemanaUpdateInput, DiaSemanaUncheckedUpdateInput>
  }

  /**
   * DiaSemana delete
   */
  export type DiaSemanaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * Filter which DiaSemana to delete.
     */
    where: DiaSemanaWhereUniqueInput
  }

  /**
   * DiaSemana deleteMany
   */
  export type DiaSemanaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiaSemanas to delete
     */
    where?: DiaSemanaWhereInput
    /**
     * Limit how many DiaSemanas to delete.
     */
    limit?: number
  }

  /**
   * DiaSemana.disponibilidades
   */
  export type DiaSemana$disponibilidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    where?: DisponibilidadeWhereInput
    orderBy?: DisponibilidadeOrderByWithRelationInput | DisponibilidadeOrderByWithRelationInput[]
    cursor?: DisponibilidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisponibilidadeScalarFieldEnum | DisponibilidadeScalarFieldEnum[]
  }

  /**
   * DiaSemana.tempo_lectivo
   */
  export type DiaSemana$tempo_lectivoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tempo_Lectivo
     */
    select?: Tempo_LectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tempo_Lectivo
     */
    omit?: Tempo_LectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tempo_LectivoInclude<ExtArgs> | null
    where?: Tempo_LectivoWhereInput
    orderBy?: Tempo_LectivoOrderByWithRelationInput | Tempo_LectivoOrderByWithRelationInput[]
    cursor?: Tempo_LectivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tempo_LectivoScalarFieldEnum | Tempo_LectivoScalarFieldEnum[]
  }

  /**
   * DiaSemana without action
   */
  export type DiaSemanaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
  }


  /**
   * Model Disciplina
   */

  export type AggregateDisciplina = {
    _count: DisciplinaCountAggregateOutputType | null
    _min: DisciplinaMinAggregateOutputType | null
    _max: DisciplinaMaxAggregateOutputType | null
  }

  export type DisciplinaMinAggregateOutputType = {
    nome_disciplina: string | null
  }

  export type DisciplinaMaxAggregateOutputType = {
    nome_disciplina: string | null
  }

  export type DisciplinaCountAggregateOutputType = {
    nome_disciplina: number
    _all: number
  }


  export type DisciplinaMinAggregateInputType = {
    nome_disciplina?: true
  }

  export type DisciplinaMaxAggregateInputType = {
    nome_disciplina?: true
  }

  export type DisciplinaCountAggregateInputType = {
    nome_disciplina?: true
    _all?: true
  }

  export type DisciplinaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disciplina to aggregate.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disciplinas
    **/
    _count?: true | DisciplinaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisciplinaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisciplinaMaxAggregateInputType
  }

  export type GetDisciplinaAggregateType<T extends DisciplinaAggregateArgs> = {
        [P in keyof T & keyof AggregateDisciplina]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisciplina[P]>
      : GetScalarType<T[P], AggregateDisciplina[P]>
  }




  export type DisciplinaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisciplinaWhereInput
    orderBy?: DisciplinaOrderByWithAggregationInput | DisciplinaOrderByWithAggregationInput[]
    by: DisciplinaScalarFieldEnum[] | DisciplinaScalarFieldEnum
    having?: DisciplinaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisciplinaCountAggregateInputType | true
    _min?: DisciplinaMinAggregateInputType
    _max?: DisciplinaMaxAggregateInputType
  }

  export type DisciplinaGroupByOutputType = {
    nome_disciplina: string
    _count: DisciplinaCountAggregateOutputType | null
    _min: DisciplinaMinAggregateOutputType | null
    _max: DisciplinaMaxAggregateOutputType | null
  }

  type GetDisciplinaGroupByPayload<T extends DisciplinaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisciplinaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisciplinaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisciplinaGroupByOutputType[P]>
            : GetScalarType<T[P], DisciplinaGroupByOutputType[P]>
        }
      >
    >


  export type DisciplinaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome_disciplina?: boolean
    profDisciplinas?: boolean | Disciplina$profDisciplinasArgs<ExtArgs>
    tempo_lectivo?: boolean | Disciplina$tempo_lectivoArgs<ExtArgs>
    _count?: boolean | DisciplinaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplina"]>

  export type DisciplinaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome_disciplina?: boolean
  }, ExtArgs["result"]["disciplina"]>

  export type DisciplinaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome_disciplina?: boolean
  }, ExtArgs["result"]["disciplina"]>

  export type DisciplinaSelectScalar = {
    nome_disciplina?: boolean
  }

  export type DisciplinaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nome_disciplina", ExtArgs["result"]["disciplina"]>
  export type DisciplinaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profDisciplinas?: boolean | Disciplina$profDisciplinasArgs<ExtArgs>
    tempo_lectivo?: boolean | Disciplina$tempo_lectivoArgs<ExtArgs>
    _count?: boolean | DisciplinaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DisciplinaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DisciplinaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DisciplinaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Disciplina"
    objects: {
      profDisciplinas: Prisma.$ProfDisciplinasPayload<ExtArgs>[]
      tempo_lectivo: Prisma.$Tempo_LectivoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nome_disciplina: string
    }, ExtArgs["result"]["disciplina"]>
    composites: {}
  }

  type DisciplinaGetPayload<S extends boolean | null | undefined | DisciplinaDefaultArgs> = $Result.GetResult<Prisma.$DisciplinaPayload, S>

  type DisciplinaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisciplinaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisciplinaCountAggregateInputType | true
    }

  export interface DisciplinaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Disciplina'], meta: { name: 'Disciplina' } }
    /**
     * Find zero or one Disciplina that matches the filter.
     * @param {DisciplinaFindUniqueArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisciplinaFindUniqueArgs>(args: SelectSubset<T, DisciplinaFindUniqueArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disciplina that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisciplinaFindUniqueOrThrowArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisciplinaFindUniqueOrThrowArgs>(args: SelectSubset<T, DisciplinaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disciplina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaFindFirstArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisciplinaFindFirstArgs>(args?: SelectSubset<T, DisciplinaFindFirstArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disciplina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaFindFirstOrThrowArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisciplinaFindFirstOrThrowArgs>(args?: SelectSubset<T, DisciplinaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disciplinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disciplinas
     * const disciplinas = await prisma.disciplina.findMany()
     * 
     * // Get first 10 Disciplinas
     * const disciplinas = await prisma.disciplina.findMany({ take: 10 })
     * 
     * // Only select the `nome_disciplina`
     * const disciplinaWithNome_disciplinaOnly = await prisma.disciplina.findMany({ select: { nome_disciplina: true } })
     * 
     */
    findMany<T extends DisciplinaFindManyArgs>(args?: SelectSubset<T, DisciplinaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disciplina.
     * @param {DisciplinaCreateArgs} args - Arguments to create a Disciplina.
     * @example
     * // Create one Disciplina
     * const Disciplina = await prisma.disciplina.create({
     *   data: {
     *     // ... data to create a Disciplina
     *   }
     * })
     * 
     */
    create<T extends DisciplinaCreateArgs>(args: SelectSubset<T, DisciplinaCreateArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disciplinas.
     * @param {DisciplinaCreateManyArgs} args - Arguments to create many Disciplinas.
     * @example
     * // Create many Disciplinas
     * const disciplina = await prisma.disciplina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisciplinaCreateManyArgs>(args?: SelectSubset<T, DisciplinaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Disciplinas and returns the data saved in the database.
     * @param {DisciplinaCreateManyAndReturnArgs} args - Arguments to create many Disciplinas.
     * @example
     * // Create many Disciplinas
     * const disciplina = await prisma.disciplina.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Disciplinas and only return the `nome_disciplina`
     * const disciplinaWithNome_disciplinaOnly = await prisma.disciplina.createManyAndReturn({
     *   select: { nome_disciplina: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisciplinaCreateManyAndReturnArgs>(args?: SelectSubset<T, DisciplinaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Disciplina.
     * @param {DisciplinaDeleteArgs} args - Arguments to delete one Disciplina.
     * @example
     * // Delete one Disciplina
     * const Disciplina = await prisma.disciplina.delete({
     *   where: {
     *     // ... filter to delete one Disciplina
     *   }
     * })
     * 
     */
    delete<T extends DisciplinaDeleteArgs>(args: SelectSubset<T, DisciplinaDeleteArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disciplina.
     * @param {DisciplinaUpdateArgs} args - Arguments to update one Disciplina.
     * @example
     * // Update one Disciplina
     * const disciplina = await prisma.disciplina.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisciplinaUpdateArgs>(args: SelectSubset<T, DisciplinaUpdateArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disciplinas.
     * @param {DisciplinaDeleteManyArgs} args - Arguments to filter Disciplinas to delete.
     * @example
     * // Delete a few Disciplinas
     * const { count } = await prisma.disciplina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisciplinaDeleteManyArgs>(args?: SelectSubset<T, DisciplinaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disciplinas
     * const disciplina = await prisma.disciplina.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisciplinaUpdateManyArgs>(args: SelectSubset<T, DisciplinaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplinas and returns the data updated in the database.
     * @param {DisciplinaUpdateManyAndReturnArgs} args - Arguments to update many Disciplinas.
     * @example
     * // Update many Disciplinas
     * const disciplina = await prisma.disciplina.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Disciplinas and only return the `nome_disciplina`
     * const disciplinaWithNome_disciplinaOnly = await prisma.disciplina.updateManyAndReturn({
     *   select: { nome_disciplina: true },
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
    updateManyAndReturn<T extends DisciplinaUpdateManyAndReturnArgs>(args: SelectSubset<T, DisciplinaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Disciplina.
     * @param {DisciplinaUpsertArgs} args - Arguments to update or create a Disciplina.
     * @example
     * // Update or create a Disciplina
     * const disciplina = await prisma.disciplina.upsert({
     *   create: {
     *     // ... data to create a Disciplina
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disciplina we want to update
     *   }
     * })
     */
    upsert<T extends DisciplinaUpsertArgs>(args: SelectSubset<T, DisciplinaUpsertArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaCountArgs} args - Arguments to filter Disciplinas to count.
     * @example
     * // Count the number of Disciplinas
     * const count = await prisma.disciplina.count({
     *   where: {
     *     // ... the filter for the Disciplinas we want to count
     *   }
     * })
    **/
    count<T extends DisciplinaCountArgs>(
      args?: Subset<T, DisciplinaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisciplinaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disciplina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DisciplinaAggregateArgs>(args: Subset<T, DisciplinaAggregateArgs>): Prisma.PrismaPromise<GetDisciplinaAggregateType<T>>

    /**
     * Group by Disciplina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaGroupByArgs} args - Group by arguments.
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
      T extends DisciplinaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisciplinaGroupByArgs['orderBy'] }
        : { orderBy?: DisciplinaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DisciplinaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisciplinaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Disciplina model
   */
  readonly fields: DisciplinaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Disciplina.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisciplinaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profDisciplinas<T extends Disciplina$profDisciplinasArgs<ExtArgs> = {}>(args?: Subset<T, Disciplina$profDisciplinasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfDisciplinasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tempo_lectivo<T extends Disciplina$tempo_lectivoArgs<ExtArgs> = {}>(args?: Subset<T, Disciplina$tempo_lectivoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tempo_LectivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Disciplina model
   */
  interface DisciplinaFieldRefs {
    readonly nome_disciplina: FieldRef<"Disciplina", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Disciplina findUnique
   */
  export type DisciplinaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina findUniqueOrThrow
   */
  export type DisciplinaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina findFirst
   */
  export type DisciplinaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disciplinas.
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disciplinas.
     */
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * Disciplina findFirstOrThrow
   */
  export type DisciplinaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disciplinas.
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disciplinas.
     */
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * Disciplina findMany
   */
  export type DisciplinaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplinas to fetch.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disciplinas.
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * Disciplina create
   */
  export type DisciplinaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * The data needed to create a Disciplina.
     */
    data: XOR<DisciplinaCreateInput, DisciplinaUncheckedCreateInput>
  }

  /**
   * Disciplina createMany
   */
  export type DisciplinaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disciplinas.
     */
    data: DisciplinaCreateManyInput | DisciplinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disciplina createManyAndReturn
   */
  export type DisciplinaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * The data used to create many Disciplinas.
     */
    data: DisciplinaCreateManyInput | DisciplinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disciplina update
   */
  export type DisciplinaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * The data needed to update a Disciplina.
     */
    data: XOR<DisciplinaUpdateInput, DisciplinaUncheckedUpdateInput>
    /**
     * Choose, which Disciplina to update.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina updateMany
   */
  export type DisciplinaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disciplinas.
     */
    data: XOR<DisciplinaUpdateManyMutationInput, DisciplinaUncheckedUpdateManyInput>
    /**
     * Filter which Disciplinas to update
     */
    where?: DisciplinaWhereInput
    /**
     * Limit how many Disciplinas to update.
     */
    limit?: number
  }

  /**
   * Disciplina updateManyAndReturn
   */
  export type DisciplinaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * The data used to update Disciplinas.
     */
    data: XOR<DisciplinaUpdateManyMutationInput, DisciplinaUncheckedUpdateManyInput>
    /**
     * Filter which Disciplinas to update
     */
    where?: DisciplinaWhereInput
    /**
     * Limit how many Disciplinas to update.
     */
    limit?: number
  }

  /**
   * Disciplina upsert
   */
  export type DisciplinaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * The filter to search for the Disciplina to update in case it exists.
     */
    where: DisciplinaWhereUniqueInput
    /**
     * In case the Disciplina found by the `where` argument doesn't exist, create a new Disciplina with this data.
     */
    create: XOR<DisciplinaCreateInput, DisciplinaUncheckedCreateInput>
    /**
     * In case the Disciplina was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisciplinaUpdateInput, DisciplinaUncheckedUpdateInput>
  }

  /**
   * Disciplina delete
   */
  export type DisciplinaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter which Disciplina to delete.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina deleteMany
   */
  export type DisciplinaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disciplinas to delete
     */
    where?: DisciplinaWhereInput
    /**
     * Limit how many Disciplinas to delete.
     */
    limit?: number
  }

  /**
   * Disciplina.profDisciplinas
   */
  export type Disciplina$profDisciplinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfDisciplinas
     */
    select?: ProfDisciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfDisciplinas
     */
    omit?: ProfDisciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfDisciplinasInclude<ExtArgs> | null
    where?: ProfDisciplinasWhereInput
    orderBy?: ProfDisciplinasOrderByWithRelationInput | ProfDisciplinasOrderByWithRelationInput[]
    cursor?: ProfDisciplinasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfDisciplinasScalarFieldEnum | ProfDisciplinasScalarFieldEnum[]
  }

  /**
   * Disciplina.tempo_lectivo
   */
  export type Disciplina$tempo_lectivoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tempo_Lectivo
     */
    select?: Tempo_LectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tempo_Lectivo
     */
    omit?: Tempo_LectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tempo_LectivoInclude<ExtArgs> | null
    where?: Tempo_LectivoWhereInput
    orderBy?: Tempo_LectivoOrderByWithRelationInput | Tempo_LectivoOrderByWithRelationInput[]
    cursor?: Tempo_LectivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tempo_LectivoScalarFieldEnum | Tempo_LectivoScalarFieldEnum[]
  }

  /**
   * Disciplina without action
   */
  export type DisciplinaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
  }


  /**
   * Model Disponibilidade
   */

  export type AggregateDisponibilidade = {
    _count: DisponibilidadeCountAggregateOutputType | null
    _avg: DisponibilidadeAvgAggregateOutputType | null
    _sum: DisponibilidadeSumAggregateOutputType | null
    _min: DisponibilidadeMinAggregateOutputType | null
    _max: DisponibilidadeMaxAggregateOutputType | null
  }

  export type DisponibilidadeAvgAggregateOutputType = {
    id_disponibilidade: number | null
    professorId: number | null
    ordem: number | null
  }

  export type DisponibilidadeSumAggregateOutputType = {
    id_disponibilidade: number | null
    professorId: number | null
    ordem: number | null
  }

  export type DisponibilidadeMinAggregateOutputType = {
    id_disponibilidade: number | null
    professorId: number | null
    nome_dia: string | null
    nome_periodo: string | null
    ordem: number | null
  }

  export type DisponibilidadeMaxAggregateOutputType = {
    id_disponibilidade: number | null
    professorId: number | null
    nome_dia: string | null
    nome_periodo: string | null
    ordem: number | null
  }

  export type DisponibilidadeCountAggregateOutputType = {
    id_disponibilidade: number
    professorId: number
    nome_dia: number
    nome_periodo: number
    ordem: number
    _all: number
  }


  export type DisponibilidadeAvgAggregateInputType = {
    id_disponibilidade?: true
    professorId?: true
    ordem?: true
  }

  export type DisponibilidadeSumAggregateInputType = {
    id_disponibilidade?: true
    professorId?: true
    ordem?: true
  }

  export type DisponibilidadeMinAggregateInputType = {
    id_disponibilidade?: true
    professorId?: true
    nome_dia?: true
    nome_periodo?: true
    ordem?: true
  }

  export type DisponibilidadeMaxAggregateInputType = {
    id_disponibilidade?: true
    professorId?: true
    nome_dia?: true
    nome_periodo?: true
    ordem?: true
  }

  export type DisponibilidadeCountAggregateInputType = {
    id_disponibilidade?: true
    professorId?: true
    nome_dia?: true
    nome_periodo?: true
    ordem?: true
    _all?: true
  }

  export type DisponibilidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disponibilidade to aggregate.
     */
    where?: DisponibilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilidades to fetch.
     */
    orderBy?: DisponibilidadeOrderByWithRelationInput | DisponibilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisponibilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disponibilidades
    **/
    _count?: true | DisponibilidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DisponibilidadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DisponibilidadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisponibilidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisponibilidadeMaxAggregateInputType
  }

  export type GetDisponibilidadeAggregateType<T extends DisponibilidadeAggregateArgs> = {
        [P in keyof T & keyof AggregateDisponibilidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisponibilidade[P]>
      : GetScalarType<T[P], AggregateDisponibilidade[P]>
  }




  export type DisponibilidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisponibilidadeWhereInput
    orderBy?: DisponibilidadeOrderByWithAggregationInput | DisponibilidadeOrderByWithAggregationInput[]
    by: DisponibilidadeScalarFieldEnum[] | DisponibilidadeScalarFieldEnum
    having?: DisponibilidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisponibilidadeCountAggregateInputType | true
    _avg?: DisponibilidadeAvgAggregateInputType
    _sum?: DisponibilidadeSumAggregateInputType
    _min?: DisponibilidadeMinAggregateInputType
    _max?: DisponibilidadeMaxAggregateInputType
  }

  export type DisponibilidadeGroupByOutputType = {
    id_disponibilidade: number
    professorId: number
    nome_dia: string
    nome_periodo: string
    ordem: number
    _count: DisponibilidadeCountAggregateOutputType | null
    _avg: DisponibilidadeAvgAggregateOutputType | null
    _sum: DisponibilidadeSumAggregateOutputType | null
    _min: DisponibilidadeMinAggregateOutputType | null
    _max: DisponibilidadeMaxAggregateOutputType | null
  }

  type GetDisponibilidadeGroupByPayload<T extends DisponibilidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisponibilidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisponibilidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisponibilidadeGroupByOutputType[P]>
            : GetScalarType<T[P], DisponibilidadeGroupByOutputType[P]>
        }
      >
    >


  export type DisponibilidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_disponibilidade?: boolean
    professorId?: boolean
    nome_dia?: boolean
    nome_periodo?: boolean
    ordem?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    dia?: boolean | DiaSemanaDefaultArgs<ExtArgs>
    periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disponibilidade"]>

  export type DisponibilidadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_disponibilidade?: boolean
    professorId?: boolean
    nome_dia?: boolean
    nome_periodo?: boolean
    ordem?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    dia?: boolean | DiaSemanaDefaultArgs<ExtArgs>
    periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disponibilidade"]>

  export type DisponibilidadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_disponibilidade?: boolean
    professorId?: boolean
    nome_dia?: boolean
    nome_periodo?: boolean
    ordem?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    dia?: boolean | DiaSemanaDefaultArgs<ExtArgs>
    periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disponibilidade"]>

  export type DisponibilidadeSelectScalar = {
    id_disponibilidade?: boolean
    professorId?: boolean
    nome_dia?: boolean
    nome_periodo?: boolean
    ordem?: boolean
  }

  export type DisponibilidadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_disponibilidade" | "professorId" | "nome_dia" | "nome_periodo" | "ordem", ExtArgs["result"]["disponibilidade"]>
  export type DisponibilidadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    dia?: boolean | DiaSemanaDefaultArgs<ExtArgs>
    periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
  }
  export type DisponibilidadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    dia?: boolean | DiaSemanaDefaultArgs<ExtArgs>
    periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
  }
  export type DisponibilidadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    dia?: boolean | DiaSemanaDefaultArgs<ExtArgs>
    periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
  }

  export type $DisponibilidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Disponibilidade"
    objects: {
      professor: Prisma.$ProfessorPayload<ExtArgs>
      dia: Prisma.$DiaSemanaPayload<ExtArgs>
      periodo: Prisma.$PeriodoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_disponibilidade: number
      professorId: number
      nome_dia: string
      nome_periodo: string
      ordem: number
    }, ExtArgs["result"]["disponibilidade"]>
    composites: {}
  }

  type DisponibilidadeGetPayload<S extends boolean | null | undefined | DisponibilidadeDefaultArgs> = $Result.GetResult<Prisma.$DisponibilidadePayload, S>

  type DisponibilidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisponibilidadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisponibilidadeCountAggregateInputType | true
    }

  export interface DisponibilidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Disponibilidade'], meta: { name: 'Disponibilidade' } }
    /**
     * Find zero or one Disponibilidade that matches the filter.
     * @param {DisponibilidadeFindUniqueArgs} args - Arguments to find a Disponibilidade
     * @example
     * // Get one Disponibilidade
     * const disponibilidade = await prisma.disponibilidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisponibilidadeFindUniqueArgs>(args: SelectSubset<T, DisponibilidadeFindUniqueArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disponibilidade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisponibilidadeFindUniqueOrThrowArgs} args - Arguments to find a Disponibilidade
     * @example
     * // Get one Disponibilidade
     * const disponibilidade = await prisma.disponibilidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisponibilidadeFindUniqueOrThrowArgs>(args: SelectSubset<T, DisponibilidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disponibilidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadeFindFirstArgs} args - Arguments to find a Disponibilidade
     * @example
     * // Get one Disponibilidade
     * const disponibilidade = await prisma.disponibilidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisponibilidadeFindFirstArgs>(args?: SelectSubset<T, DisponibilidadeFindFirstArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disponibilidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadeFindFirstOrThrowArgs} args - Arguments to find a Disponibilidade
     * @example
     * // Get one Disponibilidade
     * const disponibilidade = await prisma.disponibilidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisponibilidadeFindFirstOrThrowArgs>(args?: SelectSubset<T, DisponibilidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disponibilidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disponibilidades
     * const disponibilidades = await prisma.disponibilidade.findMany()
     * 
     * // Get first 10 Disponibilidades
     * const disponibilidades = await prisma.disponibilidade.findMany({ take: 10 })
     * 
     * // Only select the `id_disponibilidade`
     * const disponibilidadeWithId_disponibilidadeOnly = await prisma.disponibilidade.findMany({ select: { id_disponibilidade: true } })
     * 
     */
    findMany<T extends DisponibilidadeFindManyArgs>(args?: SelectSubset<T, DisponibilidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disponibilidade.
     * @param {DisponibilidadeCreateArgs} args - Arguments to create a Disponibilidade.
     * @example
     * // Create one Disponibilidade
     * const Disponibilidade = await prisma.disponibilidade.create({
     *   data: {
     *     // ... data to create a Disponibilidade
     *   }
     * })
     * 
     */
    create<T extends DisponibilidadeCreateArgs>(args: SelectSubset<T, DisponibilidadeCreateArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disponibilidades.
     * @param {DisponibilidadeCreateManyArgs} args - Arguments to create many Disponibilidades.
     * @example
     * // Create many Disponibilidades
     * const disponibilidade = await prisma.disponibilidade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisponibilidadeCreateManyArgs>(args?: SelectSubset<T, DisponibilidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Disponibilidades and returns the data saved in the database.
     * @param {DisponibilidadeCreateManyAndReturnArgs} args - Arguments to create many Disponibilidades.
     * @example
     * // Create many Disponibilidades
     * const disponibilidade = await prisma.disponibilidade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Disponibilidades and only return the `id_disponibilidade`
     * const disponibilidadeWithId_disponibilidadeOnly = await prisma.disponibilidade.createManyAndReturn({
     *   select: { id_disponibilidade: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisponibilidadeCreateManyAndReturnArgs>(args?: SelectSubset<T, DisponibilidadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Disponibilidade.
     * @param {DisponibilidadeDeleteArgs} args - Arguments to delete one Disponibilidade.
     * @example
     * // Delete one Disponibilidade
     * const Disponibilidade = await prisma.disponibilidade.delete({
     *   where: {
     *     // ... filter to delete one Disponibilidade
     *   }
     * })
     * 
     */
    delete<T extends DisponibilidadeDeleteArgs>(args: SelectSubset<T, DisponibilidadeDeleteArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disponibilidade.
     * @param {DisponibilidadeUpdateArgs} args - Arguments to update one Disponibilidade.
     * @example
     * // Update one Disponibilidade
     * const disponibilidade = await prisma.disponibilidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisponibilidadeUpdateArgs>(args: SelectSubset<T, DisponibilidadeUpdateArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disponibilidades.
     * @param {DisponibilidadeDeleteManyArgs} args - Arguments to filter Disponibilidades to delete.
     * @example
     * // Delete a few Disponibilidades
     * const { count } = await prisma.disponibilidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisponibilidadeDeleteManyArgs>(args?: SelectSubset<T, DisponibilidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disponibilidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disponibilidades
     * const disponibilidade = await prisma.disponibilidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisponibilidadeUpdateManyArgs>(args: SelectSubset<T, DisponibilidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disponibilidades and returns the data updated in the database.
     * @param {DisponibilidadeUpdateManyAndReturnArgs} args - Arguments to update many Disponibilidades.
     * @example
     * // Update many Disponibilidades
     * const disponibilidade = await prisma.disponibilidade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Disponibilidades and only return the `id_disponibilidade`
     * const disponibilidadeWithId_disponibilidadeOnly = await prisma.disponibilidade.updateManyAndReturn({
     *   select: { id_disponibilidade: true },
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
    updateManyAndReturn<T extends DisponibilidadeUpdateManyAndReturnArgs>(args: SelectSubset<T, DisponibilidadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Disponibilidade.
     * @param {DisponibilidadeUpsertArgs} args - Arguments to update or create a Disponibilidade.
     * @example
     * // Update or create a Disponibilidade
     * const disponibilidade = await prisma.disponibilidade.upsert({
     *   create: {
     *     // ... data to create a Disponibilidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disponibilidade we want to update
     *   }
     * })
     */
    upsert<T extends DisponibilidadeUpsertArgs>(args: SelectSubset<T, DisponibilidadeUpsertArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disponibilidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadeCountArgs} args - Arguments to filter Disponibilidades to count.
     * @example
     * // Count the number of Disponibilidades
     * const count = await prisma.disponibilidade.count({
     *   where: {
     *     // ... the filter for the Disponibilidades we want to count
     *   }
     * })
    **/
    count<T extends DisponibilidadeCountArgs>(
      args?: Subset<T, DisponibilidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisponibilidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disponibilidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DisponibilidadeAggregateArgs>(args: Subset<T, DisponibilidadeAggregateArgs>): Prisma.PrismaPromise<GetDisponibilidadeAggregateType<T>>

    /**
     * Group by Disponibilidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadeGroupByArgs} args - Group by arguments.
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
      T extends DisponibilidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisponibilidadeGroupByArgs['orderBy'] }
        : { orderBy?: DisponibilidadeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DisponibilidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisponibilidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Disponibilidade model
   */
  readonly fields: DisponibilidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Disponibilidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisponibilidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professor<T extends ProfessorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessorDefaultArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dia<T extends DiaSemanaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiaSemanaDefaultArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    periodo<T extends PeriodoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeriodoDefaultArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Disponibilidade model
   */
  interface DisponibilidadeFieldRefs {
    readonly id_disponibilidade: FieldRef<"Disponibilidade", 'Int'>
    readonly professorId: FieldRef<"Disponibilidade", 'Int'>
    readonly nome_dia: FieldRef<"Disponibilidade", 'String'>
    readonly nome_periodo: FieldRef<"Disponibilidade", 'String'>
    readonly ordem: FieldRef<"Disponibilidade", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Disponibilidade findUnique
   */
  export type DisponibilidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which Disponibilidade to fetch.
     */
    where: DisponibilidadeWhereUniqueInput
  }

  /**
   * Disponibilidade findUniqueOrThrow
   */
  export type DisponibilidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which Disponibilidade to fetch.
     */
    where: DisponibilidadeWhereUniqueInput
  }

  /**
   * Disponibilidade findFirst
   */
  export type DisponibilidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which Disponibilidade to fetch.
     */
    where?: DisponibilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilidades to fetch.
     */
    orderBy?: DisponibilidadeOrderByWithRelationInput | DisponibilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disponibilidades.
     */
    cursor?: DisponibilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disponibilidades.
     */
    distinct?: DisponibilidadeScalarFieldEnum | DisponibilidadeScalarFieldEnum[]
  }

  /**
   * Disponibilidade findFirstOrThrow
   */
  export type DisponibilidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which Disponibilidade to fetch.
     */
    where?: DisponibilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilidades to fetch.
     */
    orderBy?: DisponibilidadeOrderByWithRelationInput | DisponibilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disponibilidades.
     */
    cursor?: DisponibilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disponibilidades.
     */
    distinct?: DisponibilidadeScalarFieldEnum | DisponibilidadeScalarFieldEnum[]
  }

  /**
   * Disponibilidade findMany
   */
  export type DisponibilidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which Disponibilidades to fetch.
     */
    where?: DisponibilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilidades to fetch.
     */
    orderBy?: DisponibilidadeOrderByWithRelationInput | DisponibilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disponibilidades.
     */
    cursor?: DisponibilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilidades.
     */
    skip?: number
    distinct?: DisponibilidadeScalarFieldEnum | DisponibilidadeScalarFieldEnum[]
  }

  /**
   * Disponibilidade create
   */
  export type DisponibilidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * The data needed to create a Disponibilidade.
     */
    data: XOR<DisponibilidadeCreateInput, DisponibilidadeUncheckedCreateInput>
  }

  /**
   * Disponibilidade createMany
   */
  export type DisponibilidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disponibilidades.
     */
    data: DisponibilidadeCreateManyInput | DisponibilidadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disponibilidade createManyAndReturn
   */
  export type DisponibilidadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * The data used to create many Disponibilidades.
     */
    data: DisponibilidadeCreateManyInput | DisponibilidadeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Disponibilidade update
   */
  export type DisponibilidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * The data needed to update a Disponibilidade.
     */
    data: XOR<DisponibilidadeUpdateInput, DisponibilidadeUncheckedUpdateInput>
    /**
     * Choose, which Disponibilidade to update.
     */
    where: DisponibilidadeWhereUniqueInput
  }

  /**
   * Disponibilidade updateMany
   */
  export type DisponibilidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disponibilidades.
     */
    data: XOR<DisponibilidadeUpdateManyMutationInput, DisponibilidadeUncheckedUpdateManyInput>
    /**
     * Filter which Disponibilidades to update
     */
    where?: DisponibilidadeWhereInput
    /**
     * Limit how many Disponibilidades to update.
     */
    limit?: number
  }

  /**
   * Disponibilidade updateManyAndReturn
   */
  export type DisponibilidadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * The data used to update Disponibilidades.
     */
    data: XOR<DisponibilidadeUpdateManyMutationInput, DisponibilidadeUncheckedUpdateManyInput>
    /**
     * Filter which Disponibilidades to update
     */
    where?: DisponibilidadeWhereInput
    /**
     * Limit how many Disponibilidades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Disponibilidade upsert
   */
  export type DisponibilidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * The filter to search for the Disponibilidade to update in case it exists.
     */
    where: DisponibilidadeWhereUniqueInput
    /**
     * In case the Disponibilidade found by the `where` argument doesn't exist, create a new Disponibilidade with this data.
     */
    create: XOR<DisponibilidadeCreateInput, DisponibilidadeUncheckedCreateInput>
    /**
     * In case the Disponibilidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisponibilidadeUpdateInput, DisponibilidadeUncheckedUpdateInput>
  }

  /**
   * Disponibilidade delete
   */
  export type DisponibilidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * Filter which Disponibilidade to delete.
     */
    where: DisponibilidadeWhereUniqueInput
  }

  /**
   * Disponibilidade deleteMany
   */
  export type DisponibilidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disponibilidades to delete
     */
    where?: DisponibilidadeWhereInput
    /**
     * Limit how many Disponibilidades to delete.
     */
    limit?: number
  }

  /**
   * Disponibilidade without action
   */
  export type DisponibilidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
  }


  /**
   * Model Periodo
   */

  export type AggregatePeriodo = {
    _count: PeriodoCountAggregateOutputType | null
    _min: PeriodoMinAggregateOutputType | null
    _max: PeriodoMaxAggregateOutputType | null
  }

  export type PeriodoMinAggregateOutputType = {
    nome_periodo: string | null
  }

  export type PeriodoMaxAggregateOutputType = {
    nome_periodo: string | null
  }

  export type PeriodoCountAggregateOutputType = {
    nome_periodo: number
    _all: number
  }


  export type PeriodoMinAggregateInputType = {
    nome_periodo?: true
  }

  export type PeriodoMaxAggregateInputType = {
    nome_periodo?: true
  }

  export type PeriodoCountAggregateInputType = {
    nome_periodo?: true
    _all?: true
  }

  export type PeriodoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Periodo to aggregate.
     */
    where?: PeriodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Periodos to fetch.
     */
    orderBy?: PeriodoOrderByWithRelationInput | PeriodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeriodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Periodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Periodos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Periodos
    **/
    _count?: true | PeriodoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeriodoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeriodoMaxAggregateInputType
  }

  export type GetPeriodoAggregateType<T extends PeriodoAggregateArgs> = {
        [P in keyof T & keyof AggregatePeriodo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeriodo[P]>
      : GetScalarType<T[P], AggregatePeriodo[P]>
  }




  export type PeriodoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeriodoWhereInput
    orderBy?: PeriodoOrderByWithAggregationInput | PeriodoOrderByWithAggregationInput[]
    by: PeriodoScalarFieldEnum[] | PeriodoScalarFieldEnum
    having?: PeriodoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeriodoCountAggregateInputType | true
    _min?: PeriodoMinAggregateInputType
    _max?: PeriodoMaxAggregateInputType
  }

  export type PeriodoGroupByOutputType = {
    nome_periodo: string
    _count: PeriodoCountAggregateOutputType | null
    _min: PeriodoMinAggregateOutputType | null
    _max: PeriodoMaxAggregateOutputType | null
  }

  type GetPeriodoGroupByPayload<T extends PeriodoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeriodoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeriodoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeriodoGroupByOutputType[P]>
            : GetScalarType<T[P], PeriodoGroupByOutputType[P]>
        }
      >
    >


  export type PeriodoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome_periodo?: boolean
    disponibilidades?: boolean | Periodo$disponibilidadesArgs<ExtArgs>
    tempo_lectivo?: boolean | Periodo$tempo_lectivoArgs<ExtArgs>
    _count?: boolean | PeriodoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["periodo"]>

  export type PeriodoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome_periodo?: boolean
  }, ExtArgs["result"]["periodo"]>

  export type PeriodoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome_periodo?: boolean
  }, ExtArgs["result"]["periodo"]>

  export type PeriodoSelectScalar = {
    nome_periodo?: boolean
  }

  export type PeriodoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nome_periodo", ExtArgs["result"]["periodo"]>
  export type PeriodoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disponibilidades?: boolean | Periodo$disponibilidadesArgs<ExtArgs>
    tempo_lectivo?: boolean | Periodo$tempo_lectivoArgs<ExtArgs>
    _count?: boolean | PeriodoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PeriodoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PeriodoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PeriodoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Periodo"
    objects: {
      disponibilidades: Prisma.$DisponibilidadePayload<ExtArgs>[]
      tempo_lectivo: Prisma.$Tempo_LectivoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nome_periodo: string
    }, ExtArgs["result"]["periodo"]>
    composites: {}
  }

  type PeriodoGetPayload<S extends boolean | null | undefined | PeriodoDefaultArgs> = $Result.GetResult<Prisma.$PeriodoPayload, S>

  type PeriodoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PeriodoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeriodoCountAggregateInputType | true
    }

  export interface PeriodoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Periodo'], meta: { name: 'Periodo' } }
    /**
     * Find zero or one Periodo that matches the filter.
     * @param {PeriodoFindUniqueArgs} args - Arguments to find a Periodo
     * @example
     * // Get one Periodo
     * const periodo = await prisma.periodo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PeriodoFindUniqueArgs>(args: SelectSubset<T, PeriodoFindUniqueArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Periodo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PeriodoFindUniqueOrThrowArgs} args - Arguments to find a Periodo
     * @example
     * // Get one Periodo
     * const periodo = await prisma.periodo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PeriodoFindUniqueOrThrowArgs>(args: SelectSubset<T, PeriodoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Periodo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoFindFirstArgs} args - Arguments to find a Periodo
     * @example
     * // Get one Periodo
     * const periodo = await prisma.periodo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PeriodoFindFirstArgs>(args?: SelectSubset<T, PeriodoFindFirstArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Periodo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoFindFirstOrThrowArgs} args - Arguments to find a Periodo
     * @example
     * // Get one Periodo
     * const periodo = await prisma.periodo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PeriodoFindFirstOrThrowArgs>(args?: SelectSubset<T, PeriodoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Periodos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Periodos
     * const periodos = await prisma.periodo.findMany()
     * 
     * // Get first 10 Periodos
     * const periodos = await prisma.periodo.findMany({ take: 10 })
     * 
     * // Only select the `nome_periodo`
     * const periodoWithNome_periodoOnly = await prisma.periodo.findMany({ select: { nome_periodo: true } })
     * 
     */
    findMany<T extends PeriodoFindManyArgs>(args?: SelectSubset<T, PeriodoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Periodo.
     * @param {PeriodoCreateArgs} args - Arguments to create a Periodo.
     * @example
     * // Create one Periodo
     * const Periodo = await prisma.periodo.create({
     *   data: {
     *     // ... data to create a Periodo
     *   }
     * })
     * 
     */
    create<T extends PeriodoCreateArgs>(args: SelectSubset<T, PeriodoCreateArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Periodos.
     * @param {PeriodoCreateManyArgs} args - Arguments to create many Periodos.
     * @example
     * // Create many Periodos
     * const periodo = await prisma.periodo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PeriodoCreateManyArgs>(args?: SelectSubset<T, PeriodoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Periodos and returns the data saved in the database.
     * @param {PeriodoCreateManyAndReturnArgs} args - Arguments to create many Periodos.
     * @example
     * // Create many Periodos
     * const periodo = await prisma.periodo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Periodos and only return the `nome_periodo`
     * const periodoWithNome_periodoOnly = await prisma.periodo.createManyAndReturn({
     *   select: { nome_periodo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PeriodoCreateManyAndReturnArgs>(args?: SelectSubset<T, PeriodoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Periodo.
     * @param {PeriodoDeleteArgs} args - Arguments to delete one Periodo.
     * @example
     * // Delete one Periodo
     * const Periodo = await prisma.periodo.delete({
     *   where: {
     *     // ... filter to delete one Periodo
     *   }
     * })
     * 
     */
    delete<T extends PeriodoDeleteArgs>(args: SelectSubset<T, PeriodoDeleteArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Periodo.
     * @param {PeriodoUpdateArgs} args - Arguments to update one Periodo.
     * @example
     * // Update one Periodo
     * const periodo = await prisma.periodo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PeriodoUpdateArgs>(args: SelectSubset<T, PeriodoUpdateArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Periodos.
     * @param {PeriodoDeleteManyArgs} args - Arguments to filter Periodos to delete.
     * @example
     * // Delete a few Periodos
     * const { count } = await prisma.periodo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PeriodoDeleteManyArgs>(args?: SelectSubset<T, PeriodoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Periodos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Periodos
     * const periodo = await prisma.periodo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PeriodoUpdateManyArgs>(args: SelectSubset<T, PeriodoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Periodos and returns the data updated in the database.
     * @param {PeriodoUpdateManyAndReturnArgs} args - Arguments to update many Periodos.
     * @example
     * // Update many Periodos
     * const periodo = await prisma.periodo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Periodos and only return the `nome_periodo`
     * const periodoWithNome_periodoOnly = await prisma.periodo.updateManyAndReturn({
     *   select: { nome_periodo: true },
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
    updateManyAndReturn<T extends PeriodoUpdateManyAndReturnArgs>(args: SelectSubset<T, PeriodoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Periodo.
     * @param {PeriodoUpsertArgs} args - Arguments to update or create a Periodo.
     * @example
     * // Update or create a Periodo
     * const periodo = await prisma.periodo.upsert({
     *   create: {
     *     // ... data to create a Periodo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Periodo we want to update
     *   }
     * })
     */
    upsert<T extends PeriodoUpsertArgs>(args: SelectSubset<T, PeriodoUpsertArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Periodos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoCountArgs} args - Arguments to filter Periodos to count.
     * @example
     * // Count the number of Periodos
     * const count = await prisma.periodo.count({
     *   where: {
     *     // ... the filter for the Periodos we want to count
     *   }
     * })
    **/
    count<T extends PeriodoCountArgs>(
      args?: Subset<T, PeriodoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeriodoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Periodo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PeriodoAggregateArgs>(args: Subset<T, PeriodoAggregateArgs>): Prisma.PrismaPromise<GetPeriodoAggregateType<T>>

    /**
     * Group by Periodo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoGroupByArgs} args - Group by arguments.
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
      T extends PeriodoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeriodoGroupByArgs['orderBy'] }
        : { orderBy?: PeriodoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PeriodoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeriodoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Periodo model
   */
  readonly fields: PeriodoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Periodo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeriodoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    disponibilidades<T extends Periodo$disponibilidadesArgs<ExtArgs> = {}>(args?: Subset<T, Periodo$disponibilidadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tempo_lectivo<T extends Periodo$tempo_lectivoArgs<ExtArgs> = {}>(args?: Subset<T, Periodo$tempo_lectivoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tempo_LectivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Periodo model
   */
  interface PeriodoFieldRefs {
    readonly nome_periodo: FieldRef<"Periodo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Periodo findUnique
   */
  export type PeriodoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * Filter, which Periodo to fetch.
     */
    where: PeriodoWhereUniqueInput
  }

  /**
   * Periodo findUniqueOrThrow
   */
  export type PeriodoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * Filter, which Periodo to fetch.
     */
    where: PeriodoWhereUniqueInput
  }

  /**
   * Periodo findFirst
   */
  export type PeriodoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * Filter, which Periodo to fetch.
     */
    where?: PeriodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Periodos to fetch.
     */
    orderBy?: PeriodoOrderByWithRelationInput | PeriodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Periodos.
     */
    cursor?: PeriodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Periodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Periodos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Periodos.
     */
    distinct?: PeriodoScalarFieldEnum | PeriodoScalarFieldEnum[]
  }

  /**
   * Periodo findFirstOrThrow
   */
  export type PeriodoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * Filter, which Periodo to fetch.
     */
    where?: PeriodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Periodos to fetch.
     */
    orderBy?: PeriodoOrderByWithRelationInput | PeriodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Periodos.
     */
    cursor?: PeriodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Periodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Periodos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Periodos.
     */
    distinct?: PeriodoScalarFieldEnum | PeriodoScalarFieldEnum[]
  }

  /**
   * Periodo findMany
   */
  export type PeriodoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * Filter, which Periodos to fetch.
     */
    where?: PeriodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Periodos to fetch.
     */
    orderBy?: PeriodoOrderByWithRelationInput | PeriodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Periodos.
     */
    cursor?: PeriodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Periodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Periodos.
     */
    skip?: number
    distinct?: PeriodoScalarFieldEnum | PeriodoScalarFieldEnum[]
  }

  /**
   * Periodo create
   */
  export type PeriodoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * The data needed to create a Periodo.
     */
    data: XOR<PeriodoCreateInput, PeriodoUncheckedCreateInput>
  }

  /**
   * Periodo createMany
   */
  export type PeriodoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Periodos.
     */
    data: PeriodoCreateManyInput | PeriodoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Periodo createManyAndReturn
   */
  export type PeriodoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * The data used to create many Periodos.
     */
    data: PeriodoCreateManyInput | PeriodoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Periodo update
   */
  export type PeriodoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * The data needed to update a Periodo.
     */
    data: XOR<PeriodoUpdateInput, PeriodoUncheckedUpdateInput>
    /**
     * Choose, which Periodo to update.
     */
    where: PeriodoWhereUniqueInput
  }

  /**
   * Periodo updateMany
   */
  export type PeriodoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Periodos.
     */
    data: XOR<PeriodoUpdateManyMutationInput, PeriodoUncheckedUpdateManyInput>
    /**
     * Filter which Periodos to update
     */
    where?: PeriodoWhereInput
    /**
     * Limit how many Periodos to update.
     */
    limit?: number
  }

  /**
   * Periodo updateManyAndReturn
   */
  export type PeriodoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * The data used to update Periodos.
     */
    data: XOR<PeriodoUpdateManyMutationInput, PeriodoUncheckedUpdateManyInput>
    /**
     * Filter which Periodos to update
     */
    where?: PeriodoWhereInput
    /**
     * Limit how many Periodos to update.
     */
    limit?: number
  }

  /**
   * Periodo upsert
   */
  export type PeriodoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * The filter to search for the Periodo to update in case it exists.
     */
    where: PeriodoWhereUniqueInput
    /**
     * In case the Periodo found by the `where` argument doesn't exist, create a new Periodo with this data.
     */
    create: XOR<PeriodoCreateInput, PeriodoUncheckedCreateInput>
    /**
     * In case the Periodo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeriodoUpdateInput, PeriodoUncheckedUpdateInput>
  }

  /**
   * Periodo delete
   */
  export type PeriodoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * Filter which Periodo to delete.
     */
    where: PeriodoWhereUniqueInput
  }

  /**
   * Periodo deleteMany
   */
  export type PeriodoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Periodos to delete
     */
    where?: PeriodoWhereInput
    /**
     * Limit how many Periodos to delete.
     */
    limit?: number
  }

  /**
   * Periodo.disponibilidades
   */
  export type Periodo$disponibilidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    where?: DisponibilidadeWhereInput
    orderBy?: DisponibilidadeOrderByWithRelationInput | DisponibilidadeOrderByWithRelationInput[]
    cursor?: DisponibilidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisponibilidadeScalarFieldEnum | DisponibilidadeScalarFieldEnum[]
  }

  /**
   * Periodo.tempo_lectivo
   */
  export type Periodo$tempo_lectivoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tempo_Lectivo
     */
    select?: Tempo_LectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tempo_Lectivo
     */
    omit?: Tempo_LectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tempo_LectivoInclude<ExtArgs> | null
    where?: Tempo_LectivoWhereInput
    orderBy?: Tempo_LectivoOrderByWithRelationInput | Tempo_LectivoOrderByWithRelationInput[]
    cursor?: Tempo_LectivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tempo_LectivoScalarFieldEnum | Tempo_LectivoScalarFieldEnum[]
  }

  /**
   * Periodo without action
   */
  export type PeriodoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periodo
     */
    omit?: PeriodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
  }


  /**
   * Model Professor
   */

  export type AggregateProfessor = {
    _count: ProfessorCountAggregateOutputType | null
    _avg: ProfessorAvgAggregateOutputType | null
    _sum: ProfessorSumAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  export type ProfessorAvgAggregateOutputType = {
    id_professor: number | null
  }

  export type ProfessorSumAggregateOutputType = {
    id_professor: number | null
  }

  export type ProfessorMinAggregateOutputType = {
    id_professor: number | null
    nome: string | null
    email: string | null
    telefone: string | null
    updated_at: Date | null
  }

  export type ProfessorMaxAggregateOutputType = {
    id_professor: number | null
    nome: string | null
    email: string | null
    telefone: string | null
    updated_at: Date | null
  }

  export type ProfessorCountAggregateOutputType = {
    id_professor: number
    nome: number
    email: number
    telefone: number
    updated_at: number
    _all: number
  }


  export type ProfessorAvgAggregateInputType = {
    id_professor?: true
  }

  export type ProfessorSumAggregateInputType = {
    id_professor?: true
  }

  export type ProfessorMinAggregateInputType = {
    id_professor?: true
    nome?: true
    email?: true
    telefone?: true
    updated_at?: true
  }

  export type ProfessorMaxAggregateInputType = {
    id_professor?: true
    nome?: true
    email?: true
    telefone?: true
    updated_at?: true
  }

  export type ProfessorCountAggregateInputType = {
    id_professor?: true
    nome?: true
    email?: true
    telefone?: true
    updated_at?: true
    _all?: true
  }

  export type ProfessorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professor to aggregate.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Professors
    **/
    _count?: true | ProfessorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfessorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfessorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessorMaxAggregateInputType
  }

  export type GetProfessorAggregateType<T extends ProfessorAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessor[P]>
      : GetScalarType<T[P], AggregateProfessor[P]>
  }




  export type ProfessorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessorWhereInput
    orderBy?: ProfessorOrderByWithAggregationInput | ProfessorOrderByWithAggregationInput[]
    by: ProfessorScalarFieldEnum[] | ProfessorScalarFieldEnum
    having?: ProfessorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessorCountAggregateInputType | true
    _avg?: ProfessorAvgAggregateInputType
    _sum?: ProfessorSumAggregateInputType
    _min?: ProfessorMinAggregateInputType
    _max?: ProfessorMaxAggregateInputType
  }

  export type ProfessorGroupByOutputType = {
    id_professor: number
    nome: string
    email: string
    telefone: string
    updated_at: Date
    _count: ProfessorCountAggregateOutputType | null
    _avg: ProfessorAvgAggregateOutputType | null
    _sum: ProfessorSumAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  type GetProfessorGroupByPayload<T extends ProfessorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
        }
      >
    >


  export type ProfessorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_professor?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    updated_at?: boolean
    profDisciplinas?: boolean | Professor$profDisciplinasArgs<ExtArgs>
    disponibilidades?: boolean | Professor$disponibilidadesArgs<ExtArgs>
    tempo_lectivo?: boolean | Professor$tempo_lectivoArgs<ExtArgs>
    _count?: boolean | ProfessorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_professor?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_professor?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectScalar = {
    id_professor?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    updated_at?: boolean
  }

  export type ProfessorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_professor" | "nome" | "email" | "telefone" | "updated_at", ExtArgs["result"]["professor"]>
  export type ProfessorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profDisciplinas?: boolean | Professor$profDisciplinasArgs<ExtArgs>
    disponibilidades?: boolean | Professor$disponibilidadesArgs<ExtArgs>
    tempo_lectivo?: boolean | Professor$tempo_lectivoArgs<ExtArgs>
    _count?: boolean | ProfessorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfessorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfessorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfessorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Professor"
    objects: {
      profDisciplinas: Prisma.$ProfDisciplinasPayload<ExtArgs>[]
      disponibilidades: Prisma.$DisponibilidadePayload<ExtArgs>[]
      tempo_lectivo: Prisma.$Tempo_LectivoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_professor: number
      nome: string
      email: string
      telefone: string
      updated_at: Date
    }, ExtArgs["result"]["professor"]>
    composites: {}
  }

  type ProfessorGetPayload<S extends boolean | null | undefined | ProfessorDefaultArgs> = $Result.GetResult<Prisma.$ProfessorPayload, S>

  type ProfessorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessorCountAggregateInputType | true
    }

  export interface ProfessorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Professor'], meta: { name: 'Professor' } }
    /**
     * Find zero or one Professor that matches the filter.
     * @param {ProfessorFindUniqueArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessorFindUniqueArgs>(args: SelectSubset<T, ProfessorFindUniqueArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Professor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessorFindUniqueOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindFirstArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessorFindFirstArgs>(args?: SelectSubset<T, ProfessorFindFirstArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindFirstOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professors
     * const professors = await prisma.professor.findMany()
     * 
     * // Get first 10 Professors
     * const professors = await prisma.professor.findMany({ take: 10 })
     * 
     * // Only select the `id_professor`
     * const professorWithId_professorOnly = await prisma.professor.findMany({ select: { id_professor: true } })
     * 
     */
    findMany<T extends ProfessorFindManyArgs>(args?: SelectSubset<T, ProfessorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Professor.
     * @param {ProfessorCreateArgs} args - Arguments to create a Professor.
     * @example
     * // Create one Professor
     * const Professor = await prisma.professor.create({
     *   data: {
     *     // ... data to create a Professor
     *   }
     * })
     * 
     */
    create<T extends ProfessorCreateArgs>(args: SelectSubset<T, ProfessorCreateArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professors.
     * @param {ProfessorCreateManyArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professor = await prisma.professor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessorCreateManyArgs>(args?: SelectSubset<T, ProfessorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Professors and returns the data saved in the database.
     * @param {ProfessorCreateManyAndReturnArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professor = await prisma.professor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Professors and only return the `id_professor`
     * const professorWithId_professorOnly = await prisma.professor.createManyAndReturn({
     *   select: { id_professor: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfessorCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfessorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Professor.
     * @param {ProfessorDeleteArgs} args - Arguments to delete one Professor.
     * @example
     * // Delete one Professor
     * const Professor = await prisma.professor.delete({
     *   where: {
     *     // ... filter to delete one Professor
     *   }
     * })
     * 
     */
    delete<T extends ProfessorDeleteArgs>(args: SelectSubset<T, ProfessorDeleteArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Professor.
     * @param {ProfessorUpdateArgs} args - Arguments to update one Professor.
     * @example
     * // Update one Professor
     * const professor = await prisma.professor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessorUpdateArgs>(args: SelectSubset<T, ProfessorUpdateArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professors.
     * @param {ProfessorDeleteManyArgs} args - Arguments to filter Professors to delete.
     * @example
     * // Delete a few Professors
     * const { count } = await prisma.professor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessorDeleteManyArgs>(args?: SelectSubset<T, ProfessorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professors
     * const professor = await prisma.professor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessorUpdateManyArgs>(args: SelectSubset<T, ProfessorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors and returns the data updated in the database.
     * @param {ProfessorUpdateManyAndReturnArgs} args - Arguments to update many Professors.
     * @example
     * // Update many Professors
     * const professor = await prisma.professor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Professors and only return the `id_professor`
     * const professorWithId_professorOnly = await prisma.professor.updateManyAndReturn({
     *   select: { id_professor: true },
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
    updateManyAndReturn<T extends ProfessorUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfessorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Professor.
     * @param {ProfessorUpsertArgs} args - Arguments to update or create a Professor.
     * @example
     * // Update or create a Professor
     * const professor = await prisma.professor.upsert({
     *   create: {
     *     // ... data to create a Professor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Professor we want to update
     *   }
     * })
     */
    upsert<T extends ProfessorUpsertArgs>(args: SelectSubset<T, ProfessorUpsertArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorCountArgs} args - Arguments to filter Professors to count.
     * @example
     * // Count the number of Professors
     * const count = await prisma.professor.count({
     *   where: {
     *     // ... the filter for the Professors we want to count
     *   }
     * })
    **/
    count<T extends ProfessorCountArgs>(
      args?: Subset<T, ProfessorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfessorAggregateArgs>(args: Subset<T, ProfessorAggregateArgs>): Prisma.PrismaPromise<GetProfessorAggregateType<T>>

    /**
     * Group by Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorGroupByArgs} args - Group by arguments.
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
      T extends ProfessorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessorGroupByArgs['orderBy'] }
        : { orderBy?: ProfessorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfessorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Professor model
   */
  readonly fields: ProfessorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Professor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profDisciplinas<T extends Professor$profDisciplinasArgs<ExtArgs> = {}>(args?: Subset<T, Professor$profDisciplinasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfDisciplinasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    disponibilidades<T extends Professor$disponibilidadesArgs<ExtArgs> = {}>(args?: Subset<T, Professor$disponibilidadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tempo_lectivo<T extends Professor$tempo_lectivoArgs<ExtArgs> = {}>(args?: Subset<T, Professor$tempo_lectivoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tempo_LectivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Professor model
   */
  interface ProfessorFieldRefs {
    readonly id_professor: FieldRef<"Professor", 'Int'>
    readonly nome: FieldRef<"Professor", 'String'>
    readonly email: FieldRef<"Professor", 'String'>
    readonly telefone: FieldRef<"Professor", 'String'>
    readonly updated_at: FieldRef<"Professor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Professor findUnique
   */
  export type ProfessorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor findUniqueOrThrow
   */
  export type ProfessorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor findFirst
   */
  export type ProfessorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor findFirstOrThrow
   */
  export type ProfessorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor findMany
   */
  export type ProfessorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professors to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor create
   */
  export type ProfessorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The data needed to create a Professor.
     */
    data: XOR<ProfessorCreateInput, ProfessorUncheckedCreateInput>
  }

  /**
   * Professor createMany
   */
  export type ProfessorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Professors.
     */
    data: ProfessorCreateManyInput | ProfessorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Professor createManyAndReturn
   */
  export type ProfessorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * The data used to create many Professors.
     */
    data: ProfessorCreateManyInput | ProfessorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Professor update
   */
  export type ProfessorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The data needed to update a Professor.
     */
    data: XOR<ProfessorUpdateInput, ProfessorUncheckedUpdateInput>
    /**
     * Choose, which Professor to update.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor updateMany
   */
  export type ProfessorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Professors.
     */
    data: XOR<ProfessorUpdateManyMutationInput, ProfessorUncheckedUpdateManyInput>
    /**
     * Filter which Professors to update
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to update.
     */
    limit?: number
  }

  /**
   * Professor updateManyAndReturn
   */
  export type ProfessorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * The data used to update Professors.
     */
    data: XOR<ProfessorUpdateManyMutationInput, ProfessorUncheckedUpdateManyInput>
    /**
     * Filter which Professors to update
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to update.
     */
    limit?: number
  }

  /**
   * Professor upsert
   */
  export type ProfessorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The filter to search for the Professor to update in case it exists.
     */
    where: ProfessorWhereUniqueInput
    /**
     * In case the Professor found by the `where` argument doesn't exist, create a new Professor with this data.
     */
    create: XOR<ProfessorCreateInput, ProfessorUncheckedCreateInput>
    /**
     * In case the Professor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessorUpdateInput, ProfessorUncheckedUpdateInput>
  }

  /**
   * Professor delete
   */
  export type ProfessorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter which Professor to delete.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor deleteMany
   */
  export type ProfessorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professors to delete
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to delete.
     */
    limit?: number
  }

  /**
   * Professor.profDisciplinas
   */
  export type Professor$profDisciplinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfDisciplinas
     */
    select?: ProfDisciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfDisciplinas
     */
    omit?: ProfDisciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfDisciplinasInclude<ExtArgs> | null
    where?: ProfDisciplinasWhereInput
    orderBy?: ProfDisciplinasOrderByWithRelationInput | ProfDisciplinasOrderByWithRelationInput[]
    cursor?: ProfDisciplinasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfDisciplinasScalarFieldEnum | ProfDisciplinasScalarFieldEnum[]
  }

  /**
   * Professor.disponibilidades
   */
  export type Professor$disponibilidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    where?: DisponibilidadeWhereInput
    orderBy?: DisponibilidadeOrderByWithRelationInput | DisponibilidadeOrderByWithRelationInput[]
    cursor?: DisponibilidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisponibilidadeScalarFieldEnum | DisponibilidadeScalarFieldEnum[]
  }

  /**
   * Professor.tempo_lectivo
   */
  export type Professor$tempo_lectivoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tempo_Lectivo
     */
    select?: Tempo_LectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tempo_Lectivo
     */
    omit?: Tempo_LectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tempo_LectivoInclude<ExtArgs> | null
    where?: Tempo_LectivoWhereInput
    orderBy?: Tempo_LectivoOrderByWithRelationInput | Tempo_LectivoOrderByWithRelationInput[]
    cursor?: Tempo_LectivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tempo_LectivoScalarFieldEnum | Tempo_LectivoScalarFieldEnum[]
  }

  /**
   * Professor without action
   */
  export type ProfessorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
  }


  /**
   * Model ProfDisciplinas
   */

  export type AggregateProfDisciplinas = {
    _count: ProfDisciplinasCountAggregateOutputType | null
    _avg: ProfDisciplinasAvgAggregateOutputType | null
    _sum: ProfDisciplinasSumAggregateOutputType | null
    _min: ProfDisciplinasMinAggregateOutputType | null
    _max: ProfDisciplinasMaxAggregateOutputType | null
  }

  export type ProfDisciplinasAvgAggregateOutputType = {
    professorId: number | null
  }

  export type ProfDisciplinasSumAggregateOutputType = {
    professorId: number | null
  }

  export type ProfDisciplinasMinAggregateOutputType = {
    professorId: number | null
    nome_disciplina: string | null
  }

  export type ProfDisciplinasMaxAggregateOutputType = {
    professorId: number | null
    nome_disciplina: string | null
  }

  export type ProfDisciplinasCountAggregateOutputType = {
    professorId: number
    nome_disciplina: number
    _all: number
  }


  export type ProfDisciplinasAvgAggregateInputType = {
    professorId?: true
  }

  export type ProfDisciplinasSumAggregateInputType = {
    professorId?: true
  }

  export type ProfDisciplinasMinAggregateInputType = {
    professorId?: true
    nome_disciplina?: true
  }

  export type ProfDisciplinasMaxAggregateInputType = {
    professorId?: true
    nome_disciplina?: true
  }

  export type ProfDisciplinasCountAggregateInputType = {
    professorId?: true
    nome_disciplina?: true
    _all?: true
  }

  export type ProfDisciplinasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfDisciplinas to aggregate.
     */
    where?: ProfDisciplinasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfDisciplinas to fetch.
     */
    orderBy?: ProfDisciplinasOrderByWithRelationInput | ProfDisciplinasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfDisciplinasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfDisciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfDisciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfDisciplinas
    **/
    _count?: true | ProfDisciplinasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfDisciplinasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfDisciplinasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfDisciplinasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfDisciplinasMaxAggregateInputType
  }

  export type GetProfDisciplinasAggregateType<T extends ProfDisciplinasAggregateArgs> = {
        [P in keyof T & keyof AggregateProfDisciplinas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfDisciplinas[P]>
      : GetScalarType<T[P], AggregateProfDisciplinas[P]>
  }




  export type ProfDisciplinasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfDisciplinasWhereInput
    orderBy?: ProfDisciplinasOrderByWithAggregationInput | ProfDisciplinasOrderByWithAggregationInput[]
    by: ProfDisciplinasScalarFieldEnum[] | ProfDisciplinasScalarFieldEnum
    having?: ProfDisciplinasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfDisciplinasCountAggregateInputType | true
    _avg?: ProfDisciplinasAvgAggregateInputType
    _sum?: ProfDisciplinasSumAggregateInputType
    _min?: ProfDisciplinasMinAggregateInputType
    _max?: ProfDisciplinasMaxAggregateInputType
  }

  export type ProfDisciplinasGroupByOutputType = {
    professorId: number
    nome_disciplina: string
    _count: ProfDisciplinasCountAggregateOutputType | null
    _avg: ProfDisciplinasAvgAggregateOutputType | null
    _sum: ProfDisciplinasSumAggregateOutputType | null
    _min: ProfDisciplinasMinAggregateOutputType | null
    _max: ProfDisciplinasMaxAggregateOutputType | null
  }

  type GetProfDisciplinasGroupByPayload<T extends ProfDisciplinasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfDisciplinasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfDisciplinasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfDisciplinasGroupByOutputType[P]>
            : GetScalarType<T[P], ProfDisciplinasGroupByOutputType[P]>
        }
      >
    >


  export type ProfDisciplinasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    professorId?: boolean
    nome_disciplina?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profDisciplinas"]>

  export type ProfDisciplinasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    professorId?: boolean
    nome_disciplina?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profDisciplinas"]>

  export type ProfDisciplinasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    professorId?: boolean
    nome_disciplina?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profDisciplinas"]>

  export type ProfDisciplinasSelectScalar = {
    professorId?: boolean
    nome_disciplina?: boolean
  }

  export type ProfDisciplinasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"professorId" | "nome_disciplina", ExtArgs["result"]["profDisciplinas"]>
  export type ProfDisciplinasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }
  export type ProfDisciplinasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }
  export type ProfDisciplinasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }

  export type $ProfDisciplinasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfDisciplinas"
    objects: {
      professor: Prisma.$ProfessorPayload<ExtArgs>
      disciplina: Prisma.$DisciplinaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      professorId: number
      nome_disciplina: string
    }, ExtArgs["result"]["profDisciplinas"]>
    composites: {}
  }

  type ProfDisciplinasGetPayload<S extends boolean | null | undefined | ProfDisciplinasDefaultArgs> = $Result.GetResult<Prisma.$ProfDisciplinasPayload, S>

  type ProfDisciplinasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfDisciplinasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfDisciplinasCountAggregateInputType | true
    }

  export interface ProfDisciplinasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfDisciplinas'], meta: { name: 'ProfDisciplinas' } }
    /**
     * Find zero or one ProfDisciplinas that matches the filter.
     * @param {ProfDisciplinasFindUniqueArgs} args - Arguments to find a ProfDisciplinas
     * @example
     * // Get one ProfDisciplinas
     * const profDisciplinas = await prisma.profDisciplinas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfDisciplinasFindUniqueArgs>(args: SelectSubset<T, ProfDisciplinasFindUniqueArgs<ExtArgs>>): Prisma__ProfDisciplinasClient<$Result.GetResult<Prisma.$ProfDisciplinasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProfDisciplinas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfDisciplinasFindUniqueOrThrowArgs} args - Arguments to find a ProfDisciplinas
     * @example
     * // Get one ProfDisciplinas
     * const profDisciplinas = await prisma.profDisciplinas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfDisciplinasFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfDisciplinasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfDisciplinasClient<$Result.GetResult<Prisma.$ProfDisciplinasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfDisciplinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfDisciplinasFindFirstArgs} args - Arguments to find a ProfDisciplinas
     * @example
     * // Get one ProfDisciplinas
     * const profDisciplinas = await prisma.profDisciplinas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfDisciplinasFindFirstArgs>(args?: SelectSubset<T, ProfDisciplinasFindFirstArgs<ExtArgs>>): Prisma__ProfDisciplinasClient<$Result.GetResult<Prisma.$ProfDisciplinasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfDisciplinas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfDisciplinasFindFirstOrThrowArgs} args - Arguments to find a ProfDisciplinas
     * @example
     * // Get one ProfDisciplinas
     * const profDisciplinas = await prisma.profDisciplinas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfDisciplinasFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfDisciplinasFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfDisciplinasClient<$Result.GetResult<Prisma.$ProfDisciplinasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProfDisciplinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfDisciplinasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfDisciplinas
     * const profDisciplinas = await prisma.profDisciplinas.findMany()
     * 
     * // Get first 10 ProfDisciplinas
     * const profDisciplinas = await prisma.profDisciplinas.findMany({ take: 10 })
     * 
     * // Only select the `professorId`
     * const profDisciplinasWithProfessorIdOnly = await prisma.profDisciplinas.findMany({ select: { professorId: true } })
     * 
     */
    findMany<T extends ProfDisciplinasFindManyArgs>(args?: SelectSubset<T, ProfDisciplinasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfDisciplinasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProfDisciplinas.
     * @param {ProfDisciplinasCreateArgs} args - Arguments to create a ProfDisciplinas.
     * @example
     * // Create one ProfDisciplinas
     * const ProfDisciplinas = await prisma.profDisciplinas.create({
     *   data: {
     *     // ... data to create a ProfDisciplinas
     *   }
     * })
     * 
     */
    create<T extends ProfDisciplinasCreateArgs>(args: SelectSubset<T, ProfDisciplinasCreateArgs<ExtArgs>>): Prisma__ProfDisciplinasClient<$Result.GetResult<Prisma.$ProfDisciplinasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProfDisciplinas.
     * @param {ProfDisciplinasCreateManyArgs} args - Arguments to create many ProfDisciplinas.
     * @example
     * // Create many ProfDisciplinas
     * const profDisciplinas = await prisma.profDisciplinas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfDisciplinasCreateManyArgs>(args?: SelectSubset<T, ProfDisciplinasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfDisciplinas and returns the data saved in the database.
     * @param {ProfDisciplinasCreateManyAndReturnArgs} args - Arguments to create many ProfDisciplinas.
     * @example
     * // Create many ProfDisciplinas
     * const profDisciplinas = await prisma.profDisciplinas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfDisciplinas and only return the `professorId`
     * const profDisciplinasWithProfessorIdOnly = await prisma.profDisciplinas.createManyAndReturn({
     *   select: { professorId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfDisciplinasCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfDisciplinasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfDisciplinasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProfDisciplinas.
     * @param {ProfDisciplinasDeleteArgs} args - Arguments to delete one ProfDisciplinas.
     * @example
     * // Delete one ProfDisciplinas
     * const ProfDisciplinas = await prisma.profDisciplinas.delete({
     *   where: {
     *     // ... filter to delete one ProfDisciplinas
     *   }
     * })
     * 
     */
    delete<T extends ProfDisciplinasDeleteArgs>(args: SelectSubset<T, ProfDisciplinasDeleteArgs<ExtArgs>>): Prisma__ProfDisciplinasClient<$Result.GetResult<Prisma.$ProfDisciplinasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProfDisciplinas.
     * @param {ProfDisciplinasUpdateArgs} args - Arguments to update one ProfDisciplinas.
     * @example
     * // Update one ProfDisciplinas
     * const profDisciplinas = await prisma.profDisciplinas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfDisciplinasUpdateArgs>(args: SelectSubset<T, ProfDisciplinasUpdateArgs<ExtArgs>>): Prisma__ProfDisciplinasClient<$Result.GetResult<Prisma.$ProfDisciplinasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProfDisciplinas.
     * @param {ProfDisciplinasDeleteManyArgs} args - Arguments to filter ProfDisciplinas to delete.
     * @example
     * // Delete a few ProfDisciplinas
     * const { count } = await prisma.profDisciplinas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfDisciplinasDeleteManyArgs>(args?: SelectSubset<T, ProfDisciplinasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfDisciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfDisciplinasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfDisciplinas
     * const profDisciplinas = await prisma.profDisciplinas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfDisciplinasUpdateManyArgs>(args: SelectSubset<T, ProfDisciplinasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfDisciplinas and returns the data updated in the database.
     * @param {ProfDisciplinasUpdateManyAndReturnArgs} args - Arguments to update many ProfDisciplinas.
     * @example
     * // Update many ProfDisciplinas
     * const profDisciplinas = await prisma.profDisciplinas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfDisciplinas and only return the `professorId`
     * const profDisciplinasWithProfessorIdOnly = await prisma.profDisciplinas.updateManyAndReturn({
     *   select: { professorId: true },
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
    updateManyAndReturn<T extends ProfDisciplinasUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfDisciplinasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfDisciplinasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProfDisciplinas.
     * @param {ProfDisciplinasUpsertArgs} args - Arguments to update or create a ProfDisciplinas.
     * @example
     * // Update or create a ProfDisciplinas
     * const profDisciplinas = await prisma.profDisciplinas.upsert({
     *   create: {
     *     // ... data to create a ProfDisciplinas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfDisciplinas we want to update
     *   }
     * })
     */
    upsert<T extends ProfDisciplinasUpsertArgs>(args: SelectSubset<T, ProfDisciplinasUpsertArgs<ExtArgs>>): Prisma__ProfDisciplinasClient<$Result.GetResult<Prisma.$ProfDisciplinasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProfDisciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfDisciplinasCountArgs} args - Arguments to filter ProfDisciplinas to count.
     * @example
     * // Count the number of ProfDisciplinas
     * const count = await prisma.profDisciplinas.count({
     *   where: {
     *     // ... the filter for the ProfDisciplinas we want to count
     *   }
     * })
    **/
    count<T extends ProfDisciplinasCountArgs>(
      args?: Subset<T, ProfDisciplinasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfDisciplinasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfDisciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfDisciplinasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfDisciplinasAggregateArgs>(args: Subset<T, ProfDisciplinasAggregateArgs>): Prisma.PrismaPromise<GetProfDisciplinasAggregateType<T>>

    /**
     * Group by ProfDisciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfDisciplinasGroupByArgs} args - Group by arguments.
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
      T extends ProfDisciplinasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfDisciplinasGroupByArgs['orderBy'] }
        : { orderBy?: ProfDisciplinasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfDisciplinasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfDisciplinasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfDisciplinas model
   */
  readonly fields: ProfDisciplinasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfDisciplinas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfDisciplinasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professor<T extends ProfessorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessorDefaultArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    disciplina<T extends DisciplinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DisciplinaDefaultArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProfDisciplinas model
   */
  interface ProfDisciplinasFieldRefs {
    readonly professorId: FieldRef<"ProfDisciplinas", 'Int'>
    readonly nome_disciplina: FieldRef<"ProfDisciplinas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProfDisciplinas findUnique
   */
  export type ProfDisciplinasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfDisciplinas
     */
    select?: ProfDisciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfDisciplinas
     */
    omit?: ProfDisciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfDisciplinasInclude<ExtArgs> | null
    /**
     * Filter, which ProfDisciplinas to fetch.
     */
    where: ProfDisciplinasWhereUniqueInput
  }

  /**
   * ProfDisciplinas findUniqueOrThrow
   */
  export type ProfDisciplinasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfDisciplinas
     */
    select?: ProfDisciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfDisciplinas
     */
    omit?: ProfDisciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfDisciplinasInclude<ExtArgs> | null
    /**
     * Filter, which ProfDisciplinas to fetch.
     */
    where: ProfDisciplinasWhereUniqueInput
  }

  /**
   * ProfDisciplinas findFirst
   */
  export type ProfDisciplinasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfDisciplinas
     */
    select?: ProfDisciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfDisciplinas
     */
    omit?: ProfDisciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfDisciplinasInclude<ExtArgs> | null
    /**
     * Filter, which ProfDisciplinas to fetch.
     */
    where?: ProfDisciplinasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfDisciplinas to fetch.
     */
    orderBy?: ProfDisciplinasOrderByWithRelationInput | ProfDisciplinasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfDisciplinas.
     */
    cursor?: ProfDisciplinasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfDisciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfDisciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfDisciplinas.
     */
    distinct?: ProfDisciplinasScalarFieldEnum | ProfDisciplinasScalarFieldEnum[]
  }

  /**
   * ProfDisciplinas findFirstOrThrow
   */
  export type ProfDisciplinasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfDisciplinas
     */
    select?: ProfDisciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfDisciplinas
     */
    omit?: ProfDisciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfDisciplinasInclude<ExtArgs> | null
    /**
     * Filter, which ProfDisciplinas to fetch.
     */
    where?: ProfDisciplinasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfDisciplinas to fetch.
     */
    orderBy?: ProfDisciplinasOrderByWithRelationInput | ProfDisciplinasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfDisciplinas.
     */
    cursor?: ProfDisciplinasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfDisciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfDisciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfDisciplinas.
     */
    distinct?: ProfDisciplinasScalarFieldEnum | ProfDisciplinasScalarFieldEnum[]
  }

  /**
   * ProfDisciplinas findMany
   */
  export type ProfDisciplinasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfDisciplinas
     */
    select?: ProfDisciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfDisciplinas
     */
    omit?: ProfDisciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfDisciplinasInclude<ExtArgs> | null
    /**
     * Filter, which ProfDisciplinas to fetch.
     */
    where?: ProfDisciplinasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfDisciplinas to fetch.
     */
    orderBy?: ProfDisciplinasOrderByWithRelationInput | ProfDisciplinasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfDisciplinas.
     */
    cursor?: ProfDisciplinasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfDisciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfDisciplinas.
     */
    skip?: number
    distinct?: ProfDisciplinasScalarFieldEnum | ProfDisciplinasScalarFieldEnum[]
  }

  /**
   * ProfDisciplinas create
   */
  export type ProfDisciplinasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfDisciplinas
     */
    select?: ProfDisciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfDisciplinas
     */
    omit?: ProfDisciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfDisciplinasInclude<ExtArgs> | null
    /**
     * The data needed to create a ProfDisciplinas.
     */
    data: XOR<ProfDisciplinasCreateInput, ProfDisciplinasUncheckedCreateInput>
  }

  /**
   * ProfDisciplinas createMany
   */
  export type ProfDisciplinasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfDisciplinas.
     */
    data: ProfDisciplinasCreateManyInput | ProfDisciplinasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfDisciplinas createManyAndReturn
   */
  export type ProfDisciplinasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfDisciplinas
     */
    select?: ProfDisciplinasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfDisciplinas
     */
    omit?: ProfDisciplinasOmit<ExtArgs> | null
    /**
     * The data used to create many ProfDisciplinas.
     */
    data: ProfDisciplinasCreateManyInput | ProfDisciplinasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfDisciplinasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfDisciplinas update
   */
  export type ProfDisciplinasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfDisciplinas
     */
    select?: ProfDisciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfDisciplinas
     */
    omit?: ProfDisciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfDisciplinasInclude<ExtArgs> | null
    /**
     * The data needed to update a ProfDisciplinas.
     */
    data: XOR<ProfDisciplinasUpdateInput, ProfDisciplinasUncheckedUpdateInput>
    /**
     * Choose, which ProfDisciplinas to update.
     */
    where: ProfDisciplinasWhereUniqueInput
  }

  /**
   * ProfDisciplinas updateMany
   */
  export type ProfDisciplinasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfDisciplinas.
     */
    data: XOR<ProfDisciplinasUpdateManyMutationInput, ProfDisciplinasUncheckedUpdateManyInput>
    /**
     * Filter which ProfDisciplinas to update
     */
    where?: ProfDisciplinasWhereInput
    /**
     * Limit how many ProfDisciplinas to update.
     */
    limit?: number
  }

  /**
   * ProfDisciplinas updateManyAndReturn
   */
  export type ProfDisciplinasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfDisciplinas
     */
    select?: ProfDisciplinasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfDisciplinas
     */
    omit?: ProfDisciplinasOmit<ExtArgs> | null
    /**
     * The data used to update ProfDisciplinas.
     */
    data: XOR<ProfDisciplinasUpdateManyMutationInput, ProfDisciplinasUncheckedUpdateManyInput>
    /**
     * Filter which ProfDisciplinas to update
     */
    where?: ProfDisciplinasWhereInput
    /**
     * Limit how many ProfDisciplinas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfDisciplinasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfDisciplinas upsert
   */
  export type ProfDisciplinasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfDisciplinas
     */
    select?: ProfDisciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfDisciplinas
     */
    omit?: ProfDisciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfDisciplinasInclude<ExtArgs> | null
    /**
     * The filter to search for the ProfDisciplinas to update in case it exists.
     */
    where: ProfDisciplinasWhereUniqueInput
    /**
     * In case the ProfDisciplinas found by the `where` argument doesn't exist, create a new ProfDisciplinas with this data.
     */
    create: XOR<ProfDisciplinasCreateInput, ProfDisciplinasUncheckedCreateInput>
    /**
     * In case the ProfDisciplinas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfDisciplinasUpdateInput, ProfDisciplinasUncheckedUpdateInput>
  }

  /**
   * ProfDisciplinas delete
   */
  export type ProfDisciplinasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfDisciplinas
     */
    select?: ProfDisciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfDisciplinas
     */
    omit?: ProfDisciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfDisciplinasInclude<ExtArgs> | null
    /**
     * Filter which ProfDisciplinas to delete.
     */
    where: ProfDisciplinasWhereUniqueInput
  }

  /**
   * ProfDisciplinas deleteMany
   */
  export type ProfDisciplinasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfDisciplinas to delete
     */
    where?: ProfDisciplinasWhereInput
    /**
     * Limit how many ProfDisciplinas to delete.
     */
    limit?: number
  }

  /**
   * ProfDisciplinas without action
   */
  export type ProfDisciplinasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfDisciplinas
     */
    select?: ProfDisciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfDisciplinas
     */
    omit?: ProfDisciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfDisciplinasInclude<ExtArgs> | null
  }


  /**
   * Model Sala
   */

  export type AggregateSala = {
    _count: SalaCountAggregateOutputType | null
    _avg: SalaAvgAggregateOutputType | null
    _sum: SalaSumAggregateOutputType | null
    _min: SalaMinAggregateOutputType | null
    _max: SalaMaxAggregateOutputType | null
  }

  export type SalaAvgAggregateOutputType = {
    capacidade: number | null
  }

  export type SalaSumAggregateOutputType = {
    capacidade: number | null
  }

  export type SalaMinAggregateOutputType = {
    nome_sala: string | null
    capacidade: number | null
  }

  export type SalaMaxAggregateOutputType = {
    nome_sala: string | null
    capacidade: number | null
  }

  export type SalaCountAggregateOutputType = {
    nome_sala: number
    capacidade: number
    _all: number
  }


  export type SalaAvgAggregateInputType = {
    capacidade?: true
  }

  export type SalaSumAggregateInputType = {
    capacidade?: true
  }

  export type SalaMinAggregateInputType = {
    nome_sala?: true
    capacidade?: true
  }

  export type SalaMaxAggregateInputType = {
    nome_sala?: true
    capacidade?: true
  }

  export type SalaCountAggregateInputType = {
    nome_sala?: true
    capacidade?: true
    _all?: true
  }

  export type SalaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sala to aggregate.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Salas
    **/
    _count?: true | SalaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalaMaxAggregateInputType
  }

  export type GetSalaAggregateType<T extends SalaAggregateArgs> = {
        [P in keyof T & keyof AggregateSala]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSala[P]>
      : GetScalarType<T[P], AggregateSala[P]>
  }




  export type SalaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaWhereInput
    orderBy?: SalaOrderByWithAggregationInput | SalaOrderByWithAggregationInput[]
    by: SalaScalarFieldEnum[] | SalaScalarFieldEnum
    having?: SalaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalaCountAggregateInputType | true
    _avg?: SalaAvgAggregateInputType
    _sum?: SalaSumAggregateInputType
    _min?: SalaMinAggregateInputType
    _max?: SalaMaxAggregateInputType
  }

  export type SalaGroupByOutputType = {
    nome_sala: string
    capacidade: number
    _count: SalaCountAggregateOutputType | null
    _avg: SalaAvgAggregateOutputType | null
    _sum: SalaSumAggregateOutputType | null
    _min: SalaMinAggregateOutputType | null
    _max: SalaMaxAggregateOutputType | null
  }

  type GetSalaGroupByPayload<T extends SalaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalaGroupByOutputType[P]>
            : GetScalarType<T[P], SalaGroupByOutputType[P]>
        }
      >
    >


  export type SalaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome_sala?: boolean
    capacidade?: boolean
    tempo_lectivo?: boolean | Sala$tempo_lectivoArgs<ExtArgs>
    _count?: boolean | SalaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sala"]>

  export type SalaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome_sala?: boolean
    capacidade?: boolean
  }, ExtArgs["result"]["sala"]>

  export type SalaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome_sala?: boolean
    capacidade?: boolean
  }, ExtArgs["result"]["sala"]>

  export type SalaSelectScalar = {
    nome_sala?: boolean
    capacidade?: boolean
  }

  export type SalaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nome_sala" | "capacidade", ExtArgs["result"]["sala"]>
  export type SalaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tempo_lectivo?: boolean | Sala$tempo_lectivoArgs<ExtArgs>
    _count?: boolean | SalaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SalaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SalaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SalaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sala"
    objects: {
      tempo_lectivo: Prisma.$Tempo_LectivoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nome_sala: string
      capacidade: number
    }, ExtArgs["result"]["sala"]>
    composites: {}
  }

  type SalaGetPayload<S extends boolean | null | undefined | SalaDefaultArgs> = $Result.GetResult<Prisma.$SalaPayload, S>

  type SalaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalaCountAggregateInputType | true
    }

  export interface SalaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sala'], meta: { name: 'Sala' } }
    /**
     * Find zero or one Sala that matches the filter.
     * @param {SalaFindUniqueArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalaFindUniqueArgs>(args: SelectSubset<T, SalaFindUniqueArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sala that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalaFindUniqueOrThrowArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalaFindUniqueOrThrowArgs>(args: SelectSubset<T, SalaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sala that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaFindFirstArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalaFindFirstArgs>(args?: SelectSubset<T, SalaFindFirstArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sala that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaFindFirstOrThrowArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalaFindFirstOrThrowArgs>(args?: SelectSubset<T, SalaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Salas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Salas
     * const salas = await prisma.sala.findMany()
     * 
     * // Get first 10 Salas
     * const salas = await prisma.sala.findMany({ take: 10 })
     * 
     * // Only select the `nome_sala`
     * const salaWithNome_salaOnly = await prisma.sala.findMany({ select: { nome_sala: true } })
     * 
     */
    findMany<T extends SalaFindManyArgs>(args?: SelectSubset<T, SalaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sala.
     * @param {SalaCreateArgs} args - Arguments to create a Sala.
     * @example
     * // Create one Sala
     * const Sala = await prisma.sala.create({
     *   data: {
     *     // ... data to create a Sala
     *   }
     * })
     * 
     */
    create<T extends SalaCreateArgs>(args: SelectSubset<T, SalaCreateArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Salas.
     * @param {SalaCreateManyArgs} args - Arguments to create many Salas.
     * @example
     * // Create many Salas
     * const sala = await prisma.sala.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalaCreateManyArgs>(args?: SelectSubset<T, SalaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Salas and returns the data saved in the database.
     * @param {SalaCreateManyAndReturnArgs} args - Arguments to create many Salas.
     * @example
     * // Create many Salas
     * const sala = await prisma.sala.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Salas and only return the `nome_sala`
     * const salaWithNome_salaOnly = await prisma.sala.createManyAndReturn({
     *   select: { nome_sala: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalaCreateManyAndReturnArgs>(args?: SelectSubset<T, SalaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sala.
     * @param {SalaDeleteArgs} args - Arguments to delete one Sala.
     * @example
     * // Delete one Sala
     * const Sala = await prisma.sala.delete({
     *   where: {
     *     // ... filter to delete one Sala
     *   }
     * })
     * 
     */
    delete<T extends SalaDeleteArgs>(args: SelectSubset<T, SalaDeleteArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sala.
     * @param {SalaUpdateArgs} args - Arguments to update one Sala.
     * @example
     * // Update one Sala
     * const sala = await prisma.sala.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalaUpdateArgs>(args: SelectSubset<T, SalaUpdateArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Salas.
     * @param {SalaDeleteManyArgs} args - Arguments to filter Salas to delete.
     * @example
     * // Delete a few Salas
     * const { count } = await prisma.sala.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalaDeleteManyArgs>(args?: SelectSubset<T, SalaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Salas
     * const sala = await prisma.sala.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalaUpdateManyArgs>(args: SelectSubset<T, SalaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salas and returns the data updated in the database.
     * @param {SalaUpdateManyAndReturnArgs} args - Arguments to update many Salas.
     * @example
     * // Update many Salas
     * const sala = await prisma.sala.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Salas and only return the `nome_sala`
     * const salaWithNome_salaOnly = await prisma.sala.updateManyAndReturn({
     *   select: { nome_sala: true },
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
    updateManyAndReturn<T extends SalaUpdateManyAndReturnArgs>(args: SelectSubset<T, SalaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sala.
     * @param {SalaUpsertArgs} args - Arguments to update or create a Sala.
     * @example
     * // Update or create a Sala
     * const sala = await prisma.sala.upsert({
     *   create: {
     *     // ... data to create a Sala
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sala we want to update
     *   }
     * })
     */
    upsert<T extends SalaUpsertArgs>(args: SelectSubset<T, SalaUpsertArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Salas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaCountArgs} args - Arguments to filter Salas to count.
     * @example
     * // Count the number of Salas
     * const count = await prisma.sala.count({
     *   where: {
     *     // ... the filter for the Salas we want to count
     *   }
     * })
    **/
    count<T extends SalaCountArgs>(
      args?: Subset<T, SalaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalaAggregateArgs>(args: Subset<T, SalaAggregateArgs>): Prisma.PrismaPromise<GetSalaAggregateType<T>>

    /**
     * Group by Sala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaGroupByArgs} args - Group by arguments.
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
      T extends SalaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalaGroupByArgs['orderBy'] }
        : { orderBy?: SalaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SalaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sala model
   */
  readonly fields: SalaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sala.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tempo_lectivo<T extends Sala$tempo_lectivoArgs<ExtArgs> = {}>(args?: Subset<T, Sala$tempo_lectivoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tempo_LectivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Sala model
   */
  interface SalaFieldRefs {
    readonly nome_sala: FieldRef<"Sala", 'String'>
    readonly capacidade: FieldRef<"Sala", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Sala findUnique
   */
  export type SalaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala findUniqueOrThrow
   */
  export type SalaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala findFirst
   */
  export type SalaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salas.
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salas.
     */
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Sala findFirstOrThrow
   */
  export type SalaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salas.
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salas.
     */
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Sala findMany
   */
  export type SalaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Salas to fetch.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Salas.
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Sala create
   */
  export type SalaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * The data needed to create a Sala.
     */
    data: XOR<SalaCreateInput, SalaUncheckedCreateInput>
  }

  /**
   * Sala createMany
   */
  export type SalaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Salas.
     */
    data: SalaCreateManyInput | SalaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sala createManyAndReturn
   */
  export type SalaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * The data used to create many Salas.
     */
    data: SalaCreateManyInput | SalaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sala update
   */
  export type SalaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * The data needed to update a Sala.
     */
    data: XOR<SalaUpdateInput, SalaUncheckedUpdateInput>
    /**
     * Choose, which Sala to update.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala updateMany
   */
  export type SalaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Salas.
     */
    data: XOR<SalaUpdateManyMutationInput, SalaUncheckedUpdateManyInput>
    /**
     * Filter which Salas to update
     */
    where?: SalaWhereInput
    /**
     * Limit how many Salas to update.
     */
    limit?: number
  }

  /**
   * Sala updateManyAndReturn
   */
  export type SalaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * The data used to update Salas.
     */
    data: XOR<SalaUpdateManyMutationInput, SalaUncheckedUpdateManyInput>
    /**
     * Filter which Salas to update
     */
    where?: SalaWhereInput
    /**
     * Limit how many Salas to update.
     */
    limit?: number
  }

  /**
   * Sala upsert
   */
  export type SalaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * The filter to search for the Sala to update in case it exists.
     */
    where: SalaWhereUniqueInput
    /**
     * In case the Sala found by the `where` argument doesn't exist, create a new Sala with this data.
     */
    create: XOR<SalaCreateInput, SalaUncheckedCreateInput>
    /**
     * In case the Sala was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalaUpdateInput, SalaUncheckedUpdateInput>
  }

  /**
   * Sala delete
   */
  export type SalaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter which Sala to delete.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala deleteMany
   */
  export type SalaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Salas to delete
     */
    where?: SalaWhereInput
    /**
     * Limit how many Salas to delete.
     */
    limit?: number
  }

  /**
   * Sala.tempo_lectivo
   */
  export type Sala$tempo_lectivoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tempo_Lectivo
     */
    select?: Tempo_LectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tempo_Lectivo
     */
    omit?: Tempo_LectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tempo_LectivoInclude<ExtArgs> | null
    where?: Tempo_LectivoWhereInput
    orderBy?: Tempo_LectivoOrderByWithRelationInput | Tempo_LectivoOrderByWithRelationInput[]
    cursor?: Tempo_LectivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tempo_LectivoScalarFieldEnum | Tempo_LectivoScalarFieldEnum[]
  }

  /**
   * Sala without action
   */
  export type SalaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
  }


  /**
   * Model Tempo_Lectivo
   */

  export type AggregateTempo_Lectivo = {
    _count: Tempo_LectivoCountAggregateOutputType | null
    _avg: Tempo_LectivoAvgAggregateOutputType | null
    _sum: Tempo_LectivoSumAggregateOutputType | null
    _min: Tempo_LectivoMinAggregateOutputType | null
    _max: Tempo_LectivoMaxAggregateOutputType | null
  }

  export type Tempo_LectivoAvgAggregateOutputType = {
    id: number | null
    professorId: number | null
    ordem: number | null
  }

  export type Tempo_LectivoSumAggregateOutputType = {
    id: number | null
    professorId: number | null
    ordem: number | null
  }

  export type Tempo_LectivoMinAggregateOutputType = {
    id: number | null
    professorId: number | null
    nome_turma: string | null
    nome_disciplina: string | null
    nome_sala: string | null
    nome_dia: string | null
    nome_periodo: string | null
    ordem: number | null
  }

  export type Tempo_LectivoMaxAggregateOutputType = {
    id: number | null
    professorId: number | null
    nome_turma: string | null
    nome_disciplina: string | null
    nome_sala: string | null
    nome_dia: string | null
    nome_periodo: string | null
    ordem: number | null
  }

  export type Tempo_LectivoCountAggregateOutputType = {
    id: number
    professorId: number
    nome_turma: number
    nome_disciplina: number
    nome_sala: number
    nome_dia: number
    nome_periodo: number
    ordem: number
    _all: number
  }


  export type Tempo_LectivoAvgAggregateInputType = {
    id?: true
    professorId?: true
    ordem?: true
  }

  export type Tempo_LectivoSumAggregateInputType = {
    id?: true
    professorId?: true
    ordem?: true
  }

  export type Tempo_LectivoMinAggregateInputType = {
    id?: true
    professorId?: true
    nome_turma?: true
    nome_disciplina?: true
    nome_sala?: true
    nome_dia?: true
    nome_periodo?: true
    ordem?: true
  }

  export type Tempo_LectivoMaxAggregateInputType = {
    id?: true
    professorId?: true
    nome_turma?: true
    nome_disciplina?: true
    nome_sala?: true
    nome_dia?: true
    nome_periodo?: true
    ordem?: true
  }

  export type Tempo_LectivoCountAggregateInputType = {
    id?: true
    professorId?: true
    nome_turma?: true
    nome_disciplina?: true
    nome_sala?: true
    nome_dia?: true
    nome_periodo?: true
    ordem?: true
    _all?: true
  }

  export type Tempo_LectivoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tempo_Lectivo to aggregate.
     */
    where?: Tempo_LectivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tempo_Lectivos to fetch.
     */
    orderBy?: Tempo_LectivoOrderByWithRelationInput | Tempo_LectivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Tempo_LectivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tempo_Lectivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tempo_Lectivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tempo_Lectivos
    **/
    _count?: true | Tempo_LectivoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tempo_LectivoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tempo_LectivoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tempo_LectivoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tempo_LectivoMaxAggregateInputType
  }

  export type GetTempo_LectivoAggregateType<T extends Tempo_LectivoAggregateArgs> = {
        [P in keyof T & keyof AggregateTempo_Lectivo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTempo_Lectivo[P]>
      : GetScalarType<T[P], AggregateTempo_Lectivo[P]>
  }




  export type Tempo_LectivoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Tempo_LectivoWhereInput
    orderBy?: Tempo_LectivoOrderByWithAggregationInput | Tempo_LectivoOrderByWithAggregationInput[]
    by: Tempo_LectivoScalarFieldEnum[] | Tempo_LectivoScalarFieldEnum
    having?: Tempo_LectivoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tempo_LectivoCountAggregateInputType | true
    _avg?: Tempo_LectivoAvgAggregateInputType
    _sum?: Tempo_LectivoSumAggregateInputType
    _min?: Tempo_LectivoMinAggregateInputType
    _max?: Tempo_LectivoMaxAggregateInputType
  }

  export type Tempo_LectivoGroupByOutputType = {
    id: number
    professorId: number
    nome_turma: string
    nome_disciplina: string
    nome_sala: string
    nome_dia: string
    nome_periodo: string
    ordem: number
    _count: Tempo_LectivoCountAggregateOutputType | null
    _avg: Tempo_LectivoAvgAggregateOutputType | null
    _sum: Tempo_LectivoSumAggregateOutputType | null
    _min: Tempo_LectivoMinAggregateOutputType | null
    _max: Tempo_LectivoMaxAggregateOutputType | null
  }

  type GetTempo_LectivoGroupByPayload<T extends Tempo_LectivoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tempo_LectivoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tempo_LectivoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tempo_LectivoGroupByOutputType[P]>
            : GetScalarType<T[P], Tempo_LectivoGroupByOutputType[P]>
        }
      >
    >


  export type Tempo_LectivoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professorId?: boolean
    nome_turma?: boolean
    nome_disciplina?: boolean
    nome_sala?: boolean
    nome_dia?: boolean
    nome_periodo?: boolean
    ordem?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    turma?: boolean | TurmaDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
    sala?: boolean | SalaDefaultArgs<ExtArgs>
    dia?: boolean | DiaSemanaDefaultArgs<ExtArgs>
    periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tempo_Lectivo"]>

  export type Tempo_LectivoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professorId?: boolean
    nome_turma?: boolean
    nome_disciplina?: boolean
    nome_sala?: boolean
    nome_dia?: boolean
    nome_periodo?: boolean
    ordem?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    turma?: boolean | TurmaDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
    sala?: boolean | SalaDefaultArgs<ExtArgs>
    dia?: boolean | DiaSemanaDefaultArgs<ExtArgs>
    periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tempo_Lectivo"]>

  export type Tempo_LectivoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professorId?: boolean
    nome_turma?: boolean
    nome_disciplina?: boolean
    nome_sala?: boolean
    nome_dia?: boolean
    nome_periodo?: boolean
    ordem?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    turma?: boolean | TurmaDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
    sala?: boolean | SalaDefaultArgs<ExtArgs>
    dia?: boolean | DiaSemanaDefaultArgs<ExtArgs>
    periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tempo_Lectivo"]>

  export type Tempo_LectivoSelectScalar = {
    id?: boolean
    professorId?: boolean
    nome_turma?: boolean
    nome_disciplina?: boolean
    nome_sala?: boolean
    nome_dia?: boolean
    nome_periodo?: boolean
    ordem?: boolean
  }

  export type Tempo_LectivoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "professorId" | "nome_turma" | "nome_disciplina" | "nome_sala" | "nome_dia" | "nome_periodo" | "ordem", ExtArgs["result"]["tempo_Lectivo"]>
  export type Tempo_LectivoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    turma?: boolean | TurmaDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
    sala?: boolean | SalaDefaultArgs<ExtArgs>
    dia?: boolean | DiaSemanaDefaultArgs<ExtArgs>
    periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
  }
  export type Tempo_LectivoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    turma?: boolean | TurmaDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
    sala?: boolean | SalaDefaultArgs<ExtArgs>
    dia?: boolean | DiaSemanaDefaultArgs<ExtArgs>
    periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
  }
  export type Tempo_LectivoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    turma?: boolean | TurmaDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
    sala?: boolean | SalaDefaultArgs<ExtArgs>
    dia?: boolean | DiaSemanaDefaultArgs<ExtArgs>
    periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
  }

  export type $Tempo_LectivoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tempo_Lectivo"
    objects: {
      professor: Prisma.$ProfessorPayload<ExtArgs>
      turma: Prisma.$TurmaPayload<ExtArgs>
      disciplina: Prisma.$DisciplinaPayload<ExtArgs>
      sala: Prisma.$SalaPayload<ExtArgs>
      dia: Prisma.$DiaSemanaPayload<ExtArgs>
      periodo: Prisma.$PeriodoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      professorId: number
      nome_turma: string
      nome_disciplina: string
      nome_sala: string
      nome_dia: string
      nome_periodo: string
      ordem: number
    }, ExtArgs["result"]["tempo_Lectivo"]>
    composites: {}
  }

  type Tempo_LectivoGetPayload<S extends boolean | null | undefined | Tempo_LectivoDefaultArgs> = $Result.GetResult<Prisma.$Tempo_LectivoPayload, S>

  type Tempo_LectivoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Tempo_LectivoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tempo_LectivoCountAggregateInputType | true
    }

  export interface Tempo_LectivoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tempo_Lectivo'], meta: { name: 'Tempo_Lectivo' } }
    /**
     * Find zero or one Tempo_Lectivo that matches the filter.
     * @param {Tempo_LectivoFindUniqueArgs} args - Arguments to find a Tempo_Lectivo
     * @example
     * // Get one Tempo_Lectivo
     * const tempo_Lectivo = await prisma.tempo_Lectivo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Tempo_LectivoFindUniqueArgs>(args: SelectSubset<T, Tempo_LectivoFindUniqueArgs<ExtArgs>>): Prisma__Tempo_LectivoClient<$Result.GetResult<Prisma.$Tempo_LectivoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tempo_Lectivo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Tempo_LectivoFindUniqueOrThrowArgs} args - Arguments to find a Tempo_Lectivo
     * @example
     * // Get one Tempo_Lectivo
     * const tempo_Lectivo = await prisma.tempo_Lectivo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Tempo_LectivoFindUniqueOrThrowArgs>(args: SelectSubset<T, Tempo_LectivoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Tempo_LectivoClient<$Result.GetResult<Prisma.$Tempo_LectivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tempo_Lectivo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tempo_LectivoFindFirstArgs} args - Arguments to find a Tempo_Lectivo
     * @example
     * // Get one Tempo_Lectivo
     * const tempo_Lectivo = await prisma.tempo_Lectivo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Tempo_LectivoFindFirstArgs>(args?: SelectSubset<T, Tempo_LectivoFindFirstArgs<ExtArgs>>): Prisma__Tempo_LectivoClient<$Result.GetResult<Prisma.$Tempo_LectivoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tempo_Lectivo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tempo_LectivoFindFirstOrThrowArgs} args - Arguments to find a Tempo_Lectivo
     * @example
     * // Get one Tempo_Lectivo
     * const tempo_Lectivo = await prisma.tempo_Lectivo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Tempo_LectivoFindFirstOrThrowArgs>(args?: SelectSubset<T, Tempo_LectivoFindFirstOrThrowArgs<ExtArgs>>): Prisma__Tempo_LectivoClient<$Result.GetResult<Prisma.$Tempo_LectivoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tempo_Lectivos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tempo_LectivoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tempo_Lectivos
     * const tempo_Lectivos = await prisma.tempo_Lectivo.findMany()
     * 
     * // Get first 10 Tempo_Lectivos
     * const tempo_Lectivos = await prisma.tempo_Lectivo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tempo_LectivoWithIdOnly = await prisma.tempo_Lectivo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Tempo_LectivoFindManyArgs>(args?: SelectSubset<T, Tempo_LectivoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tempo_LectivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tempo_Lectivo.
     * @param {Tempo_LectivoCreateArgs} args - Arguments to create a Tempo_Lectivo.
     * @example
     * // Create one Tempo_Lectivo
     * const Tempo_Lectivo = await prisma.tempo_Lectivo.create({
     *   data: {
     *     // ... data to create a Tempo_Lectivo
     *   }
     * })
     * 
     */
    create<T extends Tempo_LectivoCreateArgs>(args: SelectSubset<T, Tempo_LectivoCreateArgs<ExtArgs>>): Prisma__Tempo_LectivoClient<$Result.GetResult<Prisma.$Tempo_LectivoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tempo_Lectivos.
     * @param {Tempo_LectivoCreateManyArgs} args - Arguments to create many Tempo_Lectivos.
     * @example
     * // Create many Tempo_Lectivos
     * const tempo_Lectivo = await prisma.tempo_Lectivo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Tempo_LectivoCreateManyArgs>(args?: SelectSubset<T, Tempo_LectivoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tempo_Lectivos and returns the data saved in the database.
     * @param {Tempo_LectivoCreateManyAndReturnArgs} args - Arguments to create many Tempo_Lectivos.
     * @example
     * // Create many Tempo_Lectivos
     * const tempo_Lectivo = await prisma.tempo_Lectivo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tempo_Lectivos and only return the `id`
     * const tempo_LectivoWithIdOnly = await prisma.tempo_Lectivo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Tempo_LectivoCreateManyAndReturnArgs>(args?: SelectSubset<T, Tempo_LectivoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tempo_LectivoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tempo_Lectivo.
     * @param {Tempo_LectivoDeleteArgs} args - Arguments to delete one Tempo_Lectivo.
     * @example
     * // Delete one Tempo_Lectivo
     * const Tempo_Lectivo = await prisma.tempo_Lectivo.delete({
     *   where: {
     *     // ... filter to delete one Tempo_Lectivo
     *   }
     * })
     * 
     */
    delete<T extends Tempo_LectivoDeleteArgs>(args: SelectSubset<T, Tempo_LectivoDeleteArgs<ExtArgs>>): Prisma__Tempo_LectivoClient<$Result.GetResult<Prisma.$Tempo_LectivoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tempo_Lectivo.
     * @param {Tempo_LectivoUpdateArgs} args - Arguments to update one Tempo_Lectivo.
     * @example
     * // Update one Tempo_Lectivo
     * const tempo_Lectivo = await prisma.tempo_Lectivo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Tempo_LectivoUpdateArgs>(args: SelectSubset<T, Tempo_LectivoUpdateArgs<ExtArgs>>): Prisma__Tempo_LectivoClient<$Result.GetResult<Prisma.$Tempo_LectivoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tempo_Lectivos.
     * @param {Tempo_LectivoDeleteManyArgs} args - Arguments to filter Tempo_Lectivos to delete.
     * @example
     * // Delete a few Tempo_Lectivos
     * const { count } = await prisma.tempo_Lectivo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Tempo_LectivoDeleteManyArgs>(args?: SelectSubset<T, Tempo_LectivoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tempo_Lectivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tempo_LectivoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tempo_Lectivos
     * const tempo_Lectivo = await prisma.tempo_Lectivo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Tempo_LectivoUpdateManyArgs>(args: SelectSubset<T, Tempo_LectivoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tempo_Lectivos and returns the data updated in the database.
     * @param {Tempo_LectivoUpdateManyAndReturnArgs} args - Arguments to update many Tempo_Lectivos.
     * @example
     * // Update many Tempo_Lectivos
     * const tempo_Lectivo = await prisma.tempo_Lectivo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tempo_Lectivos and only return the `id`
     * const tempo_LectivoWithIdOnly = await prisma.tempo_Lectivo.updateManyAndReturn({
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
    updateManyAndReturn<T extends Tempo_LectivoUpdateManyAndReturnArgs>(args: SelectSubset<T, Tempo_LectivoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tempo_LectivoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tempo_Lectivo.
     * @param {Tempo_LectivoUpsertArgs} args - Arguments to update or create a Tempo_Lectivo.
     * @example
     * // Update or create a Tempo_Lectivo
     * const tempo_Lectivo = await prisma.tempo_Lectivo.upsert({
     *   create: {
     *     // ... data to create a Tempo_Lectivo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tempo_Lectivo we want to update
     *   }
     * })
     */
    upsert<T extends Tempo_LectivoUpsertArgs>(args: SelectSubset<T, Tempo_LectivoUpsertArgs<ExtArgs>>): Prisma__Tempo_LectivoClient<$Result.GetResult<Prisma.$Tempo_LectivoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tempo_Lectivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tempo_LectivoCountArgs} args - Arguments to filter Tempo_Lectivos to count.
     * @example
     * // Count the number of Tempo_Lectivos
     * const count = await prisma.tempo_Lectivo.count({
     *   where: {
     *     // ... the filter for the Tempo_Lectivos we want to count
     *   }
     * })
    **/
    count<T extends Tempo_LectivoCountArgs>(
      args?: Subset<T, Tempo_LectivoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tempo_LectivoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tempo_Lectivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tempo_LectivoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tempo_LectivoAggregateArgs>(args: Subset<T, Tempo_LectivoAggregateArgs>): Prisma.PrismaPromise<GetTempo_LectivoAggregateType<T>>

    /**
     * Group by Tempo_Lectivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tempo_LectivoGroupByArgs} args - Group by arguments.
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
      T extends Tempo_LectivoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Tempo_LectivoGroupByArgs['orderBy'] }
        : { orderBy?: Tempo_LectivoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Tempo_LectivoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTempo_LectivoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tempo_Lectivo model
   */
  readonly fields: Tempo_LectivoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tempo_Lectivo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Tempo_LectivoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professor<T extends ProfessorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessorDefaultArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    turma<T extends TurmaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TurmaDefaultArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    disciplina<T extends DisciplinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DisciplinaDefaultArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sala<T extends SalaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalaDefaultArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dia<T extends DiaSemanaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiaSemanaDefaultArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    periodo<T extends PeriodoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeriodoDefaultArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Tempo_Lectivo model
   */
  interface Tempo_LectivoFieldRefs {
    readonly id: FieldRef<"Tempo_Lectivo", 'Int'>
    readonly professorId: FieldRef<"Tempo_Lectivo", 'Int'>
    readonly nome_turma: FieldRef<"Tempo_Lectivo", 'String'>
    readonly nome_disciplina: FieldRef<"Tempo_Lectivo", 'String'>
    readonly nome_sala: FieldRef<"Tempo_Lectivo", 'String'>
    readonly nome_dia: FieldRef<"Tempo_Lectivo", 'String'>
    readonly nome_periodo: FieldRef<"Tempo_Lectivo", 'String'>
    readonly ordem: FieldRef<"Tempo_Lectivo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Tempo_Lectivo findUnique
   */
  export type Tempo_LectivoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tempo_Lectivo
     */
    select?: Tempo_LectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tempo_Lectivo
     */
    omit?: Tempo_LectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tempo_LectivoInclude<ExtArgs> | null
    /**
     * Filter, which Tempo_Lectivo to fetch.
     */
    where: Tempo_LectivoWhereUniqueInput
  }

  /**
   * Tempo_Lectivo findUniqueOrThrow
   */
  export type Tempo_LectivoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tempo_Lectivo
     */
    select?: Tempo_LectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tempo_Lectivo
     */
    omit?: Tempo_LectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tempo_LectivoInclude<ExtArgs> | null
    /**
     * Filter, which Tempo_Lectivo to fetch.
     */
    where: Tempo_LectivoWhereUniqueInput
  }

  /**
   * Tempo_Lectivo findFirst
   */
  export type Tempo_LectivoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tempo_Lectivo
     */
    select?: Tempo_LectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tempo_Lectivo
     */
    omit?: Tempo_LectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tempo_LectivoInclude<ExtArgs> | null
    /**
     * Filter, which Tempo_Lectivo to fetch.
     */
    where?: Tempo_LectivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tempo_Lectivos to fetch.
     */
    orderBy?: Tempo_LectivoOrderByWithRelationInput | Tempo_LectivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tempo_Lectivos.
     */
    cursor?: Tempo_LectivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tempo_Lectivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tempo_Lectivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tempo_Lectivos.
     */
    distinct?: Tempo_LectivoScalarFieldEnum | Tempo_LectivoScalarFieldEnum[]
  }

  /**
   * Tempo_Lectivo findFirstOrThrow
   */
  export type Tempo_LectivoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tempo_Lectivo
     */
    select?: Tempo_LectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tempo_Lectivo
     */
    omit?: Tempo_LectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tempo_LectivoInclude<ExtArgs> | null
    /**
     * Filter, which Tempo_Lectivo to fetch.
     */
    where?: Tempo_LectivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tempo_Lectivos to fetch.
     */
    orderBy?: Tempo_LectivoOrderByWithRelationInput | Tempo_LectivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tempo_Lectivos.
     */
    cursor?: Tempo_LectivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tempo_Lectivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tempo_Lectivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tempo_Lectivos.
     */
    distinct?: Tempo_LectivoScalarFieldEnum | Tempo_LectivoScalarFieldEnum[]
  }

  /**
   * Tempo_Lectivo findMany
   */
  export type Tempo_LectivoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tempo_Lectivo
     */
    select?: Tempo_LectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tempo_Lectivo
     */
    omit?: Tempo_LectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tempo_LectivoInclude<ExtArgs> | null
    /**
     * Filter, which Tempo_Lectivos to fetch.
     */
    where?: Tempo_LectivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tempo_Lectivos to fetch.
     */
    orderBy?: Tempo_LectivoOrderByWithRelationInput | Tempo_LectivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tempo_Lectivos.
     */
    cursor?: Tempo_LectivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tempo_Lectivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tempo_Lectivos.
     */
    skip?: number
    distinct?: Tempo_LectivoScalarFieldEnum | Tempo_LectivoScalarFieldEnum[]
  }

  /**
   * Tempo_Lectivo create
   */
  export type Tempo_LectivoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tempo_Lectivo
     */
    select?: Tempo_LectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tempo_Lectivo
     */
    omit?: Tempo_LectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tempo_LectivoInclude<ExtArgs> | null
    /**
     * The data needed to create a Tempo_Lectivo.
     */
    data: XOR<Tempo_LectivoCreateInput, Tempo_LectivoUncheckedCreateInput>
  }

  /**
   * Tempo_Lectivo createMany
   */
  export type Tempo_LectivoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tempo_Lectivos.
     */
    data: Tempo_LectivoCreateManyInput | Tempo_LectivoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tempo_Lectivo createManyAndReturn
   */
  export type Tempo_LectivoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tempo_Lectivo
     */
    select?: Tempo_LectivoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tempo_Lectivo
     */
    omit?: Tempo_LectivoOmit<ExtArgs> | null
    /**
     * The data used to create many Tempo_Lectivos.
     */
    data: Tempo_LectivoCreateManyInput | Tempo_LectivoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tempo_LectivoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tempo_Lectivo update
   */
  export type Tempo_LectivoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tempo_Lectivo
     */
    select?: Tempo_LectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tempo_Lectivo
     */
    omit?: Tempo_LectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tempo_LectivoInclude<ExtArgs> | null
    /**
     * The data needed to update a Tempo_Lectivo.
     */
    data: XOR<Tempo_LectivoUpdateInput, Tempo_LectivoUncheckedUpdateInput>
    /**
     * Choose, which Tempo_Lectivo to update.
     */
    where: Tempo_LectivoWhereUniqueInput
  }

  /**
   * Tempo_Lectivo updateMany
   */
  export type Tempo_LectivoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tempo_Lectivos.
     */
    data: XOR<Tempo_LectivoUpdateManyMutationInput, Tempo_LectivoUncheckedUpdateManyInput>
    /**
     * Filter which Tempo_Lectivos to update
     */
    where?: Tempo_LectivoWhereInput
    /**
     * Limit how many Tempo_Lectivos to update.
     */
    limit?: number
  }

  /**
   * Tempo_Lectivo updateManyAndReturn
   */
  export type Tempo_LectivoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tempo_Lectivo
     */
    select?: Tempo_LectivoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tempo_Lectivo
     */
    omit?: Tempo_LectivoOmit<ExtArgs> | null
    /**
     * The data used to update Tempo_Lectivos.
     */
    data: XOR<Tempo_LectivoUpdateManyMutationInput, Tempo_LectivoUncheckedUpdateManyInput>
    /**
     * Filter which Tempo_Lectivos to update
     */
    where?: Tempo_LectivoWhereInput
    /**
     * Limit how many Tempo_Lectivos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tempo_LectivoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tempo_Lectivo upsert
   */
  export type Tempo_LectivoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tempo_Lectivo
     */
    select?: Tempo_LectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tempo_Lectivo
     */
    omit?: Tempo_LectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tempo_LectivoInclude<ExtArgs> | null
    /**
     * The filter to search for the Tempo_Lectivo to update in case it exists.
     */
    where: Tempo_LectivoWhereUniqueInput
    /**
     * In case the Tempo_Lectivo found by the `where` argument doesn't exist, create a new Tempo_Lectivo with this data.
     */
    create: XOR<Tempo_LectivoCreateInput, Tempo_LectivoUncheckedCreateInput>
    /**
     * In case the Tempo_Lectivo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Tempo_LectivoUpdateInput, Tempo_LectivoUncheckedUpdateInput>
  }

  /**
   * Tempo_Lectivo delete
   */
  export type Tempo_LectivoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tempo_Lectivo
     */
    select?: Tempo_LectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tempo_Lectivo
     */
    omit?: Tempo_LectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tempo_LectivoInclude<ExtArgs> | null
    /**
     * Filter which Tempo_Lectivo to delete.
     */
    where: Tempo_LectivoWhereUniqueInput
  }

  /**
   * Tempo_Lectivo deleteMany
   */
  export type Tempo_LectivoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tempo_Lectivos to delete
     */
    where?: Tempo_LectivoWhereInput
    /**
     * Limit how many Tempo_Lectivos to delete.
     */
    limit?: number
  }

  /**
   * Tempo_Lectivo without action
   */
  export type Tempo_LectivoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tempo_Lectivo
     */
    select?: Tempo_LectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tempo_Lectivo
     */
    omit?: Tempo_LectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tempo_LectivoInclude<ExtArgs> | null
  }


  /**
   * Model Turma
   */

  export type AggregateTurma = {
    _count: TurmaCountAggregateOutputType | null
    _min: TurmaMinAggregateOutputType | null
    _max: TurmaMaxAggregateOutputType | null
  }

  export type TurmaMinAggregateOutputType = {
    nome_turma: string | null
    nome_curso: string | null
    nome_classe: string | null
  }

  export type TurmaMaxAggregateOutputType = {
    nome_turma: string | null
    nome_curso: string | null
    nome_classe: string | null
  }

  export type TurmaCountAggregateOutputType = {
    nome_turma: number
    nome_curso: number
    nome_classe: number
    _all: number
  }


  export type TurmaMinAggregateInputType = {
    nome_turma?: true
    nome_curso?: true
    nome_classe?: true
  }

  export type TurmaMaxAggregateInputType = {
    nome_turma?: true
    nome_curso?: true
    nome_classe?: true
  }

  export type TurmaCountAggregateInputType = {
    nome_turma?: true
    nome_curso?: true
    nome_classe?: true
    _all?: true
  }

  export type TurmaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turma to aggregate.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Turmas
    **/
    _count?: true | TurmaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TurmaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TurmaMaxAggregateInputType
  }

  export type GetTurmaAggregateType<T extends TurmaAggregateArgs> = {
        [P in keyof T & keyof AggregateTurma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTurma[P]>
      : GetScalarType<T[P], AggregateTurma[P]>
  }




  export type TurmaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurmaWhereInput
    orderBy?: TurmaOrderByWithAggregationInput | TurmaOrderByWithAggregationInput[]
    by: TurmaScalarFieldEnum[] | TurmaScalarFieldEnum
    having?: TurmaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TurmaCountAggregateInputType | true
    _min?: TurmaMinAggregateInputType
    _max?: TurmaMaxAggregateInputType
  }

  export type TurmaGroupByOutputType = {
    nome_turma: string
    nome_curso: string
    nome_classe: string
    _count: TurmaCountAggregateOutputType | null
    _min: TurmaMinAggregateOutputType | null
    _max: TurmaMaxAggregateOutputType | null
  }

  type GetTurmaGroupByPayload<T extends TurmaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TurmaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TurmaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TurmaGroupByOutputType[P]>
            : GetScalarType<T[P], TurmaGroupByOutputType[P]>
        }
      >
    >


  export type TurmaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome_turma?: boolean
    nome_curso?: boolean
    nome_classe?: boolean
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    classe?: boolean | ClasseDefaultArgs<ExtArgs>
    tempo_lectivo?: boolean | Turma$tempo_lectivoArgs<ExtArgs>
    _count?: boolean | TurmaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turma"]>

  export type TurmaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome_turma?: boolean
    nome_curso?: boolean
    nome_classe?: boolean
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    classe?: boolean | ClasseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turma"]>

  export type TurmaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome_turma?: boolean
    nome_curso?: boolean
    nome_classe?: boolean
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    classe?: boolean | ClasseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turma"]>

  export type TurmaSelectScalar = {
    nome_turma?: boolean
    nome_curso?: boolean
    nome_classe?: boolean
  }

  export type TurmaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nome_turma" | "nome_curso" | "nome_classe", ExtArgs["result"]["turma"]>
  export type TurmaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    classe?: boolean | ClasseDefaultArgs<ExtArgs>
    tempo_lectivo?: boolean | Turma$tempo_lectivoArgs<ExtArgs>
    _count?: boolean | TurmaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TurmaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    classe?: boolean | ClasseDefaultArgs<ExtArgs>
  }
  export type TurmaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    classe?: boolean | ClasseDefaultArgs<ExtArgs>
  }

  export type $TurmaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Turma"
    objects: {
      curso: Prisma.$CursoPayload<ExtArgs>
      classe: Prisma.$ClassePayload<ExtArgs>
      tempo_lectivo: Prisma.$Tempo_LectivoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nome_turma: string
      nome_curso: string
      nome_classe: string
    }, ExtArgs["result"]["turma"]>
    composites: {}
  }

  type TurmaGetPayload<S extends boolean | null | undefined | TurmaDefaultArgs> = $Result.GetResult<Prisma.$TurmaPayload, S>

  type TurmaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TurmaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TurmaCountAggregateInputType | true
    }

  export interface TurmaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Turma'], meta: { name: 'Turma' } }
    /**
     * Find zero or one Turma that matches the filter.
     * @param {TurmaFindUniqueArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TurmaFindUniqueArgs>(args: SelectSubset<T, TurmaFindUniqueArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Turma that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TurmaFindUniqueOrThrowArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TurmaFindUniqueOrThrowArgs>(args: SelectSubset<T, TurmaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaFindFirstArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TurmaFindFirstArgs>(args?: SelectSubset<T, TurmaFindFirstArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaFindFirstOrThrowArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TurmaFindFirstOrThrowArgs>(args?: SelectSubset<T, TurmaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Turmas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Turmas
     * const turmas = await prisma.turma.findMany()
     * 
     * // Get first 10 Turmas
     * const turmas = await prisma.turma.findMany({ take: 10 })
     * 
     * // Only select the `nome_turma`
     * const turmaWithNome_turmaOnly = await prisma.turma.findMany({ select: { nome_turma: true } })
     * 
     */
    findMany<T extends TurmaFindManyArgs>(args?: SelectSubset<T, TurmaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Turma.
     * @param {TurmaCreateArgs} args - Arguments to create a Turma.
     * @example
     * // Create one Turma
     * const Turma = await prisma.turma.create({
     *   data: {
     *     // ... data to create a Turma
     *   }
     * })
     * 
     */
    create<T extends TurmaCreateArgs>(args: SelectSubset<T, TurmaCreateArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Turmas.
     * @param {TurmaCreateManyArgs} args - Arguments to create many Turmas.
     * @example
     * // Create many Turmas
     * const turma = await prisma.turma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TurmaCreateManyArgs>(args?: SelectSubset<T, TurmaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Turmas and returns the data saved in the database.
     * @param {TurmaCreateManyAndReturnArgs} args - Arguments to create many Turmas.
     * @example
     * // Create many Turmas
     * const turma = await prisma.turma.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Turmas and only return the `nome_turma`
     * const turmaWithNome_turmaOnly = await prisma.turma.createManyAndReturn({
     *   select: { nome_turma: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TurmaCreateManyAndReturnArgs>(args?: SelectSubset<T, TurmaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Turma.
     * @param {TurmaDeleteArgs} args - Arguments to delete one Turma.
     * @example
     * // Delete one Turma
     * const Turma = await prisma.turma.delete({
     *   where: {
     *     // ... filter to delete one Turma
     *   }
     * })
     * 
     */
    delete<T extends TurmaDeleteArgs>(args: SelectSubset<T, TurmaDeleteArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Turma.
     * @param {TurmaUpdateArgs} args - Arguments to update one Turma.
     * @example
     * // Update one Turma
     * const turma = await prisma.turma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TurmaUpdateArgs>(args: SelectSubset<T, TurmaUpdateArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Turmas.
     * @param {TurmaDeleteManyArgs} args - Arguments to filter Turmas to delete.
     * @example
     * // Delete a few Turmas
     * const { count } = await prisma.turma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TurmaDeleteManyArgs>(args?: SelectSubset<T, TurmaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Turmas
     * const turma = await prisma.turma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TurmaUpdateManyArgs>(args: SelectSubset<T, TurmaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turmas and returns the data updated in the database.
     * @param {TurmaUpdateManyAndReturnArgs} args - Arguments to update many Turmas.
     * @example
     * // Update many Turmas
     * const turma = await prisma.turma.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Turmas and only return the `nome_turma`
     * const turmaWithNome_turmaOnly = await prisma.turma.updateManyAndReturn({
     *   select: { nome_turma: true },
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
    updateManyAndReturn<T extends TurmaUpdateManyAndReturnArgs>(args: SelectSubset<T, TurmaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Turma.
     * @param {TurmaUpsertArgs} args - Arguments to update or create a Turma.
     * @example
     * // Update or create a Turma
     * const turma = await prisma.turma.upsert({
     *   create: {
     *     // ... data to create a Turma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Turma we want to update
     *   }
     * })
     */
    upsert<T extends TurmaUpsertArgs>(args: SelectSubset<T, TurmaUpsertArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Turmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaCountArgs} args - Arguments to filter Turmas to count.
     * @example
     * // Count the number of Turmas
     * const count = await prisma.turma.count({
     *   where: {
     *     // ... the filter for the Turmas we want to count
     *   }
     * })
    **/
    count<T extends TurmaCountArgs>(
      args?: Subset<T, TurmaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TurmaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Turma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TurmaAggregateArgs>(args: Subset<T, TurmaAggregateArgs>): Prisma.PrismaPromise<GetTurmaAggregateType<T>>

    /**
     * Group by Turma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaGroupByArgs} args - Group by arguments.
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
      T extends TurmaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TurmaGroupByArgs['orderBy'] }
        : { orderBy?: TurmaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TurmaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurmaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Turma model
   */
  readonly fields: TurmaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Turma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TurmaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curso<T extends CursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CursoDefaultArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    classe<T extends ClasseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClasseDefaultArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tempo_lectivo<T extends Turma$tempo_lectivoArgs<ExtArgs> = {}>(args?: Subset<T, Turma$tempo_lectivoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tempo_LectivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Turma model
   */
  interface TurmaFieldRefs {
    readonly nome_turma: FieldRef<"Turma", 'String'>
    readonly nome_curso: FieldRef<"Turma", 'String'>
    readonly nome_classe: FieldRef<"Turma", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Turma findUnique
   */
  export type TurmaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma findUniqueOrThrow
   */
  export type TurmaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma findFirst
   */
  export type TurmaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turmas.
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turmas.
     */
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Turma findFirstOrThrow
   */
  export type TurmaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turmas.
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turmas.
     */
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Turma findMany
   */
  export type TurmaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turmas to fetch.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Turmas.
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Turma create
   */
  export type TurmaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * The data needed to create a Turma.
     */
    data: XOR<TurmaCreateInput, TurmaUncheckedCreateInput>
  }

  /**
   * Turma createMany
   */
  export type TurmaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Turmas.
     */
    data: TurmaCreateManyInput | TurmaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Turma createManyAndReturn
   */
  export type TurmaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * The data used to create many Turmas.
     */
    data: TurmaCreateManyInput | TurmaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Turma update
   */
  export type TurmaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * The data needed to update a Turma.
     */
    data: XOR<TurmaUpdateInput, TurmaUncheckedUpdateInput>
    /**
     * Choose, which Turma to update.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma updateMany
   */
  export type TurmaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Turmas.
     */
    data: XOR<TurmaUpdateManyMutationInput, TurmaUncheckedUpdateManyInput>
    /**
     * Filter which Turmas to update
     */
    where?: TurmaWhereInput
    /**
     * Limit how many Turmas to update.
     */
    limit?: number
  }

  /**
   * Turma updateManyAndReturn
   */
  export type TurmaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * The data used to update Turmas.
     */
    data: XOR<TurmaUpdateManyMutationInput, TurmaUncheckedUpdateManyInput>
    /**
     * Filter which Turmas to update
     */
    where?: TurmaWhereInput
    /**
     * Limit how many Turmas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Turma upsert
   */
  export type TurmaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * The filter to search for the Turma to update in case it exists.
     */
    where: TurmaWhereUniqueInput
    /**
     * In case the Turma found by the `where` argument doesn't exist, create a new Turma with this data.
     */
    create: XOR<TurmaCreateInput, TurmaUncheckedCreateInput>
    /**
     * In case the Turma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TurmaUpdateInput, TurmaUncheckedUpdateInput>
  }

  /**
   * Turma delete
   */
  export type TurmaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter which Turma to delete.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma deleteMany
   */
  export type TurmaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turmas to delete
     */
    where?: TurmaWhereInput
    /**
     * Limit how many Turmas to delete.
     */
    limit?: number
  }

  /**
   * Turma.tempo_lectivo
   */
  export type Turma$tempo_lectivoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tempo_Lectivo
     */
    select?: Tempo_LectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tempo_Lectivo
     */
    omit?: Tempo_LectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tempo_LectivoInclude<ExtArgs> | null
    where?: Tempo_LectivoWhereInput
    orderBy?: Tempo_LectivoOrderByWithRelationInput | Tempo_LectivoOrderByWithRelationInput[]
    cursor?: Tempo_LectivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tempo_LectivoScalarFieldEnum | Tempo_LectivoScalarFieldEnum[]
  }

  /**
   * Turma without action
   */
  export type TurmaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
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


  export const ClasseScalarFieldEnum: {
    nome_classe: 'nome_classe'
  };

  export type ClasseScalarFieldEnum = (typeof ClasseScalarFieldEnum)[keyof typeof ClasseScalarFieldEnum]


  export const CursoScalarFieldEnum: {
    nome_curso: 'nome_curso'
  };

  export type CursoScalarFieldEnum = (typeof CursoScalarFieldEnum)[keyof typeof CursoScalarFieldEnum]


  export const DiaSemanaScalarFieldEnum: {
    nome_dia: 'nome_dia'
  };

  export type DiaSemanaScalarFieldEnum = (typeof DiaSemanaScalarFieldEnum)[keyof typeof DiaSemanaScalarFieldEnum]


  export const DisciplinaScalarFieldEnum: {
    nome_disciplina: 'nome_disciplina'
  };

  export type DisciplinaScalarFieldEnum = (typeof DisciplinaScalarFieldEnum)[keyof typeof DisciplinaScalarFieldEnum]


  export const DisponibilidadeScalarFieldEnum: {
    id_disponibilidade: 'id_disponibilidade',
    professorId: 'professorId',
    nome_dia: 'nome_dia',
    nome_periodo: 'nome_periodo',
    ordem: 'ordem'
  };

  export type DisponibilidadeScalarFieldEnum = (typeof DisponibilidadeScalarFieldEnum)[keyof typeof DisponibilidadeScalarFieldEnum]


  export const PeriodoScalarFieldEnum: {
    nome_periodo: 'nome_periodo'
  };

  export type PeriodoScalarFieldEnum = (typeof PeriodoScalarFieldEnum)[keyof typeof PeriodoScalarFieldEnum]


  export const ProfessorScalarFieldEnum: {
    id_professor: 'id_professor',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    updated_at: 'updated_at'
  };

  export type ProfessorScalarFieldEnum = (typeof ProfessorScalarFieldEnum)[keyof typeof ProfessorScalarFieldEnum]


  export const ProfDisciplinasScalarFieldEnum: {
    professorId: 'professorId',
    nome_disciplina: 'nome_disciplina'
  };

  export type ProfDisciplinasScalarFieldEnum = (typeof ProfDisciplinasScalarFieldEnum)[keyof typeof ProfDisciplinasScalarFieldEnum]


  export const SalaScalarFieldEnum: {
    nome_sala: 'nome_sala',
    capacidade: 'capacidade'
  };

  export type SalaScalarFieldEnum = (typeof SalaScalarFieldEnum)[keyof typeof SalaScalarFieldEnum]


  export const Tempo_LectivoScalarFieldEnum: {
    id: 'id',
    professorId: 'professorId',
    nome_turma: 'nome_turma',
    nome_disciplina: 'nome_disciplina',
    nome_sala: 'nome_sala',
    nome_dia: 'nome_dia',
    nome_periodo: 'nome_periodo',
    ordem: 'ordem'
  };

  export type Tempo_LectivoScalarFieldEnum = (typeof Tempo_LectivoScalarFieldEnum)[keyof typeof Tempo_LectivoScalarFieldEnum]


  export const TurmaScalarFieldEnum: {
    nome_turma: 'nome_turma',
    nome_curso: 'nome_curso',
    nome_classe: 'nome_classe'
  };

  export type TurmaScalarFieldEnum = (typeof TurmaScalarFieldEnum)[keyof typeof TurmaScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type ClasseWhereInput = {
    AND?: ClasseWhereInput | ClasseWhereInput[]
    OR?: ClasseWhereInput[]
    NOT?: ClasseWhereInput | ClasseWhereInput[]
    nome_classe?: StringFilter<"Classe"> | string
    turmas?: TurmaListRelationFilter
  }

  export type ClasseOrderByWithRelationInput = {
    nome_classe?: SortOrder
    turmas?: TurmaOrderByRelationAggregateInput
  }

  export type ClasseWhereUniqueInput = Prisma.AtLeast<{
    nome_classe?: string
    AND?: ClasseWhereInput | ClasseWhereInput[]
    OR?: ClasseWhereInput[]
    NOT?: ClasseWhereInput | ClasseWhereInput[]
    turmas?: TurmaListRelationFilter
  }, "nome_classe">

  export type ClasseOrderByWithAggregationInput = {
    nome_classe?: SortOrder
    _count?: ClasseCountOrderByAggregateInput
    _max?: ClasseMaxOrderByAggregateInput
    _min?: ClasseMinOrderByAggregateInput
  }

  export type ClasseScalarWhereWithAggregatesInput = {
    AND?: ClasseScalarWhereWithAggregatesInput | ClasseScalarWhereWithAggregatesInput[]
    OR?: ClasseScalarWhereWithAggregatesInput[]
    NOT?: ClasseScalarWhereWithAggregatesInput | ClasseScalarWhereWithAggregatesInput[]
    nome_classe?: StringWithAggregatesFilter<"Classe"> | string
  }

  export type CursoWhereInput = {
    AND?: CursoWhereInput | CursoWhereInput[]
    OR?: CursoWhereInput[]
    NOT?: CursoWhereInput | CursoWhereInput[]
    nome_curso?: StringFilter<"Curso"> | string
    turmas?: TurmaListRelationFilter
  }

  export type CursoOrderByWithRelationInput = {
    nome_curso?: SortOrder
    turmas?: TurmaOrderByRelationAggregateInput
  }

  export type CursoWhereUniqueInput = Prisma.AtLeast<{
    nome_curso?: string
    AND?: CursoWhereInput | CursoWhereInput[]
    OR?: CursoWhereInput[]
    NOT?: CursoWhereInput | CursoWhereInput[]
    turmas?: TurmaListRelationFilter
  }, "nome_curso">

  export type CursoOrderByWithAggregationInput = {
    nome_curso?: SortOrder
    _count?: CursoCountOrderByAggregateInput
    _max?: CursoMaxOrderByAggregateInput
    _min?: CursoMinOrderByAggregateInput
  }

  export type CursoScalarWhereWithAggregatesInput = {
    AND?: CursoScalarWhereWithAggregatesInput | CursoScalarWhereWithAggregatesInput[]
    OR?: CursoScalarWhereWithAggregatesInput[]
    NOT?: CursoScalarWhereWithAggregatesInput | CursoScalarWhereWithAggregatesInput[]
    nome_curso?: StringWithAggregatesFilter<"Curso"> | string
  }

  export type DiaSemanaWhereInput = {
    AND?: DiaSemanaWhereInput | DiaSemanaWhereInput[]
    OR?: DiaSemanaWhereInput[]
    NOT?: DiaSemanaWhereInput | DiaSemanaWhereInput[]
    nome_dia?: StringFilter<"DiaSemana"> | string
    disponibilidades?: DisponibilidadeListRelationFilter
    tempo_lectivo?: Tempo_LectivoListRelationFilter
  }

  export type DiaSemanaOrderByWithRelationInput = {
    nome_dia?: SortOrder
    disponibilidades?: DisponibilidadeOrderByRelationAggregateInput
    tempo_lectivo?: Tempo_LectivoOrderByRelationAggregateInput
  }

  export type DiaSemanaWhereUniqueInput = Prisma.AtLeast<{
    nome_dia?: string
    AND?: DiaSemanaWhereInput | DiaSemanaWhereInput[]
    OR?: DiaSemanaWhereInput[]
    NOT?: DiaSemanaWhereInput | DiaSemanaWhereInput[]
    disponibilidades?: DisponibilidadeListRelationFilter
    tempo_lectivo?: Tempo_LectivoListRelationFilter
  }, "nome_dia">

  export type DiaSemanaOrderByWithAggregationInput = {
    nome_dia?: SortOrder
    _count?: DiaSemanaCountOrderByAggregateInput
    _max?: DiaSemanaMaxOrderByAggregateInput
    _min?: DiaSemanaMinOrderByAggregateInput
  }

  export type DiaSemanaScalarWhereWithAggregatesInput = {
    AND?: DiaSemanaScalarWhereWithAggregatesInput | DiaSemanaScalarWhereWithAggregatesInput[]
    OR?: DiaSemanaScalarWhereWithAggregatesInput[]
    NOT?: DiaSemanaScalarWhereWithAggregatesInput | DiaSemanaScalarWhereWithAggregatesInput[]
    nome_dia?: StringWithAggregatesFilter<"DiaSemana"> | string
  }

  export type DisciplinaWhereInput = {
    AND?: DisciplinaWhereInput | DisciplinaWhereInput[]
    OR?: DisciplinaWhereInput[]
    NOT?: DisciplinaWhereInput | DisciplinaWhereInput[]
    nome_disciplina?: StringFilter<"Disciplina"> | string
    profDisciplinas?: ProfDisciplinasListRelationFilter
    tempo_lectivo?: Tempo_LectivoListRelationFilter
  }

  export type DisciplinaOrderByWithRelationInput = {
    nome_disciplina?: SortOrder
    profDisciplinas?: ProfDisciplinasOrderByRelationAggregateInput
    tempo_lectivo?: Tempo_LectivoOrderByRelationAggregateInput
  }

  export type DisciplinaWhereUniqueInput = Prisma.AtLeast<{
    nome_disciplina?: string
    AND?: DisciplinaWhereInput | DisciplinaWhereInput[]
    OR?: DisciplinaWhereInput[]
    NOT?: DisciplinaWhereInput | DisciplinaWhereInput[]
    profDisciplinas?: ProfDisciplinasListRelationFilter
    tempo_lectivo?: Tempo_LectivoListRelationFilter
  }, "nome_disciplina">

  export type DisciplinaOrderByWithAggregationInput = {
    nome_disciplina?: SortOrder
    _count?: DisciplinaCountOrderByAggregateInput
    _max?: DisciplinaMaxOrderByAggregateInput
    _min?: DisciplinaMinOrderByAggregateInput
  }

  export type DisciplinaScalarWhereWithAggregatesInput = {
    AND?: DisciplinaScalarWhereWithAggregatesInput | DisciplinaScalarWhereWithAggregatesInput[]
    OR?: DisciplinaScalarWhereWithAggregatesInput[]
    NOT?: DisciplinaScalarWhereWithAggregatesInput | DisciplinaScalarWhereWithAggregatesInput[]
    nome_disciplina?: StringWithAggregatesFilter<"Disciplina"> | string
  }

  export type DisponibilidadeWhereInput = {
    AND?: DisponibilidadeWhereInput | DisponibilidadeWhereInput[]
    OR?: DisponibilidadeWhereInput[]
    NOT?: DisponibilidadeWhereInput | DisponibilidadeWhereInput[]
    id_disponibilidade?: IntFilter<"Disponibilidade"> | number
    professorId?: IntFilter<"Disponibilidade"> | number
    nome_dia?: StringFilter<"Disponibilidade"> | string
    nome_periodo?: StringFilter<"Disponibilidade"> | string
    ordem?: IntFilter<"Disponibilidade"> | number
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    dia?: XOR<DiaSemanaScalarRelationFilter, DiaSemanaWhereInput>
    periodo?: XOR<PeriodoScalarRelationFilter, PeriodoWhereInput>
  }

  export type DisponibilidadeOrderByWithRelationInput = {
    id_disponibilidade?: SortOrder
    professorId?: SortOrder
    nome_dia?: SortOrder
    nome_periodo?: SortOrder
    ordem?: SortOrder
    professor?: ProfessorOrderByWithRelationInput
    dia?: DiaSemanaOrderByWithRelationInput
    periodo?: PeriodoOrderByWithRelationInput
  }

  export type DisponibilidadeWhereUniqueInput = Prisma.AtLeast<{
    id_disponibilidade?: number
    AND?: DisponibilidadeWhereInput | DisponibilidadeWhereInput[]
    OR?: DisponibilidadeWhereInput[]
    NOT?: DisponibilidadeWhereInput | DisponibilidadeWhereInput[]
    professorId?: IntFilter<"Disponibilidade"> | number
    nome_dia?: StringFilter<"Disponibilidade"> | string
    nome_periodo?: StringFilter<"Disponibilidade"> | string
    ordem?: IntFilter<"Disponibilidade"> | number
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    dia?: XOR<DiaSemanaScalarRelationFilter, DiaSemanaWhereInput>
    periodo?: XOR<PeriodoScalarRelationFilter, PeriodoWhereInput>
  }, "id_disponibilidade">

  export type DisponibilidadeOrderByWithAggregationInput = {
    id_disponibilidade?: SortOrder
    professorId?: SortOrder
    nome_dia?: SortOrder
    nome_periodo?: SortOrder
    ordem?: SortOrder
    _count?: DisponibilidadeCountOrderByAggregateInput
    _avg?: DisponibilidadeAvgOrderByAggregateInput
    _max?: DisponibilidadeMaxOrderByAggregateInput
    _min?: DisponibilidadeMinOrderByAggregateInput
    _sum?: DisponibilidadeSumOrderByAggregateInput
  }

  export type DisponibilidadeScalarWhereWithAggregatesInput = {
    AND?: DisponibilidadeScalarWhereWithAggregatesInput | DisponibilidadeScalarWhereWithAggregatesInput[]
    OR?: DisponibilidadeScalarWhereWithAggregatesInput[]
    NOT?: DisponibilidadeScalarWhereWithAggregatesInput | DisponibilidadeScalarWhereWithAggregatesInput[]
    id_disponibilidade?: IntWithAggregatesFilter<"Disponibilidade"> | number
    professorId?: IntWithAggregatesFilter<"Disponibilidade"> | number
    nome_dia?: StringWithAggregatesFilter<"Disponibilidade"> | string
    nome_periodo?: StringWithAggregatesFilter<"Disponibilidade"> | string
    ordem?: IntWithAggregatesFilter<"Disponibilidade"> | number
  }

  export type PeriodoWhereInput = {
    AND?: PeriodoWhereInput | PeriodoWhereInput[]
    OR?: PeriodoWhereInput[]
    NOT?: PeriodoWhereInput | PeriodoWhereInput[]
    nome_periodo?: StringFilter<"Periodo"> | string
    disponibilidades?: DisponibilidadeListRelationFilter
    tempo_lectivo?: Tempo_LectivoListRelationFilter
  }

  export type PeriodoOrderByWithRelationInput = {
    nome_periodo?: SortOrder
    disponibilidades?: DisponibilidadeOrderByRelationAggregateInput
    tempo_lectivo?: Tempo_LectivoOrderByRelationAggregateInput
  }

  export type PeriodoWhereUniqueInput = Prisma.AtLeast<{
    nome_periodo?: string
    AND?: PeriodoWhereInput | PeriodoWhereInput[]
    OR?: PeriodoWhereInput[]
    NOT?: PeriodoWhereInput | PeriodoWhereInput[]
    disponibilidades?: DisponibilidadeListRelationFilter
    tempo_lectivo?: Tempo_LectivoListRelationFilter
  }, "nome_periodo">

  export type PeriodoOrderByWithAggregationInput = {
    nome_periodo?: SortOrder
    _count?: PeriodoCountOrderByAggregateInput
    _max?: PeriodoMaxOrderByAggregateInput
    _min?: PeriodoMinOrderByAggregateInput
  }

  export type PeriodoScalarWhereWithAggregatesInput = {
    AND?: PeriodoScalarWhereWithAggregatesInput | PeriodoScalarWhereWithAggregatesInput[]
    OR?: PeriodoScalarWhereWithAggregatesInput[]
    NOT?: PeriodoScalarWhereWithAggregatesInput | PeriodoScalarWhereWithAggregatesInput[]
    nome_periodo?: StringWithAggregatesFilter<"Periodo"> | string
  }

  export type ProfessorWhereInput = {
    AND?: ProfessorWhereInput | ProfessorWhereInput[]
    OR?: ProfessorWhereInput[]
    NOT?: ProfessorWhereInput | ProfessorWhereInput[]
    id_professor?: IntFilter<"Professor"> | number
    nome?: StringFilter<"Professor"> | string
    email?: StringFilter<"Professor"> | string
    telefone?: StringFilter<"Professor"> | string
    updated_at?: DateTimeFilter<"Professor"> | Date | string
    profDisciplinas?: ProfDisciplinasListRelationFilter
    disponibilidades?: DisponibilidadeListRelationFilter
    tempo_lectivo?: Tempo_LectivoListRelationFilter
  }

  export type ProfessorOrderByWithRelationInput = {
    id_professor?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    updated_at?: SortOrder
    profDisciplinas?: ProfDisciplinasOrderByRelationAggregateInput
    disponibilidades?: DisponibilidadeOrderByRelationAggregateInput
    tempo_lectivo?: Tempo_LectivoOrderByRelationAggregateInput
  }

  export type ProfessorWhereUniqueInput = Prisma.AtLeast<{
    id_professor?: number
    AND?: ProfessorWhereInput | ProfessorWhereInput[]
    OR?: ProfessorWhereInput[]
    NOT?: ProfessorWhereInput | ProfessorWhereInput[]
    nome?: StringFilter<"Professor"> | string
    email?: StringFilter<"Professor"> | string
    telefone?: StringFilter<"Professor"> | string
    updated_at?: DateTimeFilter<"Professor"> | Date | string
    profDisciplinas?: ProfDisciplinasListRelationFilter
    disponibilidades?: DisponibilidadeListRelationFilter
    tempo_lectivo?: Tempo_LectivoListRelationFilter
  }, "id_professor">

  export type ProfessorOrderByWithAggregationInput = {
    id_professor?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    updated_at?: SortOrder
    _count?: ProfessorCountOrderByAggregateInput
    _avg?: ProfessorAvgOrderByAggregateInput
    _max?: ProfessorMaxOrderByAggregateInput
    _min?: ProfessorMinOrderByAggregateInput
    _sum?: ProfessorSumOrderByAggregateInput
  }

  export type ProfessorScalarWhereWithAggregatesInput = {
    AND?: ProfessorScalarWhereWithAggregatesInput | ProfessorScalarWhereWithAggregatesInput[]
    OR?: ProfessorScalarWhereWithAggregatesInput[]
    NOT?: ProfessorScalarWhereWithAggregatesInput | ProfessorScalarWhereWithAggregatesInput[]
    id_professor?: IntWithAggregatesFilter<"Professor"> | number
    nome?: StringWithAggregatesFilter<"Professor"> | string
    email?: StringWithAggregatesFilter<"Professor"> | string
    telefone?: StringWithAggregatesFilter<"Professor"> | string
    updated_at?: DateTimeWithAggregatesFilter<"Professor"> | Date | string
  }

  export type ProfDisciplinasWhereInput = {
    AND?: ProfDisciplinasWhereInput | ProfDisciplinasWhereInput[]
    OR?: ProfDisciplinasWhereInput[]
    NOT?: ProfDisciplinasWhereInput | ProfDisciplinasWhereInput[]
    professorId?: IntFilter<"ProfDisciplinas"> | number
    nome_disciplina?: StringFilter<"ProfDisciplinas"> | string
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    disciplina?: XOR<DisciplinaScalarRelationFilter, DisciplinaWhereInput>
  }

  export type ProfDisciplinasOrderByWithRelationInput = {
    professorId?: SortOrder
    nome_disciplina?: SortOrder
    professor?: ProfessorOrderByWithRelationInput
    disciplina?: DisciplinaOrderByWithRelationInput
  }

  export type ProfDisciplinasWhereUniqueInput = Prisma.AtLeast<{
    professorId_nome_disciplina?: ProfDisciplinasProfessorIdNome_disciplinaCompoundUniqueInput
    AND?: ProfDisciplinasWhereInput | ProfDisciplinasWhereInput[]
    OR?: ProfDisciplinasWhereInput[]
    NOT?: ProfDisciplinasWhereInput | ProfDisciplinasWhereInput[]
    professorId?: IntFilter<"ProfDisciplinas"> | number
    nome_disciplina?: StringFilter<"ProfDisciplinas"> | string
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    disciplina?: XOR<DisciplinaScalarRelationFilter, DisciplinaWhereInput>
  }, "professorId_nome_disciplina">

  export type ProfDisciplinasOrderByWithAggregationInput = {
    professorId?: SortOrder
    nome_disciplina?: SortOrder
    _count?: ProfDisciplinasCountOrderByAggregateInput
    _avg?: ProfDisciplinasAvgOrderByAggregateInput
    _max?: ProfDisciplinasMaxOrderByAggregateInput
    _min?: ProfDisciplinasMinOrderByAggregateInput
    _sum?: ProfDisciplinasSumOrderByAggregateInput
  }

  export type ProfDisciplinasScalarWhereWithAggregatesInput = {
    AND?: ProfDisciplinasScalarWhereWithAggregatesInput | ProfDisciplinasScalarWhereWithAggregatesInput[]
    OR?: ProfDisciplinasScalarWhereWithAggregatesInput[]
    NOT?: ProfDisciplinasScalarWhereWithAggregatesInput | ProfDisciplinasScalarWhereWithAggregatesInput[]
    professorId?: IntWithAggregatesFilter<"ProfDisciplinas"> | number
    nome_disciplina?: StringWithAggregatesFilter<"ProfDisciplinas"> | string
  }

  export type SalaWhereInput = {
    AND?: SalaWhereInput | SalaWhereInput[]
    OR?: SalaWhereInput[]
    NOT?: SalaWhereInput | SalaWhereInput[]
    nome_sala?: StringFilter<"Sala"> | string
    capacidade?: IntFilter<"Sala"> | number
    tempo_lectivo?: Tempo_LectivoListRelationFilter
  }

  export type SalaOrderByWithRelationInput = {
    nome_sala?: SortOrder
    capacidade?: SortOrder
    tempo_lectivo?: Tempo_LectivoOrderByRelationAggregateInput
  }

  export type SalaWhereUniqueInput = Prisma.AtLeast<{
    nome_sala?: string
    AND?: SalaWhereInput | SalaWhereInput[]
    OR?: SalaWhereInput[]
    NOT?: SalaWhereInput | SalaWhereInput[]
    capacidade?: IntFilter<"Sala"> | number
    tempo_lectivo?: Tempo_LectivoListRelationFilter
  }, "nome_sala">

  export type SalaOrderByWithAggregationInput = {
    nome_sala?: SortOrder
    capacidade?: SortOrder
    _count?: SalaCountOrderByAggregateInput
    _avg?: SalaAvgOrderByAggregateInput
    _max?: SalaMaxOrderByAggregateInput
    _min?: SalaMinOrderByAggregateInput
    _sum?: SalaSumOrderByAggregateInput
  }

  export type SalaScalarWhereWithAggregatesInput = {
    AND?: SalaScalarWhereWithAggregatesInput | SalaScalarWhereWithAggregatesInput[]
    OR?: SalaScalarWhereWithAggregatesInput[]
    NOT?: SalaScalarWhereWithAggregatesInput | SalaScalarWhereWithAggregatesInput[]
    nome_sala?: StringWithAggregatesFilter<"Sala"> | string
    capacidade?: IntWithAggregatesFilter<"Sala"> | number
  }

  export type Tempo_LectivoWhereInput = {
    AND?: Tempo_LectivoWhereInput | Tempo_LectivoWhereInput[]
    OR?: Tempo_LectivoWhereInput[]
    NOT?: Tempo_LectivoWhereInput | Tempo_LectivoWhereInput[]
    id?: IntFilter<"Tempo_Lectivo"> | number
    professorId?: IntFilter<"Tempo_Lectivo"> | number
    nome_turma?: StringFilter<"Tempo_Lectivo"> | string
    nome_disciplina?: StringFilter<"Tempo_Lectivo"> | string
    nome_sala?: StringFilter<"Tempo_Lectivo"> | string
    nome_dia?: StringFilter<"Tempo_Lectivo"> | string
    nome_periodo?: StringFilter<"Tempo_Lectivo"> | string
    ordem?: IntFilter<"Tempo_Lectivo"> | number
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    turma?: XOR<TurmaScalarRelationFilter, TurmaWhereInput>
    disciplina?: XOR<DisciplinaScalarRelationFilter, DisciplinaWhereInput>
    sala?: XOR<SalaScalarRelationFilter, SalaWhereInput>
    dia?: XOR<DiaSemanaScalarRelationFilter, DiaSemanaWhereInput>
    periodo?: XOR<PeriodoScalarRelationFilter, PeriodoWhereInput>
  }

  export type Tempo_LectivoOrderByWithRelationInput = {
    id?: SortOrder
    professorId?: SortOrder
    nome_turma?: SortOrder
    nome_disciplina?: SortOrder
    nome_sala?: SortOrder
    nome_dia?: SortOrder
    nome_periodo?: SortOrder
    ordem?: SortOrder
    professor?: ProfessorOrderByWithRelationInput
    turma?: TurmaOrderByWithRelationInput
    disciplina?: DisciplinaOrderByWithRelationInput
    sala?: SalaOrderByWithRelationInput
    dia?: DiaSemanaOrderByWithRelationInput
    periodo?: PeriodoOrderByWithRelationInput
  }

  export type Tempo_LectivoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Tempo_LectivoWhereInput | Tempo_LectivoWhereInput[]
    OR?: Tempo_LectivoWhereInput[]
    NOT?: Tempo_LectivoWhereInput | Tempo_LectivoWhereInput[]
    professorId?: IntFilter<"Tempo_Lectivo"> | number
    nome_turma?: StringFilter<"Tempo_Lectivo"> | string
    nome_disciplina?: StringFilter<"Tempo_Lectivo"> | string
    nome_sala?: StringFilter<"Tempo_Lectivo"> | string
    nome_dia?: StringFilter<"Tempo_Lectivo"> | string
    nome_periodo?: StringFilter<"Tempo_Lectivo"> | string
    ordem?: IntFilter<"Tempo_Lectivo"> | number
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    turma?: XOR<TurmaScalarRelationFilter, TurmaWhereInput>
    disciplina?: XOR<DisciplinaScalarRelationFilter, DisciplinaWhereInput>
    sala?: XOR<SalaScalarRelationFilter, SalaWhereInput>
    dia?: XOR<DiaSemanaScalarRelationFilter, DiaSemanaWhereInput>
    periodo?: XOR<PeriodoScalarRelationFilter, PeriodoWhereInput>
  }, "id">

  export type Tempo_LectivoOrderByWithAggregationInput = {
    id?: SortOrder
    professorId?: SortOrder
    nome_turma?: SortOrder
    nome_disciplina?: SortOrder
    nome_sala?: SortOrder
    nome_dia?: SortOrder
    nome_periodo?: SortOrder
    ordem?: SortOrder
    _count?: Tempo_LectivoCountOrderByAggregateInput
    _avg?: Tempo_LectivoAvgOrderByAggregateInput
    _max?: Tempo_LectivoMaxOrderByAggregateInput
    _min?: Tempo_LectivoMinOrderByAggregateInput
    _sum?: Tempo_LectivoSumOrderByAggregateInput
  }

  export type Tempo_LectivoScalarWhereWithAggregatesInput = {
    AND?: Tempo_LectivoScalarWhereWithAggregatesInput | Tempo_LectivoScalarWhereWithAggregatesInput[]
    OR?: Tempo_LectivoScalarWhereWithAggregatesInput[]
    NOT?: Tempo_LectivoScalarWhereWithAggregatesInput | Tempo_LectivoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tempo_Lectivo"> | number
    professorId?: IntWithAggregatesFilter<"Tempo_Lectivo"> | number
    nome_turma?: StringWithAggregatesFilter<"Tempo_Lectivo"> | string
    nome_disciplina?: StringWithAggregatesFilter<"Tempo_Lectivo"> | string
    nome_sala?: StringWithAggregatesFilter<"Tempo_Lectivo"> | string
    nome_dia?: StringWithAggregatesFilter<"Tempo_Lectivo"> | string
    nome_periodo?: StringWithAggregatesFilter<"Tempo_Lectivo"> | string
    ordem?: IntWithAggregatesFilter<"Tempo_Lectivo"> | number
  }

  export type TurmaWhereInput = {
    AND?: TurmaWhereInput | TurmaWhereInput[]
    OR?: TurmaWhereInput[]
    NOT?: TurmaWhereInput | TurmaWhereInput[]
    nome_turma?: StringFilter<"Turma"> | string
    nome_curso?: StringFilter<"Turma"> | string
    nome_classe?: StringFilter<"Turma"> | string
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
    classe?: XOR<ClasseScalarRelationFilter, ClasseWhereInput>
    tempo_lectivo?: Tempo_LectivoListRelationFilter
  }

  export type TurmaOrderByWithRelationInput = {
    nome_turma?: SortOrder
    nome_curso?: SortOrder
    nome_classe?: SortOrder
    curso?: CursoOrderByWithRelationInput
    classe?: ClasseOrderByWithRelationInput
    tempo_lectivo?: Tempo_LectivoOrderByRelationAggregateInput
  }

  export type TurmaWhereUniqueInput = Prisma.AtLeast<{
    nome_turma?: string
    AND?: TurmaWhereInput | TurmaWhereInput[]
    OR?: TurmaWhereInput[]
    NOT?: TurmaWhereInput | TurmaWhereInput[]
    nome_curso?: StringFilter<"Turma"> | string
    nome_classe?: StringFilter<"Turma"> | string
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
    classe?: XOR<ClasseScalarRelationFilter, ClasseWhereInput>
    tempo_lectivo?: Tempo_LectivoListRelationFilter
  }, "nome_turma">

  export type TurmaOrderByWithAggregationInput = {
    nome_turma?: SortOrder
    nome_curso?: SortOrder
    nome_classe?: SortOrder
    _count?: TurmaCountOrderByAggregateInput
    _max?: TurmaMaxOrderByAggregateInput
    _min?: TurmaMinOrderByAggregateInput
  }

  export type TurmaScalarWhereWithAggregatesInput = {
    AND?: TurmaScalarWhereWithAggregatesInput | TurmaScalarWhereWithAggregatesInput[]
    OR?: TurmaScalarWhereWithAggregatesInput[]
    NOT?: TurmaScalarWhereWithAggregatesInput | TurmaScalarWhereWithAggregatesInput[]
    nome_turma?: StringWithAggregatesFilter<"Turma"> | string
    nome_curso?: StringWithAggregatesFilter<"Turma"> | string
    nome_classe?: StringWithAggregatesFilter<"Turma"> | string
  }

  export type ClasseCreateInput = {
    nome_classe: string
    turmas?: TurmaCreateNestedManyWithoutClasseInput
  }

  export type ClasseUncheckedCreateInput = {
    nome_classe: string
    turmas?: TurmaUncheckedCreateNestedManyWithoutClasseInput
  }

  export type ClasseUpdateInput = {
    nome_classe?: StringFieldUpdateOperationsInput | string
    turmas?: TurmaUpdateManyWithoutClasseNestedInput
  }

  export type ClasseUncheckedUpdateInput = {
    nome_classe?: StringFieldUpdateOperationsInput | string
    turmas?: TurmaUncheckedUpdateManyWithoutClasseNestedInput
  }

  export type ClasseCreateManyInput = {
    nome_classe: string
  }

  export type ClasseUpdateManyMutationInput = {
    nome_classe?: StringFieldUpdateOperationsInput | string
  }

  export type ClasseUncheckedUpdateManyInput = {
    nome_classe?: StringFieldUpdateOperationsInput | string
  }

  export type CursoCreateInput = {
    nome_curso: string
    turmas?: TurmaCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateInput = {
    nome_curso: string
    turmas?: TurmaUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoUpdateInput = {
    nome_curso?: StringFieldUpdateOperationsInput | string
    turmas?: TurmaUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateInput = {
    nome_curso?: StringFieldUpdateOperationsInput | string
    turmas?: TurmaUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type CursoCreateManyInput = {
    nome_curso: string
  }

  export type CursoUpdateManyMutationInput = {
    nome_curso?: StringFieldUpdateOperationsInput | string
  }

  export type CursoUncheckedUpdateManyInput = {
    nome_curso?: StringFieldUpdateOperationsInput | string
  }

  export type DiaSemanaCreateInput = {
    nome_dia: string
    disponibilidades?: DisponibilidadeCreateNestedManyWithoutDiaInput
    tempo_lectivo?: Tempo_LectivoCreateNestedManyWithoutDiaInput
  }

  export type DiaSemanaUncheckedCreateInput = {
    nome_dia: string
    disponibilidades?: DisponibilidadeUncheckedCreateNestedManyWithoutDiaInput
    tempo_lectivo?: Tempo_LectivoUncheckedCreateNestedManyWithoutDiaInput
  }

  export type DiaSemanaUpdateInput = {
    nome_dia?: StringFieldUpdateOperationsInput | string
    disponibilidades?: DisponibilidadeUpdateManyWithoutDiaNestedInput
    tempo_lectivo?: Tempo_LectivoUpdateManyWithoutDiaNestedInput
  }

  export type DiaSemanaUncheckedUpdateInput = {
    nome_dia?: StringFieldUpdateOperationsInput | string
    disponibilidades?: DisponibilidadeUncheckedUpdateManyWithoutDiaNestedInput
    tempo_lectivo?: Tempo_LectivoUncheckedUpdateManyWithoutDiaNestedInput
  }

  export type DiaSemanaCreateManyInput = {
    nome_dia: string
  }

  export type DiaSemanaUpdateManyMutationInput = {
    nome_dia?: StringFieldUpdateOperationsInput | string
  }

  export type DiaSemanaUncheckedUpdateManyInput = {
    nome_dia?: StringFieldUpdateOperationsInput | string
  }

  export type DisciplinaCreateInput = {
    nome_disciplina: string
    profDisciplinas?: ProfDisciplinasCreateNestedManyWithoutDisciplinaInput
    tempo_lectivo?: Tempo_LectivoCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaUncheckedCreateInput = {
    nome_disciplina: string
    profDisciplinas?: ProfDisciplinasUncheckedCreateNestedManyWithoutDisciplinaInput
    tempo_lectivo?: Tempo_LectivoUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaUpdateInput = {
    nome_disciplina?: StringFieldUpdateOperationsInput | string
    profDisciplinas?: ProfDisciplinasUpdateManyWithoutDisciplinaNestedInput
    tempo_lectivo?: Tempo_LectivoUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaUncheckedUpdateInput = {
    nome_disciplina?: StringFieldUpdateOperationsInput | string
    profDisciplinas?: ProfDisciplinasUncheckedUpdateManyWithoutDisciplinaNestedInput
    tempo_lectivo?: Tempo_LectivoUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaCreateManyInput = {
    nome_disciplina: string
  }

  export type DisciplinaUpdateManyMutationInput = {
    nome_disciplina?: StringFieldUpdateOperationsInput | string
  }

  export type DisciplinaUncheckedUpdateManyInput = {
    nome_disciplina?: StringFieldUpdateOperationsInput | string
  }

  export type DisponibilidadeCreateInput = {
    ordem: number
    professor: ProfessorCreateNestedOneWithoutDisponibilidadesInput
    dia: DiaSemanaCreateNestedOneWithoutDisponibilidadesInput
    periodo: PeriodoCreateNestedOneWithoutDisponibilidadesInput
  }

  export type DisponibilidadeUncheckedCreateInput = {
    id_disponibilidade?: number
    professorId: number
    nome_dia: string
    nome_periodo: string
    ordem: number
  }

  export type DisponibilidadeUpdateInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    professor?: ProfessorUpdateOneRequiredWithoutDisponibilidadesNestedInput
    dia?: DiaSemanaUpdateOneRequiredWithoutDisponibilidadesNestedInput
    periodo?: PeriodoUpdateOneRequiredWithoutDisponibilidadesNestedInput
  }

  export type DisponibilidadeUncheckedUpdateInput = {
    id_disponibilidade?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    nome_dia?: StringFieldUpdateOperationsInput | string
    nome_periodo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type DisponibilidadeCreateManyInput = {
    id_disponibilidade?: number
    professorId: number
    nome_dia: string
    nome_periodo: string
    ordem: number
  }

  export type DisponibilidadeUpdateManyMutationInput = {
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type DisponibilidadeUncheckedUpdateManyInput = {
    id_disponibilidade?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    nome_dia?: StringFieldUpdateOperationsInput | string
    nome_periodo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type PeriodoCreateInput = {
    nome_periodo: string
    disponibilidades?: DisponibilidadeCreateNestedManyWithoutPeriodoInput
    tempo_lectivo?: Tempo_LectivoCreateNestedManyWithoutPeriodoInput
  }

  export type PeriodoUncheckedCreateInput = {
    nome_periodo: string
    disponibilidades?: DisponibilidadeUncheckedCreateNestedManyWithoutPeriodoInput
    tempo_lectivo?: Tempo_LectivoUncheckedCreateNestedManyWithoutPeriodoInput
  }

  export type PeriodoUpdateInput = {
    nome_periodo?: StringFieldUpdateOperationsInput | string
    disponibilidades?: DisponibilidadeUpdateManyWithoutPeriodoNestedInput
    tempo_lectivo?: Tempo_LectivoUpdateManyWithoutPeriodoNestedInput
  }

  export type PeriodoUncheckedUpdateInput = {
    nome_periodo?: StringFieldUpdateOperationsInput | string
    disponibilidades?: DisponibilidadeUncheckedUpdateManyWithoutPeriodoNestedInput
    tempo_lectivo?: Tempo_LectivoUncheckedUpdateManyWithoutPeriodoNestedInput
  }

  export type PeriodoCreateManyInput = {
    nome_periodo: string
  }

  export type PeriodoUpdateManyMutationInput = {
    nome_periodo?: StringFieldUpdateOperationsInput | string
  }

  export type PeriodoUncheckedUpdateManyInput = {
    nome_periodo?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessorCreateInput = {
    nome: string
    email: string
    telefone: string
    updated_at?: Date | string
    profDisciplinas?: ProfDisciplinasCreateNestedManyWithoutProfessorInput
    disponibilidades?: DisponibilidadeCreateNestedManyWithoutProfessorInput
    tempo_lectivo?: Tempo_LectivoCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateInput = {
    id_professor?: number
    nome: string
    email: string
    telefone: string
    updated_at?: Date | string
    profDisciplinas?: ProfDisciplinasUncheckedCreateNestedManyWithoutProfessorInput
    disponibilidades?: DisponibilidadeUncheckedCreateNestedManyWithoutProfessorInput
    tempo_lectivo?: Tempo_LectivoUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profDisciplinas?: ProfDisciplinasUpdateManyWithoutProfessorNestedInput
    disponibilidades?: DisponibilidadeUpdateManyWithoutProfessorNestedInput
    tempo_lectivo?: Tempo_LectivoUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateInput = {
    id_professor?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profDisciplinas?: ProfDisciplinasUncheckedUpdateManyWithoutProfessorNestedInput
    disponibilidades?: DisponibilidadeUncheckedUpdateManyWithoutProfessorNestedInput
    tempo_lectivo?: Tempo_LectivoUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorCreateManyInput = {
    id_professor?: number
    nome: string
    email: string
    telefone: string
    updated_at?: Date | string
  }

  export type ProfessorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessorUncheckedUpdateManyInput = {
    id_professor?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfDisciplinasCreateInput = {
    professor: ProfessorCreateNestedOneWithoutProfDisciplinasInput
    disciplina: DisciplinaCreateNestedOneWithoutProfDisciplinasInput
  }

  export type ProfDisciplinasUncheckedCreateInput = {
    professorId: number
    nome_disciplina: string
  }

  export type ProfDisciplinasUpdateInput = {
    professor?: ProfessorUpdateOneRequiredWithoutProfDisciplinasNestedInput
    disciplina?: DisciplinaUpdateOneRequiredWithoutProfDisciplinasNestedInput
  }

  export type ProfDisciplinasUncheckedUpdateInput = {
    professorId?: IntFieldUpdateOperationsInput | number
    nome_disciplina?: StringFieldUpdateOperationsInput | string
  }

  export type ProfDisciplinasCreateManyInput = {
    professorId: number
    nome_disciplina: string
  }

  export type ProfDisciplinasUpdateManyMutationInput = {

  }

  export type ProfDisciplinasUncheckedUpdateManyInput = {
    professorId?: IntFieldUpdateOperationsInput | number
    nome_disciplina?: StringFieldUpdateOperationsInput | string
  }

  export type SalaCreateInput = {
    nome_sala: string
    capacidade: number
    tempo_lectivo?: Tempo_LectivoCreateNestedManyWithoutSalaInput
  }

  export type SalaUncheckedCreateInput = {
    nome_sala: string
    capacidade: number
    tempo_lectivo?: Tempo_LectivoUncheckedCreateNestedManyWithoutSalaInput
  }

  export type SalaUpdateInput = {
    nome_sala?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
    tempo_lectivo?: Tempo_LectivoUpdateManyWithoutSalaNestedInput
  }

  export type SalaUncheckedUpdateInput = {
    nome_sala?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
    tempo_lectivo?: Tempo_LectivoUncheckedUpdateManyWithoutSalaNestedInput
  }

  export type SalaCreateManyInput = {
    nome_sala: string
    capacidade: number
  }

  export type SalaUpdateManyMutationInput = {
    nome_sala?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
  }

  export type SalaUncheckedUpdateManyInput = {
    nome_sala?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
  }

  export type Tempo_LectivoCreateInput = {
    ordem?: number
    professor: ProfessorCreateNestedOneWithoutTempo_lectivoInput
    turma: TurmaCreateNestedOneWithoutTempo_lectivoInput
    disciplina: DisciplinaCreateNestedOneWithoutTempo_lectivoInput
    sala: SalaCreateNestedOneWithoutTempo_lectivoInput
    dia: DiaSemanaCreateNestedOneWithoutTempo_lectivoInput
    periodo: PeriodoCreateNestedOneWithoutTempo_lectivoInput
  }

  export type Tempo_LectivoUncheckedCreateInput = {
    id?: number
    professorId: number
    nome_turma: string
    nome_disciplina: string
    nome_sala: string
    nome_dia: string
    nome_periodo: string
    ordem?: number
  }

  export type Tempo_LectivoUpdateInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    professor?: ProfessorUpdateOneRequiredWithoutTempo_lectivoNestedInput
    turma?: TurmaUpdateOneRequiredWithoutTempo_lectivoNestedInput
    disciplina?: DisciplinaUpdateOneRequiredWithoutTempo_lectivoNestedInput
    sala?: SalaUpdateOneRequiredWithoutTempo_lectivoNestedInput
    dia?: DiaSemanaUpdateOneRequiredWithoutTempo_lectivoNestedInput
    periodo?: PeriodoUpdateOneRequiredWithoutTempo_lectivoNestedInput
  }

  export type Tempo_LectivoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    nome_turma?: StringFieldUpdateOperationsInput | string
    nome_disciplina?: StringFieldUpdateOperationsInput | string
    nome_sala?: StringFieldUpdateOperationsInput | string
    nome_dia?: StringFieldUpdateOperationsInput | string
    nome_periodo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type Tempo_LectivoCreateManyInput = {
    id?: number
    professorId: number
    nome_turma: string
    nome_disciplina: string
    nome_sala: string
    nome_dia: string
    nome_periodo: string
    ordem?: number
  }

  export type Tempo_LectivoUpdateManyMutationInput = {
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type Tempo_LectivoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    nome_turma?: StringFieldUpdateOperationsInput | string
    nome_disciplina?: StringFieldUpdateOperationsInput | string
    nome_sala?: StringFieldUpdateOperationsInput | string
    nome_dia?: StringFieldUpdateOperationsInput | string
    nome_periodo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type TurmaCreateInput = {
    nome_turma: string
    curso: CursoCreateNestedOneWithoutTurmasInput
    classe: ClasseCreateNestedOneWithoutTurmasInput
    tempo_lectivo?: Tempo_LectivoCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUncheckedCreateInput = {
    nome_turma: string
    nome_curso: string
    nome_classe: string
    tempo_lectivo?: Tempo_LectivoUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUpdateInput = {
    nome_turma?: StringFieldUpdateOperationsInput | string
    curso?: CursoUpdateOneRequiredWithoutTurmasNestedInput
    classe?: ClasseUpdateOneRequiredWithoutTurmasNestedInput
    tempo_lectivo?: Tempo_LectivoUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateInput = {
    nome_turma?: StringFieldUpdateOperationsInput | string
    nome_curso?: StringFieldUpdateOperationsInput | string
    nome_classe?: StringFieldUpdateOperationsInput | string
    tempo_lectivo?: Tempo_LectivoUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaCreateManyInput = {
    nome_turma: string
    nome_curso: string
    nome_classe: string
  }

  export type TurmaUpdateManyMutationInput = {
    nome_turma?: StringFieldUpdateOperationsInput | string
  }

  export type TurmaUncheckedUpdateManyInput = {
    nome_turma?: StringFieldUpdateOperationsInput | string
    nome_curso?: StringFieldUpdateOperationsInput | string
    nome_classe?: StringFieldUpdateOperationsInput | string
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

  export type TurmaListRelationFilter = {
    every?: TurmaWhereInput
    some?: TurmaWhereInput
    none?: TurmaWhereInput
  }

  export type TurmaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClasseCountOrderByAggregateInput = {
    nome_classe?: SortOrder
  }

  export type ClasseMaxOrderByAggregateInput = {
    nome_classe?: SortOrder
  }

  export type ClasseMinOrderByAggregateInput = {
    nome_classe?: SortOrder
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

  export type CursoCountOrderByAggregateInput = {
    nome_curso?: SortOrder
  }

  export type CursoMaxOrderByAggregateInput = {
    nome_curso?: SortOrder
  }

  export type CursoMinOrderByAggregateInput = {
    nome_curso?: SortOrder
  }

  export type DisponibilidadeListRelationFilter = {
    every?: DisponibilidadeWhereInput
    some?: DisponibilidadeWhereInput
    none?: DisponibilidadeWhereInput
  }

  export type Tempo_LectivoListRelationFilter = {
    every?: Tempo_LectivoWhereInput
    some?: Tempo_LectivoWhereInput
    none?: Tempo_LectivoWhereInput
  }

  export type DisponibilidadeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Tempo_LectivoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiaSemanaCountOrderByAggregateInput = {
    nome_dia?: SortOrder
  }

  export type DiaSemanaMaxOrderByAggregateInput = {
    nome_dia?: SortOrder
  }

  export type DiaSemanaMinOrderByAggregateInput = {
    nome_dia?: SortOrder
  }

  export type ProfDisciplinasListRelationFilter = {
    every?: ProfDisciplinasWhereInput
    some?: ProfDisciplinasWhereInput
    none?: ProfDisciplinasWhereInput
  }

  export type ProfDisciplinasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DisciplinaCountOrderByAggregateInput = {
    nome_disciplina?: SortOrder
  }

  export type DisciplinaMaxOrderByAggregateInput = {
    nome_disciplina?: SortOrder
  }

  export type DisciplinaMinOrderByAggregateInput = {
    nome_disciplina?: SortOrder
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

  export type ProfessorScalarRelationFilter = {
    is?: ProfessorWhereInput
    isNot?: ProfessorWhereInput
  }

  export type DiaSemanaScalarRelationFilter = {
    is?: DiaSemanaWhereInput
    isNot?: DiaSemanaWhereInput
  }

  export type PeriodoScalarRelationFilter = {
    is?: PeriodoWhereInput
    isNot?: PeriodoWhereInput
  }

  export type DisponibilidadeCountOrderByAggregateInput = {
    id_disponibilidade?: SortOrder
    professorId?: SortOrder
    nome_dia?: SortOrder
    nome_periodo?: SortOrder
    ordem?: SortOrder
  }

  export type DisponibilidadeAvgOrderByAggregateInput = {
    id_disponibilidade?: SortOrder
    professorId?: SortOrder
    ordem?: SortOrder
  }

  export type DisponibilidadeMaxOrderByAggregateInput = {
    id_disponibilidade?: SortOrder
    professorId?: SortOrder
    nome_dia?: SortOrder
    nome_periodo?: SortOrder
    ordem?: SortOrder
  }

  export type DisponibilidadeMinOrderByAggregateInput = {
    id_disponibilidade?: SortOrder
    professorId?: SortOrder
    nome_dia?: SortOrder
    nome_periodo?: SortOrder
    ordem?: SortOrder
  }

  export type DisponibilidadeSumOrderByAggregateInput = {
    id_disponibilidade?: SortOrder
    professorId?: SortOrder
    ordem?: SortOrder
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

  export type PeriodoCountOrderByAggregateInput = {
    nome_periodo?: SortOrder
  }

  export type PeriodoMaxOrderByAggregateInput = {
    nome_periodo?: SortOrder
  }

  export type PeriodoMinOrderByAggregateInput = {
    nome_periodo?: SortOrder
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

  export type ProfessorCountOrderByAggregateInput = {
    id_professor?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    updated_at?: SortOrder
  }

  export type ProfessorAvgOrderByAggregateInput = {
    id_professor?: SortOrder
  }

  export type ProfessorMaxOrderByAggregateInput = {
    id_professor?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    updated_at?: SortOrder
  }

  export type ProfessorMinOrderByAggregateInput = {
    id_professor?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    updated_at?: SortOrder
  }

  export type ProfessorSumOrderByAggregateInput = {
    id_professor?: SortOrder
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

  export type DisciplinaScalarRelationFilter = {
    is?: DisciplinaWhereInput
    isNot?: DisciplinaWhereInput
  }

  export type ProfDisciplinasProfessorIdNome_disciplinaCompoundUniqueInput = {
    professorId: number
    nome_disciplina: string
  }

  export type ProfDisciplinasCountOrderByAggregateInput = {
    professorId?: SortOrder
    nome_disciplina?: SortOrder
  }

  export type ProfDisciplinasAvgOrderByAggregateInput = {
    professorId?: SortOrder
  }

  export type ProfDisciplinasMaxOrderByAggregateInput = {
    professorId?: SortOrder
    nome_disciplina?: SortOrder
  }

  export type ProfDisciplinasMinOrderByAggregateInput = {
    professorId?: SortOrder
    nome_disciplina?: SortOrder
  }

  export type ProfDisciplinasSumOrderByAggregateInput = {
    professorId?: SortOrder
  }

  export type SalaCountOrderByAggregateInput = {
    nome_sala?: SortOrder
    capacidade?: SortOrder
  }

  export type SalaAvgOrderByAggregateInput = {
    capacidade?: SortOrder
  }

  export type SalaMaxOrderByAggregateInput = {
    nome_sala?: SortOrder
    capacidade?: SortOrder
  }

  export type SalaMinOrderByAggregateInput = {
    nome_sala?: SortOrder
    capacidade?: SortOrder
  }

  export type SalaSumOrderByAggregateInput = {
    capacidade?: SortOrder
  }

  export type TurmaScalarRelationFilter = {
    is?: TurmaWhereInput
    isNot?: TurmaWhereInput
  }

  export type SalaScalarRelationFilter = {
    is?: SalaWhereInput
    isNot?: SalaWhereInput
  }

  export type Tempo_LectivoCountOrderByAggregateInput = {
    id?: SortOrder
    professorId?: SortOrder
    nome_turma?: SortOrder
    nome_disciplina?: SortOrder
    nome_sala?: SortOrder
    nome_dia?: SortOrder
    nome_periodo?: SortOrder
    ordem?: SortOrder
  }

  export type Tempo_LectivoAvgOrderByAggregateInput = {
    id?: SortOrder
    professorId?: SortOrder
    ordem?: SortOrder
  }

  export type Tempo_LectivoMaxOrderByAggregateInput = {
    id?: SortOrder
    professorId?: SortOrder
    nome_turma?: SortOrder
    nome_disciplina?: SortOrder
    nome_sala?: SortOrder
    nome_dia?: SortOrder
    nome_periodo?: SortOrder
    ordem?: SortOrder
  }

  export type Tempo_LectivoMinOrderByAggregateInput = {
    id?: SortOrder
    professorId?: SortOrder
    nome_turma?: SortOrder
    nome_disciplina?: SortOrder
    nome_sala?: SortOrder
    nome_dia?: SortOrder
    nome_periodo?: SortOrder
    ordem?: SortOrder
  }

  export type Tempo_LectivoSumOrderByAggregateInput = {
    id?: SortOrder
    professorId?: SortOrder
    ordem?: SortOrder
  }

  export type CursoScalarRelationFilter = {
    is?: CursoWhereInput
    isNot?: CursoWhereInput
  }

  export type ClasseScalarRelationFilter = {
    is?: ClasseWhereInput
    isNot?: ClasseWhereInput
  }

  export type TurmaCountOrderByAggregateInput = {
    nome_turma?: SortOrder
    nome_curso?: SortOrder
    nome_classe?: SortOrder
  }

  export type TurmaMaxOrderByAggregateInput = {
    nome_turma?: SortOrder
    nome_curso?: SortOrder
    nome_classe?: SortOrder
  }

  export type TurmaMinOrderByAggregateInput = {
    nome_turma?: SortOrder
    nome_curso?: SortOrder
    nome_classe?: SortOrder
  }

  export type TurmaCreateNestedManyWithoutClasseInput = {
    create?: XOR<TurmaCreateWithoutClasseInput, TurmaUncheckedCreateWithoutClasseInput> | TurmaCreateWithoutClasseInput[] | TurmaUncheckedCreateWithoutClasseInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutClasseInput | TurmaCreateOrConnectWithoutClasseInput[]
    createMany?: TurmaCreateManyClasseInputEnvelope
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
  }

  export type TurmaUncheckedCreateNestedManyWithoutClasseInput = {
    create?: XOR<TurmaCreateWithoutClasseInput, TurmaUncheckedCreateWithoutClasseInput> | TurmaCreateWithoutClasseInput[] | TurmaUncheckedCreateWithoutClasseInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutClasseInput | TurmaCreateOrConnectWithoutClasseInput[]
    createMany?: TurmaCreateManyClasseInputEnvelope
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TurmaUpdateManyWithoutClasseNestedInput = {
    create?: XOR<TurmaCreateWithoutClasseInput, TurmaUncheckedCreateWithoutClasseInput> | TurmaCreateWithoutClasseInput[] | TurmaUncheckedCreateWithoutClasseInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutClasseInput | TurmaCreateOrConnectWithoutClasseInput[]
    upsert?: TurmaUpsertWithWhereUniqueWithoutClasseInput | TurmaUpsertWithWhereUniqueWithoutClasseInput[]
    createMany?: TurmaCreateManyClasseInputEnvelope
    set?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    disconnect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    delete?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    update?: TurmaUpdateWithWhereUniqueWithoutClasseInput | TurmaUpdateWithWhereUniqueWithoutClasseInput[]
    updateMany?: TurmaUpdateManyWithWhereWithoutClasseInput | TurmaUpdateManyWithWhereWithoutClasseInput[]
    deleteMany?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
  }

  export type TurmaUncheckedUpdateManyWithoutClasseNestedInput = {
    create?: XOR<TurmaCreateWithoutClasseInput, TurmaUncheckedCreateWithoutClasseInput> | TurmaCreateWithoutClasseInput[] | TurmaUncheckedCreateWithoutClasseInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutClasseInput | TurmaCreateOrConnectWithoutClasseInput[]
    upsert?: TurmaUpsertWithWhereUniqueWithoutClasseInput | TurmaUpsertWithWhereUniqueWithoutClasseInput[]
    createMany?: TurmaCreateManyClasseInputEnvelope
    set?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    disconnect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    delete?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    update?: TurmaUpdateWithWhereUniqueWithoutClasseInput | TurmaUpdateWithWhereUniqueWithoutClasseInput[]
    updateMany?: TurmaUpdateManyWithWhereWithoutClasseInput | TurmaUpdateManyWithWhereWithoutClasseInput[]
    deleteMany?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
  }

  export type TurmaCreateNestedManyWithoutCursoInput = {
    create?: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput> | TurmaCreateWithoutCursoInput[] | TurmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutCursoInput | TurmaCreateOrConnectWithoutCursoInput[]
    createMany?: TurmaCreateManyCursoInputEnvelope
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
  }

  export type TurmaUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput> | TurmaCreateWithoutCursoInput[] | TurmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutCursoInput | TurmaCreateOrConnectWithoutCursoInput[]
    createMany?: TurmaCreateManyCursoInputEnvelope
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
  }

  export type TurmaUpdateManyWithoutCursoNestedInput = {
    create?: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput> | TurmaCreateWithoutCursoInput[] | TurmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutCursoInput | TurmaCreateOrConnectWithoutCursoInput[]
    upsert?: TurmaUpsertWithWhereUniqueWithoutCursoInput | TurmaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: TurmaCreateManyCursoInputEnvelope
    set?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    disconnect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    delete?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    update?: TurmaUpdateWithWhereUniqueWithoutCursoInput | TurmaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: TurmaUpdateManyWithWhereWithoutCursoInput | TurmaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
  }

  export type TurmaUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput> | TurmaCreateWithoutCursoInput[] | TurmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutCursoInput | TurmaCreateOrConnectWithoutCursoInput[]
    upsert?: TurmaUpsertWithWhereUniqueWithoutCursoInput | TurmaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: TurmaCreateManyCursoInputEnvelope
    set?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    disconnect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    delete?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    update?: TurmaUpdateWithWhereUniqueWithoutCursoInput | TurmaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: TurmaUpdateManyWithWhereWithoutCursoInput | TurmaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
  }

  export type DisponibilidadeCreateNestedManyWithoutDiaInput = {
    create?: XOR<DisponibilidadeCreateWithoutDiaInput, DisponibilidadeUncheckedCreateWithoutDiaInput> | DisponibilidadeCreateWithoutDiaInput[] | DisponibilidadeUncheckedCreateWithoutDiaInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutDiaInput | DisponibilidadeCreateOrConnectWithoutDiaInput[]
    createMany?: DisponibilidadeCreateManyDiaInputEnvelope
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
  }

  export type Tempo_LectivoCreateNestedManyWithoutDiaInput = {
    create?: XOR<Tempo_LectivoCreateWithoutDiaInput, Tempo_LectivoUncheckedCreateWithoutDiaInput> | Tempo_LectivoCreateWithoutDiaInput[] | Tempo_LectivoUncheckedCreateWithoutDiaInput[]
    connectOrCreate?: Tempo_LectivoCreateOrConnectWithoutDiaInput | Tempo_LectivoCreateOrConnectWithoutDiaInput[]
    createMany?: Tempo_LectivoCreateManyDiaInputEnvelope
    connect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
  }

  export type DisponibilidadeUncheckedCreateNestedManyWithoutDiaInput = {
    create?: XOR<DisponibilidadeCreateWithoutDiaInput, DisponibilidadeUncheckedCreateWithoutDiaInput> | DisponibilidadeCreateWithoutDiaInput[] | DisponibilidadeUncheckedCreateWithoutDiaInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutDiaInput | DisponibilidadeCreateOrConnectWithoutDiaInput[]
    createMany?: DisponibilidadeCreateManyDiaInputEnvelope
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
  }

  export type Tempo_LectivoUncheckedCreateNestedManyWithoutDiaInput = {
    create?: XOR<Tempo_LectivoCreateWithoutDiaInput, Tempo_LectivoUncheckedCreateWithoutDiaInput> | Tempo_LectivoCreateWithoutDiaInput[] | Tempo_LectivoUncheckedCreateWithoutDiaInput[]
    connectOrCreate?: Tempo_LectivoCreateOrConnectWithoutDiaInput | Tempo_LectivoCreateOrConnectWithoutDiaInput[]
    createMany?: Tempo_LectivoCreateManyDiaInputEnvelope
    connect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
  }

  export type DisponibilidadeUpdateManyWithoutDiaNestedInput = {
    create?: XOR<DisponibilidadeCreateWithoutDiaInput, DisponibilidadeUncheckedCreateWithoutDiaInput> | DisponibilidadeCreateWithoutDiaInput[] | DisponibilidadeUncheckedCreateWithoutDiaInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutDiaInput | DisponibilidadeCreateOrConnectWithoutDiaInput[]
    upsert?: DisponibilidadeUpsertWithWhereUniqueWithoutDiaInput | DisponibilidadeUpsertWithWhereUniqueWithoutDiaInput[]
    createMany?: DisponibilidadeCreateManyDiaInputEnvelope
    set?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    disconnect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    delete?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    update?: DisponibilidadeUpdateWithWhereUniqueWithoutDiaInput | DisponibilidadeUpdateWithWhereUniqueWithoutDiaInput[]
    updateMany?: DisponibilidadeUpdateManyWithWhereWithoutDiaInput | DisponibilidadeUpdateManyWithWhereWithoutDiaInput[]
    deleteMany?: DisponibilidadeScalarWhereInput | DisponibilidadeScalarWhereInput[]
  }

  export type Tempo_LectivoUpdateManyWithoutDiaNestedInput = {
    create?: XOR<Tempo_LectivoCreateWithoutDiaInput, Tempo_LectivoUncheckedCreateWithoutDiaInput> | Tempo_LectivoCreateWithoutDiaInput[] | Tempo_LectivoUncheckedCreateWithoutDiaInput[]
    connectOrCreate?: Tempo_LectivoCreateOrConnectWithoutDiaInput | Tempo_LectivoCreateOrConnectWithoutDiaInput[]
    upsert?: Tempo_LectivoUpsertWithWhereUniqueWithoutDiaInput | Tempo_LectivoUpsertWithWhereUniqueWithoutDiaInput[]
    createMany?: Tempo_LectivoCreateManyDiaInputEnvelope
    set?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    disconnect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    delete?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    connect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    update?: Tempo_LectivoUpdateWithWhereUniqueWithoutDiaInput | Tempo_LectivoUpdateWithWhereUniqueWithoutDiaInput[]
    updateMany?: Tempo_LectivoUpdateManyWithWhereWithoutDiaInput | Tempo_LectivoUpdateManyWithWhereWithoutDiaInput[]
    deleteMany?: Tempo_LectivoScalarWhereInput | Tempo_LectivoScalarWhereInput[]
  }

  export type DisponibilidadeUncheckedUpdateManyWithoutDiaNestedInput = {
    create?: XOR<DisponibilidadeCreateWithoutDiaInput, DisponibilidadeUncheckedCreateWithoutDiaInput> | DisponibilidadeCreateWithoutDiaInput[] | DisponibilidadeUncheckedCreateWithoutDiaInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutDiaInput | DisponibilidadeCreateOrConnectWithoutDiaInput[]
    upsert?: DisponibilidadeUpsertWithWhereUniqueWithoutDiaInput | DisponibilidadeUpsertWithWhereUniqueWithoutDiaInput[]
    createMany?: DisponibilidadeCreateManyDiaInputEnvelope
    set?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    disconnect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    delete?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    update?: DisponibilidadeUpdateWithWhereUniqueWithoutDiaInput | DisponibilidadeUpdateWithWhereUniqueWithoutDiaInput[]
    updateMany?: DisponibilidadeUpdateManyWithWhereWithoutDiaInput | DisponibilidadeUpdateManyWithWhereWithoutDiaInput[]
    deleteMany?: DisponibilidadeScalarWhereInput | DisponibilidadeScalarWhereInput[]
  }

  export type Tempo_LectivoUncheckedUpdateManyWithoutDiaNestedInput = {
    create?: XOR<Tempo_LectivoCreateWithoutDiaInput, Tempo_LectivoUncheckedCreateWithoutDiaInput> | Tempo_LectivoCreateWithoutDiaInput[] | Tempo_LectivoUncheckedCreateWithoutDiaInput[]
    connectOrCreate?: Tempo_LectivoCreateOrConnectWithoutDiaInput | Tempo_LectivoCreateOrConnectWithoutDiaInput[]
    upsert?: Tempo_LectivoUpsertWithWhereUniqueWithoutDiaInput | Tempo_LectivoUpsertWithWhereUniqueWithoutDiaInput[]
    createMany?: Tempo_LectivoCreateManyDiaInputEnvelope
    set?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    disconnect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    delete?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    connect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    update?: Tempo_LectivoUpdateWithWhereUniqueWithoutDiaInput | Tempo_LectivoUpdateWithWhereUniqueWithoutDiaInput[]
    updateMany?: Tempo_LectivoUpdateManyWithWhereWithoutDiaInput | Tempo_LectivoUpdateManyWithWhereWithoutDiaInput[]
    deleteMany?: Tempo_LectivoScalarWhereInput | Tempo_LectivoScalarWhereInput[]
  }

  export type ProfDisciplinasCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<ProfDisciplinasCreateWithoutDisciplinaInput, ProfDisciplinasUncheckedCreateWithoutDisciplinaInput> | ProfDisciplinasCreateWithoutDisciplinaInput[] | ProfDisciplinasUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: ProfDisciplinasCreateOrConnectWithoutDisciplinaInput | ProfDisciplinasCreateOrConnectWithoutDisciplinaInput[]
    createMany?: ProfDisciplinasCreateManyDisciplinaInputEnvelope
    connect?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
  }

  export type Tempo_LectivoCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<Tempo_LectivoCreateWithoutDisciplinaInput, Tempo_LectivoUncheckedCreateWithoutDisciplinaInput> | Tempo_LectivoCreateWithoutDisciplinaInput[] | Tempo_LectivoUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: Tempo_LectivoCreateOrConnectWithoutDisciplinaInput | Tempo_LectivoCreateOrConnectWithoutDisciplinaInput[]
    createMany?: Tempo_LectivoCreateManyDisciplinaInputEnvelope
    connect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
  }

  export type ProfDisciplinasUncheckedCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<ProfDisciplinasCreateWithoutDisciplinaInput, ProfDisciplinasUncheckedCreateWithoutDisciplinaInput> | ProfDisciplinasCreateWithoutDisciplinaInput[] | ProfDisciplinasUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: ProfDisciplinasCreateOrConnectWithoutDisciplinaInput | ProfDisciplinasCreateOrConnectWithoutDisciplinaInput[]
    createMany?: ProfDisciplinasCreateManyDisciplinaInputEnvelope
    connect?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
  }

  export type Tempo_LectivoUncheckedCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<Tempo_LectivoCreateWithoutDisciplinaInput, Tempo_LectivoUncheckedCreateWithoutDisciplinaInput> | Tempo_LectivoCreateWithoutDisciplinaInput[] | Tempo_LectivoUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: Tempo_LectivoCreateOrConnectWithoutDisciplinaInput | Tempo_LectivoCreateOrConnectWithoutDisciplinaInput[]
    createMany?: Tempo_LectivoCreateManyDisciplinaInputEnvelope
    connect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
  }

  export type ProfDisciplinasUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<ProfDisciplinasCreateWithoutDisciplinaInput, ProfDisciplinasUncheckedCreateWithoutDisciplinaInput> | ProfDisciplinasCreateWithoutDisciplinaInput[] | ProfDisciplinasUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: ProfDisciplinasCreateOrConnectWithoutDisciplinaInput | ProfDisciplinasCreateOrConnectWithoutDisciplinaInput[]
    upsert?: ProfDisciplinasUpsertWithWhereUniqueWithoutDisciplinaInput | ProfDisciplinasUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: ProfDisciplinasCreateManyDisciplinaInputEnvelope
    set?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    disconnect?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    delete?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    connect?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    update?: ProfDisciplinasUpdateWithWhereUniqueWithoutDisciplinaInput | ProfDisciplinasUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: ProfDisciplinasUpdateManyWithWhereWithoutDisciplinaInput | ProfDisciplinasUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: ProfDisciplinasScalarWhereInput | ProfDisciplinasScalarWhereInput[]
  }

  export type Tempo_LectivoUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<Tempo_LectivoCreateWithoutDisciplinaInput, Tempo_LectivoUncheckedCreateWithoutDisciplinaInput> | Tempo_LectivoCreateWithoutDisciplinaInput[] | Tempo_LectivoUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: Tempo_LectivoCreateOrConnectWithoutDisciplinaInput | Tempo_LectivoCreateOrConnectWithoutDisciplinaInput[]
    upsert?: Tempo_LectivoUpsertWithWhereUniqueWithoutDisciplinaInput | Tempo_LectivoUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: Tempo_LectivoCreateManyDisciplinaInputEnvelope
    set?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    disconnect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    delete?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    connect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    update?: Tempo_LectivoUpdateWithWhereUniqueWithoutDisciplinaInput | Tempo_LectivoUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: Tempo_LectivoUpdateManyWithWhereWithoutDisciplinaInput | Tempo_LectivoUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: Tempo_LectivoScalarWhereInput | Tempo_LectivoScalarWhereInput[]
  }

  export type ProfDisciplinasUncheckedUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<ProfDisciplinasCreateWithoutDisciplinaInput, ProfDisciplinasUncheckedCreateWithoutDisciplinaInput> | ProfDisciplinasCreateWithoutDisciplinaInput[] | ProfDisciplinasUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: ProfDisciplinasCreateOrConnectWithoutDisciplinaInput | ProfDisciplinasCreateOrConnectWithoutDisciplinaInput[]
    upsert?: ProfDisciplinasUpsertWithWhereUniqueWithoutDisciplinaInput | ProfDisciplinasUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: ProfDisciplinasCreateManyDisciplinaInputEnvelope
    set?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    disconnect?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    delete?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    connect?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    update?: ProfDisciplinasUpdateWithWhereUniqueWithoutDisciplinaInput | ProfDisciplinasUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: ProfDisciplinasUpdateManyWithWhereWithoutDisciplinaInput | ProfDisciplinasUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: ProfDisciplinasScalarWhereInput | ProfDisciplinasScalarWhereInput[]
  }

  export type Tempo_LectivoUncheckedUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<Tempo_LectivoCreateWithoutDisciplinaInput, Tempo_LectivoUncheckedCreateWithoutDisciplinaInput> | Tempo_LectivoCreateWithoutDisciplinaInput[] | Tempo_LectivoUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: Tempo_LectivoCreateOrConnectWithoutDisciplinaInput | Tempo_LectivoCreateOrConnectWithoutDisciplinaInput[]
    upsert?: Tempo_LectivoUpsertWithWhereUniqueWithoutDisciplinaInput | Tempo_LectivoUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: Tempo_LectivoCreateManyDisciplinaInputEnvelope
    set?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    disconnect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    delete?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    connect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    update?: Tempo_LectivoUpdateWithWhereUniqueWithoutDisciplinaInput | Tempo_LectivoUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: Tempo_LectivoUpdateManyWithWhereWithoutDisciplinaInput | Tempo_LectivoUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: Tempo_LectivoScalarWhereInput | Tempo_LectivoScalarWhereInput[]
  }

  export type ProfessorCreateNestedOneWithoutDisponibilidadesInput = {
    create?: XOR<ProfessorCreateWithoutDisponibilidadesInput, ProfessorUncheckedCreateWithoutDisponibilidadesInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutDisponibilidadesInput
    connect?: ProfessorWhereUniqueInput
  }

  export type DiaSemanaCreateNestedOneWithoutDisponibilidadesInput = {
    create?: XOR<DiaSemanaCreateWithoutDisponibilidadesInput, DiaSemanaUncheckedCreateWithoutDisponibilidadesInput>
    connectOrCreate?: DiaSemanaCreateOrConnectWithoutDisponibilidadesInput
    connect?: DiaSemanaWhereUniqueInput
  }

  export type PeriodoCreateNestedOneWithoutDisponibilidadesInput = {
    create?: XOR<PeriodoCreateWithoutDisponibilidadesInput, PeriodoUncheckedCreateWithoutDisponibilidadesInput>
    connectOrCreate?: PeriodoCreateOrConnectWithoutDisponibilidadesInput
    connect?: PeriodoWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfessorUpdateOneRequiredWithoutDisponibilidadesNestedInput = {
    create?: XOR<ProfessorCreateWithoutDisponibilidadesInput, ProfessorUncheckedCreateWithoutDisponibilidadesInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutDisponibilidadesInput
    upsert?: ProfessorUpsertWithoutDisponibilidadesInput
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutDisponibilidadesInput, ProfessorUpdateWithoutDisponibilidadesInput>, ProfessorUncheckedUpdateWithoutDisponibilidadesInput>
  }

  export type DiaSemanaUpdateOneRequiredWithoutDisponibilidadesNestedInput = {
    create?: XOR<DiaSemanaCreateWithoutDisponibilidadesInput, DiaSemanaUncheckedCreateWithoutDisponibilidadesInput>
    connectOrCreate?: DiaSemanaCreateOrConnectWithoutDisponibilidadesInput
    upsert?: DiaSemanaUpsertWithoutDisponibilidadesInput
    connect?: DiaSemanaWhereUniqueInput
    update?: XOR<XOR<DiaSemanaUpdateToOneWithWhereWithoutDisponibilidadesInput, DiaSemanaUpdateWithoutDisponibilidadesInput>, DiaSemanaUncheckedUpdateWithoutDisponibilidadesInput>
  }

  export type PeriodoUpdateOneRequiredWithoutDisponibilidadesNestedInput = {
    create?: XOR<PeriodoCreateWithoutDisponibilidadesInput, PeriodoUncheckedCreateWithoutDisponibilidadesInput>
    connectOrCreate?: PeriodoCreateOrConnectWithoutDisponibilidadesInput
    upsert?: PeriodoUpsertWithoutDisponibilidadesInput
    connect?: PeriodoWhereUniqueInput
    update?: XOR<XOR<PeriodoUpdateToOneWithWhereWithoutDisponibilidadesInput, PeriodoUpdateWithoutDisponibilidadesInput>, PeriodoUncheckedUpdateWithoutDisponibilidadesInput>
  }

  export type DisponibilidadeCreateNestedManyWithoutPeriodoInput = {
    create?: XOR<DisponibilidadeCreateWithoutPeriodoInput, DisponibilidadeUncheckedCreateWithoutPeriodoInput> | DisponibilidadeCreateWithoutPeriodoInput[] | DisponibilidadeUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutPeriodoInput | DisponibilidadeCreateOrConnectWithoutPeriodoInput[]
    createMany?: DisponibilidadeCreateManyPeriodoInputEnvelope
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
  }

  export type Tempo_LectivoCreateNestedManyWithoutPeriodoInput = {
    create?: XOR<Tempo_LectivoCreateWithoutPeriodoInput, Tempo_LectivoUncheckedCreateWithoutPeriodoInput> | Tempo_LectivoCreateWithoutPeriodoInput[] | Tempo_LectivoUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: Tempo_LectivoCreateOrConnectWithoutPeriodoInput | Tempo_LectivoCreateOrConnectWithoutPeriodoInput[]
    createMany?: Tempo_LectivoCreateManyPeriodoInputEnvelope
    connect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
  }

  export type DisponibilidadeUncheckedCreateNestedManyWithoutPeriodoInput = {
    create?: XOR<DisponibilidadeCreateWithoutPeriodoInput, DisponibilidadeUncheckedCreateWithoutPeriodoInput> | DisponibilidadeCreateWithoutPeriodoInput[] | DisponibilidadeUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutPeriodoInput | DisponibilidadeCreateOrConnectWithoutPeriodoInput[]
    createMany?: DisponibilidadeCreateManyPeriodoInputEnvelope
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
  }

  export type Tempo_LectivoUncheckedCreateNestedManyWithoutPeriodoInput = {
    create?: XOR<Tempo_LectivoCreateWithoutPeriodoInput, Tempo_LectivoUncheckedCreateWithoutPeriodoInput> | Tempo_LectivoCreateWithoutPeriodoInput[] | Tempo_LectivoUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: Tempo_LectivoCreateOrConnectWithoutPeriodoInput | Tempo_LectivoCreateOrConnectWithoutPeriodoInput[]
    createMany?: Tempo_LectivoCreateManyPeriodoInputEnvelope
    connect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
  }

  export type DisponibilidadeUpdateManyWithoutPeriodoNestedInput = {
    create?: XOR<DisponibilidadeCreateWithoutPeriodoInput, DisponibilidadeUncheckedCreateWithoutPeriodoInput> | DisponibilidadeCreateWithoutPeriodoInput[] | DisponibilidadeUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutPeriodoInput | DisponibilidadeCreateOrConnectWithoutPeriodoInput[]
    upsert?: DisponibilidadeUpsertWithWhereUniqueWithoutPeriodoInput | DisponibilidadeUpsertWithWhereUniqueWithoutPeriodoInput[]
    createMany?: DisponibilidadeCreateManyPeriodoInputEnvelope
    set?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    disconnect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    delete?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    update?: DisponibilidadeUpdateWithWhereUniqueWithoutPeriodoInput | DisponibilidadeUpdateWithWhereUniqueWithoutPeriodoInput[]
    updateMany?: DisponibilidadeUpdateManyWithWhereWithoutPeriodoInput | DisponibilidadeUpdateManyWithWhereWithoutPeriodoInput[]
    deleteMany?: DisponibilidadeScalarWhereInput | DisponibilidadeScalarWhereInput[]
  }

  export type Tempo_LectivoUpdateManyWithoutPeriodoNestedInput = {
    create?: XOR<Tempo_LectivoCreateWithoutPeriodoInput, Tempo_LectivoUncheckedCreateWithoutPeriodoInput> | Tempo_LectivoCreateWithoutPeriodoInput[] | Tempo_LectivoUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: Tempo_LectivoCreateOrConnectWithoutPeriodoInput | Tempo_LectivoCreateOrConnectWithoutPeriodoInput[]
    upsert?: Tempo_LectivoUpsertWithWhereUniqueWithoutPeriodoInput | Tempo_LectivoUpsertWithWhereUniqueWithoutPeriodoInput[]
    createMany?: Tempo_LectivoCreateManyPeriodoInputEnvelope
    set?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    disconnect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    delete?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    connect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    update?: Tempo_LectivoUpdateWithWhereUniqueWithoutPeriodoInput | Tempo_LectivoUpdateWithWhereUniqueWithoutPeriodoInput[]
    updateMany?: Tempo_LectivoUpdateManyWithWhereWithoutPeriodoInput | Tempo_LectivoUpdateManyWithWhereWithoutPeriodoInput[]
    deleteMany?: Tempo_LectivoScalarWhereInput | Tempo_LectivoScalarWhereInput[]
  }

  export type DisponibilidadeUncheckedUpdateManyWithoutPeriodoNestedInput = {
    create?: XOR<DisponibilidadeCreateWithoutPeriodoInput, DisponibilidadeUncheckedCreateWithoutPeriodoInput> | DisponibilidadeCreateWithoutPeriodoInput[] | DisponibilidadeUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutPeriodoInput | DisponibilidadeCreateOrConnectWithoutPeriodoInput[]
    upsert?: DisponibilidadeUpsertWithWhereUniqueWithoutPeriodoInput | DisponibilidadeUpsertWithWhereUniqueWithoutPeriodoInput[]
    createMany?: DisponibilidadeCreateManyPeriodoInputEnvelope
    set?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    disconnect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    delete?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    update?: DisponibilidadeUpdateWithWhereUniqueWithoutPeriodoInput | DisponibilidadeUpdateWithWhereUniqueWithoutPeriodoInput[]
    updateMany?: DisponibilidadeUpdateManyWithWhereWithoutPeriodoInput | DisponibilidadeUpdateManyWithWhereWithoutPeriodoInput[]
    deleteMany?: DisponibilidadeScalarWhereInput | DisponibilidadeScalarWhereInput[]
  }

  export type Tempo_LectivoUncheckedUpdateManyWithoutPeriodoNestedInput = {
    create?: XOR<Tempo_LectivoCreateWithoutPeriodoInput, Tempo_LectivoUncheckedCreateWithoutPeriodoInput> | Tempo_LectivoCreateWithoutPeriodoInput[] | Tempo_LectivoUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: Tempo_LectivoCreateOrConnectWithoutPeriodoInput | Tempo_LectivoCreateOrConnectWithoutPeriodoInput[]
    upsert?: Tempo_LectivoUpsertWithWhereUniqueWithoutPeriodoInput | Tempo_LectivoUpsertWithWhereUniqueWithoutPeriodoInput[]
    createMany?: Tempo_LectivoCreateManyPeriodoInputEnvelope
    set?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    disconnect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    delete?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    connect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    update?: Tempo_LectivoUpdateWithWhereUniqueWithoutPeriodoInput | Tempo_LectivoUpdateWithWhereUniqueWithoutPeriodoInput[]
    updateMany?: Tempo_LectivoUpdateManyWithWhereWithoutPeriodoInput | Tempo_LectivoUpdateManyWithWhereWithoutPeriodoInput[]
    deleteMany?: Tempo_LectivoScalarWhereInput | Tempo_LectivoScalarWhereInput[]
  }

  export type ProfDisciplinasCreateNestedManyWithoutProfessorInput = {
    create?: XOR<ProfDisciplinasCreateWithoutProfessorInput, ProfDisciplinasUncheckedCreateWithoutProfessorInput> | ProfDisciplinasCreateWithoutProfessorInput[] | ProfDisciplinasUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: ProfDisciplinasCreateOrConnectWithoutProfessorInput | ProfDisciplinasCreateOrConnectWithoutProfessorInput[]
    createMany?: ProfDisciplinasCreateManyProfessorInputEnvelope
    connect?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
  }

  export type DisponibilidadeCreateNestedManyWithoutProfessorInput = {
    create?: XOR<DisponibilidadeCreateWithoutProfessorInput, DisponibilidadeUncheckedCreateWithoutProfessorInput> | DisponibilidadeCreateWithoutProfessorInput[] | DisponibilidadeUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutProfessorInput | DisponibilidadeCreateOrConnectWithoutProfessorInput[]
    createMany?: DisponibilidadeCreateManyProfessorInputEnvelope
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
  }

  export type Tempo_LectivoCreateNestedManyWithoutProfessorInput = {
    create?: XOR<Tempo_LectivoCreateWithoutProfessorInput, Tempo_LectivoUncheckedCreateWithoutProfessorInput> | Tempo_LectivoCreateWithoutProfessorInput[] | Tempo_LectivoUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: Tempo_LectivoCreateOrConnectWithoutProfessorInput | Tempo_LectivoCreateOrConnectWithoutProfessorInput[]
    createMany?: Tempo_LectivoCreateManyProfessorInputEnvelope
    connect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
  }

  export type ProfDisciplinasUncheckedCreateNestedManyWithoutProfessorInput = {
    create?: XOR<ProfDisciplinasCreateWithoutProfessorInput, ProfDisciplinasUncheckedCreateWithoutProfessorInput> | ProfDisciplinasCreateWithoutProfessorInput[] | ProfDisciplinasUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: ProfDisciplinasCreateOrConnectWithoutProfessorInput | ProfDisciplinasCreateOrConnectWithoutProfessorInput[]
    createMany?: ProfDisciplinasCreateManyProfessorInputEnvelope
    connect?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
  }

  export type DisponibilidadeUncheckedCreateNestedManyWithoutProfessorInput = {
    create?: XOR<DisponibilidadeCreateWithoutProfessorInput, DisponibilidadeUncheckedCreateWithoutProfessorInput> | DisponibilidadeCreateWithoutProfessorInput[] | DisponibilidadeUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutProfessorInput | DisponibilidadeCreateOrConnectWithoutProfessorInput[]
    createMany?: DisponibilidadeCreateManyProfessorInputEnvelope
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
  }

  export type Tempo_LectivoUncheckedCreateNestedManyWithoutProfessorInput = {
    create?: XOR<Tempo_LectivoCreateWithoutProfessorInput, Tempo_LectivoUncheckedCreateWithoutProfessorInput> | Tempo_LectivoCreateWithoutProfessorInput[] | Tempo_LectivoUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: Tempo_LectivoCreateOrConnectWithoutProfessorInput | Tempo_LectivoCreateOrConnectWithoutProfessorInput[]
    createMany?: Tempo_LectivoCreateManyProfessorInputEnvelope
    connect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProfDisciplinasUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<ProfDisciplinasCreateWithoutProfessorInput, ProfDisciplinasUncheckedCreateWithoutProfessorInput> | ProfDisciplinasCreateWithoutProfessorInput[] | ProfDisciplinasUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: ProfDisciplinasCreateOrConnectWithoutProfessorInput | ProfDisciplinasCreateOrConnectWithoutProfessorInput[]
    upsert?: ProfDisciplinasUpsertWithWhereUniqueWithoutProfessorInput | ProfDisciplinasUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: ProfDisciplinasCreateManyProfessorInputEnvelope
    set?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    disconnect?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    delete?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    connect?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    update?: ProfDisciplinasUpdateWithWhereUniqueWithoutProfessorInput | ProfDisciplinasUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: ProfDisciplinasUpdateManyWithWhereWithoutProfessorInput | ProfDisciplinasUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: ProfDisciplinasScalarWhereInput | ProfDisciplinasScalarWhereInput[]
  }

  export type DisponibilidadeUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<DisponibilidadeCreateWithoutProfessorInput, DisponibilidadeUncheckedCreateWithoutProfessorInput> | DisponibilidadeCreateWithoutProfessorInput[] | DisponibilidadeUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutProfessorInput | DisponibilidadeCreateOrConnectWithoutProfessorInput[]
    upsert?: DisponibilidadeUpsertWithWhereUniqueWithoutProfessorInput | DisponibilidadeUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: DisponibilidadeCreateManyProfessorInputEnvelope
    set?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    disconnect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    delete?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    update?: DisponibilidadeUpdateWithWhereUniqueWithoutProfessorInput | DisponibilidadeUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: DisponibilidadeUpdateManyWithWhereWithoutProfessorInput | DisponibilidadeUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: DisponibilidadeScalarWhereInput | DisponibilidadeScalarWhereInput[]
  }

  export type Tempo_LectivoUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<Tempo_LectivoCreateWithoutProfessorInput, Tempo_LectivoUncheckedCreateWithoutProfessorInput> | Tempo_LectivoCreateWithoutProfessorInput[] | Tempo_LectivoUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: Tempo_LectivoCreateOrConnectWithoutProfessorInput | Tempo_LectivoCreateOrConnectWithoutProfessorInput[]
    upsert?: Tempo_LectivoUpsertWithWhereUniqueWithoutProfessorInput | Tempo_LectivoUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: Tempo_LectivoCreateManyProfessorInputEnvelope
    set?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    disconnect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    delete?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    connect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    update?: Tempo_LectivoUpdateWithWhereUniqueWithoutProfessorInput | Tempo_LectivoUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: Tempo_LectivoUpdateManyWithWhereWithoutProfessorInput | Tempo_LectivoUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: Tempo_LectivoScalarWhereInput | Tempo_LectivoScalarWhereInput[]
  }

  export type ProfDisciplinasUncheckedUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<ProfDisciplinasCreateWithoutProfessorInput, ProfDisciplinasUncheckedCreateWithoutProfessorInput> | ProfDisciplinasCreateWithoutProfessorInput[] | ProfDisciplinasUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: ProfDisciplinasCreateOrConnectWithoutProfessorInput | ProfDisciplinasCreateOrConnectWithoutProfessorInput[]
    upsert?: ProfDisciplinasUpsertWithWhereUniqueWithoutProfessorInput | ProfDisciplinasUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: ProfDisciplinasCreateManyProfessorInputEnvelope
    set?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    disconnect?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    delete?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    connect?: ProfDisciplinasWhereUniqueInput | ProfDisciplinasWhereUniqueInput[]
    update?: ProfDisciplinasUpdateWithWhereUniqueWithoutProfessorInput | ProfDisciplinasUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: ProfDisciplinasUpdateManyWithWhereWithoutProfessorInput | ProfDisciplinasUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: ProfDisciplinasScalarWhereInput | ProfDisciplinasScalarWhereInput[]
  }

  export type DisponibilidadeUncheckedUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<DisponibilidadeCreateWithoutProfessorInput, DisponibilidadeUncheckedCreateWithoutProfessorInput> | DisponibilidadeCreateWithoutProfessorInput[] | DisponibilidadeUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutProfessorInput | DisponibilidadeCreateOrConnectWithoutProfessorInput[]
    upsert?: DisponibilidadeUpsertWithWhereUniqueWithoutProfessorInput | DisponibilidadeUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: DisponibilidadeCreateManyProfessorInputEnvelope
    set?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    disconnect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    delete?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    update?: DisponibilidadeUpdateWithWhereUniqueWithoutProfessorInput | DisponibilidadeUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: DisponibilidadeUpdateManyWithWhereWithoutProfessorInput | DisponibilidadeUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: DisponibilidadeScalarWhereInput | DisponibilidadeScalarWhereInput[]
  }

  export type Tempo_LectivoUncheckedUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<Tempo_LectivoCreateWithoutProfessorInput, Tempo_LectivoUncheckedCreateWithoutProfessorInput> | Tempo_LectivoCreateWithoutProfessorInput[] | Tempo_LectivoUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: Tempo_LectivoCreateOrConnectWithoutProfessorInput | Tempo_LectivoCreateOrConnectWithoutProfessorInput[]
    upsert?: Tempo_LectivoUpsertWithWhereUniqueWithoutProfessorInput | Tempo_LectivoUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: Tempo_LectivoCreateManyProfessorInputEnvelope
    set?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    disconnect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    delete?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    connect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    update?: Tempo_LectivoUpdateWithWhereUniqueWithoutProfessorInput | Tempo_LectivoUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: Tempo_LectivoUpdateManyWithWhereWithoutProfessorInput | Tempo_LectivoUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: Tempo_LectivoScalarWhereInput | Tempo_LectivoScalarWhereInput[]
  }

  export type ProfessorCreateNestedOneWithoutProfDisciplinasInput = {
    create?: XOR<ProfessorCreateWithoutProfDisciplinasInput, ProfessorUncheckedCreateWithoutProfDisciplinasInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutProfDisciplinasInput
    connect?: ProfessorWhereUniqueInput
  }

  export type DisciplinaCreateNestedOneWithoutProfDisciplinasInput = {
    create?: XOR<DisciplinaCreateWithoutProfDisciplinasInput, DisciplinaUncheckedCreateWithoutProfDisciplinasInput>
    connectOrCreate?: DisciplinaCreateOrConnectWithoutProfDisciplinasInput
    connect?: DisciplinaWhereUniqueInput
  }

  export type ProfessorUpdateOneRequiredWithoutProfDisciplinasNestedInput = {
    create?: XOR<ProfessorCreateWithoutProfDisciplinasInput, ProfessorUncheckedCreateWithoutProfDisciplinasInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutProfDisciplinasInput
    upsert?: ProfessorUpsertWithoutProfDisciplinasInput
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutProfDisciplinasInput, ProfessorUpdateWithoutProfDisciplinasInput>, ProfessorUncheckedUpdateWithoutProfDisciplinasInput>
  }

  export type DisciplinaUpdateOneRequiredWithoutProfDisciplinasNestedInput = {
    create?: XOR<DisciplinaCreateWithoutProfDisciplinasInput, DisciplinaUncheckedCreateWithoutProfDisciplinasInput>
    connectOrCreate?: DisciplinaCreateOrConnectWithoutProfDisciplinasInput
    upsert?: DisciplinaUpsertWithoutProfDisciplinasInput
    connect?: DisciplinaWhereUniqueInput
    update?: XOR<XOR<DisciplinaUpdateToOneWithWhereWithoutProfDisciplinasInput, DisciplinaUpdateWithoutProfDisciplinasInput>, DisciplinaUncheckedUpdateWithoutProfDisciplinasInput>
  }

  export type Tempo_LectivoCreateNestedManyWithoutSalaInput = {
    create?: XOR<Tempo_LectivoCreateWithoutSalaInput, Tempo_LectivoUncheckedCreateWithoutSalaInput> | Tempo_LectivoCreateWithoutSalaInput[] | Tempo_LectivoUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: Tempo_LectivoCreateOrConnectWithoutSalaInput | Tempo_LectivoCreateOrConnectWithoutSalaInput[]
    createMany?: Tempo_LectivoCreateManySalaInputEnvelope
    connect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
  }

  export type Tempo_LectivoUncheckedCreateNestedManyWithoutSalaInput = {
    create?: XOR<Tempo_LectivoCreateWithoutSalaInput, Tempo_LectivoUncheckedCreateWithoutSalaInput> | Tempo_LectivoCreateWithoutSalaInput[] | Tempo_LectivoUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: Tempo_LectivoCreateOrConnectWithoutSalaInput | Tempo_LectivoCreateOrConnectWithoutSalaInput[]
    createMany?: Tempo_LectivoCreateManySalaInputEnvelope
    connect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
  }

  export type Tempo_LectivoUpdateManyWithoutSalaNestedInput = {
    create?: XOR<Tempo_LectivoCreateWithoutSalaInput, Tempo_LectivoUncheckedCreateWithoutSalaInput> | Tempo_LectivoCreateWithoutSalaInput[] | Tempo_LectivoUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: Tempo_LectivoCreateOrConnectWithoutSalaInput | Tempo_LectivoCreateOrConnectWithoutSalaInput[]
    upsert?: Tempo_LectivoUpsertWithWhereUniqueWithoutSalaInput | Tempo_LectivoUpsertWithWhereUniqueWithoutSalaInput[]
    createMany?: Tempo_LectivoCreateManySalaInputEnvelope
    set?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    disconnect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    delete?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    connect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    update?: Tempo_LectivoUpdateWithWhereUniqueWithoutSalaInput | Tempo_LectivoUpdateWithWhereUniqueWithoutSalaInput[]
    updateMany?: Tempo_LectivoUpdateManyWithWhereWithoutSalaInput | Tempo_LectivoUpdateManyWithWhereWithoutSalaInput[]
    deleteMany?: Tempo_LectivoScalarWhereInput | Tempo_LectivoScalarWhereInput[]
  }

  export type Tempo_LectivoUncheckedUpdateManyWithoutSalaNestedInput = {
    create?: XOR<Tempo_LectivoCreateWithoutSalaInput, Tempo_LectivoUncheckedCreateWithoutSalaInput> | Tempo_LectivoCreateWithoutSalaInput[] | Tempo_LectivoUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: Tempo_LectivoCreateOrConnectWithoutSalaInput | Tempo_LectivoCreateOrConnectWithoutSalaInput[]
    upsert?: Tempo_LectivoUpsertWithWhereUniqueWithoutSalaInput | Tempo_LectivoUpsertWithWhereUniqueWithoutSalaInput[]
    createMany?: Tempo_LectivoCreateManySalaInputEnvelope
    set?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    disconnect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    delete?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    connect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    update?: Tempo_LectivoUpdateWithWhereUniqueWithoutSalaInput | Tempo_LectivoUpdateWithWhereUniqueWithoutSalaInput[]
    updateMany?: Tempo_LectivoUpdateManyWithWhereWithoutSalaInput | Tempo_LectivoUpdateManyWithWhereWithoutSalaInput[]
    deleteMany?: Tempo_LectivoScalarWhereInput | Tempo_LectivoScalarWhereInput[]
  }

  export type ProfessorCreateNestedOneWithoutTempo_lectivoInput = {
    create?: XOR<ProfessorCreateWithoutTempo_lectivoInput, ProfessorUncheckedCreateWithoutTempo_lectivoInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutTempo_lectivoInput
    connect?: ProfessorWhereUniqueInput
  }

  export type TurmaCreateNestedOneWithoutTempo_lectivoInput = {
    create?: XOR<TurmaCreateWithoutTempo_lectivoInput, TurmaUncheckedCreateWithoutTempo_lectivoInput>
    connectOrCreate?: TurmaCreateOrConnectWithoutTempo_lectivoInput
    connect?: TurmaWhereUniqueInput
  }

  export type DisciplinaCreateNestedOneWithoutTempo_lectivoInput = {
    create?: XOR<DisciplinaCreateWithoutTempo_lectivoInput, DisciplinaUncheckedCreateWithoutTempo_lectivoInput>
    connectOrCreate?: DisciplinaCreateOrConnectWithoutTempo_lectivoInput
    connect?: DisciplinaWhereUniqueInput
  }

  export type SalaCreateNestedOneWithoutTempo_lectivoInput = {
    create?: XOR<SalaCreateWithoutTempo_lectivoInput, SalaUncheckedCreateWithoutTempo_lectivoInput>
    connectOrCreate?: SalaCreateOrConnectWithoutTempo_lectivoInput
    connect?: SalaWhereUniqueInput
  }

  export type DiaSemanaCreateNestedOneWithoutTempo_lectivoInput = {
    create?: XOR<DiaSemanaCreateWithoutTempo_lectivoInput, DiaSemanaUncheckedCreateWithoutTempo_lectivoInput>
    connectOrCreate?: DiaSemanaCreateOrConnectWithoutTempo_lectivoInput
    connect?: DiaSemanaWhereUniqueInput
  }

  export type PeriodoCreateNestedOneWithoutTempo_lectivoInput = {
    create?: XOR<PeriodoCreateWithoutTempo_lectivoInput, PeriodoUncheckedCreateWithoutTempo_lectivoInput>
    connectOrCreate?: PeriodoCreateOrConnectWithoutTempo_lectivoInput
    connect?: PeriodoWhereUniqueInput
  }

  export type ProfessorUpdateOneRequiredWithoutTempo_lectivoNestedInput = {
    create?: XOR<ProfessorCreateWithoutTempo_lectivoInput, ProfessorUncheckedCreateWithoutTempo_lectivoInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutTempo_lectivoInput
    upsert?: ProfessorUpsertWithoutTempo_lectivoInput
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutTempo_lectivoInput, ProfessorUpdateWithoutTempo_lectivoInput>, ProfessorUncheckedUpdateWithoutTempo_lectivoInput>
  }

  export type TurmaUpdateOneRequiredWithoutTempo_lectivoNestedInput = {
    create?: XOR<TurmaCreateWithoutTempo_lectivoInput, TurmaUncheckedCreateWithoutTempo_lectivoInput>
    connectOrCreate?: TurmaCreateOrConnectWithoutTempo_lectivoInput
    upsert?: TurmaUpsertWithoutTempo_lectivoInput
    connect?: TurmaWhereUniqueInput
    update?: XOR<XOR<TurmaUpdateToOneWithWhereWithoutTempo_lectivoInput, TurmaUpdateWithoutTempo_lectivoInput>, TurmaUncheckedUpdateWithoutTempo_lectivoInput>
  }

  export type DisciplinaUpdateOneRequiredWithoutTempo_lectivoNestedInput = {
    create?: XOR<DisciplinaCreateWithoutTempo_lectivoInput, DisciplinaUncheckedCreateWithoutTempo_lectivoInput>
    connectOrCreate?: DisciplinaCreateOrConnectWithoutTempo_lectivoInput
    upsert?: DisciplinaUpsertWithoutTempo_lectivoInput
    connect?: DisciplinaWhereUniqueInput
    update?: XOR<XOR<DisciplinaUpdateToOneWithWhereWithoutTempo_lectivoInput, DisciplinaUpdateWithoutTempo_lectivoInput>, DisciplinaUncheckedUpdateWithoutTempo_lectivoInput>
  }

  export type SalaUpdateOneRequiredWithoutTempo_lectivoNestedInput = {
    create?: XOR<SalaCreateWithoutTempo_lectivoInput, SalaUncheckedCreateWithoutTempo_lectivoInput>
    connectOrCreate?: SalaCreateOrConnectWithoutTempo_lectivoInput
    upsert?: SalaUpsertWithoutTempo_lectivoInput
    connect?: SalaWhereUniqueInput
    update?: XOR<XOR<SalaUpdateToOneWithWhereWithoutTempo_lectivoInput, SalaUpdateWithoutTempo_lectivoInput>, SalaUncheckedUpdateWithoutTempo_lectivoInput>
  }

  export type DiaSemanaUpdateOneRequiredWithoutTempo_lectivoNestedInput = {
    create?: XOR<DiaSemanaCreateWithoutTempo_lectivoInput, DiaSemanaUncheckedCreateWithoutTempo_lectivoInput>
    connectOrCreate?: DiaSemanaCreateOrConnectWithoutTempo_lectivoInput
    upsert?: DiaSemanaUpsertWithoutTempo_lectivoInput
    connect?: DiaSemanaWhereUniqueInput
    update?: XOR<XOR<DiaSemanaUpdateToOneWithWhereWithoutTempo_lectivoInput, DiaSemanaUpdateWithoutTempo_lectivoInput>, DiaSemanaUncheckedUpdateWithoutTempo_lectivoInput>
  }

  export type PeriodoUpdateOneRequiredWithoutTempo_lectivoNestedInput = {
    create?: XOR<PeriodoCreateWithoutTempo_lectivoInput, PeriodoUncheckedCreateWithoutTempo_lectivoInput>
    connectOrCreate?: PeriodoCreateOrConnectWithoutTempo_lectivoInput
    upsert?: PeriodoUpsertWithoutTempo_lectivoInput
    connect?: PeriodoWhereUniqueInput
    update?: XOR<XOR<PeriodoUpdateToOneWithWhereWithoutTempo_lectivoInput, PeriodoUpdateWithoutTempo_lectivoInput>, PeriodoUncheckedUpdateWithoutTempo_lectivoInput>
  }

  export type CursoCreateNestedOneWithoutTurmasInput = {
    create?: XOR<CursoCreateWithoutTurmasInput, CursoUncheckedCreateWithoutTurmasInput>
    connectOrCreate?: CursoCreateOrConnectWithoutTurmasInput
    connect?: CursoWhereUniqueInput
  }

  export type ClasseCreateNestedOneWithoutTurmasInput = {
    create?: XOR<ClasseCreateWithoutTurmasInput, ClasseUncheckedCreateWithoutTurmasInput>
    connectOrCreate?: ClasseCreateOrConnectWithoutTurmasInput
    connect?: ClasseWhereUniqueInput
  }

  export type Tempo_LectivoCreateNestedManyWithoutTurmaInput = {
    create?: XOR<Tempo_LectivoCreateWithoutTurmaInput, Tempo_LectivoUncheckedCreateWithoutTurmaInput> | Tempo_LectivoCreateWithoutTurmaInput[] | Tempo_LectivoUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: Tempo_LectivoCreateOrConnectWithoutTurmaInput | Tempo_LectivoCreateOrConnectWithoutTurmaInput[]
    createMany?: Tempo_LectivoCreateManyTurmaInputEnvelope
    connect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
  }

  export type Tempo_LectivoUncheckedCreateNestedManyWithoutTurmaInput = {
    create?: XOR<Tempo_LectivoCreateWithoutTurmaInput, Tempo_LectivoUncheckedCreateWithoutTurmaInput> | Tempo_LectivoCreateWithoutTurmaInput[] | Tempo_LectivoUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: Tempo_LectivoCreateOrConnectWithoutTurmaInput | Tempo_LectivoCreateOrConnectWithoutTurmaInput[]
    createMany?: Tempo_LectivoCreateManyTurmaInputEnvelope
    connect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
  }

  export type CursoUpdateOneRequiredWithoutTurmasNestedInput = {
    create?: XOR<CursoCreateWithoutTurmasInput, CursoUncheckedCreateWithoutTurmasInput>
    connectOrCreate?: CursoCreateOrConnectWithoutTurmasInput
    upsert?: CursoUpsertWithoutTurmasInput
    connect?: CursoWhereUniqueInput
    update?: XOR<XOR<CursoUpdateToOneWithWhereWithoutTurmasInput, CursoUpdateWithoutTurmasInput>, CursoUncheckedUpdateWithoutTurmasInput>
  }

  export type ClasseUpdateOneRequiredWithoutTurmasNestedInput = {
    create?: XOR<ClasseCreateWithoutTurmasInput, ClasseUncheckedCreateWithoutTurmasInput>
    connectOrCreate?: ClasseCreateOrConnectWithoutTurmasInput
    upsert?: ClasseUpsertWithoutTurmasInput
    connect?: ClasseWhereUniqueInput
    update?: XOR<XOR<ClasseUpdateToOneWithWhereWithoutTurmasInput, ClasseUpdateWithoutTurmasInput>, ClasseUncheckedUpdateWithoutTurmasInput>
  }

  export type Tempo_LectivoUpdateManyWithoutTurmaNestedInput = {
    create?: XOR<Tempo_LectivoCreateWithoutTurmaInput, Tempo_LectivoUncheckedCreateWithoutTurmaInput> | Tempo_LectivoCreateWithoutTurmaInput[] | Tempo_LectivoUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: Tempo_LectivoCreateOrConnectWithoutTurmaInput | Tempo_LectivoCreateOrConnectWithoutTurmaInput[]
    upsert?: Tempo_LectivoUpsertWithWhereUniqueWithoutTurmaInput | Tempo_LectivoUpsertWithWhereUniqueWithoutTurmaInput[]
    createMany?: Tempo_LectivoCreateManyTurmaInputEnvelope
    set?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    disconnect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    delete?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    connect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    update?: Tempo_LectivoUpdateWithWhereUniqueWithoutTurmaInput | Tempo_LectivoUpdateWithWhereUniqueWithoutTurmaInput[]
    updateMany?: Tempo_LectivoUpdateManyWithWhereWithoutTurmaInput | Tempo_LectivoUpdateManyWithWhereWithoutTurmaInput[]
    deleteMany?: Tempo_LectivoScalarWhereInput | Tempo_LectivoScalarWhereInput[]
  }

  export type Tempo_LectivoUncheckedUpdateManyWithoutTurmaNestedInput = {
    create?: XOR<Tempo_LectivoCreateWithoutTurmaInput, Tempo_LectivoUncheckedCreateWithoutTurmaInput> | Tempo_LectivoCreateWithoutTurmaInput[] | Tempo_LectivoUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: Tempo_LectivoCreateOrConnectWithoutTurmaInput | Tempo_LectivoCreateOrConnectWithoutTurmaInput[]
    upsert?: Tempo_LectivoUpsertWithWhereUniqueWithoutTurmaInput | Tempo_LectivoUpsertWithWhereUniqueWithoutTurmaInput[]
    createMany?: Tempo_LectivoCreateManyTurmaInputEnvelope
    set?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    disconnect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    delete?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    connect?: Tempo_LectivoWhereUniqueInput | Tempo_LectivoWhereUniqueInput[]
    update?: Tempo_LectivoUpdateWithWhereUniqueWithoutTurmaInput | Tempo_LectivoUpdateWithWhereUniqueWithoutTurmaInput[]
    updateMany?: Tempo_LectivoUpdateManyWithWhereWithoutTurmaInput | Tempo_LectivoUpdateManyWithWhereWithoutTurmaInput[]
    deleteMany?: Tempo_LectivoScalarWhereInput | Tempo_LectivoScalarWhereInput[]
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

  export type TurmaCreateWithoutClasseInput = {
    nome_turma: string
    curso: CursoCreateNestedOneWithoutTurmasInput
    tempo_lectivo?: Tempo_LectivoCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUncheckedCreateWithoutClasseInput = {
    nome_turma: string
    nome_curso: string
    tempo_lectivo?: Tempo_LectivoUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaCreateOrConnectWithoutClasseInput = {
    where: TurmaWhereUniqueInput
    create: XOR<TurmaCreateWithoutClasseInput, TurmaUncheckedCreateWithoutClasseInput>
  }

  export type TurmaCreateManyClasseInputEnvelope = {
    data: TurmaCreateManyClasseInput | TurmaCreateManyClasseInput[]
    skipDuplicates?: boolean
  }

  export type TurmaUpsertWithWhereUniqueWithoutClasseInput = {
    where: TurmaWhereUniqueInput
    update: XOR<TurmaUpdateWithoutClasseInput, TurmaUncheckedUpdateWithoutClasseInput>
    create: XOR<TurmaCreateWithoutClasseInput, TurmaUncheckedCreateWithoutClasseInput>
  }

  export type TurmaUpdateWithWhereUniqueWithoutClasseInput = {
    where: TurmaWhereUniqueInput
    data: XOR<TurmaUpdateWithoutClasseInput, TurmaUncheckedUpdateWithoutClasseInput>
  }

  export type TurmaUpdateManyWithWhereWithoutClasseInput = {
    where: TurmaScalarWhereInput
    data: XOR<TurmaUpdateManyMutationInput, TurmaUncheckedUpdateManyWithoutClasseInput>
  }

  export type TurmaScalarWhereInput = {
    AND?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
    OR?: TurmaScalarWhereInput[]
    NOT?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
    nome_turma?: StringFilter<"Turma"> | string
    nome_curso?: StringFilter<"Turma"> | string
    nome_classe?: StringFilter<"Turma"> | string
  }

  export type TurmaCreateWithoutCursoInput = {
    nome_turma: string
    classe: ClasseCreateNestedOneWithoutTurmasInput
    tempo_lectivo?: Tempo_LectivoCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUncheckedCreateWithoutCursoInput = {
    nome_turma: string
    nome_classe: string
    tempo_lectivo?: Tempo_LectivoUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaCreateOrConnectWithoutCursoInput = {
    where: TurmaWhereUniqueInput
    create: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput>
  }

  export type TurmaCreateManyCursoInputEnvelope = {
    data: TurmaCreateManyCursoInput | TurmaCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type TurmaUpsertWithWhereUniqueWithoutCursoInput = {
    where: TurmaWhereUniqueInput
    update: XOR<TurmaUpdateWithoutCursoInput, TurmaUncheckedUpdateWithoutCursoInput>
    create: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput>
  }

  export type TurmaUpdateWithWhereUniqueWithoutCursoInput = {
    where: TurmaWhereUniqueInput
    data: XOR<TurmaUpdateWithoutCursoInput, TurmaUncheckedUpdateWithoutCursoInput>
  }

  export type TurmaUpdateManyWithWhereWithoutCursoInput = {
    where: TurmaScalarWhereInput
    data: XOR<TurmaUpdateManyMutationInput, TurmaUncheckedUpdateManyWithoutCursoInput>
  }

  export type DisponibilidadeCreateWithoutDiaInput = {
    ordem: number
    professor: ProfessorCreateNestedOneWithoutDisponibilidadesInput
    periodo: PeriodoCreateNestedOneWithoutDisponibilidadesInput
  }

  export type DisponibilidadeUncheckedCreateWithoutDiaInput = {
    id_disponibilidade?: number
    professorId: number
    nome_periodo: string
    ordem: number
  }

  export type DisponibilidadeCreateOrConnectWithoutDiaInput = {
    where: DisponibilidadeWhereUniqueInput
    create: XOR<DisponibilidadeCreateWithoutDiaInput, DisponibilidadeUncheckedCreateWithoutDiaInput>
  }

  export type DisponibilidadeCreateManyDiaInputEnvelope = {
    data: DisponibilidadeCreateManyDiaInput | DisponibilidadeCreateManyDiaInput[]
    skipDuplicates?: boolean
  }

  export type Tempo_LectivoCreateWithoutDiaInput = {
    ordem?: number
    professor: ProfessorCreateNestedOneWithoutTempo_lectivoInput
    turma: TurmaCreateNestedOneWithoutTempo_lectivoInput
    disciplina: DisciplinaCreateNestedOneWithoutTempo_lectivoInput
    sala: SalaCreateNestedOneWithoutTempo_lectivoInput
    periodo: PeriodoCreateNestedOneWithoutTempo_lectivoInput
  }

  export type Tempo_LectivoUncheckedCreateWithoutDiaInput = {
    id?: number
    professorId: number
    nome_turma: string
    nome_disciplina: string
    nome_sala: string
    nome_periodo: string
    ordem?: number
  }

  export type Tempo_LectivoCreateOrConnectWithoutDiaInput = {
    where: Tempo_LectivoWhereUniqueInput
    create: XOR<Tempo_LectivoCreateWithoutDiaInput, Tempo_LectivoUncheckedCreateWithoutDiaInput>
  }

  export type Tempo_LectivoCreateManyDiaInputEnvelope = {
    data: Tempo_LectivoCreateManyDiaInput | Tempo_LectivoCreateManyDiaInput[]
    skipDuplicates?: boolean
  }

  export type DisponibilidadeUpsertWithWhereUniqueWithoutDiaInput = {
    where: DisponibilidadeWhereUniqueInput
    update: XOR<DisponibilidadeUpdateWithoutDiaInput, DisponibilidadeUncheckedUpdateWithoutDiaInput>
    create: XOR<DisponibilidadeCreateWithoutDiaInput, DisponibilidadeUncheckedCreateWithoutDiaInput>
  }

  export type DisponibilidadeUpdateWithWhereUniqueWithoutDiaInput = {
    where: DisponibilidadeWhereUniqueInput
    data: XOR<DisponibilidadeUpdateWithoutDiaInput, DisponibilidadeUncheckedUpdateWithoutDiaInput>
  }

  export type DisponibilidadeUpdateManyWithWhereWithoutDiaInput = {
    where: DisponibilidadeScalarWhereInput
    data: XOR<DisponibilidadeUpdateManyMutationInput, DisponibilidadeUncheckedUpdateManyWithoutDiaInput>
  }

  export type DisponibilidadeScalarWhereInput = {
    AND?: DisponibilidadeScalarWhereInput | DisponibilidadeScalarWhereInput[]
    OR?: DisponibilidadeScalarWhereInput[]
    NOT?: DisponibilidadeScalarWhereInput | DisponibilidadeScalarWhereInput[]
    id_disponibilidade?: IntFilter<"Disponibilidade"> | number
    professorId?: IntFilter<"Disponibilidade"> | number
    nome_dia?: StringFilter<"Disponibilidade"> | string
    nome_periodo?: StringFilter<"Disponibilidade"> | string
    ordem?: IntFilter<"Disponibilidade"> | number
  }

  export type Tempo_LectivoUpsertWithWhereUniqueWithoutDiaInput = {
    where: Tempo_LectivoWhereUniqueInput
    update: XOR<Tempo_LectivoUpdateWithoutDiaInput, Tempo_LectivoUncheckedUpdateWithoutDiaInput>
    create: XOR<Tempo_LectivoCreateWithoutDiaInput, Tempo_LectivoUncheckedCreateWithoutDiaInput>
  }

  export type Tempo_LectivoUpdateWithWhereUniqueWithoutDiaInput = {
    where: Tempo_LectivoWhereUniqueInput
    data: XOR<Tempo_LectivoUpdateWithoutDiaInput, Tempo_LectivoUncheckedUpdateWithoutDiaInput>
  }

  export type Tempo_LectivoUpdateManyWithWhereWithoutDiaInput = {
    where: Tempo_LectivoScalarWhereInput
    data: XOR<Tempo_LectivoUpdateManyMutationInput, Tempo_LectivoUncheckedUpdateManyWithoutDiaInput>
  }

  export type Tempo_LectivoScalarWhereInput = {
    AND?: Tempo_LectivoScalarWhereInput | Tempo_LectivoScalarWhereInput[]
    OR?: Tempo_LectivoScalarWhereInput[]
    NOT?: Tempo_LectivoScalarWhereInput | Tempo_LectivoScalarWhereInput[]
    id?: IntFilter<"Tempo_Lectivo"> | number
    professorId?: IntFilter<"Tempo_Lectivo"> | number
    nome_turma?: StringFilter<"Tempo_Lectivo"> | string
    nome_disciplina?: StringFilter<"Tempo_Lectivo"> | string
    nome_sala?: StringFilter<"Tempo_Lectivo"> | string
    nome_dia?: StringFilter<"Tempo_Lectivo"> | string
    nome_periodo?: StringFilter<"Tempo_Lectivo"> | string
    ordem?: IntFilter<"Tempo_Lectivo"> | number
  }

  export type ProfDisciplinasCreateWithoutDisciplinaInput = {
    professor: ProfessorCreateNestedOneWithoutProfDisciplinasInput
  }

  export type ProfDisciplinasUncheckedCreateWithoutDisciplinaInput = {
    professorId: number
  }

  export type ProfDisciplinasCreateOrConnectWithoutDisciplinaInput = {
    where: ProfDisciplinasWhereUniqueInput
    create: XOR<ProfDisciplinasCreateWithoutDisciplinaInput, ProfDisciplinasUncheckedCreateWithoutDisciplinaInput>
  }

  export type ProfDisciplinasCreateManyDisciplinaInputEnvelope = {
    data: ProfDisciplinasCreateManyDisciplinaInput | ProfDisciplinasCreateManyDisciplinaInput[]
    skipDuplicates?: boolean
  }

  export type Tempo_LectivoCreateWithoutDisciplinaInput = {
    ordem?: number
    professor: ProfessorCreateNestedOneWithoutTempo_lectivoInput
    turma: TurmaCreateNestedOneWithoutTempo_lectivoInput
    sala: SalaCreateNestedOneWithoutTempo_lectivoInput
    dia: DiaSemanaCreateNestedOneWithoutTempo_lectivoInput
    periodo: PeriodoCreateNestedOneWithoutTempo_lectivoInput
  }

  export type Tempo_LectivoUncheckedCreateWithoutDisciplinaInput = {
    id?: number
    professorId: number
    nome_turma: string
    nome_sala: string
    nome_dia: string
    nome_periodo: string
    ordem?: number
  }

  export type Tempo_LectivoCreateOrConnectWithoutDisciplinaInput = {
    where: Tempo_LectivoWhereUniqueInput
    create: XOR<Tempo_LectivoCreateWithoutDisciplinaInput, Tempo_LectivoUncheckedCreateWithoutDisciplinaInput>
  }

  export type Tempo_LectivoCreateManyDisciplinaInputEnvelope = {
    data: Tempo_LectivoCreateManyDisciplinaInput | Tempo_LectivoCreateManyDisciplinaInput[]
    skipDuplicates?: boolean
  }

  export type ProfDisciplinasUpsertWithWhereUniqueWithoutDisciplinaInput = {
    where: ProfDisciplinasWhereUniqueInput
    update: XOR<ProfDisciplinasUpdateWithoutDisciplinaInput, ProfDisciplinasUncheckedUpdateWithoutDisciplinaInput>
    create: XOR<ProfDisciplinasCreateWithoutDisciplinaInput, ProfDisciplinasUncheckedCreateWithoutDisciplinaInput>
  }

  export type ProfDisciplinasUpdateWithWhereUniqueWithoutDisciplinaInput = {
    where: ProfDisciplinasWhereUniqueInput
    data: XOR<ProfDisciplinasUpdateWithoutDisciplinaInput, ProfDisciplinasUncheckedUpdateWithoutDisciplinaInput>
  }

  export type ProfDisciplinasUpdateManyWithWhereWithoutDisciplinaInput = {
    where: ProfDisciplinasScalarWhereInput
    data: XOR<ProfDisciplinasUpdateManyMutationInput, ProfDisciplinasUncheckedUpdateManyWithoutDisciplinaInput>
  }

  export type ProfDisciplinasScalarWhereInput = {
    AND?: ProfDisciplinasScalarWhereInput | ProfDisciplinasScalarWhereInput[]
    OR?: ProfDisciplinasScalarWhereInput[]
    NOT?: ProfDisciplinasScalarWhereInput | ProfDisciplinasScalarWhereInput[]
    professorId?: IntFilter<"ProfDisciplinas"> | number
    nome_disciplina?: StringFilter<"ProfDisciplinas"> | string
  }

  export type Tempo_LectivoUpsertWithWhereUniqueWithoutDisciplinaInput = {
    where: Tempo_LectivoWhereUniqueInput
    update: XOR<Tempo_LectivoUpdateWithoutDisciplinaInput, Tempo_LectivoUncheckedUpdateWithoutDisciplinaInput>
    create: XOR<Tempo_LectivoCreateWithoutDisciplinaInput, Tempo_LectivoUncheckedCreateWithoutDisciplinaInput>
  }

  export type Tempo_LectivoUpdateWithWhereUniqueWithoutDisciplinaInput = {
    where: Tempo_LectivoWhereUniqueInput
    data: XOR<Tempo_LectivoUpdateWithoutDisciplinaInput, Tempo_LectivoUncheckedUpdateWithoutDisciplinaInput>
  }

  export type Tempo_LectivoUpdateManyWithWhereWithoutDisciplinaInput = {
    where: Tempo_LectivoScalarWhereInput
    data: XOR<Tempo_LectivoUpdateManyMutationInput, Tempo_LectivoUncheckedUpdateManyWithoutDisciplinaInput>
  }

  export type ProfessorCreateWithoutDisponibilidadesInput = {
    nome: string
    email: string
    telefone: string
    updated_at?: Date | string
    profDisciplinas?: ProfDisciplinasCreateNestedManyWithoutProfessorInput
    tempo_lectivo?: Tempo_LectivoCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateWithoutDisponibilidadesInput = {
    id_professor?: number
    nome: string
    email: string
    telefone: string
    updated_at?: Date | string
    profDisciplinas?: ProfDisciplinasUncheckedCreateNestedManyWithoutProfessorInput
    tempo_lectivo?: Tempo_LectivoUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorCreateOrConnectWithoutDisponibilidadesInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutDisponibilidadesInput, ProfessorUncheckedCreateWithoutDisponibilidadesInput>
  }

  export type DiaSemanaCreateWithoutDisponibilidadesInput = {
    nome_dia: string
    tempo_lectivo?: Tempo_LectivoCreateNestedManyWithoutDiaInput
  }

  export type DiaSemanaUncheckedCreateWithoutDisponibilidadesInput = {
    nome_dia: string
    tempo_lectivo?: Tempo_LectivoUncheckedCreateNestedManyWithoutDiaInput
  }

  export type DiaSemanaCreateOrConnectWithoutDisponibilidadesInput = {
    where: DiaSemanaWhereUniqueInput
    create: XOR<DiaSemanaCreateWithoutDisponibilidadesInput, DiaSemanaUncheckedCreateWithoutDisponibilidadesInput>
  }

  export type PeriodoCreateWithoutDisponibilidadesInput = {
    nome_periodo: string
    tempo_lectivo?: Tempo_LectivoCreateNestedManyWithoutPeriodoInput
  }

  export type PeriodoUncheckedCreateWithoutDisponibilidadesInput = {
    nome_periodo: string
    tempo_lectivo?: Tempo_LectivoUncheckedCreateNestedManyWithoutPeriodoInput
  }

  export type PeriodoCreateOrConnectWithoutDisponibilidadesInput = {
    where: PeriodoWhereUniqueInput
    create: XOR<PeriodoCreateWithoutDisponibilidadesInput, PeriodoUncheckedCreateWithoutDisponibilidadesInput>
  }

  export type ProfessorUpsertWithoutDisponibilidadesInput = {
    update: XOR<ProfessorUpdateWithoutDisponibilidadesInput, ProfessorUncheckedUpdateWithoutDisponibilidadesInput>
    create: XOR<ProfessorCreateWithoutDisponibilidadesInput, ProfessorUncheckedCreateWithoutDisponibilidadesInput>
    where?: ProfessorWhereInput
  }

  export type ProfessorUpdateToOneWithWhereWithoutDisponibilidadesInput = {
    where?: ProfessorWhereInput
    data: XOR<ProfessorUpdateWithoutDisponibilidadesInput, ProfessorUncheckedUpdateWithoutDisponibilidadesInput>
  }

  export type ProfessorUpdateWithoutDisponibilidadesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profDisciplinas?: ProfDisciplinasUpdateManyWithoutProfessorNestedInput
    tempo_lectivo?: Tempo_LectivoUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateWithoutDisponibilidadesInput = {
    id_professor?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profDisciplinas?: ProfDisciplinasUncheckedUpdateManyWithoutProfessorNestedInput
    tempo_lectivo?: Tempo_LectivoUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type DiaSemanaUpsertWithoutDisponibilidadesInput = {
    update: XOR<DiaSemanaUpdateWithoutDisponibilidadesInput, DiaSemanaUncheckedUpdateWithoutDisponibilidadesInput>
    create: XOR<DiaSemanaCreateWithoutDisponibilidadesInput, DiaSemanaUncheckedCreateWithoutDisponibilidadesInput>
    where?: DiaSemanaWhereInput
  }

  export type DiaSemanaUpdateToOneWithWhereWithoutDisponibilidadesInput = {
    where?: DiaSemanaWhereInput
    data: XOR<DiaSemanaUpdateWithoutDisponibilidadesInput, DiaSemanaUncheckedUpdateWithoutDisponibilidadesInput>
  }

  export type DiaSemanaUpdateWithoutDisponibilidadesInput = {
    nome_dia?: StringFieldUpdateOperationsInput | string
    tempo_lectivo?: Tempo_LectivoUpdateManyWithoutDiaNestedInput
  }

  export type DiaSemanaUncheckedUpdateWithoutDisponibilidadesInput = {
    nome_dia?: StringFieldUpdateOperationsInput | string
    tempo_lectivo?: Tempo_LectivoUncheckedUpdateManyWithoutDiaNestedInput
  }

  export type PeriodoUpsertWithoutDisponibilidadesInput = {
    update: XOR<PeriodoUpdateWithoutDisponibilidadesInput, PeriodoUncheckedUpdateWithoutDisponibilidadesInput>
    create: XOR<PeriodoCreateWithoutDisponibilidadesInput, PeriodoUncheckedCreateWithoutDisponibilidadesInput>
    where?: PeriodoWhereInput
  }

  export type PeriodoUpdateToOneWithWhereWithoutDisponibilidadesInput = {
    where?: PeriodoWhereInput
    data: XOR<PeriodoUpdateWithoutDisponibilidadesInput, PeriodoUncheckedUpdateWithoutDisponibilidadesInput>
  }

  export type PeriodoUpdateWithoutDisponibilidadesInput = {
    nome_periodo?: StringFieldUpdateOperationsInput | string
    tempo_lectivo?: Tempo_LectivoUpdateManyWithoutPeriodoNestedInput
  }

  export type PeriodoUncheckedUpdateWithoutDisponibilidadesInput = {
    nome_periodo?: StringFieldUpdateOperationsInput | string
    tempo_lectivo?: Tempo_LectivoUncheckedUpdateManyWithoutPeriodoNestedInput
  }

  export type DisponibilidadeCreateWithoutPeriodoInput = {
    ordem: number
    professor: ProfessorCreateNestedOneWithoutDisponibilidadesInput
    dia: DiaSemanaCreateNestedOneWithoutDisponibilidadesInput
  }

  export type DisponibilidadeUncheckedCreateWithoutPeriodoInput = {
    id_disponibilidade?: number
    professorId: number
    nome_dia: string
    ordem: number
  }

  export type DisponibilidadeCreateOrConnectWithoutPeriodoInput = {
    where: DisponibilidadeWhereUniqueInput
    create: XOR<DisponibilidadeCreateWithoutPeriodoInput, DisponibilidadeUncheckedCreateWithoutPeriodoInput>
  }

  export type DisponibilidadeCreateManyPeriodoInputEnvelope = {
    data: DisponibilidadeCreateManyPeriodoInput | DisponibilidadeCreateManyPeriodoInput[]
    skipDuplicates?: boolean
  }

  export type Tempo_LectivoCreateWithoutPeriodoInput = {
    ordem?: number
    professor: ProfessorCreateNestedOneWithoutTempo_lectivoInput
    turma: TurmaCreateNestedOneWithoutTempo_lectivoInput
    disciplina: DisciplinaCreateNestedOneWithoutTempo_lectivoInput
    sala: SalaCreateNestedOneWithoutTempo_lectivoInput
    dia: DiaSemanaCreateNestedOneWithoutTempo_lectivoInput
  }

  export type Tempo_LectivoUncheckedCreateWithoutPeriodoInput = {
    id?: number
    professorId: number
    nome_turma: string
    nome_disciplina: string
    nome_sala: string
    nome_dia: string
    ordem?: number
  }

  export type Tempo_LectivoCreateOrConnectWithoutPeriodoInput = {
    where: Tempo_LectivoWhereUniqueInput
    create: XOR<Tempo_LectivoCreateWithoutPeriodoInput, Tempo_LectivoUncheckedCreateWithoutPeriodoInput>
  }

  export type Tempo_LectivoCreateManyPeriodoInputEnvelope = {
    data: Tempo_LectivoCreateManyPeriodoInput | Tempo_LectivoCreateManyPeriodoInput[]
    skipDuplicates?: boolean
  }

  export type DisponibilidadeUpsertWithWhereUniqueWithoutPeriodoInput = {
    where: DisponibilidadeWhereUniqueInput
    update: XOR<DisponibilidadeUpdateWithoutPeriodoInput, DisponibilidadeUncheckedUpdateWithoutPeriodoInput>
    create: XOR<DisponibilidadeCreateWithoutPeriodoInput, DisponibilidadeUncheckedCreateWithoutPeriodoInput>
  }

  export type DisponibilidadeUpdateWithWhereUniqueWithoutPeriodoInput = {
    where: DisponibilidadeWhereUniqueInput
    data: XOR<DisponibilidadeUpdateWithoutPeriodoInput, DisponibilidadeUncheckedUpdateWithoutPeriodoInput>
  }

  export type DisponibilidadeUpdateManyWithWhereWithoutPeriodoInput = {
    where: DisponibilidadeScalarWhereInput
    data: XOR<DisponibilidadeUpdateManyMutationInput, DisponibilidadeUncheckedUpdateManyWithoutPeriodoInput>
  }

  export type Tempo_LectivoUpsertWithWhereUniqueWithoutPeriodoInput = {
    where: Tempo_LectivoWhereUniqueInput
    update: XOR<Tempo_LectivoUpdateWithoutPeriodoInput, Tempo_LectivoUncheckedUpdateWithoutPeriodoInput>
    create: XOR<Tempo_LectivoCreateWithoutPeriodoInput, Tempo_LectivoUncheckedCreateWithoutPeriodoInput>
  }

  export type Tempo_LectivoUpdateWithWhereUniqueWithoutPeriodoInput = {
    where: Tempo_LectivoWhereUniqueInput
    data: XOR<Tempo_LectivoUpdateWithoutPeriodoInput, Tempo_LectivoUncheckedUpdateWithoutPeriodoInput>
  }

  export type Tempo_LectivoUpdateManyWithWhereWithoutPeriodoInput = {
    where: Tempo_LectivoScalarWhereInput
    data: XOR<Tempo_LectivoUpdateManyMutationInput, Tempo_LectivoUncheckedUpdateManyWithoutPeriodoInput>
  }

  export type ProfDisciplinasCreateWithoutProfessorInput = {
    disciplina: DisciplinaCreateNestedOneWithoutProfDisciplinasInput
  }

  export type ProfDisciplinasUncheckedCreateWithoutProfessorInput = {
    nome_disciplina: string
  }

  export type ProfDisciplinasCreateOrConnectWithoutProfessorInput = {
    where: ProfDisciplinasWhereUniqueInput
    create: XOR<ProfDisciplinasCreateWithoutProfessorInput, ProfDisciplinasUncheckedCreateWithoutProfessorInput>
  }

  export type ProfDisciplinasCreateManyProfessorInputEnvelope = {
    data: ProfDisciplinasCreateManyProfessorInput | ProfDisciplinasCreateManyProfessorInput[]
    skipDuplicates?: boolean
  }

  export type DisponibilidadeCreateWithoutProfessorInput = {
    ordem: number
    dia: DiaSemanaCreateNestedOneWithoutDisponibilidadesInput
    periodo: PeriodoCreateNestedOneWithoutDisponibilidadesInput
  }

  export type DisponibilidadeUncheckedCreateWithoutProfessorInput = {
    id_disponibilidade?: number
    nome_dia: string
    nome_periodo: string
    ordem: number
  }

  export type DisponibilidadeCreateOrConnectWithoutProfessorInput = {
    where: DisponibilidadeWhereUniqueInput
    create: XOR<DisponibilidadeCreateWithoutProfessorInput, DisponibilidadeUncheckedCreateWithoutProfessorInput>
  }

  export type DisponibilidadeCreateManyProfessorInputEnvelope = {
    data: DisponibilidadeCreateManyProfessorInput | DisponibilidadeCreateManyProfessorInput[]
    skipDuplicates?: boolean
  }

  export type Tempo_LectivoCreateWithoutProfessorInput = {
    ordem?: number
    turma: TurmaCreateNestedOneWithoutTempo_lectivoInput
    disciplina: DisciplinaCreateNestedOneWithoutTempo_lectivoInput
    sala: SalaCreateNestedOneWithoutTempo_lectivoInput
    dia: DiaSemanaCreateNestedOneWithoutTempo_lectivoInput
    periodo: PeriodoCreateNestedOneWithoutTempo_lectivoInput
  }

  export type Tempo_LectivoUncheckedCreateWithoutProfessorInput = {
    id?: number
    nome_turma: string
    nome_disciplina: string
    nome_sala: string
    nome_dia: string
    nome_periodo: string
    ordem?: number
  }

  export type Tempo_LectivoCreateOrConnectWithoutProfessorInput = {
    where: Tempo_LectivoWhereUniqueInput
    create: XOR<Tempo_LectivoCreateWithoutProfessorInput, Tempo_LectivoUncheckedCreateWithoutProfessorInput>
  }

  export type Tempo_LectivoCreateManyProfessorInputEnvelope = {
    data: Tempo_LectivoCreateManyProfessorInput | Tempo_LectivoCreateManyProfessorInput[]
    skipDuplicates?: boolean
  }

  export type ProfDisciplinasUpsertWithWhereUniqueWithoutProfessorInput = {
    where: ProfDisciplinasWhereUniqueInput
    update: XOR<ProfDisciplinasUpdateWithoutProfessorInput, ProfDisciplinasUncheckedUpdateWithoutProfessorInput>
    create: XOR<ProfDisciplinasCreateWithoutProfessorInput, ProfDisciplinasUncheckedCreateWithoutProfessorInput>
  }

  export type ProfDisciplinasUpdateWithWhereUniqueWithoutProfessorInput = {
    where: ProfDisciplinasWhereUniqueInput
    data: XOR<ProfDisciplinasUpdateWithoutProfessorInput, ProfDisciplinasUncheckedUpdateWithoutProfessorInput>
  }

  export type ProfDisciplinasUpdateManyWithWhereWithoutProfessorInput = {
    where: ProfDisciplinasScalarWhereInput
    data: XOR<ProfDisciplinasUpdateManyMutationInput, ProfDisciplinasUncheckedUpdateManyWithoutProfessorInput>
  }

  export type DisponibilidadeUpsertWithWhereUniqueWithoutProfessorInput = {
    where: DisponibilidadeWhereUniqueInput
    update: XOR<DisponibilidadeUpdateWithoutProfessorInput, DisponibilidadeUncheckedUpdateWithoutProfessorInput>
    create: XOR<DisponibilidadeCreateWithoutProfessorInput, DisponibilidadeUncheckedCreateWithoutProfessorInput>
  }

  export type DisponibilidadeUpdateWithWhereUniqueWithoutProfessorInput = {
    where: DisponibilidadeWhereUniqueInput
    data: XOR<DisponibilidadeUpdateWithoutProfessorInput, DisponibilidadeUncheckedUpdateWithoutProfessorInput>
  }

  export type DisponibilidadeUpdateManyWithWhereWithoutProfessorInput = {
    where: DisponibilidadeScalarWhereInput
    data: XOR<DisponibilidadeUpdateManyMutationInput, DisponibilidadeUncheckedUpdateManyWithoutProfessorInput>
  }

  export type Tempo_LectivoUpsertWithWhereUniqueWithoutProfessorInput = {
    where: Tempo_LectivoWhereUniqueInput
    update: XOR<Tempo_LectivoUpdateWithoutProfessorInput, Tempo_LectivoUncheckedUpdateWithoutProfessorInput>
    create: XOR<Tempo_LectivoCreateWithoutProfessorInput, Tempo_LectivoUncheckedCreateWithoutProfessorInput>
  }

  export type Tempo_LectivoUpdateWithWhereUniqueWithoutProfessorInput = {
    where: Tempo_LectivoWhereUniqueInput
    data: XOR<Tempo_LectivoUpdateWithoutProfessorInput, Tempo_LectivoUncheckedUpdateWithoutProfessorInput>
  }

  export type Tempo_LectivoUpdateManyWithWhereWithoutProfessorInput = {
    where: Tempo_LectivoScalarWhereInput
    data: XOR<Tempo_LectivoUpdateManyMutationInput, Tempo_LectivoUncheckedUpdateManyWithoutProfessorInput>
  }

  export type ProfessorCreateWithoutProfDisciplinasInput = {
    nome: string
    email: string
    telefone: string
    updated_at?: Date | string
    disponibilidades?: DisponibilidadeCreateNestedManyWithoutProfessorInput
    tempo_lectivo?: Tempo_LectivoCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateWithoutProfDisciplinasInput = {
    id_professor?: number
    nome: string
    email: string
    telefone: string
    updated_at?: Date | string
    disponibilidades?: DisponibilidadeUncheckedCreateNestedManyWithoutProfessorInput
    tempo_lectivo?: Tempo_LectivoUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorCreateOrConnectWithoutProfDisciplinasInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutProfDisciplinasInput, ProfessorUncheckedCreateWithoutProfDisciplinasInput>
  }

  export type DisciplinaCreateWithoutProfDisciplinasInput = {
    nome_disciplina: string
    tempo_lectivo?: Tempo_LectivoCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaUncheckedCreateWithoutProfDisciplinasInput = {
    nome_disciplina: string
    tempo_lectivo?: Tempo_LectivoUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaCreateOrConnectWithoutProfDisciplinasInput = {
    where: DisciplinaWhereUniqueInput
    create: XOR<DisciplinaCreateWithoutProfDisciplinasInput, DisciplinaUncheckedCreateWithoutProfDisciplinasInput>
  }

  export type ProfessorUpsertWithoutProfDisciplinasInput = {
    update: XOR<ProfessorUpdateWithoutProfDisciplinasInput, ProfessorUncheckedUpdateWithoutProfDisciplinasInput>
    create: XOR<ProfessorCreateWithoutProfDisciplinasInput, ProfessorUncheckedCreateWithoutProfDisciplinasInput>
    where?: ProfessorWhereInput
  }

  export type ProfessorUpdateToOneWithWhereWithoutProfDisciplinasInput = {
    where?: ProfessorWhereInput
    data: XOR<ProfessorUpdateWithoutProfDisciplinasInput, ProfessorUncheckedUpdateWithoutProfDisciplinasInput>
  }

  export type ProfessorUpdateWithoutProfDisciplinasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    disponibilidades?: DisponibilidadeUpdateManyWithoutProfessorNestedInput
    tempo_lectivo?: Tempo_LectivoUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateWithoutProfDisciplinasInput = {
    id_professor?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    disponibilidades?: DisponibilidadeUncheckedUpdateManyWithoutProfessorNestedInput
    tempo_lectivo?: Tempo_LectivoUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type DisciplinaUpsertWithoutProfDisciplinasInput = {
    update: XOR<DisciplinaUpdateWithoutProfDisciplinasInput, DisciplinaUncheckedUpdateWithoutProfDisciplinasInput>
    create: XOR<DisciplinaCreateWithoutProfDisciplinasInput, DisciplinaUncheckedCreateWithoutProfDisciplinasInput>
    where?: DisciplinaWhereInput
  }

  export type DisciplinaUpdateToOneWithWhereWithoutProfDisciplinasInput = {
    where?: DisciplinaWhereInput
    data: XOR<DisciplinaUpdateWithoutProfDisciplinasInput, DisciplinaUncheckedUpdateWithoutProfDisciplinasInput>
  }

  export type DisciplinaUpdateWithoutProfDisciplinasInput = {
    nome_disciplina?: StringFieldUpdateOperationsInput | string
    tempo_lectivo?: Tempo_LectivoUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaUncheckedUpdateWithoutProfDisciplinasInput = {
    nome_disciplina?: StringFieldUpdateOperationsInput | string
    tempo_lectivo?: Tempo_LectivoUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type Tempo_LectivoCreateWithoutSalaInput = {
    ordem?: number
    professor: ProfessorCreateNestedOneWithoutTempo_lectivoInput
    turma: TurmaCreateNestedOneWithoutTempo_lectivoInput
    disciplina: DisciplinaCreateNestedOneWithoutTempo_lectivoInput
    dia: DiaSemanaCreateNestedOneWithoutTempo_lectivoInput
    periodo: PeriodoCreateNestedOneWithoutTempo_lectivoInput
  }

  export type Tempo_LectivoUncheckedCreateWithoutSalaInput = {
    id?: number
    professorId: number
    nome_turma: string
    nome_disciplina: string
    nome_dia: string
    nome_periodo: string
    ordem?: number
  }

  export type Tempo_LectivoCreateOrConnectWithoutSalaInput = {
    where: Tempo_LectivoWhereUniqueInput
    create: XOR<Tempo_LectivoCreateWithoutSalaInput, Tempo_LectivoUncheckedCreateWithoutSalaInput>
  }

  export type Tempo_LectivoCreateManySalaInputEnvelope = {
    data: Tempo_LectivoCreateManySalaInput | Tempo_LectivoCreateManySalaInput[]
    skipDuplicates?: boolean
  }

  export type Tempo_LectivoUpsertWithWhereUniqueWithoutSalaInput = {
    where: Tempo_LectivoWhereUniqueInput
    update: XOR<Tempo_LectivoUpdateWithoutSalaInput, Tempo_LectivoUncheckedUpdateWithoutSalaInput>
    create: XOR<Tempo_LectivoCreateWithoutSalaInput, Tempo_LectivoUncheckedCreateWithoutSalaInput>
  }

  export type Tempo_LectivoUpdateWithWhereUniqueWithoutSalaInput = {
    where: Tempo_LectivoWhereUniqueInput
    data: XOR<Tempo_LectivoUpdateWithoutSalaInput, Tempo_LectivoUncheckedUpdateWithoutSalaInput>
  }

  export type Tempo_LectivoUpdateManyWithWhereWithoutSalaInput = {
    where: Tempo_LectivoScalarWhereInput
    data: XOR<Tempo_LectivoUpdateManyMutationInput, Tempo_LectivoUncheckedUpdateManyWithoutSalaInput>
  }

  export type ProfessorCreateWithoutTempo_lectivoInput = {
    nome: string
    email: string
    telefone: string
    updated_at?: Date | string
    profDisciplinas?: ProfDisciplinasCreateNestedManyWithoutProfessorInput
    disponibilidades?: DisponibilidadeCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateWithoutTempo_lectivoInput = {
    id_professor?: number
    nome: string
    email: string
    telefone: string
    updated_at?: Date | string
    profDisciplinas?: ProfDisciplinasUncheckedCreateNestedManyWithoutProfessorInput
    disponibilidades?: DisponibilidadeUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorCreateOrConnectWithoutTempo_lectivoInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutTempo_lectivoInput, ProfessorUncheckedCreateWithoutTempo_lectivoInput>
  }

  export type TurmaCreateWithoutTempo_lectivoInput = {
    nome_turma: string
    curso: CursoCreateNestedOneWithoutTurmasInput
    classe: ClasseCreateNestedOneWithoutTurmasInput
  }

  export type TurmaUncheckedCreateWithoutTempo_lectivoInput = {
    nome_turma: string
    nome_curso: string
    nome_classe: string
  }

  export type TurmaCreateOrConnectWithoutTempo_lectivoInput = {
    where: TurmaWhereUniqueInput
    create: XOR<TurmaCreateWithoutTempo_lectivoInput, TurmaUncheckedCreateWithoutTempo_lectivoInput>
  }

  export type DisciplinaCreateWithoutTempo_lectivoInput = {
    nome_disciplina: string
    profDisciplinas?: ProfDisciplinasCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaUncheckedCreateWithoutTempo_lectivoInput = {
    nome_disciplina: string
    profDisciplinas?: ProfDisciplinasUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaCreateOrConnectWithoutTempo_lectivoInput = {
    where: DisciplinaWhereUniqueInput
    create: XOR<DisciplinaCreateWithoutTempo_lectivoInput, DisciplinaUncheckedCreateWithoutTempo_lectivoInput>
  }

  export type SalaCreateWithoutTempo_lectivoInput = {
    nome_sala: string
    capacidade: number
  }

  export type SalaUncheckedCreateWithoutTempo_lectivoInput = {
    nome_sala: string
    capacidade: number
  }

  export type SalaCreateOrConnectWithoutTempo_lectivoInput = {
    where: SalaWhereUniqueInput
    create: XOR<SalaCreateWithoutTempo_lectivoInput, SalaUncheckedCreateWithoutTempo_lectivoInput>
  }

  export type DiaSemanaCreateWithoutTempo_lectivoInput = {
    nome_dia: string
    disponibilidades?: DisponibilidadeCreateNestedManyWithoutDiaInput
  }

  export type DiaSemanaUncheckedCreateWithoutTempo_lectivoInput = {
    nome_dia: string
    disponibilidades?: DisponibilidadeUncheckedCreateNestedManyWithoutDiaInput
  }

  export type DiaSemanaCreateOrConnectWithoutTempo_lectivoInput = {
    where: DiaSemanaWhereUniqueInput
    create: XOR<DiaSemanaCreateWithoutTempo_lectivoInput, DiaSemanaUncheckedCreateWithoutTempo_lectivoInput>
  }

  export type PeriodoCreateWithoutTempo_lectivoInput = {
    nome_periodo: string
    disponibilidades?: DisponibilidadeCreateNestedManyWithoutPeriodoInput
  }

  export type PeriodoUncheckedCreateWithoutTempo_lectivoInput = {
    nome_periodo: string
    disponibilidades?: DisponibilidadeUncheckedCreateNestedManyWithoutPeriodoInput
  }

  export type PeriodoCreateOrConnectWithoutTempo_lectivoInput = {
    where: PeriodoWhereUniqueInput
    create: XOR<PeriodoCreateWithoutTempo_lectivoInput, PeriodoUncheckedCreateWithoutTempo_lectivoInput>
  }

  export type ProfessorUpsertWithoutTempo_lectivoInput = {
    update: XOR<ProfessorUpdateWithoutTempo_lectivoInput, ProfessorUncheckedUpdateWithoutTempo_lectivoInput>
    create: XOR<ProfessorCreateWithoutTempo_lectivoInput, ProfessorUncheckedCreateWithoutTempo_lectivoInput>
    where?: ProfessorWhereInput
  }

  export type ProfessorUpdateToOneWithWhereWithoutTempo_lectivoInput = {
    where?: ProfessorWhereInput
    data: XOR<ProfessorUpdateWithoutTempo_lectivoInput, ProfessorUncheckedUpdateWithoutTempo_lectivoInput>
  }

  export type ProfessorUpdateWithoutTempo_lectivoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profDisciplinas?: ProfDisciplinasUpdateManyWithoutProfessorNestedInput
    disponibilidades?: DisponibilidadeUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateWithoutTempo_lectivoInput = {
    id_professor?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profDisciplinas?: ProfDisciplinasUncheckedUpdateManyWithoutProfessorNestedInput
    disponibilidades?: DisponibilidadeUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type TurmaUpsertWithoutTempo_lectivoInput = {
    update: XOR<TurmaUpdateWithoutTempo_lectivoInput, TurmaUncheckedUpdateWithoutTempo_lectivoInput>
    create: XOR<TurmaCreateWithoutTempo_lectivoInput, TurmaUncheckedCreateWithoutTempo_lectivoInput>
    where?: TurmaWhereInput
  }

  export type TurmaUpdateToOneWithWhereWithoutTempo_lectivoInput = {
    where?: TurmaWhereInput
    data: XOR<TurmaUpdateWithoutTempo_lectivoInput, TurmaUncheckedUpdateWithoutTempo_lectivoInput>
  }

  export type TurmaUpdateWithoutTempo_lectivoInput = {
    nome_turma?: StringFieldUpdateOperationsInput | string
    curso?: CursoUpdateOneRequiredWithoutTurmasNestedInput
    classe?: ClasseUpdateOneRequiredWithoutTurmasNestedInput
  }

  export type TurmaUncheckedUpdateWithoutTempo_lectivoInput = {
    nome_turma?: StringFieldUpdateOperationsInput | string
    nome_curso?: StringFieldUpdateOperationsInput | string
    nome_classe?: StringFieldUpdateOperationsInput | string
  }

  export type DisciplinaUpsertWithoutTempo_lectivoInput = {
    update: XOR<DisciplinaUpdateWithoutTempo_lectivoInput, DisciplinaUncheckedUpdateWithoutTempo_lectivoInput>
    create: XOR<DisciplinaCreateWithoutTempo_lectivoInput, DisciplinaUncheckedCreateWithoutTempo_lectivoInput>
    where?: DisciplinaWhereInput
  }

  export type DisciplinaUpdateToOneWithWhereWithoutTempo_lectivoInput = {
    where?: DisciplinaWhereInput
    data: XOR<DisciplinaUpdateWithoutTempo_lectivoInput, DisciplinaUncheckedUpdateWithoutTempo_lectivoInput>
  }

  export type DisciplinaUpdateWithoutTempo_lectivoInput = {
    nome_disciplina?: StringFieldUpdateOperationsInput | string
    profDisciplinas?: ProfDisciplinasUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaUncheckedUpdateWithoutTempo_lectivoInput = {
    nome_disciplina?: StringFieldUpdateOperationsInput | string
    profDisciplinas?: ProfDisciplinasUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type SalaUpsertWithoutTempo_lectivoInput = {
    update: XOR<SalaUpdateWithoutTempo_lectivoInput, SalaUncheckedUpdateWithoutTempo_lectivoInput>
    create: XOR<SalaCreateWithoutTempo_lectivoInput, SalaUncheckedCreateWithoutTempo_lectivoInput>
    where?: SalaWhereInput
  }

  export type SalaUpdateToOneWithWhereWithoutTempo_lectivoInput = {
    where?: SalaWhereInput
    data: XOR<SalaUpdateWithoutTempo_lectivoInput, SalaUncheckedUpdateWithoutTempo_lectivoInput>
  }

  export type SalaUpdateWithoutTempo_lectivoInput = {
    nome_sala?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
  }

  export type SalaUncheckedUpdateWithoutTempo_lectivoInput = {
    nome_sala?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
  }

  export type DiaSemanaUpsertWithoutTempo_lectivoInput = {
    update: XOR<DiaSemanaUpdateWithoutTempo_lectivoInput, DiaSemanaUncheckedUpdateWithoutTempo_lectivoInput>
    create: XOR<DiaSemanaCreateWithoutTempo_lectivoInput, DiaSemanaUncheckedCreateWithoutTempo_lectivoInput>
    where?: DiaSemanaWhereInput
  }

  export type DiaSemanaUpdateToOneWithWhereWithoutTempo_lectivoInput = {
    where?: DiaSemanaWhereInput
    data: XOR<DiaSemanaUpdateWithoutTempo_lectivoInput, DiaSemanaUncheckedUpdateWithoutTempo_lectivoInput>
  }

  export type DiaSemanaUpdateWithoutTempo_lectivoInput = {
    nome_dia?: StringFieldUpdateOperationsInput | string
    disponibilidades?: DisponibilidadeUpdateManyWithoutDiaNestedInput
  }

  export type DiaSemanaUncheckedUpdateWithoutTempo_lectivoInput = {
    nome_dia?: StringFieldUpdateOperationsInput | string
    disponibilidades?: DisponibilidadeUncheckedUpdateManyWithoutDiaNestedInput
  }

  export type PeriodoUpsertWithoutTempo_lectivoInput = {
    update: XOR<PeriodoUpdateWithoutTempo_lectivoInput, PeriodoUncheckedUpdateWithoutTempo_lectivoInput>
    create: XOR<PeriodoCreateWithoutTempo_lectivoInput, PeriodoUncheckedCreateWithoutTempo_lectivoInput>
    where?: PeriodoWhereInput
  }

  export type PeriodoUpdateToOneWithWhereWithoutTempo_lectivoInput = {
    where?: PeriodoWhereInput
    data: XOR<PeriodoUpdateWithoutTempo_lectivoInput, PeriodoUncheckedUpdateWithoutTempo_lectivoInput>
  }

  export type PeriodoUpdateWithoutTempo_lectivoInput = {
    nome_periodo?: StringFieldUpdateOperationsInput | string
    disponibilidades?: DisponibilidadeUpdateManyWithoutPeriodoNestedInput
  }

  export type PeriodoUncheckedUpdateWithoutTempo_lectivoInput = {
    nome_periodo?: StringFieldUpdateOperationsInput | string
    disponibilidades?: DisponibilidadeUncheckedUpdateManyWithoutPeriodoNestedInput
  }

  export type CursoCreateWithoutTurmasInput = {
    nome_curso: string
  }

  export type CursoUncheckedCreateWithoutTurmasInput = {
    nome_curso: string
  }

  export type CursoCreateOrConnectWithoutTurmasInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutTurmasInput, CursoUncheckedCreateWithoutTurmasInput>
  }

  export type ClasseCreateWithoutTurmasInput = {
    nome_classe: string
  }

  export type ClasseUncheckedCreateWithoutTurmasInput = {
    nome_classe: string
  }

  export type ClasseCreateOrConnectWithoutTurmasInput = {
    where: ClasseWhereUniqueInput
    create: XOR<ClasseCreateWithoutTurmasInput, ClasseUncheckedCreateWithoutTurmasInput>
  }

  export type Tempo_LectivoCreateWithoutTurmaInput = {
    ordem?: number
    professor: ProfessorCreateNestedOneWithoutTempo_lectivoInput
    disciplina: DisciplinaCreateNestedOneWithoutTempo_lectivoInput
    sala: SalaCreateNestedOneWithoutTempo_lectivoInput
    dia: DiaSemanaCreateNestedOneWithoutTempo_lectivoInput
    periodo: PeriodoCreateNestedOneWithoutTempo_lectivoInput
  }

  export type Tempo_LectivoUncheckedCreateWithoutTurmaInput = {
    id?: number
    professorId: number
    nome_disciplina: string
    nome_sala: string
    nome_dia: string
    nome_periodo: string
    ordem?: number
  }

  export type Tempo_LectivoCreateOrConnectWithoutTurmaInput = {
    where: Tempo_LectivoWhereUniqueInput
    create: XOR<Tempo_LectivoCreateWithoutTurmaInput, Tempo_LectivoUncheckedCreateWithoutTurmaInput>
  }

  export type Tempo_LectivoCreateManyTurmaInputEnvelope = {
    data: Tempo_LectivoCreateManyTurmaInput | Tempo_LectivoCreateManyTurmaInput[]
    skipDuplicates?: boolean
  }

  export type CursoUpsertWithoutTurmasInput = {
    update: XOR<CursoUpdateWithoutTurmasInput, CursoUncheckedUpdateWithoutTurmasInput>
    create: XOR<CursoCreateWithoutTurmasInput, CursoUncheckedCreateWithoutTurmasInput>
    where?: CursoWhereInput
  }

  export type CursoUpdateToOneWithWhereWithoutTurmasInput = {
    where?: CursoWhereInput
    data: XOR<CursoUpdateWithoutTurmasInput, CursoUncheckedUpdateWithoutTurmasInput>
  }

  export type CursoUpdateWithoutTurmasInput = {
    nome_curso?: StringFieldUpdateOperationsInput | string
  }

  export type CursoUncheckedUpdateWithoutTurmasInput = {
    nome_curso?: StringFieldUpdateOperationsInput | string
  }

  export type ClasseUpsertWithoutTurmasInput = {
    update: XOR<ClasseUpdateWithoutTurmasInput, ClasseUncheckedUpdateWithoutTurmasInput>
    create: XOR<ClasseCreateWithoutTurmasInput, ClasseUncheckedCreateWithoutTurmasInput>
    where?: ClasseWhereInput
  }

  export type ClasseUpdateToOneWithWhereWithoutTurmasInput = {
    where?: ClasseWhereInput
    data: XOR<ClasseUpdateWithoutTurmasInput, ClasseUncheckedUpdateWithoutTurmasInput>
  }

  export type ClasseUpdateWithoutTurmasInput = {
    nome_classe?: StringFieldUpdateOperationsInput | string
  }

  export type ClasseUncheckedUpdateWithoutTurmasInput = {
    nome_classe?: StringFieldUpdateOperationsInput | string
  }

  export type Tempo_LectivoUpsertWithWhereUniqueWithoutTurmaInput = {
    where: Tempo_LectivoWhereUniqueInput
    update: XOR<Tempo_LectivoUpdateWithoutTurmaInput, Tempo_LectivoUncheckedUpdateWithoutTurmaInput>
    create: XOR<Tempo_LectivoCreateWithoutTurmaInput, Tempo_LectivoUncheckedCreateWithoutTurmaInput>
  }

  export type Tempo_LectivoUpdateWithWhereUniqueWithoutTurmaInput = {
    where: Tempo_LectivoWhereUniqueInput
    data: XOR<Tempo_LectivoUpdateWithoutTurmaInput, Tempo_LectivoUncheckedUpdateWithoutTurmaInput>
  }

  export type Tempo_LectivoUpdateManyWithWhereWithoutTurmaInput = {
    where: Tempo_LectivoScalarWhereInput
    data: XOR<Tempo_LectivoUpdateManyMutationInput, Tempo_LectivoUncheckedUpdateManyWithoutTurmaInput>
  }

  export type TurmaCreateManyClasseInput = {
    nome_turma: string
    nome_curso: string
  }

  export type TurmaUpdateWithoutClasseInput = {
    nome_turma?: StringFieldUpdateOperationsInput | string
    curso?: CursoUpdateOneRequiredWithoutTurmasNestedInput
    tempo_lectivo?: Tempo_LectivoUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateWithoutClasseInput = {
    nome_turma?: StringFieldUpdateOperationsInput | string
    nome_curso?: StringFieldUpdateOperationsInput | string
    tempo_lectivo?: Tempo_LectivoUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateManyWithoutClasseInput = {
    nome_turma?: StringFieldUpdateOperationsInput | string
    nome_curso?: StringFieldUpdateOperationsInput | string
  }

  export type TurmaCreateManyCursoInput = {
    nome_turma: string
    nome_classe: string
  }

  export type TurmaUpdateWithoutCursoInput = {
    nome_turma?: StringFieldUpdateOperationsInput | string
    classe?: ClasseUpdateOneRequiredWithoutTurmasNestedInput
    tempo_lectivo?: Tempo_LectivoUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateWithoutCursoInput = {
    nome_turma?: StringFieldUpdateOperationsInput | string
    nome_classe?: StringFieldUpdateOperationsInput | string
    tempo_lectivo?: Tempo_LectivoUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateManyWithoutCursoInput = {
    nome_turma?: StringFieldUpdateOperationsInput | string
    nome_classe?: StringFieldUpdateOperationsInput | string
  }

  export type DisponibilidadeCreateManyDiaInput = {
    id_disponibilidade?: number
    professorId: number
    nome_periodo: string
    ordem: number
  }

  export type Tempo_LectivoCreateManyDiaInput = {
    id?: number
    professorId: number
    nome_turma: string
    nome_disciplina: string
    nome_sala: string
    nome_periodo: string
    ordem?: number
  }

  export type DisponibilidadeUpdateWithoutDiaInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    professor?: ProfessorUpdateOneRequiredWithoutDisponibilidadesNestedInput
    periodo?: PeriodoUpdateOneRequiredWithoutDisponibilidadesNestedInput
  }

  export type DisponibilidadeUncheckedUpdateWithoutDiaInput = {
    id_disponibilidade?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    nome_periodo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type DisponibilidadeUncheckedUpdateManyWithoutDiaInput = {
    id_disponibilidade?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    nome_periodo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type Tempo_LectivoUpdateWithoutDiaInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    professor?: ProfessorUpdateOneRequiredWithoutTempo_lectivoNestedInput
    turma?: TurmaUpdateOneRequiredWithoutTempo_lectivoNestedInput
    disciplina?: DisciplinaUpdateOneRequiredWithoutTempo_lectivoNestedInput
    sala?: SalaUpdateOneRequiredWithoutTempo_lectivoNestedInput
    periodo?: PeriodoUpdateOneRequiredWithoutTempo_lectivoNestedInput
  }

  export type Tempo_LectivoUncheckedUpdateWithoutDiaInput = {
    id?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    nome_turma?: StringFieldUpdateOperationsInput | string
    nome_disciplina?: StringFieldUpdateOperationsInput | string
    nome_sala?: StringFieldUpdateOperationsInput | string
    nome_periodo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type Tempo_LectivoUncheckedUpdateManyWithoutDiaInput = {
    id?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    nome_turma?: StringFieldUpdateOperationsInput | string
    nome_disciplina?: StringFieldUpdateOperationsInput | string
    nome_sala?: StringFieldUpdateOperationsInput | string
    nome_periodo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type ProfDisciplinasCreateManyDisciplinaInput = {
    professorId: number
  }

  export type Tempo_LectivoCreateManyDisciplinaInput = {
    id?: number
    professorId: number
    nome_turma: string
    nome_sala: string
    nome_dia: string
    nome_periodo: string
    ordem?: number
  }

  export type ProfDisciplinasUpdateWithoutDisciplinaInput = {
    professor?: ProfessorUpdateOneRequiredWithoutProfDisciplinasNestedInput
  }

  export type ProfDisciplinasUncheckedUpdateWithoutDisciplinaInput = {
    professorId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfDisciplinasUncheckedUpdateManyWithoutDisciplinaInput = {
    professorId?: IntFieldUpdateOperationsInput | number
  }

  export type Tempo_LectivoUpdateWithoutDisciplinaInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    professor?: ProfessorUpdateOneRequiredWithoutTempo_lectivoNestedInput
    turma?: TurmaUpdateOneRequiredWithoutTempo_lectivoNestedInput
    sala?: SalaUpdateOneRequiredWithoutTempo_lectivoNestedInput
    dia?: DiaSemanaUpdateOneRequiredWithoutTempo_lectivoNestedInput
    periodo?: PeriodoUpdateOneRequiredWithoutTempo_lectivoNestedInput
  }

  export type Tempo_LectivoUncheckedUpdateWithoutDisciplinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    nome_turma?: StringFieldUpdateOperationsInput | string
    nome_sala?: StringFieldUpdateOperationsInput | string
    nome_dia?: StringFieldUpdateOperationsInput | string
    nome_periodo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type Tempo_LectivoUncheckedUpdateManyWithoutDisciplinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    nome_turma?: StringFieldUpdateOperationsInput | string
    nome_sala?: StringFieldUpdateOperationsInput | string
    nome_dia?: StringFieldUpdateOperationsInput | string
    nome_periodo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type DisponibilidadeCreateManyPeriodoInput = {
    id_disponibilidade?: number
    professorId: number
    nome_dia: string
    ordem: number
  }

  export type Tempo_LectivoCreateManyPeriodoInput = {
    id?: number
    professorId: number
    nome_turma: string
    nome_disciplina: string
    nome_sala: string
    nome_dia: string
    ordem?: number
  }

  export type DisponibilidadeUpdateWithoutPeriodoInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    professor?: ProfessorUpdateOneRequiredWithoutDisponibilidadesNestedInput
    dia?: DiaSemanaUpdateOneRequiredWithoutDisponibilidadesNestedInput
  }

  export type DisponibilidadeUncheckedUpdateWithoutPeriodoInput = {
    id_disponibilidade?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    nome_dia?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type DisponibilidadeUncheckedUpdateManyWithoutPeriodoInput = {
    id_disponibilidade?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    nome_dia?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type Tempo_LectivoUpdateWithoutPeriodoInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    professor?: ProfessorUpdateOneRequiredWithoutTempo_lectivoNestedInput
    turma?: TurmaUpdateOneRequiredWithoutTempo_lectivoNestedInput
    disciplina?: DisciplinaUpdateOneRequiredWithoutTempo_lectivoNestedInput
    sala?: SalaUpdateOneRequiredWithoutTempo_lectivoNestedInput
    dia?: DiaSemanaUpdateOneRequiredWithoutTempo_lectivoNestedInput
  }

  export type Tempo_LectivoUncheckedUpdateWithoutPeriodoInput = {
    id?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    nome_turma?: StringFieldUpdateOperationsInput | string
    nome_disciplina?: StringFieldUpdateOperationsInput | string
    nome_sala?: StringFieldUpdateOperationsInput | string
    nome_dia?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type Tempo_LectivoUncheckedUpdateManyWithoutPeriodoInput = {
    id?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    nome_turma?: StringFieldUpdateOperationsInput | string
    nome_disciplina?: StringFieldUpdateOperationsInput | string
    nome_sala?: StringFieldUpdateOperationsInput | string
    nome_dia?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type ProfDisciplinasCreateManyProfessorInput = {
    nome_disciplina: string
  }

  export type DisponibilidadeCreateManyProfessorInput = {
    id_disponibilidade?: number
    nome_dia: string
    nome_periodo: string
    ordem: number
  }

  export type Tempo_LectivoCreateManyProfessorInput = {
    id?: number
    nome_turma: string
    nome_disciplina: string
    nome_sala: string
    nome_dia: string
    nome_periodo: string
    ordem?: number
  }

  export type ProfDisciplinasUpdateWithoutProfessorInput = {
    disciplina?: DisciplinaUpdateOneRequiredWithoutProfDisciplinasNestedInput
  }

  export type ProfDisciplinasUncheckedUpdateWithoutProfessorInput = {
    nome_disciplina?: StringFieldUpdateOperationsInput | string
  }

  export type ProfDisciplinasUncheckedUpdateManyWithoutProfessorInput = {
    nome_disciplina?: StringFieldUpdateOperationsInput | string
  }

  export type DisponibilidadeUpdateWithoutProfessorInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    dia?: DiaSemanaUpdateOneRequiredWithoutDisponibilidadesNestedInput
    periodo?: PeriodoUpdateOneRequiredWithoutDisponibilidadesNestedInput
  }

  export type DisponibilidadeUncheckedUpdateWithoutProfessorInput = {
    id_disponibilidade?: IntFieldUpdateOperationsInput | number
    nome_dia?: StringFieldUpdateOperationsInput | string
    nome_periodo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type DisponibilidadeUncheckedUpdateManyWithoutProfessorInput = {
    id_disponibilidade?: IntFieldUpdateOperationsInput | number
    nome_dia?: StringFieldUpdateOperationsInput | string
    nome_periodo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type Tempo_LectivoUpdateWithoutProfessorInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    turma?: TurmaUpdateOneRequiredWithoutTempo_lectivoNestedInput
    disciplina?: DisciplinaUpdateOneRequiredWithoutTempo_lectivoNestedInput
    sala?: SalaUpdateOneRequiredWithoutTempo_lectivoNestedInput
    dia?: DiaSemanaUpdateOneRequiredWithoutTempo_lectivoNestedInput
    periodo?: PeriodoUpdateOneRequiredWithoutTempo_lectivoNestedInput
  }

  export type Tempo_LectivoUncheckedUpdateWithoutProfessorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_turma?: StringFieldUpdateOperationsInput | string
    nome_disciplina?: StringFieldUpdateOperationsInput | string
    nome_sala?: StringFieldUpdateOperationsInput | string
    nome_dia?: StringFieldUpdateOperationsInput | string
    nome_periodo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type Tempo_LectivoUncheckedUpdateManyWithoutProfessorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_turma?: StringFieldUpdateOperationsInput | string
    nome_disciplina?: StringFieldUpdateOperationsInput | string
    nome_sala?: StringFieldUpdateOperationsInput | string
    nome_dia?: StringFieldUpdateOperationsInput | string
    nome_periodo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type Tempo_LectivoCreateManySalaInput = {
    id?: number
    professorId: number
    nome_turma: string
    nome_disciplina: string
    nome_dia: string
    nome_periodo: string
    ordem?: number
  }

  export type Tempo_LectivoUpdateWithoutSalaInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    professor?: ProfessorUpdateOneRequiredWithoutTempo_lectivoNestedInput
    turma?: TurmaUpdateOneRequiredWithoutTempo_lectivoNestedInput
    disciplina?: DisciplinaUpdateOneRequiredWithoutTempo_lectivoNestedInput
    dia?: DiaSemanaUpdateOneRequiredWithoutTempo_lectivoNestedInput
    periodo?: PeriodoUpdateOneRequiredWithoutTempo_lectivoNestedInput
  }

  export type Tempo_LectivoUncheckedUpdateWithoutSalaInput = {
    id?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    nome_turma?: StringFieldUpdateOperationsInput | string
    nome_disciplina?: StringFieldUpdateOperationsInput | string
    nome_dia?: StringFieldUpdateOperationsInput | string
    nome_periodo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type Tempo_LectivoUncheckedUpdateManyWithoutSalaInput = {
    id?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    nome_turma?: StringFieldUpdateOperationsInput | string
    nome_disciplina?: StringFieldUpdateOperationsInput | string
    nome_dia?: StringFieldUpdateOperationsInput | string
    nome_periodo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type Tempo_LectivoCreateManyTurmaInput = {
    id?: number
    professorId: number
    nome_disciplina: string
    nome_sala: string
    nome_dia: string
    nome_periodo: string
    ordem?: number
  }

  export type Tempo_LectivoUpdateWithoutTurmaInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    professor?: ProfessorUpdateOneRequiredWithoutTempo_lectivoNestedInput
    disciplina?: DisciplinaUpdateOneRequiredWithoutTempo_lectivoNestedInput
    sala?: SalaUpdateOneRequiredWithoutTempo_lectivoNestedInput
    dia?: DiaSemanaUpdateOneRequiredWithoutTempo_lectivoNestedInput
    periodo?: PeriodoUpdateOneRequiredWithoutTempo_lectivoNestedInput
  }

  export type Tempo_LectivoUncheckedUpdateWithoutTurmaInput = {
    id?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    nome_disciplina?: StringFieldUpdateOperationsInput | string
    nome_sala?: StringFieldUpdateOperationsInput | string
    nome_dia?: StringFieldUpdateOperationsInput | string
    nome_periodo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type Tempo_LectivoUncheckedUpdateManyWithoutTurmaInput = {
    id?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    nome_disciplina?: StringFieldUpdateOperationsInput | string
    nome_sala?: StringFieldUpdateOperationsInput | string
    nome_dia?: StringFieldUpdateOperationsInput | string
    nome_periodo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
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