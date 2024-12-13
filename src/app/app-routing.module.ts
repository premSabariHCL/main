import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core-components/home/home.component';
import { AllcourseComponent } from './core-components/allcourse/allcourse.component';
import { PageComponent } from './core-components/page/page.component';
import { BlogComponent } from './core-components/blog/blog.component';
import { ContactComponent } from './core-components/contact/contact.component';
import { LoginComponent } from './core-components/login/login.component';
import { SignupComponent } from './core-components/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'all-course', component: AllcourseComponent },
  { path: 'pages', component: PageComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
