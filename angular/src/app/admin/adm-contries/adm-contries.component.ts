import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmCountriesService } from 'app/services/admin/adm-countries.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-adm-contries',
  templateUrl: './adm-contries.component.html',
  styleUrls: ['./adm-contries.component.scss']
})
export class AdmContriesComponent implements OnInit {

  public countries:any;
  public creCheck:Boolean=false;
  
  public opened:Boolean=false;
  public saveStr:string='';
  public recordID:number=0;

  public country:any={
    RecordId:0,
    Cntname:'',
Curr:'',
coins:'',
CurrSymbol:'',
ConversionFactor:null,
Statu:1
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
    
    this.cnt.getAdmTotalCountries().subscribe(res =>
      {
          this.countries=res;
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
    if(this.recordID > 0)
    {
      this.opened=false;
    }
    this.country.RecordId=0;
    this.country.Cntname='';
                this.country.Curr='';
                this.country.CurrSymbol='';
                this.country.ConversionFactor=null;
                this.country.Statu=1;
                this.country.coins='';
    this.recordID=0;


  }
  close()
  {
    this.opened=false;
  }
  openOld(obj:any)
  {
  
    this.recordID=obj.recordId;
    this.creCheck=this.adm.screenCheck(-3,-1,-2,2);
    this.saveStr='Modify';
    this.opened=true;
this.country.RecordId=this.recordID;
    this.country.Cntname=obj.cntname;
    this.country.Curr=obj.curr;
    this.country.CurrSymbol=obj.currSymbol;
    this.country.ConversionFactor=obj.conversionFactor;
    this.country.coins=obj.coins;
    this.country.Statu=+obj.statu;
  }

  saveCountry()
  {
    if(this.country.Cntname.trim() =='')
    {
      this.adm.showMessage('Country name not entered','Warnng',3);
      return;
    }
    if(!this.country.Cntname.trim())
    {
      this.adm.showMessage('Country name not entered','Warnng',3);
      return;
    }
    if(this.country.Curr.trim() =='')
    {
      this.adm.showMessage('Currency not entered','Warnng',3);
      return;
    }
    if(!this.country.Curr.trim())
    {
      this.adm.showMessage('Currency not entered','Warnng',3);
      return;
    }
    if(this.country.coins.trim() =='')
    {
      this.adm.showMessage('Coins not entered','Warnng',3);
      return;
    }
    if(!this.country.coins.trim())
    {
      this.adm.showMessage('Coins not entered','Warnng',3);
      return;
    }
    if(this.country.CurrSymbol.trim() =='')
    {
      this.adm.showMessage('Currency symbol not entered','Warnng',3);
      return;
    }
    if(!this.country.CurrSymbol.trim())
    {
      this.adm.showMessage('Currency symbol not entered','Warnng',3);
      return;
    }
    if(this.country.ConversionFactor <= 0)
    {
      this.adm.showMessage('Currency symbol not entered','Warnng',3);
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
      this.country.Statu=+this.country.Statu;
    
    this.cnt.setAdmCountry(this.country,this.recordID ==0?1:2).subscribe(res =>
      {
        var result:any=res;
          if(result.result=="OK")
          {
                this.adm.showMessage('Country added/changed successfully','Success',1);
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
