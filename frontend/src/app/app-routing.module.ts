import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { AddPersonComponent } from './components/add-person/add-person.component';
// import { ModifyPersonComponent } from './components/modify-person/modify-person.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'main', component:MainComponent},
  // {path: 'modifyPerson', component:ModifyPersonComponent},
  {path: 'addPerson', component:AddPersonComponent},
  {path: 'navbar', component:NavbarComponent},
  {path: 'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
