package com.example.cargpt.customer.repository;

import com.example.cargpt.customer.domain.CustomerInfo;

import java.util.Optional;

public interface CustomerInfoRepository {
    Optional<CustomerInfo> findByCsmrMgmtNo(String CsmrMgmtNo);
    CustomerInfo save(CustomerInfo customerInfo);
}
