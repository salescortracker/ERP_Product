import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { InvStoresService } from 'app/services/inventory/inv-stores.service';
import { InvDepartmentsService } from 'app/services/inventory/inv-departments.service';
import { InvMastersService } from 'app/services/inventory/inv-masters.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-inv-departments',
  templateUrl: './inv-departments.component.html',
  styleUrls: ['./inv-departments.component.scss']
})
export class InvDepartmentsComponent implements OnInit {

  public creCheck:Boolean=false;
  public delCheck:Boolean=false;
  public delVisible:Boolean=false;
public authCheck:Boolean=false;
  public saveStr:string='';
  public deptname:string='';
  
  public pageno:number=1;
  public PAGESIZE:number=15;
  public totalpages:number=1;
  page4=1;

  public area:string='0';
  public areas:any[]=[
    
  ]
  public recordID:number=0;

  public opened:boolean=false;
  public departments:any=[];
  public totaldepartments:any=[];
  public searchtext:string='';
  constructor(private inv:InvMastersService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   ) {
if(this.adm.screenCheck(3,1,6,0))
{
  this.authCheck=true;
  this.delCheck=this.adm.screenCheck(3,1,6,3);
    this.listAdd();
    var pCode=this.adm.getUserCompleteInformation().usr.pCode;
    if(pCode=="D-MIN" || pCode=="O-MIN")
    {
    this.areas=[  {
        areacode:1,
        areaname:'Administration'
      },
      {
        areacode:2,
        areaname:'F & B Service'
      },
      {
        areacode:3,
        areaname:'Home'
      },
      {
        areacode:4,
        areaname:'Housekeeping'
      },
      {
        areacode:5,
        areaname:'Kitchen'
      },
      {
        areacode:6,
        areaname:'Maintenance'
      },
      {
        areacode:7,
        areaname:'Others'
      }];
    }
    else
    {
      this.areas=[  {
        areacode:1,
        areaname:'Administration'
      },
      {
        areacode:2,
        areaname:'Production'
      },
      {
        areacode:3,
        areaname:'Home'
      },
      {
        areacode:4,
        areaname:'Marketing'
      },
       
      {
        areacode:6,
        areaname:'Maintenance'
      },
      {
        areacode:7,
        areaname:'Others'
      }];
    }
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
    this.creCheck=this.adm.screenCheck(3,1,6,1);
    this.saveStr='Save';
    this.opened=true;
    this.delVisible=false;
  }
  private makeCle()
  {
    this.delVisible=false;
    this.recordID=0;
    this.deptname='';
    this.area='0';
  
   }

  openOld(obj:any)
  {
    this.deptname=obj.department;
    this.area=obj.area;
    this.recordID=obj.recordId;
    this.creCheck=this.adm.screenCheck(3,1,6,2);
    this.saveStr='Modify';
    this.opened=true;
    this.delVisible=true;
  }
valChk():Boolean
{
   if(this.deptname == '')
   {
     this.adm.showMessage('Department not entered','Warning',3);
     return false;
   }
   if(this.area == '0')
   {
     this.adm.showMessage('Area not selected','Warning',3);
     return false;
   }
  return true;
}
 
public saveDepartment()
{
  if(this.valChk())
  {
  Swal.fire({  
    title:  this.recordID==0?'Confirms Department Details':'Modifies Department Details',  
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

        var dept:any={
          RecordId:this.recordID,
          Department:this.deptname,
          Area:this.area
  
        };
        var tracheck=this.recordID==0?1:2;
        this.inv.setInvDepartment(dept,tracheck).subscribe(
          async res => {
            var resul:any=res;
              
                if(resul.result  =='OK')
    {
       Swal.fire(  
                'Transaction Completed Successfully!',  
                'Department Details saved.',  
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
public deleteDepartment()
{
  Swal.fire({  
    title:   'Deletes Department Details',  
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

        var dept:any={
          RecordId:this.recordID,
          Department:this.deptname,
          Area:this.area
  
        };
        var tracheck=3;
        this.inv.setInvDepartment(dept,tracheck).subscribe(
          async res => {
            var resul:any=res;
              
                if(resul.result  =='OK')
    {
       Swal.fire(  
                'Transaction Completed Successfully!',  
                'Department Details deleted.',  
                'success'  
              )  ;
  
              this.opened=false;
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

  close()
  {
    this.makeCle();
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
  
  this.inv.getInvDepartments().subscribe(
    async res => {
      this.totaldepartments=res;
      this.searchDetails();
    this.spinner.hide(); 
    });
    
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
}
public searchDetails()
{

  var depts:any;
  if(this.searchtext.trim()=='')
  {
      depts=this.totaldepartments;
  }
  else
  {
      depts=this.totaldepartments.filter(a => a.department.toUpperCase().includes(this.searchtext.toUpperCase()));
  }
  this.totalpages=depts.length/this.PAGESIZE*10;
   this.departments=[];
  var start=(this.pageno-1)*this.PAGESIZE;
  var end=start+this.PAGESIZE-1;
    for(var i=start;i<=end;i++)
  {
    if(i==depts.length)
    {
      return;
    }
    else
    {
    this.departments.push(depts[i]);
    }
  }


  //  this.grps=this.totalgrps.filter(a => a.sGrp.toUpperCase().includes(this.searchtext.toUpperCase()));
}
}
