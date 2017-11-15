import { Component, OnInit } from '@angular/core';
import { CalcService } from './calc.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers:  [CalcService],
})
export class AppComponent implements OnInit{
  title = 'app';

  calcs: any[];

  constructor(private calcService: CalcService) {
  }

  ngOnInit() {
    this.calcService.getCalcs().subscribe(responseCalcs => this.calcs = responseCalcs);
  }

  selectModel(Vehicle_Make: any) {
      const currentMarque = Vehicle_Make;
      alert(currentMarque);
  }
}
