package com.example.cargpt.email;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class EmailVO {
    private String sender;
    private String recipient;
    private String subject;
    private String message;
}
