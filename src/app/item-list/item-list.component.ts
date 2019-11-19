import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-item-list",
  styleUrls: ["./item-list.component.scss"],
  templateUrl: "./item-list.component.html"
})
export class ItemListComponent implements OnInit {
  @Input() public items: any[];

  public ngOnInit(): void {}
}
