package com.example.cargpt.email;

import com.example.cargpt.customer.domain.CustomerInfo;
import com.example.cargpt.customer.service.CustomerService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Slf4j
@RestController
@RequestMapping("/email")
public class EmailController {
    private final EmailService emailService;
    private final CustomerService customerService;

    @Autowired
    public EmailController(EmailService emailService, CustomerService customerService) {
        this.emailService = emailService;
        this.customerService = customerService;
    }

    @GetMapping("/simple/{csmrMgmtNo}")
    public EmailVO sendSimpleEmail(@PathVariable Long csmrMgmtNo) {
        log.info("sendSimpleEmail to : {}", csmrMgmtNo);
        CustomerInfo customerInfo = customerService.findOne(csmrMgmtNo).get();
        log.info(customerInfo.getEmlAdr());
        EmailVO emailVO = makeEmailMessage(customerInfo.getEmlAdr(), "[광고] 차량 추천 안내", "차량 추천 내용");

        emailService.sendSimpleEmail(emailVO);
        log.info(emailVO.toString());
        return emailVO;
    }

    @GetMapping("/{csmrMgmtNo}")
    public EmailVO sendEmail(@PathVariable Long csmrMgmtNo) {
        log.info("sendSimpleEmail to : {}", csmrMgmtNo);
        CustomerInfo customerInfo = customerService.findOne(csmrMgmtNo).get();
        log.info(customerInfo.getEmlAdr());
        EmailVO emailVO = makeEmailMessage(customerInfo.getEmlAdr(), "[광고] 차량 추천 안내", "차량 추천 내용");

        emailService.sendEmail(emailVO);
        log.info(emailVO.toString());
        return emailVO;
    }

    public EmailVO makeEmailMessage (String recipient, String subject, String message) {
        return new EmailVO("Hyundai Car Recommend Service <hyundai-car-recommend@gmail.com>", recipient, subject, message);
    }
}
