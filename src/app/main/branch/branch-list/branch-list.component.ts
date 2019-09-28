import { Component } from '@angular/core';
import { BranchService} from '../../../service/branch.service';
import { Branch } from '../../../models/branch';

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
      "name": "Dias",
      "homeNumber": "4454",
      "address": "aksay",
      "city": {
        "name": 'Almaty'
      }
    },
    {
      "id": 2,
      "name": "Sairan",
      "homeNumber": "8787887",
      "address": "sairan",
      "city": {
        "name": 'Astana'
      }
    }
  ];

  ngOnInit() {
    // this.getListofBranches();
  }

  getListofBranches() {
    this.branchService.getListBranches().subscribe(
      (res: Branch[]) => {
        this.branches = [];
        // this.branches = res;
      }
    );
  }

}