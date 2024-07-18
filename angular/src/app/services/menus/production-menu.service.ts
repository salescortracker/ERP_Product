import { Injectable } from '@angular/core';
import { AdminGeneralInfoService } from '../admin/admin-general-info.service';

@Injectable({
  providedIn: 'root'
})
export class ProductionMenuService {
  constructor(private adm:AdminGeneralInfoService){

  }
  public getProductionMenu():any[]
  {
    var mainmenu:any[]=[{
      menu:'Production',
      modulecode:10,
      menucode:0,
      sceecode:0,
      trancode:0,
      opencheck:true,
      actualcheck:false,
      children:this.getMainChildren()
    }];

    return mainmenu;
  }

  private getMainChildren():any[]
{
  var mainchildren:any[]=[];
  mainchildren.push({
    menu:'Dashboard',
    modulecode:10,
    menucode:0,
    sceecode:0,
    trancode:1,
    opencheck:true,
    actualcheck:false,
    children:[]

  });
  mainchildren.push({
    menu:'Masters',
    modulecode:10,
    menucode:1,
    sceecode:0,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:this.getMasterChildren()

  });
  mainchildren.push({
    menu:'Transactions',
    modulecode:10,
    menucode:2,
    sceecode:0,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:this.getTransactionChildren()

  });

  mainchildren.push({
    menu:'Reports',
    modulecode:10,
    menucode:7,
    sceecode:0,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:this.getReportsChildren()

  });

 /*mainchildren.push({
    menu:'Analysis',
    modulecode:10,
    menucode:9,
    sceecode:0,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:this.get()

  });*/


return mainchildren;
}



public getMasterChildren():any[]
{
var masterchildren:any[]=[];
masterchildren.push({
  menu:'Processes',
  modulecode:10,
  menucode:1,
  sceecode:1,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[]
});


masterchildren.push({
  menu:'Product Attachments',
  modulecode:10,
  menucode:1,
  sceecode:2,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[]
});

return masterchildren;
}


public getTransactionChildren():any[]
{
  var transchildren:any[]=[];
  transchildren.push({
    menu:'Mass Planning',
    modulecode:10,
    menucode:2,
    sceecode:1,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
  {
    
    menu:'Create',
    modulecode:10,
    menucode:2,
    sceecode:1,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:10,
    menucode:2,
    sceecode:1,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:10,
    menucode:2,
    sceecode:1,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  },
   
  
    ]
  });

  transchildren.push({
    menu:'Batch Planning',
    modulecode:10,
    menucode:2,
    sceecode:2,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
  {
    
    menu:'Create',
    modulecode:10,
    menucode:2,
    sceecode:2,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:10,
    menucode:2,
    sceecode:2,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:10,
    menucode:2,
    sceecode:2,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  },
   
    ]
  });
      

  transchildren.push({
    menu:'Process wise Production',
    modulecode:10,
    menucode:2,
    sceecode:3,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
  {
    
    menu:'Create',
    modulecode:10,
    menucode:2,
    sceecode:3,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:10,
    menucode:2,
    sceecode:3,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:10,
    menucode:2,
    sceecode:3,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  },
   
    ]
  });

 
  return transchildren;
}




public getReportsChildren():any[]
{
  var repchildren:any[]=[];

  repchildren.push({
    menu:'Tra Reports',
    modulecode:10,
    menucode:7,
    sceecode:1,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });
   
  
  return repchildren;
}


public getProductionMenuMake():any[]
{
  var menu:any[]=[];
  if(this.adm.screenCheck(10,0,0,1))
  {
    menu.push({
       path: '/production/dashboard', title: 'Dashboard', icon: 'ft-pie-chart', class: 'dropdown nav-item has-sub',    isExternalLink: false, submenu:[]
    });
   }
  var masters:any[]=[];
  if(this.adm.screenCheck(10,1,1,0))
  {
    masters.push(   
      { path: '/production/ppcprocess', title: 'Processes', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
  }
  if(this.adm.screenCheck(10,1,2,0))
  {
    masters.push(   
      { path: '/production/ppcprocessattachments', title: 'Producti Attachments', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
  }

  if(masters.length > 0)
 {
   menu.push(
    { path: '', title: 'Masters', icon: 'ft-menu', class: 'dropdown nav-item has-sub',  isExternalLink: false, submenu:  masters
    }
   )
 }

 var transactions1:any[]=[];
 
if(this.adm.screenCheck(10,2,1,0))
{
 transactions1.push( 
   { path: '/production/promassplanning', title: 'Mass Planning', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
}

if(this.adm.screenCheck(10,2,1,0))
{
 transactions1.push( 
   { path: '/production/probatchplanning', title: 'Batch Planning', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
}

if(this.adm.screenCheck(10,2,3,0))
{
 transactions1.push( 
   { path: '/production/proprocesswiseproduction', title: 'Process wise Production', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
}

if(transactions1.length > 0)
 {
  menu.push(
    { path: '', title: 'Transactions', icon: 'ft-file-text', class: 'dropdown nav-item has-sub',  isExternalLink: false, submenu:  transactions1
    }
   )
 }

 
 if(this.adm.screenCheck(10,9,1,0))
 {
   menu.push(
     
    { path: '', title: 'Production Reports', icon: 'icon-note', class: 'dropdown nav-item has-sub',  isExternalLink: false, submenu:  [
      { path: '/production/ppcrepmassachieve', title: 'Mass Acheivements', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/production/ppcrepmaterialrequired', title: 'Material Requirement', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
     // { path: '/production/ppcreprunningbatches', title: 'Running Batch Details', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/production/ppcrepmaterialcosting', title: 'Material Cost', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/production/ppcreppendingprocesses', title: 'Pending Processes', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
     // { path: '/production/ppcrepmachineusage', title: 'Machine usage', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/production/ppcrepmaterialwastage', title: 'Material Wastage/gain', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
     ]
  });
}

  return menu;
}
 


}

