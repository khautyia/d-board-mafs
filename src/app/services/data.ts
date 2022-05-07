import { NgModule } from '@angular/core';

@NgModule({
    declarations: [],
    imports: [],
    providers: [],
    bootstrap: []
  })

export class Data {
    private title: string = '';
    private content: Object = {};
    private publish: boolean = false;

    public setTitle(a: string) { 
        this.title = a;
    }
    public getTitle() {
        return this.title;
    }
    public setContent(b: string) { 
        this.content = b;
    }
    public getContent() {
        return this.content;
    }
    public setPublish(c: boolean) { 
        this.publish = c;
    }
    public getPublish() {
        if (this.publish === true) {
            return `\"publish\"`;
        } else {
            return `\"draft\"`;
        }
    }
}