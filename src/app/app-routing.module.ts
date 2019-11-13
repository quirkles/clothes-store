import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {StorefrontComponent} from './storefront/storefront.component';


const routes: Routes = [
  { path: 'home', component: StorefrontComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
