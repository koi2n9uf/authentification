import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HeaderComponent } from './header/header.component';
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes =[
  {path: 'auth/signup', component: SignupComponent},
  {path: 'auth/signin', component: SigninComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
