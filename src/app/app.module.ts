import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StorefrontComponent } from "./storefront/storefront.component";
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, StorefrontComponent, ItemListComponent, ItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: []
})
export class AppModule {}
