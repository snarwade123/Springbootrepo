import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-customer',
  templateUrl: './post-customer.component.html',
  styleUrls: ['./post-customer.component.css']
})
export class PostCustomerComponent {
ImageUpload($event: Event) {
throw new Error('Method not implemented.');
}

  postCustomerForm!:FormGroup
profile: any;
  constructor(private customerService: CustomerService,private fb:FormBuilder,
    private rou: Router){}

  ngOnInit()
  {
    this.postCustomerForm=this.fb.group({
      name:[null,Validators.required],
      email:[null,Validators.required],
      phone:[null,Validators.required],
      Image:[null,Validators.required]
    })
  }
  postCustomer(){
    //console.log(this.postCustomerForm.value)
    this.customerService.postCustomer(this.postCustomerForm.value).subscribe( (res)=>{
      console.log(res);
      this.rou.navigateByUrl("")
    })

  }
}
