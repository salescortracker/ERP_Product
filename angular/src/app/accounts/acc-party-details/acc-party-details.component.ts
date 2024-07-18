import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-acc-party-details',
  templateUrl: './acc-party-details.component.html',
  styleUrls: ['./acc-party-details.component.scss']
})
export class AccPartyDetailsComponent implements OnInit,AfterViewInit {

  public partytype:String='';
  constructor(private route:ActivatedRoute) { 
   
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void
  {
    var det=this.route.snapshot.paramMap.get("id");
    if(det =='sup')
    {
      this.partytype="Supplier";
    }
    else
    {
      this.partytype="Customer";
    }
  }

}
