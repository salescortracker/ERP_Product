import { EventEmitter, Injectable, Output } from '@angular/core';
import{Observable,BehaviorSubject,Subscription} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {
  
  private menuDet:BehaviorSubject<any>= new BehaviorSubject<any>([]);
  private obj:any[];
  
  constructor() { }
  get initMenu()
  {
    return this.menuDet.asObservable();
  }
  public getMenuDetails()
  {
   return this.menuDet.asObservable();
  }
  public setMenuDetails(module:String)
  {
    
   var menu:any[];
   switch(module)
  {
   case "fo":
    menu=this.makeFOMenu();
    this.menuDet.next(menu);
     localStorage.setItem('modulename','fo');
     
   break;
  
  case "empty":
      menu=this.makeEmptyMenu();
      this.menuDet.next(menu);
      localStorage.setItem('modulename','empty');
    break;
  case "adm":
      menu=this.makeAdminMenu();
      this.menuDet.next(menu);
      localStorage.setItem('modulename','adm');
  case "dinv":
      menu=this.makeDesktopInventoryMenu();
      this.menuDet.next(menu);
      localStorage.setItem('modulename','dinv');
    break;
  break;

  }
  this.menuDet.next(menu);
  
  }
  private makeEmptyMenu():any[]
  {
    var emptyMenu:any[]=[];
    return emptyMenu;
  }
  
  
  private makeFOMenu():any[]
  {
  
  
    var foMenu:any[]=
  
    [
  
      {
        path: '', title: 'Masters', icon: 'ft-home', class: 'has-sub', badge: '10', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
          { path: '', title: 'Room Categories', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '', title: 'Rooms', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '', title: 'Post Charges', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '', title: 'Meal Plans', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
     
        ]
      }];
   
  
    return foMenu;
  }
  
  
private makeDesktopInventoryMenu():any[]
{
  var menu:any[]=[
{
    path: '', title: 'Masters', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
      { path: '/inventory/invum', title: 'Units', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/inventory/invstores', title: 'Stores', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/inventory/invitemgroupslist', title: 'Item Groups', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/inventory/invitemslist', title: 'Item Details', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/inventory/invopeningsotcks', title: 'Opening Stocks', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/inventory/invitemmerging', title: 'Item Merging', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/inventory/invsuppliergroupslist', title: 'Supplier Groups', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/inventory/invsupplierslist', title: 'Suppliers', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/inventory/invdepartmentslist', title: 'Departments', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/inventory/invlosseslist', title: 'Losses', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
    },
    {
      path: '', title: 'Purchases', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
        { path: '/inventory/invum', title: 'Purchase Orders', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/purchases/purpurchasetra', title: 'Purchases', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      ]
    }

  ];

  return menu;
}

 
  
  
  private makeAdminMenu():any[]
  {
    var admMenu:any=[];
  
    return admMenu;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}
