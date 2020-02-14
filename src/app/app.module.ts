import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationService } from './_services/authentication.service';
import { BasicAuthInterceptor } from './_helpers/basic-auth.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { AlertComponent } from './_components/alert.component';
import { MyProfileComponent } from './my-profile/myprofile.component';
import { ViewProfileComponent } from './view-profile/viewprofile.component';
import { MyProjectComponent } from './my-project/myproject.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ContactComponent,
    ProjectComponent,
    AlertComponent,
    MyProfileComponent,
    ViewProfileComponent,
    MyProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
        { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
