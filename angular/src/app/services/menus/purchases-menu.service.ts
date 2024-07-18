import { Injectable } from '@angular/core';
import { AdminGeneralInfoService } from '../admin/admin-general-info.service';
import { PurSettingsService } from '../purchases/pur-settings.service';

@Injectable({
  providedIn: 'root'
})
export class PurchasesMenuService {
public details:any;
public requestcheck:boolean=false;
public enquirycheck:boolean=false;
public quotationcheck:boolean=false;
public ordercheck:boolean=false;
  constructor(private adm:AdminGeneralInfoService,private pur:PurSettingsService) { 
  /* this.pur.getPurSettings().subscribe(res =>
    {
        this.details=res;
       
        
    });*/
  }
  public checkSettings()
  {
    var sets=this.adm.getUserCompleteInformation().sets;
    this.details=sets.filter(a => a.branchId=="PUR");
    for(var i=0;i<this.details.length;i++)
    {
      switch(this.details[i].setupCode)
      {
        case 'pur_req':
          this.requestcheck=+this.details[i].setupValue==2?true:false;
          break;
        case 'pur_enq':
          this.enquirycheck=+this.details[i].setupValue==2?true:false;
          break;
        case 'pur_quo':
          this.quotationcheck=+this.details[i].setupValue==2?true:false;
          break;
        case 'pur_ord':
          this.ordercheck=+this.details[i].setupValue==2?true:false;
          break;
      }
    }


  }
  public getPurchasesMenu():any[]
  {
    var mainmenu:any=[{
      menu:'Purchases',
      modulecode:2,
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
      modulecode:2,
      menucode:0,
      sceecode:0,
      trancode:1,
      opencheck:true,
      actualcheck:false,
      children:[]
  
    });
    mainchildren.push({
      menu:'Masters',
      modulecode:2,
      menucode:1,
      sceecode:0,
      trancode:0,
      opencheck:true,
      actualcheck:false,
      children:this.getMasterChildren()
  
    });

    mainchildren.push({
      menu:'Order Management',
      modulecode:2,
      menucode:2,
      sceecode:0,
      trancode:0,
      opencheck:true,
      actualcheck:false,
      children:this.getOrderManagementChildren()
  
    });

    

    mainchildren.push({
      menu:'Transactions',
      modulecode:2,
      menucode:3,
      sceecode:0,
      trancode:0,
      opencheck:true,
      actualcheck:false,
      children:this.getPurchaseChildren()
  
    });
    mainchildren.push({
      menu:'Reports',
      modulecode:2,
      menucode:11,
      sceecode:0,
      trancode:0,
      opencheck:true,
      actualcheck:false,
      children:this.getReportsChildren()
  
    });

    mainchildren.push({
      menu:'Setup',
      modulecode:2,
      menucode:8,
      sceecode:0,
      trancode:0,
      opencheck:true,
      actualcheck:false,
      children:this.getSetupChildren()
  
    });



    return mainchildren;
  }
  public getMasterChildren()
{
var masterchildren:any[]=[];
masterchildren.push({
  menu:'Supplier Groups',
  modulecode:2,
  menucode:1,
  sceecode:1,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:2,
  menucode:1,
  sceecode:1,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Modify',
  modulecode:2,
  menucode:1,
  sceecode:1,
  trancode:2,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Delete',
  modulecode:2,
  menucode:1,
  sceecode:1,
  trancode:3,
  opencheck:true,
  actualcheck:false,
},
  ]
});


masterchildren.push({
  menu:'Suppliers',
  modulecode:2,
  menucode:1,
  sceecode:2,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:2,
  menucode:1,
  sceecode:2,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Modify',
  modulecode:2,
  menucode:1,
  sceecode:2,
  trancode:2,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Delete',
  modulecode:2,
  menucode:1,
  sceecode:2,
  trancode:3,
  opencheck:true,
  actualcheck:false,
},
  ]
});


masterchildren.push({
  menu:'Supplier Opening Balances',
  modulecode:2,
  menucode:1,
  sceecode:3,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[]
});

return masterchildren;
}

private getOrderManagementChildren():any[]
{
  var blankpurchasechildren:any[]=[];


  
  blankpurchasechildren.push({
  menu:'Purchase Requests',
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
  
  menu:'Cancel',
  modulecode:2,
  menucode:2,
  sceecode:1,
  trancode:3,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Working in other dates',
  modulecode:2,
  menucode:2,
  sceecode:1,
  trancode:4,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Request print',
  modulecode:2,
  menucode:2,
  sceecode:1,
  trancode:7,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Request reprint',
  modulecode:2,
  menucode:2,
  sceecode:1,
  trancode:8,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Request Approval',
  modulecode:2,
  menucode:2,
  sceecode:1,
  trancode:98,
  opencheck:true,
  actualcheck:false,
},
 
 
  ]
});

 
blankpurchasechildren.push({
  menu:'Purchase Enquiries',
  modulecode:2,
  menucode:2,
  sceecode:3,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:2,
  menucode:2,
  sceecode:3,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Modify',
  modulecode:2,
  menucode:2,
  sceecode:3,
  trancode:2,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Cancel',
  modulecode:2,
  menucode:2,
  sceecode:3,
  trancode:3,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Working in other dates',
  modulecode:2,
  menucode:2,
  sceecode:3,
  trancode:4,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Enquiry print',
  modulecode:2,
  menucode:2,
  sceecode:3,
  trancode:7,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Enquiry reprint',
  modulecode:2,
  menucode:2,
  sceecode:3,
  trancode:8,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Enquiry Mail',
  modulecode:2,
  menucode:2,
  sceecode:3,
  trancode:9,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Enquiry re-Mail',
  modulecode:2,
  menucode:2,
  sceecode:3,
  trancode:10,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Enquiry Approval',
  modulecode:2,
  menucode:2,
  sceecode:3,
  trancode:98,
  opencheck:true,
  actualcheck:false,
},
  
  ]
});



blankpurchasechildren.push({
  menu:'Purchase Quotation',
  modulecode:2,
  menucode:2,
  sceecode:4,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:2,
  menucode:2,
  sceecode:4,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Modify',
  modulecode:2,
  menucode:2,
  sceecode:4,
  trancode:2,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Cancel',
  modulecode:2,
  menucode:2,
  sceecode:4,
  trancode:3,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Working in other dates',
  modulecode:2,
  menucode:2,
  sceecode:4,
  trancode:4,
  opencheck:true,
  actualcheck:false,
},
 
  
  ]
});




blankpurchasechildren.push({
  menu:'Purchase Order',
  modulecode:2,
  menucode:2,
  sceecode:5,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:2,
  menucode:2,
  sceecode:5,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Modify',
  modulecode:2,
  menucode:2,
  sceecode:5,
  trancode:2,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Delete',
  modulecode:2,
  menucode:2,
  sceecode:5,
  trancode:3,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Working in other dates',
  modulecode:2,
  menucode:2,
  sceecode:5,
  trancode:4,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Order print',
  modulecode:2,
  menucode:2,
  sceecode:5,
  trancode:7,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Order reprint',
  modulecode:2,
  menucode:2,
  sceecode:5,
  trancode:8,
  opencheck:true,
  actualcheck:false,
},
 
{
  
  menu:'Order mail',
  modulecode:2,
  menucode:2,
  sceecode:5,
  trancode:9,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Order re-mail',
  modulecode:2,
  menucode:2,
  sceecode:5,
  trancode:10,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Order Approval',
  modulecode:2,
  menucode:2,
  sceecode:5,
  trancode:98,
  opencheck:true,
  actualcheck:false,
},
 

  ]
});


blankpurchasechildren.push({
  menu:'Bulk Orders',
  modulecode:2,
  menucode:2,
  sceecode:8,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[]
});



blankpurchasechildren.push({
  menu:'Advances',
  modulecode:2,
  menucode:2,
  sceecode:6,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:2,
  menucode:2,
  sceecode:6,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Modify',
  modulecode:2,
  menucode:2,
  sceecode:6,
  trancode:2,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Delete',
  modulecode:2,
  menucode:2,
  sceecode:6,
  trancode:3,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Working in other dates',
  modulecode:2,
  menucode:2,
  sceecode:6,
  trancode:4,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Advance print',
  modulecode:2,
  menucode:2,
  sceecode:6,
  trancode:7,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Advance reprint',
  modulecode:2,
  menucode:2,
  sceecode:6,
  trancode:8,
  opencheck:true,
  actualcheck:false,
},
 
  ]
});





  return blankpurchasechildren;
}


private getStockPurchaseChildren():any[]
{
  var stockpurchasechildren:any[]=[];


  
  stockpurchasechildren.push({
  menu:'Stock Orders',
  modulecode:2,
  menucode:3,
  sceecode:444,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:2,
  menucode:3,
  sceecode:444,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Modify',
  modulecode:2,
  menucode:3,
  sceecode:444,
  trancode:2,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Cancel',
  modulecode:2,
  menucode:3,
  sceecode:444,
  trancode:3,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Working in other dates',
  modulecode:2,
  menucode:3,
  sceecode:444,
  trancode:4,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Order reprint',
  modulecode:2,
  menucode:3,
  sceecode:444,
  trancode:8,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Order mail',
  modulecode:2,
  menucode:3,
  sceecode:444,
  trancode:9,
  opencheck:true,
  actualcheck:false,
},

{
  
  menu:'Advances against Orders',
  modulecode:2,
  menucode:3,
  sceecode:444,
  trancode:10,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Advances Creation',
  modulecode:2,
  menucode:3,
  sceecode:444,
  trancode:11,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Advances Modification',
  modulecode:2,
  menucode:3,
  sceecode:444,
  trancode:12,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Advances Cancellation',
  modulecode:2,
  menucode:3,
  sceecode:444,
  trancode:13,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Advances in other dates',
  modulecode:2,
  menucode:3,
  sceecode:444,
  trancode:14,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Advances Reprint',
  modulecode:2,
  menucode:3,
  sceecode:444,
  trancode:18,
  opencheck:true,
  actualcheck:false,
},
  ]
});





stockpurchasechildren.push({
  menu:'Stcok Inwards',
  modulecode:2,
  menucode:3,
  sceecode:555,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:2,
  menucode:3,
  sceecode:555,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Modify',
  modulecode:2,
  menucode:3,
  sceecode:555,
  trancode:2,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Cancel',
  modulecode:2,
  menucode:3,
  sceecode:555,
  trancode:3,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Working in other dates',
  modulecode:2,
  menucode:3,
  sceecode:555,
  trancode:4,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'SIR reprint',
  modulecode:2,
  menucode:3,
  sceecode:555,
  trancode:8,
  opencheck:true,
  actualcheck:false,
},
  
  ]
});




stockpurchasechildren.push({
  menu:'Stock Returns',
  modulecode:2,
  menucode:3,
  sceecode:666,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:2,
  menucode:3,
  sceecode:666,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Modify',
  modulecode:2,
  menucode:3,
  sceecode:666,
  trancode:2,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Cancel',
  modulecode:2,
  menucode:3,
  sceecode:666,
  trancode:3,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Working in other dates',
  modulecode:2,
  menucode:3,
  sceecode:666,
  trancode:4,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Return reprint',
  modulecode:2,
  menucode:3,
  sceecode:666,
  trancode:8,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Return mail',
  modulecode:2,
  menucode:3,
  sceecode:666,
  trancode:9,
  opencheck:true,
  actualcheck:false,
},
  
  ]
});



stockpurchasechildren.push({
  menu:'Stcok Credit Notes',
  modulecode:2,
  menucode:3,
  sceecode:777,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:2,
  menucode:3,
  sceecode:777,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Modify',
  modulecode:2,
  menucode:3,
  sceecode:777,
  trancode:2,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Cancel',
  modulecode:2,
  menucode:3,
  sceecode:777,
  trancode:3,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Working in other dates',
  modulecode:2,
  menucode:3,
  sceecode:777,
  trancode:4,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Credit note reprint',
  modulecode:2,
  menucode:3,
  sceecode:777,
  trancode:8,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Credit note mail',
  modulecode:2,
  menucode:3,
  sceecode:777,
  trancode:9,
  opencheck:true,
  actualcheck:false,
},
  
  ]
});




stockpurchasechildren.push({
  menu:'Supplier payments',
  modulecode:2,
  menucode:3,
  sceecode:888,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:2,
  menucode:3,
  sceecode:888,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
 
{
  
  menu:'Delete',
  modulecode:2,
  menucode:3,
  sceecode:888,
  trancode:3,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Working in other dates',
  modulecode:2,
  menucode:3,
  sceecode:888,
  trancode:4,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Voucher reprint',
  modulecode:2,
  menucode:3,
  sceecode:888,
  trancode:8,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Voucher mail',
  modulecode:2,
  menucode:3,
  sceecode:888,
  trancode:9,
  opencheck:true,
  actualcheck:false,
},
  
  ]
});


  return stockpurchasechildren;
}






private getPurchaseChildren():any[]
{
  var purchasechildren:any[]=[];


  
  purchasechildren.push({
  menu:'Purchases',
  modulecode:2,
  menucode:3,
  sceecode:1,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:2,
  menucode:3,
  sceecode:1,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Modify',
  modulecode:2,
  menucode:3,
  sceecode:1,
  trancode:2,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Cancel',
  modulecode:2,
  menucode:3,
  sceecode:1,
  trancode:3,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Working in other dates',
  modulecode:2,
  menucode:3,
  sceecode:1,
  trancode:4,
  opencheck:true,
  actualcheck:false,
},



  ]
});





purchasechildren.push({
  menu:'Purchase Returns',
  modulecode:2,
  menucode:3,
  sceecode:2,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:2,
  menucode:3,
  sceecode:2,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
 
{
  
  menu:'Cancel',
  modulecode:2,
  menucode:3,
  sceecode:2,
  trancode:3,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Working in other dates',
  modulecode:2,
  menucode:3,
  sceecode:2,
  trancode:4,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Return reprint',
  modulecode:2,
  menucode:3,
  sceecode:2,
  trancode:8,
  opencheck:true,
  actualcheck:false,
},
 
  ]
});



purchasechildren.push({
  menu:'Purchase Credit Notes',
  modulecode:2,
  menucode:3,
  sceecode:3,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:2,
  menucode:3,
  sceecode:3,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Modify',
  modulecode:2,
  menucode:3,
  sceecode:3,
  trancode:2,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Cancel',
  modulecode:2,
  menucode:3,
  sceecode:3,
  trancode:3,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Working in other dates',
  modulecode:2,
  menucode:3,
  sceecode:3,
  trancode:4,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Credit note reprint',
  modulecode:2,
  menucode:3,
  sceecode:3,
  trancode:8,
  opencheck:true,
  actualcheck:false,
},
 
  
  ]
});




purchasechildren.push({
  menu:'Supplier payments',
  modulecode:2,
  menucode:3,
  sceecode:4,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:2,
  menucode:3,
  sceecode:4,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
 
{
  
  menu:'Delete',
  modulecode:2,
  menucode:3,
  sceecode:4,
  trancode:3,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Working in other dates',
  modulecode:2,
  menucode:3,
  sceecode:4,
  trancode:4,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Voucher reprint',
  modulecode:2,
  menucode:3,
  sceecode:4,
  trancode:8,
  opencheck:true,
  actualcheck:false,
},
 
  
  ]
});


  return purchasechildren;
}


public getReportsChildren():any[]
{
  var repchildren:any[]=[];

  repchildren.push({
    menu:'Key Reports',
    modulecode:2,
    menucode:11,
    sceecode:1,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });

 
 
  
 

   


  
  repchildren.push({
    menu:'Orders',
    modulecode:2,
    menucode:11,
    sceecode:2,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });

  
  repchildren.push({
    menu:'Purchase Reports',
    modulecode:2,
    menucode:11,
    sceecode:3,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });

  
  repchildren.push({
    menu:'Costing Reports',
    modulecode:2,
    menucode:11,
    sceecode:4,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });

  
  repchildren.push({
    menu:'Stock Reports',
    modulecode:2,
    menucode:11,
    sceecode:5,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });


  
  repchildren.push({
    menu:'Analysis',
    modulecode:2,
    menucode:11,
    sceecode:6,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });






  return repchildren;

}


public getSetupChildren():any[]
{

  var setupchildren:any[]=[];
  
  setupchildren.push({
    menu:'Purchase Types',
    modulecode:2,
    menucode:8,
    sceecode:1,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });

  
  setupchildren.push({
    menu:'Order Terms',
    modulecode:2,
    menucode:8,
    sceecode:2,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });

  
  setupchildren.push({
    menu:'Settings',
    modulecode:2,
    menucode:8,
    sceecode:3,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });

  
  setupchildren.push({
    menu:'Accounts',
    modulecode:2,
    menucode:8,
    sceecode:4,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });

  setupchildren.push({
    menu:'Mail Settings',
    modulecode:2,
    menucode:8,
    sceecode:5,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });

  setupchildren.push({
    menu:'Enquiry Covering',
    modulecode:2,
    menucode:8,
    sceecode:6,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });

  setupchildren.push({
    menu:'Order Covering',
    modulecode:2,
    menucode:8,
    sceecode:7,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });
  return setupchildren;
}



public getPurchasesHorizontalMenuMake():any[]
{
  this.checkSettings();
    var menu:any[]=[];
 if(this.adm.screenCheck(2,0,0,1))
 {
   menu.push({
      path: '/purchases/purdashboard', title: 'Dashboard', icon: 'ft-pie-chart', class: 'dropdown nav-item has-sub',    isExternalLink: false, submenu:[]
   });
  }

  var masters:any[]=[];
 
 if(this.adm.screenCheck(2,1,1,0))
 {
   masters.push(   
      { path: '/purchases/pursuppliergroups', title: 'Supplier Groups', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(2,1,2,0))
 {
   masters.push(   
      { path: '/purchases/pursuppliers', title: 'Suppliers', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   )
 }
 if(this.adm.screenCheck(2,1,3,0))
 {
   masters.push(   
      { path: '/purchases/pursupopeningbalances', title: 'Opening Balances', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
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

if(this.adm.screenCheck(2,2,1,0))
 {
  transactions1.push( 
    { path: '/purchases/purrequests', title: 'Purchase Request', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    );
 }

 if(this.requestcheck)
 {
 if(this.adm.screenCheck(2,2,1,98))
 {
  transactions1.push(   
    { path: '/purchases/purrequestapprovals', title: 'Request Approvals', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    );
 }
}

if(this.adm.screenCheck(2,2,3,0))
 {
  transactions1.push( 
    { path: '/purchases/purenquiries', title: 'Enquiries', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    );
 }

 if(this.enquirycheck)
 {
 if(this.adm.screenCheck(2,2,3,98))
 {
  transactions1.push(   
    { path: '/purchases/purenquiriesapprovals', title: 'Enquiry Approvals', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    );
 }
}
if(this.adm.screenCheck(2,2,4,0))
 {
  transactions1.push( 
    { path: '/purchases/purquotations', title: 'Quotations', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    );
 }

 if(this.quotationcheck)
 {
 if(this.adm.screenCheck(2,2,4,98))
 {
  transactions1.push(   
    { path: '/purchases/purquotationsapprovals', title: 'Quotation Approvals', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    );
 }
}

if(this.adm.screenCheck(2,2,5,0))
 {
  transactions1.push( 
    { path: '/purchases/purorder', title: 'Purchase Orders', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    );
 }


 if(this.adm.screenCheck(2,2,8,0))
 {
  transactions1.push( 
    { path: '/purchases/purorders1', title: 'Bulk Orders', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    );
 }
 if(this.ordercheck)
 {
 if(this.adm.screenCheck(2,2,5,98))
 {
  transactions1.push(   
    { path: '/purchases/purorderapproval', title: 'Order Approvals', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    );
 }
}
if(this.adm.screenCheck(2,2,6,0))
 {
  transactions1.push( 
    { path: '/purchases/puradvances', title: 'Advances', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    );
 }
 if(transactions1.length > 0)
 {
  menu.push(
    { path: '', title: 'Order Mgt', icon: 'ft-file-text', class: 'dropdown nav-item has-sub',  isExternalLink: false, submenu:  transactions1
    }
   )
 }


 var transactions2:any[]=[];
 if(this.adm.screenCheck(2,3,1,0))
 {
  transactions2.push( 
    { path: '/purchases/purpurchasetra', title: 'Purchases', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    );
  
 }
 if(this.adm.screenCheck(2,3,2,0))
 {
   
   transactions2.push( 
    { path: '/purchases/purpurchasereturns', title: 'Purchase Returns', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    );
 }
 if(this.adm.screenCheck(2,3,3,0))
 {
  transactions2.push( 
    { path: '/purchases/purpurchasecrnotes', title: 'Credit Notes', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    );
  
 }
 if(this.adm.screenCheck(2,3,4,0))
 {
  transactions2.push( 
    { path: '/purchases/purpurchasepayments', title: 'Supplier Payments', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    );
   
 }
 if(transactions2.length > 0)
 {
  menu.push(
    { path: '', title: 'Transactions', icon: 'ft-file-text', class: 'dropdown nav-item has-sub',  isExternalLink: false, submenu:  transactions2
    }
   );
 }

 if(this.adm.screenCheck(2,11,1,0))
 {
   menu.push(
     
    { path: '', title: 'Key Reports', icon: 'icon-key', class: 'dropdown nav-item has-sub',  isExternalLink: false, submenu:  [
      { path: '/purchases/purkeyrepsuppliergroups', title: 'Supplier Groups', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/purchases/purkeyrepsuppliers', title: 'Suppliers', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
 
 
    ]
  });
}
    

if(this.adm.screenCheck(2,11,2,0))
 {
   menu.push(
     
    { path: '', title: 'Order Reports', icon: 'icon-note', class: 'dropdown nav-item has-sub',  isExternalLink: false, submenu:  [
      { path: '/purchases/purrepomrequests', title: 'List of Requests', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/purchases/purrepomrequestspending', title: 'Requests pending for Orders', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/purchases/purrepomrequestsunordered', title: 'Item wise pending Requests', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/purchases/purrepomrequestsexpired', title: 'Expired Requests', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/purchases/purrepomrequeststobeapproved', title: 'Requests pending for approvals', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

      { path: '/purchases/purrepomenquiries', title: 'List of Enquiries', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/purchases/purrepomenquiriespending', title: 'Pending Enquiries for Approval', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/purchases/purrepomenquiriesexpired', title: 'Expired Enquiries', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/purchases/purrepomenquiriespending', title: 'Pending Enquiries for Quotations', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/purchases/purrepomenquiriespending', title: 'Pending Quotation for Approvals', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
     

{ path: '/purchases/purrepompendingorders', title: 'List of Orders', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
{ path: '/purchases/purrepomenquiriesexpired', title: 'Pending Orders for Approvals', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
{ path: '/purchases/purrepomsupplierwiseorders', title: 'Supplierwise Orders', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
{ path: '/purchases/purrepomenquiriesexpired', title: 'Delayed Orders', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
 
{ path: '/purchases/purrepompendingorders', title: 'Pending Orders', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/purchases/purrepomexpectedmaterials', title: 'Expected Materials', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    
      { path: '/purchases/purrepompendingadvances', title: 'Pending Advances', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/purchases/purrepomsupplierwiseadvances', title: 'Supplier wise Advances', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
     
    ]
  });



}

 


 return menu;
}

public getPurchasesMenuMake():any[]
{
  this.checkSettings();
    var menu:any[]=[];
 if(this.adm.screenCheck(2,0,0,1))
 {
   menu.push({
    path: '/purchases/purdashboard', title: 'Dashboard', icon: 'ft-pie-chart', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu:[]   });
  }

  var masters:any[]=[];
 
 if(this.adm.screenCheck(2,1,1,0))
 {
   masters.push(   
      { path: '/purchases/pursuppliergroups', title: 'Supplier Groups', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(2,1,2,0))
 {
    
   masters.push(   
      { path: '/purchases/pursuppliers', title: 'Suppliers', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(2,1,3,0))
 {
   masters.push(   
      { path: '/purchases/pursupopeningbalances', title: 'Opening Balances', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
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

if(this.adm.screenCheck(2,2,1,0))
 {
  transactions1.push(   
      { path: '/purchases/purrequests', title: 'Requests', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.requestcheck)
 {
 if(this.adm.screenCheck(2,2,1,98))
 {
  transactions1.push(   
      { path: '/purchases/purrequestapprovals', title: 'Request Approvals', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
}

 if(this.adm.screenCheck(2,2,3,0))
 {
  transactions1.push(   
      { path: '/purchases/purenquiries', title: 'Enquiries', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.enquirycheck)
 {
   if(this.adm.screenCheck(2,2,3,98))
   {
    transactions1.push(   
      { path: '/purchases/purenquiriesapprovals', title: 'Enquiry Approvals', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
   }
 }
 if(this.adm.screenCheck(2,2,4,0))
 {
  transactions1.push(   
      { path: '/purchases/purquotations', title: 'Quotations', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.quotationcheck)
 {
   if(this.adm.screenCheck(2,2,4,98))
   {
    transactions1.push(   
      { path: '/purchases/purquotationsapprovals', title: 'Quotation Approvals', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
   }
 }
 if(this.adm.screenCheck(2,2,5,0))
 {
  transactions1.push(   
      { path: '/purchases/purorders', title: 'Orders', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(2,2,8,0))
 {
  transactions1.push(   
      { path: '/purchases/purorders1', title: 'Bulk Orders', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.ordercheck)
 {
   if(this.adm.screenCheck(2,2,5,98))
   {
    transactions1.push(   
      { path: '/purchases/purorderapproval', title: 'Order Approvals', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
   }
 }



 if(this.adm.screenCheck(2,2,7,0))
 {
  transactions1.push(   
      { path: '/purchases/puradvances', title: 'Advances', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }

 if(transactions1.length > 0)
 {
   menu.push(
    { path: '', title: 'Order Mgt', icon: 'ft-file-text', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu:  transactions1
    }
   ); 
 }

 var transactions2:any[]=[];
 if(this.adm.screenCheck(2,3,1,0))
 {
  transactions2.push(   
      { path: '/purchases/purpurchasetra', title: 'Purchases', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(2,3,2,0))
 {
  transactions2.push(   
      { path: '/purchases/purpurchasereturns', title: 'Purchase Returns', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(2,3,3,0))
 {
  transactions2.push(   
      { path: '/purchases/purpurchasecrnotes', title: 'Credit Notes', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(2,3,4,0))
 {
  transactions2.push(   
      { path: '/purchases/purpurchasepayments', title: 'Supplier Payments', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(transactions2.length > 0)
 {
   menu.push(
    { path: '', title: 'Transactions', icon: 'ft-file-text', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu:  transactions2
    }
   ); 
 }

 if(this.adm.screenCheck(2,11,1,0))
 {
   menu.push({
    path: '', title: 'Key Reports', icon: 'icon-key', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
      { path: '/purchases/purkeyrepsuppliergroups', title: 'Supplier Groups', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/purchases/purkeyrepsuppliers', title: 'Suppliers', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      ]
  });
 }

 if(this.adm.screenCheck(2,11,2,0))
 {
   menu.push({
    path: '', title: 'Order Reports', icon: 'icon-note', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
      { path: '/purchases/purrepomrequests', title: 'List of Requests', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/purchases/purrepomrequestspending', title: 'Pending Requests', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/purchases/purrepomrequestsunordered', title: 'Item wise pending requests', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    
      
      { path: '/purchases/purrepomlistoforders', title: 'List of Orders', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/purchases/purrepomsupplierwiseorders', title: 'Supplierwise Orders', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
     
      { path: '/purchases/purrepompendingorders', title: 'Pending Orders', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/purchases/purrepomexpectedmaterials', title: 'Expected Material', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/purchases/purrepomdelayedorders', title: 'Delayed Orders', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/purchases/purrepompendingadvances', title: 'Pending Advances', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/purchases/purrepomsupplierwiseadvances', title: 'Supplier wise Advances', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    
    ]
  });
 }
 if(this.adm.screenCheck(2,11,3,0))
 {
  menu.push(
  {
    path: '', title: 'Purchase Reports', icon: 'icon-note', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
      { path: '/purchases/purreppurlistofpurhcases', title: 'List of Purchases', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/purchases/purreppurlistofpurhcasesdetailed', title: 'Detailed Purchases', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/purchases/purreppurlistofpurhcasesconsolidated', title: 'Consolidated Purchases', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/purchases/purreppurlistofpurhcasessupplierwise', title: 'Supplier wise Purchases', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/purchases/purreppurlistofpurhcasessupplierwiseconsolidated', title: 'Supplier wise Consolidation', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      
      { path: '/purchases/purrepcostlistofpr', title: 'Purchases Returns', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/purchases/purrepcostconsolidatedpr', title: 'Consolidated PR', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/purchases/purrepcostsupplierwisepr', title: 'Supplier wise Returns', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/purchases/purrepcostpuchasestopr', title: 'Purchases to returns', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/purchases/purrepcostlistofnotes', title: 'List of notes', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      
     
    ]
  });
 }

 if(this.adm.screenCheck(2,11,4,0))
 {
  menu.push(
    {
      path: '', title: 'Cost Reports', icon: 'ft-dollar-sign', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
        { path: '/purchases/purrepcostsupdaybook', title: 'Supplier day book', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/purchases/purrepcostsupledger', title: 'Supplier Ledger', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/purchases/purrepcostsupsnap', title: 'Supplier Snap Shot', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/purchases/purrepcostsupaging', title: 'Suppliers Aging', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/purchases/purrepcostsupcbalances', title: 'Supplier wise Pending details', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
       ]
    });
 }
 if(this.adm.screenCheck(2,11,5,0))
 {
  menu.push(
    {
      path: '', title: 'Stock & Accounts', icon: 'ft-shopping-cart', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
        { path: '/purchases/purrepstockdbook', title: 'Purchases Daybook', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
//        { path: '/purchases/purrepstockitemwiseledger', title: 'Item wise ledger', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/purchases/purrepstockitemwiseconsolidations', title: 'Consolidated Item', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
         { path: '/purchases/purrepstocktoppur', title: 'Top Purchases', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
     
        { path: '/purchases/purrepstockleastpur', title: 'Least Purchases', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/purchases/purrepstocknopur', title: 'No Purchases', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
     
         
      ]});
 }
 if(this.adm.screenCheck(2,11,6,0))
 {
  menu.push(
    {
      path: '', title: 'Analysis', icon: 'icon-pie-chart', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
        { path: '/purchases/purrepanalypricecompare', title: 'Price Comparison', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
         { path: '/purchases/purrepanastdtoactual', title: 'Std to Actual', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
         { path: '/purchases/purrepanalyreplinish1', title: 'Replinishment1', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
         { path: '/purchases/purrepanalyreplinish2', title: 'Replinshment2', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
   
    
        ]});
 }

 var sets:any[]=[];

 if(this.adm.screenCheck(2,8,1,0))
 {
  sets.push(   
      { path: '/purchases/purtypes', title: 'Purchase Types', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(2,8,2,0))
 {
  sets.push(   
      { path: '/purchases/purterms', title: 'Terms', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
  if(this.adm.screenCheck(2,8,3,0))
 {
  sets.push(   
      { path: '/purchases/pursettings', title: 'Settings', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(2,8,4,0))
 {
  sets.push(   
      { path: '/purchases/puraccountsassign', title: 'Accounts', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(2,8,5,0))
 {
  sets.push(   
      { path: '/purchases/purmailsettings', title: 'Mail Settings', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
  if(this.adm.screenCheck(2,8,6,0))
 {
  sets.push(   
      { path: '/purchases/purcoveringenquiry', title: 'Covering Enquiry', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 }
 if(this.adm.screenCheck(2,8,7,0))
 {
  sets.push(   
      { path: '/purchases/purcoveringorder', title: 'Covering Order', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
   );
 } 
 if(this.adm.screenCheck(2,8,8,0))
 {
  sets.push(   
      { path: '/purchases/purcoveringpurreturn', title: 'Covering Return', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
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
