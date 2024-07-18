import { Injectable } from '@angular/core';
import { AdminGeneralInfoService } from '../admin/admin-general-info.service';

@Injectable({
  providedIn: 'root'
})
export class HrdMenuService {
  constructor(private adm:AdminGeneralInfoService)
  {

  }
  public getHRDMenu():any[]
  {
    var mainmenu:any[]=[{
      menu:'HRD',
      modulecode:8,
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
    modulecode:8,
    menucode:0,
    sceecode:0,
    trancode:1,
    opencheck:true,
    actualcheck:false,
    children:[]

  });
  mainchildren.push({
    menu:'Masters',
    modulecode:8,
    menucode:1,
    sceecode:0,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:this.getMasterChildren()

  });
  mainchildren.push({
    menu:'HRD',
    modulecode:8,
    menucode:2,
    sceecode:0,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:this.getHRDChildren()

  });
  mainchildren.push({
    menu:'Transactions',
    modulecode:8,
    menucode:3,
    sceecode:0,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:this.getTransactionChildren()

  });

  mainchildren.push({
    menu:'Reports',
    modulecode:8,
    menucode:8,
    sceecode:0,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:this.getReportsChildren()

  });
 
 mainchildren.push({
    menu:'Settings',
    modulecode:8,
    menucode:9,
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
  menu:'Departments',
  modulecode:8,
  menucode:1,
  sceecode:1,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[ {
    
    menu:'Create',
    modulecode:8,
    menucode:1,
    sceecode:1,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:8,
    menucode:1,
    sceecode:1,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:8,
    menucode:1,
    sceecode:1,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  }]
});

masterchildren.push({
  menu:'Allowances Deductions',
  modulecode:8,
  menucode:1,
  sceecode:2,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[ {
    
    menu:'Create',
    modulecode:8,
    menucode:1,
    sceecode:2,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:8,
    menucode:1,
    sceecode:2,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:8,
    menucode:1,
    sceecode:2,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  }]
});

masterchildren.push({
  menu:'Leaves',
  modulecode:8,
  menucode:1,
  sceecode:3,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[ {
    
    menu:'Create',
    modulecode:8,
    menucode:1,
    sceecode:3,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:8,
    menucode:1,
    sceecode:3,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:8,
    menucode:1,
    sceecode:3,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  }]
});
masterchildren.push({
  menu:'Designations',
  modulecode:8,
  menucode:1,
  sceecode:4,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[ {
    
    menu:'Create',
    modulecode:8,
    menucode:1,
    sceecode:4,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:8,
    menucode:1,
    sceecode:4,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:8,
    menucode:1,
    sceecode:4,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  }]
});


masterchildren.push({
  menu:'Range wise Allowances',
  modulecode:8,
  menucode:1,
  sceecode:5,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[]
});

masterchildren.push({
  menu:'Employees',
  modulecode:8,
  menucode:1,
  sceecode:6,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[ {
    
    menu:'Create',
    modulecode:8,
    menucode:1,
    sceecode:6,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:8,
    menucode:1,
    sceecode:6,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  }
  ]
});

masterchildren.push({
  menu:'Shifts',
  modulecode:8,
  menucode:1,
  sceecode:7,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[]
});

return masterchildren;
}


public getHRDChildren():any[]
{
  var transchildren:any[]=[];
  transchildren.push({
    menu:'Resume',
    modulecode:8,
    menucode:2,
    sceecode:1,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
  {
    
    menu:'Create',
    modulecode:8,
    menucode:2,
    sceecode:1,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:8,
    menucode:2,
    sceecode:1,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:8,
    menucode:2,
    sceecode:1,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  },
   
  
    ]
  });

  transchildren.push({
    menu:'Interviews',
    modulecode:8,
    menucode:2,
    sceecode:2,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
  {
    
    menu:'Create',
    modulecode:8,
    menucode:2,
    sceecode:2,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:8,
    menucode:2,
    sceecode:2,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:8,
    menucode:2,
    sceecode:2,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  },
   
    ]
  });
 
 
  transchildren.push({
    menu:'Appointments',
    modulecode:8,
    menucode:2,
    sceecode:3,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
  {
    
    menu:'Create',
    modulecode:8,
    menucode:2,
    sceecode:3,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:8,
    menucode:2,
    sceecode:3,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:8,
    menucode:2,
    sceecode:3,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  },
   
    ]
  });
 

  transchildren.push({
    menu:'Service Closing',
    modulecode:8,
    menucode:2,
    sceecode:4,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
  {
    
    menu:'Create',
    modulecode:8,
    menucode:2,
    sceecode:4,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:8,
    menucode:2,
    sceecode:4,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:8,
    menucode:2,
    sceecode:4,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  },
   
    ]
  });
 

  transchildren.push({
    menu:'Training Register',
    modulecode:8,
    menucode:2,
    sceecode:5,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
  {
    
    menu:'Create',
    modulecode:8,
    menucode:2,
    sceecode:5,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:8,
    menucode:2,
    sceecode:5,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:8,
    menucode:2,
    sceecode:5,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  },
   
    ]
  });
 
  transchildren.push({
    menu:'Meeting Details',
    modulecode:8,
    menucode:2,
    sceecode:6,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
  {
    
    menu:'Create',
    modulecode:8,
    menucode:2,
    sceecode:6,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:8,
    menucode:2,
    sceecode:6,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:8,
    menucode:2,
    sceecode:6,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  },
   
    ]
  });
 


  return transchildren;
}


public getTransactionChildren():any[]
{
  var transchildren:any[]=[];
  transchildren.push({
    menu:'In-Out',
    modulecode:8,
    menucode:3,
    sceecode:1,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
  {
    
    menu:'Create',
    modulecode:8,
    menucode:3,
    sceecode:1,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:8,
    menucode:3,
    sceecode:1,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:8,
    menucode:3,
    sceecode:1,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Woring other dates',
    modulecode:8,
    menucode:3,
    sceecode:1,
    trancode:4,
    opencheck:true,
    actualcheck:false,
  },
  
    ]
  });

  transchildren.push({
    menu:'Attendances',
    modulecode:8,
    menucode:3,
    sceecode:2,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
  {
    
    menu:'Create',
    modulecode:8,
    menucode:3,
    sceecode:2,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Woring other dates',
    modulecode:8,
    menucode:3,
    sceecode:2,
    trancode:4,
    opencheck:true,
    actualcheck:false,
  },
  
   
    ]
  });
 
 
  transchildren.push({
    menu:'Leave Request',
    modulecode:8,
    menucode:3,
    sceecode:3,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
  {
    
    menu:'Create',
    modulecode:8,
    menucode:3,
    sceecode:3,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
   
  {
    
    menu:'Delete',
    modulecode:8,
    menucode:3,
    sceecode:3,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  },
   
    ]
  });
 

  transchildren.push({
    menu:'Request Approval',
    modulecode:8,
    menucode:3,
    sceecode:4,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
  {
    
    menu:'Create',
    modulecode:8,
    menucode:3,
    sceecode:4,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  
  {
    
    menu:'Delete',
    modulecode:8,
    menucode:3,
    sceecode:4,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
   
    ]
  });
 

  transchildren.push({
    menu:'Advances',
    modulecode:8,
    menucode:3,
    sceecode:5,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
  {
    
    menu:'Create',
    modulecode:8,
    menucode:3,
    sceecode:5,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:8,
    menucode:3,
    sceecode:5,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:8,
    menucode:3,
    sceecode:5,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Working other dates',
    modulecode:8,
    menucode:4,
    sceecode:5,
    trancode:4,
    opencheck:true,
    actualcheck:false,
  },
    ]
  });
 
  transchildren.push({
    menu:'Salary Statement',
    modulecode:8,
    menucode:3,
    sceecode:6,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });
  transchildren.push({
    menu:'Salary Payments',
    modulecode:8,
    menucode:3,
    sceecode:7,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
  {
    
    menu:'Create',
    modulecode:8,
    menucode:3,
    sceecode:7,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:8,
    menucode:3,
    sceecode:7,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:8,
    menucode:3,
    sceecode:7,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Working other dates',
    modulecode:8,
    menucode:3,
    sceecode:7,
    trancode:4,
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
    modulecode:8,
    menucode:8,
    sceecode:1,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });
  repchildren.push({
    menu:'HRD Reports',
    modulecode:8,
    menucode:8,
    sceecode:2,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });
  repchildren.push({
    menu:'Transaction Reports',
    modulecode:8,
    menucode:8,
    sceecode:3,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });
  repchildren.push({
    menu:'Analysis Reports',
    modulecode:8,
    menucode:8,
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
    modulecode:8,
    menucode:9,
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

public getHRDHorizontalMenuMake():any[]
{
  var menu:any[]=[];
  if(this.adm.screenCheck(8,0,0,1))
  {
    menu.push({
       path: '/hrd/hrddashboard', title: 'Dashboard', icon: 'ft-pie-chart', class: 'dropdown nav-item has-sub',    isExternalLink: false, submenu:[]
    });
   }
 
   var masters:any[]=[];
  
  if(this.adm.screenCheck(8,1,1,0))
  {
    masters.push(   
       { path: '/hrd/hrddepts', title: 'Departments', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    )
  }
  if(this.adm.screenCheck(8,1,2,0))
  {
    masters.push(   
       { path: '/hrd/hrdallowances', title: 'Allowances Deductions', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    )
  }
  if(this.adm.screenCheck(8,1,3,0))
  {
    masters.push(   
       { path: '/hrd/hrdleaves', title: 'Leaves', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    )
  }if(this.adm.screenCheck(8,1,4,0))
  {
    masters.push(   
       { path: '/hrd/hrddesigs', title: 'Designations', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    )
  }if(this.adm.screenCheck(8,1,5,0))
  {
    masters.push(   
       { path: '/hrd/hrdrangewise', title: 'Range wise Deductions', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    )
  }if(this.adm.screenCheck(8,1,6,0))
  {
    masters.push(   
       { path: '/hrd/hrdemployees', title: 'Employees', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    )
  }
  if(this.adm.screenCheck(8,1,7,0))
  {
    masters.push(   
       { path: '/hrd/hrdshifts', title: 'Shifts', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
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
 if(this.adm.screenCheck(8,2,1,0))
 {
  transactions1.push(   
      { path: '/hrd/hrdresume', title: 'Resume', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(8,2,2,0))
 {
  transactions1.push(   
      { path: '/hrd/hrdinterviews', title: 'Interviews', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(8,2,3,0))
 {
  transactions1.push(   
      { path: '/hrd/appointments', title: 'Appointments', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(8,2,4,0))
 {
  transactions1.push(   
      { path: '/hrd/serviceclosings', title: 'Service Closing', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(8,2,5,0))
 {
  transactions1.push(   
      { path: '/hrd/trainings', title: 'Trainings', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(8,2,6,0))
 {
  transactions1.push(   
      { path: '/hrd/meetings', title: 'Meetings', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }

 if(transactions1.length > 0)
 {
  /* menu.push(
    { path: '', title: 'HRD', icon: 'ft-file-text', class: 'dropdown nav-item has-sub',  isExternalLink: false, submenu:  transactions1
    }
   )*/
 }

 var transactions2:any[]=[];
 if(this.adm.screenCheck(8,3,9,0))
 {
  transactions2.push(   
      { path: '/hrd/hrdshiftassign', title: 'Shift Assigns', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(8,3,1,0))
 {
  transactions2.push(   
      { path: '/hrd/hrdinout', title: 'In-Out', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(8,3,2,0))
 {
  transactions2.push(   
      { path: '/hrd/hrdattendances', title: 'Attendances', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(8,3,3,0))
 {
  transactions2.push(   
      { path: '/hrd/hrdleaverequests', title: 'Leave Request', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(8,3,4,0))
 {
  transactions2.push(   
      { path: '/hrd/hrdleaveapprovals', title: 'Leave Approvals', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(8,3,5,0))
 {
  transactions2.push(   
      { path: '/hrd/hrdadvances', title: 'Advances', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(8,3,6,0))
 {
  transactions2.push(   
      { path:  '/hrd/hrdsalarystatement', title: 'Salary Statement', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(8,3,7,0))
 {
  transactions2.push(   
      { path: '/hrd/hrdpayments', title: 'Salary Payments', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(transactions2.length > 0)
 {
 /*  menu.push(
    { path: '', title: 'Transactions', icon: 'ft-file-text', class: 'dropdown nav-item has-sub',  isExternalLink: false, submenu:  transactions2
    }
   )*/
 }

 
 if(this.adm.screenCheck(8,9,1,0))
 {
  menu.push(
    {
       
        path: '', title: 'Key Reports', icon: 'icon-key', class: 'dropdown nav-item has-sub',  isExternalLink: false, submenu:[
          { path: '/hrd/hrdkeyrepdepts', title: 'Departments', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/hrd/hrdkeyrepdesigs', title: 'Designations', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/hrd/hrdkeyrepemployees', title: 'Employees', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
        ]
      
 });
}

 return menu;
}



public getHRDVericalMenuMake():any[]
{
 var menu:any[]=[];
 if(this.adm.screenCheck(8,0,0,1))
 {
   menu.push({
      path: '/hrd/hrddashboard', title: 'Dashboard', icon: 'ft-pie-chart', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu:[]
   });
  }
  var masters:any[]=[];
 
 if(this.adm.screenCheck(8,1,1,0))
 {
   masters.push(   
      { path: '/hrd/hrddepts', title: 'Departments', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(8,1,2,0))
 {
   masters.push(   
    { path: '/hrd/hrdallowances', title: 'Allowances Deductions', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
 );
   }
   if(this.adm.screenCheck(8,1,3,0))
   {
    masters.push(   
      { path: '/hrd/hrdleaves', title: 'Leaves', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }


 if(this.adm.screenCheck(8,1,4,0))
   {
    masters.push(   
      { path: '/hrd/hrddesigs', title: 'Designations', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }

 if(this.adm.screenCheck(8,1,5,0))
 {
  masters.push(   
    { path: '/hrd/hrdrangewise', title: 'Range wise Deductions', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
 );
}
if(this.adm.screenCheck(8,1,6,0))
   {
    masters.push(   
      { path: '/hrd/hrdemployees', title: 'Employees', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(8,1,7,0))
   {
    masters.push(   
      { path: '/hrd/hrdshifts', title: 'Shifts', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(masters.length > 0)
 {
   menu.push(
    { path: '', title: 'Masters', icon: 'ft-menu', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu:  masters
    }
   )
 }

 var transactions1:any[]=[];
 if(this.adm.screenCheck(8,2,1,0))
 {
  transactions1.push(   
    { path: '/hrd/hrdresume', title: 'Resume', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
 );
 }
 if(this.adm.screenCheck(8,2,2,0))
 {
  transactions1.push(   
    { path: '/hrd/hrdinterviews', title: 'Interviews', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
 );
 }
 if(this.adm.screenCheck(8,2,3,0))
 {
  transactions1.push(   
    { path: '/hrd/appointments', title: 'Appointments', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
 );
 }
 if(this.adm.screenCheck(8,2,4,0))
 {
  transactions1.push(   
    { path: '/hrd/serviceclosings', title: 'Service Closing', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
 );
 }
 if(this.adm.screenCheck(8,2,5,0))
 {
  transactions1.push(   
    { path: '/hrd/trainings', title: 'Trainings', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
 );
 }
 if(this.adm.screenCheck(8,2,6,0))
 {
  transactions1.push(   
    { path: '/hrd/meetings', title: 'Meetings', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
 );
 }
 
 if(transactions1.length > 0)
 {
  menu.push(
    { path: '', title: 'HRD', icon: 'ft-file-text', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu:  transactions1
    }
   )
 }
 
 var transactions2:any[]=[];
 if(this.adm.screenCheck(8,3,9,0))
 {
  transactions2.push(   
    { path: '/hrd/hrdshiftassign', title: 'Shift Assigns', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
 );
 }
 if(this.adm.screenCheck(8,3,1,0))
 {
  transactions2.push(   
    { path: '/hrd/hrdinout', title: 'In-Out', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
 );
 }
 if(this.adm.screenCheck(8,3,2,0))
 {
  transactions2.push(   
    { path: '/hrd/hrdattendances', title: 'Attendances', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
 );
 }
 if(this.adm.screenCheck(8,3,3,0))
 {
  transactions2.push(   
    { path: '/hrd/hrdleaverequests', title: 'Leave Request', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
 );
 }
 if(this.adm.screenCheck(8,3,4,0))
 {
  transactions2.push(   
    { path: '/hrd/hrdleaveapprovals', title: 'Leave Approvals', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
 );
 }
 if(this.adm.screenCheck(8,3,5,0))
 {
  transactions2.push(   
    { path: '/hrd/hrdadvances', title: 'Advances', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
 );
 }

if(this.adm.screenCheck(8,3,6,0))
 {
  transactions2.push(   
    { path: '/hrd/hrdsalarystatement', title: 'Salary Statement', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
 );
 }
 if(this.adm.screenCheck(8,3,7,0))
 {
  transactions2.push(   
    { path: '/hrd/hrdpayments', title: 'Salary Payments', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
 );
 }
 if(transactions2.length > 0)
 {
   menu.push(
    { path: '', title: 'Transactions', icon: 'ft-file-text', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu:  transactions2
    }
   )
 }


 if(this.adm.screenCheck(8,9,1,0))
 {
  menu.push(
    {
       
        path: '', title: 'Key Reports', icon: 'icon-key', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
          { path: '/hrd/hrdkeyrepdepts', title: 'Departments', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/hrd/hrdkeyrepdesigs', title: 'Designations', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/hrd/hrdkeyrepemployees', title: 'Employees', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
      
 });
}

 return menu;

}

}

 