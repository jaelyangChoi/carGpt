package com.example.cargpt.customer.repository;

import com.example.cargpt.customer.domain.Customer;

import java.util.List;
import java.util.Optional;

public interface CustomerRepository {
    List<Customer> findAll();
    List<Customer> findByexrsEeEeno(String exrsEeEeno);
    Optional<Customer> findByCsmrMgmtNo(Long csmrMgmtNo);
}
