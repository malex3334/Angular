import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  currentPageName: string = '';

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
  }

  changeLanguage(): void {
    const defaultLang = this.translateService.getDefaultLang();
    this.translateService.setDefaultLang((defaultLang === 'en') ? 'pl' : 'en')
  }
}
