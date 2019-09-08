import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// light mode
<<<<<<< Updated upstream
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
=======
import { BgTopComponent } from './components/light-mode/top/bg-top/bg-top.component';
import { SkillsComponent } from './components/light-mode/skills/skills.component';
import { PortfolioComponent } from './components/light-mode/portfolio/portfolio.component';
import { ContactComponent } from './components/light-mode/contact/contact.component';
import { LightNavComponent } from './components/light-mode/top/light-nav/light-nav.component';
import { GreetingComponent } from './components/light-mode/top/greeting/greeting.component';
import { LogoComponent } from './components/light-mode/top/logo/logo.component';
import { FooterComponent } from './components/light-mode/footer/footer.component';
import { TopComponent } from './components/light-mode/top/top.component';
import { LightModeComponent } from './components/light-mode/light-mode.component';
import { DarkModeComponent } from './components/dark-mode/dark-mode.component';
import { ToolsComponent } from './components/light-mode/top/tools/tools.component';
import { FlagsComponent } from './components/light-mode/top/tools/flags/flags.component';
import { ModesComponent } from './components/light-mode/top/tools/modes/modes.component';
>>>>>>> Stashed changes

//dark mode
import { FollowerComponent } from './components/dark-mode/follower/follower.component';
import { DarkNavComponent } from './components/dark-mode/dark-nav/dark-nav.component';
import { PreviewComponent } from './components/dark-mode/preview/preview.component';

@NgModule({
<<<<<<< Updated upstream
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
=======
    declarations: [
        AppComponent,
        // light mode
        BgTopComponent,
        SkillsComponent,
        PortfolioComponent,
        ContactComponent,
        LightNavComponent,
        GreetingComponent,
        LogoComponent,
        FooterComponent,
        TopComponent,
        LightModeComponent,
        DarkModeComponent,
        ToolsComponent,
        FlagsComponent,
        ModesComponent,
        // dark mode
        FollowerComponent,
        DarkNavComponent,
        PreviewComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
>>>>>>> Stashed changes
})
export class AppModule { }
