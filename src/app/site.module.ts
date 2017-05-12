import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './site.router';

import { AppComponent } from './main-component/main.component';
import { FM5PortfolioComponent } from './fm5-portfolio/fm5-portfolio.component';
import { PortfolioService } from './portfolio.service';
import { FM5AboutComponent } from './fm5-about/fm5-about.component';
import { FM5HomeComponent } from './fm5-home/fm5-home.component';
import { Fm5BlogComponent } from './fm5-blog/fm5-blog.component';
import { FM5TraktComponent } from './fm5-trakt/fm5-trakt.component';
import { FM5TraktService } from './fm5-trakt.service';
import { Fm5FerrocarrilesabiertosComponent } from './fm5-ferrocarrilesabiertos/fm5-ferrocarrilesabiertos.component';

@NgModule({
  declarations: [
    AppComponent,
    FM5PortfolioComponent,
    FM5AboutComponent,
    FM5HomeComponent,
    Fm5BlogComponent,
    FM5TraktComponent,
    Fm5FerrocarrilesabiertosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [PortfolioService, FM5TraktService],
  bootstrap: [AppComponent]
})
export class AppModule { }
