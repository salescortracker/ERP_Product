import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Injectable, Inject } from '@angular/core';
import {WINDOW} from '../../shared/services/window.service';
 export class LoginInput
{
 
  public username:string;
  public password:string;
}

export class UserInfo
{
  public uCode:string;
  public rCode:string;
  public bCode:string;
  public cCode:number;
  public kCode:string;
  public vCode:string;
  public pCode:string;
  public vendor:string;
  public webCheck:string='0';
  public mobileCheck:string='0';
}

export class userAddress
{
  public companyName:string;
  public branchName:string;
  public address:string;
  public country:string;
  public stat:string;
  public district:string;
  public city:string;
  public zip:string;
  public mobile:string;
  public tel:string;
  public fax:string;
  public email:string;
  public web:string;
}

export class UserPermissions
{
  public moduleCode:number;
  public menuCode:number;
  public screenCode:number;
  public tranCode: number;
}

export class UserAssigns
{
  public code:string;
  public typ:string;
}


export class UserCompleteInfo
{
  public usr:UserInfo;
  public addr:userAddress;
  public roles:any[];
  public assg:UserAssigns[];
  public expdate:Date;
  public localCheck:string='';
 public sets:any[];
}





@Injectable({
  providedIn: 'root'
})
export class AdminGeneralInfoService {
  

  
  constructor(@Inject(WINDOW) private window: Window,private http: HttpClient,private toastr:ToastrService,private router:Router) { }
 /* getLocation(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });

  }*/
  getLocation(): any
  {
   return new Promise((resolve, reject) => {
      var details:any;
      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
          details={
            lng:resp.coords.longitude,
            lat: resp.coords.latitude
          }
         // console.log(details,'location details');
         
        },
        err => {
          reject(err);
        });
         
    });
   
     
  }
  public getAddress():any
  {
    var key=this.getUserCompleteInformation().usr.kCode;
    var url = 'https://ipgeolocation.abstractapi.com/v1/?api_key=' + key;
    console.log(url);
    this.http.get(url).subscribe(res =>
      {
        var det:any=res;
        return det;
      });

  }
  
  public showMessage(msg:string,title:string,typ:number)
  {
    switch(typ)
    {
      case 1:
        this.toastr.success(msg,title);
        break;
        case 2:
        this.toastr.info(msg,title);
        break;
        case 3:
        this.toastr.warning(msg,title);
        break;
        case 4:
        this.toastr.error(msg,title);
        break;
    }
     
  }
  public getActualURL():string 
  {
 return "https://localhost:44339/"; 
  // return "http://usine.prismcloudsolutions.in/";
    
   //return "https://sales.cortracker.com/";
   }
   public getReportsURL():string
   {
    return this.getActualURL() + "Reps/";
   }

   public makeConfig():any
   {
  var config = {
    responsetype: 'json',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.getUserCompleteInformation().usr.kCode,
    }
  };
    return config;
   }

public screenCheck(moduleCode:number,menuCode:number,screenCode:number,transcode:number):Boolean
{
  let userinfo:UserCompleteInfo =this.getUserCompleteInformation();
  if(userinfo.usr.rCode.toUpperCase() == "ADMINISTRATOR")
  {
    return true;
  }
  else
  {
    let x:number=0;
    let i:number;
    for(i=0;i<userinfo.roles.length;i++)
    {
      if(userinfo.roles[i].moduleCode == moduleCode && userinfo.roles[i].menuCode==menuCode && userinfo.roles[i].screenCode == screenCode && userinfo.roles[i].transCode== transcode)
      {
        x++;
      }
    }
    if(x==0)
    {
        return false;
    }
    else
    {
        return true;
    }
  }
}
public setUserCompleteInformation(det:UserCompleteInfo):void
{
  localStorage.setItem('userdetails',   JSON.stringify(det));
}
public getUserCompleteInformation():UserCompleteInfo
{
 
  var info = localStorage.getItem('userdetails');
  let userinfo: UserCompleteInfo=JSON.parse(info);
  return(userinfo);
 
}
public findProductName():string
{
  var det=this.getUserCompleteInformation();
  var pname:string='';
  debugger
  switch(det.usr.pCode)
  {
    case "D-MIN":
      pname="MANAGE INN";
      break;
    case "D-COM":
      pname="COMERCIO";
      break;
    case "D-USI":
      pname="USINE";
      break;
    case "D-SHI":
      pname="SHIKSHA";
      break;
    case "D-CON":
      pname="EDIFICIO"
      break;
    case "D-DHA":
      pname="DHANWANTARI"
      break;
      case "D-REA":
        pname="BIENES RAICES"
        break;
        case "D-RID":
          pname="RIDES"
          break;
  }
  return pname;
}
public clearSessionStorage():void
{
  localStorage.removeItem('userdetails');
  localStorage.removeItem('modulename');
}
public strDate(obj:any):string
{
 
  let str:string='';
  str = str + (obj.day <10?'0':'') + obj.day.toString() + '-';
  str=str+ this.findmonthname(obj.month) + '-';
  str=str+obj.year.toString();
  return str;
}
public makePresentDate(obj:any):Date
{
  var str=this.strDate(obj);
  var dat=new Date(str);
var datp:Date= new Date();

  dat= new Date(new Date(dat).setHours(datp.getHours() + 5));
  dat= new Date(new Date(dat).setMinutes(datp.getMinutes() + 30));
   return dat;
}
public stringData(dat:Date)
{
  let str:string='';
   
  str = str + (dat.getDate() <10?'0':'') + dat.getDate().toString() + '-';
 
  str=str+ this.findmonthname(dat.getMonth() + 1) + '-';
  str=str+dat.getFullYear().toString();
  return str;
}
public stringDataComplete(dat:Date)
{
  let str:string='';
   
  str = str + (dat.getDate() <10?'0':'') + dat.getDate().toString() + '-';
 
  str=str+ this.findmonthname(dat.getMonth() + 1) + '-';
  str=str+dat.getFullYear().toString();
str=str + ' ';
  str =str + (dat.getHours() < 10?'0':'') + dat.getHours().toString() + ':';
  str =str + (dat.getMinutes() < 10?'0':'') + dat.getMinutes().toString();
  return str;
}
public makeDate(dat:Date):any
{
 var det:any=
 {year: dat.getFullYear(),
   month: dat.getMonth() + 1, 
   day: dat.getDate()
  };
  console.log('Date',det);
  return det;

}
public removeKama(str:string):number
{
  var str1:string='';
  var valu:string='';
  for(var i=0;i<str.length;i++)
  {
    str1=str.substr(i,1);
    console.log(str1);
    if(str1 != ',')
    {
      valu=valu+str1;
    }
  }
     
  return +valu;
}
public fixString(str:string,pad:number,ch:string):string
{
    let s:string=str;
    for(var k=str.length;k<=pad;k++)
    {
      
      s = s.concat(ch);
    }

    return s;
}


public findmonthname(x:number):string
{
  let months:string[]= new Array('Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec');
  return months[x-1];
}


makePdf(filename:any){
 
  var fn='sample.pdf';
      let byteArray = new Array(filename.length);
      for(let i = 0; i < filename.length; i++){
        byteArray[i] = filename[i];
      }
      let uIntArray = new Uint8Array(byteArray);
      let blob = new Blob([uIntArray], {type : 'application/pdf'});
     
    var fileURL=URL.createObjectURL(blob);
    window.open(fileURL);
   
}
makeExcel(filename:any)
    {
      let byteArray = new Array(filename.length);
      for(let i = 0; i < filename.length; i++){
        byteArray[i] =filename[i];
      }
      let uIntArray = new Uint8Array(byteArray);
      let blob = new Blob([uIntArray], {type : 'application/excel'});
    
    var fileExcel=URL.createObjectURL(blob);
    window.open(fileExcel);
    }
  

    public makeFileOpen(fname:string)
    {
      window.open( this.getReportsURL() + fname,'_blank');
    }

    public makeRedirections()
    {

      var usr=this.getUserCompleteInformation().usr;
      switch(usr.pCode)
      {
        case "D-USI":
          this.router.navigateByUrl('dashboard/dashboardUsine');
          break;
      }
    }
}
