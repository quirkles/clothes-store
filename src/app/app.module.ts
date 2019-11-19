// tslint:disable-next-line:no-submodule-imports
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemListComponent } from "./item-list/item-list.component";
import { ItemComponent } from "./item/item.component";
import { StorefrontComponent } from "./storefront/storefront.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    StorefrontComponent,
    ItemListComponent,
    ItemComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: []
})
export class AppModule {}
