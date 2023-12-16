package com.example.cargpt.email;

import com.example.cargpt.car.domain.CrmcRecCarRelInfo;
import com.example.cargpt.car.service.CarService;
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
    private final CarService carService;

    @Autowired
    public EmailController(EmailService emailService, CustomerService customerService, CarService carService) {
        this.emailService = emailService;
        this.customerService = customerService;
        this.carService = carService;
    }

    @GetMapping("/simple/{csmrMgmtNo}")
    public EmailVO sendSimpleEmail(@PathVariable Long csmrMgmtNo) {
        CustomerInfo customerInfo = customerService.findCustomerInfo(csmrMgmtNo).get();
        EmailVO emailVO = new EmailVO("[테스트] <hyundai-car-recommend@gmail.com>", customerInfo.getEmlAdr(), "차량 추천 제목", "차량 추천 내용");

        emailService.sendSimpleEmail(emailVO);
        log.info(emailVO.toString());
        return emailVO;
    }

    @GetMapping("/{csmrMgmtNo}")
    public EmailVO sendEmail(@PathVariable Long csmrMgmtNo) {
        CustomerInfo customerInfo = customerService.findCustomerInfo(csmrMgmtNo).get();
        EmailVO emailVO = makeEmailMessage(customerInfo);

        emailService.sendEmail(emailVO);
        log.info(emailVO.toString());
        return emailVO;
    }

    public EmailVO makeEmailMessage (CustomerInfo customerInfo) {
        EmailVO emailVO = new EmailVO();
        CrmcRecCarRelInfo crmcRecCarRelInfo = carService.getCrmcRecCarRelInfo(customerInfo.getCsmrMgmtNo());

        emailVO.setSender("Hyundai Car Recommend Service <hyundai-car-recommend@gmail.com>");
        emailVO.setRecipient(customerInfo.getEmlAdr());
//        emailVO.setSubject("[현대자동차] 차량 추천 서비스");customerInfo.get
//        carService.getCrmcRecCarRelInfo(csmrMgmtNo);
        return emailVO;
    }
}
