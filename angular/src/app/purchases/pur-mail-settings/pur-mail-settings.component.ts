import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartyDetailsService } from 'app/services/accounts/party-details.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { PurSettingsService } from 'app/services/purchases/pur-settings.service';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-pur-mail-settings',
  templateUrl: './pur-mail-settings.component.html',
  styleUrls: ['./pur-mail-settings.component.scss']
})
export class PurMailSettingsComponent implements OnInit {
   public frmmail:string='';
   public pwd:string='';
   public cc:string='';
   public mailserver:string='';
   public portnumber:string='';
   public img:string='';




    constructor(private pur:PurSettingsService, private router:Router, private spinner: NgxSpinnerService,private adm:AdminGeneralInfoService) { 
      if(this.adm.screenCheck(2,8,5,0))
      {
        this.spinner.show(undefined,
          {
            type: 'ball-triangle-path',
            size: 'medium',
            bdColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            fullScreen: true
          });
       this.pur.getPurMailSettings().subscribe(res =>
        {
          var det:any=res;
          for (var i=0;i<det.length;i++)
          {
             switch(det[i].setupCode)
             {
               case "ema_frm":
                 this.frmmail= det[i].setupValue;
                 break;
                case "ema_pwd":
                  this.pwd= det[i].setupValue;
                  break;
                  case "ema_cc":
                    this.cc= det[i].setupValue;
                    break;
                    case "ema_ser":
                      this.mailserver= det[i].setupValue;
                      break;
                      case "ema_por":
                        this.portnumber= det[i].setupValue;
                        break;
                        case "ema_pic":
                          this.img= det[i].setupValue;
                          break;
                        
             }
          }
       
           this.spinner.hide();
        })
      }
      else
  {
    this.router.navigateByUrl('purchases/unauthorize')
    
  }
    }
  
    ngOnInit(): void {
    }
  
    public save()
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
            var sets:any[]=[];
            sets.push({
              SetupCode:'ema_frm',
               SetupValue:this.frmmail
            });
            sets.push({
              SetupCode:'ema_pwd',
               SetupValue:this.pwd
            });
            sets.push({
              SetupCode:'ema_cc',
               SetupValue:this.cc
            });
            sets.push({
              SetupCode:'ema_ser',
               SetupValue:this.mailserver
            });
            sets.push({
              SetupCode:'ema_por',
               SetupValue:this.portnumber
            });
            sets.push({
              SetupCode:'ema_pic',
               SetupValue:this.img
            });
            this.pur.setPurMailSettings(sets).subscribe(res =>
              {
                  var det:any=res;
                  if(det.result=='OK')
                  {
                    Swal.fire(  
                      'Transaction Completed Successfully!',  
                      'Setup details saved',  
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
  