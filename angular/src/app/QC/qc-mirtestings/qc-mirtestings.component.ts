import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { QcMaterialTestingsService } from 'app/services/qc/qc-material-testings.service';
 
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-qc-mirtestings',
  templateUrl: './qc-mirtestings.component.html',
  styleUrls: ['./qc-mirtestings.component.scss']
})
export class QcMIRTestingsComponent implements OnInit {

  public headers:any;
  public lines:any;
  public totallines:any;
  public tests:any;
 
public line:any={
RecordId:0,
Sno:null,
ItemName:'',
Batchno:'',
Qty:null,
BranchId:'',
Rat:null
};
public lineDet:any={
  transactionId:null,
  Lotno:null,
  Lottype:'MAT',
  Comments:'',
  CheckedQty:null,
  RectifiedQty:null,
  RejectedQty:null,
  ValueOfItem:null,
  rectificationCost:null

};
public lineDetails:any[]=[];
public username:string='';
  public testid:number=-1;
  constructor(private adm:AdminGeneralInfoService,private router:Router,private spinner: NgxSpinnerService,
    private qc:QcMaterialTestingsService ) {
   this.username=this.adm.getUserCompleteInformation().usr.uCode;
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
        this.qc.getQcTestRequirements().subscribe(res =>
          {
              var det:any=res;
              this.headers=det.headers;
              this.totallines=det.lines;
              this.tests=det.tests;

              this.spinner.hide();
          });
     }

public openMIR(obj:any)
{
  this.lines=this.totallines.filter(a => a.recordId==obj.recordId);
}
public openLine(obj:any)
{
  this.line={
    RecordId:obj.recordId,
    Sno:obj.sno,
    ItemName:obj.itemName,
    Batchno:obj.batchno,
    Qty:+obj.qty,
    BranchId:obj.branchId,
    Rat:+obj.rat
    };
}

  ngOnInit(): void {
  }
findRejectValue()
{
    this.lineDet.ValueOfItem=(+this.lineDet.RejectedQty)*(+this.line.Rat);
}
 addInfo()
 {
  
   this.lineDetails.push({
      transactionId:this.line.RecordId,
      Lotno:this.line.Sno,
      Lottype:'MAT',
      Comments:this.lineDet.Comments,
      CheckedQty:+this.lineDet.CheckedQty,
      RectifiedQty:+this.lineDet.RectifiedQty,
      RejectedQty:+this.lineDet.RejectedQty,
      ValueOfItem:+this.lineDet.ValueOfItem,
      rectificationCost:+this.lineDet.rectificationCost,
      ItemName:this.line.ItemName
   });
   this.lineDet={
    transactionId:null,
    Lotno:null,
    Lottype:'MAT',
    Comments:'',
    CheckedQty:null,
    RectifiedQty:null,
    RejectedQty:null,
    ValueOfItem:null,
    rectificationCost:null
  
  };
  this.line={
    RecordId:0,
    Sno:null,
    ItemName:'',
    Batchno:'',
    Qty:null,
    BranchId:'',
    Rat:null
    };
 }

 deleteInfo(obj:any)
 {
   var index=this.lineDetails.indexOf(obj);
   if(index >= 0)
   {
     this.lineDetails.splice(index,1);
   }
 }
 private valChk():boolean
 {
   if(+this.testid <= 0)
   {  
      this.adm.showMessage('Test not selected','Warning',3);
      return false;
   }
   if(this.lineDetails.length <= 0)
   {
    this.adm.showMessage('Test details not selected','Warning',3);
    return false;
   }
   return true;
 }

 public saveQC()
 {
   if(this.valChk())
   {
  Swal.fire({  
    title:  'Confirms Quality Details' ,  
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
      var header:any={
        Testid: +this.testid,
        typ:'MAT'
      };
      var lines:any[]=[];
      for(var i=0;i<this.lineDetails.length;i++)
      {
        lines.push({
          transactionId:this.lineDetails[i].transactionId,
          Lotno:this.lineDetails[i].Lotno,
          Lottype:'MAT',
          Comments:this.lineDetails[i].Comments,
          CheckedQty:+this.lineDetails[i].CheckedQty,
          RectifiedQty:+this.lineDetails[i].RectifiedQty,
          RejectedQty:+this.lineDetails[i].RejectedQty,
          ValueOfItem:+this.lineDetails[i].ValueOfItem,
          rectificationCost:+this.lineDetails[i].rectificationCost
        });
      }
      this.qc.setQCTestMaterial(header,lines,1).subscribe(res =>
        {
          var det:any=res;
          if(det.result=='OK')
          {
          Swal.fire(  
            'Transaction Completed Successfully!',  
            'Quality Details saved.',  
            'success'  
          );
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
 }

}
