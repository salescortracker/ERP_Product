import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalysisMenuService {

  constructor() {}
    
    public getAnalysisMenu():any[]
    {
      var mainmenu:any[]=[{
        menu:'Analysis',
        modulecode:100,
        menucode:0,
        sceecode:0,
        trancode:0,
        opencheck:true,
        actualcheck:false,
        children:[]
      }]
  
      return mainmenu;
    }

    
  
  }

