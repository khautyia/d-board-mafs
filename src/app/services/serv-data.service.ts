import { Injectable } from '@angular/core';
import { Data } from './data';

const items1 = ['abc, abc, abc, abc', '1, 2, 3, 4'];

@Injectable({
  providedIn: 'root'
})

export class ServDataService {
  /***
   * 
   * 
   * 
   * 
   * 

  static content = `{\n\t\"title\" : \"${data.getTitle()}\",\n\t\"content\": \"status\": \"publish\",\n\t\"publisher\": \"khauta\"\n}`
  static theader = `\"<p>[vc_row][vc_column][vc_table vc_table_theme=&#8221;classic_blue&#8221;]${'A'+'B'+'C'}`
  static nokotwo = `[/vc_table][/vc_column][vc_column][/vc_column][/vc_row]</p>\\n<p>[vc_row][vc_column][vc_table vc_table_theme=&#8221;classic_blue&#8221;]${'ro1,'+ 'ro1,'+'ro1'}`
  static nokothr = `[/vc_table][/vc_column][vc_column][/vc_column][/vc_row]</p>\\n<p>[vc_row][vc_column][vc_table vc_table_theme=&#8221;classic_blue&#8221;]${'A,B,C'}`
  static nokofou = `[/vc_table][/vc_column][vc_column][/vc_column][/vc_row]</p>\\n\",\n\t`

  */
 

  constructor(private data: Data) { }

  builtCont(){


    this.data.setPublish(true);

    let theader = `<p>[vc_row][vc_column][vc_table vc_table_theme=&#8221;classic_blue&#8221;]`
    let closeh = `[/vc_table][/vc_column][vc_column][/vc_column][/vc_row]</p>`


    //Create a HTML Table element.
    var tableData = '';

    for (let index = 0; index < items1.length; index++) {
      
      tableData =  tableData + theader + items1[index] + closeh;
      
    }

    return tableData;

  }
  
  packData() { 

    const now = new Date();

    this.data.setTitle('Market Prices '+now.toUTCString())

    let final_string = ``

    let content = `{\n\t\"title\" : \"${
      this.data.getTitle()
    }\",\n\t\"content\": \"${
      this.builtCont()
    }"\,\n\t\"status\": ${
      this.data.getPublish()
    }}`

    this.data.setContent(content + final_string);

    console.log(this.data.getContent());

    return this.data.getContent(); 

  }

}