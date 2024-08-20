import { animate, state, style, transition, trigger } from '@angular/animations';
import * as $ from 'jquery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, AfterViewInit, ElementRef, Renderer2, ViewChild, ViewChildren, QueryList, OnChanges, SimpleChanges, OnInit } from '@angular/core';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  
})
export class NavComponent implements OnInit  {

  dashbordCollapsed: Boolean = false;
  layoutCollapsed: Boolean = false;
  fontPageCollapsed: Boolean = false;
  EcommerceCollapsed: Boolean = false;
  fullMode: boolean = true;
  @ViewChildren('panel, panel2, panel3, panel4') panels!: QueryList<ElementRef>;
  constructor(private renderer: Renderer2) {
  
   }
  ngOnInit(): void {
    this.panels.forEach((panel) => {
      $(panel.nativeElement).slideUp(0); // Ensures all panels are closed initially
    });
  }
  
 
   
  togglePanel(panelId: string) {
    this.panels.forEach((panel) => {
      if (panel.nativeElement.id === panelId) {
        $(panel.nativeElement).slideToggle('slow');
        if(panelId == 'panel'){this.fontPageCollapsed=false;this.layoutCollapsed=false;

        }
        else if(panelId == 'panel2'){this.dashbordCollapsed=false;this.fontPageCollapsed=false;}
        else if(panelId == 'panel3'){this.dashbordCollapsed=false;this.layoutCollapsed=false;}
        
      } else {
        $(panel.nativeElement).slideUp('slow');
      }
    });
  }
 
  




  isfull() {
    this.fullMode = !this.fullMode;
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
