import { Component } from '@angular/core';
import { GetapiService } from '../../getapi.service'; 

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  users:any;
  constructor(private api:GetapiService){
  this.api.articles().subscribe((data)=>{
  console.log("This is Api Data", data);
   console.log(typeof data);
   let arrayvalue= Object.values(data);
   console.log(arrayvalue[1]);
   this.users=arrayvalue[1];
  })
}
}