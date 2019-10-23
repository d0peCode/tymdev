import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { PrismModule } from '@ngx-prism/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AppComponent } from './components/app.component';

// blog
import { BlogComponent } from './components/blog/blog.component';

// light mode
import { BgTopComponent } from './components/landing/top/bg-top/bg-top.component';
import { SkillsComponent } from './components/landing/skills/skills.component';
import { PortfolioComponent } from './components/landing/portfolio/portfolio.component';
import { ContactComponent } from './components/landing/contact/contact.component';
import { LightNavComponent } from './components/landing/top/light-nav/light-nav.component';
import { GreetingComponent } from './components/landing/top/greeting/greeting.component';
import { LogoComponent } from './components/landing/top/logo/logo.component';
import { FooterComponent } from './components/landing/footer/footer.component';
import { TopComponent } from './components/landing/top/top.component';
import { LightModeComponent } from './components/landing/light-mode.component';
import { ToolsComponent } from './components/landing/top/tools/tools.component';
import { FlagsComponent } from './components/landing/top/tools/flags/flags.component';
import { ModesComponent } from './components/landing/top/tools/modes/modes.component';

// services
import { StoreService } from './services/store.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        // landing page
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
        ToolsComponent,
        FlagsComponent,
        ModesComponent,
        // blog
        BlogComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        PrismModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
    ],
    providers: [StoreService],
    bootstrap: [AppComponent]
})
export class AppModule { }
