import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { AccAccountGroupsService } from 'app/services/accounts/acc-account-groups.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-acc-account-groups',
  templateUrl: './acc-account-groups.component.html',
  styleUrls: ['./acc-account-groups.component.scss']
})
export class AccAccountGroupsComponent implements OnInit {

  
  public pageno:number=1;
  public PAGESIZE:number=15;
  public totalpages:number=1;
  page4=1;

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
  constructor(private agrp:AccAccountGroupsService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   ) {
if(this.adm.screenCheck(1,1,1,0))
{
  this.delCheck=this.adm.screenCheck(1,1,1,3);
  this.authCheck=true;
  this.pageno=1;
    this.listAdd();
 //   this.treeAdd();
}
else
{
//
this.authCheck=false;
this.router.navigateByUrl('accounts/accunauthorize');
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
    this.creCheck=this.adm.screenCheck(1,1,1,2);
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
       this.agrp.setAccountGroup(obj,tracheck).subscribe(
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
           this.agrp.setAccountGroup(obj,tracheck).subscribe(
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
  this.pageno=1;
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
  
  this.agrp.getAccountGroups().subscribe(
    async res => {
      this.totalgrps=res;
      this.grps=this.totalgrps;
       
      this.searchItems();
     this.treeAdd();
     this.loadPage(1);
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
  
  this.agrp.getAccountGroupsTreeWise().subscribe(
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
public searchGrp()
{
  this.pageno=1;
  this.searchItems();
}
public searchItems()
{ 
  var grp:any;
  if(this.searchtext.trim()=='')
  {
      grp=this.totalgrps;
  }
  else
  {
    grp=this.totalgrps.filter(a => a.sGrp.toUpperCase().includes(this.searchtext.toUpperCase()));
  }
  this.totalpages=grp.length/this.PAGESIZE*10;
  this.grps=[];
  
  var start=(this.pageno-1)*this.PAGESIZE;
  var end=start+this.PAGESIZE-1;
   for(var i=start;i<=end;i++ )
  {
    if(i==grp.length)
    {
      return;
    }
    else{
    this.grps.push(grp[i]);
    }
  }
  //  this.grps=this.totalgrps.filter(a => a.sGrp.toUpperCase().includes(this.searchtext.toUpperCase()));
}
loadPage(event)
{
  if(event)
  {
  this.pageno=event;
  this.page4=event;
  }
  else
  {
    this.pageno=1;
    this.page4=1;
  }
  console.log('Event',event);
    this.searchItems();
}
}
