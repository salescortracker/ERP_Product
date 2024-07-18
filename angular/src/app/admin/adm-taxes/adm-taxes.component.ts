import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmCountriesService } from 'app/services/admin/adm-countries.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-adm-taxes',
  templateUrl: './adm-taxes.component.html',
  styleUrls: ['./adm-taxes.component.scss']
})
export class AdmTaxesComponent implements OnInit {

  public taxes:any;
  public creCheck:Boolean=false;
  
  public opened:Boolean=false;
  public saveStr:string='';
  public recordID:number=0;

  public tax:any={
    TaxCode:'',
    TaxPer:null,
 
  };

  constructor(private adm:AdminGeneralInfoService,private cnt:AdmCountriesService, private spinner: NgxSpinnerService,private router:Router
    ) { 

    if(this.adm.screenCheck(-1,-1,-1,-1))
    {
      this.listAdd();
    }
    else
    {
      this.router.navigateByUrl('admin/unauthorize');
    }

  }

  ngOnInit(): void {
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
    
    this.cnt.getTaxes().subscribe(res =>
      {
          this.taxes=res;
          console.log(this.taxes);
          this.spinner.hide();
      });
  }
  

  openNew()
  {
    this.makeCle();
    this.creCheck=this.adm.screenCheck(-1,-1,-2,-1);
    this.saveStr='Save';
    this.opened=true;
  }
  private makeCle()
  {
    this.tax.TaxCode='';
    this.tax.TaxPer=null;
    this.recordID=0;
  }
  close()
  {
    this.opened=false;
  }
  

  saveTax()
  {
    if(this.tax.TaxCode.trim() =='')
    {
      this.adm.showMessage('Tax Code not entered','Warnng',3);
      return;
    }
    if(!this.tax.TaxCode.trim())
    {
      this.adm.showMessage('Tax Code not entered','Warnng',3);
      return;
    }
    
    
    if(this.tax.TaxPer <= 0)
    {
      this.adm.showMessage('Tax % not entered','Warnng',3);
      return;
    }
   
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
    
    this.cnt.setTax(this.tax).subscribe(res =>
      {
        var result:any=res;
          if(result.result=="OK")
          {
                this.adm.showMessage('Tax details added successfully','Success',1);
                this.listAdd();
                this.makeCle();
                
          }
          else
          {
            this.adm.showMessage(result.result,'Error',4);
          }
          this.spinner.hide();
      });

  }

}
