import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-bord-cli',
  templateUrl: './tab-bord-cli.component.html',
  styleUrls: ['./tab-bord-cli.component.scss']
})
export class TabBordCliComponent {




  

 

  chartLineData = {
    labels: ['Q1','Q2','Q3','Q4'],
    datasets: [
      {
        label: 'Nombre de clients existants',
        backgroundColor: 'rgba(220, 220, 220, 0.2)',
        borderColor: 'rgba(220, 220, 220, 1)',
        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
        pointBorderColor: '#fff',
        data: [36803,85763,112359,140376]
      }
    ]
  };

  chartLineOptions = {
    maintainAspectRatio: false,
  };

  

}

