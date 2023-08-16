package com.fenix.javareact.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.fenix.javareact.entities.Customer;

@Repository
public interface CustomerRepository extends CrudRepository <Customer,Long> {

}
