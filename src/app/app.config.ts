import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { withFetch, withInterceptors } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { interceptInterceptor } from './core/interceptors/intercept-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch(),withInterceptors([interceptInterceptor]))
  ]
};
