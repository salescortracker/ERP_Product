import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { PpcMastersService } from 'app/services/production/ppc-masters.service';
import { PpcTransactionsService } from 'app/services/production/ppc-transactions.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-ppc-mass-planning',
  templateUrl: './ppc-mass-planning.component.html',
  styleUrls: ['./ppc-mass-planning.component.scss']
})
export class PpcMassPlanningComponent implements OnInit {

  public fromdate:Date= new Date();
  public todate:Date=new Date();

public products:any;
public product:any={
  recordId:0,
  itemId:0,
  itemname:'',
  grpname:'',
  um:'',
  umid:0
};
public qty:number=0;
public pendings:any;
public showCheck:number=0;
public massestimationslist:any[]=[];
public estimatedItems:any;
  constructor(private adm:AdminGeneralInfoService,private router:Router,
    private  spinner: NgxSpinnerService,private ppc:PpcTransactionsService) { 
      if(this.adm.screenCheck(10,2,1,0))
      {
        this.requirementsAdd();
      }
      else
      {
        this.router.navigateByUrl('production/unauthorize');
      }
    }

    
    public requirementsAdd()
    {
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
        this.ppc.getPPCMassPlanningRequirements().subscribe(res =>
          {
            this.products=res;
            this.spinner.hide();
          });
          this.spinner.show(undefined,
            {
              type: 'ball-triangle-path',
              size: 'medium',
              bdColor: 'rgba(0, 0, 0, 0.8)',
              color: '#fff',
              fullScreen: true
            });
            this.ppc.getPendingSaleOrdersTobePlanned().subscribe(res =>
              {
                this.pendings=res;
                this.spinner.hide();
              });
    }

    public showEstimations()
    {
      if(this.massestimationslist.length > 0)
      {
      this.showCheck=1;
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
        this.ppc.getItemsRequireedForMassPlanning(this.massestimationslist).subscribe(res =>
          {
            this.estimatedItems=res;
            this.spinner.hide();
          });
        }
        else
        {
          this.adm.showMessage('Selecte Items to be Planned','Warning',3);
        }
    }
    public showClose()
    {
      this.showCheck=0;
    }
    private valAddItemCheck():boolean
    {
      if(this.product.itemname.trim()=='')
      {
        this.adm.showMessage('Product not selected','Warning',3);
        return false;
      }
      if(this.qty <= 0)
      {
        this.adm.showMessage('Qty not entereed','Warning',3);
        return false;
      }
      var det=this.massestimationslist.filter(a => a.itemname==this.product.itemname);
      if(det.length > 0)
      {
        this.adm.showMessage('This Product is already added','Warning',3);
        return false;
      }
      return true;
    }
    public addItem()
    {
        if(this.valAddItemCheck())
        {
          this.massestimationslist.push({
            ItemId:this.product.recordId,
            itemname:this.product.itemname,
            grpname:this.product.grpname,
            Qty: +this.qty,
            Um:this.product.umid,
            uom:this.product.um
          });

          this.product={
            recordId:0,
            itemId:0,
            itemname:'',
            grpname:'',
            um:'',
            umid:0
          };
          this.qty=0;
        }
    }
    deleteItem(obj:any)
    {
      var index=this.massestimationslist.indexOf(obj);
      if(index >=0)
      {
        this.massestimationslist.splice(index,1);
      }
    }


  ngOnInit(): void {
  }

  save()
  {
    if(this.massestimationslist.length > 0)
    {
      Swal.fire({  
        title:  'Confirms Planning Details' ,  
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
    
      var header:any={
        FromDate:new Date(this.adm.stringData(this.fromdate)),
        ToDate:new Date(this.adm.stringData(this.todate)),
      };
      var lines:any[]=[];
      
      for(var i=0;i<this.massestimationslist.length;i++)
      {
        lines.push({
          ItemId:this.massestimationslist[i].ItemId,
          Qty:this.massestimationslist[i].Qty,
          Um:this.massestimationslist[i].Um
        });
      }
      this.ppc.setPPCMassPlanning(header,lines).subscribe(res =>
        {
          var det:any=res;
          if(det.result=='OK')
          {
            Swal.fire(  
              'Transaction Completed Successfully!',  
              'Planning Details saved.',  
              'success'  
            );
          }
          else
          {
            
Swal.fire(  
  det.result,  
  'Error in transaction.',  
  'error'  
);

          }


          this.spinner.hide();
        });


    }
  });
  

    }
    else
        {
          this.adm.showMessage('Selecte Items to be Planned','Warning',3);
        }

  }


  parseDate(dateString: string): Date {
    if (dateString) {
        return new Date(dateString);
    }
    return null;
  }


}
