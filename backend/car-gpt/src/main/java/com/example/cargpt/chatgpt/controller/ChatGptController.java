package com.example.cargpt.chatgpt.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.cargpt.car.domain.CrmcRecCarRelInfo;
import com.example.cargpt.car.service.CarService;
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

	@Autowired
	CarService carService;

	/**
	 * 고객 정보 사용하여 질문하기
	 * 
	 * @param map
	 * 
	 *            { "csmrMgmtNo" : "고객관리번호", "rdnmAdr" : "서울특별시", "sexCd" : "1",
	 *            "csmrTymdNo" : "19840527", "mariYn" : "1", "csmrChtSpsn" : "2" }
	 * @return
	 */
	@PostMapping("/question")
	public CrmcRecCarRelInfo Question(@RequestBody Map<String, String> map) {
		Long csmrMgmtNo = Long.parseLong(map.get("csmrMgmtNo"));
		String rdnmAdr = map.get("rdnmAdr");
		String csmrTymdNo = map.get("csmrTymdNo");
		String sexCd = map.get("sexCd");
		String mariYn = map.get("mariYn");
		String csmrChtSpsn = map.get("csmrChtSpsn");

		log.info(csmrMgmtNo + " " + rdnmAdr + " " + csmrTymdNo + " " + sexCd + " " + mariYn + " " + csmrChtSpsn);

		UserForRecDto userForRecDto = new UserForRecDto();
		userForRecDto.setRdnmAdr(rdnmAdr);
		userForRecDto.setCsmrTymdNo(csmrTymdNo);
		userForRecDto.setSexCd(sexCd);
		userForRecDto.setMariYn(mariYn);
		userForRecDto.setCsmrChtSpsn(csmrChtSpsn);

		// 고객정보 사용하여 질문 생성
		String prompt = myChatGptService.makePrompt(userForRecDto);

		// 챗 GPT에게 질문하기 (사용할 때마다 24시간마다 Key값 갱신해야함)
		String answer = myChatGptService.getResponse(prompt);
//		String answer = "Answer: 현대 레이, \r\n"
//				+ "Reason: 현대 레이는 2013년부터 나온 스마트한 성능과 다양한 운전 모드를 제공하는 스포츠 세단으로, 도시 생활에도 적합하며 가족이 없는 단란한 여성에게 적합합니다.";

		log.info("질문 : " + prompt);
		log.info("질문 응답 : " + answer);
		// : 으로 끊기거나, 이 추천드립니다. , 를 추천드립니다. (파싱해야함)

		String[] parsedAnswer = myChatGptService.questionParsing(answer);

		log.info("추천 차종 : " + parsedAnswer[0]);
		log.info("추천 사유 : " + parsedAnswer[1]);

		// 차량 추천 정보 세팅하기
		CrmcRecCarRelInfo crmcRecCarRelInfo = new CrmcRecCarRelInfo();
		crmcRecCarRelInfo.setCsmrMgmtNo(csmrMgmtNo);
		crmcRecCarRelInfo.setCrmVehlCd(null); // TODO 차량대표코드 조회 후 세팅해야함
		crmcRecCarRelInfo.setCarNm(parsedAnswer[0]);
		crmcRecCarRelInfo.setRecDesc(parsedAnswer[1]);
		
		log.info("최종 차량 정보 : " + crmcRecCarRelInfo);

		// 차량 추천 정보 저장하기
		carService.saveCrmcRecCarRelInfo(crmcRecCarRelInfo);

		return crmcRecCarRelInfo;
	}

}