import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './_services/authService';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { WritePostComponent } from './pages/write-post/write-post.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxSpinnerModule } from "ngx-spinner";

import { PostsComponent } from './pages/posts/posts.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { ListPostsComponent } from './pages/write-post/list-posts/list-posts.component';
import { AddPostsComponent } from './pages/write-post/add-posts/add-posts.component';
import { HttpInterceptProviders } from './_helpers';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    WritePostComponent,
    RegisterComponent,
    ProfileComponent,
    PostsComponent,
    SinglePostComponent,
    ListPostsComponent,
    AddPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, HttpInterceptProviders],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(/*private myc:MyserviceService*/){ }

 /*doit(){
    this.myc.getData().subscribe({
      next: data => { console.log(data) }
    })
  }*/

}
