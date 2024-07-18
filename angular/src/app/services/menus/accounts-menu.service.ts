import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { AdminGeneralInfoService } from '../admin/admin-general-info.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsMenuService {

  constructor(private adm:AdminGeneralInfoService) { }

  public getAccountsMenu():any[]
  {
    var mainmenu:any[]=[{
      menu:'Accounts',
      modulecode:1,
      menucode:0,
      sceecode:0,
      trancode:0,
      opencheck:true,
      actualcheck:false,
      children:this.getMainChildren()
    }]

    return mainmenu;
  }
private getMainChildren():any[]
{
  var mainchildren:any[]=[];
  mainchildren.push({
    menu:'Dashboard',
    modulecode:1,
    menucode:0,
    sceecode:0,
    trancode:1,
    opencheck:true,
    actualcheck:false,
    children:[]

  });
  mainchildren.push({
    menu:'Masters',
    modulecode:1,
    menucode:1,
    sceecode:0,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:this.getMasterChildren()

  });
  mainchildren.push({
    menu:'Transactions',
    modulecode:1,
    menucode:2,
    sceecode:0,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:this.getTransactionChildren()

  });

  mainchildren.push({
    menu:'Reports',
    modulecode:1,
    menucode:8,
    sceecode:0,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:this.getReportsChildren()

  });


return mainchildren;
}

public getMasterChildren()
{
var masterchildren:any[]=[];
masterchildren.push({
  menu:'Account Groups',
  modulecode:1,
  menucode:1,
  sceecode:1,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:1,
  menucode:1,
  sceecode:1,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Modify',
  modulecode:1,
  menucode:1,
  sceecode:1,
  trancode:2,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Delete',
  modulecode:1,
  menucode:1,
  sceecode:1,
  trancode:3,
  opencheck:true,
  actualcheck:false,
},



  ]
});


masterchildren.push({
  menu:'Accounts',
  modulecode:1,
  menucode:1,
  sceecode:2,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:1,
  menucode:1,
  sceecode:2,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Modify',
  modulecode:1,
  menucode:1,
  sceecode:2,
  trancode:2,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Delete',
  modulecode:1,
  menucode:1,
  sceecode:2,
  trancode:3,
  opencheck:true,
  actualcheck:false,
},



  ]
});


masterchildren.push({
  menu:'Opening Balances',
  modulecode:1,
  menucode:1,
  sceecode:3,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[]
});



masterchildren.push({
  menu:'Assets',
  modulecode:1,
  menucode:1,
  sceecode:4,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:1,
  menucode:1,
  sceecode:4,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Modify',
  modulecode:1,
  menucode:1,
  sceecode:4,
  trancode:2,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Delete',
  modulecode:1,
  menucode:1,
  sceecode:4,
  trancode:3,
  opencheck:true,
  actualcheck:false,
},



  ]
});

return masterchildren;


}





public getTransactionChildren():any[]
{
  var transchildren:any[]=[];
  transchildren.push({
    menu:'Payments',
    modulecode:1,
    menucode:2,
    sceecode:1,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
  {
    
    menu:'Create',
    modulecode:1,
    menucode:2,
    sceecode:1,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:1,
    menucode:2,
    sceecode:1,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:1,
    menucode:2,
    sceecode:1,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Working in other dates',
    modulecode:1,
    menucode:2,
    sceecode:1,
    trancode:4,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Print Voucher',
    modulecode:1,
    menucode:2,
    sceecode:1,
    trancode:7,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Reprint Voucher',
    modulecode:1,
    menucode:2,
    sceecode:1,
    trancode:8,
    opencheck:true,
    actualcheck:false,
  },
  
    ]
  });
  



  transchildren.push({
    menu:'Receipts',
    modulecode:1,
    menucode:2,
    sceecode:2,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
  {
    
    menu:'Create',
    modulecode:1,
    menucode:2,
    sceecode:2,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:1,
    menucode:2,
    sceecode:2,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:1,
    menucode:2,
    sceecode:2,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Working in other dates',
    modulecode:1,
    menucode:2,
    sceecode:2,
    trancode:4,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Print Receipt',
    modulecode:1,
    menucode:2,
    sceecode:2,
    trancode:7,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Reprint Receipt',
    modulecode:1,
    menucode:2,
    sceecode:2,
    trancode:8,
    opencheck:true,
    actualcheck:false,
  },
  
    ]
  });



  transchildren.push({
    menu:'Journals',
    modulecode:1,
    menucode:2,
    sceecode:3,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
  {
    
    menu:'Create',
    modulecode:1,
    menucode:2,
    sceecode:3,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:1,
    menucode:2,
    sceecode:3,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:1,
    menucode:2,
    sceecode:3,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Working in other dates',
    modulecode:1,
    menucode:2,
    sceecode:3,
    trancode:4,
    opencheck:true,
    actualcheck:false,
  },
  
  
    ]
  });


  
  transchildren.push({
    menu:'Transfers',
    modulecode:1,
    menucode:2,
    sceecode:4,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
  {
    
    menu:'Create',
    modulecode:1,
    menucode:2,
    sceecode:4,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:1,
    menucode:2,
    sceecode:4,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:1,
    menucode:2,
    sceecode:4,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Working in other dates',
    modulecode:1,
    menucode:2,
    sceecode:4,
    trancode:4,
    opencheck:true,
    actualcheck:false,
  },
  
  
    ]
  });

  transchildren.push({
    menu:'BRS',
    modulecode:1,
    menucode:2,
    sceecode:5,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });

  transchildren.push({
    menu:'Year end',
    modulecode:1,
    menucode:2,
    sceecode:6,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });

  return transchildren;
}



public getReportsChildren():any[]
{
  var repchildren:any[]=[];

  repchildren.push({
    menu:'Key Reports',
    modulecode:1,
    menucode:8,
    sceecode:1,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });


  
  repchildren.push({
    menu:'Books',
    modulecode:1,
    menucode:8,
    sceecode:2,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });

  
  repchildren.push({
    menu:'Financial Statements',
    modulecode:1,
    menucode:8,
    sceecode:3,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });


  /*
  repchildren.push({
    menu:'Analysis',
    modulecode:1,
    menucode:8,
    sceecode:4,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });
*/



  return repchildren;

}

/*

  path: '', title: 'Administration', icon: 'ft-home', class: 'dropdown nav-item has-sub', isExternalLink: false, submenu: [
      { path: '/admin/countries', title: 'Countries', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: []  },
      { path: '/admin/states', title: 'States', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
      { path: '/admin/taxes', title: 'Taxes', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
      { path: '/admin/roles', title: 'Roles', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
      { path: '/admin/users', title: 'Users', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
        { path: '/admin/sysmake', title: 'System Making', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: []  },
     
     
      { path: '/admin/license', title: 'License', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
     
*/
public getAccountsHorizontalMenuMake():any[]
{
    var menu:any[]=[];
 if(this.adm.screenCheck(1,0,0,1))
 {
   menu.push({
      path: '/accounts/accdashboard', title: 'Dashboard', icon: 'ft-pie-chart', class: 'dropdown nav-item has-sub',    isExternalLink: false, submenu:[]
   });
  }

  var masters:any[]=[];
 
 if(this.adm.screenCheck(1,1,1,0))
 {
   masters.push(   
      { path: '/accounts/accaccountgroups', title: 'Account Groups', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(1,1,2,0))
 {
   masters.push(   
      { path: '/accounts/accaccounts', title: 'Accounts', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(1,1,3,0))
 {
   masters.push(   
      { path: '/accounts/accopenings', title: 'Opening Balances', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(1,1,4,0))
 {
   masters.push(   
      { path: '/accounts/accassets', title: 'Assets', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(masters.length > 0)
 {
   menu.push(
    { path: '', title: 'Masters', icon: 'ft-menu', class: 'dropdown nav-item has-sub',  isExternalLink: false, submenu:  masters
    }
   )
 }

var transactions:any[]=[];

 
if(this.adm.screenCheck(1,2,1,0))
 {
   transactions.push(   
      { path: '/accounts/accpayments', title: 'Payments', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(1,2,2,0))
 {
   transactions.push(   
      { path: '/accounts/accreceipts', title: 'Receipts', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(1,2,3,0))
 {
   transactions.push(   
      { path: '/accounts/accjournals', title: 'Journals', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(1,2,4,0))
 {
   transactions.push(   
      { path: '/accounts/acctransfers', title: 'Transfers', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(1,2,5,0))
 {
   transactions.push(   
      { path: '/accounts/accbrs', title: 'BRS', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(1,2,6,0))
 {
   transactions.push(   
      { path: '/accounts/accyearend', title: 'Year End', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }

 if(transactions.length > 0)
{
  menu.push( {
    path: '', title: 'Transactions', icon: 'ft-file-text', class: 'dropdown nav-item has-sub',  isExternalLink: false, 
    submenu: transactions  
    
  });
}
if(this.adm.screenCheck(1,8,1,0))
{
  menu.push( {
    path: '', title: 'Key Reports', icon: 'icon-key', class: 'dropdown nav-item has-sub',   isExternalLink: false, submenu: [
      { path: '/accounts/acckeyrepgroups', title: 'Account Groups', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/accounts/acckerepaccounts', title: 'Accounts', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/accounts/acckeyrepassets', title: 'Assets', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  });
}
if(this.adm.screenCheck(1,8,2,0))
{
  menu.push( {
    path: '', title: 'Books', icon: 'icon-note', class: 'dropdown nav-item has-sub',   isExternalLink: false, submenu: [
      { path: '/accounts/accfinrepcashbook', title: 'Cash Book', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/accounts/accfinrepbankbook', title: 'Bank Book', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/accounts/accfinrepdaybook', title: 'Day Book', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      
     // { path: '/accounts/accfinrepcompletedayinfo', title: 'Complete Day Info', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //  { path: '/accounts/accfinrepledgerstd', title: 'Ledgers Std', icon: 'ft-arrow-right submenu-icon', class: '', badge: 'dropdown-item', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/accounts/accfinrepledgerdetailed', title: 'Ledgers Detailed', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    
        ]
    });
}

if(this.adm.screenCheck(1,8,3,0))
{
  menu.push(   {
    path: '', title: 'Financial Statements', icon: 'ft-dollar-sign', class: 'dropdown nav-item has-sub', isExternalLink: false, submenu: [
        { path: '/accounts/accfinreptrialbalance', title: 'Trial Balance', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/accounts/accfinrepschedules', title: 'Schedules', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/accounts/accfinreppnlacc', title: 'P & L Account', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/accounts/accfinrepbalancesheet', title: 'Balance Sheet', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
    });
}
if(this.adm.screenCheck(1,8,4,0))
{
   menu.push(   {
    path: '', title: 'Analysis Reports', icon: 'icon-pie-chart', class: 'dropdown nav-item has-sub',   isExternalLink: false, submenu: [
      { path: '/accounts/accrepactivities', title: 'Activity Log', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/accounts/accfinrepagingreceivables', title: 'Aging Receivables', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
     { path: '/accounts/accfinrepagingpayables', title: 'Aging Payables', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/accounts/accfinrepinterestcalc', title: 'Interest Calculations', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    
]
}); 
}

return menu;



}
public getAccountsMenuMake():any[]
{
    var menu:any[]=[];
 if(this.adm.screenCheck(1,0,0,1))
 {
   menu.push({
      path: '/accounts/accdashboard', title: 'Dashboard', icon: 'ft-pie-chart', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu:[]
   });
  }
  var masters:any[]=[];
 
 if(this.adm.screenCheck(1,1,1,0))
 {
   masters.push(   
      { path: '/accounts/accaccountgroups', title: 'Account Groups', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(1,1,2,0))
 {
   masters.push(   
      { path: '/accounts/accaccounts', title: 'Accounts', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(1,1,3,0))
 {
   masters.push(   
      { path: '/accounts/accopenings', title: 'Opening Balances', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(1,1,4,0))
 {
   masters.push(   
      { path: '/accounts/accassets', title: 'Assets', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(masters.length > 0)
 {
   menu.push(
    { path: '', title: 'Masters', icon: 'ft-menu', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu:  masters
    }
   )
 }
 
var transactions:any[]=[];

 
if(this.adm.screenCheck(1,2,1,0))
 {
   transactions.push(   
      { path: '/accounts/accpayments', title: 'Payments', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(1,2,2,0))
 {
   transactions.push(   
      { path: '/accounts/accreceipts', title: 'Receipts', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(1,2,3,0))
 {
   transactions.push(   
      { path: '/accounts/accjournals', title: 'Journals', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(1,2,4,0))
 {
   transactions.push(   
      { path: '/accounts/acctransfers', title: 'Transfers', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(1,2,5,0))
 {
   transactions.push(   
      { path: '/accounts/accbrs', title: 'BRS', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(1,2,6,0))
 {
   transactions.push(   
      { path: '/accounts/accyearend', title: 'Year End', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }

 if(transactions.length > 0)
{
  menu.push( {
    path: '', title: 'Transactions', icon: 'ft-file-text', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, 
    submenu: transactions  
    
  });
}
if(this.adm.screenCheck(1,8,1,0))
{
  menu.push( {
    path: '', title: 'Key Reports', icon: 'icon-key', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
      { path: '/accounts/acckeyrepgroups', title: 'Account Groups', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/accounts/acckerepaccounts', title: 'Accounts', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/accounts/acckeyrepassets', title: 'Assets', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  });
}
if(this.adm.screenCheck(1,8,2,0))
{
  menu.push( {
    path: '', title: 'Books', icon: 'icon-note', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
      { path: '/accounts/accfinrepcashbook', title: 'Cash Book', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/accounts/accfinrepbankbook', title: 'Bank Book', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/accounts/accfinrepdaybook', title: 'Day Book', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      
    //  { path: '/accounts/accfinrepcompletedayinfo', title: 'Complete Day Info', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //  { path: '/accounts/accfinrepledgerstd', title: 'Ledgers Std', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/accounts/accfinrepledgerdetailed', title: 'Ledgers Detailed', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    
        ]
    });
}

if(this.adm.screenCheck(1,8,3,0))
{
  menu.push(   {
    path: '', title: 'Financial Statements', icon: 'ft-dollar-sign', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
        { path: '/accounts/accfinreptrialbalance', title: 'Trial Balance', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/accounts/accfinrepschedules', title: 'Schedules', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/accounts/accfinreppnlacc', title: 'P & L Account', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/accounts/accfinrepbalancesheet', title: 'Balance Sheet', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
    });
}
 /*if(this.adm.screenCheck(1,8,4,0))
{
   menu.push(   {
    path: '', title: 'Analysis Reports', icon: 'icon-pie-chart', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
      { path: '/accounts/accrepactivities', title: 'Activity Log', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/accounts/accfinrepagingreceivables', title: 'Aging Receivables', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
     { path: '/accounts/accfinrepagingpayables', title: 'Aging Payables', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/accounts/accfinrepinterestcalc', title: 'Interest Calculations', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    
]
}); 
} */
 
return menu;



}
 
}

