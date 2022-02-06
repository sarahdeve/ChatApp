import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { ChatpageComponent } from './chatpage/chatpage.component';
import { ProfileComponent } from './profile/profile.component';
// import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'chat', component: ChatComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'chatpage', component: ChatpageComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
