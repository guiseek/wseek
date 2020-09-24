import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeBrExtra from '@angular/common/locales/extra/br';
import localeBr from '@angular/common/locales/pt';

export class AppLocale {
  static forRoot(localeId = 'pt-BR') {
    registerLocaleData(localeBr, localeId, localeBrExtra);
    return [
      { provide: LOCALE_ID, useValue: localeId },
      { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    ];
  }
}
