import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css']
})
export class PriceCardComponent implements OnInit {
  @Input() myData={
      planName: "",
      planCost: "",
      period: "",
      userCount: {
        name:"",
        isAvailable:true
      },
      storageSpace: {
        name:"",
        isAvailable:true
      },
      publicProjects: {
        name:"",
        isAvailable:true
      },
      communityAccess: {
        name:"",
        isAvailable:true
      },
      privateProjects: {
        name:"",
        isAvailable:true
      },
      phoneSupport: {
        name:"",
        isAvailable:true
      },
      subdomain: {
        name:"",
        isAvailable:true
      },
      statusReport: {
        name:"",
        isAvailable:true
      }
    };
  constructor() { }

  ngOnInit(): void {
  }

}
