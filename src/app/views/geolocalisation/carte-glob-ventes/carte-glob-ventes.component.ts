import { Component } from '@angular/core';

@Component({
  selector: 'carte-glob-ventes',
  templateUrl: './carte-glob-ventes.component.html',
  styleUrls: ['./carte-glob-ventes.component.scss']
})
export class CarteGlobVentesComponent {


  a = '#FF6384';
  b = '#4BC0C0';
  c = '#FFCE56';
  d = '#E7E9ED';
  e = '#36A2EB';
  f = 'rgba(151, 187, 205, 1)';
  g = '#321fdb';

  chartBarData = {
    labels: [ 'Austin',
      'Portland',
      'Seattle',
      'Atlanta',
      'Dallas',
      'Boston',
      'New York City',
      'Los Angeles',
      'San Francisco'
     ],
    datasets: [
      {
        label: 'quantité vendue',
        backgroundColor: '#f87979',
        data: [11153,
          14053,
          16553,
          16602,
          16730,
          22528,
          27932,
          33289,
          50239
          ]
      }
    ]
  };

  chartBarData2 = {
    labels: [ 'Austin',
      'Portland',
      'Seattle',
      'Atlanta',
      'Dallas',
      'Boston',
      'New York City',
      'Los Angeles',
      'San Francisco'
     ],
     datasets: [
      {
        label: 'Batteries',
        backgroundColor: this.a,
        
        data: [3092,
          4019,
          4625,
          4552,
          4765,
          6477,
          7754,
          9405,
          13963
          ]
      },
      {
        label: 'Charging Cables',
        backgroundColor:this.b,
        
        data: [2558,
          3113,
          3644,
          3794,
          3716,
          5052,
          6310,
          7554,
          11451
          ]
      },
      {
        label: 'Headphones',
        backgroundColor: this.c,
        
        data: [2724,
          3350,
          3972,
          3929,
          3926,
          5291,
          6599,
          7868,
          12016
          ]
      },
      {
        label: 'Laptops',
        backgroundColor:this.d,
        
        data: [461,
          611,
          689,
          736,
          727,
          926,
          1217,
          1392,
          2099
          ]
      },
      {
        label: 'Laundry Machines',
        backgroundColor:this.e,
        
        data: [81,
          74,
          114,
          111,
          95,
          131,
          162,
          221,
          323
          ]
      },
      {
        label: 'Monitors',
        backgroundColor: this.f,
        
        data: [1478,
          1957,
          2350,
          2312,
          2343,
          3091,
          3970,
          4566,
          6874
          ]
      },
      {
        label: 'Phones',
        backgroundColor:  this.g,
        
        data: [759,
        929,
        1159,
        1168,
        1158,
        1560,
        1920,
        2283,
        3513
        ]
      }
      
    ]
  };

 

}
