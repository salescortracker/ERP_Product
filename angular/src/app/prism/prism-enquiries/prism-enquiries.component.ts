import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { PrismEnquiriesService } from 'app/services/prism/prism-enquiries.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-prism-enquiries',
  templateUrl: './prism-enquiries.component.html',
  styleUrls: ['./prism-enquiries.component.scss']
})
export class PrismEnquiriesComponent implements OnInit {

  public open:boolean=false;
  public fromdate:Date = new Date();
  public todate:Date=new Date();
  public recordId:number=0;
  public seq:string='';
  public enquiry:any={
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
    CustomerComments:'',
    CallerComments:'',
    Statu:0,
    ProductCode:'',
    reference:'',
    validity:new Date()
  };
  public totalproducts:any[]=[];
  public totalmodules:any[]=[];
  public product:any={
   productCode: "",
   productName: "", 
   productDescription: "",
  price: 0, 
  maxTrainingTime: 1
 };
  public modules:any[]=[];
  public enquiries:any;
  constructor(private prism:PrismEnquiriesService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router) {
    /*  this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
        this.prism.getPrismEnquiryRequirements().subscribe(res =>
          {
              var det:any=res;
              console.log('detail',det);
              //var det:any=JSON.parse(det1);
              this.seq=det.seq;
              this.totalproducts=det.products;
              this.totalmodules=det.modules;
              console.log(this.totalproducts,this.totalmodules,'result');
              this.spinner.hide();
          });

          this.listAdd();*/
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
    this.enquiry={
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
      CustomerComments:'',
      CallerComments:'',
      Statu:0,
      ProductCode:'',
      reference:'',
      validity:new Date()
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
    this.enquiry={
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
      CustomerComments:obj.customerComments,
      CallerComments:obj.callerComments,
      Statu:obj.statu,
      ProductCode:obj.productCode,
      reference:obj.reference,
      validity:obj.validity
    };
    this.selectProduct();
    this.open=true;
  }

  public selectProduct()
  {
    var det=this.totalproducts.filter(a => a.productCode == this.enquiry.ProductCode);
    if(det.length > 0)
    {
      this.product=det[0];
    }
    var modules=this.totalmodules.filter(a => a.productCode == this.enquiry.ProductCode);
    this.modules=[];
    for(var i=0;i<modules.length;i++)
    {
        this.modules.push(modules[i]);
    }
  }
public close()
{
  this.open=false;
}

private valCheck():boolean
{
  if(this.enquiry.Customer.trim()=='')
  {
    this.adm.showMessage('Customer not entered','Warning',3);
    return false;
  }
  if(this.enquiry.Mobile.trim()=='')
  {
    this.adm.showMessage('Mobile not entered','Warning',3);
    return false;
  }
  if(this.enquiry.ProductCode.trim()=='')
  {
    this.adm.showMessage('Product Code not selected','Warning',3);
    return false;
  }
  if(this.enquiry.CustomerComments.trim()=='')
  {
    this.adm.showMessage('Customer Comments not entered','Warning',3);
    return false;
  }
  if(this.enquiry.CallerComments.trim()=='')
  {
    this.adm.showMessage('Caller Comments not entered','Warning',3);
    return false;
  }
  return true;
}
  public save()
  {
    if(this.valCheck())
    {
      return;
    Swal.fire({  
      title:  this.recordId==0?'Confirms Enquiry Details':'Modifies Enquiry Details' ,  
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
          this.prism.setPrismEnquiry(this.enquiry).subscribe(res =>
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
            this.enquiry.RecordId=this.recordId;
            this.prism.putPrismEnquiry(this.enquiry).subscribe(res =>
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
              });
          }



  }

});
    }
  }
private deleteCheck():boolean
{
  if(this.enquiry.statu > 0)
  {
    this.adm.showMessage('This enquiry crossed further stage deletion is not possible','Warning',3);
    return false;
  }
  return true;
}
  public delete()
  {
    if(this.deleteCheck())
    {
    Swal.fire({  
      title:  'Deletes Enquiry Details'  ,  
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
         
            this.enquiry.RecordId=this.recordId;
            this.prism.deletePrismEnquiry(this.recordId).subscribe(res =>
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
              });
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
      this.prism.getPrismEnquiries(this.adm.stringData(this.fromdate),this.adm.stringData(this.todate)).subscribe(res =>
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
