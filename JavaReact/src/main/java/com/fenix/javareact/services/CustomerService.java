package com.fenix.javareact.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.fenix.javareact.entities.Customer;
import com.fenix.javareact.repository.CustomerRepository;

@Service
public class CustomerService implements ICustomerServices {

	@Autowired
	private CustomerRepository repository;
	
	@Override
	public List<Customer> getAll()
	{
		List<Customer> retorno = (List<Customer>) repository.findAll();
		return retorno;
	}
}
