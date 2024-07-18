import { Injectable } from '@angular/core';
import { AdminGeneralInfoService } from '../admin/admin-general-info.service';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceMenuService {

  constructor(private adm:AdminGeneralInfoService) { }

  public getMaintenanceMenu():any[]
  {
    var mainmenu:any[]=[{
      menu:'Maintenance',
      modulecode:9,
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
    menu:'Masters',
    modulecode:9,
    menucode:1,
    sceecode:0,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:this.getMasterChildren()

  });
  mainchildren.push({
    menu:'Transactions',
    modulecode:9,
    menucode:2,
    sceecode:0,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:this.getTransactionChildren()

  });

  mainchildren.push({
    menu:'Reports',
    modulecode:9,
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
  menu:'Equipment Groups',
  modulecode:9,
  menucode:1,
  sceecode:1,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:9,
  menucode:1,
  sceecode:1,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Modify',
  modulecode:9,
  menucode:1,
  sceecode:1,
  trancode:2,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Delete',
  modulecode:9,
  menucode:1,
  sceecode:1,
  trancode:3,
  opencheck:true,
  actualcheck:false,
},



  ]
});


masterchildren.push({
  menu:'Equipment',
  modulecode:9,
  menucode:1,
  sceecode:2,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:9,
  menucode:1,
  sceecode:2,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Modify',
  modulecode:9,
  menucode:1,
  sceecode:2,
  trancode:2,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Delete',
  modulecode:9,
  menucode:1,
  sceecode:2,
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
    menu:'Preventive Maintenance',
    modulecode:9,
    menucode:2,
    sceecode:1,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
  {
    
    menu:'Create',
    modulecode:9,
    menucode:2,
    sceecode:1,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:9,
    menucode:2,
    sceecode:1,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:9,
    menucode:2,
    sceecode:1,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  },
 
  
    ]
  });
  



  transchildren.push({
    menu:'Breakdowns',
    modulecode:9,
    menucode:2,
    sceecode:2,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
  {
    
    menu:'Create',
    modulecode:9,
    menucode:2,
    sceecode:2,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:9,
    menucode:2,
    sceecode:2,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:9,
    menucode:2,
    sceecode:2,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  },
  
  
    ]
  });



  transchildren.push({
    menu:'Services',
    modulecode:9,
    menucode:2,
    sceecode:3,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
  {
    
    menu:'Create',
    modulecode:9,
    menucode:2,
    sceecode:3,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:9,
    menucode:2,
    sceecode:3,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:9,
    menucode:2,
    sceecode:3,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  },
  
  
    ]
  });


  
  transchildren.push({
    menu:'Insurances',
    modulecode:9,
    menucode:2,
    sceecode:4,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
  {
    
    menu:'Create',
    modulecode:9,
    menucode:2,
    sceecode:4,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:9,
    menucode:2,
    sceecode:4,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:9,
    menucode:2,
    sceecode:4,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  },
   
  
    ]
  });
 
 
  transchildren.push({
    menu:'Plant Down',
    modulecode:9,
    menucode:2,
    sceecode:5,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
  {
    
    menu:'Create',
    modulecode:9,
    menucode:2,
    sceecode:5,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:9,
    menucode:2,
    sceecode:5,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:9,
    menucode:2,
    sceecode:5,
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
    menu:'Key Reports',
    modulecode:9,
    menucode:8,
    sceecode:1,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });


  
  repchildren.push({
    menu:'Reports',
    modulecode:9,
    menucode:8,
    sceecode:2,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });

   

  
  repchildren.push({
    menu:'Analysis',
    modulecode:9,
    menucode:8,
    sceecode:3,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });




  return repchildren;

}




public getMaintenanceMenuMake():any[]
{
    var menu:any[]=[];
 if(this.adm.screenCheck(9,0,0,1))
 {
   menu.push({
      path: '/maintenance/maindashboard', title: 'Dashboard', icon: 'ft-pie-chart', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu:[]
   });
  }
  var masters:any[]=[];
 
 if(this.adm.screenCheck(9,1,1,0))
 {
   masters.push(   
      { path: '/maintenance/maiequipgroups', title: 'Equipment Groups', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(9,1,2,0))
 {
   masters.push(   
      { path: '/maintenance/maiequipment', title: 'Equipment', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
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

 
if(this.adm.screenCheck(9,2,1,0))
 {
   transactions.push(   
      { path: '/maintenance/maipm', title: 'Preventive Maintenance', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(9,2,2,0))
 {
   transactions.push(   
      { path: '/maintenance/maibreakdown', title: 'Breakdown', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(9,2,3,0))
 {
   transactions.push(   
      { path: '/maintenance/maiserviceassign', title: 'Service Assign', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(9,2,4,0))
 {
   transactions.push(   
      { path: '/maintenance/maiservices', title: 'Services', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(9,2,5,0))
 {
   transactions.push(   
      { path: '/maintenance/maiinsurances', title: 'Insurance', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(9,2,6,0))
 {
   transactions.push(   
      { path: '/maintenance/maiplantdown', title: 'Plant Down', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(9,2,7,0))
 {
   transactions.push(   
      { path: '/maintenance/maiamc', title: 'AMC', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(9,2,8,0))
 {
   transactions.push(   
      { path: '/maintenance/maipayments', title: 'Payments', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(transactions.length > 0)
{
  menu.push( {
    path: '', title: 'Transactions', icon: 'ft-file-text', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, 
    submenu: transactions  
    
  });
}
if(this.adm.screenCheck(9,9,1,0))
{
   menu.push( {
    path: '', title: 'Key Reports', icon: 'icon-key', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
      { path: '/maintenance/maikeyrepequipmentgroups', title: 'Equipment Groups', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/maintenance/maikeyrepequipment', title: 'Equipment', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
       ]
  }); 
}
 
if(this.adm.screenCheck(9,9,2,0))
{
  menu.push( {
    path: '', title: 'Reports', icon: 'icon-note', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
      { path: '/maintenance/maireplistofpm', title: 'List of PM', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/maintenance/mairepprojectedpm', title: 'Projected PM', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/maintenance/mairepexpiredpm', title: 'Expired PM', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      
       { path: '/maintenance/mairepcomplaints', title: 'Eqiupment Complaints', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
       { path: '/maintenance/mairepunassignedbreakdown', title: 'Breakdown Unassigned', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
       { path: '/maintenance/mairepunclearedbreakdown', title: 'Breakdown Uncleared', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
       { path: '/maintenance/mairepmachinehourlosses', title: 'Machine hours Loss', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
       { path: '/maintenance/mairepvendorranking', title: 'Vendor wise Rating', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
       { path: '/maintenance/mairepcosting', title: 'Maintenance Costing', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
       { path: '/maintenance/mairepequipmentwise', title: 'Equipment wise performance', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
       { path: '/maintenance/maireplistofplantdown', title: 'Plant Down', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
       { path: '/maintenance/mairepreasonwiseplantdown', title: 'Reason wise Plant down hours', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  
        ]
    });
}
var sets:any[]=[];

if(this.adm.screenCheck(9,11,1,0))
{
 sets.push(   
     { path: '/maintenance/maisetaccountsassign', title: 'Accounts Assign', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
  );
}
if(sets.length > 0)
{
  menu.push({
   path: '', title: 'Settings', icon: 'ft-settings', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu:sets

  })
} 
  
return menu;



}


}
