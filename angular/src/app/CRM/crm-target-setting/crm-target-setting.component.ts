import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { CrmTargetSettingsService } from 'app/services/crm/crm-target-settings.service';
import { CrmTaxesService } from 'app/services/crm/crm-taxes.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-crm-target-setting',
  templateUrl: './crm-target-setting.component.html',
  styleUrls: ['./crm-target-setting.component.scss']
})
export class CrmTargetSettingComponent implements OnInit {
  public target:number=-1;
  public cycle:number=-1;
  public employees:any;
  public empno:number=-1;
  public desig:string='';
  public empid:string='';
  public setscheck:boolean;
  public year:number=+(new Date()).getFullYear().toString()
  public cyc:number=-1;
  public cycles :any[]=[];
  public totalitems:any;
  constructor(private adm:AdminGeneralInfoService,private crm:CrmTargetSettingsService,private router:Router, private spinner:NgxSpinnerService) {
    if(this.adm.screenCheck(7,2,10,0))
    {
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
        this.crm.getTargetRequirements().subscribe(res =>
          {
              var det:any=res;
               this.target=+det.brandType;
               this.cycle=+det.targetType;
               switch(this.cycle)
               {
                 case 1:
                   this.cycles.push({
                    id:1,
                    text:'Jan'
                   });
                   this.cycles.push({
                    id:2,
                    text:'Feb'
                   });
                   this.cycles.push({
                    id:3,
                    text:'Mar'
                   });
                   this.cycles.push({
                    id:4,
                    text:'Apr'
                   });
                   this.cycles.push({
                    id:5,
                    text:'May'
                   });
                   this.cycles.push({
                    id:6,
                    text:'Jun'
                   });
                   this.cycles.push({
                    id:7,
                    text:'Jul'
                   });
                   this.cycles.push({
                    id:8,
                    text:'Aug'
                   });
                   this.cycles.push({
                    id:9,
                    text:'Sep'
                   });
                   this.cycles.push({
                    id:10,
                    text:'Oct'
                   });
                   this.cycles.push({
                    id:11,
                    text:'Nov'
                   });
                   this.cycles.push({
                    id:12,
                    text:'Dec'
                   });
                   break;
                   case 2:
                    this.cycles.push({
                      id:2,
                      text:'Q1'
                     });
                     this.cycles.push({
                      id:3,
                      text:'Q2'
                     });
                     this.cycles.push({
                      id:4,
                      text:'Q3'
                     });
                     this.cycles.push({
                      id:1,
                      text:'Q4'
                     });
                     break;
                  case 3:
                    this.cycles.push({
                      id:1,
                      text:'H1'
                     });
                     this.cycles.push({
                      id:2,
                      text:'H2'
                     });
                     
                     break;
                  case 4:
                    this.cycles.push({
                      id:1,
                      text:'Complete'
                     });
                    break;
               }
               this.employees=det.employees;
              console.log(det,'Details');
              this.spinner.hide();
              if(this.target <= 0 || this.cycle <= 0)
              {
                this.adm.showMessage('Settings for this are not done','Warning',3);
                this.setscheck=false;
              }
              else
              {
                this.setscheck=true;
                
              }
          });

      }
      else
      {
        this.router.navigateByUrl('crm/crmunauthorize');
      }
   }
findEmployee()
{
  var det=this.employees.filter(a => a.recordId == +this.empno);
  if(det.length > 0)
  {
    this.desig=det[0].city;
    this.empid=det[0].empno;
  }
  else
  {
    this.desig='';
    this.empid='';
  }
}
valchkSmall():boolean
{
  if(+this.empno <=0)
  {
    this.adm.showMessage('Employee not selected','Warning',3);
    return false;
  }
  if(+this.cyc <=0)
  {
    this.adm.showMessage('Cycle not selected','Warning',3);
    return false;
  }
   
  return true;
}
onShow()
{
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
  this.crm.getTargetSettingDetails(+this.empno,+this.cyc,+this.year,+this.cycle,+this.target).subscribe(res =>
    {
      console.log(res,'info');
      this.totalitems=res;
      this.spinner.hide();
    });
}
  ngOnInit(): void {
  }
public save()
{
  console.log('totalitems',this.totalitems,this.empid,this.cycle,this.cyc);
  var months:any[]=[];
  debugger
  switch(this.cycle)
  {
    case 1:
        months.push({
          month:+this.cyc,
          year:+this.year
        });
      break;
    case 2:
        switch(+this.cyc)
        {
          case 2:
              months.push({
                month:4,
                year:+this.year
              });
              months.push({
                month:5,
                year:+this.year
              });
              months.push({
                month:6,
                year:+this.year
              });
              break;
              case 3:
                months.push({
                  month:7,
                  year:+this.year
                });
                months.push({
                  month:8,
                  year:+this.year
                });
                months.push({
                  month:9,
                  year:+this.year
                });
                break;
                case 4:
                  months.push({
                    month:10,
                    year:+this.year
                  });
                  months.push({
                    month:11,
                    year:+this.year
                  });
                  months.push({
                    month:12,
                    year:+this.year
                  });
                  break;
                  case 1:
              months.push({
                month:1,
                year:+this.year+1
              });
              months.push({
                month:2,
                year:+this.year+1
              });
              months.push({
                month:3,
                year:+this.year+1
              });
            break;
              
        }
      break;
      case 3:
        switch(+this.cyc)
        {
          case 1:
              months.push({
                month:4,
                year:+this.year
              });
              months.push({
                month:5,
                year:+this.year
              });
              months.push({
                month:6,
                year:+this.year
              });
              months.push({
                month:7,
                year:+this.year
              });
              months.push({
                month:8,
                year:+this.year
              });
              months.push({
                month:9,
                year:+this.year
              });
              break;

              case 2:
              months.push({
                month:10,
                year:+this.year
              });
              months.push({
                month:11,
                year:+this.year
              });
              months.push({
                month:12,
                year:+this.year
              });
              months.push({
                month:1,
                year:+this.year+1
              });
              months.push({
                month:2,
                year:+this.year+1
              });
              months.push({
                month:3,
                year:+this.year+1
              });
              break;
            }
        break;
  }

  var list:any[]=[];
  for(var j=0;j<months.length;j++)
  {
  for(var i=0;i<this.totalitems.length;i++)
  {
      list.push({
          Slno:this.totalitems[i].slno,
          Empno:+this.empno,
          Yea:months[j].year,
          Mont:months[j].month,
          CategoryId:+this.totalitems[i].categoryid,
          ProductId:+this.totalitems[i].itemid,
          Tgt:+this.totalitems[i].target/(+months.length),
          Calls:+this.totalitems[i].calls/(+months.length),
      });
  }
}
console.log('total list',list);
this.spinner.show(undefined,
  {
    type: 'ball-triangle-path',
    size: 'medium',
    bdColor: 'rgba(0, 0, 0, 0.8)',
    color: '#fff',
    fullScreen: true
  });

  this.crm.setTarget(list).subscribe(res =>
    {
      var det:any=res;
      if(det.result=='OK')
      {
        this.adm.showMessage('Target Set Successfully','Success',1);
      }
      else
      {
        this.adm.showMessage(det.result,'Error',4);
      }

      this.spinner.hide();
    });

}
}
