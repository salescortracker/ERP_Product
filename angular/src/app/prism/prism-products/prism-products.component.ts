import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
 
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { PrismProductsService } from 'app/services/prism/prismadmin/prism-products.service';
import { ModuleResolver } from '@angular/compiler-cli/src/ngtsc/imports';

@Component({
  selector: 'app-prism-products',
  templateUrl: './prism-products.component.html',
  styleUrls: ['./prism-products.component.scss']
})
export class PrismProductsComponent implements OnInit {
  public creCheck:Boolean=false;
  public delCheck:Boolean=false;
  public delVisible:Boolean=false;

  public saveStr:string='';
 
  public recordID:string='';
 
 public product:any={
  ProductCode:'',
  ProductName:'',
  MaxInstallationTime:0,
  MaxTrainingTime:0,
  ProductType:'-',
  productDescription:'',
  priceType:0,
  price:null
 };

 public productModules:any[]=[];
public modulename:string='';
public description:string='';
public traindays:number=0;
public moduleprice:number=0;



  public opened:boolean=false;
  public grps:any;
  public products:any;
  public searchtext:string='';
  public authCheck:boolean=false;
  constructor(private pro:PrismProductsService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   ) {
     var det=this.adm.getUserCompleteInformation().usr;
if(det.rCode.toUpperCase()=="ADMINISTRATOR")
{
   this.authCheck=true;
    this.listAdd();
  
}
else
{
//this.router.navigateByUrl('accounts/accunauthorize')
this.authCheck=false;
}
   }

  ngOnInit(): void {
   // this.listAdd();
  }


  openNew()
  {
    this.makeCle();
    this.creCheck=true;
    this.saveStr='Save';
    this.opened=true;
  }
  private makeCle()
  {
    this.delVisible=false;
    this.recordID='';

    this.product={
      ProductCode:'',
      ProductName:'',
      MaxInstallationTime:0,
      MaxTrainingTime:0,
      ProductType:'-',
      productDescription:'',
      priceType:0,
      price:null
     };
    this.productModules=[];
  }

  openOld(obj:any)
  {
    
    
     
    this.recordID=obj.recordId;
   
    this.delVisible=true;
    this.creCheck=true;
    this.saveStr='Modify';
    this.opened=true;
     
  }
valChk():Boolean
{
  
  
  return true;
}
public delete()
{
  Swal.fire({  
    title:  'Deletes Product Details' ,  
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


      
       
        var tracheck=3;
       this.pro.setPrismProduct(this.product,this.productModules,3).subscribe(
          async res => {
            var result:any=res;
            if(result.result  =='OK')
{
   Swal.fire(  
            'Transaction Completed Successfully!',  
            'Group Details deleted.',  
            'success'  
          )  ;

          if(this.recordID=='')
        {
           this.opened=true;
        }
        else
        {
             this.opened=false;
        }
        this.makeCle();
        this.listAdd();
         
   }
   else
   {
  Swal.fire(  
      result.result,  
      'Some error in transaction',  
      'error'  
    );  
  }
      
   
  this.spinner.hide();
  });
}
});

}

  public save()
  {
     if(this.valChk())
    {
      Swal.fire({  
        title:  this.recordID==''?'Confirms Product Details':'Modifies Product Details',  
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
    
            var tracheck=1;
            var modules:any[]=[];
            for(var i=0;i<this.productModules.length;i++)
            {
              modules.push({
                ProductCode:this.product.ProductCode,
                Sno:i+1,
                ModuleName:this.productModules[i].ModuleName,
                ModuleDescription:this.productModules[i].ModuleDescription,
                TrainingDays:this.productModules[i].TrainingDays,
                Price:this.productModules[i].Price
              });
            }
            var product:any={
              ProductCode:this.product.ProductCode,
              ProductName:this.product.ProductName,
              MaxInstallationTime:this.product.MaxInstallationTime,
              MaxTrainingTime:this.product.MaxTrainingTime,
              ProductType:this.product.ProductType,
              productDescription:this.product.productDescription,
              priceType:+this.product.priceType,
              price:+this.product.price
            };
           this.pro.setPrismProduct(product,modules,tracheck).subscribe(
              async res => {
                var result:any=res;
                if(result.result  =='OK')
    {
       Swal.fire(  
                'Transaction Completed Successfully!',  
                'Group Details saved.',  
                'success'  
              )  ;

              if(this.recordID=='')
            {
               this.opened=true;
            }
            else
            {
                 this.opened=false;
            }
            this.makeCle();
            this.listAdd();
           
       }
       else
       {
      Swal.fire(  
          result.result,  
          'Some error in transaction',  
          'error'  
        ) ;
      }
      this.spinner.hide();
      });
    }
  });

}
  }

  close()
  {
    this.opened=false;
  }
listAdd()
{
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
  
  this.pro.getPrismProducts().subscribe(
    async res => {
      this.products=res;
    this.spinner.hide(); 
    });
    
}
  
public addModule()
{
  this.productModules.push({
    ModuleName:this.modulename,
    ModuleDescription:this.description,
    TrainingDays:this.traindays,
    Price:this.moduleprice
  });
}
public deleteModule(obj)
{
  var index=this.productModules.indexOf(obj);
  if(index >= 0)
  {
    this.productModules.splice(index,1);
  }
}
 
}
