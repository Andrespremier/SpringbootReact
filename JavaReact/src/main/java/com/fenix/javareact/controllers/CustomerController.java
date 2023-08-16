package com.fenix.javareact.controllers;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.fenix.javareact.entities.Customer;
import com.fenix.javareact.services.ICustomerServices;

@RestController
public class CustomerController {
	
	@Autowired
	private ICustomerServices service;
	
	@GetMapping("/api/customers")
	public List<Customer> getAll()
	{
		List<Customer> retorno = service.getAll();
		return retorno;	
	}

}
