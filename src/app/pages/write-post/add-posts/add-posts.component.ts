import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { MarketPrice } from 'src/app/model/market.prices';
import { Data } from 'src/app/services/data';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from './../../../_services/authService';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ServDataService } from 'src/app/services/serv-data.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { XLSX$Consts } from 'xlsx/types';
import { ParsedData } from './../../../parser/parsedData.type';
import { ParserService } from './../../../parser/parser.service';
import { UploadedFile } from './../../../parser/uploadedFile.type';


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
    private token: TokenStorageService,
    private parserService: ParserService,
    public snackBar: MatSnackBar
    ) { }


  uploadedFile: UploadedFile = null;
  parsedFile: ParsedData[] = [];
  parsed: boolean = false;
  activeTabIndex: number = 0;



  addForm: FormGroup = new FormGroup({});
  products: FormGroup = new FormGroup({});


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

    //const user = this.token.getToken();

    //this.httpR.createBlog(); 
    //httpOptions = new Headers({});
    //console.log(user);

    var myRstring = '';
    console.log(this.products.controls.products.status)
    if (this.products.controls.products.status == "INVALID"){
      alert('Please add products in the form');
      return
    }

    if (this.products.controls.products.value.length === 1 ) {
      
      myRstring = myRstring + `<tr><td>${this.products.controls.products.value[0].product_id}</td><td>${this.products.controls.products.value[0].unit}</td><td>${this.products.controls.products.value[0].price}</td></tr>`;

    } else {

      this.products.controls.products.value.forEach((element: any) => {
        myRstring = myRstring + `<tr><td>${element.product_id}</td><td>${element.unit}</td><td>${element.price}</td></tr>`;
      });

    }

    //this.posti.createBlog() {"username" : this.products.value, "password" : this.products.value}
    const now = new Date();
    var datasit = {
      "title" : `Market Prices ${now.toUTCString()}`,
      "content": `<br><div class='table_show'><table table_id='3' current_user='non_member' class='tablesorter' id='sort_table'><thead><tr><th>Product</th><th>Unit</th><th>Price</th></tr></thead>${myRstring}</table></div>\t\r\n\t\r\n\t\n`,
      "status": "publish",
      "publisher": "MAFS"
    }
    //this.takeData.apply()
    //this.user.makePost(this.pack.packData(items1)).subscribe( dt => { console.log(dt) } )
    this.user.makePost(datasit).subscribe( dt => { console.log(dt) } )
    this.openSnackBar('Published Successfully!', 'show')
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

  cancel() {this.openSnackBar('all changes are saved!', '')}

  public takeData(entryData: any): void {
    console.log('@here:- '+ entryData)
  }

  countChangedHandler(count: any) {
    return this.addForm = count;
  }

  async handleFileInput(event: Event): Promise<void> {
    this.resetFileUpload();
    if (event === null) {
      return;
    }
    
    // Cast target to HTMLInputElement to be able to target files
    const files = (<HTMLInputElement>event.target).files;

    // Check if files are null
    if (files === null) {
      return;
    }

    // Check if there are any files
    if (files.length === 0) {
      return;
    }

    // For the purpose of this code example, we take the first statically
    const file = files[0];

    // Set the file to be able to parse it later
    this.uploadedFile = file;
  }

  resetFileUpload(): void {
    this.parsed = false;
    this.uploadedFile = null;
    this.parsedFile = [];
  }

  async startParsing(): Promise<void> {
    this.parsedFile = await this.parserService.parseFile(this.uploadedFile);
    this.parsed = true;
  }

  getData(property: string): any[] {
    this.activeSheet?.data.map((sheetData: any)=>{console.log(sheetData[`B`]);});
    return this.activeSheet?.data.map((sheetData: any) => {
      return sheetData[property];
    });
  }

  setActiveTab(index: number) {
    if (!this.parsedFile[index]) {
      return;
    }

    this.activeTabIndex = index;
  }

  get activeSheet() {
    return this.parsedFile[this.activeTabIndex];
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


}
