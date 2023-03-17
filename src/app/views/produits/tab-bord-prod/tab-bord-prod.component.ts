import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-bord-prod',
  templateUrl: './tab-bord-prod.component.html',
  styleUrls: ['./tab-bord-prod.component.scss'],
})
export class TabBordProdComponent {
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
  a = '#FF6384';
  b = '#4BC0C0';
  c = '#FFCE56';
  d = '#E7E9ED';
  e = '#36A2EB';
  f = 'rgba(151, 187, 205, 1)';
  g = '#321fdb';

  chartBarData = {
    labels: [
      'Batteries',
      'Charging Cables',
      'Headphones',
      'Laptops',
      'Laundry Machines',
      'Monitors',
      'Phones',
    ],
    datasets: [
      {
        label: 'ventes',
        backgroundColor: '#f87979',
        data: [58652, 47192, 49675, 8858, 1312, 28941, 14449],
      },
    ],
  };

  // chartBarOptions = {
  //   maintainAspectRatio: false,
  // };

  chartLineData1 = {
    labels: [...this.months],
    datasets: [
      {
        label: 'Batteries',
        backgroundColor: 'rgba(220, 220, 220, 0.2)',
        borderColor: this.a,
        pointBackgroundColor: this.a,
        pointBorderColor: '#fff',
        data: [
          3019, 3707, 4695, 5760, 5311, 4258, 4436, 3849, 3694, 6303, 5650,
          7965,
        ],
      },
      {
        label: 'Charging Cables',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: this.b,
        pointBackgroundColor: this.b,
        pointBorderColor: '#fff',
        data: [
          2432, 3153, 3817, 4642, 4143, 3362, 3660, 2905, 3026, 5239, 4466,
          6337,
        ],
      },
      {
        label: 'Headphones',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: this.c,
        pointBackgroundColor: this.c,
        pointBorderColor: '#fff',
        data: [
          2554, 3132, 4184, 4871, 4417, 3624, 3845, 3181, 3098, 5410, 4699,
          6649,
        ],
      },
      {
        label: 'Laptops',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: this.d,
        pointBackgroundColor: this.d,
        pointBorderColor: '#fff',
        data: [451, 551, 724, 844, 836, 670, 687, 573, 537, 986, 814, 1182],
      },
      {
        label: 'Laundry Machines',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: this.e,
        pointBackgroundColor: this.e,
        pointBorderColor: '#fff',
        data: [81, 78, 113, 139, 140, 98, 107, 94, 76, 111, 109, 166],
      },
      {
        label: 'Monitors',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: this.f,
        pointBackgroundColor: this.f,
        pointBorderColor: '#fff',
        data: [
          1503, 1879, 2297, 2809, 2515, 2162, 2278, 1903, 1814, 3138, 2725,
          3910,
        ],
      },
      {
        label: 'Phones',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: this.g,
        pointBackgroundColor: this.g,
        pointBorderColor: '#fff',
        data: [
          822, 949, 1175, 1493, 1305, 1079, 1059, 943, 864, 1516, 1335, 1905,
        ],
      },
    ],
  };

  chartLineOptions = {
    maintainAspectRatio: false,
  };

  chartLineData2 = {
    labels: [...this.months],
    datasets: [
      {
        label: 'Batteries',
        backgroundColor: 'rgba(220, 220, 220, 0.2)',
        borderColor: this.a,
        pointBackgroundColor: this.a,
        pointBorderColor: '#fff',
        data: [
          5.15, 6.32, 8.0, 9.82, 9.06, 7.26, 7.56, 6.56, 6.3, 10.75, 9.63,
          13.58,
        ],
      },
      {
        label: 'Charging Cables',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: this.b,
        pointBackgroundColor: this.b,
        pointBorderColor: '#fff',
        data: [
          5.15, 6.68, 8.09, 9.84, 8.78, 7.12, 7.76, 6.16, 6.41, 11.1, 9.46,
          13.43,
        ],
      },
      {
        label: 'Headphones',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: this.c,
        pointBackgroundColor: this.c,
        pointBorderColor: '#fff',
        data: [
          5.14, 6.3, 8.42, 9.81, 8.89, 7.3, 7.74, 6.4, 6.24, 10.89, 9.46, 13.39,
        ],
      },
      {
        label: 'Laptops',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: this.d,
        pointBackgroundColor: this.d,
        pointBorderColor: '#fff',
        data: [
          5.09, 6.22, 8.17, 9.53, 9.44, 7.56, 7.76, 6.47, 6.06, 11.13, 9.19,
          13.34,
        ],
      },
      {
        label: 'Laundry Machines',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: this.e,
        pointBackgroundColor: this.e,
        pointBorderColor: '#fff',
        data: [
          6.17, 5.95, 8.61, 10.59, 10.67, 7.47, 8.16, 7.16, 5.79, 8.46, 8.31,
          12.65,
        ],
      },
      {
        label: 'Monitors',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: this.f,
        pointBackgroundColor: this.f,
        pointBorderColor: '#fff',
        data: [
          5.19, 6.49, 7.94, 9.71, 8.69, 7.47, 7.87, 6.58, 6.27, 10.84, 9.42,
          13.51,
        ],
      },
      {
        label: 'Phones',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: this.g,
        pointBackgroundColor: this.g,
        pointBorderColor: '#fff',
        data: [
          5.69, 6.57, 8.13, 10.33, 9.03, 7.47, 7.33, 6.53, 5.98, 10.49, 9.24,
          13.18,
        ],
      },
    ],
  };
}
