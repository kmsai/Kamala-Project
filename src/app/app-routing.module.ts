import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SupportComponent } from './support/support.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DonateComponent } from './donate/donate.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home',component: HomeComponent},
{path:'about',component: AboutComponent},
{path:'service',component: ServiceComponent},
{path:'gallery',component:GalleryComponent},
{path:'support',component: SupportComponent},
{path:'contact',component:ContactUsComponent},
{path:'donate',component:DonateComponent},
{path:'',redirectTo:'home', pathMatch:'full'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
export class AppRoutingModule { }
export const myRoutings=[
  AboutComponent,
  ContactUsComponent ,
 DonateComponent ,
 GalleryComponent ,
  HomeComponent ,
  ServiceComponent ,
  SupportComponent 
];