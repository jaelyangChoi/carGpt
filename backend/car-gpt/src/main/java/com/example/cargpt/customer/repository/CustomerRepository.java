package com.example.cargpt.customer.repository;

import com.example.cargpt.customer.domain.Customer;

import java.util.List;
import java.util.Optional;

public interface CustomerRepository {
    Member save(Customer customer);

    Optional<Customer> findByCsmrMgmtNo(String CsmrMgmtNo); //Null을 처리하는 방법. Optional로 감싸서 반환.

    List<Customer> findAll();
}
