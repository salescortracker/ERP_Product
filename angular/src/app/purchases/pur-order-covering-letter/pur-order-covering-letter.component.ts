import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartyDetailsService } from 'app/services/accounts/party-details.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { PurSettingsService } from 'app/services/purchases/pur-settings.service';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-pur-order-covering-letter',
  templateUrl: './pur-order-covering-letter.component.html',
  styleUrls: ['./pur-order-covering-letter.component.scss']
})
export class PurOrderCoveringLetterComponent implements OnInit {
  public typ:string='PUR_ORD';
  public letter:any={
    Typ:this.typ,
    Subjec:'',
    Body:'',
    Salutation:'',
    Img:''
  };
    constructor(private pur:PurSettingsService, private router:Router, private spinner: NgxSpinnerService,private adm:AdminGeneralInfoService) { 
      if(this.adm.screenCheck(2,8,6,0))
        {
          this.spinner.show(undefined,
            {
              type: 'ball-triangle-path',
              size: 'medium',
              bdColor: 'rgba(0, 0, 0, 0.8)',
              color: '#fff',
              fullScreen: true
            });
  
            this.pur.getPurCoveringLetterInfo(this.typ).subscribe(res =>
              {
                var det:any=res;
                if(det)
                {
                    this.letter.Subjec=det.subjec;
                    this.letter.Body=det.body;
                    this.letter.Salutation=det.salutation;
                    this.letter.Img=det.img;
                }
  
                this.spinner.hide();
              });
  
  
  
          }
          else
          {
            this.router.navigateByUrl('purchases/unauthorize');
          }
    
    }
  
    ngOnInit(): void {
    }
  
  save()
  {
    Swal.fire({  
      title:   'Reverts Setting Details',  
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
        
          this.pur.setPurCoveringLetterInfo(this.letter).subscribe(res =>
            {
                var det:any=res;
                if(det.result=='OK')
                {
                  Swal.fire(  
                    'Transaction Completed Successfully!',  
                    'Details saved',  
                    'success'  
                  )  ;
                }
                else
                {
                  Swal.fire(  
                    det.result,  
                    'Some error in transaction',  
                    'error'  
                  )  
                }
            });
  
  
  
  
      }
  
    });
  }
  
  }
  