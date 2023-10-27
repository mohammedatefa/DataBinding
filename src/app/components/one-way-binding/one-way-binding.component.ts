import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.css']
})
export class OneWayBindingComponent {
/*using one way to bind data from ts to html */
message:string="Welcome to our site..."

username:string="";
get nameInvalid(){
  return this.username.length<5;
}

age:number=0;
get ageInvaluid(){
  return this.age<=18 || this.age>26;
}
}
