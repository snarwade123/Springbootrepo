package com.crud.controller;



import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.entity.Customer;

import com.crud.service.CustomerService;



@RestController
@RequestMapping("/customer")
@CrossOrigin("*")
public class CustomerController {
	@Autowired
//	
  private CustomerService customerService;
//  public CustomerController(CustomerService customerSer)
//  {
//	  customerService=customerSer;
//	  
//  }
  @PostMapping("/add")
  public Customer postCustomer(@RequestBody Customer customer)
  {
	  return customerService.postCustomer(customer);
  }
  @GetMapping("/all")
  public List<Customer>getAllCustomer()
  {
	 return customerService.getAllCustomer();
  }
  @DeleteMapping("del/{id}")
  public void deleteCustomer(@PathVariable Long id)
  {
	  customerService.deleteCustomer(id);
  }
  @GetMapping("/{id}")
  public ResponseEntity<Customer>getCustomerById(@PathVariable Long id)
  {
	  Customer customer=customerService.getcustomerById(id);
	  if(customer==null)
	  return ResponseEntity.notFound().build();
	  else
		  return ResponseEntity.ok(customer);
  }
  @PutMapping("/{id}")
  public ResponseEntity<Customer> updateCustomerById1(@PathVariable Long id,@RequestBody Customer customer)
	{
		Customer updatedCustomer=customerService.updateCustomer(id,customer);
		if(updatedCustomer==null)
		    return ResponseEntity.notFound().build();
		else
			return ResponseEntity.ok(updatedCustomer);


    }
  
}
