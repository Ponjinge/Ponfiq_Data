import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-bord-evol-ventes',
  templateUrl: './tab-bord-evol-ventes.component.html',
  styleUrls: ['./tab-bord-evol-ventes.component.scss'],
})
export class TabBordEvolVentesComponent {
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  a= '#FF6384';
  b='#4BC0C0';
  c='#FFCE56';
  d='#E7E9ED';
  e='#36A2EB';
  f='rgba(151, 187, 205, 1)';
  g='#321fdb';

  chartLineData = {
    labels: [...this.months],
    datasets: [
      {
        label: 'Total des Ventes',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: 'rgba(151, 187, 205, 1)',
        pointBackgroundColor: 'rgba(151, 187, 205, 1)',
        pointBorderColor: '#fff',
        data: [
          1813586.44, 2202022.42, 2807100.38, 3390670.24, 3152606.75,
          2577802.26, 2647775.76, 2244467.88, 2097560.13, 3736726.88, 3199603.2,
          4613443.34,
        ],
      },
    ],
  };

  chartLineOptions = {
    maintainAspectRatio: false,
  };

  chartLineData2 = {
    labels: [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23,
    ],

    datasets: [
      {
        label: 'Laptops',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: this.a,
        pointBackgroundColor: this.a,
        pointBorderColor: '#fff',
        data: [
          235899.12, 169599.46, 90199.71, 53699.82, 53699.82, 70999.8,
          144899.52, 287199.1, 435498.45, 590398.04, 654197.64, 802997.41,
          791697.2, 735497.49, 751197.35, 692697.68, 663997.78, 824397.23,
          729997.63, 866597.08, 805797.45, 733097.65, 557498.08, 425798.19,
        ],
      },
      {
        label: 'Phones',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: this.b,
        pointBackgroundColor: this.b,
        pointBorderColor: '#fff',
        data: [
          186200, 126300, 57900, 32200, 42400, 67300, 123500, 183200, 309400,
          418700, 514700, 627400, 614000, 546700, 527600, 503300, 492400,
          511300, 611100, 616300, 587600, 517200, 429300, 294700,
        ],
      },
      {
        label: 'Monitors',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: this.c,
        pointBackgroundColor: this.c,
        pointBorderColor: '#fff',
        data: [
          170104.65, 97687.07, 52048.27, 35898.8, 38948.8, 54818.32, 106746.69,
          159745.02, 260522.14, 360528.79, 449766.15, 507534.49, 531313.35,
          502124.33, 474025.64, 438486.34, 435926.56, 475165.49, 511354.34,
          546063.15, 525503.77, 458396.01, 361198.86, 269021.75,
        ],
      },
      {
        label: 'Headphones',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: this.d,
        pointBackgroundColor: this.d,
        pointBorderColor: '#fff',
        data: [
          86512.77, 50671.96, 26583.91, 17348.39, 19272.36, 25527.48, 51755.64,
          84236.73, 132316.61, 189427.9, 237729.53, 258963.48, 272885.25,
          259327.73, 230571.48, 213295.26, 214882.88, 226578, 257686.85,
          269387.03, 254316.11, 238498.42, 187457.99, 135960.1,
        ],
      },
      {
        label: 'Laundry Machines',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: this.e,
        pointBackgroundColor: this.e,
        pointBorderColor: '#fff',
        data: [
          18000, 6000, 2400, 3000, 4800, 6000, 9600, 12000, 27000, 41400, 38400,
          46800, 50400, 57000, 52200, 48600, 50400, 43800, 54000, 57000, 54000,
          46200, 31800, 26400,
        ],
      },
      {
        label: 'Charging Cables',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: this.f,
        pointBackgroundColor: this.f,
        pointBorderColor: '#fff',
        data: [
          12860.7, 8246.35, 4435.45, 2722.95, 2779.7, 4602.85, 8984.5, 14023.8,
          21032.95, 29249.05, 37635.8, 43616.25, 43069.35, 41383.75, 36413.05,
          34632.45, 35956.25, 36593.45, 42041.35, 43906.4, 41033.9, 36930.35,
          30755.7, 20689.05,
        ],
      },
      {
        label: 'Batteries',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: this.g,
        pointBackgroundColor: this.g,
        pointBorderColor: '#fff',
        data: [
          4144.03, 2362.04, 1284.1, 887.93, 760.33, 1431.37, 2626.65, 4449.47,
          6578.82, 9326.8, 11857.65, 13298.61, 13456.19, 13356.5, 11665.21,
          10537.87, 11037.84, 11527.44, 13168.13, 13684.88, 13465.01, 11678.43,
          9538.58, 6735.35,
        ],
      },
    ],
  };

  chartPieData = {
    labels: ['Batteries',
      'Charging Cables',
      'Headphones',
      'Laptops',
      'Laundry Machines',
      'Monitors',
      'Phones',
      ],
    datasets: [
      {
        data: [
          198859.23, 633595.4, 3941193.86, 12167558.7, 787200, 7822928.78,
          8940700, 
        ],
        backgroundColor: [this.a,this.b,this.c,this.d,this.e,this.f,this.g],
        hoverBackgroundColor: [this.a,this.b,this.c,this.d,this.e,this.f,this.g],
      },
    ],
  };

}


