import { Component } from "@angular/core";
import { ClothesStore } from "../store/ClothesStore";

@Component({
  providers: [ClothesStore],
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent {
  constructor(private clothesStore: ClothesStore) {}
}
