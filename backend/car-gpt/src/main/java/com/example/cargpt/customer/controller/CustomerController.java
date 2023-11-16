package com.example.cargpt.customer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import com.example.cargpt.customer.domain.Member;
import com.example.cargpt.customer.service.MemberService;

import java.util.List;

@Controller
public class CustomerController {
    private final CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    /** todo : json으로 던져주기
     * 전체 고객 리스트 조회
     * @param
     * @return json
     */
    @GetMapping("/customers")
    public String list(Model model) {
        List<Customer> customers = customerService.findCustomers();
        model.addAttribute("customers", customers);
        return "/customers/customerList";
    }

    /**
     * 고객 정보 조회
     * @param model
     * @return
     */
    @GetMapping("/customers/{customerId}")
    public String list(Model model) {
        Customer customer = customerService.findOne(customerId);

        return "/customers/customerList";
    }


    /**
     * 고객 등록 화면
     * @param form
     * @return
     */
    @GetMapping("/customer/new")
    public String createForm() {
        return "customers/createCustomerForm";
    }

    /**
     * 고객 등록
     * @param form
     * @return
     */
    @PostMapping("/customer/")
    public String create(CustomerForm form) {
        Customer customer = new Customer();
        customer.setName(form.getName());

        customerService.join(customer);
        return "redirect:/";
    }

}
