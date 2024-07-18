import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { InvDepartmentsService } from 'app/services/inventory/inv-departments.service';
import { PurPurchaseRequestService } from 'app/services/purchases/pur-purchase-request.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-pur-purchase-request-approvals',
  templateUrl: './pur-purchase-request-approvals.component.html',
  styleUrls: ['./pur-purchase-request-approvals.component.scss']
})
export class PurPurchaseRequestApprovalsComponent implements OnInit {
public totalItems:any[]=[];
public departments:any[]=[];
public department:number=0;
public area:string='';
public chk:boolean=false;
  constructor(private pur:PurPurchaseRequestService,private adm:AdminGeneralInfoService,private router:Router,
    private inv:InvDepartmentsService,private spinner:NgxSpinnerService) {
if(this.adm.screenCheck(2,2,1,98))
{
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
    this.inv.getInvDepartments().subscribe(res =>
      {
          var det:any=res;
          for(var i=0;i<det.length;i++)
          {
            this.departments.push({
              recordid:det[i].recordId,
              department:det[i].department,
              area:det[i].area
            });
          }
          this.spinner.hide();
      });
}
else
{
  this.router.navigateByUrl('purchases/purunauthorize');
}


   }

   makeDepartment()
   {
      var det=this.departments.filter(a => a.recordid == +this.department);
      if(det.length > 0)
      {
        this.area=det[0].area;
      }
      else
      {
        this.area='';
      }
   }
   
  ngOnInit(): void {
  }




  public getPurchaseRequests()
  {
      if(+this.department <= 0)
      {
        this.adm.showMessage('Select Department','Warning',3);
        return;
      }
      else
      {
        this.totalItems=[];
          this.pur.getPurchaseRequestDetailsForApproval(+this.department).subscribe(res =>
            {
                var det:any=res;
                for(var i=0;i<det.length;i++)
                {
                      this.totalItems.push({
                        RecordId:det[i].recordid,
                        empname:det[i].empname,
                        Sno:det[i].sno,
                        Dat:det[i].dat,
                        ItemId:det[i].itemid,
                        ItemDescription:det[i].itemdescription,
                        ApprovedUsr:det[i].supplier,
                        Qty:det[i].qty,
                        ApprovedQty:det[i].qty,
                        Um:det[i].um,
                        ReqdBy:det[i].reqdby,
                        Purpose:det[i].purpose,
                        Usr:det[i].usr,
                        chk:false
                      });
                }
               
            });
      }
  }

  public save()
  {
    Swal.fire({  
      title:  'Confimrs Approval Details' ,  
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
          var lines:any[]=[];
          for(var i=0;i<this.totalItems.length;i++)
          {
            if(this.totalItems[i].chk)
            {
            lines.push({
              RecordId:+this.totalItems[i].RecordId,
              Sno:+this.totalItems[i].Sno,
              ItemId:+this.totalItems[i].ItemId,
              ApprovedQty:+this.totalItems[i].ApprovedQty
            });
          }
            
          }
          console.log(this.totalItems);
          this.pur.setPurchaseRequestApproval(lines).subscribe(res =>
            {
                var resul:any=res;
                if(resul.result=='OK')
                {
                  Swal.fire(  
                    'Transaction Completed Successfully!',  
                    'Purchase Request Details approved.',  
                    'success'  
                  )  ;
                  this.totalItems=[];
                }
                else
                {
                  Swal.fire(  
                    resul.result,  
                    'Some error in transaction',  
                    'error'  
                  )  ;
                }
            this.spinner.hide();
            });
  
  }
  });
  }
  public makeTotalSelect()
  {
    for(var i=0;i<this.totalItems.length;i++)
    {
      this.totalItems[i].chk=this.chk;
    }
  }
}
