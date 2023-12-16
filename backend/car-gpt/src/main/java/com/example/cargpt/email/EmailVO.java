package com.example.cargpt.email;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Builder
@ToString
public class EmailVO {
    private String sender;
    private String recipient;
    private String subject;
    private String message;
}
