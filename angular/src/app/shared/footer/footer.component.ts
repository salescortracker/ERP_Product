import { Component, HostBinding } from '@angular/core';
import { AdminGeneralInfoService, userAddress } from 'app/services/admin/admin-general-info.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})

export class FooterComponent{
    //Variables
    currentDate : Date = new Date();
    public license:string='';
    public vendor:string='';
    constructor(private  adm:AdminGeneralInfoService)
    {
       
         var addr:userAddress=this.adm.getUserCompleteInformation().addr;
         switch(this.adm.getUserCompleteInformation().usr.vendor)
         {
             case "101":
                this.vendor="Prism";
                 break;
            case "102":
                this.vendor="CorTRACKER";
                break;
         }
          
        this.license=  addr.branchName + ", " + addr.city; 
    }
}
