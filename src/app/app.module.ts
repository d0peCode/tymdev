import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// light mode
import { BgTopComponent } from './light-mode/top/bg-top/bg-top.component';
import { SkillsComponent } from './light-mode/skills/skills.component';
import { PortfolioComponent } from './light-mode/portfolio/portfolio.component';
import { ContactComponent } from './light-mode/contact/contact.component';
import { NavComponent } from './light-mode/top/nav/nav.component';
import { GreetingComponent } from './light-mode/top/greeting/greeting.component';
import { LogoComponent } from './light-mode/top/logo/logo.component';
import { FooterComponent } from './light-mode/footer/footer.component';
import { TopComponent } from './light-mode/top/top.component';
import { LightModeComponent } from './light-mode/light-mode.component';
import { DarkModeComponent } from './dark-mode/dark-mode.component';


@NgModule({
  declarations: [
    AppComponent,
    BgTopComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
    NavComponent,
    GreetingComponent,
    LogoComponent,
    FooterComponent,
    TopComponent,
    LightModeComponent,
    DarkModeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
