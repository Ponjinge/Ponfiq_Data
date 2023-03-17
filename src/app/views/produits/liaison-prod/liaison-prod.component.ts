import { Component } from '@angular/core';

@Component({
  selector: 'app-liaison-prod',
  templateUrl: './liaison-prod.component.html',
  styleUrls: ['./liaison-prod.component.scss']
})
export class LiaisonProdComponent {
  

  chartBarData = {
    labels: ['20in Monitor	27in 4K Gaming Monitor',	'27in FHD Monitor	34in Ultrawide Monitor',	'AA Batteries (4-pack)','	AAA Batteries (4-pack)',	'Apple Airpods Headphones',	'Bose SoundSport Headphones',	'Flatscreen TV',	'Google Phone',	'iPhone',	'LG Dryer',	'LG Washing Machine',	'Lightning Charging Cable',	'Macbook Pro Laptop',	'ThinkPad Laptop',	'USB-C Charging Cable',	'Vareebadd Phone',	'Wired Headphones'
    ],
    datasets: [
      {
        label: 'USB-C',
        backgroundColor: '#f87979',
        data: [8,	8,	17,	11,	33,	46,	21,	25,	10,	124,	10,	2,	0,	44,	8,	7,0,		56,	58
        ]
      },
      {
        label: 'iPhone',
        backgroundColor: '#41B883',
        data: [2,	5,	1,	7,	17,	12,	56,	6,	2,	0,	0,	0,	0,	121,	2,	3,	10,	1,	72

        ]
      },{
        label: 'Google Phone',
        backgroundColor: '#00D8FF',
        data: [1,	1,	2,	5,	14,	8,	10,	31,	1,0,		0,	0,	0,	16,	5,	2,	124,	3,	59

        ]
      },{
        label: 'Wired Headphones',
        backgroundColor:  '#DD1B16',
        data: [6,	13,	5,	10,	24,	37,	33,	19,	5,	59,	72,	0,	2,	32,	9,	4,	58,	23,	0


        ]
      }
    ]
  };

  

}
