import { AfterViewInit, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { MenuServiceService } from 'app/services/admin/menu-service.service';
import { Observable } from 'rxjs';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
 import { read } from 'fs';
import { DashBoardCompleteService } from 'app/services/dashboard/dash-board-complete.service';
//const Swal = require('sweetalert2')
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
  selector: 'app-dashboard-manage-inn',
  templateUrl: './dashboard-manage-inn.component.html',
  styleUrls: ['./dashboard-manage-inn.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardManageInnComponent implements OnInit {
  public bytearrays:any[]=[];
  public bytearray:any;
  public fileNames:any[]=[];
  public files:File[]=[];
  public fileobj:any;
  public fileReqObj:any;
  public NewfileReqObj:any[]=[];
filename: any = '';
fileevent: any;

public usersList:any[]=[];
  ngOnInit(): void {
  }
  public usrname:string='';
  constructor(private menu:MenuServiceService,
    private dashboard:DashBoardCompleteService,
    private modalService: NgbModal,private router:Router,private adm:AdminGeneralInfoService) { 
    this.usrname=this.adm.getUserCompleteInformation().usr.uCode;
    this.dashboard.getCompleteUsers().subscribe(res =>
      {
        var det:any=res;
        for(var i=0;i<det.length;i++)
        {
          this.usersList.push({
              usercode:det[i].usrName,
              username:det[i].roleName
          });
        }
      })
  }
   
  
  onResized(event: any) {
    setTimeout(() => {
      this.fireRefreshEventOnWindow();
    }, 300);
  }

  fireRefreshEventOnWindow = function () {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("resize", true, false);
    window.dispatchEvent(evt);
  };

    
openModal(customContent) {
  this.bytearrays=[];
  this.fileNames=[];
  let ngbModalOptions: NgbModalOptions = {
    backdrop : 'static',
    keyboard : false,
    windowClass:'terms-model'
};
   this.modalService.open(customContent,ngbModalOptions);
  }
  convertDataURIToBinary(dataURI) {
    var base64Index = dataURI.indexOf(';base64,') + ';base64,'.length;
    var base64 = dataURI.substring(base64Index);
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array:any = new Uint8Array(new ArrayBuffer(rawLength));
   // var array:number[]=[];
    
    for(var i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
  }
  public onSelectFile(e)
{
   
  if(e.target.files)
  {
    var reader= new FileReader();
    var fi=e.target.files[0];
    this.fileevent = e;
    this.UploadAttach();
    this.files.push(e.target.files[0]);
    for(var i=0;i<e.target.files.length;i++)
    {
    reader.readAsDataURL(e.target.files[i]);
    reader.onload=(event:any)=>
      {
          this.fileNames.push({
              typ:'Image',
              file:event.target.result,
           });
          }
        }
  }
}

UploadAttach() {
  var filedata: any = document.getElementById("upload");
  if (filedata.files.length > 0) {
    const file = filedata.files[0];
    this.filename = file.name;
    var type = this.filename.split('.')[this.filename.split('.').length - 1];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.fileobj = reader.result;
      var splitfile = this.fileobj.split(',');
      this.fileobj = splitfile[1];
       
      if (type.toUpperCase() == 'JPG' || type.toUpperCase() == 'PNG' || type.toUpperCase() == 'TXT' || type.toUpperCase() == 'PDF' || type.toUpperCase() == 'XLS' || type.toUpperCase() == 'XLSX' || type.toUpperCase() == 'JPG' || type.toUpperCase() == 'JPEG' || type.toUpperCase() == 'GIF') {
        this.fileReqObj = {
          "Filename": this.filename,
          "ContentType": 'application/' + type,
          "Contents": this.fileobj,
          "FileType": type,
          "MsgID": "",
          "Private": false,
          "Public": true,
          "Description": this.filename,
        }
        this.NewfileReqObj.push(this.fileReqObj);
         
      }  
    };
  }
}
public postDetails()
{
  
  var req = {
    "postinfo":'Ravi is a bad boy',
    "imgs": this.NewfileReqObj ? this.NewfileReqObj : null
  };
  this.dashboard.uploadFiles(req).subscribe((res: any) => {
    setTimeout(() => {
      
    }, 1000); 
    
  }, (error: any) => {
     alert(error);
  });
}
 
    public setModule(str)
    {
      switch(str)
      {
        case 'pos':
       
          if(this.adm.screenCheck(5,0,0,0))
          {
           this.router.navigateByUrl('pos/posdashboard');
        }
        else
        {
          this.adm.showMessage('You are not authorised to view this module','Authorize',4);
        }
          
          break;
        case 'fo':
          if(this.adm.screenCheck(6,0,0,0))
          {
          this.router.navigateByUrl('fo/fodashboard');
        }
        else
        {
          this.adm.showMessage('You are not authorised to view this module','Authorize',4);
        }
          break;
        case 'dinv':
          
          this.router.navigateByUrl('inventory/invminndashboard');
          break;
        case 'hrd':
          this.router.navigateByUrl('hrd/hrddashboard');
          break;
        case 'acc':
         
          this.router.navigateByUrl('accounts/accdashboard');
          break;
          case 'pur':
          if(this.adm.screenCheck(22,0,0,0))
          {
            this.router.navigateByUrl('purchases/purdashboard');
          }
          else
          {
            this.adm.showMessage('You are not authorised for this screen','Warning',3);
          }
            break;
          case 'crm':
            if(this.adm.screenCheck(7,0,0,0))
            {
            this.router.navigateByUrl('crm/crmminndash');
            }
            else
            {
              this.adm.showMessage('You are not authorised for this screen','Warning',3);
            }
            break;
            case 'adm':
              if(this.adm.screenCheck(-1,-1,-1,-1))
              {
                this.router.navigateByUrl('admin/admdashboard');
              }
              else
              {
                this.adm.showMessage('You are not authorised to view this module','Authorize',4);
              }
            break;
      }
    }
    
  
  }
  