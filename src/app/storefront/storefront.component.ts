import { Component, OnInit } from "@angular/core";
import { ClothesStore } from "../../store/ClothesStore";

@Component({
  selector: "app-storefront",
  styleUrls: ["./storefront.component.scss"],
  templateUrl: "./storefront.component.html"
})
export class StorefrontComponent implements OnInit {
  private items: Map<string, any>;

  constructor(private storeService: ClothesStore) {}

  public ngOnInit() {
    // tslint:disable-next-line:no-console
    this.storeService.subscribe(this.setState.bind(this));
  }

  private setState(state) {
    // tslint:disable-next-line:no-console
    console.log("yesssss"); // eslint-disable-line
    // tslint:disable-next-line:no-console
    console.log(state); // eslint-disable-line
    this.items = state.items;
  }
}
