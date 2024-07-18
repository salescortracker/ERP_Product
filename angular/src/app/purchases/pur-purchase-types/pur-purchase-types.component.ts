import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { InvUMService } from 'app/services/inventory/inv-um.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { PurPurchaseTypesService } from 'app/services/purchases/pur-purchase-types.service';


@Component({
  selector: 'app-pur-purchase-types',
  templateUrl: './pur-purchase-types.component.html',
  styleUrls: ['./pur-purchase-types.component.scss']
})
export class PurPurchaseTypesComponent implements OnInit {

  public creCheck:Boolean=true;
  public delCheck:Boolean=true;
  public delVisible:Boolean=true;
public authCheck:Boolean=false;
  public saveStr:string='';
  public nam:string='';
  public typ:string="1";
  public recordID:number=0;

  public opened:boolean=false;
  public types:any[];
  constructor(private inv:PurPurchaseTypesService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   ) {
if(this.adm.screenCheck(2,8,1,0))
{
  this.authCheck=true;
   
    this.listAdd();
}
else
{
  this.authCheck=false;
 
}
   }

  ngOnInit(): void {
   // this.listAdd();
  }


  openNew()
  {
    this.makeCle();
    this.saveStr='Save';
    this.opened=true;
  }
  private makeCle()
  {
    this.delVisible=false;
    this.recordID=0;
    this.typ='1';
    this.nam='';
  }

  openOld(obj:any)
  {
     this.recordID=1;
    this.nam=obj.purtype;
    this.typ=obj.importType;
    this.delVisible=true;
    this.saveStr='Modify';
    this.opened=true;
  }
valChk():Boolean
{
  if(this.nam.trim()=='')
  {
    this.toastr.warning('Purchase type not mentioned','Warning');
    return false;
  }
  return true;
}
public deleteUM()
{
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });

    var obj:any={
      Purtype:this.nam,
      ImportType:+this.typ
    };
    var tracheck=3;
    this.inv.setPurchaseType(obj,tracheck).subscribe(
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
          this.toastr.success('Type Deleted Successfully','Success');
          this.listAdd();
          this.makeCle();
          this.opened=false;
        }
        else
          {
              this.toastr.error(result.result,'Error');
          }
        });
    this.spinner.hide();
}
  public saveUM()
  {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
    if(this.valChk())
    {
    var obj:any={
      Purtype:this.nam,
      ImportType:+this.typ
    };
      
      var tracheck=this.recordID==0?1:2;
      this.inv.setPurchaseType(obj,tracheck).subscribe(
        async res => {
          var result:any=res;
          
          if(result.result  =='OK')
          {
            
            this.toastr.success('Transaction Completed Successfully','Success');
            this.listAdd();
            if(this.recordID==0)
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
              this.toastr.error(result.result,'Error');
          }
        });
    }
    this.spinner.hide();
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
  
  this.inv.getPurchaseTypes().subscribe(
    async res => {
      this.types=res;
     this.spinner.hide(); 
    });
}
}
