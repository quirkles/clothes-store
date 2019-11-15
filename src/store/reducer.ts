import { IItem } from "../entities";

type eventType = "init-state";

export interface IEvent {
  type: eventType;
  payload?: object;
}

export interface IState {
  items: Map<string, IItem>;
}

const initialState: IState = {
  items: new Map()
};

export default (state: IState = initialState, event: IEvent): IState => {
  switch (event.type) {
    case "init-state":
      return state;
    default:
      return state;
  }
};
