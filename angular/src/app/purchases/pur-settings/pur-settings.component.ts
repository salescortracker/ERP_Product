import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartyDetailsService } from 'app/services/accounts/party-details.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { PurSettingsService } from 'app/services/purchases/pur-settings.service';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-pur-settings',
  templateUrl: './pur-settings.component.html',
  styleUrls: ['./pur-settings.component.scss']
})
export class PurSettingsComponent implements OnInit {
public qctype:number=-1;
public searchtype:number=-1;
public details:any[]=[
  {
            SetupCode:'pur_qct',
            descr:'QC Type',
            SetupDescription:'1 for Default not required, 2 for Default required, 3 for strictly not required, 4 for strictly required',
            SetupValue:-1,
            options:[
              {
                code:-1,
                descr:'--Select--'
              },
              {
              code:1,
              descr:'Default not required'
            },
            {
              code:2,
              descr:'Default required'
            },
            {
              code:3,
              descr:'Strinctly not required'
            }
            ,
            {
              code:4,
              descr:'Strinctly required'
            }
          ]
  },
  {
    SetupCode:'pur_req',
    SetupDescription:'1 for not required, 2 for required',
    descr:'Request Approval',
    SetupValue:-1,
    options:[
      {
        code:-1,
        descr:'--Select--'
      },
      {
      code:1,
      descr:'Not required'
    },
    {
      code:2,
      descr:'Required'
    } 
  ]
},
{
  SetupCode:'pur_enq',
  SetupDescription:'1 for not required, 2 for required',
  descr:'Enquiry Approval',
  SetupValue:-1,
  options:[
    {
      code:-1,
      descr:'--Select--'
    },
    {
    code:1,
    descr:'Not required'
  },
  {
    code:2,
    descr:'Required'
  } 
]
},
{
  SetupCode:'pur_quo',
  SetupDescription:'1 for not required, 2 for required',
  descr:'Quotation Approval',
  SetupValue:-1,
  options:[
    {
      code:-1,
      descr:'--Select--'
    },
    {
    code:1,
    descr:'Not required'
  },
  {
    code:2,
    descr:'Required'
  } 
]
},
{
  SetupCode:'pur_ord',
  SetupDescription:'1 for not required, 2 for required',
  descr:'Order Approval',
  SetupValue:-1,
  options:[
    {
      code:-1,
      descr:'--Select--'
    },
    {
    code:1,
    descr:'Not required'
  },
  {
    code:2,
    descr:'Required'
  } 
]
},
/*{
  SetupCode:'pur_pur',
  SetupDescription:'1 for not required, 2 for required',
  descr:'MIR Approval',
  SetupValue:-1,
  options:[
    {
      code:-1,
      descr:'--Select--'
    },
    {
    code:1,
    descr:'Not required'
  },
  {
    code:2,
    descr:'Required'
  } 
]
},
{
  SetupCode:'pur_prt',
  SetupDescription:'1 for not required, 2 for required',
  descr:'Purchase Return Approval',
  SetupValue:-1,
  options:[
    {
      code:-1,
      descr:'--Select--'
    },
    {
    code:1,
    descr:'Not required'
  },
  {
    code:2,
    descr:'Required'
  } 
]
},*/

];
  constructor(private pur:PurSettingsService, private router:Router, private spinner: NgxSpinnerService,private adm:AdminGeneralInfoService) { 
    if(this.adm.screenCheck(2,8,3,0))
    {
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
     this.pur.getPurSettings().subscribe(res =>
      {
        var det:any=res;
        for (var i=0;i<det.length;i++)
        {
          /* switch(det[i].setupCode)
           {
             case "pur_qct":
               this.qctype= +det[i].setupValue;
               break;
              case "pur_sea":
                this.searchtype= +det[i].setupValue;
                break;
           }*/

           var info=this.details.filter(a => a.SetupCode==det[i].setupCode);
           if(info.length > 0)
           {
             info[0].SetupValue=det[i].setupValue;
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
          for(var i=0;i<this.details.length;i++)

{          sets.push({
            SetupCode:this.details[i].SetupCode,
            SetupDescription:this.details[i].SetupDescription,
            SetupValue:this.details[i].SetupValue.toString()
          });
        }
        console.log('total sets',sets);
          this.pur.setPurSettings(sets).subscribe(res =>
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
