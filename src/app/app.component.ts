import { Component, OnInit } from "@angular/core";
import { ClothesStore } from "../store/ClothesStore";

@Component({
  providers: [ClothesStore],
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  constructor(private clothesStore: ClothesStore) {}

  public ngOnInit(): void {
    setTimeout(() => this.clothesStore.dispatch({ type: "dummy-event" }), 500);
  }
}
