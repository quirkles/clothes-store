import { Component, OnInit } from "@angular/core";

import { StoreService } from "./services/store.service";

@Component({
  providers: [StoreService],
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  constructor(private storeService: StoreService) {}

  public ngOnInit() {
    const service = this.storeService;
    setTimeout(() => service.dispatch({ type: "init-state" }), 2000);
  }
}
