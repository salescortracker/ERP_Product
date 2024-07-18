import { Component, OnInit, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { LayoutService } from '../services/layout.service';
import { Subscription } from 'rxjs';
import { AdmCountriesService } from 'app/services/admin/adm-countries.service';

@Component({
  selector: 'app-notification-sidebar',
  templateUrl: './notification-sidebar.component.html',
  styleUrls: ['./notification-sidebar.component.scss']
})
export class NotificationSidebarComponent implements OnInit, OnDestroy {

  layoutSub: Subscription;
  isOpen = false;
public details:any;
  ngOnInit() {

  }

  constructor(private layoutService: LayoutService,private adm:AdmCountriesService) {

    this.layoutSub = layoutService.toggleNotiSidebar$.subscribe(
      open => {
        this.isOpen = open;
      });

     
  }

  ngOnDestroy() {
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
  }

  onClose() {
    this.layoutService.toggleNotificationSidebar(false);
  }
public getActivityDetails()
{
  this.adm.getActivityLog().subscribe(res =>
    {
        this.details=res;
        console.log(this.details);
    });
}


}
