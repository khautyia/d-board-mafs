import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PostsComponent } from './pages/posts/posts.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { WritePostComponent } from './pages/write-post/write-post.component';
import { AddPostsComponent } from './pages/write-post/add-posts/add-posts.component';
import { ListPostsComponent } from './pages/write-post/list-posts/list-posts.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: LoginComponent},
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: SinglePostComponent },
  //{ path: '**', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'write-post', component: WritePostComponent },
  { path: 'add-post', component: AddPostsComponent },
  { path: 'list-post', component: ListPostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
