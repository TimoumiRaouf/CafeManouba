import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { AddIngPipe } from './pipes/add-ing-pipe';
import { FirstLetterUppercasePipe } from './pipes/first-letter-uppercase-pipe';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ListProviders } from './list-providers/list-providers';
import { Navbar } from './navbar/navbar';

@NgModule({
  declarations: [
    App,
    Home,
    AddIngPipe,
    FirstLetterUppercasePipe,
    ListProviders,
    Navbar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [App]
})
export class AppModule { }
