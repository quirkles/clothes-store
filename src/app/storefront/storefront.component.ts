import { Component, OnInit } from "@angular/core";
import { StoreService } from "../services/store.service";

@Component({
  selector: "app-storefront",
  styleUrls: ["./storefront.component.scss"],
  templateUrl: "./storefront.component.html"
})
export class StorefrontComponent implements OnInit {
  constructor(private storeService: StoreService) {}

  public ngOnInit() {
    // tslint:disable-next-line:no-console
    this.storeService.subscribe(state => console.log(state));
  }
}
