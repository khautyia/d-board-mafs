import { Injectable } from '@angular/core';
import { Data } from './data';


@Injectable({
  providedIn: 'root'
})

export class ServDataService {

  constructor(private data: Data) { }

  builtCont (itm: any) {
    this.data.setPublish(true);
    let theader = `<p>[vc_row][vc_column][vc_table vc_table_theme=&#8221;classic_blue&#8221;]`
    let closeh = `[/vc_table][/vc_column][vc_column][/vc_column][/vc_row]</p>`
    //Create a HTML Table element.
    var tableData = '';
    for (let index = 0; index < itm.length; index++) {
      
      tableData =  tableData + theader + itm[index] + closeh;
      
    }
    return tableData;

  }
  
  packData(a: any) { 

    const now = new Date();
    this.data.setTitle('Market Prices '+now.toUTCString())
    let final_string = ``;

    var items= a;

    let content = `{\n\t\"title\" : \"${
      this.data.getTitle()
    }\",\n\t\"content\": \"${
      this.builtCont(items)
    }"\,\n\t\"status\": ${
      this.data.getPublish()
    }}`

    this.data.setContent(content + final_string);

    console.log(this.data.getContent());

    return this.data.getContent(); 

  }

}