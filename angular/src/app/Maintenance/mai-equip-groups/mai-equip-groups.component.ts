import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { InvUMService } from 'app/services/inventory/inv-um.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
 import Swal from 'sweetalert2/dist/sweetalert2.js';
import { MaiEquipGroupsService } from 'app/services/maintenance/mai-equip-groups.service';

@Component({
  selector: 'app-mai-equip-groups',
  templateUrl: './mai-equip-groups.component.html',
  styleUrls: ['./mai-equip-groups.component.scss']
})
export class MaiEquipGroupsComponent implements OnInit {
  public creCheck:Boolean=false;
  public delCheck:Boolean=false;
  public delVisible:Boolean=false;
  public pageno:number=1;
  public PAGESIZE:number=15;
  public totalpages:number=1;
  page4=1;

  public saveStr:string='';
  public recordID:number=0;
  public opened:boolean=false;

  public grps:any;
  public groups:any;
  public showgroups:any[]=[];
  public searchText:string='';
  public grptree:any;
  public maingrp:string='';
  public maingrpid:number=0;
  public subgrp:string='';
  public activecheck:number=1;
  public fileNames:any[]=[];
  public files:File[]=[];
  public fileobj:any;
  public fileReqObj:any;
  public NewfileReqObj:any[]=[];
filename: any = '';
fileevent: any;
  constructor(private igrp:MaiEquipGroupsService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService) {
       if(this.adm.screenCheck(9,1,1,0))
      {
        this.delCheck=this.adm.screenCheck(9,1,1,3);
        this.pageno=1;
          this.listAdd();
        //  this.treeAdd();
      }
      else
      {
      this.router.navigateByUrl('maintenance/unauthorize');
      }
         }
      
        ngOnInit(): void {
         // this.listAdd();
        }
      
      
        openNew()
        {
          this.makeCle();
          this.creCheck=this.adm.screenCheck(9,1,1,1);
          this.saveStr='Save';
          this.opened=true;
        }
        private makeCle()
        {
          this.delVisible=false;
          this.recordID=0;
          this.recordID=0;
          this.subgrp='';
          this.maingrp='';
          this.maingrpid=0;
        }
      
        openOld(obj:any)
        {
          /*this.uom=obj.um;

          this.recordID=obj.recordID;*/

          this.subgrp=obj.subGroup;
          this.maingrp=obj.mainGroup;
          this.recordID=obj.recordID;
          this.activecheck=obj.statu=='Active'?1:2;
          var det=this.grps.filter(a => a.subGroup == this.maingrp);
          
          if(det.length > 0)
          {
            this.maingrpid =det[0].recordID;
          }
          else
          {
            this.maingrpid=0;
          }


          this.delVisible=true;
          this.creCheck=this.adm.screenCheck(9,1,1,2);
          this.saveStr='Modify';
          this.opened=true;
        }
      valChk():Boolean
      {
        if(this.subgrp.trim()=='')
        {
          this.toastr.warning('Group not mentioned','Warning');
          return false;
        }
        if(this.maingrp.trim()=='')
        {
          this.toastr.warning('Main Group not mentioned','Warning');
          return false;
        }
       
        return true;
      }

      public treeAdd()
      {
        this.spinner.show(undefined,
          {
            type: 'ball-triangle-path',
            size: 'medium',
            bdColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            fullScreen: true
          });
        
        this.igrp.getEquipmentGroupTreeView().subscribe(
          async res => {
            this.grptree=res;
         
          this.spinner.hide(); 
          });
      }
      public delete()
      {
        var tracheck=3;
        Swal.fire({  
    
          title:  'Deletes Group Details',  
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
                MGrp:this.maingrpid,
                SGrp:this.subgrp
            };
          
         
            this.igrp.setEquipmentGroup(obj,tracheck).subscribe(
            async res => {
              var result:any=res;
               
                  if(result.result  =='OK')
      {
         Swal.fire(  
                  'Transaction Completed Successfully!',  
                  'Category Details deleted.',  
                  'success'  
                )  ;
    
                this.opened=false;
              this.makeCle();
              this.listAdd();
              
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
            var tracheck=this.recordID==0?1:2;
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
                  MGrp:this.maingrpid,
                  SGrp:this.subgrp,
                  GroupCode:'',
                  GrpTag:'EQU',
                  Statu:+this.activecheck
              };
            
           
              this.igrp.setEquipmentGroup(obj,tracheck).subscribe(
              async res => {
                var result:any=res;
                 
                    if(result.result  =='OK')
        {
           Swal.fire(  
                    'Transaction Completed Successfully!',  
                    'Category Details saved.',  
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
        
        this.igrp.getEquipmentGroups().subscribe(
          async res => {
            this.groups=res;
            this.loadPage(this.pageno);
            this.grps=this.groups;
            this.searchGroups();
          this.spinner.hide(); 
          });
         this.treeAdd();
      }
      public searchGroups()
      {
        this.pageno=1;
        this.loadPage(this.pageno);
      }
public searchDetails()
{
  
  if(this.searchText.trim()=='')
  {
    this.grps=this.groups;
  }
  else
  {
    this.grps=this.groups.filter(a => a.subGroup.toUpperCase().includes(this.searchText.toUpperCase()));
  }
  this.totalpages=this.grps.length/this.PAGESIZE*10;
   
  var start=(this.pageno-1)*this.PAGESIZE;
  var end=start+this.PAGESIZE-1;
  this.showgroups=[];
  for(var i=start;i<=end;i++)
  {
    if(i==this.grps.length)
    {
      break;
    }
    else
    {
    this.showgroups.push(this.grps[i]);
    }

  }
  for(var i=0;i<this.showgroups.length;i++)
  {
    if(this.showgroups[i].groupCode.trim()=='')
    {
      this.showgroups[i].image=this.adm.getActualURL() + 'Attachments\\pos\\' + 'no_name.jpg';
    }
    else
    {
      this.showgroups[i].image=this.adm.getActualURL() + 'Attachments\\pos\\' + this.showgroups[i].groupCode;
    }
  }
  }
loadPage(event)
{
  
  this.pageno=event;
  this.searchDetails();
}
public toggleVisible(obj:any)
{
  obj.openCheck=!obj.openCheck;
}
public toggleVisiblePlus(obj:any)
{
  obj.openCheck=!obj.openCheck;
  this.maingrp=obj.sGrp;
  this.maingrpid=obj.recordId;
}

}
      