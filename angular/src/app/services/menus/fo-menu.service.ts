import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoMenuService {
 
  constructor() { }
  public getFrontOfficeMenu():any[]
  {
    var mainmenu:any[]=[{
      menu:'Front Office',
      modulecode:6,
      menucode:0,
      sceecode:0,
      trancode:0,
      opencheck:false,
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
    modulecode:6,
    menucode:1,
    sceecode:0,
    trancode:0,
    opencheck:false,
    actualcheck:false,
    children:this.getMasterChildren()

  });
  mainchildren.push({
    menu:'Transactions',
    modulecode:1,
    menucode:2,
    sceecode:0,
    trancode:0,
    opencheck:false,
    actualcheck:false,
    children:this.getTransactionChildren()

  });

  mainchildren.push({
    menu:'Reports',
    modulecode:1,
    menucode:8,
    sceecode:0,
    trancode:0,
    opencheck:false,
    actualcheck:false,
    children:this.getReportsChildren()

  });

  mainchildren.push({
    menu:'Setup',
    modulecode:6,
    menucode:9,
    sceecode:0,
    trancode:0,
    opencheck:false,
    actualcheck:false,
    children:this.getSetupChildren()

  });


return mainchildren;
}



public getMasterChildren():any[]
{
var masterchildren:any[]=[];
masterchildren.push({
  menu:'Room Categories',
  modulecode:6,
  menucode:1,
  sceecode:1,
  trancode:0,
  opencheck:false,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:6,
  menucode:1,
  sceecode:1,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Modify',
  modulecode:6,
  menucode:1,
  sceecode:1,
  trancode:2,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Delete',
  modulecode:6,
  menucode:1,
  sceecode:1,
  trancode:3,
  opencheck:true,
  actualcheck:false,
},
 
  ]
});


masterchildren.push({
  menu:'Rooms',
  modulecode:6,
  menucode:1,
  sceecode:2,
  trancode:0,
  opencheck:false,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:6,
  menucode:1,
  sceecode:2,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Modify',
  modulecode:6,
  menucode:1,
  sceecode:2,
  trancode:2,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Delete',
  modulecode:6,
  menucode:1,
  sceecode:2,
  trancode:3,
  opencheck:true,
  actualcheck:false,
},
 
  ]
});


masterchildren.push({
  menu:'Post Charges',
  modulecode:6,
  menucode:1,
  sceecode:3,
  trancode:0,
  opencheck:false,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:6,
  menucode:1,
  sceecode:3,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Modify',
  modulecode:6,
  menucode:1,
  sceecode:3,
  trancode:2,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Delete',
  modulecode:6,
  menucode:1,
  sceecode:3,
  trancode:3,
  opencheck:true,
  actualcheck:false,
},
 
  ]
});

masterchildren.push({
  menu:'Meal Plans',
  modulecode:6,
  menucode:1,
  sceecode:4,
  trancode:0,
  opencheck:false,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:6,
  menucode:1,
  sceecode:4,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Modify',
  modulecode:6,
  menucode:1,
  sceecode:4,
  trancode:2,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Delete',
  modulecode:6,
  menucode:1,
  sceecode:4,
  trancode:3,
  opencheck:true,
  actualcheck:false,
},
 
  ]
});


masterchildren.push({
  menu:'Customer Groups',
  modulecode:6,
  menucode:1,
  sceecode:6,
  trancode:0,
  opencheck:false,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:6,
  menucode:1,
  sceecode:6,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Modify',
  modulecode:6,
  menucode:1,
  sceecode:6,
  trancode:2,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Delete',
  modulecode:6,
  menucode:1,
  sceecode:6,
  trancode:3,
  opencheck:true,
  actualcheck:false,
},
 
  ]
});



masterchildren.push({
  menu:'Customers',
  modulecode:6,
  menucode:1,
  sceecode:7,
  trancode:0,
  opencheck:false,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:6,
  menucode:1,
  sceecode:7,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Modify',
  modulecode:6,
  menucode:1,
  sceecode:7,
  trancode:2,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Delete',
  modulecode:6,
  menucode:1,
  sceecode:7,
  trancode:3,
  opencheck:true,
  actualcheck:false,
},
 
  ]
});



masterchildren.push({
  menu:'Incomes/Expenses',
  modulecode:6,
  menucode:1,
  sceecode:5,
  trancode:0,
  opencheck:false,
  actualcheck:false,
  children:[
{
  
  menu:'Create',
  modulecode:6,
  menucode:1,
  sceecode:5,
  trancode:1,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Modify',
  modulecode:6,
  menucode:1,
  sceecode:5,
  trancode:2,
  opencheck:true,
  actualcheck:false,
},
{
  
  menu:'Delete',
  modulecode:6,
  menucode:1,
  sceecode:5,
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
    menu:'Reservations',
    modulecode:6,
    menucode:2,
    sceecode:1,
    trancode:0,
    opencheck:false,
    actualcheck:false,
    children:[
  {
    
    menu:'Create',
    modulecode:6,
    menucode:2,
    sceecode:1,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:6,
    menucode:2,
    sceecode:1,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Cancel',
    modulecode:6,
    menucode:2,
    sceecode:1,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Working in other dates',
    modulecode:6,
    menucode:2,
    sceecode:1,
    trancode:4,
    opencheck:true,
    actualcheck:false,
  },
  
  
    ]
  });

  transchildren.push({
    menu:'Payments',
    modulecode:6,
    menucode:2,
    sceecode:9,
    trancode:0,
    opencheck:false,
    actualcheck:false,
    children:[
  {
    
    menu:'Create',
    modulecode:6,
    menucode:2,
    sceecode:9,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:6,
    menucode:2,
    sceecode:9,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:6,
    menucode:2,
    sceecode:9,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Working in other dates',
    modulecode:6,
    menucode:2,
    sceecode:9,
    trancode:4,
    opencheck:true,
    actualcheck:false,
  },
  {
    menu:'Reprints',
    modulecode:6,
    menucode:2,
    sceecode:9,
    trancode:9,
    opencheck:true,
    actualcheck:false,
  },
    ]
  });

  transchildren.push({
    menu:'One Window',
    modulecode:6,
    menucode:2,
    sceecode:2,
    trancode:0,
    opencheck:false,
    actualcheck:false,
    children:[]});

    transchildren.push({
      menu:'Vacant Room',
      modulecode:6,
      menucode:2,
      sceecode:0,
      trancode:0,
      opencheck:false,
      actualcheck:false,
      children:[
    {
      
      menu:'Checkin',
      modulecode:6,
      menucode:2,
      sceecode:4,
      trancode:0,
      opencheck:true,
      actualcheck:false,
    },
    {
      
      menu:'Quick Checkin',
      modulecode:6,
      menucode:2,
      sceecode:4,
      trancode:1,
      opencheck:true,
      actualcheck:false,
    },
    {
      
      menu:'House Guest',
      modulecode:6,
      menucode:2,
      sceecode:4,
      trancode:2,
      opencheck:true,
      actualcheck:false,
    },
    {
      
      menu:'Room Status',
      modulecode:6,
      menucode:2,
      sceecode:4,
      trancode:3,
      opencheck:true,
      actualcheck:false,
    },
    
      ]
    });
  

    transchildren.push({
      menu:'Occupied Room',
      modulecode:6,
      menucode:3,
      sceecode:0,
      trancode:0,
      opencheck:false,
      actualcheck:false,
      children:[
    {
      
      menu:'Change Details',
      modulecode:6,
      menucode:3,
      sceecode:1,
      trancode:1,
      opencheck:true,
      actualcheck:false,
    },
    {
      
      menu:'C-Form',
      modulecode:6,
      menucode:3,
      sceecode:2,
      trancode:0,
      opencheck:true,
      actualcheck:false,
    },
    {
      
      menu:'Post Charges',
      modulecode:6,
      menucode:3,
      sceecode:3,
      trancode:0,
      opencheck:true,
      actualcheck:false,
    },
    {
      
      menu:'Room Transfer',
      modulecode:6,
      menucode:3,
      sceecode:4,
      trancode:0,
      opencheck:true,
      actualcheck:false,
    },

    {
      
      menu:'Tariff Change',
      modulecode:6,
      menucode:3,
      sceecode:5,
      trancode:0,
      opencheck:true,
      actualcheck:false,
    },
    {
      menu:'Tariff Change Previous Slots',
      modulecode:6,
      menucode:3,
      sceecode:5,
      trancode:1,
      opencheck:true,
      actualcheck:false,
    },
    {
      menu:'Guest Management',
      modulecode:6,
      menucode:3,
      sceecode:6,
      trancode:0,
      opencheck:true,
      actualcheck:false,
    },
    {
      menu:'REG Card',
      modulecode:6,
      menucode:3,
      sceecode:7,
      trancode:0,
      opencheck:true,
      actualcheck:false,
    },
    {
      menu:'Ledger',
      modulecode:6,
      menucode:3,
      sceecode:8,
      trancode:0,
      opencheck:true,
      actualcheck:false,
    },
    {
      menu:'Cancel Checkin',
      modulecode:6,
      menucode:3,
      sceecode:9,
      trancode:0,
      opencheck:true,
      actualcheck:false,
    },
    {
      menu:'Check out',
      modulecode:6,
      menucode:3,
      sceecode:10,
      trancode:0,
      opencheck:true,
      actualcheck:false,
    },
    
      ]
    });
  


    transchildren.push({
      menu:'Group Operations',
      modulecode:6,
      menucode:5,
      sceecode:1,
      trancode:0,
      opencheck:false,
      actualcheck:false,
      children:[
    {
      
      menu:'New Group',
      modulecode:6,
      menucode:5,
      sceecode:1,
      trancode:1,
      opencheck:true,
      actualcheck:false,
    },
    {
      
      menu:'Modify Group',
      modulecode:6,
      menucode:5,
      sceecode:1,
      trancode:2,
      opencheck:true,
      actualcheck:false,
    },
    {
      
      menu:'Link/D-Link',
      modulecode:6,
      menucode:5,
      sceecode:2,
      trancode:0,
      opencheck:true,
      actualcheck:false,
    },
    {
      menu:'Add Rooms',
      modulecode:6,
      menucode:5,
      sceecode:3,
      trancode:0,
      opencheck:true,
      actualcheck:false,
    },
    {
      menu:'Part Checkout',
      modulecode:6,
      menucode:5,
      sceecode:4,
      trancode:0,
      opencheck:true,
      actualcheck:false,
    },
    {
      menu:'Final Checkout',
      modulecode:6,
      menucode:5,
      sceecode:5,
      trancode:0,
      opencheck:true,
      actualcheck:false,
    },
    
      ]
    });

    transchildren.push({
      menu:'ACR',
      modulecode:6,
      menucode:6,
      sceecode:1,
      trancode:0,
      opencheck:false,
      actualcheck:false,
      children:[
    {
      
      menu:'Create',
      modulecode:6,
      menucode:6,
      sceecode:1,
      trancode:1,
      opencheck:true,
      actualcheck:false,
    },
    
    {
      
      menu:'Delete',
      modulecode:6,
      menucode:6,
      sceecode:1,
      trancode:3,
      opencheck:true,
      actualcheck:false,
    },
    {
      
      menu:'Working in other dates',
      modulecode:6,
      menucode:6,
      sceecode:1,
      trancode:4,
      opencheck:true,
      actualcheck:false,
    },
    
      ]
    });
  



    transchildren.push({
      menu:'Resettlements',
      modulecode:6,
      menucode:2,
      sceecode:7,
      trancode:0,
      opencheck:false,
      actualcheck:false,
      children:[]});

      transchildren.push({
        menu:'Breakfast Coupons',
        modulecode:6,
        menucode:2,
        sceecode:8,
        trancode:0,
        opencheck:false,
        actualcheck:false,
        children:[]}),

        transchildren.push({
          menu:'Incomes',
          modulecode:6,
          menucode:2,
          sceecode:22,
          trancode:0,
          opencheck:false,
          actualcheck:false,
          children:[
        {
          
          menu:'Create',
          modulecode:6,
          menucode:2,
          sceecode:22,
          trancode:1,
          opencheck:true,
          actualcheck:false,
        },
        {
          
          menu:'Modify',
          modulecode:6,
          menucode:2,
          sceecode:22,
          trancode:2,
          opencheck:true,
          actualcheck:false,
        },
        {
          
          menu:'Delete',
          modulecode:6,
          menucode:2,
          sceecode:22,
          trancode:3,
          opencheck:true,
          actualcheck:false,
        },
        {
          
          menu:'Working in other dates',
          modulecode:6,
          menucode:2,
          sceecode:22,
          trancode:4,
          opencheck:true,
          actualcheck:false,
        },
        
          ]
        }),
        transchildren.push({
          menu:'Expenses',
          modulecode:6,
          menucode:2,
          sceecode:23,
          trancode:0,
          opencheck:false,
          actualcheck:false,
          children:[
        {
          
          menu:'Create',
          modulecode:6,
          menucode:2,
          sceecode:23,
          trancode:1,
          opencheck:true,
          actualcheck:false,
        },
        {
          
          menu:'Modify',
          modulecode:6,
          menucode:2,
          sceecode:23,
          trancode:2,
          opencheck:true,
          actualcheck:false,
        },
        {
          
          menu:'Delete',
          modulecode:6,
          menucode:2,
          sceecode:23,
          trancode:3,
          opencheck:true,
          actualcheck:false,
        },
        {
          
          menu:'Working in other dates',
          modulecode:6,
          menucode:2,
          sceecode:23,
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
    modulecode:6,
    menucode:7,
    sceecode:1,
    trancode:0,
    opencheck:false,
    actualcheck:false,
    children:[]
  });
  repchildren.push({
    menu:'Day Reports',
    modulecode:6,
    menucode:7,
    sceecode:2,
    trancode:0,
    opencheck:false,
    actualcheck:false,
    children:[]
  });

  repchildren.push({
    menu:'Reservation Reports',
    modulecode:6,
    menucode:7,
    sceecode:3,
    trancode:0,
    opencheck:false,
    actualcheck:false,
    children:[]
  });

  repchildren.push({
    menu:'Checkin Reports',
    modulecode:6,
    menucode:7,
    sceecode:4,
    trancode:0,
    opencheck:false,
    actualcheck:false,
    children:[]
  });

  repchildren.push({
    menu:'Sale Reports',
    modulecode:6,
    menucode:7,
    sceecode:5,
    trancode:0,
    opencheck:false,
    actualcheck:false,
    children:[]
  });

  repchildren.push({
    menu:'Account Reports',
    modulecode:6,
    menucode:7,
    sceecode:6,
    trancode:0,
    opencheck:false,
    actualcheck:false,
    children:[]
  });
  repchildren.push({
    menu:'CRM Reports',
    modulecode:6,
    menucode:7,
    sceecode:7,
    trancode:0,
    opencheck:false,
    actualcheck:false,
    children:[]
  });
  repchildren.push({
    menu:'Analysis',
    modulecode:6,
    menucode:7,
    sceecode:8,
    trancode:0,
    opencheck:false,
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
    modulecode:6,
    menucode:9,
    sceecode:1,
    trancode:0,
    opencheck:false,
    actualcheck:false,
    children:[]
  });
  setupChildren.push({
    menu:'Email Settings',
    modulecode:6,
    menucode:9,
    sceecode:2,
    trancode:0,
    opencheck:false,
    actualcheck:false,
    children:[]
  });
  setupChildren.push({
    menu:'SMS Settings',
    modulecode:6,
    menucode:9,
    sceecode:3,
    trancode:0,
    opencheck:false,
    actualcheck:false,
    children:[]
  });
  setupChildren.push({
    menu:'Taxes',
    modulecode:6,
    menucode:9,
    sceecode:4,
    trancode:0,
    opencheck:false,
    actualcheck:false,
    children:[]
  });
  setupChildren.push({
    menu:'Checkout Plans',
    modulecode:6,
    menucode:9,
    sceecode:5,
    trancode:0,
    opencheck:false,
    actualcheck:false,
    children:[]
  });
  setupChildren.push({
    menu:'Checkout Slabs',
    modulecode:6,
    menucode:9,
    sceecode:6,
    trancode:0,
    opencheck:false,
    actualcheck:false,
    children:[]
  });
  setupChildren.push({
    menu:'Bill Templates',
    modulecode:6,
    menucode:9,
    sceecode:7,
    trancode:0,
    opencheck:false,
    actualcheck:false,
    children:[]
  });
  setupChildren.push({
    menu:'Accounts Assign',
    modulecode:6,
    menucode:9,
    sceecode:8,
    trancode:0,
    opencheck:false,
    actualcheck:false,
    children:[]
  });
  return setupChildren;
}



}
