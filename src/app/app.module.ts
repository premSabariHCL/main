import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    FooterComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
