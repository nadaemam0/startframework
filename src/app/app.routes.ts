import { AboutComponent } from './about/about.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'home' },
  { path: 'about', component: AboutComponent, title: 'about' },
  { path: 'portifolio', component: PortifolioComponent, title: 'portifolio' },
  { path: 'contact', component: ContactComponent, title: 'contact' },
  { path: '**', component: NotfoundComponent, title: 'notfound' },
];
