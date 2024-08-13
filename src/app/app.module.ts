import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { ChartComponent } from './chart/chart.component';
import { CanvasJSAngularChartsModule

 } from '@canvasjs/angular-charts';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    SearchFilterComponent,
    ChartComponent,
   
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CanvasJSAngularChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
