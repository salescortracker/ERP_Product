import { Component, OnInit } from '@angular/core';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { CrmRXPriceListService } from 'app/services/crm/crm-rxprice-list.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-crm-rx-discounts-list',
  templateUrl: './crm-rx-discounts-list.component.html',
  styleUrls: ['./crm-rx-discounts-list.component.scss']
})
export class CrmRxDiscountsListComponent implements OnInit {
  public authCheck:Boolean=false;
  public prices:any[]=[];
  public pricename:string='';
  public opencheck:boolean=false;
  public editcheck:boolean=false;
  public names:any;
    constructor(private crm:CrmRXPriceListService,private adm:AdminGeneralInfoService,private spinner:NgxSpinnerService) {
  if(this.adm.screenCheck(7,1,2,0))
  {
    this.authCheck=true;
    this.namesAdd();
  }
     
     }
  
  openNew()
  {
    this.pricename='';
    this.opencheck=true;
    this.editcheck=false;
    this.listAdd();
  }
  openOld(str)
  {
  this.pricename=str;
  this.opencheck=true;
  this.editcheck=true;
  this.listAdd();
  }
  
  public close()
  {
    this.opencheck=false;
  }
  
  public namesAdd()
  {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
    this.crm.getRxDiscountListNames().subscribe(res =>
    {
      var det:any=res;
        this.names=det;
        console.log(this.names);
        this.spinner.hide();
    });
  }
  
     public listAdd()
     { 
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
      this.crm.getRxDiscountList(this.pricename).subscribe(res =>
      {
        var det:any=res;
        console.log(det,'discs');
          this.prices=det;
          this.spinner.hide();
      });
    }
  
    ngOnInit(): void {
    }
  
  private valChk():boolean
  {
    if(this.pricename=='')
    {
      this.adm.showMessage('Discount list name not mentioned','Warning',3);
      return false;
    }
    for(var i=0;i<this.names.length;i++)
    {
      if(this.names[i].toUpperCase() == this.pricename.toUpperCase() && !this.editcheck)
      {
        this.adm.showMessage('Discount list name is already existed','Warning',3);
          return false;
      }
    }
    return true;
  }
  
  
  public savePrice()
  {
  if(this.valChk())
  {
  
    Swal.fire({  
      title:  this.editcheck?'Modifies Discount List Details':'Confirms Discount List Details' ,  
      text: 'You will not be able to recover this file!',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Yes, confirm it!',  
      cancelButtonText: 'No, keep it'  
    }).then((result) => {  
      if (result.value) { 
        this.spinner.show(undefined,
          {
            type: 'ball-triangle-path',
            size: 'medium',
            bdColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            fullScreen: true
          });
  
  
  
    var prices:any[]=[];
    for(var i=0;i<this.prices.length;i++)
    {
      prices.push({
        PriceListName:this.pricename,
        Product:this.prices[i].product,
        Coat:this.prices[i].coat,
       
        Discount:this.prices[i].discount,
        
      });
    }
    console.log(prices);
    this.crm.setRxDiscountsList(prices).subscribe(res =>
      {
          var result:any=res;
          if(result.result=='OK')
          {
            Swal.fire(  
              'Discounts reverted Successfully Successfully!',  
              'Discount Details Saved.',  
              'success'  
            )  ;
            this.namesAdd();
               this.opencheck=false;
          }
          else
          {
            Swal.fire(  
              result.result,  
              'Some error in transaction',  
              'error'  
            )  
          }
          
    this.spinner.hide();
  });
  }
  });
  }
  }
  }