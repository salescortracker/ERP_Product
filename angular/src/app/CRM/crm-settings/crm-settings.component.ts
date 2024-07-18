import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { CrmTaxesService } from 'app/services/crm/crm-taxes.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-crm-settings',
  templateUrl: './crm-settings.component.html',
  styleUrls: ['./crm-settings.component.scss']
})
export class CrmSettingsComponent implements OnInit {
public target:number=-1;
public cycle:number=-1;
  constructor(private adm:AdminGeneralInfoService,private crm:CrmTaxesService,private router:Router, private spinner:NgxSpinnerService) { 
    if(this.adm.screenCheck(7,10,2,0))
    {
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
        this.crm.getCRMSettings().subscribe(res =>
          {
              var det:any=res;
              if(det)
              {
                for(var i=0;i<det.length;i++)
                {
                  switch(det[i].setupCode)
                  {
                    case 'crm_cyl':
                      this.cycle=+det[i].pos;
                      break;
                      case 'crm_brd':
                        this.target=+det[i].pos;
                        break;
                  }
                }
              }
              this.spinner.hide();
          });

      }
      else
      {
        this.router.navigateByUrl('crm/crmunauthorize');
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

          var lst:any[]=[];
          lst.push({
            SetupCode:'crm_cyl',
            SetupDescription:'To check cycle of target setting',
            Pos:this.cycle.toString(),
            PosDescription:'1 for Monthly 2 for Quartyerly 3 for half yearly and 4 for yearly'
          });
          lst.push({
            SetupCode:'crm_brd',
            SetupDescription:'To check Target Way',
            Pos:this.target.toString(),
            PosDescription:'1 for Product wise 2 for Category wise and 3 for Lumpsum'
          });
          this.crm.setCRMSettings(lst).subscribe(res =>
            {
                  var det:any=res;
                  if(det.result=='OK')
                  {
                       
        Swal.fire(  
          'Transaction Completed Successfully!',  
          'Settings Reverted successfully',  
          'success'  
        ) ;
 }
                  else
                  {
                    Swal.fire(  
                      det.result,  
                      'Error in transaction.',  
                      'error'  
                    )  ;
                  }
            });
        
  this.spinner.hide();
  }
  });
  }

}
