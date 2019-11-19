// tslint:disable-next-line:no-submodule-imports
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Map } from "immutable";
import { v4 } from "uuid";

import { throwError } from "rxjs";
// tslint:disable-next-line:no-submodule-imports
import { catchError } from "rxjs/operators";

import { IRequestParams } from "../app/services/data/request";
import { environment } from "../environments/environment";
import { Reducer, stateUpdaterMap, Store } from "./index";

const { apiUrl } = environment;

export const clothesUpdater: stateUpdaterMap = Map({
  "dummy-event": () => Map({ items: Map({ fake: true }) }),
  "init-store": () => Map({ items: Map({}) }),
  // tslint:disable-next-line:object-literal-sort-keys
  "clothes-requested": (state, event) => {
    const { payload }: any = event;
    return state.setIn(["pendingRequests", payload.requestId], Map(payload.params));
  },
  "clothes-request-errored": (state, event) => {
    // tslint:disable-next-line:no-console
    console.log("REQUEST ERROR"); // eslint-disable-line
    return state;
  },
  "clothes-request-complete": (state, event) => {
    // tslint:disable-next-line:no-console
    console.log("REQUEST COMPLETE"); // eslint-disable-line
    return state;
  }
});

export class ClothesStore extends Store {
  constructor(private http: HttpClient) {
    super(new Reducer(clothesUpdater));
  }

  public fetchClothes(params: IRequestParams = { count: 10, offset: 0 }) {
    const requestId = v4();
    this.dispatch({
      payload: { params, requestId },
      type: "clothes-requested"
    });
    this.http
      .get(`${apiUrl}/clothes?q=${JSON.stringify(params)}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.dispatch({
            payload: error,
            type: "clothes-request-errored"
          });
          return throwError("Something bad happened; please try again later.");
        })
      )
      .subscribe(data =>
        this.dispatch({
          payload: data,
          type: "clothes-request-complete"
        })
      );
  }
}
