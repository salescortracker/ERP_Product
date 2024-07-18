import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartyDetailsService } from 'app/services/accounts/party-details.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { NgxSpinnerService } from "ngx-spinner";
 
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-crm-opening-balances',
  templateUrl: './crm-opening-balances.component.html',
  styleUrls: ['./crm-opening-balances.component.scss']
})
export class CrmOpeningBalancesComponent implements OnInit {
  public parties:any[]=[];
  public authCheck:boolean=false;
    constructor(private par:PartyDetailsService,private router:Router, private spinner: NgxSpinnerService,private adm:AdminGeneralInfoService) { 
     
      if(this.adm.screenCheck(7,1,6,0))
      {
        this.authCheck=true;
      this.par.GetPartyOpeningBalances('CUS').subscribe(res =>
        {
          var det:any=res;
          for (var i=0;i<det.length;i++)
          {
            this.parties.push({
              supplierid:det[i].partyId,
              suppliername:det[i].partyName,
              suppliergroup:det[i].descriptio,
              debit:det[i].pendingAmount>=0?Math.abs(det[i].pendingAmount):0,
              credit:det[i].pendingAmount >=0?0:Math.abs(det[i].pendingAmount)
            });
          }
       
           
        })
      }
      else
  {
    this.router.navigateByUrl('crm/crmunauthorize');
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
                    TransactionType:'OPC',
                    PartyId:this.parties[i].supplierid,
                    PartyName:this.parties[i].suppliername,
                    TransactionAmt:deb-cre,
                    PendingAmount:deb-cre,
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
  
  }
  