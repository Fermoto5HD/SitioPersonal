import { BrowserModule } from '@angular/platform-browser';
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
import { FM5BlogComponent } from './fm5-blog/fm5-blog.component';
import { FM5BlogPostComponent } from './fm5-blog-post/fm5-blog-post.component';
import { FM5ContactComponent } from './fm5-contact/fm5-contact.component';
import { FM5HomeComponent } from './fm5-home/fm5-home.component';
import { FM5TraktComponent } from './fm5-trakt/fm5-trakt.component';
import { FM5PortfolioComponent } from './fm5-portfolio/fm5-portfolio.component';
import { FM5FerrocarrilesAbiertosComponent } from './fm5-ferrocarrilesabiertos/fa-main/fm5-ferrocarrilesabiertos.component';
import { FAApiSofseComponent } from './fm5-ferrocarrilesabiertos/fa-api-sofse/fa-api-sofse.component';
import { FM5UXComponent } from './fm5-ux/fm5-ux.component';
import { FM5Infra1Tp1Component } from './fm5-infra1-tp1/fm5-infra1-tp1.component';
import { FM5ProximotrenComponent } from './fm5-proximotren/fm5-proximotren.component';
import { FM5LoginComponent } from './fm5-login/fm5-login.component';
import { FM5Error404Component } from './fm5-error404/fm5-error404.component';
import { FM5InstagramComponent } from './fm5-instagram/fm5-instagram.component';
import { FM5FlickrComponent } from './fm5-flickr/fm5-flickr.component';
import { FM5AllbrandnewComponent } from './fm5-allbrandnew/fm5-allbrandnew.component';
import { FM5WebsiteComponent } from './fm5-website/fm5-website.component';
import { FM5YoutubeComponent } from './fm5-youtube/fm5-youtube.component';
import { FM5LoadingComponent } from './fm5-loading/fm5-loading.component';
import { FM5DollarsIkebukuroComponent } from './fm5-dollars-ikebukuro/fm5-dollars-ikebukuro.component';
import { FM5GithubComponent } from './fm5-github/fm5-github.component';
import { FM5DollarsBlogComponent } from './fm5-dollars-blog/fm5-dollars-blog.component';
import { FM5NetworksComponent } from './fm5-networks/fm5-networks.component';
import { FM5MALComponent } from './fm5-mal/fm5-mal.component';
import { FM5OpenSourceComponent } from './fm5-opensource/fm5-opensource.component';
import { FM5TwitterComponent } from './fm5-twitter/fm5-twitter.component';

// Directives
import { AlertDirective } from './directives/alert.directive';

// Components
import { FM5JumbotronComponent } from './fm5-jumbotron/fm5-jumbotron.component';
import { FM5RepositoriesComponent } from './fm5-repositories/fm5-repositories.component';
import { FM5BlogPostDisqusComponent } from './fm5-blog-post-disqus/fm5-blog-post-disqus.component';
import { FM5PortfolioGridComponent } from './fm5-portfolio-grid/fm5-portfolio-grid.component';
import { FM5TweetsComponent } from './fm5-tweets/fm5-tweets.component';
import { FM5IASComponent } from './fm5-ias/fm5-ias.component';

// Guards
import { LoginGuard } from './guards/login.guard';
import { BlogGuard } from './guards/blog.guard';

// Services
import { FM5IASService } from './services/fm5-ias.service';
import { FM5BlogService } from './services/fm5-blog.service';
import { FM5HamonService } from './services/fm5-hamon.service';
import { FM5InstagramService } from './services/fm5-instagram.service';
import { FM5FlickrService } from './services/fm5-flickr.service';
import { FM5PortfolioService } from './services/fm5-portfolio.service';
import { FM5YoutubeService } from './services/fm5-youtube.service';
import { FM5TraktService } from './services/fm5-trakt.service';
import { FM5MALService } from './services/fm5-mal.service';
import { FM5NoEncontradoService } from './services/fm5-noencontrado.service';
import { FM5GithubService } from './services/fm5-github.service';
import { FM5TwitterService } from './services/fm5-twitter.service';

@NgModule({
  declarations: [
    AppComponent,
    FM5PortfolioComponent,
    FM5AboutComponent,
    FM5ContactComponent,
    FM5HomeComponent,
    FM5BlogComponent,
    FM5TraktComponent,
    FM5MALComponent,
    FM5FerrocarrilesAbiertosComponent,
    FM5UXComponent,
    FM5Infra1Tp1Component,
    FM5ProximotrenComponent,
    FM5BlogPostComponent,
    FM5LoginComponent,
    FM5Error404Component,
    FAApiSofseComponent,
    FM5InstagramComponent,
    FM5FlickrComponent,
    FM5AllbrandnewComponent,
    FM5WebsiteComponent,
    FM5YoutubeComponent,
    FM5PortfolioGridComponent,
    FM5LoadingComponent,
    AlertDirective,
    FM5DollarsIkebukuroComponent,
    FM5RepositoriesComponent,
    FM5GithubComponent,
    FM5BlogPostDisqusComponent,
    FM5DollarsBlogComponent,
    FM5NetworksComponent,
    FM5OpenSourceComponent,
    FM5TwitterComponent,
    FM5TweetsComponent,
    FM5JumbotronComponent,
    FM5IASComponent
  ],
  imports: [
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
    FM5IASService,
    FM5BlogService, 
    FM5HamonService, 
    FM5InstagramService, 
    FM5FlickrService, 
    FM5PortfolioService, 
    FM5TraktService,
    FM5MALService,
    FM5YoutubeService, 
    FM5NoEncontradoService,
    FM5GithubService,
    FM5TwitterService,
    LoginGuard,
    BlogGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
