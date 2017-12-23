import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginGuard } from './guards/login.guard';
import { BlogGuard } from './guards/blog.guard';

import { FM5HomeComponent } from './fm5-home/fm5-home.component';
import { FM5AboutComponent } from './fm5-about/fm5-about.component';
import { FM5ContactComponent } from './fm5-contact/fm5-contact.component';
import { FM5PortfolioComponent } from './fm5-portfolio/fm5-portfolio.component';
import { FM5GithubComponent } from './fm5-github/fm5-github.component';
import { FM5FerrocarrilesAbiertosComponent } from './fm5-ferrocarrilesabiertos/fa-main/fm5-ferrocarrilesabiertos.component';
import { FAApiSofseComponent } from './fm5-ferrocarrilesabiertos/fa-api-sofse/fa-api-sofse.component';
import { FM5BlogComponent } from './fm5-blog/fm5-blog.component';
import { FM5BlogPostComponent } from './fm5-blog-post/fm5-blog-post.component';
import { FM5NetworksComponent } from './fm5-networks/fm5-networks.component';
import { FM5InstagramComponent } from './fm5-instagram/fm5-instagram.component';
import { FM5FlickrComponent } from './fm5-flickr/fm5-flickr.component';
import { FM5TraktComponent } from './fm5-trakt/fm5-trakt.component';
import { FM5MALComponent } from './fm5-mal/fm5-mal.component';
import { FM5YoutubeComponent } from './fm5-youtube/fm5-youtube.component';
import { FM5UXComponent } from './fm5-ux/fm5-ux.component';
import { FM5Infra1Tp1Component } from './fm5-infra1-tp1/fm5-infra1-tp1.component';
import { FM5ProximotrenComponent } from './fm5-proximotren/fm5-proximotren.component';
import { FM5Error404Component } from './fm5-error404/fm5-error404.component';
import { FM5OpenSourceComponent } from './fm5-opensource/fm5-opensource.component';

import { FM5AllbrandnewComponent } from './fm5-allbrandnew/fm5-allbrandnew.component';
import { FM5WebsiteComponent } from './fm5-website/fm5-website.component';

import { FM5LoginComponent } from './fm5-login/fm5-login.component';

// Backend
import { FM5DollarsIkebukuroComponent } from './fm5-dollars-ikebukuro/fm5-dollars-ikebukuro.component';

export const router: Routes = [
  { path: '', component: FM5HomeComponent, pathMatch: 'full' },
  { path: 'home', component: FM5HomeComponent},
  { path: 'about', component: FM5AboutComponent},
  { path: 'contact', component: FM5ContactComponent},
  { path: 'portfolio', component: FM5PortfolioComponent},
  { path: 'github', component: FM5GithubComponent},
  { path: 'blog', component: FM5BlogComponent },
  { path: 'blog/:slug', component: FM5BlogPostComponent, canActivate: [BlogGuard] },
  { path: 'ferrocarrilesabiertos', component: FM5FerrocarrilesAbiertosComponent},
  { path: 'ferrocarrilesabiertos/APIs/sofse', component: FAApiSofseComponent},
  { path: 'networks', component: FM5NetworksComponent},
  { path: 'instagram', component: FM5InstagramComponent},
  { path: 'flickr', component: FM5FlickrComponent},
  { path: 'trakt', component: FM5TraktComponent},
  { path: 'mal', component: FM5MALComponent},
  { path: 'FM5strap', redirectTo: 'FM5UX'},
  { path: 'FM5UX', component: FM5UXComponent},
  { path: 'portfolio/cursadaUNSAM/infra1-tp1', component: FM5Infra1Tp1Component },
  { path: 'portfolio/proximotren', component: FM5ProximotrenComponent },
  { path: 'allbrandnew', component: FM5AllbrandnewComponent },
  { path: 'website', component: FM5WebsiteComponent },
  { path: 'youtube', component: FM5YoutubeComponent },
  { path: 'opensource', component: FM5OpenSourceComponent },

  { path: '_josephxcaesar', component: FM5LoginComponent },
  { path: '_caesarbestsenpai', component: FM5LoginComponent },
  { path: 'thedollars', component: FM5LoginComponent },
  { path: 'thedollars/ikebukuro', component: FM5DollarsIkebukuroComponent, canActivate: [LoginGuard] },

  { path: '**', component: FM5Error404Component }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
