import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
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
  selector: 'app-hrd-interview-details',
  templateUrl: './hrd-interview-details.component.html',
  styleUrls: ['./hrd-interview-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HrdInterviewDetailsComponent implements OnInit {

  public recordId:number=0;
  public interviews:any;
  public creCheck:Boolean=false;
  public delCheck:Boolean=false;
  public dateCheck:Boolean=false;
public opened:boolean=false;

public header:any={
  InterviewDate:new Date(),
  Venue:'',
  Descriptio:'',
  Designation:0

};
public designations:any;
public department:string='';

public resume:any;
public candidatedet:any;
public fileName:string='../../../assets/img/employee.jpg';

public employees:any;
public employ:any={
  recordId:0,
empno:'',
empname:'',
designation:'',
department:'',
mobile:''
};
public emppanel:any[]=[];

public listDate:Date=new Date();

  constructor(private des:HrdDesignationsService,private hrd:HrdInterviewsService, private hrr:HrdResumeService,   private adm:AdminGeneralInfoService,
  private emp:HrdEmployeesService,  private router:Router,private spinner:NgxSpinnerService,private modalService: NgbModal,) { 
    if(this.adm.screenCheck(8,2,2,0))
    {
        this.designationsAdd();
        this.employeesAdd();
        this.listAdd();
        this.delCheck=this.adm.screenCheck(8,2,2,3);
        this.dateCheck=this.adm.screenCheck(8,2,2,4);
    }
    else
    {
      this.router.navigateByUrl('hrd/unauthorzeid');
    }
  }

openNew()
{
  this.makeCle();
  this.creCheck=this.adm.screenCheck(8,2,2,1);
  this.opened=true;
}
openOld(obj:any)
{
  this.creCheck=this.adm.screenCheck(8,2,2,2);
  this.opened=true;
}
close()
{
  this.opened=false;
}
makeCle()
{
  this.recordId=0;
  this.header={
    InterviewDate:new Date(),
    Venue:'',
    Descriptio:'',
    Designation:0
  
  };
  this.resume=[];
  this.emppanel=[];
}



  public employeesAdd()
  {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
      this.emp.getHRDEmployees().subscribe(res =>
        {
          this.employees=res;
this.spinner.hide();
        });
  }
  designationsAdd()
  {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
      this.des.getHRDDesignations().subscribe(res =>
        {
          var det:any=res;
            console.log('desig',det);
          this.designations=JSON.parse(JSON.stringify(det));
          this.spinner.hide();
        });
  }
public getDesignation()
{

  var det=this.designations.filter(a => a.RecordId == +this.header.Designation);
  if(det.length > 0)
  {
    this.department=det[0].department;
  }
  else{
    this.department='';
  }
}
public getResume()
{
  if(+this.header.Designation <= 0)
  {
    this.adm.showMessage('Select Designation','Warning',3);
    this.resume={};

  }
  else
  {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
      this.hrd.getResume(+this.header.Designation).subscribe(res =>
        {
          this.resume=res;

        
          this.spinner.hide();
        });
  }
}
public addEmployee()
{
  if(+this.employ.recordId <=0)
  {
    this.adm.showMessage('Employee not selected','Warning',3);
  }
  else
  {   
    this.emppanel.push({
      recordId:this.employ.recordId,
      empno:this.employ.empno,
      empname:this.employ.empname,
      designation:this.employ.designation,
      department:this.employ.department,
      mobile:this.employ.mobile,
    });
      this.employ={
        recordId:0,
      empno:'',
      empname:'',
      designation:'',
      department:'',
      mobile:''
  }
}
}
public deleteEmployee(obj:any)
{
var index=this.emppanel.indexOf(obj);
if(index >=0)
{
  this.emppanel.splice(index,1);
}
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
    this.hrr.getResumeCompleteDetails(+obj.recordId).subscribe(res =>
      {
        var usr=this.adm.getUserCompleteInformation().usr;

          this.candidatedet=res;
  this.fileName=this.adm.getActualURL() + "/Attachments/hrd/RES_PIC" + this.candidatedet.header.recordId + "_" + usr.bCode + "_" + usr.cCode + ".jpg";

          this.modalService.open(customContent, { windowClass: 'terms-modal'  });
        this.spinner.hide();
      });
}
  ngOnInit(): void {
  }

  valChk():boolean
  {
      var resu=this.resume.filter(a => a.chk);
      if(this.header.Venue.trim()=='')
      {
        this.adm.showMessage('Venue not selected','Warning',3);
        return false;
      }
      if(+this.header.Designation <= 0)
      {
        this.adm.showMessage('Designation not selected','Warning',3);
        return false;
      }
      if(resu.length <= 0)
      {
        this.adm.showMessage('Select Resume to be interviewed','Warning',3);
        return false;
      }

      return true;
  }

  save()
  {
    if(this.valChk())
    {
      Swal.fire({  
        title:  this.recordId==0?'Confirms Interview Details':'Modifies Interview Details' ,  
        text: 'You will not be able to recover this file!',  
        icon: 'warning',  
        showCancelButton: true,  
        confirmButtonText: 'Yes, confirm it!',  
        cancelButtonText: 'No, keep it'  
      }).then((result) => {  
        if (result.value) { 
    
          var resus=this.resume.filter(a => a.chk);
          console.log(this.header,resus,this.resume,this.emppanel,'details');
          this.header.Designation = +this.header.Designation;
          this.header.InterviewDate =  new Date(this.adm.stringData(this.header.InterviewDate));
          var resu:any[]=[];
          for(var i=0;i<resus.length;i++)
          {
            resu.push({
              ResumeId:resus[i].recordId

            });
          }
          var panels:any[]=[];
          for(var i=0;i<this.emppanel.length;i++)
          {
            panels.push({
              Empno:this.emppanel[i].recordId
            });
          } 
          this.spinner.show(undefined,
            {
              type: 'ball-triangle-path',
              size: 'medium',
              bdColor: 'rgba(0, 0, 0, 0.8)',
              color: '#fff',
              fullScreen: true
            });

            this.hrd.setInterview(this.header,resu,panels,1).subscribe(res =>
              {
                var det:any=res;
                if(det.result=='OK')
                {
                  Swal.fire(  
                    'Transaction Completed Successfully!',  
                    'Interview Details saved.',  
                    'success'  
                  );
                  this.listAdd();
                  this.makeCle();
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

    this.hrd.getInterviews().subscribe(res =>
      {
         this.interviews=res;
            this.spinner.hide();
      });
}


  parseDate(dateString: string): Date {
    if (dateString) {
        return new Date(dateString);
    }
    return null;
  }

}
