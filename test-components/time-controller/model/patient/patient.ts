import { TypeOfItem } from '../share';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TypedItem } from 'src/app/model/share';

export const PatientType = 'patient' as const;

export type Patient = TypeOfItem<
  typeof PatientType,
  string,
  {
    readonly name: string;
    readonly birthday: string;
    readonly gender: string;
  },
  {}
>;

// ---- test start
// 1:
export interface PersonOptional {
  name?: string;
  age?: number;
}

export interface Readyonly {
  readonly name: string;
  readonly age: number;
}

// 2:

export interface Person {
  name: string;
  age: number;
}

export type Optional<T> = {
  [p in keyof T]?: T[p];
};

export type Ready<T> = {
  readonly [p in keyof T]: T[p];
};

export type PersonTest1 = Optional<Person>;
export type PersonTest2 = Ready<Person>;

// ---

// -1 start
type contain0<T> = { value: T };

export interface contain1<T> {
  value: T;
}

export interface contain2 {
  value: string;
}
// -1 end

type NameToString = () => string;

export interface NameToString1 {
  (): string;
}

let a: NameToString = () => 'ss';
let b: NameToString1 = () => 'ss';

// ----
// 交叉类型
type Tree<T> = {
  name: T;
  left: Tree<T>; //?
};

type a = string;
type b = { name: string; age: number };
type c = a & b;
type c1 = c['age'];

interface T1 {
  a: boolean;
  b: string;
}
interface T2 {
  a: boolean;
  b: number;
}
type T = T1 & T2;
type Ta = T['a']; // boolean
type Tb = T['b']; // string & number

// ----------

type aq = { q: 1; w: 2 };
type bq = aq['q'][];
let cq: bq = [1, 1, 1, 1, 1, 1, 1, 1, 1];
let dq: (...ids: bq) => { a: 'any value'; ids: [1, 1, 1, 1] };

// type tu = Observable<string>; // X
// let yq: tu = new Observable<'ss'>(); // X
//let xq = yq.pipe(map(x => x + '11')); // X

// export interface StudyRichQuery {
//   queryBy: (condtion: ConditionType) => Observable<Study['id'][]>;
//   queryAll: () => Observable<Study[]>;
// }

interface Bird {
  eat(): Observable<any>;
}

// export function temp1<T extends { __typename: string }>(source: T) {
//   return source.__typename;
// }

// export interface temp1insert {
//   __typename: string;
// }

// let s = temp1<temp1insert>(source:string);

// observable 类型
export interface Flower {
  name: string;
  age: number;
}

export function getFlower(): Observable<Flower> {
  const test = new Observable<{ name: ''; age: 11 }>();
  return test;
}

// -----------------

function Person(name: any, age: any) {
  name = name;
  age = age;
}

var a11 = Person('s', 's');

type a22 = { name: any; age: any };

type a33 = () => { name: any; age: any };

let a44 = () => ({ name: 11, age: 22 });
// ----------- a22 a33 a44 ?

type NumbersType = [number, number];

const numbersType: NumbersType = [2, 3];

// studyRichQuery

// Study Patient

// messageOfType

export interface UUID<A, B extends { wwqq: string }> {
  name: A;
  age: B;
}

let OOO: UUID<string, { wwqq: string }> = {
  name: '',
  age: { wwqq: '' }
};

// --------------------

export type PatientTTT = TypedItem<
  typeof PatientType,
  string,
  {
    readonly name: string;
    readonly birthday: Date;
    readonly external_id: string;
  },
  {}
>;

export type PatientA = PatientTTT['data'] | { id: string };

let PatientB: PatientA = {
  name: '',
  birthday: new Date(),
  external_id: '',
  id: ''
};

// -----------------
