import { Component, Input } from '@angular/core';
import { Users } from '../users';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
@Input() usersList:Users[]=[];

delete(number:number){
  this.usersList.splice(number,1);
}
}
