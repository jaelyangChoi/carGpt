package com.example.cargpt.email;

import com.example.cargpt.customer.domain.CustomerInfo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class EmailServiceTest {

    @Autowired
    private EmailService emailService;

    @Test
    void sendSimpleMail() throws Exception {
        EmailVO emailVO = new EmailVO("Hyundai Car Recommend Service <hyundai-car-recommend@gmail.com>", "cjl2076@naver.com", "차량 추천 테스트", "차량 추천 내용 테스트");

        emailService.sendSimpleEmail(emailVO);
    }

    @Test
    void sendMail() throws Exception {
        EmailVO emailVO = new EmailVO("Hyundai Car Recommend Service <hyundai-car-recommend@gmail.com>", "cjl2076@naver.com", "차량 추천 테스트", "차량 추천 내용 테스트");

        emailService.sendEmail(emailVO);
    }
}