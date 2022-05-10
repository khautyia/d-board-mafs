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
import { ProductFormComponent } from './pages/write-post/product-form/product-form.component';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { CdkTableModule } from '@angular/cdk/table';
import { Data } from './services/data';


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
    AddPostsComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    CdkTableModule,
  ],
  exports: [],
  providers: [AuthService, HttpInterceptProviders, Data],
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
