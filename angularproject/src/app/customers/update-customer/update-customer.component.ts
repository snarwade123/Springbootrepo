import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent {

  getCustomerForm!:FormGroup
  id: number= this.activatedRoute.snapshot.params['id'];
profileDp: any;
ImageUpload: any;
  constructor(private activatedRoute: ActivatedRoute,
    private service: CustomerService,
    private fb:FormBuilder,
    private route:Router)
  {

  }
  ngOnInit()
  {
    this.getCustomerForm=this.fb.group({
      name:[null,Validators.required],
      email:[null,Validators.required],
      phone:[null,Validators.required],
      profileDp:[null,Validators.required]
    })
    this.getCustomerById();
  }
  getCustomerById()
  {
    this.service.getCustomerById(this.id).subscribe((res)=>{
      console.log(res)
      this.getCustomerForm.patchValue(res);
    })
  }
  updateCustomer()
  {
    this.service.updateCustomer(this.id,this.getCustomerForm.value).subscribe((res)=>{
      console.log(res);
      this.route.navigateByUrl("");
    })
  }
}
