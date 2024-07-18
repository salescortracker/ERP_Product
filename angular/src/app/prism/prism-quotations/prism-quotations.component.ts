import { NullTemplateVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { PrismQuotationsService } from 'app/services/prism/prism-quotations.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';
 
@Component({
  selector: 'app-prism-quotations',
  templateUrl: './prism-quotations.component.html',
  styleUrls: ['./prism-quotations.component.scss']
})
export class PrismQuotationsComponent implements OnInit {

  public open:boolean=false;
  public fromdate:Date = new Date();
  public todate:Date=new Date();
  public recordId:number=0;
  public seq:string='';
  public customerComments:string='';
  public callerComments:string='';
  public quotation:any={
    Seq:'',
    Dat:new Date(),
    Customer:'',
    Addr:'',
    Country:'India',
    Stat:'',
    District:'',
    City:'',
    Zip:'',
    Mobile:'',
    Tel:'',
    Fax:'',
    Email:'',
    Web:'',
    EnquiryId:0,
    
    Statu:0,
    VendorId:101,
    ProductCode:'',
    baseAmt:null,
    discount:null,
    taxes:null,
    totalamt:null
   
  };
  public totalproducts:any[]=[];
  public totalmodules:any[]=[];
  public pendingenquiries:any[]=[];
  public product:any={
   productCode: "",
   productName: "", 
   productDescription: "",
  price: 0, 
  maxTrainingTime: 1
 };
  public modules:any[]=[];
  public taxes:any[]=[];

  public enquiries:any;
  constructor(private prism:PrismQuotationsService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router) {
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
        this.prism.getPrismQuotationRequirements().subscribe(res =>
          {
              var det:any=res;
              console.log('detail',det);
              this.pendingenquiries=det.enquiry;
              this.seq=det.seq;
              this.totalproducts=det.products;
              this.totalmodules=det.modules;
              console.log(this.totalproducts,this.totalmodules,'result');
              this.spinner.hide();
          });

          this.listAdd();
     }
  ngOnInit(): void {
  }
  openNew()
  {
    this.makeCle();
    this.open=true;
  }
  makeCle()
  {
    this.recordId=0;
    this.quotation={
      Seq:this.seq,
      Dat:new Date(),
      Customer:'',
    Addr:'',
    Country:'India',
    Stat:'',
    District:'',
    City:'',
    Zip:'',
    Mobile:'',
    Tel:'',
    Fax:'',
    Email:'',
    Web:'',
    EnquiryId:0,
    Statu:0,
    VendorId:101,
    ProductCode:'',
    baseAmt:null,
    discount:null,
    taxes:null,
    totalamt:null
    };
    this.product={
      productCode: "",
      productName: "", 
      productDescription: "",
     price: 0, 
     maxTrainingTime: 1
    };
    this.modules=[];
  }
  openOld(obj:any)
  {
    this.recordId=obj.recordId;
    this.quotation={
      Seq:obj.seq,
      Dat:obj.dat,
      Customer:obj.customer,
      Addr:obj.addr,
      Country:obj.country,
      Stat:obj.stat,
      District:obj.district,
      City:obj.city,
      Zip:obj.zip,
      Mobile:obj.mobile,
      Tel:obj.tel,
      Fax:obj.fax,
      Email:obj.email,
      Web:obj.web,
      
      Statu:obj.statu,
      ProductCode:obj.productCode,
      
      validity:obj.validity,
      baseAmt:null,
      discount:null,
      taxes:null,
      totalamt:null
    };
    this.selectProduct();
    this.open=true;
  }

  public selectProduct()
  {
    var enq=this.pendingenquiries.filter(a => a.RecordId==this.quotation.EnquiryId);
    if(enq.length > 0)
    {
      console.log(enq);
    var det=this.totalproducts.filter(a => a.ProductCode == enq[0].ProductCode);
    if(det.length > 0)
    {
      this.product=det[0];
    }
    var modules=this.totalmodules.filter(a => a.productCode == enq[0].ProductCode);
    this.modules=[];
    for(var i=0;i<modules.length;i++)
    {
        this.modules.push(modules[i]);
    }
    this.quotation={
      Seq:this.seq,
      Dat:new Date(),
      Customer:enq[0].Customer,
    Addr:enq[0].Addr,
    Country:enq[0].Country,
    Stat:enq[0].Stat,
    District:enq[0].District,
    City:enq[0].City,
    Zip:enq[0].Zip,
    Mobile:enq[0].Mobile,
    Tel:enq[0].Tel,
    Fax:enq[0].Fax,
    Email:enq[0].Email,
    Web:enq[0].Web,
    EnquiryId:enq[0].RecordId,
    Statu:0,
    VendorId:101,
    ProductCode:enq[0].ProductCode,
    baseAmt:this.product.price,
    discount:0,
    taxes:this.product.price*18/100,
    totalamt:this.product.price + (this.product.price*18/100)
    };
    this.customerComments=enq[0].CustomerComments;
    this.callerComments=enq[0].CallerComments;
  }
  else
  {
    this.customerComments='';
    this.callerComments='';
    this.product={
      productCode: "",
      productName: "", 
      productDescription: "",
     price: 0, 
     maxTrainingTime: 1
    };
    this.modules=[];
    this.quotation={
      Seq:this.seq,
      Dat:new Date(),
      Customer:'',
    Addr:'',
    Country:'India',
    Stat:'',
    District:'',
    City:'',
    Zip:'',
    Mobile:'',
    Tel:'',
    Fax:'',
    Email:'',
    Web:'',
    EnquiryId:0,
    Statu:0,
    VendorId:101,
    ProductCode:'',
    baseAmt:null,
    discount:null,
    taxes:null,
    totalamt:null
    };
  }
  }
public close()
{
  this.open=false;
}

private valCheck():boolean
{
  if(this.quotation.Customer.trim()=='')
  {
    this.adm.showMessage('Customer not entered','Warning',3);
    return false;
  }
  if(this.quotation.Mobile.trim()=='')
  {
    this.adm.showMessage('Mobile not entered','Warning',3);
    return false;
  }
  if(this.quotation.ProductCode.trim()=='')
  {
    this.adm.showMessage('Product Code not selected','Warning',3);
    return false;
  }
  
  return true;
}
  public save()
  {
    if(this.valCheck())
    {
    Swal.fire({  
      title:  this.recordId==0?'Confirms Quotation Details':'Modifies Quotation Details' ,  
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
          if(this.recordId==0)
          {
            var lines:any[]=[];
            for(var i=0;i<this.modules.length;i++)
            {
              lines.push({
                Module:this.modules[i].moduleName,
                Descriptio:this.modules[i].moduleDescription,
                Trainingdays:this.modules[i].trainingDays,
                Price:this.modules[i].price,
                VendorId:101
              });
            }
            var terms:any[];
            terms.push({
              Term:'Price of this Quotation is valid for 45 days only'
            });
            terms.push({
              Term:'We are not legally liable for any data manipulation issues'
            });
            terms.push({
              Term:'Any issue can be cleared in maximum of 48 hours'
            });
            
            var obj:any=
            {
              header:this.quotation,
              lines:lines,
              terms:terms,
              taxes:this.taxes,
              traCheck:1
            };
          this.prism.setPrismQuotation(obj).subscribe(res =>
            {
                  var det:any=res;
                  if(det.result=='OK')
                  {
                    this.adm.showMessage('Enquiry added successfully','Success',1);
                    this.listAdd();
                    this.open=false;
                  }
                  else
                  {
                    this.adm.showMessage(det.result,'Error',4);
                  }
                  this.spinner.hide();
            });
          }
          else
          {
           /* this.quotation.RecordId=this.recordId;
            this.prism.(this.enquiry).subscribe(res =>
              {
                var det:any=res;
                if(det.result=='OK')
                {
                  this.adm.showMessage('Enquiry modified successfully','Success',1);
                  this.listAdd();
                  this.open=false;
                }
                else
                {
                  this.adm.showMessage(det.result,'Error',4);
                }
                this.spinner.hide();
              });*/
          }



  }

});
    }
  }
private deleteCheck():boolean
{
  if(this.quotation.statu > 0)
  {
    this.adm.showMessage('This Quotation crossed further stage deletion is not possible','Warning',3);
    return false;
  }
  return true;
}
  public delete()
  {
    if(this.deleteCheck())
    {
    Swal.fire({  
      title:  'Deletes Quotation Details'  ,  
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
         
            this.quotation.RecordId=this.recordId;
            /*this.prism.deletePrismEnquiry(this.recordId).subscribe(res =>
              {
                var det:any=res;
                if(det.result=='OK')
                {
                  this.adm.showMessage('Enquiry Deleted successfully','Success',1);
                  this.listAdd();
                  this.open=false;

                }
                else
                {
                  this.adm.showMessage(det.result,'Error',4);
                }
              });*/
   }

});
  }
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
      this.prism.getPrismQuotations(this.adm.stringData(this.fromdate),this.adm.stringData(this.todate)).subscribe(res =>
        {
          this.enquiries=res;
          this.spinner.hide();
        });
  }
parseDate(dateString: string): Date {
  if (dateString) {
      return new Date(dateString);
  }
  return null;
}

}
