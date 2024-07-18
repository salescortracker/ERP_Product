import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
 
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { InvMastersService } from 'app/services/inventory/inv-masters.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { isThisISOWeek } from 'date-fns';

@Component({
  selector: 'app-inv-item-groups',
  templateUrl: './inv-item-groups.component.html',
  styleUrls: ['./inv-item-groups.component.scss']
})
export class InvItemGroupsComponent implements OnInit {
  public creCheck:Boolean=false;
  public delCheck:Boolean=false;
  public delVisible:Boolean=false;
public authCheck:Boolean=false;
  public saveStr:string='';
 
  public recordID:number=0;

  public pageno:number=1;
  public PAGESIZE:number=15;
  public totalpages:number=1;
  page4=1;

  public treeObj:any;


public maingrp:string='xx';
public subgrp:string='';
public maingrpid:number=0;


  public opened:boolean=false;
  public grps:any;
  public totalgrps:any;
  public searchtext:string='';
  constructor(private igrp:InvMastersService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   ) {
if(this.adm.screenCheck(3,1,3,0))
{
  this.authCheck=true;
  this.delCheck=this.adm.screenCheck(3,1,3,3);
   this.listAdd();
    this.treeAdd();

}
else
{
  this.router.navigateByUrl('inventory/invunauthorize');
}
 
   }

  ngOnInit(): void {
   // this.listAdd();
  }


  openNew()
  {
    this.makeCle();
    this.creCheck=this.adm.screenCheck(3,1,3,1);
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
    this.creCheck=this.adm.screenCheck(3,1,3,2);
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
    title:   'Deletes Group Details',  
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
        this.igrp.setInventoryGroup(obj,tracheck).subscribe(
          async res => {
            var resul:any=res;
              
                if(resul.result  =='OK')
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
           
       }
        else
       {
      Swal.fire(  
          resul.result,  
          'Some error in transaction',  
          'error'  
        )  
      }
          
       
      this.spinner.hide();
      
          

  });
}}
);
}
public close()
{
  this.makeCle();
  this.opened=false;
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
          this.igrp.setInventoryGroup(obj,tracheck).subscribe(
            async res => {
              var resul:any=res;
                
                  if(resul.result  =='OK')
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
             
         }
          else
         {
        Swal.fire(  
            resul.result,  
            'Some error in transaction',  
            'error'  
          )  
        }
            
         
        this.spinner.hide();
        
            

    });
  }}
);
}
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
  
  this.igrp.getInvGroupsTreeWise().subscribe(
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
  this.pageno=1;
  this.searchDetails();
}
loadPage(event)
{
  this.pageno=event;
  this.searchDetails();
  this.page4=event;
}
public searchDetails()
{

  var grps:any;
  if(this.searchtext.trim()=='')
  {
      grps=this.totalgrps;
  }
  else
  {
      grps=this.totalgrps.filter(a => a.sGrp.toUpperCase().includes(this.searchtext.toUpperCase()));
  }
  this.totalpages=grps.length/this.PAGESIZE*10;
   this.grps=[];
  var start=(this.pageno-1)*this.PAGESIZE;
  var end=start+this.PAGESIZE-1;
    for(var i=start;i<=end;i++)
  {
    if(i==grps.length)
    {
      return;
    }
    else
    {
    this.grps.push(grps[i]);
    }
  }


  //  this.grps=this.totalgrps.filter(a => a.sGrp.toUpperCase().includes(this.searchtext.toUpperCase()));
}
listAdd()
{
  this.igrp.getInventoryGroups().subscribe(res =>
    {
this.totalgrps=res;
this.searchItems();
this.loadPage(1);
    });
}
}
