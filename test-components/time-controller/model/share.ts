import { Observable } from 'rxjs';

export interface TagID<Tag, ID> {
  readonly tag: Tag;
  readonly id: ID;
}

export interface TypeOfItem<T, ID, D, R> extends TagID<T, ID> {
  readonly data: D;
  readonly relation: R;
}

export interface StoreService<T extends TagID<string, {}>> {
    queryMany: Observable<T[]>;
    updateMany: Observable<T[]>;
//   queryMany(...ids: T['id'][]): Observable<T[]>;
//   createMany(...models: T[]): Observable<T[]>;
//   deleteMany(...ids: T['id'][]): Observable<T['id'][]>;
//   updateMany(...items: T[]): Observable<T[]>;
}
