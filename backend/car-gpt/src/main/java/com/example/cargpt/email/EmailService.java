package com.example.cargpt.email;

import com.example.cargpt.customer.service.CustomerService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class EmailService {

    private final JavaMailSender javaMailSender;

    private final CustomerService customerService;

    @Autowired
    public EmailService(JavaMailSender javaMailSender, CustomerService customerService) {
        this.javaMailSender = javaMailSender;
        this.customerService = customerService;
    }

    //단순 문자 메일 보내기
    public void sendSimpleEmail(EmailVO emailVO){
        //단순 문자 메일을 보낼 수 있는 객체 생성
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(emailVO.getRecipient());
        message.setSubject(emailVO.getSubject());
        message.setText(emailVO.getMessage());

        javaMailSender.send(message);
    }
}
