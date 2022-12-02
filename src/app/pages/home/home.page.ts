import es from '@angular/common/locales/es';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  /*cdr: any;
  translate: any;
  localeService: any;

  constructor() { this.translate.setDefaultLang(es)}

  language = 0

  onLanguage() {
    this.language = (this.language+1)%2

    switch(this.language) {
      case 0:
        this.translate.setDefaultLang('es');
        this.localeService.registerCulture('es');
        console.log(this.localeService.locale);
        break;
      case 1:
        this.translate.setDefaultLang('en');
        this.localeService.registerCulture('en-uk');
        console.log(this.localeService.locale);
        break;
    }
    this.cdr.detectChanges();
  }
*/
}
