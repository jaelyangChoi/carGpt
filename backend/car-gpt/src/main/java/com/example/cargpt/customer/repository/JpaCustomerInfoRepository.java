package com.example.cargpt.customer.repository;

import com.example.cargpt.customer.domain.CustomerInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface JpaCustomerInfoRepository extends JpaRepository<CustomerInfo, String>, CustomerInfoRepository {

    //MemberRepository에는 이미 똑같은 시그니처의 메서드가 선언되어 있으므로 생략 가능
    @Override
    Optional<CustomerInfo> findByCsmrMgmtNo(String csmrMgmtNo);
}