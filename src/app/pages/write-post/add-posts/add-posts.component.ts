import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { MarketPrice } from 'src/app/model/market.prices';
import { Data } from 'src/app/services/data';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from './../../../_services/authService';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ServDataService } from 'src/app/services/serv-data.service';


@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router, 
    private pack: ServDataService,
    private user: UserService, 
    private token: TokenStorageService
    ) { }


  addForm: FormGroup = new FormGroup({});
  products: FormGroup = new FormGroup({});
  httpOptions = new Headers({'Content-Type': `application/json`});

  a = [this.products.value.product, this.products.value.unit, this.products.value.price]
  items1 = ['abc, abc, abc, abc', '1, 2, 3, 4'];

  ngOnInit() {
    /*
    this.addForm = this.formBuilder.group({
      id: [],
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['', Validators.required]
    });
    */


  }

  receiveMsg($event: any) {
    this.products = $event;
  }

  onUpload() {
    console.log('');

  }

  onSubmit() {

    const user = this.token.getUser();

    //this.httpR.createBlog(); 
    //httpOptions = new Headers({});
    const items1 = ['Product, Unit, Price', `${this.products.controls.products.value[0].product_id}, ${this.products.controls.products.value[0].unit}, ${this.products.controls.products.value[0].price}`];
    

    //const {  } = this.form;
    this.products.controls.products.value.forEach((element:any) => {
      console.log(element)
    });
    console.log(this.products.controls.products.value[0])

    //this.posti.createBlog() {"username" : this.products.value, "password" : this.products.value}
    var datasit = {
      "title" : "Khautat-Postman Test-Cases Prices at Night (they are very high though)",
      "content": "angularist",
      "status": "publish",
      "publisher": "khauta"
    }

    //this.takeData.apply()
    this.user.makePost(this.pack.packData(items1)).subscribe( dt => { console.log(dt) } )
    console.log(this.token.getToken()+'  @#:- '+ JSON.stringify(user));

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
  
  };

  addPost(): void {
    this.router.navigate(['add-user']);
  }

  cancel() {}

  public takeData(entryData: any): void {
    console.log('@here:- '+ entryData)
  }

  countChangedHandler(count: any) {
    return this.addForm = count;
  }

 


}
