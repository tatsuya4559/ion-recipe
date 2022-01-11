import { of, defer, concat, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

export abstract class AbstractResource<T> {
  private _resource: T;

  get resource(): T {
    return this._resource;
  }

  set resource(newResource: T) {
    this._resource = newResource;
    this.changed$.next();
  }

  changed$ = new Subject<void>();

  resource$ = concat(
    defer(() => of(this.resource)),
    this.changed$.pipe(map(() => this.resource))
  );
}
