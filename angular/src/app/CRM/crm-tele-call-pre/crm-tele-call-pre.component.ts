import { Component, Input, OnInit,ViewEncapsulation } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { CrmTelecallingService } from 'app/services/crm/crm-telecalling.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
   
import { line } from 'd3-shape';


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
  selector: 'app-crm-tele-call-pre',
  templateUrl: './crm-tele-call-pre.component.html',
  styleUrls: ['./crm-tele-call-pre.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CrmTeleCallPreComponent implements OnInit {
  closeResult: string;
  public creCheck:Boolean=false;
  public delCheck:Boolean=false;
  public delVisible:Boolean=false;
 public seq:string='';
  public saveStr:string='';
  public employees:any[]=[];
public tradate:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
public listdate:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
public nextdate:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  public call:any={
    
    Seq:'',
    Dat:'',
    Callerid:null,
    Customer:'',
    Mobile:'',
    Email:'',
    PrevcallId:null,
    PrevCallMode:'',
    CustomerComments:'',
    CallerComments:'',
    CallPosition:0,
    NextCallDate: '',
    NextCallMode:'',
  };
public pendings:any[]=[];
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
  public recordID:number=0;

  public opened:boolean=false;
  public details:any[]=[];
  constructor(private crm:CrmTelecallingService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService, private modalService: NgbModal
   ) {
if(this.adm.screenCheck(7,2,1,0))
{
  this.crm.gerCompleteTeleCallRxRequirements().subscribe(res =>
    {
       var det:any=res;
       console.log(det);
       this.seq=det.seq;
       this.employees=det.employees;
       this.pendings=det.pendings;
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
 /*  var det=this.employees.filter(a => a.empid==obj.callerId);
   if(det)
   {
     this.pendinginfo.callername =det[0].empname;
   }*/
   this.pendinginfo.id=obj.id;
   this.pendinginfo.seq=obj.seq;
   this.pendinginfo.callerid=obj.callerId;
   this.pendinginfo.customer=obj.customer;
   this.pendinginfo.mobile=obj.mobile;
   this.pendinginfo.mode=obj.mode;
   this.pendinginfo.dat=this.adm.stringData(new Date(obj.dat));
   this.pendinginfo.customercomments=obj.customercomments;
   this.pendinginfo.username=obj.username;
   this.call.Customer=obj.customer;
   this.call.Mobile=obj.mobile;
   this.modalService.dismissAll();
    
   
 /* this.pendinginfo=
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
  };*/
 }
openContent() {
  const modalRef = this.modalService.open(NgbdModalContent);
  modalRef.componentInstance.name = 'World';
}

openModal(customContent) {
//  this.modalService.open(customContent, { windowClass: 'terms-modal'  });
this.modalService.open(customContent, { windowClass: 'terms-modal'  });
}

 // Open default modal
 open(content,x) {

  
  this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });


}
private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
  } else {
      return `with: ${reason}`;
  }
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
 //   RecordId:0,
    Seq:'',
    Dat:'',
    Callerid:0,
    Customer:'',
    Mobile:'',
    Email:'',
    PrevcallId:null,
    PrevCallMode:'',
    CustomerComments:'',
    CallerComments:'',
    CallPosition:null,
    NextCallDate: '',
    NextCallMode:'0',


  };
  this.pendinginfo=
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
  }

  openOld(obj:any)
  {
     
    this.recordID=obj.recordId;
   
    this.delVisible=true;
    this.creCheck=this.adm.screenCheck(7,2,1,2);
    this.saveStr='Modify';
    this.opened=true;

    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });

      this.crm.getTeleCallDetailById(obj.recordId).subscribe(res =>
        {
            this.recordID=obj.recordId;
            var det:any=res;
            this.call={
                  Seq:det.seq,
                 Dat:new Date(),
                 Callerid:0,
                 Customer:det.customer,
                 Mobile:det.mobile,
                 Email:det.email,
                 PrevcallId:det.prevcallId,
                 PrevCallMode:det.prevCallMode,
                 CustomerComments:det.customerComments,
                 CallerComments:det.callerCommnets,
                 CallPosition:det.pos,
                 NextCallDate: new Date(det.nextcalldate),
                 NextCallMode:det.nextcallmode,
             
             
               };
               this.pendinginfo=
{
id:det.prevcallId,
seq:det.seq,
callerid:0,
callername:det.prevemployee,
 
mobile:det.prevMobile,
mode:det.prevCallMode,
dat:new Date(det.prevDat),
customercomments:det.prevComments,
username:det.prevuser
};
console.log(this.call,this.pendinginfo,'old');

            this.spinner.hide();
        });

  
  }
valChk():Boolean
{
 /*if(!this.call.Callerid)
 {
   this.adm.showMessage('Caller not selected','Warning',3);
   return false;
 }
 if(this.call.Callerid <= 0)
 {
  this.adm.showMessage('Caller not selected','Warning',3);
  return false;
 }*/
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
 
  public saveCall()
  {
    if(this.valChk())
    {
      Swal.fire({  
        title:  this.recordID==0?'Confirms Tele Call Details':'Modifies Tele Call Details',  
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
            this.call.Dat=new Date(this.adm.strDate(this.tradate));
            this.call.NextCallDate=new Date(this.adm.strDate(this.nextdate));
            this.call.CallPosition=+this.call.CallPosition;
           // this.call.Callerid=+this.call.Callerid;
          //  this.call.NextCallMode=+this.call.NextCallMode;

            var tracheck=this.recordID==0?1:2;
            this.crm.setTeleCall(this.call,tracheck).subscribe(
              async res => {
                var result:any=res;
              


                if(result.result  =='OK')
                {
                  Swal.fire(  
                    'Transaction Completed Successfully!',  
                    'Tele Call Details saved.',  
                    'success'  
                  )  ;

                  
this.pendinginfo=
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
                    result.result,  
                    'Some error in transaction',  
                    'error'  
                  )  
                }
        });
      };
    });
    }
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
    
  var frmdate=this.adm.strDate(this.listdate);
     
  this.crm.getListOfTeleCalls(frmdate,frmdate).subscribe(
    async res => {
      var deta:any=res;
      this.details=[];
      for(var i=0;i<deta.length;i++)
      {
        this.details.push({
          recordId:deta[i].recordId,
          seq:deta[i].seq,
          customer:deta[i].customer,
          caller :deta[i].email,
          mobile:deta[i].mobile,
          statu:this.findstatus(deta[i].callPosition)

        });
      }
       
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
  var det='';
  switch(x)
  {
    case 1:
      det='Hot';
      break;
      case 2:
        det='Warm';
        break;
        case 3:
          det='Cool';
          break;
          case 4:
            det='Declined';
            break;
  }
  return det;
}
}
