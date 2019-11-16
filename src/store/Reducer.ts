import { List, Map as iMap } from "immutable";
import { identity } from "ramda";

import { IEvent } from "./index";

export type stateUpdaterMap = iMap<
  string,
  (oldState: IState, event?: IEvent) => IState
>;

type IState = iMap<any, any>;

export class Reducer {
  private stateHistory: List<IState>;
  private stateUpdaterMap: stateUpdaterMap;

  constructor(stateUpdater: stateUpdaterMap, initialState: IState = iMap({})) {
    this.stateUpdaterMap = stateUpdater;
    this.stateHistory = List([initialState]);
  }

  public dispatch(event: IEvent): IState {
    const updater = this.stateUpdaterMap.get(event.type, identity);
    const oldState = this.stateHistory.last();
    const newState = updater(oldState, event);
    this.stateHistory = this.stateHistory.push(newState);
    return newState;
  }
}
