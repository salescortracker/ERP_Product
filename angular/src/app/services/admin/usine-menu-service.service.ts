import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsineMenuServiceService {

  constructor() { }

  public getUsineMenuDetails():any[]
  {
    var menu:any=[]=[];
menu.push(this.accountsMenuDetails());

    return menu;
  }

  public accountsMenuDetails():any[]
  {
    var menu:any=[]=[];

    menu.push({
      menu:'Accounts',
      modulecode:1,
      menucode:0,
      screencode:0,
      transcode:0,
      menupos:false,
      opencheck:false,
      children:[
{
    menu:'Masters',
      modulecode:1,
      menucode:1,
      screencode:0,
      transcode:0,
      menupos:false,
      opencheck:false,
      children:[
{
  menu:'Account Groups',
      modulecode:1,
      menucode:1,
      screencode:1,
      transcode:0,
      menupos:false,
      opencheck:false,
      children:[
        { menu:'Create',
        modulecode:1,
        menucode:1,
        screencode:1,
        transcode:1,
        menupos:false,
        opencheck:false,
        children:[]
          
        }, { menu:'Modify',
        modulecode:1,
        menucode:1,
        screencode:1,
        transcode:2,
        menupos:false,
        opencheck:false,
        children:[]
          
        },
        { menu:'Delete',
        modulecode:1,
        menucode:1,
        screencode:1,
        transcode:3,
        menupos:false,
        opencheck:false,
        children:[]
          
        },
      ]
},

{
  menu:'Accounts',
      modulecode:1,
      menucode:1,
      screencode:2,
      transcode:0,
      menupos:false,
      opencheck:false,
      children:[
        { menu:'Create',
        modulecode:1,
        menucode:1,
        screencode:2,
        transcode:1,
        menupos:false,
        opencheck:false,
        children:[]
          
        }, { menu:'Modify',
        modulecode:1,
        menucode:1,
        screencode:2,
        transcode:2,
        menupos:false,
        opencheck:false,
        children:[]
          
        },
        { menu:'Delete',
        modulecode:1,
        menucode:1,
        screencode:2,
        transcode:3,
        menupos:false,
        opencheck:false,
        children:[]
          
        },
      ]
},
{
  menu:'Opening Balances',
  modulecode:1,
  menucode:1,
  screencode:3,
  transcode:0,
  menupos:false,
  opencheck:false,
  children:[]
},

{
  menu:'Assets',
  modulecode:1,
  menucode:1,
  screencode:4,
  transcode:0,
  menupos:false,
  opencheck:false,
  children:[  { menu:'Create',
  modulecode:1,
  menucode:1,
  screencode:4,
  transcode:1,
  menupos:false,
  opencheck:false,
  children:[]
    
  }, { menu:'Modify',
  modulecode:1,
  menucode:1,
  screencode:4,
  transcode:2,
  menupos:false,
  opencheck:false,
  children:[]
    
  },
  { menu:'Delete',
  modulecode:1,
  menucode:1,
  screencode:4,
  transcode:3,
  menupos:false,
  opencheck:false,
  children:[]
    
  },]
},
{
  menu:'Supplier Attachments',
  modulecode:1,
  menucode:1,
  screencode:5,
  transcode:0,
  menupos:false,
  opencheck:false,
  children:[]
},
{
  menu:'Customer Attachments',
  modulecode:1,
  menucode:1,
  screencode:6,
  transcode:0,
  menupos:false,
  opencheck:false,
  children:[]
}


      ]
},
{
  menu:'Transactions',
    modulecode:1,
    menucode:2,
    screencode:0,
    transcode:0,
    menupos:false,
    opencheck:false,
    children:[
      {
        menu:'Payments',
        modulecode:1,
        menucode:2,
        screencode:1,
        transcode:0,
        menupos:false,
        opencheck:false,
        children:[  { menu:'Create',
        modulecode:1,
        menucode:2,
        screencode:1,
        transcode:1,
        menupos:false,
        opencheck:false,
        children:[]
          
        }, { menu:'Modify',
        modulecode:1,
        menucode:2,
        screencode:1,
        transcode:2,
        menupos:false,
        opencheck:false,
        children:[]
          
        },
        { menu:'Delete',
        modulecode:1,
        menucode:2,
        screencode:1,
        transcode:3,
        menupos:false,
        opencheck:false,
        children:[]
          
        },{ menu:'Working in other dates',
        modulecode:1,
        menucode:2,
        screencode:1,
        transcode:4,
        menupos:false,
        opencheck:false,
        children:[]
          
        }]},

        {
          menu:'Receipts',
          modulecode:1,
          menucode:2,
          screencode:2,
          transcode:0,
          menupos:false,
          opencheck:false,
          children:[  { menu:'Create',
          modulecode:1,
          menucode:2,
          screencode:2,
          transcode:1,
          menupos:false,
          opencheck:false,
          children:[]
            
          }, { menu:'Modify',
          modulecode:1,
          menucode:2,
          screencode:2,
          transcode:2,
          menupos:false,
          opencheck:false,
          children:[]
            
          },
          { menu:'Delete',
          modulecode:1,
          menucode:2,
          screencode:2,
          transcode:3,
          menupos:false,
          opencheck:false,
          children:[]
            
          },{ menu:'Working in other dates',
          modulecode:1,
          menucode:2,
          screencode:2,
          transcode:4,
          menupos:false,
          opencheck:false,
          children:[]
            
          }]},
  
      

    
]
}
,
{
  menu:'Intrnal',
    modulecode:1,
    menucode:3,
    screencode:0,
    transcode:0,
    menupos:false,
    opencheck:false,
    children:[]
},
{
  menu:'Key Reports',
    modulecode:1,
    menucode:8,
    screencode:1,
    transcode:0,
    menupos:false,
    opencheck:false,
    children:[]
},
{
  menu:'Books',
    modulecode:1,
    menucode:8,
    screencode:2,
    transcode:0,
    menupos:false,
    opencheck:false,
    children:[]
},
{
  menu:'Financial Statements',
    modulecode:1,
    menucode:8,
    screencode:3,
    transcode:0,
    menupos:false,
    opencheck:false,
    children:[]
},
{
  menu:'Internal Reports',
    modulecode:1,
    menucode:8,
    screencode:4,
    transcode:0,
    menupos:false,
    opencheck:false,
    children:[]
},
{
  menu:'Analysis',
    modulecode:1,
    menucode:8,
    screencode:5,
    transcode:0,
    menupos:false,
    opencheck:false,
    children:[]
}









      ]
    });




    return menu;
  }


}
