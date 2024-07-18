import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { PosOutletsService } from 'app/services/pos/pos-outlets.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-posoutlets',
  templateUrl: './posoutlets.component.html',
  styleUrls: ['./posoutlets.component.scss']
})
export class PosoutletsComponent implements OnInit {
  public creCheck:Boolean=false;
  public delCheck:Boolean=false;
  public delVisible:Boolean=false;

  public saveStr:string='';
  
  public recordID:string="";

  public opened:boolean=false;

public outlets:any[];
public maxoutlets:number=0;

public billinggroups:any=[];


public totaloutlets:any[];
  public searchText:string='';
public outlet:any=
{
  RestaCode:'',
  RestaName:'Coff',
  Outlettype:"0",
  BillingGroup:0
};

  
  constructor(private olet:PosOutletsService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService) { if(this.adm.screenCheck(5,1,1,0))
      {
        this.delCheck=this.adm.screenCheck(5,1,3,3);
         this.listAdd();
      }
      else
      {
      this.router.navigateByUrl('pos/posunauthorize')
      }
         }
      
        ngOnInit(): void {
         // this.listAdd();
        }
        openNew()
        {
          this.makeCle();
          this.creCheck=this.adm.screenCheck(5,1,3,1);
          this.saveStr='Save';
          this.opened=true;
        }
        private makeCle()
        {
          this.delVisible=false;
          this.recordID="";
          
          this.outlet=
          {
            RestaName:'',
            Outlettype:0,
            BillingGroup:0
          };
        }
      
        openOld(obj:any)
        {
         
          this.recordID=obj.restaCode;
          this.delVisible=true;
          this.creCheck=this.adm.screenCheck(5,1,3,2);
          this.saveStr='Modify';
          this.opened=true;

         this.outlet=
          {
            RestaCode:obj.restaCode,
            RestaName:obj.restaName,
            Outlettype:obj.outlettype,
            BillingGroup:obj.billingGroup
          };

        }
      valChk():Boolean
      {
        if(this.outlet.RestaName.trim()=='')
        {
          this.toastr.warning('Outlet not mentioned','Warning');
          return false;
        }
        if(this.outlet.Outlettype=="0")
        {
          this.toastr.warning('Outlet type not selected','Warning');
          return false;
        }
        if(this.outlet.BillingGroup=="0")
        {
          this.toastr.warning('Billing group not selected','Warning');
          return false;
        }
        if(this.outlets.length >= this.maxoutlets)
        {
          this.toastr.error('Number of outlets reached to maximu limit','Error');
          return false;
        }
       
        return true;
      }

     
      public delete()
      {
        Swal.fire({  
      
          title:   'Deletes Outlet Details',  
          text: 'You will not be able to recover this file!',  
          icon: 'warning',  
          showCancelButton: true,  
          confirmButtonText: 'Yes, confirm it!',  
          cancelButtonText: 'No, keep it'  
        }).then((resul) => {  
          if (resul.value) { 
    this.spinner.show(undefined,
          {
            type: 'ball-triangle-path',
            size: 'medium',
            bdColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            fullScreen: true
          });
      
          
          var tracheck=3;
          this.outlet.RestaCode=this.recordID;
          this.olet.setOutlet(this.outlet,tracheck).subscribe(
            async res => {
              var result:any=res;
              this.spinner.show(undefined,
                {
                  type: 'ball-triangle-path',
                  size: 'medium',
                  bdColor: 'rgba(0, 0, 0, 0.8)',
                  color: '#fff',
                  fullScreen: true
                });
              if(result.result  =='OK')
              {
                Swal.fire(  
                  'Transaction Completed Successfully!',  
                  'Outlet Details deleted.',  
                  'success'  
                )  ;
                this.listAdd();
                this.makeCle();
                this.opened=false;
              }
              else
                {
                  Swal.fire(  
                    result.result,  
                    'Some error in transaction',  
                    'error'  
                  )  ;
                }
              });
      
      
          this.spinner.hide();
            }
          });
      }
        public save()
        {
          if(this.valChk())
          {

            Swal.fire({  
      
              title:  this.recordID.trim()==''?'Confirms Outlet Details':'Modifies Outlet Details',  
              text: 'You will not be able to recover this file!',  
              icon: 'warning',  
              showCancelButton: true,  
              confirmButtonText: 'Yes, confirm it!',  
              cancelButtonText: 'No, keep it'  
            }).then((resul) => {  
              if (resul.value) { 

          

           this.spinner.show(undefined,
            {
              type: 'ball-triangle-path',
              size: 'medium',
              bdColor: 'rgba(0, 0, 0, 0.8)',
              color: '#fff',
              fullScreen: true
            });
         
            this.outlet.RestaCode=this.recordID;
            this.outlet.BillingGroup=+this.outlet.BillingGroup;
            this.outlet.Outlettype=+this.outlet.Outlettype;
            var tracheck=this.recordID.trim()==''?1:2;
        this.olet.setOutlet(this.outlet,tracheck).subscribe(
              async res => {
                var result:any=res;
                
                if(result.result  =='OK')
                {
                  Swal.fire(  
                    'Transaction Completed Successfully!',  
                    'Outlet Details saved.',  
                    'success'  
                  )  ;
                  this.listAdd();
                  if(this.recordID=='')
                  {
                    this.makeCle();
                    this.opened=true;
                  }
                  else
                  {
                    this.makeCle();
                    this.opened=false;
                  }
                }
                else
                {
                  Swal.fire(  
                    result.result,  
                    'Error in transaction',  
                    'error'  
                  )  ;
                }
              });
              this.spinner.hide();
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
        
        this.olet.getOutlets().subscribe(
          async res => {
            var det:any=res;
            this.totaloutlets=det.outlets;
            this.outlets=this.totaloutlets;

            this.maxoutlets=det.maxoutlets;
          this.spinner.hide(); 
          });

          for(var i=1;i<=30;i++)
          {
            this.billinggroups.push({
              valu:i
            });
          }
     
         
      }

public searchDetails()
{
  this.outlets=this.totaloutlets.filter(a => a.restaName.toUpperCase().includes(this.searchText.toUpperCase()));
}


      }
      