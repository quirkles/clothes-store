import { last } from "ramda";
import { Subject } from "rxjs";

import reducer, { IEvent } from "./reducer";

export interface IStore {
  handleEvent(event: IEvent): void;
  init(): void;
  subscribe(subscriber: (...a: any[]) => any): void;
}

const subject = new Subject();

const stateHistory = [];

const storeProto = {
  handleEvent(event) {
    const oldState = last(stateHistory);
    const newState = reducer(oldState, event);
    // tslint:disable-next-line:no-console
    stateHistory.push(newState);
    subject.next(newState);
  },
  init() {
    // tslint:disable-next-line:no-debugger
    this.handleEvent("init-store");
  },
  subscribe(setState) {
    subject.subscribe(setState);
  }
};

export default Object.create(storeProto);
