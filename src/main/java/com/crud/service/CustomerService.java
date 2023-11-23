package com.crud.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crud.entity.Customer;
import com.crud.repo.CustomerRepository;


@Service

public class CustomerService {
	@Autowired
	private CustomerRepository customerRepository;
//	public CustomerService(CustomerRepository customerRepo)
//	{
//		customerRepository=customerRepo;
//	}
 public Customer postCustomer(Customer customer)
 {
	 return customerRepository.save(customer);
 }
public List<Customer> getAllCustomer() {
	return customerRepository.findAll();
}
public void deleteCustomer(Long id) {
	customerRepository.deleteById(id);
}
public Customer getcustomerById(Long id)
{
	return customerRepository.findById(id).orElse(null);
}
public Customer updateCustomer(Long id,Customer customer) {
	Optional<Customer>optionalCustomer=customerRepository.findById(id);
	if(optionalCustomer.isPresent())
	{
		Customer existingCustomer=optionalCustomer.get();
		existingCustomer.setEmail(customer.getEmail());
		existingCustomer.setName(customer.getName());
		existingCustomer.setPhone(customer.getPhone());
		existingCustomer.setImage(customer.getImage());

		
		
		return customerRepository.save(existingCustomer);
	}
	return null;
}
}
