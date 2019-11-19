import { Map } from "immutable";
import { Subject } from "rxjs";

import { Reducer } from "./Reducer";

export interface IEvent {
  type: string;
  payload?: object;
}

export interface IStore {
  dispatch(event: IEvent): void;
  subscribe(subscriber: (...a: any[]) => any): void;
}

export class Store implements IStore {
  private subject: Subject<Map<any, any>> = new Subject();
  private reducer: Reducer;

  constructor(reducer: Reducer) {
    this.reducer = reducer;
  }

  public dispatch(event: IEvent) {
    this.subject.next(this.reducer.dispatch(event));
  }
  public subscribe(setState) {
    this.subject.subscribe(setState);
  }
}
