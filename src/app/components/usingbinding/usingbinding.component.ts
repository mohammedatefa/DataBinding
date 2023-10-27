import { Component } from '@angular/core';

@Component({
  selector: 'app-usingbinding',
  templateUrl: './usingbinding.component.html',
  styleUrls: ['./usingbinding.component.css']
})
export class UsingbindingComponent {
  number:number=100;
  name:string="mohamed";

  get isvalid(){
    return this.number>50;
  }
}
