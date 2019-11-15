import { Injectable } from "@angular/core";
import store, { IStore } from "../../store";
import { IEvent } from "../../store/reducer";

@Injectable()
export class StoreService {
  // Observable string streams
  private store: IStore = store;

  constructor() {
    store.init();
  }

  // Service message commands
  public subscribe(subscriber) {
    this.store.subscribe(subscriber);
  }

  public dispatch(event: IEvent) {
    this.store.handleEvent(event);
  }
}
