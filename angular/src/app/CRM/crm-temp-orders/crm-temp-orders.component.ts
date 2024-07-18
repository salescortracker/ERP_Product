import { Component, OnInit } from '@angular/core';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { CrmTempService } from 'app/services/crm/crm-temp.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-crm-temp-orders',
  templateUrl: './crm-temp-orders.component.html',
  styleUrls: ['./crm-temp-orders.component.scss']
})
export class CrmTempOrdersComponent implements OnInit {

  public listdat:any;
  public totaldet:any;
  public orders:any[]=[];
public detuni:any;
  constructor(private spinner: NgxSpinnerService,private adm:AdminGeneralInfoService,private crm:CrmTempService) { }

  ngOnInit(): void {
  }
  showDetails()
  {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
  
      this.crm.getDayWiseOrders(this.adm.strDate(this.listdat)).subscribe(res =>
        {
           
            this.totaldet=res;
            this.orders=this.totaldet.orders;
            this.detuni=this.totaldet.blanksinfo;

            for(var i=0;i<this.orders.length;i++)
            {
              this.orders[i].blaproduct=this.orders[i].product;
              this.orders[i].blasid=this.orders[i].sid;
              this.orders[i].blashade=this.orders[i].shade;
              this.orders[i].blaadd=this.orders[i].addiPower;
              this.orders[i].bladia=this.orders[i].dia;
              this.orders[i].blacoat=this.orders[i].coating;
              this.orders[i].blaqual='A';
              this.orders[i].blbase=this.orders[i].blbase;
              
              
            }
  console.log(this.totaldet);

  this.spinner.hide();
        });
  
  
    
  }
  public findGIN(obj:any)
  {
      var detail=this.totaldet.blanksinventory.filter(a => a.product==obj.blaproduct && a.sid==obj.blasid 
        && a.shade == obj.blashade && a.addP == obj.blaadd && a.dia == obj.bladia && a.coat == obj.blacoat
        && a.qual == obj.blaqual && a.baseP ==obj.blbase && a.supplier == obj.blavendor && a.qty > 0);
     
        if(detail.length > 0)
        {
          obj.gin=detail[0].gin;
          obj.item=detail[0].itemId;
          obj.blaqty=1;
        }
  }

  public save()
  {
    var finaldet:any[]=[];
      for(var i=0;i<this.orders.length;i++)
      {
        if(this.orders[i].gin)
        {
          if(this.orders[i].blaqty > 0)
          {
              finaldet.push({
                soid:this.orders[i].soid,
                sno:this.orders[i].sno,
                gin:this.orders[i].gin,
                sid:this.orders[i].sid,
                item:this.orders[i].item
              });
          }
        }
      }

      this.crm.setDayWiseOrders(finaldet).subscribe(res =>
        {
            var result:any=res;
            if(result.result=="OK")
            {
              this.adm.showMessage('Values added successfully','Success',1);
              this.orders=[];
            }
            else
            {
              this.adm.showMessage(result.result,'Error',4);
              this.orders=[];
            }
        })
      
  }

}
