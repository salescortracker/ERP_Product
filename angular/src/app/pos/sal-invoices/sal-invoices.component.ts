import { destroyPlatform } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbDatepickerI18n, NgbCalendar, NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { InvPurchaseOrderService } from 'app/services/inventory/inv-purchase-order.service';
import { SalSalesService } from 'app/services/pos/sal-sales.service';
import { PurchasesService } from 'app/services/purchases/purchases.service';
import { date } from 'ngx-custom-validators/src/app/date/validator';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-sal-invoices',
  templateUrl: './sal-invoices.component.html',
  styleUrls: ['./sal-invoices.component.scss']
})
export class SalInvoicesComponent implements OnInit {
  public now:Date= new Date();
  public listdat:any={year: this.now.getFullYear(), month: this.now.getMonth() + 1, day: this.now.getDate()};
  
  public purchases:any;
  
  constructor(private pur:PurchasesService, private puo:InvPurchaseOrderService,
    private sal:SalSalesService,
    private modalService: NgbModal,private adm:AdminGeneralInfoService, private spinner: NgxSpinnerService,) { 
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
  var dat1=this.adm.strDate(this.listdat);
  var dat2=dat1;
  this.sal.getSales(dat1).subscribe(res =>
    {
        var det:any=res;
        this.purchases=det.filter(a => a.qcCheck==1)
         console.log(res);
         this.spinner.hide();
    });
}

}
