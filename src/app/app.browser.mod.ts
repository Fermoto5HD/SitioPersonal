// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// libs
import { BrowserStateTransferModule, DEFAULT_STATE_ID } from '@ngx-universal/state-transfer';
import { CACHE } from '@ngx-cache/core';
import { BrowserCacheModule, MemoryCacheService, STATE_ID } from '@ngx-cache/platform-browser';

// modules & components
import { AppModule } from './app.module';
import { AppComponent } from './main-component/main.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'FM5-site'
    }),
    BrowserStateTransferModule.forRoot(),
    BrowserCacheModule.forRoot([
      {
        provide: CACHE,
        useClass: MemoryCacheService
      },
      {
        provide: STATE_ID,
        useValue: DEFAULT_STATE_ID
      }
    ]),
    AppModule
  ]
})
export class AppBrowserModule {
}