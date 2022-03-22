import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    MenuComponent,
    TranslateModule
  ]
})
export class SharedModule { }
