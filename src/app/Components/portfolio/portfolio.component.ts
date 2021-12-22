import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  mainScript:HTMLScriptElement;

  constructor() {
    this.mainScript=document.createElement("script");
    this.mainScript.src="src/assets/js/main.js";
   }
  all:boolean=true;
  app:boolean=false;
  card:boolean=false;
  web:boolean=false;
  datafilter:string="*";
  ngOnInit(): void {
  }
  allClick(){
    this.all=!this.all;
    if( this.all==true){
      this.app=false;
      this.card=false;
      this.web=false;
    }
  }
  appClick(){
    this.app=!this.app;
    if( this.app==true){
      this.all=false;
      this.card=false;
      this.web=false;
    }
  }
 cardClick(){
    this.card=!this.card;
    if( this.card==true){
      this.all=false;
      this.app=false;
      this.web=false;
    }
  }
 webClick(){
    this.web=!this.web;
    if( this.web==true){
      this.all=false;
      this.app=false;
      this.card=false;
    }
  }
}
