import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
   
})
export class HeaderComponent {

  isSearch: boolean = false;
  menu:boolean=false;
  isSearchOrNo(s:boolean) {
    if(s)
      this.isSearch = true;
    else
    this.isSearch = false;
  }
  display(){
    this.menu=!this.menu;
    alert("show nav if u want!")
  }
}
