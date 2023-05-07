import {Component} from '@angular/core';
import { GetapiService } from '../../getapi.service'; 

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'app-newcards',
  templateUrl: './newcards.component.html',
  styleUrls: ['./newcards.component.css'],
})
export class NewcardsComponent {
  users:any;
  constructor(private api:GetapiService){
  this.api.articles().subscribe((data)=>{
  console.log("This is Api Data", data);                                           
   console.log(typeof data);
   let arrayvalue= Object.values(data);
   console.log(arrayvalue[1]);
   this.users=arrayvalue[1];
  },
  )
}
}