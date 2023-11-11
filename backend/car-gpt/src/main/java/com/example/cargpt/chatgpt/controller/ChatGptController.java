package com.example.cargpt.chatgpt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.cargpt.chatgpt.dto.ChatGptRequestDto;
import com.example.cargpt.chatgpt.dto.UserForRecDto;
import com.example.cargpt.chatgpt.service.MyChatGptService;

/**
 * 2023.10.28 JHW
 */
@RestController
public class ChatGptController {

	@Autowired
	MyChatGptService myChatGptService;

	@GetMapping("/StringTest")
	public String StringTest() {
		UserForRecDto userForRecDto = new UserForRecDto();

		userForRecDto.setRdnmAdr("서울특별시");
		userForRecDto.setCsmrTymdNo("19960423");
		userForRecDto.setSexCd("1");

		return myChatGptService.makePrompt(userForRecDto);
	}

	@PostMapping("/sendPrompt")
	public String test(@RequestBody ChatGptRequestDto chatGptRequestDto) {

		String prompt = chatGptRequestDto.getPrompt();

		System.out.println("질문 : " + prompt);

		return myChatGptService.getResponse(prompt);
	}

}
