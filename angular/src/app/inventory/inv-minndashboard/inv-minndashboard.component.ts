import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MenuServiceService } from 'app/services/admin/menu-service.service';

@Component({
  selector: 'app-inv-minndashboard',
  templateUrl: './inv-minndashboard.component.html',
  styleUrls: ['./inv-minndashboard.component.scss']
})
export class InvMINNDashboardComponent implements OnInit ,AfterViewInit{

  constructor(private menu:MenuServiceService) { }

  ngOnInit(): void {
   
  }
  ngAfterViewInit() {
    //this.menu.setMenuDetails('dinv');
  }
}
