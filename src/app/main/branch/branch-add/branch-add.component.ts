import { Component } from '@angular/core';
import { City } from 'src/app/models/city';

@Component({
  selector: 'branch-add-root',
  templateUrl: './branch-add.component.html',
  styleUrls: ['./branch-add.component.scss']
})
export class BranchAddComponent{

  addres: string;
  name: string;
  city: string;
  homeNumber: string;

  chooseCity = "Almaty";

  constructor() { }

  ngOnInit() {}

  checkData() {
    console.log(this.city);
    console.log(this.homeNumber);
    console.log(this.addres);
    console.log(this.name);

  }

}