package com.example.cargpt.customer.repository;

import com.example.cargpt.customer.domain.Member;

import java.util.List;
import java.util.Optional;

public interface CustomerRepository {
    Member save(Customer customer);

    Optional<Customer> findById(Long id); //Null을 처리하는 방법. Optional로 감싸서 반환.

    Optional<Customer> findByName(String name);

    List<Member> findAll();
}
