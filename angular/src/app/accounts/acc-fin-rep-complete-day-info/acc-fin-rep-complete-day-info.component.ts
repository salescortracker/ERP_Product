import { Component, OnInit } from '@angular/core';
const now= new Date();
@Component({
  selector: 'app-acc-fin-rep-complete-day-info',
  templateUrl: './acc-fin-rep-complete-day-info.component.html',
  styleUrls: ['./acc-fin-rep-complete-day-info.component.scss']
})
export class AccFinRepCompleteDayInfoComponent implements OnInit {

  public tradat:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
 public pdffile:string='';
 public excelfile:string='';
  constructor() { }

  ngOnInit(): void {
  }
public listAdd()
{
  
}
}
