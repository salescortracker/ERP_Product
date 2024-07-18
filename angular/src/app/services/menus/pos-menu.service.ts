import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PosMenuService {

  constructor() { }
  public getSalesMenu():any[]
  {
    var mainmenu:any[]=[{
      menu:'Sales',
      modulecode:5,
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
    menu:'Masters',
    modulecode:5,
    menucode:1,
    sceecode:0,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:this.getMasterChildren()

  });
  mainchildren.push({
    menu:'Transactions',
    modulecode:5,
    menucode:2,
    sceecode:0,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:this.getTransactionChildren()

  });

  mainchildren.push({
    menu:'Reports',
    modulecode:5,
    menucode:7,
    sceecode:0,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:this.getReportsChildren()

  });

  mainchildren.push({
    menu:'Setup',
    modulecode:5,
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
  menu:'Outlets',
  modulecode:5,
  menucode:1,
  sceecode:3,
  trancode:0,
  opencheck:true,
  actualcheck:false,
  children:[ {
    
    menu:'Create',
    modulecode:5,
    menucode:1,
    sceecode:3,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:5,
    menucode:1,
    sceecode:3,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:5,
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
    menu:'Dispatches',
    modulecode:5,
    menucode:2,
    sceecode:1,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
  {
    
    menu:'Create',
    modulecode:5,
    menucode:2,
    sceecode:1,
    trancode:1,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Modify',
    modulecode:5,
    menucode:2,
    sceecode:1,
    trancode:2,
    opencheck:true,
    actualcheck:false,
  },
  {
    
    menu:'Delete',
    modulecode:5,
    menucode:2,
    sceecode:1,
    trancode:3,
    opencheck:true,
    actualcheck:false,
  },
   
  
    ]
  });

  transchildren.push({
    menu:'Invoicing',
    modulecode:5,
    menucode:2,
    sceecode:2,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[
  
   
    ]
  });
      

  
 
  return transchildren;
}




public getReportsChildren():any[]
{
  var repchildren:any[]=[];

  repchildren.push({
    menu:'Sale Reports',
    modulecode:5,
    menucode:9,
    sceecode:1,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });
  repchildren.push({
    menu:'Costing Reports',
    modulecode:5,
    menucode:9,
    sceecode:2,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });
  repchildren.push({
    menu:'Stock Reports',
    modulecode:5,
    menucode:9,
    sceecode:3,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });
  repchildren.push({
    menu:'Analysis Reports',
    modulecode:5,
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
    menu:'Sale Types',
    modulecode:5,
    menucode:8,
    sceecode:1,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });
  setupChildren.push({
    menu:'Settings',
    modulecode:5,
    menucode:8,
    sceecode:2,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });
  setupChildren.push({
    menu:'Sale Types',
    modulecode:5,
    menucode:8,
    sceecode:1,
    trancode:0,
    opencheck:true,
    actualcheck:false,
    children:[]
  });
  return setupChildren;
}



}

