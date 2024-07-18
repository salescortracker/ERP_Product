import { Injectable } from '@angular/core';
import { AdminGeneralInfoService } from '../admin/admin-general-info.service';

@Injectable({
  providedIn: 'root'
})
export class AccMenuService {

  constructor(private adm:AdminGeneralInfoService) { }
  public makeAccountMenuDetails():any[]
  {




    var usr=this.adm.getUserCompleteInformation().usr;


   var accgroupsmenu= {
    menu:'Account Groups',
    modulecode:1,
    menucode:1,
    sceecode:1,
    trancode:0,
    opencheck:false,
    children:[
      {
        menu:'Create',
        modulecode:1,
        menucode:1,
        sceecode:1,
        trancode:1,
        opencheck:false,
        children:[]
      },
      {
        menu:'Modify',
        modulecode:1,
        menucode:1,
        sceecode:1,
        trancode:2,
        opencheck:false,
        children:[]
      },
      {
        menu:'Delete',
        modulecode:1,
        menucode:1,
        sceecode:1,
        trancode:3,
        opencheck:false,
        children:[]
      }
    ]
  }
   
  var accmenu= {
    menu:'Accounts',
    modulecode:1,
    menucode:1,
    sceecode:2,
    trancode:0,
    opencheck:false,
    children:[
      {
        menu:'Create',
        modulecode:1,
        menucode:1,
        sceecode:2,
        trancode:1,
        opencheck:false,
        children:[]
      },
      {
        menu:'Modify',
        modulecode:1,
        menucode:1,
        sceecode:2,
        trancode:2,
        opencheck:false,
        children:[]
      },
      {
        menu:'Delete',
        modulecode:1,
        menucode:1,
        sceecode:2,
        trancode:3,
        opencheck:false,
        children:[]
      }
    ]
  }
  var openMenu={
    menu:'Opening Balances',
    modulecode:1,
    menucode:1,
    sceecode:3,
    trancode:0,
    opencheck:false,
    children:[]
  }
  var assetMenu= {
    menu:'Assets',
    modulecode:1,
    menucode:1,
    sceecode:4,
    trancode:0,
    opencheck:false,
    children:[
      {
        menu:'Create',
        modulecode:1,
        menucode:1,
        sceecode:4,
        trancode:1,
        opencheck:false,
        children:[]
      },
      {
        menu:'Modify',
        modulecode:1,
        menucode:1,
        sceecode:4,
        trancode:2,
        opencheck:false,
        children:[]
      },
      {
        menu:'Delete',
        modulecode:1,
        menucode:1,
        sceecode:4,
        trancode:3,
        opencheck:false,
        children:[]
      }
    ]
  }
  var supAttachMenu={
    menu:'Supplier Attachments',
    modulecode:1,
    menucode:1,
    sceecode:5,
    trancode:0,
    opencheck:false,
    children:[]
  }
  var cusAttachMenu={
    menu:'Customer Attachments',
    modulecode:1,
    menucode:1,
    sceecode:6,
    trancode:0,
    opencheck:false,
    children:[]
  }

  var masterschild:any[]=[];
  masterschild.push(accgroupsmenu);
  masterschild.push(accmenu);
  masterschild.push(openMenu);
  masterschild.push(assetMenu);
  masterschild.push(supAttachMenu);
  if(usr.cCode != 11120)
  masterschild.push(cusAttachMenu);

   

  var accmastersMenu:any={
    menu:'Masters',
    modulecode:1,
    menucode:1,
    sceecode:0,
    trancode:0,
    opencheck:false,
    children:masterschild
  }



  var paymentMenu= {
    menu:'Payments',
    modulecode:1,
    menucode:2,
    sceecode:1,
    trancode:0,
    opencheck:false,
    children:[
      {
        menu:'Create',
        modulecode:1,
        menucode:2,
        sceecode:1,
        trancode:1,
        opencheck:false,
        children:[]
      },
      {
        menu:'Modify',
        modulecode:1,
        menucode:2,
        sceecode:1,
        trancode:2,
        opencheck:false,
        children:[]
      },
      {
        menu:'Delete',
        modulecode:1,
        menucode:2,
        sceecode:1,
        trancode:3,
        opencheck:false,
        children:[]
      },
      {
        menu:'Working in Other Dates',
        modulecode:1,
        menucode:2,
        sceecode:1,
        trancode:4,
        opencheck:false,
        children:[]
      },
      {
        menu:'Print',
        modulecode:1,
        menucode:2,
        sceecode:1,
        trancode:7,
        opencheck:false,
        children:[]
      }
    ]
  }


  var receiptMenu= {
    menu:'Receipts',
    modulecode:1,
    menucode:2,
    sceecode:2,
    trancode:0,
    opencheck:false,
    children:[
      {
        menu:'Create',
        modulecode:1,
        menucode:2,
        sceecode:2,
        trancode:1,
        opencheck:false,
        children:[]
      },
      {
        menu:'Modify',
        modulecode:1,
        menucode:2,
        sceecode:2,
        trancode:2,
        opencheck:false,
        children:[]
      },
      {
        menu:'Delete',
        modulecode:1,
        menucode:2,
        sceecode:2,
        trancode:3,
        opencheck:false,
        children:[]
      },
      {
        menu:'Working in Other Dates',
        modulecode:1,
        menucode:2,
        sceecode:2,
        trancode:4,
        opencheck:false,
        children:[]
      },
      {
        menu:'Print',
        modulecode:1,
        menucode:2,
        sceecode:2,
        trancode:7,
        opencheck:false,
        children:[]
      }
    ]
  }

  var journalMenu= {
    menu:'Journals',
    modulecode:1,
    menucode:2,
    sceecode:3,
    trancode:0,
    opencheck:false,
    children:[
      {
        menu:'Create',
        modulecode:1,
        menucode:2,
        sceecode:3,
        trancode:1,
        opencheck:false,
        children:[]
      },
      {
        menu:'Modify',
        modulecode:1,
        menucode:2,
        sceecode:3,
        trancode:2,
        opencheck:false,
        children:[]
      },
      {
        menu:'Delete',
        modulecode:1,
        menucode:2,
        sceecode:3,
        trancode:3,
        opencheck:false,
        children:[]
      },
      {
        menu:'Working in Other Dates',
        modulecode:1,
        menucode:2,
        sceecode:3,
        trancode:4,
        opencheck:false,
        children:[]
      } 
    ]
  }

  var transferMenu= {
    menu:'Transfers',
    modulecode:1,
    menucode:2,
    sceecode:4,
    trancode:0,
    opencheck:false,
    children:[
      {
        menu:'Create',
        modulecode:1,
        menucode:2,
        sceecode:4,
        trancode:1,
        opencheck:false,
        children:[]
      },
      {
        menu:'Modify',
        modulecode:1,
        menucode:2,
        sceecode:4,
        trancode:2,
        opencheck:false,
        children:[]
      },
      {
        menu:'Delete',
        modulecode:1,
        menucode:2,
        sceecode:4,
        trancode:3,
        opencheck:false,
        children:[]
      },
      {
        menu:'Working in Other Dates',
        modulecode:1,
        menucode:2,
        sceecode:4,
        trancode:4,
        opencheck:false,
        children:[]
      } 
    ]
  }

  var brsMenu={
    menu:'BRS',
    modulecode:1,
    menucode:2,
    sceecode:5,
    trancode:0,
    opencheck:false,
    children:[]
  }
  var yearEndMenu={
    menu:'BRS',
    modulecode:1,
    menucode:2,
    sceecode:5,
    trancode:0,
    opencheck:false,
    children:[]
  }

  var transactionsChild:any[]=[];

  transactionsChild.push(paymentMenu);
  transactionsChild.push(receiptMenu);
  transactionsChild.push(journalMenu);
  transactionsChild.push(transferMenu);
  transactionsChild.push(brsMenu);
  transactionsChild.push(yearEndMenu);

  var accTransactionMenu:any={
    menu:'Transactions',
    modulecode:1,
    menucode:2,
    sceecode:0,
    trancode:0,
    opencheck:false,
    children:transactionsChild
  }

  var keyReportsMenu={
    menu:'Key Reports',
    modulecode:1,
    menucode:8,
    sceecode:1,
    trancode:0,
    opencheck:false,
    children:[]
  }
  var bookReportsMenu={
    menu:'Books',
    modulecode:1,
    menucode:8,
    sceecode:2,
    trancode:0,
    opencheck:false,
    children:[]
  }
  var finstatementMenu={
    menu:'Financial Statements',
    modulecode:1,
    menucode:8,
    sceecode:3,
    trancode:0,
    opencheck:false,
    children:[]
  }
  var internalRepMenu={
    menu:'Internal Reports',
    modulecode:1,
    menucode:8,
    sceecode:4,
    trancode:0,
    opencheck:false,
    children:[]
  }
  var analysisMenu={
    menu:'Analysis',
    modulecode:1,
    menucode:8,
    sceecode:5,
    trancode:0,
    opencheck:false,
    children:[]
  }
var mainchildren:any[]=[];
mainchildren.push(accmastersMenu);
mainchildren.push(accTransactionMenu);
mainchildren.push(keyReportsMenu);
mainchildren.push(bookReportsMenu);
mainchildren.push(finstatementMenu);
mainchildren.push(internalRepMenu);
mainchildren.push(analysisMenu);
  var tempMenu={
    menu:'Accounts',
    modulecode:1,
    menucode:0,
    sceecode:0,
    trancode:0,
    opencheck:false,
    children:mainchildren
  }

  var mainMenu:any[]=[];
  mainMenu.push(tempMenu);
console.log(mainMenu,'Accounts Menu');
return mainMenu;

  }
}
