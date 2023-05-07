import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { NewcardsComponent } from './components/newcards/newcards.component';
import { NewsComponent } from './components/news/news.component';
import { ContactusComponent } from './components/contactus/contactus.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:'home'
  },
  {
    component:AboutusComponent,
    path:'aboutus'
  },
  {
    component:NewsComponent,
    path:'news'
  },
  {
    component:NewcardsComponent,
    path:'products'
  },
  {
    component:ContactusComponent,
    path:'contactus'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),MatCardModule],
  exports: [RouterModule, MatCardModule]
})
export class AppRoutingModule { }
