import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {LoginComponent} from "./views/login/login.component";
import {CreateAccountComponent} from "./views/create-account/create-account.component";
import {ProfileComponent} from "./views/profile/profile.component";
import {MainChatComponent} from "./views/main-chat/main-chat.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'create-account', component: CreateAccountComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'main-chat', component: MainChatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
