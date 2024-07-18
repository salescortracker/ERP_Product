import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { CrmDiscountListService } from '../../services/crm/crm-discount-list.service';

@Component({
  selector: 'app-crm-discount-list',
  templateUrl: './crm-discount-list.component.html',
  styleUrls: ['./crm-discount-list.component.scss']
})
export class CrmDiscountListComponent implements OnInit {
  public discountlists:any;
  public discountdetails:any;
  public header:any={
    DiscountListName:'',
    EffectiveDate:new Date(),
    Pos:1,
  };
  public recordId:number=0;
  
  public opened:boolean=false;
    constructor(private crm:CrmDiscountListService,private adm:AdminGeneralInfoService,private router:Router, private  spinner:NgxSpinnerService) 
    {
      if(this.adm.screenCheck(7,1,2,0))
      {
      this.listAdd();
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
        this.crm.getDiscountListRequirements().subscribe(res =>
          {
              this.discountdetails=res;
          });
        }
        else
        {
          this.router.navigateByUrl('crm/crmunauthorize');
        }
     }
  
    ngOnInit(): void {
    }
  
  openNew()
  {
    this.makeCle();
    this.opened=true;
  }
  openOld(obj)
  {
   
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
    this.crm.getDiscountListInfo(obj.recordId).subscribe(res =>{
      var det:any=res;
       this.header={
        DiscountListName:det.header.discountListName,
      EffectiveDate:det.header.effectiveDate,
      Pos:det.header.pos,
       };
        this.recordId=obj.recordId;
      this.discountdetails=det.discountdetails;
      this.spinner.hide();
      this.opened=true;
    });
  }
  makeCle()
  {
    this.recordId=0;
      this.header={
        DiscountListName:'',
      EffectiveDate:new Date(),
      Pos:1,
     };
    for(var i=0;i<this.discountdetails.length;i++)
    {
      this.discountdetails[i].discount=0;
    }
  
  }
  makeReset()
  {
    this.recordId=0;
     this.header={
      DiscountListName:'',
      EffectiveDate:new Date(),
      Pos:1,
      MrpCheck:0
    };
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
        this.crm.getDiscountLists().subscribe(res =>
          {
              this.discountlists=res;
              this.spinner.hide();
          });
    }
  
    private valChk():boolean
    {
      if(this.header.DiscountListName.trim()=='')
      {
          this.adm.showMessage('Discount list not mentioned','Warning',3);
          return false;
      }
      return true;
    }
  
    public save()
    {
      if(this.valChk())
      {
      Swal.fire({  
        title:  this.recordId==0?'Confirms Discount Details':'Modifies Discount Details' ,  
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
            var lines:any[]=[];
            var tracheck:number=0;
            if(this.recordId > 0)
            {
              this.header.RecordId=this.recordId;
              tracheck=2;
            }
            else
            {
              tracheck=1;
            }
           
           
            this.header.Pos=+this.header.Pos;
            for(var i=0;i<this.discountdetails.length;i++)
            {
              lines.push({
                ProductId:+this.discountdetails[i].productid,
                Discount:+this.discountdetails[i].discount
              });
            }
            this.crm.setDiscountList(this.header,lines,tracheck).subscribe(res =>
              {
                var resu:any=res;
                if(resu.result=='OK')
                {
                  Swal.fire(  
                    'Transaction Completed Successfully!',  
                    'Price Details saved.',  
                    'success'  
                  );
                  this.listAdd();
                  this.close();
                }
                else
                {
                  Swal.fire(  
                    resu.result,  
                    'Error in transaction.',  
                    'error'  
                  );
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
    
  parseDate(dateString: string): Date {
    if (dateString) {
        return new Date(dateString);
    }
    return null;
  }
  }
  