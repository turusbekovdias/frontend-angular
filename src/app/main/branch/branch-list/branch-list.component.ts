import { Component } from '@angular/core';
import { BranchService} from '../../../service/branch.service';

@Component({
  selector: 'branch-list-root',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.scss']
})
export class BranchListComponent{
  title = 'real-lombard-app';
  active = false;
  constructor(private branchService: BranchService) { }

  branches = [
    {
      "id": 1,
      "firstname": "Dias",
      "lastname": "Turusbekov",
      "middlename": "Erboluly"
    },
    {
      "id": 2,
      "firstname": "Nurlan",
      "lastname": "Alkuatov",
      "middlename": "Berikov"
    },
    {
      "id": 3,
      "firstname": "Kana",
      "lastname": "Kanbekov",
      "middlename": "Kanatovich"
    },
    {
      "id": 4,
      "firstname": "Aisultan",
      "lastname": "Aisultanovich",
      "middlename": "Aisulka"
    },
    {
      "id": 5,
      "firstname": "Raim",
      "lastname": "Raimbekov",
      "middlename": "Raimbekovich"
    }
  ];

  ngOnInit() {}


}