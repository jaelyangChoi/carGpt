package com.example.cargpt.chatgpt.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.cargpt.chatgpt.dto.ChatGptRequestDto;
import com.example.cargpt.chatgpt.dto.UserForRecDto;
import com.example.cargpt.chatgpt.service.MyChatGptService;

import lombok.extern.slf4j.Slf4j;

/**
 * 2023.10.28 JHW
 */
@RestController
@Slf4j
public class ChatGptController {

	@Autowired
	MyChatGptService myChatGptService;

	/**
	 * 고객 정보 사용하여 질문하기
	 * 
	 * @param map
	 * 
		{
    	"rdnmAdr" : "서울특별시",
    	"sexCd" : "1",
    	"csmrTymdNo" : "19840527",
    	"mariYn" : "1",
    	"csmrChtSpsn" : "2"
		}
	 * @return
	 */
	@PostMapping("/question")
	public String Question(@RequestBody Map<String, String> map) {
		String rdnmAdr = map.get("rdnmAdr");
		String csmrTymdNo = map.get("csmrTymdNo");
		String sexCd = map.get("sexCd");
		String mariYn = map.get("mariYn");
		String csmrChtSpsn = map.get("csmrChtSpsn");

		log.info(rdnmAdr + " " + csmrTymdNo + " " + sexCd + " " + mariYn + " " + csmrChtSpsn);

		UserForRecDto userForRecDto = new UserForRecDto();
		userForRecDto.setRdnmAdr(rdnmAdr);
		userForRecDto.setCsmrTymdNo(csmrTymdNo);
		userForRecDto.setSexCd(sexCd);
		userForRecDto.setMariYn(mariYn);
		userForRecDto.setCsmrChtSpsn(csmrChtSpsn);

		return myChatGptService.makePrompt(userForRecDto);
	}

	/**
	 * ChatGPT 질문 던지기
	 * 
	 * @param chatGptRequestDto
	 * @return
	 */
	@PostMapping("/sendPrompt")
	public String test(@RequestBody ChatGptRequestDto chatGptRequestDto) {

		String prompt = chatGptRequestDto.getPrompt();

		System.out.println("질문 : " + prompt);

		return myChatGptService.getResponse(prompt);
	}

}
