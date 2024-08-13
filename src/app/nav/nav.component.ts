import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        width: '260px',
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('out', style({
        width: '0px',
        opacity: 0.5,
        transform: 'translateX(-100%)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
    trigger('fade', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible <=> hidden', animate('300ms ease-in-out'))
    ])
  ]
})
export class NavComponent {

  dashbordCollapsed: Boolean = true;
  layoutCollapsed: Boolean = false;
  fontPageCollapsed: Boolean = false;
  EcommerceCollapsed: Boolean = false;
  isPin: Boolean = true;
  fullMode: boolean = true;

  constructor() {

  }
  isfull(){
    this.fullMode = !this.fullMode;
  }
  isPinOrNo() {
    this.isPin = !this.isPin;
    this.fullMode = !this.fullMode;
  }


  Hover() {
    if(!this.fullMode)
      this.isPin = !this.isPin;
  }
  HoverOut() {
    if(!this.fullMode)
    this.isPin = !this.isPin;
}
  toggleEcommerceCollapsed() {
    this.EcommerceCollapsed = !this.EcommerceCollapsed;

  }

  toggleDashCollapsed() {
    this.dashbordCollapsed = !this.dashbordCollapsed;

  }
  toggleLayoutCollapsed() {
    this.layoutCollapsed = !this.layoutCollapsed;
  }
  toggleFontollapsed() {
    this.fontPageCollapsed = !this.fontPageCollapsed;
  }


}
