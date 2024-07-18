import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { InvUMService } from 'app/services/inventory/inv-um.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
 
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { PurSupplierGroupsService } from 'app/services/purchases/pur-supplier-groups.service';

@Component({
  selector: 'app-sal-customer-groups',
  templateUrl: './sal-customer-groups.component.html',
  styleUrls: ['./sal-customer-groups.component.scss']
})
export class SalCustomerGroupsComponent implements OnInit {
  public creCheck:Boolean=false;
  public delCheck:Boolean=false;
  public delVisible:Boolean=false;

  public saveStr:string='';
 
  public recordID:number=0;


  public treeObj:any;


public maingrp:string='xx';
public subgrp:string='';
public maingrpid:number=0;


  public opened:boolean=false;
  public grps:any;
  public totalgrps:any;
  public searchtext:string='';
  public authCheck:boolean=false;
  constructor(private sgrp:PurSupplierGroupsService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   ) {
if(this.adm.screenCheck(2,1,8,0))
{
  this.delCheck=this.adm.screenCheck(2,1,8,3);
  this.authCheck=true;
    this.listAdd();
 //   this.treeAdd();
}
else
{
//this.router.navigateByUrl('accounts/accunauthorize')
this.authCheck=false;
}
   }

  ngOnInit(): void {
   // this.listAdd();
  }


  openNew()
  {
    this.makeCle();
    this.creCheck=this.adm.screenCheck(2,1,8,1);
    this.saveStr='Save';
    this.opened=true;
  }
  private makeCle()
  {
    this.delVisible=false;
    this.recordID=0;
    this.maingrp='';
    this.subgrp='';
    this.maingrpid=0;
  }

  openOld(obj:any)
  {
    
   if(obj.chk > 0)
   {
     
    this.recordID=obj.recordId;
   
    this.subgrp=obj.sGrp;
    this.maingrp=obj.mGrp;
    
    this.delVisible=true;
    this.creCheck=this.adm.screenCheck(2,1,8,2);
    this.saveStr='Modify';
    this.opened=true;
    
   }
   else
   {
    this.toastr.warning('Builtin groups can not be modified / deleted','Warning');
   }
  }
valChk():Boolean
{
  if(this.subgrp.trim()=='')
  {
    this.toastr.warning('Sub Group not mentioned','Warning');
    return false;
  }
  if(this.maingrp.trim()=='')
  {
    this.toastr.warning('Main Group not selected','Warning');
    return false;
  }
  
  return true;
}
public delete()
{
  Swal.fire({  
    title:  'Deletes Group Details' ,  
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


        var obj:any={
          RecordId:this.recordID,
          MGrp:this.maingrp,
          SGrp:this.subgrp
  
        };
        var tracheck=3;
       this.sgrp.setSupplierGroup(obj,tracheck).subscribe(
          async res => {
            var result:any=res;
            if(result.result  =='OK')
{
   Swal.fire(  
            'Transaction Completed Successfully!',  
            'Group Details deleted.',  
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
        this.treeAdd();
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
        title:  this.recordID==0?'Confirms Group Details':'Modifies Group Details',  
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
    
    
            var obj:any={
              RecordId:this.recordID,
              MGrp:this.maingrp,
              SGrp:this.subgrp
      
            };
            var tracheck=this.recordID==0?1:2;
           this.sgrp.setSupplierGroup(obj,tracheck).subscribe(
              async res => {
                var result:any=res;
                if(result.result  =='OK')
    {
       Swal.fire(  
                'Transaction Completed Successfully!',  
                'Group Details saved.',  
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
            this.treeAdd();
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
  
  this.sgrp.getSupplierGroups().subscribe(
    async res => {
      this.totalgrps=res;
      this.grps=this.totalgrps;
      this.searchItems();
     this.treeAdd();
   // this.spinner.hide(); 
    });
    
}
treeAdd()
{
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
  
  this.sgrp.getSupplierGroupsTreeWise().subscribe(
    async res => {
      this.treeObj=res;
      
    this.spinner.hide(); 
    });
}
public toggleVisible(obj:any)
{
  obj.openCheck=!obj.openCheck;
}
public toggleVisiblePlus(obj:any)
{
  obj.openCheck=!obj.openCheck;
  
  this.maingrp=obj.subGroup;
  
}
public searchItems()
{
    this.grps=this.totalgrps.filter(a => a.sGrp.toUpperCase().includes(this.searchtext.toUpperCase()));
}
}
