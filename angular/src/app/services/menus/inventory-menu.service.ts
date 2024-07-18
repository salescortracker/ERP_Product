import { Injectable } from '@angular/core';
import { AdminGeneralInfoService } from '../admin/admin-general-info.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryMenuService {
  constructor(private adm:AdminGeneralInfoService)
  {

  }
  public getInventoryMenu():any[]
  {
    var mainmenu:any[]=[{
      menu:'Inventory',
      modulecode:3,
      menucode:0,
      sceecode:0,
      trancode:1,
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
    menu:'Masters',
    modulecode:3,
    menucode:1,
    sceecode:0,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:this.getMasterChildren()

  });
  mainchildren.push({
    menu:'Transactions',
    modulecode:3,
    menucode:2,
    sceecode:0,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:this.getTransactionChildren()

  });

  mainchildren.push({
    menu:'Reports',
    modulecode:3,
    menucode:9,
    sceecode:0,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:this.getReportsChildren()

  });

 mainchildren.push({
    menu:'Settings',
    modulecode:3,
    menucode:12,
    sceecode:0,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:this.getSetupChildren()

  });


return mainchildren;
}



public getMasterChildren():any[]
{
var masterchildren:any[]=[];
masterchildren.push({
  menu:'Units',
  modulecode:3,
  menucode:1,
  sceecode:1,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[ {
    
    menu:'Create',
    modulecode:3,
    menucode:1,
    sceecode:1,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:3,
    menucode:1,
    sceecode:1,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:3,
    menucode:1,
    sceecode:1,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  }]
});

masterchildren.push({
  menu:'Stores',
  modulecode:3,
  menucode:1,
  sceecode:2,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[ {
    
    menu:'Create',
    modulecode:3,
    menucode:1,
    sceecode:2,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:3,
    menucode:1,
    sceecode:2,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:3,
    menucode:1,
    sceecode:2,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  }]
});

masterchildren.push({
  menu:'Item Groups',
  modulecode:3,
  menucode:1,
  sceecode:3,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[ {
    
    menu:'Create',
    modulecode:3,
    menucode:1,
    sceecode:3,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:3,
    menucode:1,
    sceecode:3,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:3,
    menucode:1,
    sceecode:3,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  }]
});
masterchildren.push({
  menu:'Item Details',
  modulecode:3,
  menucode:1,
  sceecode:4,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[ {
    
    menu:'Create',
    modulecode:3,
    menucode:1,
    sceecode:4,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:3,
    menucode:1,
    sceecode:4,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:3,
    menucode:1,
    sceecode:4,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  }]
});


masterchildren.push({
  menu:'Opening Stocks',
  modulecode:3,
  menucode:1,
  sceecode:5,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[]
});

masterchildren.push({
  menu:'Departments',
  modulecode:3,
  menucode:1,
  sceecode:6,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[ {
    
    menu:'Create',
    modulecode:3,
    menucode:1,
    sceecode:6,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:3,
    menucode:1,
    sceecode:6,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:3,
    menucode:1,
    sceecode:6,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  }]
});

masterchildren.push({
  menu:'Losses',
  modulecode:3,
  menucode:1,
  sceecode:7,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[ {
    
    menu:'Create',
    modulecode:3,
    menucode:1,
    sceecode:7,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:3,
    menucode:1,
    sceecode:7,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:3,
    menucode:1,
    sceecode:7,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  }]
});

return masterchildren;
}


public getTransactionChildren():any[]
{
  var transchildren:any[]=[];
  transchildren.push({
    menu:'Material Issues',
    modulecode:2,
    menucode:2,
    sceecode:1,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
  {
    
    menu:'Create',
    modulecode:2,
    menucode:2,
    sceecode:1,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:2,
    menucode:2,
    sceecode:1,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:2,
    menucode:2,
    sceecode:1,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  },
   
  
    ]
  });

  transchildren.push({
    menu:'Material Losses',
    modulecode:2,
    menucode:2,
    sceecode:2,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
  {
    
    menu:'Create',
    modulecode:2,
    menucode:2,
    sceecode:2,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:2,
    menucode:2,
    sceecode:2,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:2,
    menucode:2,
    sceecode:2,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  },
   
    ]
  });
      
/*
  transchildren.push({
    menu:'Process wise Planning',
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
  });*/

 
  return transchildren;
}




public getReportsChildren():any[]
{
  var repchildren:any[]=[];

  repchildren.push({
    menu:'Key Reports',
    modulecode:2,
    menucode:9,
    sceecode:1,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });
  repchildren.push({
    menu:'Transaction Reports',
    modulecode:2,
    menucode:9,
    sceecode:2,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });
  repchildren.push({
    menu:'Stock Reports',
    modulecode:2,
    menucode:9,
    sceecode:3,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });
  repchildren.push({
    menu:'Analysis Reports',
    modulecode:2,
    menucode:9,
    sceecode:4,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });

  
  return repchildren;
}


public getSetupChildren():any[]
{
  var setupChildren:any[]=[];
  setupChildren.push({
    menu:'Settings',
    modulecode:2,
    menucode:12,
    sceecode:1,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });
 /* setupChildren.push({
    menu:'Email Settings',
    modulecode:6,
    menucode:9,
    sceecode:2,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });
  setupChildren.push({
    menu:'SMS Settings',
    modulecode:6,
    menucode:9,
    sceecode:3,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });
  setupChildren.push({
    menu:'Taxes',
    modulecode:6,
    menucode:9,
    sceecode:4,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });
  setupChildren.push({
    menu:'Checkout Plans',
    modulecode:6,
    menucode:9,
    sceecode:5,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });
  setupChildren.push({
    menu:'Checkout Slabs',
    modulecode:6,
    menucode:9,
    sceecode:6,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });
  setupChildren.push({
    menu:'Bill Templates',
    modulecode:6,
    menucode:9,
    sceecode:7,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });
  setupChildren.push({
    menu:'Accounts Assign',
    modulecode:6,
    menucode:9,
    sceecode:8,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });*/
  return setupChildren;
}


public getInventoryMenuMake():any[]
{
     var menu:any[]=[];
 if(this.adm.screenCheck(3,0,0,1))
 {
   menu.push({
    path: '/inventory/invdashusine', title: 'Dashboard', icon: 'ft-pie-chart', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu:[]   });
  }

  var masters:any[]=[];
 
 if(this.adm.screenCheck(3,1,1,0))
 {
   masters.push(   
      { path: '/inventory/invum', title: 'Units', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(3,1,2,0))
 {
   masters.push(   
      { path: '/inventory/invstores', title: 'Stores', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(3,1,3,0))
 {
   masters.push(   
      { path: '/inventory/invitemgroupslist', title: 'Item Groups', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(3,1,4,0))
 {
   masters.push(   
      { path: '/inventory/invitemstra', title: 'Item Details', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(3,1,5,0))
 {
   masters.push(   
      { path: '/inventory/invopeningsotcks', title: 'Opening Stocks', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(3,1,6,0))
 {
   masters.push(   
      { path: '/inventory/invdepts', title: 'Departments', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(3,1,7,0))
 {
   masters.push(   
      { path: '/inventory/invlosseslist', title: 'Losses', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }

 if(masters.length > 0)
 {
   menu.push(
    { path: '', title: 'Masters', icon: 'ft-menu', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu:  masters
    }
   );
 }

 var transactions1:any[]=[];
 if(this.adm.screenCheck(3,2,1,0))
 {
  transactions1.push(   
      { path: '/inventory/consuproduct', title: 'Material Issues', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(3,2,3,0))
 {
  transactions1.push(   
      { path: '/inventory/lossesproduct', title: 'Material Losses', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(3,2,4,0))
 {
  transactions1.push(   
      { path: '/inventory/invsamplesin', title: 'Sample Inwards', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(3,2,5,0))
 {
  transactions1.push(   
      { path: '/inventory/invsamplesout', title: 'Sample Outwards', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 /*
 if(this.adm.screenCheck(3,2,6,0))
 {
  transactions1.push(   
      { path: '/inventory/auditconsu', title: 'Auditing', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(3,2,7,0))
 {
  transactions1.push(   
      { path: '/inventory/auditconsuclose', title: 'Auditit Closing', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }*/

 if(transactions1.length > 0)
 {
   menu.push(
    { path: '', title: 'Transactions', icon: 'ft-file-text', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu:  transactions1
    }
   ); 
 }

 if(this.adm.screenCheck(3,9,1,0))
 {
   menu.push({
    path: '', title: 'Key Reports', icon: 'icon-key', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
      { path: '/inventory/invkeyrepum', title: 'Units', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/inventory/invkeyrepstores', title: 'Stores', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/inventory/invkeyrepitemgroups', title: 'Item Groups', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/inventory/invkeyrepitems', title: 'Items', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/inventory/invkeyrepdepartments', title: 'Departments', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/inventory/invkeyreplosses', title: 'Losses', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  });
 }


 if(this.adm.screenCheck(3,9,2,0))
 {
   menu.push({
    path: '', title: 'Cost Reports', icon: 'icon-note', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
      { path: '/inventory/invcostreplistofissues', title: 'List of Issues', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/inventory/invcostrepitemwiseissues', title: 'Product wise Costing', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/inventory/purrepomsupplierwiseadvances', title: 'Supplier wise Advances', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    
    ]
  });
 
 }
 if(this.adm.screenCheck(3,9,3,0))
 {
  menu.push({
    path: '', title: 'Stock Reports', icon: 'icon-note', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
      { path: '/inventory/invcostrepclosingvalue', title: 'Closing Stock', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    
    ]
  });
  
 }

 




 return menu;
}


}

