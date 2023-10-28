package com.example.cargpt.chatgpt.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

// 나중에 롬복 외부 설치해야함. 스프링에서 해주는건 동작 안됨.
@Data
@AllArgsConstructor 
@Builder
public class ChatGptRequestDto {

	String prompt;
	
	public String getPrompt() {
		return prompt;
	}
	
	public void setPrompt(String prompt) {
		this.prompt = prompt;
	}
	
}
