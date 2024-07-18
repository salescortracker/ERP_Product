import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { AccAccountGroupsService } from 'app/services/accounts/acc-account-groups.service';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { AdmCountriesService } from 'app/services/admin/adm-countries.service';
import { analytics } from 'firebase';
@Component({
  selector: 'app-acc-accounts',
  templateUrl: './acc-accounts.component.html',
  styleUrls: ['./acc-accounts.component.scss']
})
export class AccAccountsComponent implements OnInit {
  
  public pageno:number=1;
  public PAGESIZE:number=15;
  public totalpages:number=1;
  page4=1;

  public creCheck:Boolean=false;
  public delCheck:Boolean=false;
  public delVisible:Boolean=false;
  public saveStr:string='';
 
  public recordID:number=0;


  public treeObj:any;


  public opened:boolean=false;
  public items:any;
  public totalitems:any;
  public searchtext:string='';
public countries:any;
public states:any;
public selectedstates:any;
  public grop:string='';

public acco:any={
  Recordid:0,
  Accname:'',
  Accgroup:0,
  Address:'',
  Country:' ',
  State:' ',
  District:'',
  City:'',
  Pin:'',
  Mobile:'',
  Tel:'',
  Fax:'',
  Email:'',
  WebId:'',
  AcType:'',
  AcChk:1
  };

  public authCheck:boolean=false;



  constructor(private agrp:AccAccountGroupsService,private acc:AccAccountsService, private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService,private cnt:AdmCountriesService
   ) {
if(this.adm.screenCheck(1,1,2,0))
{
  this.delCheck=this.adm.screenCheck(1,1,2,3);
  this.authCheck=true;
  this.pageno=1;
    this.listAdd();
    this.treeAdd();
    
}
else
{
  this.authCheck=false;
this.router.navigateByUrl('accounts/accunauthorize')

}
   }

  ngOnInit(): void {
   // this.listAdd();
  }


  openNew()
  {
    this.makeCle();
    this.creCheck=this.adm.screenCheck(1,1,2,1);
    this.saveStr='Save';
    this.opened=true;
  }
  private makeCle()
  {
    this.delVisible=false;
    this.recordID=0;
    this.acco={
       Accname:'',
      Accgroup:0,
      Address:'',
      Country:' ',
      State:' ',
      District:'',
      City:'',
      Pin:'',
      Mobile:'',
      Tel:'',
      Fax:'',
      Email:'',
      WebId:'',
      AcType:'',
      AcChk:1
      };
      this.grop='';
    
  }

  openOld(obj:any)
  {
  
    
  
     
    this.recordID=obj.accountId;
   

    this.acco={
      Recordid:obj.accountId,
      Accname:obj.accountname,
      Accgroup:obj.grpid,
      Address:obj.address,
      Country:obj.country,
      State:obj.stat,
      District:obj.district,
      City:obj.city,
      Pin:obj.zip,
      Mobile:obj.mobile,
      Tel:obj.tel,
      Fax:obj.fax,
      Email:obj.email,
      WebId:obj.webid,
      AcType:obj.actype,
      AcChk:obj.acchk
      };
    this.grop=obj.grp;


    this.delVisible=true;
    this.creCheck=this.adm.screenCheck(1,1,2,2);
    this.saveStr='Modify';
    this.opened=true;
    
  
  }
valChk():Boolean
{
 
    if(this.acco.Accname.trim()=='')
    {
      this.toastr.warning('Account name not mentioned','Warning');
      return false;
    }
    if(this.grop.trim()=='')
    {
      this.toastr.warning('Group not selected');
      return false;
    }
  
  return true;
}
public delete()
{
  Swal.fire({  
    title:  'Deletes Account Details' ,  
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
          size: 'large',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });


        this.acco.Recordid=this.recordID;
        var tracheck=3;
        
       this.acc.setAccount(this.acco,tracheck).subscribe(
          async res => {
            var result:any=res;
            var result:any=res;
            if(result.result  =='OK')
{
   Swal.fire(  
            'Transaction Completed Successfully!',  
            'Account Details deleted.',  
            'success'  
          )  ;

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
      
   
  this.spinner.hide();
  });
}
});
}
  public save()
  {


    if(this.valChk())
    {
    Swal.fire({  
      title:  this.recordID==0?'Confirms Account Details':'Modifies Account Details',  
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
  
          if(this.recordID > 0)
          this.acco.Recordid=this.recordID;
          var tracheck=this.recordID==0?1:2;
          
         this.acc.setAccount(this.acco,tracheck).subscribe(
            async res => {
              var result:any=res;
              var result:any=res;
              if(result.result  =='OK')
  {
     Swal.fire(  
              'Transaction Completed Successfully!',  
              'Account Details saved.',  
              'success'  
            )  ;

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
        
     
    this.spinner.hide();
    });
  }
});
    }


  }

  close()
  {
    this.opened=false;
  }
listAdd()
{
  this.pageno=1;
  this.spinner.show(undefined,
    {
      type: 'ball-scale-multiple',
      size: 'large',
      bdColor: 'rgba(0, 128, 0, 0.8)',
      color: '#fff',
      fullScreen: false
    });
  
  this.acc.getAccounts().subscribe(
    async res => {
      this.items=res;
     this.totalitems=this.items;
     
     this.searchItems();
     this.loadPage(1);
   // this.spinner.hide(); 
    });
    
}
treeAdd()
{
  this.spinner.show(undefined,
    {
      type: 'ball-scale-multiple',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
  
  this.agrp.getAccountGroupsTreeWise().subscribe(
    async res => {
      this.treeObj=res;
      
    this.spinner.hide(); 
    });
    this.spinner.show(undefined,
      {
        type: 'ball-scale-multiple',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
      this.cnt.getAdmTotalCountries().subscribe(res =>
        {
          debugger
              this.countries=res;
              var det=this.countries.filter(a => a.statu==2);
              if(det.length > 0)
              {
                this.acco.Country=det[0].cntname;
                this.changeCountry();
              }
              this.spinner.hide();
        });
        this.spinner.show(undefined,
          {
            type: 'ball-scale-multiple',
            size: 'medium',
            bdColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            fullScreen: true
          });
          this.cnt.getTotalStates().subscribe(res =>
            {
                  this.states=res;
                  this.spinner.hide();
            }); 


 
}
public toggleVisible(obj:any)
{
  obj.openCheck=!obj.openCheck;
}
public toggleVisiblePlus(obj:any)
{
  obj.openCheck=!obj.openCheck;
  
  this.grop=obj.subGroup;
  this.acco.Accgroup=obj.recordId;
  this.acco.AcType=obj.groupcode;
}
public searchAccounts()
{
  this.pageno=1;
  this.searchItems();
}
public searchItems()
{
  var accs:any;
  if(this.searchtext.trim()=='')
  {
      accs=this.totalitems;
  }
  else
  {
    accs=this.totalitems.filter(a => a.accountname.toUpperCase().includes(this.searchtext.toUpperCase()));
  }
  this.totalpages=accs.length/this.PAGESIZE*10;
  this.items=[];
  
  var start=(this.pageno-1)*this.PAGESIZE;
  var end=start+this.PAGESIZE-1;
   for(var i=start;i<=end;i++ )
  {
    if(i==accs.length)
    {
      return;
    }
    else{
    this.items.push(accs[i]);
    }
  }
    //his.items=this.totalitems.filter((a:any) => a.accountname.toUpperCase().includes(this.searchtext.toUpperCase()));
}
loadPage(event)
{
  if(event)
  {
  this.pageno=event;
  this.page4=event;
  }
  else
  {
    this.pageno=1;
    this.page4=1;
  }
  
    this.searchItems();
}
public changeCountry()
{
  var cntid=-1;
  var det=this.countries.filter(a => a.cntname == this.acco.Country)
  if(det.length > 0)
  {
    cntid=det[0].recordId;
    this.selectedstates=this.states.filter(a => a.cntname == +cntid);
  }
  
}
}
