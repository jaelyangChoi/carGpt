package com.example.cargpt.email.vo;

import com.example.cargpt.car.domain.CrmcRecCarRelInfo;
import lombok.*;

@Getter
@Setter
@ToString
public class EmailVO {
    String sender;
    String recipient;
    String subject;
    String message;
    String customerName;
    CrmcRecCarRelInfo carInfo;
}
