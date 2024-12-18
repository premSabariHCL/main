import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core-components/login/login.component';
import { SignupComponent } from './core-components/signup/signup.component';
import { DashboardComponent } from './core-components/dashboard/dashboard.component';
import { HomeComponent } from './core-components/home/home.component';
import { AllcourseComponent } from './core-components/allcourse/allcourse.component';
import { PageComponent } from './core-components/page/page.component';
import { BlogComponent } from './core-components/blog/blog.component';
import { ContactComponent } from './core-components/contact/contact.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { CommonService } from './shared/common.service';
import { PhoneComponent } from './common/phone/phone.component';
import { EmailComponent } from './common/email/email.component';
import { SocialLinksComponent } from './common/social-links/social-links.component';
import { AuthLinksComponent } from './common/auth-links/auth-links.component';
import { MenuComponent } from './common/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HomeComponent,
    AllcourseComponent,
    PageComponent,
    BlogComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    PhoneComponent,
    EmailComponent,
    SocialLinksComponent,
    AuthLinksComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [ CommonService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
