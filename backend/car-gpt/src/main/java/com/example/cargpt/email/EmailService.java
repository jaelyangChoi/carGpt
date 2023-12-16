package com.example.cargpt.email;

import com.example.cargpt.customer.service.CustomerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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
    private final CustomerService customerService;

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
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, false, "UTF-8");
            mimeMessageHelper.setFrom(emailVO.getSender());
            mimeMessageHelper.setTo(emailVO.getRecipient());
            mimeMessageHelper.setFrom(emailVO.getSender());
            mimeMessageHelper.setSubject(emailVO.getSubject());
            mimeMessageHelper.setText(setContext(emailVO.getMessage()), true); // 메일 본문 내용, HTML 여부
            javaMailSender.send(mimeMessage);
            log.info("Success");
        } catch (MessagingException e) {
            log.info("Fail");
            throw new RuntimeException(e);
        }
    }


    // thymeleaf를 통한 html 적용
    public String setContext(String text) {
        Context context = new Context();
        context.setVariable("text", text);
        return templateEngine.process("email", context);
    }
}
