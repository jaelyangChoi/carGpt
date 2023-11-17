package com.example.cargpt.customer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import com.example.cargpt.customer.domain.Member;
import com.example.cargpt.customer.service.MemberService;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/customers")
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
    @GetMapping
    public List<Customer> list() {
        log.debug("@GetMapping(\"/customers\")");
        List<Customer> customers = customerService.findCustomers();
        log.debug("customers : {}", constomers.toString());

        return customers;
    }

    /**
     * 고객 정보 조회
     * @param model
     * @return
     */
    @GetMapping("/{csmrMgmtNo}")
    public String list(@PathVariable String csmrMgmtNo) {
        log.debug("@GetMapping(\"/customers/{csmrMgmtNo}\")");
        Customer customer = customerService.findOne(csmrMgmtNo);
        log.debug("customer : {}", constomer.toString());

        return customer;
    }


    /**
     * 고객 등록
     * @param form
     * @return
     */
    /*
    @PostMapping("/new")
    public String create(@ModelAttribute CustomerForm form, RedirectAttributes redirectAttributes) {
        Customer customer = new Customer();
        customer.setName(form.getName());

        customerService.join(customer);
        redirectAttributes.addAttribute("csmrMgmtNo", customer.getCsmrMgmtNo());
        redirectAttributes.addAttribute("status", true); //남은 속성값은 쿼리파라미터 형식으로 들어감
        return "redirect:/customers/{csmrMgmtNo}"; //redirectAttribute의 값을 넣어줌. url 인코딩 문제 해결.
    }
    */
}
