import { Component } from '@angular/core';
import { Users } from '../users';

@Component({
  selector: 'app-showusers',
  templateUrl: './showusers.component.html',
  styleUrls: ['./showusers.component.css']
})
export class ShowusersComponent {
  users:Users[]=[
    { name:"mohmed",age:20,address:"minya",email:"moha@gmail.com" },
    { name:"Ahmed",age:24,address:"asswan",email:"ah@gmail.com" },
    { name:"Ayman",age:26,address:"giza",email:"aym@gmail.com" },
    { name:"salma",age:22,address:"alex",email:"sal@gmail.com" }
]
}
