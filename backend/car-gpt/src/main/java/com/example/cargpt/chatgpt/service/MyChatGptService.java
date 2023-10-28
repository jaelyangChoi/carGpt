package com.example.cargpt.chatgpt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.github.flashvayne.chatgpt.service.ChatgptService;

@Service
public class MyChatGptService {

	@Autowired
	ChatgptService chatgptService;

	public String getResponse(String prompt) {

		return chatgptService.sendMessage(prompt);
		// \n\nAs an AI language model, I don't have feelings, but I'm functioning well.
		// Thank you for asking. How can I assist you today?
	}
}
