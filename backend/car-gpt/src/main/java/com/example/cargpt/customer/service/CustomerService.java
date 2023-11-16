package com.example.cargpt.customer.service;

import org.springframework.transaction.annotation.Transactional;
import com.example.cargpt.customer.domain.Customer;
import com.example.cargpt.customer.repository.CustomerRepository;

import java.util.List;
import java.util.Optional;

@Transactional //JPA를 쓰려면 Transaction이 있어야 함 (데이터 저장, 변경할 때 필요)
public class CustomerService {
    private final CustomerRepository customerRepository;

    @Autowired
    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    /**
     * 전체 고객 리스트 조회
     * @return
     */
    public List<Customer> findCustomers() {
        return customerRepository.findAll();
    }

    /**
     * 고객 정보 조회
     * @param memberId
     * @return
     */
    public Optional<Customer> findOne(Long customerId) {
        return customerRepository.findById(customerId);
    }


    /**
     * 고객 등록
     * @param customer
     * @return
     */
    public Long join(Customer customer) {
        validateDuplicateMember(customer); //같은 이름이 있는 중복 회원x
        customerRepository.save(customer);
        return customer.getId();
    }

    /**
     * 고객 등록 유효성 검증
     * @param customer
     */
    private void validateDuplicateMember(Customer customer) {
        customerRepository.findByName(customer.getName())
                .ifPresent(m -> {
                    throw new IllegalStateException("이미 존재하는 이름입니다.");
                });
    }
}
