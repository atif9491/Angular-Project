import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { NewcardsComponent } from './components/newcards/newcards.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ResponsivenavbarComponent } from './components/responsivenavbar/responsivenavbar.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ReviewComponent } from './components/home/review/review.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component'; 


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NewcardsComponent,
    NavigationComponent,
    ResponsivenavbarComponent,
    NewsComponent,
    HomeComponent,
    ReviewComponent,
    FooterComponent,
    AboutusComponent,
    ContactusComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatProgressBarModule,
  ],
   exports:[ MatCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
