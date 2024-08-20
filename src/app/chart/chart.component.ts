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
    
    axisX: {
        valueFormatString: "M/D",  // This will display as "Jan 01"
        
    },
    data: [{
        type: 'area',
        name: 'Visited',
        showInLegend: false,
        
        legendMarkerType: 'square',
        color: '#20c997',
        markerSize: 0,
        dataPoints: [
            { x: new Date(2013, 0, 0  ), y: 200 },
            { x: new Date(2013, 0, 2), y: 300 },
            { x: new Date(2013, 0, 3, 2), y: 500 },
            { x: new Date(2013, 0, 4, 3), y: 170 },
            { x: new Date(2013, 0, 5, 4), y: 160 },
            { x: new Date(2013, 0, 6, 5), y: 180 },
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
            { x: new Date(2013, 0, 0), y: 125  },
            { x: new Date(2013, 0, 2), y: 101 },
            { x: new Date(2013, 0, 3, 2), y: 212 },
            { x: new Date(2013, 0, 4, 3), y: 532 },
            { x: new Date(2013, 0, 5, 4), y: 230 },
            { x: new Date(2013, 0, 6, 5), y: 130 },
            
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
            { x: new Date(2013, 0, 0), y: 25 },
            { x: new Date(2013, 0, 2), y: 50 },
            { x: new Date(2013, 0, 3, 2), y: 100 },
            { x: new Date(2013, 0, 4, 3), y: 75 },
            { x: new Date(2013, 0, 5, 4), y: 80 },
            { x: new Date(2013, 0, 6, 5), y: 70 },
             
        ],
    }],
    
};
}
