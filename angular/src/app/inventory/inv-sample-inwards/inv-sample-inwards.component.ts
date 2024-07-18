import { destroyPlatform } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbDatepickerI18n, NgbCalendar, NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { InvPurchaseOrderService } from 'app/services/inventory/inv-purchase-order.service';
import { PurchasesService } from 'app/services/purchases/purchases.service';
import { date } from 'ngx-custom-validators/src/app/date/validator';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-inv-sample-inwards',
  templateUrl: './inv-sample-inwards.component.html',
  styleUrls: ['./inv-sample-inwards.component.scss']
})
export class InvSampleInwardsComponent implements OnInit {
  public totalunits:any;
  public units:any;
  public unit:number=-1;
  public materials:any;
  public suppliers:any;
  public countries:any;
  public title:string='';
  public baseAmt:number=0;
  public discount:number=0;
  public taxesAmt:number=0;
  public otherAmt:number=0;
  public totalAmt:number=0;
  public advance:number=0;
  public balance:number=0;
  public taxes:any;
  public country:number=-1;
  now:Date= new Date();
  public closeResult:string='';
  public recordId:number=0;
  public supdetail:any={
    recordId:0,
    partyName:'',
    addr:'',
    country:-1,
    stat:'',
    district:'',
    city:'',
    zip:'',
    mobile:'',
    tel:'',
    fax:'',
    email:'',
    webid:''
  };
  public material:any={
    recordid: null,
    itemname: '',
    grpname:  '',
  um:'',
  qty:null,
  costingtype:-1,
  shelflife:0,
  };
  public pendingorders:any;
  public purchasetypes:any;
  public sets:any[]=[];
  
  public qcEnable:boolean=true;
  public qcTest:boolean=false;
  public invEnable:boolean=true;
  public invCheck:boolean=true;
  public qcchk:boolean=true;
  public tradat:any={year: this.now.getFullYear(), month: this.now.getMonth() + 1, day: this.now.getDate()};
  public listdat:any={year: this.now.getFullYear(), month: this.now.getMonth() + 1, day: this.now.getDate()};
  
  public purchases:any;
  
  public stores:any;
  public storeid:number=-1;
  public invoiceno:string='';
  public header:any={
    Seq:'',
    Dat:new Date(),
    Invoiceno:'',
    Invoicedat:new Date(),
    Transporter:'',
    PurchaseType:'',
    RefPoid:-1,
    Vendorid:-1,
    Vendorname:'',
    Addr:'',
    Country:'',
    Stat:'',
    District:'',
    City:'',
    Zip:'',
    Mobile:'',
    Tel:'',
    Fax:'',
    Email:'',
    Webid:'',
    Baseamt:0,
    Discount:0,
    Taxes:0,
    Others:0,
    TotalAmt:0,
    Pos:1,
    Settlemode:0,
    qcCheck:0
  };
  public refOrd:number=-1;
  public ordvalidity:string='';
  public ordsupplier:string='';
  public opened:boolean=false;
  
  public currsymbol:string='';
  public currconversion:number=1;
  public batchno:string='';
  public manudate:Date=new Date();
  public expdate:Date=new Date();
  public qty:number;
  public rat:number;
  public selectedItems:any[]=[];
  
    constructor(private pur:PurchasesService, private puo:InvPurchaseOrderService,
      private modalService: NgbModal,private adm:AdminGeneralInfoService, private spinner: NgxSpinnerService,) { 
        this.spinner.show(undefined,
          {
            type: 'ball-triangle-path',
            size: 'medium',
            bdColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            fullScreen: true
          });
      this.pur.getPurchasesRequirements().subscribe(res =>
        {
          var det:any=res;
           this.materials=det.materials;
           this.stores=det.stores;
           if(this.stores)
           {
             if(this.stores.length > 0)
             {
               this.storeid=this.stores[0].recordId;
             }
           }
          this.suppliers=det.suppliers;
          this.pendingorders=det.orders;
          this.purchasetypes=det.purchasetypes;
          this.header.Seq=det.seq;
          this.countries=det.countries;
          this.header.Dat=new Date(det.dat);
          this.now==new Date(det.dat);
          this.totalunits=det.units;
          this.taxes=det.taxes;
  this.tradat={year: this.now.getFullYear(), month: this.now.getMonth() + 1, day: this.now.getDate()};
  this.listdat={year: this.now.getFullYear(), month: this.now.getMonth() + 1, day: this.now.getDate()};
  for(var i=0;i<this.countries.length;i++)
  {
    if(this.countries[i].statu==2)
    {
      this.supdetail.country=+this.countries[i].recordId;
      this.currsymbol=this.countries[i].currSymbol;
      this.currconversion=+this.countries[i].conversionFactor;
    }
  }
          for(var i=0;i<det.sets;i++)
          {
            switch(det.sets[i].setupCode)
            {
              case 'pur_qcc':
                break;
              case 'pur_inv':
                break;
            }
          }
        });
        this.spinner.hide();
    }
    public findCountryInfo()
    {
      var det=this.countries.filter(a => a.recordId == +this.supdetail.country);
      if(det.length > 0)
      {
        this.currsymbol=det[0].currSymbol;
        this.currconversion=+det[0].conversionFactor;
      }
      
    }
    public makeUnits()
  {
    this.units=this.totalunits.filter(a => a.matid == this.material.recordid);
     console.log('units',this.totalunits,this.material,this.units);
   if(this.units)
   {
     if(this.units.length > 0)
     {
       this.unit=this.units[0].umid;
     }
   }
  }
  
  public parseDate(dateString: string): Date {
    if (dateString) {
        return new Date(dateString);
    }
    return null;
  }
  public makeOrderDetails()
  {
    var det:any=this.pendingorders.filter(a => a.recordId==this.refOrd);
    if(det)
    {
      if(det.length > 0)
      {
        this.ordvalidity=this.adm.stringData(new Date(det[0].validity));
        this.ordsupplier=det[0].vendorname;
      }
    }
  }
    ngOnInit(): void {
    }
    public openNew()
    {
      this.makeCle();
      this.opened=true;
    }
    private valCheckSmall():boolean
    {
  
  
  if(this.material.itemname.trim()=='')
  {
    this.adm.showMessage('Material not selected','Warning',3);
    return false;
  }
  if(+this.material.costingtype==4 && this.batchno.trim()=='')
  {
    this.adm.showMessage('Batch not selected','Warning',3);
    return false;
  }
  if(this.qty)
  {
    if(+this.qty <= 0)
    {
      this.adm.showMessage('Qty not selected','Warning',3);
      return false;
    }
  }
  else
  {
    this.adm.showMessage('Qty not selected','Warning',3);
      return false;
  }
  
  if(+this.unit < 0)
  {
    this.adm.showMessage('Unit not selected','Warning',3);
    return false;
  }
      return true;
    }
  public addStock()
  {
   
    if(this.valCheckSmall())
    {
        this.selectedItems.push({
            materialid:this.material.recordid,
            itemname:this.material.itemname,
            batchno:this.batchno,
            manudate:this.adm.stringData(this.manudate),
            expdate:this.material.shelflife?this.adm.stringData(this.expdate):null,
            qty:this.qty,
            umid:this.unit,
            um:this.findum(),
            rate:this.rat,
            valu:+this.qty * (+this.rat)
        });
        this.material={
    recordid: null,
    itemname: '',
    grpname:  '',
  um:'',
  qty:null,
  costingtype:-1,
  shelflife:0,
  
  };  
  this.batchno='';
  this.manudate=new Date();
  this.expdate=new Date();
  this.qty=null;
  this.units=[];
  this.rat=null;
  this.unit=-1;
  this.itemsCalculation();
    }
  }
  
  delStock(obj:any)
  {
    var index=this.selectedItems.indexOf(obj);
    if(index >= 0)
    {
      this.selectedItems.splice(index,1);
      this.itemsCalculation();
    }
  }
  public itemsCalculation()
  {
  
    this.baseAmt=0;
    for(var i=0;i<this.selectedItems.length;i++)
    {
      this.selectedItems[i].valu =this.selectedItems[i].qty * this.selectedItems[i].rate 
      this.baseAmt=this.baseAmt + (+this.selectedItems[i].valu);
    }
  
    this.makeCalculations();
  }
  public makeCalculations()
  {
    this.totalAmt=this.baseAmt-this.discount+this.otherAmt+this.taxesAmt;
    this.balance=this.totalAmt-this.advance;
  }
  public makeTaxes()
  {
    debugger
    this.taxesAmt=0;
    for(var i=0;i<this.taxes.length;i++)
    {
      if(this.taxes[i].taxvalue)
      {
      this.taxesAmt=this.taxesAmt+this.taxes[i].taxvalue;
      }
    }
  
    this.makeCalculations();
  
  }
  
  private findum()
  {
    var det=this.totalunits.filter(a => a.umid== +this.unit);
    if(det.length > 0)
    {
      return det[0].um;
    }
    else
    {
      return '';
    }
  }
    public openOld(obj:any)
    {
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
        this.pur.getPurchase(obj.recordId).subscribe(res =>
          {
            var det:any=res;
            console.log('Detail',det);
            
  
            if(det.result=='OK')
            {
              this.recordId=det.header.recordId;
              this.qcchk=+det.header.qcCheck==1?true:false;
            this.supdetail={
              recordId:det.header.vendorid,
              partyName:det.header.vendorname,
              addr:det.header.addr,
             
              stat:det.header.stat,
              district:det.header.district,
              city:det.header.city,
              zip:det.header.zip,
              mobile:det.header.mobile,
              tel:det.header.tel,
              fax:det.header.fax,
              email:det.header.email,
              webid:det.header.webid
            };
            this.selectedItems=[];
            for(var i=0;i<det.linedetails.length;i++)
            {
              this.unit=det.linedetails[i].um;
              this.selectedItems.push({
                materialid:det.linedetails[i].itemId,
                itemname:det.linedetails[i].itemName,
                batchno:det.linedetails[i].batchno,
                manudate:det.linedetails[i].manudate?new Date(det.linedetails[i].manudate):null,
                expdate:det.linedetails[i].expdate?new Date(det.linedetails[i].expdate):null,
                qty:det.linedetails[i].qty,
                umid:det.linedetails[i].umid,
                um:det.linedetails[i].um,
                rate:det.linedetails[i].rat,
                valu:+det.linedetails[i].qty * (+det.linedetails[i].rat)
            });
            }
  
            for(var i=0;i<this.taxes.length;i++)
            {
              for(var j=0;j<det.taxes.length;j++)
              {
                if(this.taxes[i].taxCode==det.taxes[j].taxcode && this.taxes[i].taxper==det.taxes[j].taxper)
                {
                  this.taxes[i].taxvalue=det.taxes[j].taxvalue;
                }
              }
            }
  
  
            this.discount=det.header.discount;
            this.taxesAmt=0;
            this.totalAmt=0;
            this.advance=0;
           
              this.itemsCalculation();
              console.log('details',det);
            this.makeCalculations();
            this.opened=true;
          }
          else
          {
            this.adm.showMessage(det.result,'Warning',3);
          }
  
            this.spinner.hide();
  
          });
    }
    public close()
    {
      this.opened=false;
    }
    public makeCle()
    {
      this.recordId=0;
        this.supdetail={
          recordId:0,
          partyName:'',
          addr:'',
          country:-1,
          stat:'',
          district:'',
          city:'',
          zip:'',
          mobile:'',
          tel:'',
          fax:'',
          email:'',
          webid:''
        };
        this.selectedItems=[];
        for(var i=0;i<this.taxes.length;i++)
        {
          this.taxes[i].taxvalue=0;
        }
        this.itemsCalculation();
    }
  public showOrder()
  {
    if(this.refOrd >= 1)
    {
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
        this.puo.GetInvPurchaseOrder(+this.refOrd).subscribe(res => 
          {
              var det:any=res;
  
  
              this.supdetail={
                recordId:det.header.vendorid,
                partyName:det.header.vendorname,
                addr:det.header.addr,
               
                stat:det.header.stat,
                district:det.header.district,
                city:det.header.city,
                zip:det.header.zip,
                mobile:det.header.mobile,
                tel:det.header.tel,
                fax:det.header.fax,
                email:det.header.email,
                webid:det.header.webid
              };
              this.selectedItems=[];
              for(var i=0;i<det.lines.length;i++)
              {
                this.unit=det.lines[i].um;
                this.selectedItems.push({
                  materialid:det.lines[i].itemId,
                  itemname:det.lines[i].itemName,
                  batchno:'',
                  manudate:null,
                  expdate:null,
                  qty:det.lines[i].qty,
                  umid:det.lines[i].um,
                  um:this.findum(),
                  rate:det.lines[i].rat,
                  valu:+det.lines[i].qty * (+det.lines[i].rat)
              });
              }
              for(var i=0;i<this.taxes.length;i++)
            {
              for(var j=0;j<det.taxes.length;j++)
              {
                if(this.taxes[i].taxCode==det.taxes[j].taxcode && this.taxes[i].taxper==det.taxes[j].taxper)
                {
                  this.taxes[i].taxvalue=det.taxes[j].taxvalue;
                }
              }
            }
  
              this.discount=0;
              this.taxesAmt=0;
              this.totalAmt=0;
              this.advance=0;
              for(var i=0;i<det.advances.length;i++)
              {
                this.advance=this.advance + (det.advances[i].amt);
              }
                this.itemsCalculation();
               // this.makeTaxes();
              console.log('details',det);
              this.spinner.hide();
          });
    }
    else
    {
      this.makeCle();
    }
  }
   // Open default modal
   open(content,x) {
  
    if(x==1)
    {
      this.title="Terms";
    }
    else
    {
      this.title="Taxes"
    }
     this.modalService.open(content).result.then((result) => {
         this.closeResult = `Closed with: ${result}`;
     }, (reason) => {
         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
     });
   
   
   }
   private getDismissReason(reason: any): string {
     if (reason === ModalDismissReasons.ESC) {
         return 'by pressing ESC';
     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
         return 'by clicking on a backdrop';
     } else {
         return `with: ${reason}`;
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
    var dat1=this.adm.strDate(this.listdat);
    var dat2=dat1;
    this.pur.getPurchases(dat1).subscribe(res =>
      {
          this.purchases=res;
           console.log(res);
           this.spinner.hide();
      });
  }
  
  private valChk():boolean
  {
    if(this.supdetail.partyName.trim()=='')
    {
      this.adm.showMessage('Supplier details not mentioned','Warning',3);
      return false;
    }
    if(this.selectedItems.length <= 0)
    {
      this.adm.showMessage('Item details not mentioned','Warning',3);
      return false;
    }
    return true;
  }
  
  savePurchase()
  {
    if(this.valChk())
    {
  
  
      Swal.fire({  
        title: 'Confirms Inwards Details',  
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
  
           
            this.header={
               Dat:new Date(),
              Invoiceno:this.invoiceno,
              Invoicedat:new Date(),
              Transporter:'',
              PurchaseType:'General',
              RefPoid:+this.refOrd >0 ? +this.refOrd:null ,
              Vendorid:+this.supdetail.recordId,
              Vendorname:this.supdetail.partyName,
              Addr:this.supdetail.addr,
              Country:null,
              Stat:this.supdetail.stat,
              District:this.supdetail.district,
              City:this.supdetail.city,
              Zip:this.supdetail.zip,
              Mobile:this.supdetail.mobile,
              Tel:this.supdetail.tel,
              Fax:this.supdetail.fax,
              Email:this.supdetail.email,
              Webid:this.supdetail.webid,
              Baseamt:+this.baseAmt,
              Discount:+this.discount,
              Taxes:+this.taxesAmt,
              Others:+this.otherAmt,
              TotalAmt:+this.totalAmt,
              Pos:1,
              Settlemode:0,
              qcCheck:0,
              currencySymbol:this.currsymbol,
              currencyConversion:this.currconversion?+this.currconversion:1
            };
  
            if(this.recordId > 0)
            {
              this.header.RecordId=this.recordId;
            }
            
            var lines:any[]=[];
            for(var i=0;i<this.selectedItems.length;i++)
            {
              lines.push({
                Store:+this.storeid,
                ItemId:+this.selectedItems[i].materialid,
                ItemName:this.selectedItems[i].itemname,
                Batchno:this.selectedItems[i].batchno,
                Manudate:null,
                Expdate:null,
                Qty:+this.selectedItems[i].qty,
                Um:+this.selectedItems[i].umid,
                Rat:+this.selectedItems[i].rate,
                BranchId:this.selectedItems[i].um,
                Mrp:this.findConversion(+this.selectedItems[i].materialid,+this.selectedItems[i].umid)
              });
             
            }
  
            var taxes:any[]=[];
            for(var i=0;i<this.taxes.length;i++)
            {
              if(+this.taxes[i].taxvalue > 0)
              {
                taxes.push({
                  Taxcode:this.taxes[i].taxCode,
                  Taxper:+this.taxes[i].taxPer,
                  Taxvalue:+this.taxes[i].taxvalue,
                });
                
  
              }
            }
  
            this.pur.setPurchase(this.header,lines,taxes,this.recordId==0?1:2).subscribe(res =>
              {
                var det:any=res;
                this.spinner.hide();
                if(det.result=='OK')
                {
                  this.makeCle();
                  Swal.fire(  
                    'Transaction Completed Successfully!',  
                    'Your Purchase saved.',  
                    'success'  
  
                  )  ;
                }
                else
                {
                  Swal.fire(  
                    det.result,  
                    'Some error in transaction',  
                    'error'  
                  ) ;
                }
              });
  
  
  
        }
      
    }) ;
  
  
  
    }
  
  }
  private findConversion(matid:number,um:number):number
  {
      var det=this.totalunits.filter(a => a.matid==matid && a.umid==um);
      if(det)
      { 
          if(det.length > 0)
          {
              return +det[0].conversion;
          }
          else
          {
            return 1;
          }
      }
      else
      {
        return 1;
      }
  }
  
    }
   