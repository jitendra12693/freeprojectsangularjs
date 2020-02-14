import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { AuthGuard } from './_guards/auth.guard';
import { MyProfileComponent } from './my-profile/myprofile.component';
import { ViewProfileComponent } from './view-profile/viewprofile.component';
import { MyProjectComponent } from './my-project/myproject.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'contact',component:ContactComponent},
  {path:'project',component:ProjectComponent},
  {path:'myprofile/:id',component:MyProfileComponent, data: { title: 'Edit Profile' }},
  {path:'viewprofile/:id',component:ViewProfileComponent},
  {path:'myproject/:id',component:MyProjectComponent},
  {path:'myproject',component:MyProjectComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
