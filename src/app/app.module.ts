import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DisqusModule } from "ngx-disqus";
import { routes } from './app.router';

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';

import { AppComponent } from './main-component/main.component';
import { FM5AboutComponent } from './fm5-about/fm5-about.component';
import { FM5ContactComponent } from './fm5-contact/fm5-contact.component';
import { HomeComponent } from './components/home/landing.component';
import { FM5UXComponent } from './fm5-ux/fm5-ux.component';
import { Error404Component } from './components/error404/landing.component';
import { AllbrandnewComponent } from './components/allbrandnew/landing.component';
import { FM5WebsiteComponent } from './fm5-website/fm5-website.component';
import { FM5LoadingComponent } from './fm5-loading/fm5-loading.component';
import { FM5OpenSourceComponent } from './fm5-opensource/fm5-opensource.component';

import { FM5BlogComponent } from './components/blog/list/fm5-blog.component';
import { FM5BlogPostComponent } from './components/blog/post/fm5-blog-post.component';

import { PortfolioFerrocarrilesAbiertosComponent } from './components/portfolio/ferrocarrilesabiertos/ferrocarrilesabiertos.component';
import { PortfolioProximotrenComponent } from './components/portfolio/proximotren/proximotren.component';
import { FM5Infra1Tp1Component } from './components/portfolio/infra1-tp1/infra1-tp1.component';

import { FM5TraktComponent } from './components/networks/fm5-trakt/fm5-trakt.component';
import { NetworkInstagramComponent } from './components/networks/instagram/instagram.component';
import { NetworkFlickrComponent } from './components/networks/flickr/flickr.component';

import { NetworkYouTubeLandingComponent } from './components/networks/youtube/landing/landing.component';

import { NetworkFacebookLandingComponent } from './components/networks/facebook/landing/landing.component';

import { FM5NetworksComponent } from './components/networks/fm5-networks/fm5-networks.component';
import { FM5GithubComponent } from './components/networks/fm5-github/fm5-github.component';
import { FM5MALComponent } from './components/networks/fm5-mal/fm5-mal.component';
import { NetworkTwitterListComponent } from './components/networks/twitter/list/list.component';
import { FM5TwitterComponent } from './components/networks/fm5-twitter/fm5-twitter.component';
import { NetworkTwitterLandingComponent } from './components/networks/twitter/landing/landing.component';

import { DollarsLoginComponent } from './thedollars/components/login/login.component';

import { DollarsDashboardComponent }   from './thedollars/components/ikebukuro/main.component';
import { DollarsLeaderComponent } from './thedollars/components/leader/main.component';
import { DollarsBlogComponent } from './thedollars/components/blog/list/list.component';
import { DollarsBlogEditComponent } from './thedollars/components/blog/edit/edit.component';

// Directives
import { AlertDirective } from './directives/alert.directive';

// Components
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { FM5RepositoriesComponent } from './fm5-repositories/fm5-repositories.component';
import { FM5BlogPostDisqusComponent } from './components/blog/post-disqus/fm5-blog-post-disqus.component';

import { PortfolioLandingComponent } from './components/portfolio/landing/landing.component';
import { PortfolioItemComponent } from './components/portfolio/item/item.component';
import { PortfolioItemsComponent } from './components/portfolio/items/items.component';

import { IASComponent } from './components/ias/ias.component';

import { Fm5IasImpressionComponent } from './fm5-ias-impression/fm5-ias-impression.component';

// Guards
import { LoginGuard }         from './guards/login.guard';
import { LoggedGuard }        from './guards/logged.guard';
import { BlogGuard }          from './guards/blog.guard';
import { WorkGuard }          from './guards/work.guard';

// Services
import { APIService }         from './services/api.service';
import { NetworksService }    from './services/networks.service';
import { DollarsService }     from './services/dollars.service';
import { CeltyService }       from './services/celty.service';
import { FM5TraktService } from './services/fm5-trakt.service';
import { FM5MALService } from './services/fm5-mal.service';
import { FM5NoEncontradoService } from './services/fm5-noencontrado.service';
import { FM5GithubService } from './services/fm5-github.service';

import { DollarsPortfolioListComponent } from './thedollars/components/portfolio/list/list.component';
import { DollarsInboxComponent } from './thedollars/components/inbox/inbox.component';
import { DollarsJumbotronComponent } from './thedollars/components/jumbotron/main.component';

import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioLandingComponent,
    PortfolioItemsComponent,
    PortfolioItemComponent,
    FM5AboutComponent,
    FM5ContactComponent,
    HomeComponent,
    FM5BlogComponent,
    FM5TraktComponent,
    FM5MALComponent,
    PortfolioFerrocarrilesAbiertosComponent,
    PortfolioProximotrenComponent,
    FM5UXComponent,
    FM5Infra1Tp1Component,
    FM5BlogPostComponent,
    Error404Component,
    NetworkInstagramComponent,
    NetworkFlickrComponent,
    AllbrandnewComponent,
    FM5WebsiteComponent,
    NetworkYouTubeLandingComponent,
    FM5LoadingComponent,
    AlertDirective,
    DollarsLoginComponent,
    DollarsDashboardComponent,
    DollarsJumbotronComponent,
    DollarsLeaderComponent,
    DollarsBlogComponent,
    DollarsBlogEditComponent,
    DollarsPortfolioListComponent,
    DollarsInboxComponent,
    FM5RepositoriesComponent,
    FM5GithubComponent,
    FM5BlogPostDisqusComponent,
    FM5NetworksComponent,
    FM5OpenSourceComponent,
    FM5TwitterComponent,
    NetworkTwitterListComponent,
    JumbotronComponent,
    IASComponent,
    Fm5IasImpressionComponent,
    AboutComponent,
    NetworkTwitterLandingComponent,
    NetworkFacebookLandingComponent
  ],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({appId: 'fm5hd-site'}),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routes,
    NgbModule.forRoot(),
    DisqusModule.forRoot('fermoto5hd'),
    HttpClientModule,
    Angulartics2Module.forRoot([Angulartics2GoogleTagManager]),
  ],
  providers: [
    APIService,
    FM5TraktService,
    FM5MALService,
    FM5NoEncontradoService,
    FM5GithubService,
    NetworksService,
    DollarsService,
    CeltyService,
    LoginGuard,
    LoggedGuard,
    BlogGuard,
    WorkGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
