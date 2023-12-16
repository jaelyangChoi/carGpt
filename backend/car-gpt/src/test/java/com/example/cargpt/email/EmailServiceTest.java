package com.example.cargpt.email;

import com.example.cargpt.car.domain.CrmcRecCarRelInfo;
import com.example.cargpt.car.service.CarService;
import com.example.cargpt.customer.service.CustomerService;
import com.example.cargpt.customer.vo.CustomerInfoVO;
import com.example.cargpt.email.service.EmailService;
import com.example.cargpt.email.vo.EmailVO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class EmailServiceTest {

    @Autowired
    private EmailService emailService;
    private CustomerService customerService;
    private CarService carService;

    @Test
    void sendSimpleMail() throws Exception {
        EmailVO emailVO = new EmailVO();
        emailVO.setSender("Hyundai Car Recommend Service <hyundai-car-recommend@gmail.com>");
        emailVO.setRecipient("cjl2076@naver.com");
        emailVO.setSubject("[현대자동차] 차량 추천 서비스");
        emailVO.setMessage("안녕하세요. <br> 현대자동차 차량 맞춤 추천 서비스 입니다");

        emailService.sendSimpleEmail(emailVO);
    }

    @Test
    void sendMail() throws Exception {
        EmailVO emailVO = new EmailVO();
        emailVO.setSender("Hyundai Car Recommend Service <hyundai-car-recommend@gmail.com>");
        emailVO.setRecipient("cjl2076@naver.com");
        emailVO.setSubject("[현대자동차] 차량 추천 서비스");
        emailVO.setMessage("안녕하세요. <br> 현대자동차 차량 맞춤 추천 서비스 입니다");
        emailVO.setCustomerName("최재량");
        CrmcRecCarRelInfo crmcRecCarRelInfo = new CrmcRecCarRelInfo();
        crmcRecCarRelInfo.setCarNm("제네시스 GV80");
        crmcRecCarRelInfo.setRecDesc("제네시스 GV80 사고 싶다!");
        emailVO.setCarInfo(crmcRecCarRelInfo);

        emailService.sendEmail(emailVO);
    }
}