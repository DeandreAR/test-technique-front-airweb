import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import {DataMobilityService } from './services/data-mobility.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart/shopping-cart.component';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'panier', component: ShoppingCartComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [DataMobilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
