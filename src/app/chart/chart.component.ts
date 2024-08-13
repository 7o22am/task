import { Component } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  chartOptions = {
    animationEnabled: true,
    backgroundColor: "#fff",
 
    data: [{
        type: 'area',
        name: 'Visited',
        showInLegend: false,
        
        legendMarkerType: 'square',
        color: '#20c997',
        markerSize: 0,
        dataPoints: [
            { x: new Date(2013, 0, 1  ), y: 200, label: 'midnight' },
            { x: new Date(2013, 0, 1), y: 300 },
            { x: new Date(2013, 0, 1, 2, 0), y: 500 },
            { x: new Date(2013, 0, 1, 3, 0), y: 170 },
            { x: new Date(2013, 0, 1, 4, 0), y: 160 },
            { x: new Date(2013, 0, 1, 5, 0), y: 180 },
            { x: new Date(2013, 0, 1, 6, 0), y: 120 },
            { x: new Date(2013, 0, 1, 7, 0), y: 240 },
            { x: new Date(2013, 0, 1, 8, 0), y: 360 },
            { x: new Date(2013, 0, 1, 9, 0), y: 350 },
            { x: new Date(2013, 0, 1, 10, 0), y: 370},
            { x: new Date(2013, 0, 1, 11, 0), y: 290 },
            { x: new Date(2013, 0, 1, 12, 0), y: 340, label: 'noon' },
            { x: new Date(2013, 0, 1, 13, 0), y: 380 },
            { x: new Date(2013, 0, 1, 14, 0), y: 230 },
            { x: new Date(2013, 0, 1, 15, 0), y: 310 },
            { x: new Date(2013, 0, 1, 16, 0), y: 340 },
            { x: new Date(2013, 0, 1, 17, 0), y: 290 },
            { x: new Date(2013, 0, 1, 18, 0), y: 140 },
            { x: new Date(2013, 0, 1, 19, 0), y: 120 },
            { x: new Date(2013, 0, 1, 20, 0), y: 100 },
            { x: new Date(2013, 0, 1, 21, 0), y: 80 },
            { x: new Date(2013, 0, 1, 22, 0), y: 13 },
            { x: new Date(2013, 0, 1, 23, 0), y: 400 },
        ],
    },
    {
        type: 'area',
        name: 'salse',
        showInLegend: false,
        legendMarkerType: 'square',
        color: '#00bad1',
        markerSize: 0,
        dataPoints: [
            { x: new Date(2013, 0, 1), y: 125, label: 'midnight' },
            { x: new Date(2013, 0, 1), y: 101 },
            { x: new Date(2013, 0, 1, 2, 0), y: 212 },
            { x: new Date(2013, 0, 1, 3, 0), y: 532 },
            { x: new Date(2013, 0, 1, 4, 0), y: 230 },
            { x: new Date(2013, 0, 1, 5, 0), y: 130 },
            { x: new Date(2013, 0, 1, 6, 0), y: 303},
            { x: new Date(2013, 0, 1, 7, 0), y: 603 },
            { x: new Date(2013, 0, 1, 8, 0), y: 143 },
            { x: new Date(2013, 0, 1, 9, 0), y: 153 },
            { x: new Date(2013, 0, 1, 10, 0), y: 213 },
            { x: new Date(2013, 0, 1, 11, 0), y: 243 },
            { x: new Date(2013, 0, 1, 12, 0), y: 283, label: 'noon' },
            { x: new Date(2013, 0, 1, 13, 0), y: 263 },
            { x: new Date(2013, 0, 1, 14, 0), y: 173 },
            { x: new Date(2013, 0, 1, 15, 0), y: 233 },
            { x: new Date(2013, 0, 1, 16, 0), y: 285 },
            { x: new Date(2013, 0, 1, 17, 0), y: 225 },
            { x: new Date(2013, 0, 1, 18, 0), y: 105},
            { x: new Date(2013, 0, 1, 19, 0), y: 95 },
            { x: new Date(2013, 0, 1, 20, 0), y: 65 },
            { x: new Date(2013, 0, 1, 21, 0), y: 45 },
            { x: new Date(2013, 0, 1, 22, 0), y: 125 },
            { x: new Date(2013, 0, 1, 23, 0), y: 145 },
        ],
    } , 
    {
        type: 'area',
        name: 'clicks',
        showInLegend: false,
        legendMarkerType: 'square',
        color: '#28c76f',
        markerSize: 0,
        dataPoints: [
            { x: new Date(2013, 0, 1), y: 12, label: 'midnight' },
            { x: new Date(2013, 0, 1, 1, 0), y: 160 },
            { x: new Date(2013, 0, 1, 2, 0), y: 360 },
            { x: new Date(2013, 0, 1, 3, 0), y: 650 },
            { x: new Date(2013, 0, 1, 4, 0), y: 620 },
            { x: new Date(2013, 0, 1, 5, 0), y: 200 },
            { x: new Date(2013, 0, 1, 6, 0), y: 360 },
            { x: new Date(2013, 0, 1, 7, 0), y: 166 },
            { x: new Date(2013, 0, 1, 8, 0), y: 147 },
            { x: new Date(2013, 0, 1, 9, 0), y: 157 },
            { x: new Date(2013, 0, 1, 10, 0), y: 217 },
            { x: new Date(2013, 0, 1, 11, 0), y: 247 },
            { x: new Date(2013, 0, 1, 12, 0), y: 287, label: 'noon' },
            { x: new Date(2013, 0, 1, 13, 0), y: 267 },
            { x: new Date(2013, 0, 1, 14, 0), y: 177 },
            { x: new Date(2013, 0, 1, 15, 0), y: 237 },
            { x: new Date(2013, 0, 1, 16, 0), y: 287 },
            { x: new Date(2013, 0, 1, 17, 0), y: 227 },
            { x: new Date(2013, 0, 1, 18, 0), y: 107 },
            { x: new Date(2013, 0, 1, 19, 0), y: 97 },
            { x: new Date(2013, 0, 1, 20, 0), y: 67 },
            { x: new Date(2013, 0, 1, 21, 0), y: 47 },
            { x: new Date(2013, 0, 1, 22, 0), y: 127 },
            { x: new Date(2013, 0, 1, 23, 0), y: 147 },
        ],
    }],
    
};
}
