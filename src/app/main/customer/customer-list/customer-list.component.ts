import { Component } from '@angular/core';
import { CustomerService } from '../../../service/customer.service';
import { Customer } from '../../../models/customer';

@Component({
  selector: 'customer-list-root',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent{

  customers = [
    {
      "id": 1,
      "firstname" : "Dias",
      "lastname" : "Dias",
      "middlename" : "Dias",
      "mobileNumber" : "Dias",
      "homeNumber" : "Dias",
      "email" : "Dias"
    },
    {
      "id": 2,
      "firstname" : "Nurla",
      "lastname" : "Nurla",
      "middlename" : "Nurla",
      "mobileNumber" : "Nurla",
      "homeNumber" : "Nurla",
      "email" : "Nurla"
    }
  ];

  constructor(private customerService: CustomerService) { }


  ngOnInit() {
    // this.getListofCustomers(); 
  }

  getListofCustomers() {
    this.customerService.getListCustomers().subscribe(
      (res: Customer[]) => {
        this.customers = [];
        // this.customers = res;
      }
    )

  }

}