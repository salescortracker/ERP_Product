import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { InvUMService } from 'app/services/inventory/inv-um.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { PurPurchaseTypesService } from 'app/services/purchases/pur-purchase-types.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { PurPurchaseRequestService } from 'app/services/purchases/pur-purchase-request.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-pur-purchase-requests',
  templateUrl: './pur-purchase-requests.component.html',
  styleUrls: ['./pur-purchase-requests.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PurPurchaseRequestsComponent implements OnInit {
  public creCheck:Boolean=false;
  public delCheck:Boolean=false;
  public delVisible:Boolean=false;
  public dateCheck:Boolean=false;
public authCheck:Boolean=false;
  public saveStr:string='';
 
  public recordID:number=0;

  public seq:string='';
  public header:any={
    Seq:'',
    Dat:new Date(),
    Descriptio:'',
    department:0,
    empno:0
  }

  public empno:number;
  public employee:any={
    empid:0,
    empno:'',
    designation:'',
    department:'',
    empname:''
  };
  public employees:any[]=[];

  public departments:any[]=[];
  public department:number=0;
  public maindept:string='';
  public listdate:Date=new Date();

  public materials:any[]=[];
  public material:any={
    itemid:null,
    itemname:'',
    grpname:'',
    stock:null,
    um:''
  };
  public totalMaterialUnits:any[]=[];
  public selectdMaterialUnits:any[]=[];

  public suppliers:any[]=[];
  public supplier:any={
    supid:null,
    supplier:'',
    partygroup:''
  }
public qty:number=0;
public umid:number=0;
public reqdby:Date = new Date();
public purpose:string='';

  public treeObj:any;
  public requests:any;

public totalItems:any[]=[];
public maingrp:string='xx';
public subgrp:string='';
public maingrpid:number=0;

public modeltype:number=0;
public totalrequirements:any;
  public opened:boolean=false;
  public grps:any;
  public totalgrps:any;
  public searchtext:string='';
  constructor(private adm:AdminGeneralInfoService,private pur:PurPurchaseRequestService,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   ) {
if(this.adm.screenCheck(2,2,1,0))
{
  this.dateCheck=this.adm.screenCheck(2,2,1,4);
  this.authCheck=true;
  this.delCheck=this.adm.screenCheck(2,2,1,3);
    this.listAdd();
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
      this.pur.getPurchaseRequestRequirements().subscribe(res =>
        {
            var det:any=res;
             console.log('requirements',det);
            this.totalrequirements=det;
            this.header.Seq=det.seq;
            this.header.Dat=new Date(det.dat);
            this.listdate=new Date(det.dat);
            this.totalMaterialUnits=det.materialunits;
            this.employees=[];
            this.departments=[];
            this.materials=[];
            this.suppliers=[];

            for(var i=0;i<det.employees.length;i++)
            {
              this.employees.push({
                empid:det.employees[i].empid,
                empno:det.employees[i].empno,
                designation:det.employees[i].designation,
                department:det.employees[i].department,
                empname:det.employees[i].empname
              });
            }
            for(var i=0;i<det.departments.length;i++)
            {
              this.departments.push({
                  deptid:det.departments[i].deptid,
                  deptname:det.departments[i].deptname,
                  area:det.departments[i].area,
              });
            }
             for(var i=0;i<det.materials.length;i++)
            {
              this.materials.push({
                itemid:det.materials[i].itemid,
                itemname:det.materials[i].itemname,
                grpname:det.materials[i].grpname,
                stock:det.materials[i].stock,
                um:det.materials[i].um
              });
            }
            for(var i=0;i<det.suppliers.length;i++)
            {
              this.suppliers.push({
                supid:det.suppliers[i].recordid,
                supplier:det.suppliers[i].supplier,
                partygroup:det.suppliers[i].partygroup
              })
            } 
            this.spinner.hide();
        });
    
}
else
{
  this.router.navigateByUrl('purchases/purunauthorize');
}
 
   }

  ngOnInit(): void {
   // this.listAdd();
  }


  openNew()
  {
    this.makeCle();
    this.creCheck=this.adm.screenCheck(2,2,1,1);
    this.saveStr='Save';
    this.opened=true;
    this.delVisible=false;
  }
  private makeCle()
  {
    this.delVisible=false;
    this.recordID=0;
    this.makeCleSmall();

    this.employee={
      empid:0,
      empno:'',
      designation:'',
      department:'',
      empname:''
    };
  
  this.department=0;
  this.totalItems=[];
  }

  openOld(obj:any)
  {
    if(obj.statu <=2)
    {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });

    this.pur.getPurchaseRequest(obj.recordid).subscribe(res =>
      {
          var det:any=res;
          console.log(det);
          this.recordID=det.header.recordId;
          this.header={
            Seq:det.header.seq,
            Dat:new Date(det.header.dat),
            Descriptio:'',
            department:+det.header.department,
            empno:+det.header.empno
          }
          this.empno= +det.header.empno;
          this.department=+det.header.department;
          this.findDepartment();
          var emp=this.employees.filter(a => a.empid==+det.header.empno);
          this.employee={
            empid:0,
            empno:'',
            designation:'',
            department:'',
            empname:''
          };
          if(emp.length > 0)
          {
            this.employee={
              empid:emp[0].empid,
              empno:emp[0].empno,
              designation:emp[0].designation,
              department:emp[0].department,
              empname:emp[0].empname
            };

          }

          this.totalItems=[];
          for(var i=0;i<det.lines.length;i++)
          {
          this.totalItems.push({
            itemid:det.lines[i].itemId,
            itemname:det.lines[i].itemName,
            supid:det.lines[i].suggestSupplier,
            supplier:this.findSupplier(det.lines[i].suggestSupplier),
            qty:+det.lines[i].qty,
            umid:+det.lines[i].umid,
            um:det.lines[i].um,
            reqdby:this.adm.stringData(new Date(det.lines[i].requiredBy)),
            purpose:det.lines[i].purpose
        });
      }

          this.spinner.hide();
      });
      this.creCheck=this.adm.screenCheck(2,3,1,2);
      this.saveStr="Modify";
      this.opened=true;
      this.delVisible=true;
    }
    else
    {
        this.adm.showMessage('This request is moved to further process modification/deletion is not possible','Warning',3);
    }
   
  }
  private findSupplier(rec:number)
  {
    debugger
      var det=this.suppliers.filter(a => a.supid==rec);
      var supplier='';
      if(det.length > 0)
      {
          supplier=det[0].supplier;
      }
      return supplier;
  }
valChk():Boolean
{
  if(!this.employee.empid)
  {
    this.adm.showMessage('Employee not selected','Warning',3);
    return false;
  }
  if(+this.department <= 0)
  {
    this.adm.showMessage('Department not selected','Warning',3);
    return false;
  }
  if(this.totalItems.length <= 0)
  {
    this.adm.showMessage('Materials are not selected','Warning',3);
    return false;
  }


  return true;
}
public delete()
{
  

  Swal.fire({  
    title:  'Deletes Purchase Request Details',  
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

        this.header.department=+this.department;
        this.header.empno=+this.employee.empid;

        var lines=[];
 
        for(var i=0;i<this.totalItems.length;i++)
        {
           lines.push({
             Dat:this.header.Dat,
             ItemId:+this.totalItems[i].itemid,
             ItemDescription:this.totalItems[i].itemname,
             Purpose:this.totalItems[i].purpose,
             SuggestedSupplier:+this.totalItems[i].supid,
             Qty:+this.totalItems[i].qty,
             ApprovedQty:0,
             Um:+this.totalItems[i].umid,
             ReqdBy:new Date(this.totalItems[i].reqdby),
             department:+this.department
           });
        }
        if(this.recordID > 0)
        {
          this.header.RecordId=this.recordID;
        }
       this.pur.setPurchaseRequest(this.header,lines, 3).subscribe(
          async res => {
            var result:any=res;
            if(result.result  =='OK')
{
   Swal.fire(  
            'Transaction Completed Successfully!',  
            'Purchase Request Details deleted.',  
            'success'  
          )  ;

          if(this.recordID==0)
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
    )  
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
        title:  this.recordID==0?'Confirms Purchase Request Details':'Modifies Purchase Request Details',  
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

            this.header.department=+this.department;
            this.header.empno=+this.employee.empid;
    
            var lines=[];
     
            for(var i=0;i<this.totalItems.length;i++)
            {
               lines.push({
                 Dat:this.header.Dat,
                 ItemId:+this.totalItems[i].itemid,
                 ItemDescription:this.totalItems[i].itemname,
                 Purpose:this.totalItems[i].purpose,
                 SuggestedSupplier:+this.totalItems[i].supid,
                 Qty:+this.totalItems[i].qty,
                 ApprovedQty:0,
                 Um:+this.totalItems[i].umid,
                 ReqdBy:new Date(this.totalItems[i].reqdby),
                 department:+this.department
               });
            }
            
            var tracheck=this.recordID==0?1:2;
          
            if(this.recordID > 0)
            {
              this.header.RecordId=this.recordID;
            }
            console.log(this.header,lines,tracheck);
           this.pur.setPurchaseRequest(this.header,lines, tracheck).subscribe(
              async res => {
                var result:any=res;
                if(result.result  =='OK')
    {
       Swal.fire(  
                'Transaction Completed Successfully!',  
                'Purchase Request Details saved.',  
                'success'  
              )  ;

              if(this.recordID==0)
            {
               this.opened=true;
               
              this.header.Seq=result.seq;
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
        )  
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

      this.pur.getPurchaseRequests(this.adm.stringData(this.listdate),this.adm.stringData(this.listdate)).subscribe(res =>
        {
            this.requests=res;
            this.spinner.hide();
        });
    
}

parseDate(dateString: string): Date {
  if (dateString) {
      return new Date(dateString);
  }
  return null;
}

public findDepartment()
{
  this.maindept='';
  var det=this.departments.filter(a => a.deptid == +this.department);
  if(det.length > 0)
  {
    this.maindept=det[0].area;
  }
}
public changeMaterial(e)
{
    this.selectdMaterialUnits=[];
    this.selectdMaterialUnits=this.totalMaterialUnits.filter(a => a.recordid==e);
    if(this.selectdMaterialUnits.length > 0)
    {
      this.umid=+this.selectdMaterialUnits[0].umid;
    }

    var det=this.materials.filter(a => a.itemid==e);
    if(det)
    {
      this.material={
        itemid:det[0].itemid,
        itemname:det[0].itemname,
        grpname:det[0].grpname,
        stock:det[0].stock,
        um:det[0].um
      }
    }
}
public changeSupplier(e)
{
  debugger
  var det=this.suppliers.filter(a => a.supid==e);
   
  if(det)
  {
    this.supplier={
      supid:det[0].supid,
      supplier:det[0].supplier,
      partygroup:det[0].partygroup
    };
  }
}

private valChkSmall():boolean
{
    if(this.material.itemid==null)
    {
      this.adm.showMessage('Material not selected','Warning',3);
      return false;
    }
    if(+this.qty <= 0)
    {
      this.adm.showMessage('Qty not mentioned','Warning',3);
      return false;
    }
    if(+this.umid <= 0)
    {
      this.adm.showMessage('Unit not selected','Warning',3);
      return false;
    }
    if(this.purpose.trim()=='')
    {
      this.adm.showMessage('Purpose not mentioned','Warning',3);
      return false;
    }

    return true;
}

public addItem()
{
    if(this.valChkSmall())
    {
      var ums=this.selectdMaterialUnits.filter(a => a.umid == +this.umid);
      var um='';
      if(ums.length > 0)
      {
        um=ums[0].um;
      }
      this.totalItems.push({
          itemid:this.material.itemid,
          itemname:this.material.itemname,
          supid:this.supplier?this.supplier.supid:null,
          supplier:this.supplier?this.supplier.supplier:'',
          qty:+this.qty,
          umid:this.umid,
          um:um,
          reqdby:this.adm.stringData(this.reqdby),
          purpose:this.purpose
      });

    this.makeCleSmall();
      document.getElementById('cmbmaterial').focus();
    }
}
private makeCleSmall()
{
  this.material={
    itemid:null,
    itemname:'',
    grpname:'',
    stock:null,
    um:''
  };
  this.supplier={
    supid:null,
    supplier:''
  }
  this.qty=0;
  this.selectdMaterialUnits=[];
  this.purpose='';
}

public deleteItem(obj:any)
{
  var index=this.totalItems.indexOf(obj);
  if(index >= 0)
  {
    this.totalItems.splice(index,1);
  }
}

public confirmPrint(obj:any)
{
  if(obj.printCount==0)
  {
    if(this.adm.screenCheck(2,2,1,7))
    {
      this.print(obj);
    }
    else
    {
      this.adm.showMessage('You are not authorised to print Voucher','Warning',3);
    }
  }
  else
  {
    if(this.adm.screenCheck(2,2,1,8))
    {
      Swal.fire({  
        title:  'This Request is already printed ' + obj.printCount + ' time(s) Do you want to reprint it' ,  
        text: 'You will not be able to recover this file!',  
        icon: 'warning',  
        showCancelButton: true,  
        confirmButtonText: 'Yes, confirm it!',  
        cancelButtonText: 'No, keep it'  
      }).then((result) => {  
        if (result.value) { 
          this.print(obj);


        }
      });

    }
    else
    {
      this.adm.showMessage('You are not authorised to reprint Request ','Warning',3);
    }
  }
}
public print(obj:any)
{
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
  this.pur.printPurchaseRequest(obj.recordid).subscribe(res =>
    {
      
var det:any=res;
if(det.filename != '') 
{
window.open( this.adm.getReportsURL() + det.filename,'_blank');
obj.printCount=obj.printCount+1;
}
 
this.spinner.hide();
    });
}

public findEmployee(e)
{
  console.log(e,this.employees);
  var det:any=this.employees.filter(a => a.empid == e);
  if(det)
  {
    this.employee={
      empid: +det[0].empid,
      empno:det[0].empno,
      designation:det[0].designation,
      department:det[0].department,
      empname:det[0].empname
    };
  }
}
 

openModal(customContent,x) {
  this.modeltype=x;
  let ngbModalOptions: NgbModalOptions = {
    backdrop : 'static',
    windowClass:'terms-modal',
    keyboard : false
};
this.modalService.open(customContent,  ngbModalOptions);
}

public getNewSupplier(data)
{ 
 
  if(data)
  {
    console.log(data);
    if(+data.recordId != 0)
    {
     
  this.suppliers.push({
    supid:data.recordId,
    supplier:data.supplier.PartyName,
    partygroup:data.partygroup
  });
}
}
}

public getNewMaterial(data)
{
    console.log(data,'MAterial new');
    var det:any=data;
    if(data)
    {
    this.materials.push({
      itemid:det.recordid,
      itemname:det.item.ItemName,
      grpname:det.itemgroup,
      stock:0,
      um:det.units[0].stdum
    });
    for(var i=0;i<det.units.length;i++)
    {
    this.totalMaterialUnits.push({
      recordid:det.recordid,
      sno:i,
      um:det.units[i].mainum,
      umid:+det.units[i].mainid,
    });
  }
  }
}

}
