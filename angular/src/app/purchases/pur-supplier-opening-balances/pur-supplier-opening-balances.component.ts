import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PartyDetailsService } from 'app/services/accounts/party-details.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { NgxSpinnerService } from "ngx-spinner";
 
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-pur-supplier-opening-balances',
  templateUrl: './pur-supplier-opening-balances.component.html',
  styleUrls: ['./pur-supplier-opening-balances.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PurSupplierOpeningBalancesComponent implements OnInit {
public parties:any[]=[];
public filterparties:any[]=[];
public searchtext:string='';
public authCheck:boolean=false;
  constructor(private par:PartyDetailsService,private modalService: NgbModal,private router:Router, private spinner: NgxSpinnerService,private adm:AdminGeneralInfoService) { 
   
    if(this.adm.screenCheck(2,1,3,0))
    {
      this.authCheck=true;
    this.par.GetPartyOpeningBalances('SUP').subscribe(res =>
      {
        var det:any=res;
        for (var i=0;i<det.length;i++)
        {
          this.parties.push({
            supplierid:det[i].partyId,
            suppliername:det[i].partyName,
            suppliergroup:det[i].descriptio,
            debit:det[i].pendingAmount>=0?0:Math.abs(det[i].pendingAmount),
            credit:det[i].pendingAmount >=0?det[i].pendingAmount:0
          });
          this.filterparties.push({
            supplierid:det[i].partyId,
            suppliername:det[i].partyName,
            suppliergroup:det[i].descriptio,
            debit:det[i].pendingAmount>=0?0:Math.abs(det[i].pendingAmount),
            credit:det[i].pendingAmount >=0?det[i].pendingAmount:0
          });
        }
     
         
      })
    }
    else
{
  this.router.navigateByUrl('purchases/unauthorize')
  this.authCheck=false;
}

  }

  public save()
  {


    Swal.fire({  
      title:   'Confirms Opening Balance Details',  
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
  

          var details:any[]=[];
          for(var i=0;i<this.parties.length;i++)
          {
            var cre=0;
            var deb=0;
            if(this.parties[i].debit > 0 || this.parties[i].credit > 0)
            {
              if(this.parties[i].credit)
              cre=this.parties[i].credit;
              else
              cre=0;
              if(this.parties[i].debit)
              deb=this.parties[i].debit;
              else
              deb=0;
      
                details.push({
                  TransactionType:'OPS',
                  PartyId:this.parties[i].supplierid,
                  PartyName:this.parties[i].suppliername,
                  TransactionAmt:cre-deb,
                  PendingAmount:cre-deb,
                  ReturnAmount:0,
                  CreditNote:0,
                  PaymentAmount:0,
                  Descriptio:'Opening Balance',
                });
            }
          }
          this.par.SetPartyOpeningBalances(details).subscribe(res =>
            {
      
            
  
         
         
         
           
              var result:any=res;
              if(result.result  =='OK')
  {
     Swal.fire(  
              'Transaction Completed Successfully!',  
              'Opening Balances saved.',  
              'success'  
            )  ;
 
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

  ngOnInit(): void {
  }

  openModal(customContent) {
    this.searchtext='';
    this.openSupplier();
    this.modalService.open(customContent, { windowClass: 'terms-modal'  });
  
  }
  searchSupplier()
  {
    this.filterparties=[];
      if(this.searchtext.trim()=='')
      {
        this.filterparties=  this.parties.filter(a => 1==1);
      }
      else
      {
          this.filterparties=this.parties.filter(a => a.suppliername.toUpperCase().includes(this.searchtext.toUpperCase()));
      }
  }
  openSupplier()
  {
    this.filterparties=[];
    for(var i=0;i<this.parties.length;i++)
    {
      this.filterparties.push({
        supplierid:this.parties[i].supplierid,
        suppliername:this.parties[i].suppliername,
        suppliergroup:this.parties[i].suppliergroup,
        debit:this.parties[i].debit,
        credit:this.parties[i].credit,
      });
    }
  }

assignSupplier()
{
  for(var i=0;i<this.filterparties.length;i++)
  {
    var det=this.parties.filter(a => a.supplierid==this.filterparties[i].supplierid);
    if(det)
    {
      if(det.length > 0)
      {
        det[0].debit=this.filterparties[i].debit;
        det[0].credit=this.filterparties[i].credit;
      }
    }
  }
  this.modalService.dismissAll();
}

  closeWindow()
  {
    this.modalService.dismissAll();
  }

}
