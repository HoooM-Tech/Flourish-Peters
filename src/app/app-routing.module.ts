import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EventsComponent } from './pages/events/events.component';
import { GiveComponent } from './pages/give/give.component';
import { ShopComponent } from './pages/shop/shop.component';
import { MmtComponent } from './pages/mmt/mmt.component';
import { SermonComponent } from './pages/sermon/sermon.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'about-flourish-peters', component: AboutComponent},
  {path: 'contact-us', component: ContactComponent},
  {path: 'our-events', component: EventsComponent},
  {path: 'support', component: GiveComponent},
  {path: 'much-more-tribe', component: MmtComponent},
  {path: 'sermon', component: SermonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Enables scrolling to top
    anchorScrolling: 'enabled', // Optional: Enables anchor links
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
