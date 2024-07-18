import { Component, OnInit } from '@angular/core';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.scss']
})
export class AdminDashBoardComponent implements OnInit {

  public ccode:string='';
  constructor(private adm:AdminGeneralInfoService) { 

    var usr=this.adm.getUserCompleteInformation().usr;
    this.ccode=usr.cCode.toString();

  }

  ngOnInit(): void {
  }

}
