import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-get-all-customer',
  templateUrl: './get-all-customer.component.html',
  styleUrls: ['./get-all-customer.component.css']
})
export class GetAllCustomerComponent {

  customers:any=[];
  constructor(private service: CustomerService){}
  ngOnInit()
  {
    this.getAllCustomers();
  }
  getAllCustomers()
  {
    this.service.getAllCustomer().subscribe((res)=>{
      console.log(res);
      this.customers=res;
    })
  }
  deleteCustomer(id: any)
  {
    //console.log(id)
    this.service.deleteCustomer(id).subscribe((res)=>{
      console.log(res)
      this.getAllCustomers();
    })
  }

}
