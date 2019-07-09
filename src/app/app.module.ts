import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./components/app/app.component";
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BodyComponent } from './components/body/body.component';
import { PostComponent } from './components/post/post.component';
import { FooterComponent } from './components/footer/footer.component';
import { CountryComponent } from './components/country/country.component';
import {PostService} from "./services/post/post.service";
import {CountryService} from "./services/country/country.service";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ProfileComponent,
    BodyComponent,
    PostComponent,
    FooterComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PostService,
    CountryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
