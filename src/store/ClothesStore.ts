import { Map } from "immutable";

import { Reducer, stateUpdaterMap, Store } from "./index";

export const clothesUpdater: stateUpdaterMap = Map({
  "dummy-event": () => Map({ items: Map({ fake: true }) }),
  "init-store": () => Map({ items: Map({}) })
});

export class ClothesStore extends Store {
  constructor() {
    super(new Reducer(clothesUpdater));
  }
}
