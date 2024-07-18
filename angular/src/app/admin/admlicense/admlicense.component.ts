import { Component, OnInit } from '@angular/core';
import { AdmUsersService } from 'app/services/admin/adm-users.service';

@Component({
  selector: 'app-admlicense',
  templateUrl: './admlicense.component.html',
  styleUrls: ['./admlicense.component.scss']
})
export class AdmlicenseComponent implements OnInit {
public registration:any;
public msg:string="";
  constructor(private adm:AdmUsersService) { 
    this.adm.getRegistrationDetails().subscribe(res =>
      {
          this.registration=res;
var days=this.calculateDiff(this.registration.expDate);
if(days <= 15 && days > 0)
{
this.msg ="Your license is going to expire in next " + days.toString() + " days";
}
 if(days < 0)
 {
  this.msg ="Your license is expired please contact your vendor";
 }            
      });
  }

  ngOnInit(): void {
  }
  calculateDiff(dateSent){
    let currentDate = new Date();
    dateSent = new Date(dateSent);

    return 0-(Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) ) /(1000 * 60 * 60 * 24)));
}
}
