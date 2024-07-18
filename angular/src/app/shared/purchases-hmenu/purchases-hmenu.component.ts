import { Component, OnInit, ChangeDetectorRef, AfterViewInit, OnDestroy } from '@angular/core';
 
 
import { LayoutService } from '../services/layout.service';
import { ConfigService } from '../services/config.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AccountsMenuService } from 'app/services/menus/accounts-menu.service';
import { PurchasesMenuComponent } from '../purchases-menu/purchases-menu.component';
import { PurchasesMenuService } from 'app/services/menus/purchases-menu.service';


@Component({
  selector: 'app-purchases-hmenu',
  templateUrl: './purchases-hmenu.component.html',
  styleUrls: ['./purchases-hmenu.component.scss']
})
export class PurchasesHmenuComponent implements OnInit {

  public menuItems: any[];
  public config: any = {};
  level: number = 0;
  transparentBGClass = "";
  menuPosition = 'Side';

  layoutSub: Subscription;

  constructor(private layoutService: LayoutService,
    private configService: ConfigService,
    private cdr: ChangeDetectorRef,
    private router: Router,private menu:PurchasesMenuService ) {
    this.config = this.configService.templateConf;
  }

  ngOnInit() {
     this.menuItems = this.menu.getPurchasesHorizontalMenuMake();
  }

  ngAfterViewInit() {

    this.layoutSub = this.configService.templateConf$.subscribe((templateConf) => {
      if (templateConf) {
        this.config = templateConf;
      }
      this.loadLayout();
      this.cdr.markForCheck();

    })
  }

  loadLayout() {

    if (this.config.layout.menuPosition && this.config.layout.menuPosition.toString().trim() != "") {
      this.menuPosition = this.config.layout.menuPosition;
    }


    if (this.config.layout.variant === "Transparent") {
      this.transparentBGClass = this.config.layout.sidebar.backgroundColor;
    }
    else {
      this.transparentBGClass = "";
    }

  }

  ngOnDestroy() {
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
  }

}
