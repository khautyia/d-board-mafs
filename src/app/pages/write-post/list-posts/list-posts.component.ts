import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
  users: any = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  deleteUser(): void {
  };

  editUser(): void {
    
  };

  addUser(): void {
    this.router.navigate(['add-user']);
  };
}
