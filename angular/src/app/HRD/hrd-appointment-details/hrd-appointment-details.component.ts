import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { HrdAppoinementsService } from 'app/services/hrd/hrd-appoinements.service';
import { HrdDesignationsService } from 'app/services/hrd/hrd-designations.service';
import { HrdEmployeesService } from 'app/services/hrd/hrd-employees.service';
import { HrdInterviewsService } from 'app/services/hrd/hrd-interviews.service';
import { HrdResumeService } from 'app/services/hrd/hrd-resume.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';
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
  selector: 'app-hrd-appointment-details',
  templateUrl: './hrd-appointment-details.component.html',
  styleUrls: ['./hrd-appointment-details.component.scss']
})
export class HrdAppointmentDetailsComponent implements OnInit {
public totalcalls:any;
public call:any;
public totalcandidates:any;
public totalemployees:any;
public candidates:any[]=[];
public employees:any;
  

public resume:any;
public candidatedet:any;
public fileName:string='../../../assets/img/employee.jpg';


  constructor( private hrd:HrdAppoinementsService, private hrr:HrdResumeService,   private adm:AdminGeneralInfoService,
    private emp:HrdEmployeesService,  private router:Router,private spinner:NgxSpinnerService,private modalService: NgbModal,) { 
      if(this.adm.screenCheck(8,2,3,0))
      {
           this.makeRequirements();
      }
      else
      {
        this.router.navigateByUrl('hrd/unauthorzeid');
      }
    }

    public makeRequirements()
    {
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
        this.hrd.getAppointmentRequirements().subscribe(res =>
          {
            var det:any=res;
            this.totalcalls=det.header;
            this.totalcandidates=det.candidates;
            this.totalemployees=det.employees;
            this.spinner.hide();
          });
    }

    public findCandidates(obj:any)
    {
      this.call=obj;
      var det=this.totalcandidates.filter(a => a.recordid == +obj.recordId);
      this.candidates=[];
      for(var i=0;i<det.length;i++)
      {
        this.candidates.push({
          recordid:det[i].recordid,
          seq:det[i].seq,
          resumeid:det[i].resumeid,
          resumeseq:det[i].resumeseq,
          nameofcandidate:det[i].nameofcandidate,
          gender:det[i].gender,
          mobile:det[i].mobile,
          statu:0,
          comments:'',
          datetojoin:new Date(),
          refempid:0, 
          designation:'',
          
        });
      }
      this.employees=this.totalemployees.filter(a => a.recordid== +obj.recordId);
    }

    
public openCandidate(customContent,obj:any)
{
  this.fileName='../../../assets/img/employee.jpg';
            
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
    console.log(obj,'Objec');
    this.hrr.getResumeCompleteDetails(+obj.resumeid).subscribe(res =>
      {
        var usr=this.adm.getUserCompleteInformation().usr;

          this.candidatedet=res;
  this.fileName=this.adm.getActualURL() + "/Attachments/hrd/RES_PIC" + this.candidatedet.header.recordId + "_" + usr.bCode + "_" + usr.cCode + ".jpg";

          this.modalService.open(customContent, { windowClass: 'terms-modal'  });
        this.spinner.hide();
      });
}
public findEmployee(obj:any)
{
  
    var det=this.employees.filter(a => a.empno == +obj.refempid);
    if(det.length > 0)
    {
      obj.designation=det[0].designation;
    }
    else
    {
      obj.designation='';
    }
}
parseDate(dateString: string): Date {
  if (dateString) {
      return new Date(dateString);
  }
  return null;
}
private valCheck():boolean
{
  if(!this.call)
  {
    this.adm.showMessage('No Interview details selected for appointment details','Warning',3);
    return false;
  }

  for(var i=0;i<this.candidates.length;i++)
  {
    if(!this.candidates[i].refempid)
    {
      this.adm.showMessage('Refered employee for ' + this.candidates[i].nameofcandidate + ' not selected','Warning',3);
      return false;
    }
  }

}
public save()
{

}
  ngOnInit(): void {
  }

}
