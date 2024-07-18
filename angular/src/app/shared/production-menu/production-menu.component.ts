import {
  Component, OnInit, ViewChild, OnDestroy,
  ElementRef, AfterViewInit, ChangeDetectorRef, HostListener
} from "@angular/core";
 
import { Observable, Subscription } from 'rxjs';
import { Router } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
import { customAnimations } from "../animations/custom-animations";
import { DeviceDetectorService } from 'ngx-device-detector';
import { ConfigService } from '../services/config.service';
import { LayoutService } from '../services/layout.service';
import { MenuServiceService } from "app/services/admin/menu-service.service";
import { AdminGeneralInfoService } from "app/services/admin/admin-general-info.service";
import { ProductionMenuService } from "app/services/menus/production-menu.service";
@Component({
  selector: 'app-production-menu',
  templateUrl: './production-menu.component.html',
  styleUrls: ['./production-menu.component.scss']
})
export class ProductionMenuComponent implements OnInit {

  @ViewChild('toggleIcon') toggleIcon: ElementRef;
  public menus:any[];
  public menuItems: any[];
  level: number = 0;
  logoUrl = 'assets/img/logo.png';
  public config: any = {};
  protected innerWidth: any;
  layoutSub: Subscription;
  configSub: Subscription;
  perfectScrollbarEnable = true;
  collapseSidebar = false;
  resizeTimeout;
public branchName:string;
  constructor(
    private router: Router,
    public translate: TranslateService,
    private layoutService: LayoutService,
    private configService: ConfigService,
    private cdr: ChangeDetectorRef,
    private deviceService: DeviceDetectorService,
    private menu:MenuServiceService,
    private adm:AdminGeneralInfoService,
    private ppcmenu:ProductionMenuService
  ) {
    this.config = this.configService.templateConf;
    this.innerWidth = window.innerWidth;
    this.isTouchDevice();

    
var usr=this.adm.getUserCompleteInformation().usr;
this.branchName= usr.pCode + "_" + usr.vendor + ".png"; 
this.menuItems=this.ppcmenu.getProductionMenuMake();
  }

 
  ngOnInit() {
    
   this.loadLayout();

  }

  public setLayOut(modu:string)
  {
    this.menu.setMenuDetails(modu);
  }

  ngAfterViewInit() {

    this.configSub = this.configService.templateConf$.subscribe((templateConf) => {
      if (templateConf) {
        this.config = templateConf;
      }
      this.loadLayout();
      this.cdr.markForCheck();

    });

    this.layoutSub = this.layoutService.overlaySidebarToggle$.subscribe(
      collapse => {
        if (this.config.layout.menuPosition === "Side") {
          this.collapseSidebar = collapse;
        }
      });

  }


  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
      if (this.resizeTimeout) {
          clearTimeout(this.resizeTimeout);
      }
      this.resizeTimeout = setTimeout((() => {
        this.innerWidth = event.target.innerWidth;
          this.loadLayout();
      }).bind(this), 500);
  }

  loadLayout() {
    


    if (this.config.layout.sidebar.backgroundColor === 'white') {
      this.logoUrl = 'assets/img/logo-dark.png';
    }
    else {
      this.logoUrl = 'assets/img/logo.png';
    }

    if(this.config.layout.sidebar.collapsed) {
      this.collapseSidebar = true;
    }
    else {
      this.collapseSidebar = false;
    }
  }

  toggleSidebar() {
    let conf = this.config;
    conf.layout.sidebar.collapsed = !this.config.layout.sidebar.collapsed;
    this.configService.applyTemplateConfigChange({ layout: conf.layout });

    setTimeout(() => {
      this.fireRefreshEventOnWindow();
    }, 300);
  }

  fireRefreshEventOnWindow = function () {
    const evt = document.createEvent("HTMLEvents");
    evt.initEvent("resize", true, false);
    window.dispatchEvent(evt);
  };

  CloseSidebar() {
    this.layoutService.toggleSidebarSmallScreen(false);
  }

  isTouchDevice() {

    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();

    if (isMobile || isTablet) {
      this.perfectScrollbarEnable = false;
    }
    else {
      this.perfectScrollbarEnable = true;
    }

  }


  ngOnDestroy() {
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
    if (this.configSub) {
      this.configSub.unsubscribe();
    }

  }

  resetMainMenu()
  {
    this.adm.makeRedirections();
  }

}
