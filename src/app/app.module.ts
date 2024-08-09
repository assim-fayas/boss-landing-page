import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarousalComponent } from './components/carousel/carousal/carousal.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LocationComponent } from './components/location/location.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarousalComponent,
    FooterComponent,
    HeroComponent,
    LocationComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
