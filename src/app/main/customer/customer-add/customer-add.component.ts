import { Component } from '@angular/core';
import { Customer } from '../../../models/customer';
import { CustomerService } from '../../../service/customer.service';

@Component({
  selector: 'customer-add-root',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent{

  customer = new Customer();

  constructor(public customerService: CustomerService) { }

  ngOnInit() {}


  checkData() {
    this.customerService.addCustomer(this.customer).subscribe();
  }

}