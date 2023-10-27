import { Component } from '@angular/core';
import { Users } from '../users';
import { tick } from '@angular/core/testing';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
name:string="";
age:number=0;
address:string="";
email:string="";

get namevalidate():boolean{
  return this.name.length<5;
}
get agevalidate():boolean{
  return this.age<18 || this.age>25
}
get addressvalidate():boolean{
  return this.address=="Minya"||this.address=="Giza"
}

listofusers: Users[] = [
  { name:"mohmed",age:20,address:"minya",email:"moha@gmail.com" },
  { name:"Ahmed",age:24,address:"asswan",email:"ah@gmail.com" },
  { name:"Ayman",age:26,address:"giza",email:"aym@gmail.com" },
  { name:"salma",age:22,address:"alex",email:"sal@gmail.com" }
];

adduser() {
  if (!this.namevalidate && !this.agevalidate && this.addressvalidate){
    this.listofusers.push({ name: this.name,
      age: this.age,
      address: this.address,
      email: this.email});
    this.name='';
    this.address='';
    this.age=0;
    this.email=''
  }
}
}
