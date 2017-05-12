import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FM5HomeComponent } from './fm5-home/fm5-home.component';
import { FM5AboutComponent } from './fm5-about/fm5-about.component';
import { FM5PortfolioComponent } from './fm5-portfolio/fm5-portfolio.component';
import { FM5TraktComponent } from './fm5-trakt/fm5-trakt.component';

export const router: Routes = [
  { path: '', component: FM5HomeComponent, pathMatch: 'full' },
  { path: 'home', component: FM5HomeComponent},
  { path: 'about', component: FM5AboutComponent},
  { path: 'portfolio', component: FM5PortfolioComponent},
  { path: 'trakt', component: FM5TraktComponent}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
