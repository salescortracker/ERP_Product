import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { CrmTaxesService } from 'app/services/crm/crm-taxes.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-crm-tax-assigings',
  templateUrl: './crm-tax-assigings.component.html',
  styleUrls: ['./crm-tax-assigings.component.scss']
})
export class CrmTaxAssigingsComponent implements OnInit {

  public recordId:number=0;
  public saveStr:string='';
public taxes:any[]=[];
public taxesdetails:any[]=[];

public taxcode:string='';
public taxper:number=0;
public taxon:string='';

public taxesList:any;
  public header:any={
    TaxName:''
  };
public lines:any[]=[];

public opened:boolean=false;
  constructor(private adm:AdminGeneralInfoService,private crm:CrmTaxesService,private router:Router, private spinner:NgxSpinnerService) { 
    if(this.adm.screenCheck(7,10,1,0))
    {
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });

        this.crm.getTaxAssigningRequirements().subscribe(res =>
          {
              var det:any=res;
              console.log(det,'taxes');
              for(var i=0;i<det.taxes.length;i++)
              {
                this.taxes.push({
                  taxcode:det.taxes[i] 
                });
              }
              for(var i=0;i<det.taxdetails.length;i++)
              {
                this.taxesdetails.push({
                    taxcode:det.taxdetails[i].taxCode,
                    taxper:det.taxdetails[i].taxPer
                });
              }
              this.spinner.hide();
          });

          this.listAdd();
    }
    else
    {
      this.router.navigateByUrl('crm/crmunauthorize');
    }

  }

  public listAdd()
  {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
      this.crm.getListOfTaxAssignings().subscribe(res =>
        {
            this.taxesList=res;
            this.spinner.hide();
        });
  }

  ngOnInit(): void {
  }

  openNew()
  {
      this.makeCle();
      this.opened=true;
      this.saveStr='Save';
  }
  makeCle()
  {
    this.recordId=0;
    this.header={
      TaxName:''
    };
    this.lines=[];
  }
  openOld(obj:any)
  {
    this.recordId=obj.recordId;
    this.saveStr='Modify';
    this.recordId=obj.recordId;
    this.opened=true;
    this.lines=[];
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
    this.crm.getTaxCompleteDetail(obj.recordId).subscribe(res =>{
        var det:any=res;
        this.header=
        {
          RecordId:obj.recordId,
          TaxName:obj.taxName
        };
        for(var i=0;i<det.lines.length;i++)
        {
          this.lines.push({
            TaxCode:det.lines[i].taxCode,
            Taxper:+det.lines[i].taxPer,
            TaxOn:det.lines[i].taxOn
          });
        }
          this.spinner.hide();
    });
  }

private valChkSmall():boolean
{
  if(this.taxcode.trim()=='')
  {
    this.adm.showMessage('Tax Code not mentioned','Warning',3);
    return false;
  }
  if(+this.taxper <= 0)
  {
    this.adm.showMessage('Tax % not mentioned','Warning',3);
    return false;
  }
  if(this.taxon.trim()=='')
  {
    this.adm.showMessage('Tax on not mentioned','Warning',3);
    return false;
  }
  return true;
}
  addTax()
  {
    if(this.valChkSmall())
    {
    this.lines.push({
      TaxCode:this.taxcode,
      Taxper:+this.taxper,
      TaxOn:this.taxon
    });
  }
  }
  deleteTax(obj:any)
  {
    var index=this.lines.indexOf(obj);
    if(index >=0)
    {
      this.lines.splice(index,1);
    }
  }

  close()
  {
    this.opened=false;
  }
  private valChk():boolean
  {
    if(this.header.TaxName.trim()=='')
    {
      this.adm.showMessage('Tax Id not mentioned','Warning',3);
      return false;
    }
    if(this.lines.length <= 0)
    {
      this.adm.showMessage('Tax Details not mentioned','Warning',3);
      return false;
    }
    return true;
  }
  save()
  {
      if(this.valChk())
      {
        Swal.fire({  
          title:  this.recordId==0?'Creates Tax Assigning Details':'Modifies Tax Assigning Details' ,  
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
              this.crm.setTaxCompleteDetail(this.header,this.lines,this.recordId==0?1:2).subscribe(res =>
                {
                      var det:any=res;
                      if(det.result=='OK')
                      {
                           
            Swal.fire(  
              'Transaction Completed Successfully!',  
              'Taxes Added successfully',  
              'success'  
            ) ;
            this.makeCle();
              if(this.recordId > 0)
              {
                  this.opened=false;
              }
              this.listAdd();


                      }
                      else
                      {
                        Swal.fire(  
                          det.result,  
                          'Error in transaction.',  
                          'error'  
                        )  ;
                      }
                });
            
      
      }
      });
      }
  }
  delete()
  {
    Swal.fire({  
      title:   'Deletes Tax Assigning Details' ,  
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
          this.crm.setTaxCompleteDetail(this.header,this.lines,3).subscribe(res =>
            {
                  var det:any=res;
                  if(det.result=='OK')
                  {
                       
        Swal.fire(  
          'Transaction Completed Successfully!',  
          'Taxes Deleted successfully',  
          'success'  
        ) ;
        this.makeCle();
          
              this.opened=false;
          
          this.listAdd();
                  }
                  else
                  {
                    Swal.fire(  
                      det.result,  
                      'Error in transaction.',  
                      'error'  
                    )  ;
                  }
            });
        
  
  }
  });
  }

}
