import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { MarketPrice } from 'src/app/model/market.prices';
// import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router) { }

  addForm: FormGroup = new FormGroup({});

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['', Validators.required]
    });

  }

  onUpload() {
    console.log('');

  }

  onSubmit() {
    //this.httpR.createBlog();

    //const {  } = this.form;

    //this.posti.createBlog()

    console.log();
  

  }

  getFields() {
    //return this.fields;
  }

  ngDestroy() {
    //this.unsubcribe();
  }

  deletePost(mktprice: MarketPrice): void {
    
  };

  editUser(mktprice: MarketPrice): void {
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", mktprice.id.toString());
    this.router.navigate(['edit-user']);
  };

  addPost(): void {
    this.router.navigate(['add-user']);
  }

}
