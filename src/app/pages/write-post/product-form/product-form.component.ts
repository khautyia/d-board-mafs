import { CdkTable } from '@angular/cdk/table';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  form!: FormGroup;
  private formSubmitAttempt: boolean = false;
  private pid = 0;

  @ViewChild('table')
  table!: MatTable<any>;

  displayedColumns = ['product', 'unit', 'price'];
  dataSource: MatTableDataSource<AbstractControl>;

  @Output() onDataPicked = new EventEmitter<any>();

  get productControlArray() {
    return this.form.get('products') as FormArray;
  }

  constructor(private fb: FormBuilder) {
    this.createForm();
    this.addRow();
    this.dataSource = new MatTableDataSource(
      this.productControlArray.controls);
  }

  createForm() {
    this.form = this.fb.group({
      products: this.fb.array([]),
    });
  }

  trackRows(index: number, row: AbstractControl) {
    return row.value.uid;
  }

  private addRow() {
    const rows = this.productControlArray;
    rows.push(
      this.fb.group({
        uid: this.nextUid(),
        product_id: [undefined, Validators.required],
        unit: [0, Validators.required],
        price: [0, Validators.required]
      })
    );
  }

  private deleteRow() {
    const rows = this.productControlArray;
    if(this.productControlArray.length === 1) { 
      // console.log('less ');
      return
    } else {
      rows.removeAt(this.productControlArray.length - 1);
    }
    console.log(typeof rows);
  }

  createRow() {
    this.addRow();
    this.table.renderRows();
  }

  removeRow() {
    this.deleteRow();
    this.table.renderRows();
  }

  private nextUid() {
    ++this.pid
    return this.pid;
  }

  onDatapicked(): void {
    this.onDataPicked.emit(this.form);
  }

}