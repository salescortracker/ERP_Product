import { Injectable } from '@angular/core';
import { AdminGeneralInfoService } from '../admin/admin-general-info.service';

@Injectable({
  providedIn: 'root'
})
export class CrmMenuService {
  public details:any;
   public enquirycheck:boolean=false;
  public quotationcheck:boolean=false;
  public ordercheck:boolean=false;
  constructor(private adm:AdminGeneralInfoService) { }
  public getCRMMenu():any[]
  {
    var mainmenu:any=[{
      menu:'CRM',
      modulecode:7,
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
        modulecode:7,
        menucode:0,
        sceecode:0,
        trancode:1,
        opencheck:true,
        actualcheck:false,
        children:[]
    
      });
      mainchildren.push({
        menu:'Masters',
        modulecode:7,
        menucode:1,
        sceecode:0,
        trancode:0,
        opencheck:true,
        actualcheck:false,
        children:this.getMasterChildren()
    
      });

      mainchildren.push({
        menu:'Pre Sales',
        modulecode:7,
        menucode:2,
        sceecode:0,
        trancode:0,
        opencheck:true,
        actualcheck:false,
        children:this.getPreSaleChildren()
    
      });
      mainchildren.push({
        menu:'Post Sales',
        modulecode:7,
        menucode:4,
        sceecode:0,
        trancode:0,
        opencheck:true,
        actualcheck:false,
        children:this.getPostSaleChildren()
    
      });
    
      mainchildren.push({
        menu:'Reports',
        modulecode:7,
        menucode:9,
        sceecode:0,
        trancode:0,
        opencheck:true,
        actualcheck:false,
        children:this.getReportsChildren()
    
      });

      return mainchildren;
  }
  private getMasterChildren():any[]
  {
    var masterchildren:any[]=[];

    masterchildren.push({
      menu:'Price List',
      modulecode:7,
      menucode:1,
      sceecode:1,
      trancode:0,
      opencheck:true,
      actualcheck:false,
      children:[]
    });
    masterchildren.push({
      menu:'Discount List',
      modulecode:7,
      menucode:1,
      sceecode:2,
      trancode:0,
      opencheck:true,
      actualcheck:false,
      children:[]
    });

    masterchildren.push({
      menu:'Customer Groups',
      modulecode:7,
      menucode:1,
      sceecode:3,
      trancode:0,
      opencheck:true,
      actualcheck:false,
      children:[{
  
        menu:'Create',
        modulecode:7,
        menucode:1,
        sceecode:3,
        trancode:1,
        opencheck:true,
        actualcheck:false,
      },
      {
        
        menu:'Modify',
        modulecode:7,
        menucode:1,
        sceecode:3,
        trancode:2,
        opencheck:true,
        actualcheck:false,
      },
      {
        
        menu:'Delete',
        modulecode:7,
        menucode:1,
        sceecode:3,
        trancode:3,
        opencheck:true,
        actualcheck:false,
      },]
    });


    masterchildren.push({
      menu:'Customers',
      modulecode:7,
      menucode:1,
      sceecode:4,
      trancode:0,
      opencheck:true,
      actualcheck:false,
      children:[{
  
        menu:'Create',
        modulecode:7,
        menucode:1,
        sceecode:4,
        trancode:1,
        opencheck:true,
        actualcheck:false,
      },
      {
        
        menu:'Modify',
        modulecode:7,
        menucode:1,
        sceecode:4,
        trancode:2,
        opencheck:true,
        actualcheck:false,
      },
      {
        
        menu:'Delete',
        modulecode:7,
        menucode:1,
        sceecode:4,
        trancode:3,
        opencheck:true,
        actualcheck:false,
      },]
    });


    masterchildren.push({
      menu:'Opening Balances',
      modulecode:7,
      menucode:1,
      sceecode:6,
      trancode:0,
      opencheck:true,
      actualcheck:false,
      children:[]
    });

    masterchildren.push({
      menu:'Leads Management',
      modulecode:7,
      menucode:1,
      sceecode:5,
      trancode:0,
      opencheck:true,
      actualcheck:false,
      children:[{
  
        menu:'Create',
        modulecode:7,
        menucode:1,
        sceecode:5,
        trancode:1,
        opencheck:true,
        actualcheck:false,
      },
      {
        
        menu:'Modify',
        modulecode:7,
        menucode:1,
        sceecode:5,
        trancode:2,
        opencheck:true,
        actualcheck:false,
      },
      {
        
        menu:'Delete',
        modulecode:7,
        menucode:1,
        sceecode:5,
        trancode:3,
        opencheck:true,
        actualcheck:false,
      }]
    });

    return masterchildren;
  }


  private getPreSaleChildren():any[]
  {
    var presalechildren:any[]=[];
    presalechildren.push({
      menu:'Target Setting',
      modulecode:7,
      menucode:2,
      sceecode:10,
      trancode:0,
      opencheck:true,
      actualcheck:false,
      children:[]});
    presalechildren.push({
  menu:'Tele Calling',
  modulecode:7,
  menucode:2,
  sceecode:1,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:7,
  menucode:2,
  sceecode:1,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Modify',
  modulecode:7,
  menucode:2,
  sceecode:1,
  trancode:2,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Delete',
  modulecode:7,
  menucode:2,
  sceecode:1,
  trancode:3,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Working in other dates',
  modulecode:7,
  menucode:2,
  sceecode:1,
  trancode:4,
  opencheck:true,
  actualcheck:false,
},


  ]
});

presalechildren.push({
  menu:'Enquiries',
  modulecode:7,
  menucode:2,
  sceecode:2,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:7,
  menucode:2,
  sceecode:2,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Modify',
  modulecode:7,
  menucode:2,
  sceecode:2,
  trancode:2,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Delete',
  modulecode:7,
  menucode:2,
  sceecode:2,
  trancode:3,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Working in other dates',
  modulecode:7,
  menucode:2,
  sceecode:2,
  trancode:4,
  opencheck:true,
  actualcheck:false,
},


  ]
});


presalechildren.push({
  menu:'Lead To Customer',
  modulecode:7,
  menucode:2,
  sceecode:7,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[]
});


presalechildren.push({
  menu:'Quotation / Offer',
  modulecode:7,
  menucode:2,
  sceecode:3,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:7,
  menucode:2,
  sceecode:3,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Modify',
  modulecode:7,
  menucode:2,
  sceecode:3,
  trancode:2,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Cancel',
  modulecode:7,
  menucode:2,
  sceecode:3,
  trancode:3,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Reprint Quotation',
  modulecode:7,
  menucode:2,
  sceecode:3,
  trancode:8,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Mail Quotation',
  modulecode:7,
  menucode:2,
  sceecode:3,
  trancode:9,
  opencheck:true,
  actualcheck:false,
},

  ]
});



presalechildren.push({
  menu:'Sale Orders',
  modulecode:7,
  menucode:2,
  sceecode:4,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:7,
  menucode:2,
  sceecode:4,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Modify',
  modulecode:7,
  menucode:2,
  sceecode:4,
  trancode:2,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Delete',
  modulecode:7,
  menucode:2,
  sceecode:4,
  trancode:3,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Working in other dates',
  modulecode:7,
  menucode:2,
  sceecode:4,
  trancode:4,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Reprint Orders',
  modulecode:7,
  menucode:2,
  sceecode:4,
  trancode:8,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Order Approval',
  modulecode:7,
  menucode:2,
  sceecode:4,
  trancode:98,
  opencheck:true,
  actualcheck:false,
},
  ]
});



return presalechildren;
  }

  

  public getPostSaleChildren():any[]
  {
    var postsalechildren:any[]=[];
    postsalechildren.push({
      menu:'Bill Submissions',
      modulecode:7,
      menucode:4,
      sceecode:10,
      trancode:0,
      opencheck:true,
      actualcheck:false,
      children:[]});

      postsalechildren.push({
        menu:'Followup',
        modulecode:7,
        menucode:4,
        sceecode:1,
        trancode:0,
        opencheck:true,
        actualcheck:false,
        children:[
      {
        
        menu:'Create',
        modulecode:7,
        menucode:4,
        sceecode:1,
        trancode:1,
        opencheck:true,
        actualcheck:false,
      },
      {
        
        menu:'Modify',
        modulecode:7,
        menucode:4,
        sceecode:1,
        trancode:2,
        opencheck:true,
        actualcheck:false,
      },
      {
        
        menu:'Delete',
        modulecode:7,
        menucode:4,
        sceecode:1,
        trancode:3,
        opencheck:true,
        actualcheck:false,
      },
      {
        
        menu:'Working in other dates',
        modulecode:7,
        menucode:4,
        sceecode:1,
        trancode:4,
        opencheck:true,
        actualcheck:false,
      },
       
      
        ]
      });
  

      postsalechildren.push({
        menu:'Tickets',
        modulecode:7,
        menucode:4,
        sceecode:2,
        trancode:0,
        opencheck:true,
        actualcheck:false,
        children:[
      {
        
        menu:'Create',
        modulecode:7,
        menucode:4,
        sceecode:2,
        trancode:1,
        opencheck:true,
        actualcheck:false,
      },
      {
        
        menu:'Modify',
        modulecode:7,
        menucode:4,
        sceecode:2,
        trancode:2,
        opencheck:true,
        actualcheck:false,
      },
      {
        
        menu:'Delete',
        modulecode:7,
        menucode:4,
        sceecode:2,
        trancode:3,
        opencheck:true,
        actualcheck:false,
      },
      {
        
        menu:'Working in other dates',
        modulecode:7,
        menucode:4,
        sceecode:2,
        trancode:4,
        opencheck:true,
        actualcheck:false,
      },
       
      
        ]
      });
  
      postsalechildren.push({
        menu:'Ticket Clearances',
        modulecode:7,
        menucode:4,
        sceecode:3,
        trancode:0,
        opencheck:true,
        actualcheck:false,
        children:[ {
        
          menu:'Working in other dates',
          modulecode:7,
          menucode:4,
          sceecode:3,
          trancode:4,
          opencheck:true,
          actualcheck:false,
        },]
      });
  





    postsalechildren.push({
      menu:'Sale Returns',
      modulecode:7,
      menucode:4,
      sceecode:4,
      trancode:0,
      opencheck:true,
      actualcheck:false,
      children:[
    {
      
      menu:'Create',
      modulecode:7,
      menucode:4,
      sceecode:4,
      trancode:1,
      opencheck:true,
      actualcheck:false,
    },
    {
      
      menu:'Modify',
      modulecode:7,
      menucode:4,
      sceecode:4,
      trancode:2,
      opencheck:true,
      actualcheck:false,
    },
    {
      
      menu:'Delete',
      modulecode:7,
      menucode:4,
      sceecode:4,
      trancode:3,
      opencheck:true,
      actualcheck:false,
    },
    {
      
      menu:'Working in other dates',
      modulecode:7,
      menucode:4,
      sceecode:4,
      trancode:4,
      opencheck:true,
      actualcheck:false,
    },
     
    
      ]
    });


    
    postsalechildren.push({
      menu:'Bill Clearances',
      modulecode:7,
      menucode:4,
      sceecode:5,
      trancode:0,
      opencheck:true,
      actualcheck:false,
      children:[
    {
      
      menu:'Create',
      modulecode:7,
      menucode:4,
      sceecode:5,
      trancode:1,
      opencheck:true,
      actualcheck:false,
    },
    
    {
      
      menu:'Cancel',
      modulecode:7,
      menucode:4,
      sceecode:5,
      trancode:3,
      opencheck:true,
      actualcheck:false,
    },
  
    {
      
      menu:'Reprint',
      modulecode:7,
      menucode:4,
      sceecode:5,
      trancode:8,
      opencheck:true,
      actualcheck:false,
    },
    
      ]
    });
    



    return postsalechildren;
  }



  
public getReportsChildren():any[]
{
  var repchildren:any[]=[];

  repchildren.push({
    menu:'Key Reports',
    modulecode:7,
    menucode:9,
    sceecode:1,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });


  
  repchildren.push({
    menu:'Pre Sale Reports',
    modulecode:7,
    menucode:9,
    sceecode:2,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });

  
  repchildren.push({
    menu:'Post sale Reports',
    modulecode:7,
    menucode:0,
    sceecode:3,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });


  
  repchildren.push({
    menu:'Analysis',
    modulecode:7,
    menucode:9,
    sceecode:4,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });




  return repchildren;

}



public getCRMMenuMake():any[]
{
  this.checkSettings();
  var menu:any[]=[];
 if(this.adm.screenCheck(7,0,0,1))
 {
   menu.push({
    path: '/crm/crmdashboard', title: 'Dashboard', icon: 'ft-pie-chart', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu:[]   });
  }

  var masters:any[]=[];
 
 if(this.adm.screenCheck(7,1,1,0))
 {
   masters.push(   
      { path: '/crm/crmpricelist', title: 'Price List', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(7,1,2,0))
 {
    
   masters.push(   
      { path: '/crm/crmdiscountlist', title: 'Discount List', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(7,1,3,0))
 {
    
   masters.push(   
      { path: '/crm/crmcusgrps', title: 'Customer Groups', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }

if(this.adm.screenCheck(7,1,4,0))
{
  masters.push(   
    { path: '/crm/crmcustomers', title: 'Customers', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
 );
  
}
 if(this.adm.screenCheck(7,1,6,0))
 {
   masters.push(   
      { path: '/crm/crmopenings', title: 'Opening Balances', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 } 
 if(this.adm.screenCheck(7,1,5,0))
 {
   masters.push(   
      { path: '/crm/crmleadsmgt', title: 'Leads Management', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 
 if(masters.length > 0)
 {
   menu.push(
    { path: '', title: 'Masters', icon: 'ft-menu', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu:  masters
    }
   );
 }

 var transactions:any[]=[];

 if(this.adm.screenCheck(7,2,10,0))
 {
  transactions.push(   
      { path: '/crm/crmtargets', title: 'Target Setting', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(7,2,1,0))
 {
  transactions.push(   
      { path: '/crm/crmtelecallblapre', title: 'Tele Calling', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 } 
 if(this.adm.screenCheck(7,2,2,0))
 {
  transactions.push(   
      { path: '/crm/crmenquiryrx', title: 'Enquiries', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
/* if(this.adm.screenCheck(7,2,3,0))
 {
  transactions.push(   
      { path: '/crm/crmquotationrx', title: 'Leads To Customer', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }*/
 if(this.adm.screenCheck(7,2,3,0))
 {
  transactions.push(   
      { path: '/crm/crmquotationrx', title: 'Quotation', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(7,2,4,0))
 {
  transactions.push(   
      { path: '/crm/crmordersrx', title: 'Orders', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(7,2,5,0))
 {
  transactions.push(   
      { path: '/crm/crmadvances', title: 'Advances', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 

 
 if(transactions.length > 0)
 {
   menu.push(
    { path: '', title: 'Pre Sales', icon: 'ft-file-text', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu:  transactions
    }
   );
 }
 
var transactions2:any[]=[];
if(this.adm.screenCheck(7,4,10,0))
 {
  transactions2.push(   
      { path: '/crm/crmbillsubmissions', title: 'Bill Submissions', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(7,4,1,0))
 {
  transactions2.push(   
      { path: '/crm/crmpostsalefollowup', title: 'Follow up', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
/* if(this.adm.screenCheck(7,4,2,0))
 {
  transactions2.push(   
      { path: '/crm/crmpostsaletickets', title: 'Tickets', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(7,4,3,0))
 {
  transactions2.push(   
      { path: '/crm/crmpostsaleticketclearances', title: 'Ticket Clearances', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }*/
 if(this.adm.screenCheck(7,4,4,0))
 {
  transactions2.push(   
      { path: '/crm/crmpostsalereturns', title: 'Sale Returns', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(7,4,5,0))
 {
  transactions2.push(   
      { path: '/crm/crmpostbillclearances', title: 'Bill Clerances', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }

 if(transactions2.length > 0)
 {
   menu.push(
    { path: '', title: 'Post Sales', icon: 'ft-file-text', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu:  transactions2
    }
   );
 }

 if(this.adm.screenCheck(7,9,1,0))
{
  menu.push( {
    path: '', title: 'Key Reports', icon: 'icon-key', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
      { path: '/crm/crmkeyrepcustgroups', title: 'Customer Groups', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/crm/crmkeyrepcustomers', title: 'Customers', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      ]
  });
}

 if(this.adm.screenCheck(7,9,2,0))
 {
   menu.push({

    path: '', title: 'Pre Sale Reports', icon: 'icon-note', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu:[ 
 
 
         { path: '/crm/crmreptelecallslist', title: 'Tele Calls', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/crm/crmreptelecallspendings', title: 'Pending Calls', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/crm/crmrepenquirieslist', title: 'Enquiries', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/crm/crmrepenquiriespendings', title: 'Pending Enquiries', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/crm/crmrepcallerwisecalls', title: 'Caller wise Calls', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/crm/crmreporderslist', title: 'Orders', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/crm/crmreporderscustomerwise', title: 'Customer wise orders', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/crm/crmreporderspendings', title: 'Pending Orders', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/crm/crmrepordersitemwise', title: 'Items to be dispatched', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
     //   { path: '/crm/crmrepordersdelayed', title: 'Delayed Orders', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/crm/crmrepadvancesliable', title: 'Advances Liable', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //   { path: '/crm/crmrepadvancescustomerwise', title: 'Customer wise Advances', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
     
     //  { path: '/crm/crmrepemployeewise', title: 'Employee wise Details', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
     
    ]

  

   });
 } 

 
 if(this.adm.screenCheck(7,9,3,0))
 {
   menu.push({

    path: '', title: 'Post Sale Reports', icon: 'icon-note', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu:[ 
 
 
      //   { path: '/crm/crmpostbillstobesubmitted', title: 'Bills tobe submitted', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
     //   { path: '/crm/crmpostfollowup', title: 'Follow up', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      //  { path: '/crm/crmpostpendingtickets', title: 'Pending Tickets', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/crm/crmpostrepsalereturns', title: 'Sale Returns', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
     //   { path: '/crm/crmpostpendingatqc', title: 'Pending at QC', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/crm/crmpostrepsnapshot', title: 'Customer Snap Shot', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      //  { path: '/crm/crmpostcustomerreceipts', title: 'List of Receipts', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
     //   { path: '/crm/crmpostconsolidatedreceipts', title: 'Consolidated receipts', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
     //   { path: '/crm/crmpostcustomerconsolidations', title: 'Customer wise Consolidations', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/crm/crmpostrepagings', title: 'Customer wise Aging', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      //  { path: '/crm/crmpostconsolidatedaging', title: 'Consolidated aging report', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      
    ]

  

   });
 } 

 if(this.adm.screenCheck(7,9,4,0))
{
   /*menu.push(   {
    path: '', title: 'Analysis Reports', icon: 'icon-pie-chart', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
      { path: '/crm/crmrepanacustomerwise', title: 'Customer wise business', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      //{ path: '/crm/crmrepanaluseraudit', title: 'User audit', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    
]
}); */
} 

 var sets:any[]=[];

 if(this.adm.screenCheck(7,10,1,0))
 {
   sets.push(
    { path: '/crm/crmTaxes', title: 'Tax Assigning', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(7,10,2,0))
 {
   sets.push(
    { path: '/crm/crmsettings', title: 'Settings', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );

 }
 
 if(this.adm.screenCheck(7,10,3,0))
 {
   sets.push(
    { path: '/crm/crmaccounts', title: 'Accounts Assign', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
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
  
public checkSettings()
  {
    var sets=this.adm.getUserCompleteInformation().sets;
    this.details=sets.filter(a => a.branchId=="CRM");
    for(var i=0;i<this.details.length;i++)
    {
      switch(this.details[i].setupCode)
      {
        case 'crm_enq':
          this.enquirycheck=+this.details[i].setupValue==2?true:false;
          break;
        case 'crm_quo':
          this.quotationcheck=+this.details[i].setupValue==2?true:false;
          break;
        case 'crm_ord':
          this.ordercheck=+this.details[i].setupValue==2?true:false;
          break;
      }
    }


  }
}
