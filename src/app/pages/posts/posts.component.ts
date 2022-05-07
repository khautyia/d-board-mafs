import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  blogPosts: any;
  id!: string;
  errorMessage: any;
  constructor(
    private blogService: UserService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.spinner.show();

    this.blogService.getPublicContent().subscribe(
      (data) => {
        this.blogPosts = data;
        console.log(this.blogPosts);
        this.spinner.hide();
      },
      (error) => {
        // if any error, Code throws the error
        this.errorMessage = error.error.message;
        console.log(error.error.message, 'error');
        this.spinner.hide();
      }
    );
  }
}
