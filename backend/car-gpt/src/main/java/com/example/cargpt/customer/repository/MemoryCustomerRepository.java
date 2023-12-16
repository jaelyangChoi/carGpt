package com.example.cargpt.customer.repository;

import com.example.cargpt.customer.domain.Customer;

import java.util.*;

public class MemoryCustomerRepository implements CustomerRepository{
    private static Map<Long, Customer> store = new HashMap<>();

    @Override
    public List<Customer> findAll() {
        return new ArrayList<>(store.values());
    }

    @Override
    public Optional<Customer> findByCsmrMgmtNo(Long csmrMgmtNo) {
        return Optional.empty();
    }
}
