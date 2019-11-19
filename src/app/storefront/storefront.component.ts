import { Component, OnInit } from "@angular/core";
import { ClothesStore } from "../../store/ClothesStore";

@Component({
  selector: "app-storefront",
  styleUrls: ["./storefront.component.scss"],
  templateUrl: "./storefront.component.html"
})
export class StorefrontComponent implements OnInit {
  private items: Map<string, any>;

  constructor(private clothesService: ClothesStore) {}

  public ngOnInit() {
    // tslint:disable-next-line:no-console
    this.clothesService.subscribe(this.setState.bind(this));
    this.clothesService.fetchClothes();
  }

  private setState(state) {
    // tslint:disable-next-line:no-console
    console.log(state.toJS()) //eslint-disable-line
    this.items = state.items;
  }
}
