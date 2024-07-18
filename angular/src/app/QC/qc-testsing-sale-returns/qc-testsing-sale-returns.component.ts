import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { QcMastersService } from 'app/services/qc/qc-masters.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-qc-testsing-sale-returns',
  templateUrl: './qc-testsing-sale-returns.component.html',
  styleUrls: ['./qc-testsing-sale-returns.component.scss']
})
export class QcTestsingSaleReturnsComponent implements OnInit {
  typ:string='SRT';
  screencode:number=3;
  public tests:any;
  public test:any={
    Testname:'',
    TestArea:'',
    MicroCheck:-1,
    CheckingType:-1,
  
  };
  public recordid:number=0;
  
  public crecheck:Boolean=false;
  public updcheck:Boolean=false;
  public delcheck:Boolean=false;
  
  public opened:boolean=false;
    constructor(private adm:AdminGeneralInfoService,private router:Router,private spinner: NgxSpinnerService,
      private qc:QcMastersService ) { 
  
        if(this.adm.screenCheck(11,1,this.screencode,0))
        {
            this.delcheck=this.adm.screenCheck(11,1,this.screencode,3);
            this.listAdd();
        }
        else
        {
          this.router.navigateByUrl('qc/qcunauthorize');
        }
  
      }
  
    ngOnInit(): void {
    }
    close()
    {
      this.opened=false;
    }
  openNew()
  {
    this.makeCle();
    this.opened=true;
    this.crecheck=this.adm.screenCheck(11,1,this.screencode,1);
  }
  openOld(obj:any)
  {
    this.recordid=obj.recordId;
    this.test={
      Testname:obj.testname,
      TestArea:obj.testArea,
      MicroCheck:-1,
      CheckingType:-1,
    
    };
    this.crecheck=this.adm.screenCheck(11,1,this.screencode,2);
    this.opened=true;
  }
    makeCle()
    {
      this.recordid=0;
      this.test={
        Testname:'',
        TestArea:'',
        MicroCheck:-1,
        CheckingType:-1,
      
      };
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
        this.qc.getQcTestings(this.typ).subscribe(res =>
          {
  this.tests=res;
            this.spinner.hide();
          })
    }
  
    public valCheck():boolean
    {
        if(this.test.Testname.trim()=='')
        {
            this.adm.showMessage('Test name not mentioned','Warning',3);
            return false;
        }
        if(+this.test.MicroCheck < 0)
        {
            this.adm.showMessage('Type of test not mentioned','Warning',3);
            return false;
        }
        if(+this.test.CheckingType < 0)
        {
            this.adm.showMessage('Type of Sampleds not mentioned','Warning',3);
            return false;
        }
        return true;
    }
  
    saveTest()
    {
  if(this.valCheck())
  {
  
    Swal.fire({  
      title:  this.recordid==0? 'Creates Test Details':'Modifies Test Details' ,  
      text: 'You will not be able to recover this file!',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Yes, confirm it!',  
      cancelButtonText: 'No, keep it'  
    }).then((result) => {  
      if (result.value) { 
  
        this.test.MicroCheck = +this.test.MicroCheck;
        this.test.CheckingType = +this.test.CheckingType;
        this.test.TestArea=this.typ;
        if(this.recordid > 0)
        {
          this.test.RecordId=this.recordid;
        }
  
        this.spinner.show(undefined,
          {
            type: 'ball-triangle-path',
            size: 'medium',
            bdColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            fullScreen: true
          });
          this.qc.setQcTesting(this.test,this.recordid==0?1:2).subscribe(res =>
            {
              var det:any=res;
              if(det.result=='OK')
              {
                
  Swal.fire(  
    'Transaction Completed Successfully!',  
    'Test Details saved.',  
    'success'  
  );
        if(this.recordid > 0)
        {
          this.opened=false;
        }
        this.makeCle();
        this.listAdd();
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
    deleteTest()
    {
      Swal.fire({  
        title:    'Deletes Test Details'  ,  
        text: 'You will not be able to recover this file!',  
        icon: 'warning',  
        showCancelButton: true,  
        confirmButtonText: 'Yes, confirm it!',  
        cancelButtonText: 'No, keep it'  
      }).then((result) => {  
        if (result.value) { 
    
          this.test.MicroCheck = +this.test.MicroCheck;
          this.test.CheckingType = +this.test.CheckingType;
          this.test.RecordId=this.recordid;
          
          this.spinner.show(undefined,
            {
              type: 'ball-triangle-path',
              size: 'medium',
              bdColor: 'rgba(0, 0, 0, 0.8)',
              color: '#fff',
              fullScreen: true
            });
            this.qc.setQcTesting(this.test,3).subscribe(res =>
              {
                var det:any=res;
                if(det.result=='OK')
                {
                  
    Swal.fire(  
      'Transaction Completed Successfully!',  
      'Test Details deleted.',  
      'success'  
    );
    this.opened=false;
          this.makeCle();
          this.listAdd();
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
  