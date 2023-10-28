package com.example.cargpt.chatgpt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.cargpt.chatgpt.dto.ChatGptRequestDto;
import com.example.cargpt.chatgpt.service.MyChatGptService;

@RestController
public class ChatGptController {

	@Autowired
	MyChatGptService myChatGptService;
	

	@PostMapping("/sendPrompt")
	public String test(@RequestBody ChatGptRequestDto chatGptRequestDto) {
		
		
		String prompt = chatGptRequestDto.getPrompt();
		
		System.out.println("질문 : " + prompt);
		
		return myChatGptService.getResponse(prompt);
	}

}
