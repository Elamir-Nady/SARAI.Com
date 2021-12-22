import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnChanges {
mainScript:HTMLScriptElement;
mobile:boolean=false;
myClass:string="navbar";
  constructor() {
    this.mainScript=document.createElement("script");
    this.mainScript.src="src/assets/js/main.js";
   }
  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit() {

    if(this.mobile==true){
    }
  }
  getmobList(){
    this.mobile=!this.mobile;
  }
}
