import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule, myRoutings } from './app-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DonateComponent } from './donate/donate.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ServiceComponent } from './service/service.component';
import { SupportComponent } from './support/support.component';
import { CourselComponentComponent } from './coursel-component/coursel-component.component';
import { CarouselModule } from 'primeng/carousel';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { ReusableButtonComponent } from './reusable-button/reusable-button.component';
import { ReusableFooterComponent } from './reusable-footer/reusable-footer.component';
import { ReusableTestimonialsComponent } from './reusable-testimonials/reusable-testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactUsComponent,
    DonateComponent,
    GalleryComponent,
    HomeComponent,
    NavigationBarComponent,
    ServiceComponent,
    SupportComponent,
    ...myRoutings,
    CourselComponentComponent,
    ProgressBarComponent,
    ReusableButtonComponent,
    ReusableFooterComponent,
    ReusableTestimonialsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CarouselModule, ProgressBarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
