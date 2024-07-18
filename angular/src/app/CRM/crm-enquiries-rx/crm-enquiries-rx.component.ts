import { Component, OnInit ,Input,ViewEncapsulation} from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { CrmTelecallingService } from 'app/services/crm/crm-telecalling.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
const now = new Date();



@Component({
  selector: 'ngbd-modal-content',
  template: `
  <div class="modal-header">
    <h4 class="modal-title">Hi there!</h4>
    <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p>Hello, {{name}}!</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
  </div>
`
 


})

export class NgbdModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { 
  }
}
@Component({
  selector: 'app-crm-enquiries-rx',
  templateUrl: './crm-enquiries-rx.component.html',
  styleUrls: ['./crm-enquiries-rx.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CrmEnquiriesRXComponent implements OnInit {

  public creCheck:Boolean=false;
  public delCheck:Boolean=false;
  public delVisible:Boolean=false;
public country:any='';
public states:any;
  public saveStr:string='';
  public employees:any[]=[];
public tradate:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
public tradates:string='';
public listdate:any={year: now.getFullYear(), month: now.getMonth()+1, day: now.getDate()};
public nextdate:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()}
  public call:any={
    RecordId:0,
    Seq:'aa',
    Dat:'',
    Callerid:0,
    Customer:'',
    Addr:'',
    Country:'',
    Stat:'',
    District:'',
    City:'',
    Zip:'',
    Mobile:'',
    Tel:'',
    Fax:'',
    Email:'',
    Webid:'',
    PrevcallId:null,
    PrevCallMode:'',
    CustomerComments:'',
    CallerComments:'',
    CallPosition:0,
    NextCallDate: '',
    NextCallMode:0,
  };
  public pendinginfo:any=
{
id:null,
seq:'',
callerid:0,
callername:'',
customer:'',
mobile:'',
mode:'',
dat:null,
customercomments:'',
username:''
};

public completeDet:any;
  public recordID:number=0;

  public opened:boolean=false;
  public details:any[]=[];
  constructor(private crm:CrmTelecallingService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService,private modalService: NgbModal
   ) {
if(this.adm.screenCheck(7,2,1,0))
{
  this.tradates=this.adm.stringData(new Date());
  this.crm.gerCompleteEnquiryRxRequirements().subscribe(res =>
    {
      this.completeDet=res;
        console.log(this.completeDet);
        
        this.call.Seq=this.completeDet.seq;

    });
  this.delCheck=this.adm.screenCheck(7,2,1,3);
    this.listAdd();
}
else
{
this.router.navigateByUrl('pages/unAuthorize')
}
   }

  ngOnInit(): void {
   // this.listAdd();
  }
  public openPending(obj:any)
  {
   console.log(obj);
   this.pendinginfo.callername ='';
    this.pendinginfo.id=obj.id;
    this.pendinginfo.seq=obj.seq;
    this.pendinginfo.callerid=obj.callerId;
    this.pendinginfo.customer=obj.customer;
    this.pendinginfo.mobile=obj.mobile;
    this.pendinginfo.mode=obj.mode;
    this.pendinginfo.dat= obj.dat;// this.adm.stringData(new Date(obj.dat));
    this.pendinginfo.customercomments=obj.customercomments;
    this.pendinginfo.username=obj.username;
    this.call.Customer=obj.customer;
    this.call.Mobile=obj.mobile;
    this.modalService.dismissAll('Work over');
   
  }

  openNew()
  {
    this.makeCle();
    this.creCheck=this.adm.screenCheck(7,2,1,1);
    this.saveStr='Save';
    this.opened=true;
  }
  private makeCle()
  {
    this.delVisible=false;
    this.recordID=0;
   this.call={
    RecordId:0,
 //   Seq:this.completeDet.seq,
    Dat:'',
    Callerid:0,
    Customer:'',
    Mobile:'',
    Email:'',
    PrevcallId:null,
    PrevCallMode:'',
    CustomerComments:'',
    CallerComments:'',
    CallPosition:0,
    NextCallDate: '',
    NextCallMode:0,


  };
  }

  openOld(obj:any)
  {
    console.log(obj);
    
    this.recordID=obj.recordId;
   
    this.delVisible=true;
    this.creCheck=this.adm.screenCheck(7,2,1,2);
    this.saveStr='Modify';
    this.opened=true;
  }
 
public makeStates()
{
  
  this.states=this.completeDet.states.filter(a => a.cntname == this.call.Country);
}
public deleteCall()
{
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });

  this.call.RecordId=this.recordID;
  this.call.Dat=this.adm.strDate(this.tradate);
    var tracheck=3;
    this.crm.setTeleCall(this.call,tracheck).subscribe(
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
          this.toastr.success('Call Deleted Successfully','Success');
          this.listAdd();
          this.makeCle();
          this.opened=false;
          this.spinner.hide();
        }
        else
          {
              this.toastr.error(result.result,'Error');
              this.spinner.hide();
          }
          
        });


   
}


valChk():Boolean
{
 
 if(!this.call.Customer)
 {
   this.adm.showMessage('Customer not entered','Warning',3);
   return false;
 }
 if(this.call.Customer.trim() == '')
 {
   this.adm.showMessage('Customer not entered','Warning',3);
   return false;
 }
 if(!this.call.Mobile)
 {
   this.adm.showMessage('Mobile not entered','Warning',3);
   return false;
 }
 if(this.call.Mobile.trim() == '')
 {
   this.adm.showMessage('Mobile not entered','Warning',3);
   return false;
 }

 if(!this.call.CustomerComments)
 {
   this.adm.showMessage('Customer comments not entered','Warning',3);
   return false;
 }
 if(this.call.CustomerComments.trim() == '')
 {
   this.adm.showMessage('Customer comments not entered','Warning',3);
   return false;
 }
 if(!this.call.CallerComments)
 {
   this.adm.showMessage('Caller comments not entered','Warning',3);
   return false;
 }
 if(this.call.CallerComments.trim() == '')
 {
   this.adm.showMessage('Caller comments not entered','Warning',3);
   return false;
 }
if(this.call.CallPosition <= 0)
{
  this.adm.showMessage('Call Position not selected','Warning',3);
  return false;
}
 

 
  return true;
}
  public saveCall()
  {




    
    if(this.valChk())
    {
      Swal.fire({  
        title:  this.recordID==0?'Confirms Enquiry Details':'Modifies Enquiry Details',  
        text: 'You will not be able to recover this file!',  
        icon: 'warning',  
        showCancelButton: true,  
        confirmButtonText: 'Yes, confirm it!',  
        cancelButtonText: 'No, keep it'  
      }).then((result) => {  
        if(result.value)
        {
          this.spinner.show(undefined,
            {
              type: 'ball-triangle-path',
              size: 'medium',
              bdColor: 'rgba(0, 0, 0, 0.8)',
              color: '#fff',
              fullScreen: true
            });

this.call.CallPosition=+this.call.CallPosition;
 

      this.call.Dat=this.adm.makePresentDate(this.tradate);
      this.call.NextCallDate=this.adm.makePresentDate(this.nextdate);
      this.call.NextCallMode=+this.call.NextCallMode;
   
      var tracheck=this.recordID==0?1:2;
      
      this.crm.setEnquiryRX(this.call,tracheck).subscribe(
        async res => {
          var result:any=res;
          
          if(result.result  =='OK')
          {
            Swal.fire(  
              'Transaction Completed Successfully!',  
              'Enquiry Details saved.',  
              'success'  
            )  ;
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
            this.listAdd();
          }
          else
          {
            Swal.fire(  
              result.result,  
              'Some error in transaction',  
              'error'  
            )  
          }
          this.spinner.hide();
        });
      };
    });
    }
  }

  close()
  {
    this.opened=false;
  }
  
openModal(customContent) {
  //  this.modalService.open(customContent, { windowClass: 'terms-modal'  });
  this.modalService.open(customContent, { windowClass: 'terms-modal'  });
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
  var frmdate=this.adm.strDate(this.listdate);
  this.crm.getListOfRXEnquiries(frmdate,frmdate).subscribe(
    async res => {
      console.log(res);
      var deta:any=res;
      this.details=[];
      for(var i=0;i<deta.length;i++)
      {
        this.details.push({
          recordId:deta[i].recordId,
          seq:deta[i].seq,
          customer:deta[i].customer,
          caller:deta[i].username,
          mobile:deta[i].mobile,
          statu:this.findstatus(deta[i].stau)

        });
      }
      console.log(this.details);
    this.spinner.hide(); 
    });
    
}
findcaller(x):string{
  var det=this.employees.filter(a => a.empid ==x);
  var ename='';
  if(det.length > 0)
  {
    ename=det[0].empname;
  }
  else
  {
    ename='';
  }
  return ename;
}
findstatus(x):string{
 /* if(x==1)
    return 'Space';
  else
    return 'Universe';
  }*/
  if(x==1)
  return 'Active';
else
  return 'Inactive';
}

}
