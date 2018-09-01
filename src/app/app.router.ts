import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginGuard } from './guards/login.guard';
import { LoggedGuard } from './guards/logged.guard';
import { BlogGuard } from './guards/blog.guard';
import { WorkGuard } from './guards/work.guard';

import { HomeComponent } from './components/home/landing.component';
import { FM5AboutComponent } from './fm5-about/fm5-about.component';
import { FM5ContactComponent } from './fm5-contact/fm5-contact.component';
import { FM5BlogComponent } from './components/blog/list/fm5-blog.component';
import { FM5BlogPostComponent } from './components/blog/post/fm5-blog-post.component';
import { FM5UXComponent } from './fm5-ux/fm5-ux.component';
import { Error404Component } from './components/error404/landing.component';
import { FM5OpenSourceComponent } from './fm5-opensource/fm5-opensource.component';

// Portfolio
import { PortfolioLandingComponent } from './components/portfolio/landing/landing.component';
import { PortfolioItemComponent } from './components/portfolio/item/item.component';
import { PortfolioItemsComponent } from './components/portfolio/items/items.component';
//import { PortfolioFerrocarrilesAbiertosComponent } from './components/portfolio/ferrocarrilesabiertos/ferrocarrilesabiertos.component';
//import { FM5ProximotrenComponent } from './components/portfolio/proximotren/proximotren.component';
import { FM5Infra1Tp1Component } from './components/portfolio/infra1-tp1/infra1-tp1.component';

// Networks
import { FM5GithubComponent } from './components/networks/fm5-github/fm5-github.component';
import { FM5NetworksComponent } from './components/networks/fm5-networks/fm5-networks.component';
import { NetworkInstagramComponent } from './components/networks/instagram/instagram.component';
import { NetworkFlickrComponent } from './components/networks/flickr/flickr.component';
import { FM5TraktComponent } from './components/networks/fm5-trakt/fm5-trakt.component';
import { FM5MALComponent } from './components/networks/fm5-mal/fm5-mal.component';
import { NetworkYouTubeLandingComponent } from './components/networks/youtube/landing/landing.component';

import { NetworkTwitterLandingComponent } from './components/networks/twitter/landing/landing.component';
import { NetworkFacebookLandingComponent } from './components/networks/facebook/landing/landing.component';

import { AllbrandnewComponent } from './components/allbrandnew/landing.component';
import { FM5WebsiteComponent } from './fm5-website/fm5-website.component';


// Dollars
import { DollarsLoginComponent }          from './thedollars/components/login/login.component';
import { DollarsLeaderComponent }         from './thedollars/components/leader/main.component';
import { DollarsDashboardComponent }      from './thedollars/components/ikebukuro/main.component';
import { DollarsBlogComponent }           from './thedollars/components/blog/list/list.component';
import { DollarsBlogEditComponent }       from './thedollars/components/blog/edit/edit.component';
import { DollarsPortfolioListComponent }  from './thedollars/components/portfolio/list/list.component';
import { DollarsInboxComponent }          from './thedollars/components/inbox/inbox.component';

export const router: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: FM5AboutComponent},
  { path: 'contact', component: FM5ContactComponent},
  { path: 'blog', component: FM5BlogComponent },
  { path: 'blog/:slug', component: FM5BlogPostComponent, canActivate: [BlogGuard] },
  { path: 'FM5strap', redirectTo: 'FM5UX'},
  { path: 'FM5UX', component: FM5UXComponent},
  { path: 'allbrandnew', component: AllbrandnewComponent },
  { path: 'website', component: FM5WebsiteComponent },
  { path: 'opensource', component: FM5OpenSourceComponent },
  
  { path: 'networks', component: FM5NetworksComponent},
  { path: 'instagram', component: NetworkInstagramComponent},
  { path: 'flickr', component: NetworkFlickrComponent},
  { path: 'trakt', component: FM5TraktComponent},
  { path: 'mal', component: FM5MALComponent},
  { path: 'github', component: FM5GithubComponent},
  { path: 'youtube', component: NetworkYouTubeLandingComponent },
  { path: 'facebook', component: NetworkFacebookLandingComponent },

  { path: 'twitter', component: NetworkTwitterLandingComponent },

  { path: 'portfolio', component: PortfolioLandingComponent},
  //{ path: 'portfolio/personal/ferrocarrilesabiertos', component: FM5FerrocarrilesAbiertosComponent},
  //{ path: 'portfolio/personal/proximotren', component: PortfolioProximotrenComponent },
  { path: 'portfolio/cursadaUNSAM/infra1-tp1', component: FM5Infra1Tp1Component },
  { path: 'portfolio/work/:slug', component: PortfolioItemComponent, canActivate: [WorkGuard] },
  { path: 'portfolio/work/:slug/:version', component: PortfolioItemComponent, canActivate: [WorkGuard] },

  { path: 'thedollars', component: DollarsLoginComponent, canActivate: [LoggedGuard] },
  { path: 'thedollars/leader', component: DollarsLeaderComponent, canActivate: [LoginGuard] },
  { path: 'thedollars/blog', component: DollarsBlogComponent, canActivate: [LoginGuard] },
  { path: 'thedollars/blog/edit/:slug', component: DollarsBlogEditComponent, canActivate: [LoginGuard] },
  { path: 'thedollars/portfolio', component: DollarsPortfolioListComponent, canActivate: [LoginGuard] },
  { path: 'thedollars/inbox', component: DollarsInboxComponent, canActivate: [LoginGuard] },

  { path: '**', component: Error404Component }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
