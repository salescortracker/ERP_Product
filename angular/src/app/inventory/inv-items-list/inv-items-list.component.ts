import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inv-items-list',
  templateUrl: './inv-items-list.component.html',
  styleUrls: ['./inv-items-list.component.scss']
})
export class InvItemsListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
public create()
{
this.router.navigateByUrl('inventory/invitemstra');
}
}
