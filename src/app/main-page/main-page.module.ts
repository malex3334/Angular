import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import {SharedModule} from "../shared/shared.module";
import { FirstPageComponent } from './first-page/first-page.component';


@NgModule({
  declarations: [
    MainPageComponent,
    FirstPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainPageRoutingModule
  ]
})
export class MainPageModule { }
