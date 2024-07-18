import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { InvUMService } from 'app/services/inventory/inv-um.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
 import Swal from 'sweetalert2/dist/sweetalert2.js';
import { MaiEquipGroupsService } from 'app/services/maintenance/mai-equip-groups.service';
import { MaiEquipDetailsService } from 'app/services/maintenance/mai-equip-details.service';
import { PartyDetailsService } from 'app/services/accounts/party-details.service';

@Component({
  selector: 'app-mai-equip-details',
  templateUrl: './mai-equip-details.component.html',
  styleUrls: ['./mai-equip-details.component.scss']
})
export class MaiEquipDetailsComponent implements OnInit {
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

  public grptree:any;
  public maingrp:string='';
  public maingrpid:number=0;
public searchText:string='';
  public showequipment:any[]=[];
  public displayequipment:any[]=[];
  public equipment:any;
public suppliers:any;
  public msg:string='';
  public equip:any={
    EquipmentCode:'',
    EquipmentName:'',
    EquipmentGroup:-1,
    PreferableServiceSupplier:-1,
    PreferableSparesSupplier:-1,
    MobileCheck:1,
    Roomno:null,
    AmcDate:new Date(),
    LastPMDate:new Date(),
    MaxHrs:24
  };
  public specifications:any[]=[];
  public prevmaintenances:any[]=[];
 

public specification:string='';
public valu:string='';
public prevmaintenance:string='';
public freqdays:number=null;
public hrs:number[]=[];


  constructor(private equ:MaiEquipDetailsService,private igrp:MaiEquipGroupsService, private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService,private par:PartyDetailsService) {
       if(this.adm.screenCheck(9,1,2,0))
      {
        this.delCheck=this.adm.screenCheck(9,1,2,3);
        this.pageno=1;
        
          this.listAdd();
          this.treeAdd();
          this.getParties();
          for(var i=1;i<=24;i++)
          {
            this.hrs.push(i);
          }
      }
      else
      {
      this.router.navigateByUrl('maintenance/unauthorize');
      }
    }
    private getParties()
    {
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
      
      this.par.getPartyDetails('SUP').subscribe(res =>{
  this.suppliers=res;
  this.spinner.hide();
       });
    }


  ngOnInit(): void {
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
  makeCle()
  {
    this.equip={
      EquipmentCode:'',
      EquipmentName:'',
      EquipmentGroup:-1,
      PreferableServiceSupplier:-1,
      PreferableSparesSupplier:-1,
      MobileCheck:1,
      Roomno:null,
      AmcDate:new Date(),
      LastPMDate:new Date(),
      MaxHrs:24
    };
    this.recordID=0;
    this.specifications=[];
    this.prevmaintenances=[];
  }
  openNew()
  {
      this.makeCle();
      this.creCheck=this.adm.screenCheck(9,1,2,1);
      this.opened=true;
  }
  openOld(obj:any)
  {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
      this.recordID=obj.recordId;
      this.specifications=[];
      this.prevmaintenances=[];
      this.equ.getEquipmentDetail(this.recordID).subscribe(res =>
        {
            var det:any=res;
            var header=det.equip;
            if(header)
            {
            this.equip={
              EquipmentCode:header.EquipmentCode,
              EquipmentName:header.EquipmentName,
              EquipmentGroup:header.EquipmentGroup,
              PreferableServiceSupplier:header.PreferableServiceSupplier,
              PreferableSparesSupplier:header.PreferableSparesSupplier,
              MobileCheck:header.MobileCheck,
              Roomno:null,
              AmcDate:header.AmcDate,
              LastPMDate:header.LastPMDate,
              MaxHrs:header.MaxHrs
            };
            this.maingrp=header.BranchId;
            this.maingrpid=+header.EquipmentGroup
          }

            if(det.specifications)
            {
            for(var i=0;i<det.specifications.length;i++)
            {
this.specifications.push({
  Specification:det.specifications[i].Specification,
  Valu:det.specifications[i].Valu
});
            }
            

this.prevmaintenances=[];
if(det.prevmaintenances)
{
for(var i=0;i<det.prevmaintenances.length;i++)
{
  this.prevmaintenances.push({
    Prevmaintenance:det.prevmaintenances[i].Prevmaintenance,
    FrequencyInDays:det.prevmaintenances[i].FrequencyInDays,
  });
  
}
}
            }
            this.spinner.hide();

        });
        this.creCheck=this.adm.screenCheck(9,1,2,2);
        this.opened=true;
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
    
    this.equ.getEquipmentDetails().subscribe(
      async res => {
        this.equipment=res;
        this.loadPage(this.pageno);
        this.showequipment=this.equipment;
        this.searchEquipment();
      this.spinner.hide(); 
      });
     
  }
  public searchEquipment()
  {
    this.pageno=1;
    this.loadPage(this.pageno);
  }
public searchDetails()
{

if(this.searchText.trim()=='')
{
this.showequipment=this.equipment;
}
else
{
this.showequipment=this.equipment.filter(a => a.equipmentName.toUpperCase().includes(this.searchText.toUpperCase()));
}
this.totalpages=this.showequipment.length/this.PAGESIZE*10;

var start=(this.pageno-1)*this.PAGESIZE;
var end=start+this.PAGESIZE-1;
this.displayequipment=[];
for(var i=start;i<=end;i++)
{
if(i==this.showequipment.length)
{
  break;
}
else
{
this.displayequipment.push(this.showequipment[i]);
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
this.equip.EquipmentGroup=obj.recordId;
}

addSpecification()
{
  if(this.specification.trim()=='' || this.valu.trim() =='')
  {
    this.adm.showMessage('Insufficient Information','Warning',3);
  }
  else
  {
    this.specifications.push({
      Specification:this.specification,
      Valu:this.valu
    });
    this.specification='';
    this.valu='';

    document.getElementById('txtSpecification').focus();
  }

}
deleteSpecification(obj:any)
{
  var index=this.specifications.indexOf(obj);
  if(index >= 0)
  {
    this.specifications.splice(index,1);
  }
}

checkEquipmentCode()
{
  if(this.msg=='')
  {
    if(this.recordID==0)
    {

    }
  }
}

addPreventiveMaintenance()
{
  if(this.prevmaintenance.trim()=='' || this.freqdays <= 0)
  {
    this.adm.showMessage('Insufficient Information','Warning',3);
  }
  else
  {
    this.prevmaintenances.push({
      Prevmaintenance:this.prevmaintenance,
      FrequencyInDays: + this.freqdays,
    });
  }
  this.prevmaintenance='';
  this.freqdays=null;
  document.getElementById('txtPM').focus();
}
deletePreventiveMaintenance(obj:any)
{
  var index=this.prevmaintenances.indexOf(obj);
  if(index >= 0)
  {
    this.prevmaintenances.splice(index,1);
  }
}

private valChk():boolean
{
  if(this.equip.EquipmentCode.trim()=='')
  {
    this.adm.showMessage('Code not mentioned','Warning',3);
    return false;
  }
if(this.equip.EquipmentName.trim()=='')
{
  this.adm.showMessage('Name not mentioned','Warning',3);
  return false;
}
if(+this.equip.EquipmentGroup <= 0)
{
  this.adm.showMessage('Group not selected','Warning',3);
  return false;
}


  return true;
}

public save()
{
  if(this.valChk())
  {
    Swal.fire({  
      title: this.recordID==0? 'Confirms Equipment Details':'Modifies Equipment Details' ,  
      text: 'You will not be able to recover this file!',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Yes, confirm it!',  
      cancelButtonText: 'No, keep it'  
    }).then((result) => {  
      if (result.value) { 
        this.equip.EquipmentGroup=+this.equip.EquipmentGroup;
        this.equip.PreferableServiceSupplier= +this.equip.PreferableServiceSupplier <= 0?null:+this.equip.PreferableServiceSupplier;
        this.equip.PreferableSparesSupplier= +this.equip.PreferableSparesSupplier <= 0?null:+this.equip.PreferableSparesSupplier;
        this.equip.MobileCheck=+this.equip.MobileCheck;
        this.equip.MaxHrs=+this.equip.MaxHrs;
        this.spinner.show(undefined,
          {
            type: 'ball-triangle-path',
            size: 'medium',
            bdColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            fullScreen: true
          });
          if(this.recordID > 0)
          {
            this.equip.RecordId=this.recordID;
          }
        this.equ.setEquipmentDetail(this.equip,this.specifications,this.prevmaintenances,this.recordID==0?1:2).subscribe(res =>
          {
              var det:any=res;
              if(det.result=='OK')
              {
                Swal.fire(  
                  'Transaction Completed Successfully!',  
                  'Equipment Details saved.',  
                  'success'  
                );
                if(this.recordID > 0)
                {
                  this.close();
                }
                this.makeCle();
                this.listAdd();
               

              }
              else
              {
                Swal.fire(  
                  det.result,  
                  'Error in transaction.',  
                  'error'  
                );
              }

              this.spinner.hide();
          });
        
}
});

  }
    //console.log(this.equip,this.specifications,this.prevmaintenances);
}
public delete()
{
  Swal.fire({  
    title:  'Deletes Equipment Details'  ,  
    text: 'You will not be able to recover this file!',  
    icon: 'warning',  
    showCancelButton: true,  
    confirmButtonText: 'Yes, confirm it!',  
    cancelButtonText: 'No, keep it'  
  }).then((result) => {  
    if (result.value) { 
      this.equip.EquipmentGroup=+this.equip.EquipmentGroup;
      this.equip.PreferableServiceSupplier= +this.equip.PreferableServiceSupplier <= 0?null:+this.equip.PreferableServiceSupplier;
      this.equip.PreferableSparesSupplier= +this.equip.PreferableSparesSupplier <= 0?null:+this.equip.PreferableSparesSupplier;
      this.equip.MobileCheck=+this.equip.MobileCheck;
      this.equip.MaxHrs=+this.equip.MaxHrs;
      this.equip.RecordId=this.recordID;
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
      this.equ.setEquipmentDetail(this.equip,this.specifications,this.prevmaintenances,3).subscribe(res =>
        {
            var det:any=res;
            if(det.result=='OK')
            {
              Swal.fire(  
                'Transaction Completed Successfully!',  
                'Equipment Details deleted.',  
                'success'  
              );
                this.makeCle();
                this.listAdd();
                this.close();
            }
            else
            {
              Swal.fire(  
                det.result,  
                'Error in transaction.',  
                'error'  
              );
            }

            this.spinner.hide();
        });
      
}
});

}



public parseDate(dateString: string): Date {
  if (dateString) {
      return new Date(dateString);
  }
  return null;
}

}
