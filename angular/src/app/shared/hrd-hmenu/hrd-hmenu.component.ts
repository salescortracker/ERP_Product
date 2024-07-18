import { Component, OnInit, ChangeDetectorRef, AfterViewInit, OnDestroy } from '@angular/core';
 
 
import { LayoutService } from '../services/layout.service';
import { ConfigService } from '../services/config.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HrdMenuService } from 'app/services/menus/hrd-menu.service';

@Component({
  selector: 'app-hrd-hmenu',
  templateUrl: './hrd-hmenu.component.html',
  styleUrls: ['./hrd-hmenu.component.scss']
})
export class HrdHMenuComponent implements OnInit {

  public menuItems: any[];
  public config: any = {};
  level: number = 0;
  transparentBGClass = "";
  menuPosition = 'Side';

  layoutSub: Subscription;

  constructor(private layoutService: LayoutService,
    private configService: ConfigService,
    private cdr: ChangeDetectorRef,
    private router: Router,private menu:HrdMenuService ) {
    this.config = this.configService.templateConf;
  }

  ngOnInit() {
    this.menuItems = this.menu.getHRDHorizontalMenuMake();
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
