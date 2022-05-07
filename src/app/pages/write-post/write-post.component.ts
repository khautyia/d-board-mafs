import { Component, OnInit, Input } from '@angular/core';
//import { ActivatedRoute, Router } from "@angular/router";
//import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { LoginComponent } from './../../pages/login/login.component';
import { AuthService } from './../../_services/authService';
import { MarketPrice } from 'src/app/model/market.prices';
import { Router } from "@angular/router";

@Component({
  selector: 'app-write-post',
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.css'],
  providers: [Location]
})


export class WritePostComponent {

  ourForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
  });

  msg = '';
  users: any = [];



  constructor(private router: Router, private auth: AuthService) { }


}