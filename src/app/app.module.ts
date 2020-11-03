import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { AuthModule } from '@auth0/auth0-angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProtegidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-jlvf2-el0.us.auth0.com',
      clientId: 'xQDjU5NvETBIys3YiGfRGAwpQ226UiRJ'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
