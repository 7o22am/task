import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
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
  isPinOrNo() {
    this.isPin = !this.isPin;
    this.fullMode = !this.fullMode;
  }
  onHover() {
    this.isPin = true;
  }
  onLeave() {
    if (!this.fullMode)
      this.isPin = false;
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
