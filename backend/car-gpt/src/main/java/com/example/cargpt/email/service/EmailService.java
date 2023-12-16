package com.example.cargpt.email.service;

import com.example.cargpt.car.domain.CrmcRecCarRelInfo;
import com.example.cargpt.customer.vo.CustomerInfoVO;
import com.example.cargpt.email.vo.EmailVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Slf4j
@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender javaMailSender;
    private final SpringTemplateEngine templateEngine;

    //단순 문자 메일 보내기
    public void sendSimpleEmail(EmailVO emailVO) {
        //단순 문자 메일을 보낼 수 있는 객체 생성
        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom(emailVO.getSender());
        message.setTo(emailVO.getRecipient());
        message.setSubject(emailVO.getSubject());
        message.setText(emailVO.getMessage());

        javaMailSender.send(message);
    }

    //템플릿 엔진을 이용한 이메일 발송
    public void sendEmail(EmailVO emailVO) {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        try {
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");

            mimeMessageHelper.setFrom(emailVO.getSender());
            mimeMessageHelper.setTo(emailVO.getRecipient());
            mimeMessageHelper.setSubject(emailVO.getSubject());
            mimeMessageHelper.setText(setContext(emailVO), true); // 메일 본문 내용, HTML 여부
            mimeMessageHelper.addInline("image", new ClassPathResource("static/images/logo.jpg")); //템플릿에 들어가는 이미지 cid로 삽입


            javaMailSender.send(mimeMessage);
            log.info("Success");
        } catch (MessagingException e) {
            log.info("Fail");
            throw new RuntimeException(e);
        }
    }


    // thymeleaf를 통한 html 적용
    public String setContext(EmailVO emailVO) {
        Context context = new Context();
        context.setVariable("message", emailVO.getMessage());
        context.setVariable("customerName", emailVO.getCustomerName());
        context.setVariable("carInfo", emailVO.getCarInfo());
        return templateEngine.process("email", context);
    }


    public EmailVO makeEmailVO (CustomerInfoVO customerInfo, CrmcRecCarRelInfo crmcRecCarRelInfo ) {
        EmailVO emailVO = new EmailVO();

        emailVO.setSender("Hyundai Car Recommend Service <hyundai-car-recommend@gmail.com>");
        emailVO.setRecipient(customerInfo.getEmail());
        emailVO.setSubject("[현대자동차] 차량 추천 서비스");
        emailVO.setMessage("안녕하세요. <br> 현대자동차 차량 맞춤 추천 서비스 입니다.");
        emailVO.setCustomerName(customerInfo.getName());
        emailVO.setCarInfo(crmcRecCarRelInfo);

        return emailVO;
    }
}
