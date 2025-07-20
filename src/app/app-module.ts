import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { AddIngPipe } from './pipes/add-ing-pipe';
import { FirstLetterUppercasePipe } from './pipes/first-letter-uppercase-pipe';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { ListProviders } from './list-providers/list-providers';
import { Navbar } from './navbar/navbar';
import { AddProvider } from './add-provider/add-provider';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Home,
    AddIngPipe,
    FirstLetterUppercasePipe,
    ListProviders,
    Navbar,
    AddProvider
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(withFetch(), withInterceptorsFromDi())
  ],
  bootstrap: [App]
})
export class AppModule { }
