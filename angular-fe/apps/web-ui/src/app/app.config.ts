import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';

import { provideTransloco } from '@ngneat/transloco';

import { APP_ROUTES } from './app.routes';
import { TranslocoHttpLoader } from './core/transloco.loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES, withEnabledBlockingInitialNavigation()),
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: [
          { id: 'en', label: 'English' },
          { id: 'de', label: 'Deutsch' },
        ],
        defaultLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
    importProvidersFrom(BrowserAnimationsModule),
  ],
};
