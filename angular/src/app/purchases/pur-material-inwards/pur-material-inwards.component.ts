import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { InvUMService } from 'app/services/inventory/inv-um.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { AccAccountGroupsService } from 'app/services/accounts/acc-account-groups.service';

@Component({
  selector: 'app-pur-material-inwards',
  templateUrl: './pur-material-inwards.component.html',
  styleUrls: ['./pur-material-inwards.component.scss']
})
export class PurMaterialInwardsComponent implements OnInit {
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
  constructor(private agrp:AccAccountGroupsService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   ) {
if(this.adm.screenCheck(1,1,1,0))
{
  this.delCheck=this.adm.screenCheck(1,1,1,3);
    this.listAdd();
    
}
else
{
this.router.navigateByUrl('pages/unAuthorize')
}
   }

  ngOnInit(): void {
   // this.listAdd();
  }


  openNew()
  {
    this.makeCle();
    this.creCheck=this.adm.screenCheck(1,1,1,1);
    this.saveStr='Save';
    this.opened=true;
  }
  private makeCle()
  {
    this.delVisible=false;
    this.recordID=0;
  
  }

  openOld(obj:any)
  {
    
   if(obj.chk > 0)
   {
     
    this.recordID=obj.recordId;
   
    this.subgrp=obj.sGrp;
    this.maingrp=obj.mGrp;
    
    this.delVisible=true;
    this.creCheck=this.adm.screenCheck(1,1,1,2);
    this.saveStr='Modify';
    this.opened=true;
    
   }
   else
   {
    this.toastr.error('Builtin groups can not be modified / deleted','Error');
   }
  }
valChk():Boolean
{
  
  return true;
}
public delete()
{
  

    this.spinner.hide();
}
  public save()
  {

 
  }

  close()
  {
    this.opened=false;
  }
listAdd()
{
  
    
}

}
