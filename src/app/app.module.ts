import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { EventsComponent } from './pages/events/events.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SermonComponent } from './pages/sermon/sermon.component';
import { GiveComponent } from './pages/give/give.component';
import { ShopComponent } from './pages/shop/shop.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { MmtComponent } from './pages/mmt/mmt.component';
import { MmtNavComponent } from './pages/mmt-nav/mmt-nav.component';
import { MmtFooterComponent } from './pages/mmt-footer/mmt-footer.component';
import { FormDialogComponent } from './pages/form-dialog/form-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MmtformService } from './services/mmtform.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule } from '@angular/common/http';
import { HeroTextAnimateComponent } from './pages/hero-text-animate/hero-text-animate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EventsComponent,
    ContactComponent,
    SermonComponent,
    GiveComponent,
    ShopComponent,
    FooterComponent,
    HeaderComponent,
    MmtComponent,
    MmtNavComponent,
    MmtFooterComponent,
    FormDialogComponent,
    HeroTextAnimateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    HttpClientModule
  ],
  providers: [MmtformService],
  bootstrap: [AppComponent]
})
export class AppModule { }
