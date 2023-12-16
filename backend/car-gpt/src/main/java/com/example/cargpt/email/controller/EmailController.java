package com.example.cargpt.email.controller;

import com.example.cargpt.car.domain.CrmcRecCarRelInfo;
import com.example.cargpt.car.service.CarService;
import com.example.cargpt.customer.domain.CustomerInfo;
import com.example.cargpt.customer.service.CustomerService;
import com.example.cargpt.customer.vo.CustomerInfoVO;
import com.example.cargpt.email.service.EmailService;
import com.example.cargpt.email.vo.EmailVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/email")
public class EmailController {
    private final EmailService emailService;
    private final CustomerService customerService;
    private final CarService carService;

    @GetMapping("/simple/{csmrMgmtNo}")
    public EmailVO sendSimpleEmail(@PathVariable Long csmrMgmtNo) {
        CustomerInfoVO customerInfoVO = customerService.findCustomer(csmrMgmtNo);
        EmailVO emailVO = emailService.makeEmailVO(customerInfoVO, null);

        emailService.sendSimpleEmail(emailVO);
        log.info(emailVO.toString());
        return emailVO;
    }

    @GetMapping("/template/{csmrMgmtNo}")
    public EmailVO sendEmail(@PathVariable Long csmrMgmtNo) {
        CustomerInfoVO customerInfoVO = customerService.findCustomer(csmrMgmtNo);
        CrmcRecCarRelInfo crmcRecCarRelInfo = carService.getCrmcRecCarRelInfo(csmrMgmtNo);

        EmailVO emailVO = emailService.makeEmailVO(customerInfoVO, crmcRecCarRelInfo);

        emailService.sendEmail(emailVO);
        log.info(emailVO.toString());
        return emailVO;
    }

}
