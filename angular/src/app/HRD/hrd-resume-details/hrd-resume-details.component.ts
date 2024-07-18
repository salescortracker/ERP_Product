import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { HrdDesignationsService } from 'app/services/hrd/hrd-designations.service';
import { HrdResumeService } from 'app/services/hrd/hrd-resume.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-hrd-resume-details',
  templateUrl: './hrd-resume-details.component.html',
  styleUrls: ['./hrd-resume-details.component.scss']
})
export class HrdResumeDetailsComponent implements OnInit {
public opened:boolean=false;
public recordid:number=0;
public header:any={
   AppDate:new Date(),
  NameOfCandidate:'',
  SurName:'',
  FatherName:'',
  Dob:new Date(),
  Gender:0,
  MaritalStatus:0,
  Reference:'',
  Designation:-1,
  ExpectedSalary:null,
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
  PermenentId:''
};
public designation:string='';
public curriculum:any[]=[];
public experience:any[]=[];
public fromdate:Date=new Date();
public todate:Date = new Date();

public cfrom:number ;
public cto:number;
public quali:string='';
public board:string='';

public efrom:number;
public eto:number;
public exper:string='';
public organisation:string='';
public designations:any;
public department:string='';

public crecheck:Boolean=false;
public delcheck:Boolean=false;
public datecheck:Boolean=false;
public resumes:any;
public fileName:string='../../../assets/img/employee.jpg';
public fileobj:any;
public NewfileReqObj:any[]=[];
fileevent: any;
public fileNames:any[]=[];
public files:File[]=[];
public fileReqObj:any; 
filename: any = '';

  constructor(private adm:AdminGeneralInfoService,private des:HrdDesignationsService,
      private router:Router, private spinner:NgxSpinnerService, private hrd:HrdResumeService) {
        if(this.adm.screenCheck(8,2,1,0))
        {
            this.datecheck=this.adm.screenCheck(8,2,1,4);
            this.listAdd();
            this.designationsAdd();

        }
        else
        {
          this.router.navigateByUrl('hrd/unauthorzeid');
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
          this.hrd.getHRDResume(this.adm.stringData(this.fromdate),this.adm.stringData(this.todate)).subscribe(res =>
            {
                this.resumes=res;
                this.spinner.hide();
            });
       }
       public designationsAdd()
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
              this.designations=res;
              console.log('Designations',res);
              this.spinner.hide();
            });


       }
       
  ngOnInit(): void {
  }

  close()
  {
    this.opened=false;
  }
  openNew()
  {
    this.crecheck=this.adm.screenCheck(8,2,1,1);
    this.opened=true;
    this.makeCle();
  }
  makeCle()
  {
    this.header={
      AppDate:new Date(),
     NameOfCandidate:'',
     SurName:'',
     FatherName:'',
     Dob:new Date(),
     Gender:0,
     MaritalStatus:0,
     Reference:'',
     Designation:-1,
     ExpectedSalary:null,
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
     PermenentId:''
   };
   this.curriculum=[];
   this.experience=[];
   this.cfrom=null;
   this.cto=null;
   this.quali='';
   this.board='';
   this.efrom=null;
   this.eto=null;
   this.exper='';
   this.organisation='';
   this.fileName ='../../../assets/img/employee.jpg';
   this.NewfileReqObj=null;
   this.department='';
   this.designation='';
    
  }
  public openOld(obj:any)
  {
      this.crecheck=this.adm.screenCheck(8,2,1,2);
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
      this.hrd.getResumeCompleteDetails(obj.recordId).subscribe(res =>
        {
            var det:any=res;
            if(det.traCheck==1)
            {
              this.recordid=obj.recordId;
                this.header={
                  AppDate:new Date(det.header.appDate),
                  NameOfCandidate:det.header.nameOfCandidate,
                  FatherName:det.header.fatherName,
                  Dob:new Date(det.header.dob),
                  Gender:det.header.gender,
                  MaritalStatus:det.header.maritalStatus,
                  Reference:det.header.reference,
                  Designation:det.header.designation,
                  ExpectedSalary:det.header.expectedSalary,
                  Addr:det.header.addr,
                  Country:det.header.country,
                  Stat:det.header.stat,
                  District:det.header.district,
                  City:det.header.city,
                  Zip:det.header.zip,
                  Mobile:det.header.mobile,
                  Tel:det.header.tel,
                  Fax:det.header.fax,
                  Email:det.header.email,
                  PermenentId:det.header.permenentId,
                };
                this.curriculum=[];
                for(var i=0;i<det.curriculum.length;i++)
                {
                  this.curriculum.push({
                    FromYear:det.curriculum[i].fromYear,
                    ToYead:det.curriculum[i].toYead,
                    Qualification:det.curriculum[i].qualification,
                    Board:det.curriculum[i].board
                  });
                }
                this.experience=[];
                for(var i=0;i<det.experience.length;i++)
                {
                  this.experience.push({
                    FromYear:det.experience[i].fromYear,
                    ToYead:det.experience[i].toYead,
                    Designation:det.experience[i].designation,
                    Organisation:det.experience[i].organisation
                  });
                }
                var usr=this.adm.getUserCompleteInformation().usr;
                this.fileName=this.adm.getActualURL() + "/Attachments/hrd/RES_PIC" + this.recordid + "_" + usr.bCode + "_" + usr.cCode + ".jpg";
               this.findDepartment();
                this.opened=true;

            }
            else
            {
                this.adm.showMessage('This Resume forwarded for futher process','Warning',3);
            }
            this.spinner.hide();
        });

  }
  addCurriculum()
  {
    if(!this.cfrom)
    {
      this.adm.showMessage('From year not mentioned','Warning',3);
      return;
    }
    if(!this.cto)
    {
      this.adm.showMessage('To year not mentioned','Warning',3);
      return;
    }
    if(this.quali.trim()=='')
    {
      this.adm.showMessage('Qualification not mentioned','Warning',3);
      return;
    }
    if(this.board.trim()=='')
    {
      this.adm.showMessage('Boart/University not mentioned','Warning',3);
      return;
    }
    this.curriculum.push({
      FromYear:+this.cfrom,
      ToYead:+this.cto,
      Qualification:this.quali,
      Board:this.board
    });
    this.cfrom=null;
    this.cto=null;
    this.quali='';
    this.board='';
  }
  deleteCurriculum(obj:any)
  {
      var index=this.curriculum.indexOf(obj);
      if(index >=0)
      {
        this.curriculum.splice(index,1);
      }
  }
  addExperience()
  {
    if(!this.efrom)
    {
      this.adm.showMessage('From year not mentioned','Warning',3);
      return;
    }
    if(!this.eto)
    {
      this.adm.showMessage('To year not mentioned','Warning',3);
      return;
    }
    if(this.exper.trim()=='')
    {
      this.adm.showMessage('Designation not mentioned','Warning',3);
      return;
    }
    if(this.organisation.trim()=='')
    {
      this.adm.showMessage('Organisation not mentioned','Warning',3);
      return;
    }
    this.experience.push({
      FromYear:+this.efrom,
      ToYead:+this.eto,
      Designation:this.exper,
      Organisation:this.organisation
    });

    this.efrom=null;
    this.eto=null;
    this.exper='';
    this.organisation='';
  }
  public deleteExperience(obj:any)
  {
    var index=this.experience.indexOf(obj);
      if(index >=0)
      {
        this.experience.splice(index,1);
      }
  }
public onSelectFile(e)
{
  this.NewfileReqObj=[];
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
        this.fileName=event.target.result;
          this.fileNames.push({
              typ:'Image',
              file:event.target.result,
           });
          }
        }
}
}

UploadAttach() {
  var filedata: any = document.getElementById("file-upload");
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

public findDepartment()
{
  this.department='';
  this.designation='';
  var det=this.designations.filter(a => a.RecordId == +this.header.Designation);
  if(det.length > 0)
  {
    this.department=det[0].department;
    this.designation=det[0].Designation;
  }
}

parseDate(dateString: string): Date {
  if (dateString) {
      return new Date(dateString);
  }
  return null;
}

valChk():boolean
{
  if(this.header.NameOfCandidate.trim()=='')
  {
    this.adm.showMessage('Name is not mentioned','Warning',3);
    return false;
  }
  if(+this.header.Gender <= 0)
  {
    this.adm.showMessage('Gender not selected','Warning',3);
    return false;
  }
  if(+this.header.Designation <= 0)
  {
    this.adm.showMessage('Designation not selected','Warning',3);
    return false;
  }
  if(this.header.Mobile.trim()=='')
  {
    this.adm.showMessage('Mobile not mentioned','Warning',3);
    return false;
  }
  if(this.header.Email.trim()=='')
  {
    this.adm.showMessage('Email not mentioned','Warning',3);
    return false;
  }

  return true;
}

public save()
{
  if(this.valChk())
  {
    Swal.fire({  
      title: this.recordid==0? 'Confirms Resume Details':'Modifies Resume Details' ,  
      text: 'You will not be able to recover this file!',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Yes, confirm it!',  
      cancelButtonText: 'No, keep it'  
    }).then((result) => {  
      if (result.value) { 
        this.header.Designation=+this.header.Designation;
        this.header.Gender=+this.header.Gender;
        this.header.MaritalStatus=+this.header.MaritalStatus;

        if(this.recordid > 0)
        {
          this.header.RecordId=this.recordid;
        }
        this.spinner.show(undefined,
          {
            type: 'ball-triangle-path',
            size: 'medium',
            bdColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            fullScreen: true
          });
        this.hrd.setResume(this.header,this.curriculum,this.experience,this.NewfileReqObj ? this.NewfileReqObj : null,this.recordid==0?1:2).subscribe(res =>
          {
              var det:any=res;
            

                if(det.result=='OK')
                {
                  Swal.fire(  
                    'Transaction Completed Successfully!',  
                    'Resume Details Saved.',  
                    'success'  
                  );
                  this.listAdd();
                  if(this.recordid > 0)
                  {
                    this.close();
                  }
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
public delete()
{
  Swal.fire({  
    title:  'Deletes Resume Details' ,  
    text: 'You will not be able to recover this file!',  
    icon: 'warning',  
    showCancelButton: true,  
    confirmButtonText: 'Yes, confirm it!',  
    cancelButtonText: 'No, keep it'  
  }).then((result) => {  
    if (result.value) { 
      this.header.Designation=+this.header.Designation;
      this.header.Gender=+this.header.Gender;
      this.header.MaritalStatus=+this.header.MaritalStatus;
      this.header.RecordId=this.recordid;
       
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
      this.hrd.setResume(this.header,this.curriculum,this.experience,this.NewfileReqObj ? this.NewfileReqObj : null,3).subscribe(res =>
        {
            var det:any=res;
              if(det.result=='OK')
              {
                Swal.fire(  
                  'Transaction Completed Successfully!',  
                  'Resume Details Deleted.',  
                  'success'  
                );
                this.listAdd();
                this.close();
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
