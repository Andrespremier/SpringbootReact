package com.fenix.javareact;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.fenix.javareact.entities.Customer;

@SpringBootApplication
public class JavaReactApplication {

	public static void main(String[] args) {
		
		Customer asd = new Customer();
		asd.getFirstname();
		
		SpringApplication.run(JavaReactApplication.class, args);
	}

}
