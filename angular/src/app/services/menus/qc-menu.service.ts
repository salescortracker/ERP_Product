import { Injectable } from '@angular/core';
import { AdminGeneralInfoService } from '../admin/admin-general-info.service';

@Injectable({
  providedIn: 'root'
})
export class QcMenuService {
  constructor(private adm:AdminGeneralInfoService) { }
  public getQCMenu():any[]
  {
    var mainmenu:any[]=[{
      menu:'Quality',
      modulecode:11,
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
    modulecode:11,
    menucode:0,
    sceecode:0,
    trancode:1,
    opencheck:true,
    actualcheck:false,
    children:this.getMasterChildren()

  });
  mainchildren.push({
    menu:'Masters',
    modulecode:11,
    menucode:1,
    sceecode:0,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:this.getMasterChildren()

  });
  mainchildren.push({
    menu:'Transactions',
    modulecode:11,
    menucode:2,
    sceecode:0,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:this.getTransactionChildren()

  });

  mainchildren.push({
    menu:'Reports',
    modulecode:11,
    menucode:9,
    sceecode:1,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:this.getReportsChildren()

  });
 


return mainchildren;
}



public getMasterChildren():any[]
{
var masterchildren:any[]=[];
 


masterchildren.push({
  menu:'Raw Material Testings',
  modulecode:11,
  menucode:1,
  sceecode:1,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[ {
    
    menu:'Create',
    modulecode:11,
    menucode:1,
    sceecode:1,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:11,
    menucode:1,
    sceecode:1,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:11,
    menucode:1,
    sceecode:1,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  }]


  
});

masterchildren.push({
  menu:'Production Testings',
  modulecode:11,
  menucode:1,
  sceecode:2,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[ {
    
    menu:'Create',
    modulecode:11,
    menucode:1,
    sceecode:2,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:11,
    menucode:1,
    sceecode:2,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:11,
    menucode:1,
    sceecode:2,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  }]


  
});

masterchildren.push({
  menu:'Sale Return Testings',
  modulecode:11,
  menucode:1,
  sceecode:3,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[ {
    
    menu:'Create',
    modulecode:11,
    menucode:1,
    sceecode:3,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:11,
    menucode:1,
    sceecode:3,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:11,
    menucode:1,
    sceecode:3,
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
    menu:'MIR Testing',
    modulecode:11,
    menucode:2,
    sceecode:1,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
  /*{
    
    menu:'Create',
    modulecode:11,
    menucode:2,
    sceecode:1,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:11,
    menucode:2,
    sceecode:1,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:11,
    menucode:2,
    sceecode:1,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  },*/
   
  
    ]
  });


  transchildren.push({
    menu:'MIR Approvals',
    modulecode:11,
    menucode:2,
    sceecode:2,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });

  transchildren.push({
    menu:'Process wise Testing',
    modulecode:11,
    menucode:2,
    sceecode:3,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
 /* {
    
    menu:'Create',
    modulecode:11,
    menucode:2,
    sceecode:3,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:11,
    menucode:2,
    sceecode:3,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:11,
    menucode:2,
    sceecode:3,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  },*/
   
    ]
  });
      


  transchildren.push({
    menu:'Process Approvals',
    modulecode:11,
    menucode:2,
    sceecode:4,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });


  transchildren.push({
    menu:'Production Approvals',
    modulecode:11,
    menucode:2,
    sceecode:5,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });
  transchildren.push({
    menu:'Sale Return Testing',
    modulecode:11,
    menucode:2,
    sceecode:6,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
/*  {
    
    menu:'Create',
    modulecode:11,
    menucode:2,
    sceecode:6,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:11,
    menucode:2,
    sceecode:6,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:11,
    menucode:2,
    sceecode:6,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  },*/
   
    ]
  });


  transchildren.push({
    menu:'Sale Return Approvals',
    modulecode:11,
    menucode:2,
    sceecode:7,
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
    menu:'Reports',
    modulecode:11,
    menucode:7,
    sceecode:1,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });
  /*repchildren.push({
    menu:'Analysis Reports',
    modulecode:11,
    menucode:9,
    sceecode:1,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });*/

  
  return repchildren;
}

 



public getQCMenuMake():any[]
{
    var menu:any[]=[];
 if(this.adm.screenCheck(11,0,0,1))
 {
   menu.push({
    path: '/qc/dashboard', title: 'Dashboard', icon: 'ft-pie-chart', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu:[]   });
  }

  var masters:any[]=[];
 
 if(this.adm.screenCheck(11,1,1,0))
 {
   masters.push(   
      { path: '/qc/qctestsraw', title: 'Material Tests', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(11,1,2,0))
 {
   masters.push(   
      { path: '/qc/qctestspro', title: 'Process tests', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(11,1,3,0))
 {
   masters.push(   
      { path: '/qc/qctestssalereturn', title: 'Sale Return Tests', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
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

if(this.adm.screenCheck(11,2,1,0))
 {
  transactions1.push(   
      { path: '/qc/qcmirtest', title: 'MIR Testing', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(11,2,2,0))
 {
  transactions1.push(   
      { path: '/qc/qcmirapprovals', title: 'MIR QC Approvals', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(11,2,3,0))
 {
  transactions1.push(   
      { path: '/qc/qcprocesstest', title: 'Process QC', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(11,2,4,0))
 {
  transactions1.push(   
      { path: '/qc/qcprocessapprovals', title: 'Process Approval', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(11,2,5,0))
 {
  transactions1.push(   
      { path: '/qc/qcfinalproductionapprovals', title: 'Final Approvals', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 /*if(this.adm.screenCheck(11,2,6,0))
 {
  transactions1.push(   
      { path: '/qc/qcsalereturntestings', title: 'Sale Return Testings', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(2,2,7,0))
 {
  transactions1.push(   
      { path: '/qc/qcsalereturnapprovals', title: 'Sale Return Approvals', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }*/

 if(transactions1.length > 0)
 {
   menu.push(
    { path: '', title: 'Transactions', icon: 'ft-file-text', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu:  transactions1
    }
   );
 }
 
 

 if(this.adm.screenCheck(11,9,1,0))
 {
   menu.push({
    path: '', title: 'Reports', icon: 'icon-note', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
      { path: '/qc/qcmirpending', title: 'MIR to be approved', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/qc/qcmirresults', title: 'MIR Test Results', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/qc/qcmirsupplierrating', title: 'Supplier wise Rating', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    
      
      { path: '/qc/purrepomlistoforders', title: 'Processes to be tested', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/qc/purrepomsupplierwiseorders', title: 'Processes to be approved', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
     
      { path: '/qc/purrepompendingorders', title: 'Batches to be approved', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/qc/purrepomexpectedmaterials', title: 'Incharge wise Ranking', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
     
    ]
  });
 }
    
 
 return menu;
}














}


