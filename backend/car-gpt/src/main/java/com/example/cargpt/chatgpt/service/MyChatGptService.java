package com.example.cargpt.chatgpt.service;

import java.util.Calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.example.cargpt.chatgpt.controller.ChatGptController;
import com.example.cargpt.chatgpt.dto.UserForRecDto;

import io.github.flashvayne.chatgpt.service.ChatgptService;
import lombok.extern.slf4j.Slf4j;

/**
 * 2023.11.11 JHW
 */
@Service
@Slf4j
public class MyChatGptService {

	@Autowired
	ChatgptService chatgptService;

	/**
	 * UserForRecDto 객체 사용 ChatGPT 질문 내용 만들기
	 * 
	 * @return String
	 */
	public String makePrompt(UserForRecDto userInfo) {
		StringBuilder sb = new StringBuilder();

		String rdnmAdr = userInfo.getRdnmAdr(); // 주소
		String csmrTymdNo = userInfo.getCsmrTymdNo(); // 생년월일
		String mariYn = userInfo.getMariYn(); // 결혼여부
		String csmrChtSpsn = userInfo.getCsmrChtSpsn(); // 자녀수
		String sexCd = userInfo.getSexCd(); // 성별

		sb.append("Please recommend 1 Hyundai Motor Company Car that has been released since 2013 in Korean to ");
		// 주소 세팅

		// 나이 세팅
		if (StringUtils.hasText(csmrTymdNo)) {
			// 현재 년도
			Calendar now = Calendar.getInstance();
			int current = now.get(Calendar.YEAR);

			// 태어난 년도
			int birth = Integer.parseInt(csmrTymdNo.substring(0, 4));

			// 만 나이
			int age = (current - birth);
			sb.append(Integer.toString(age) + "-year-old ");
		}

		// 결혼 세팅
		if (StringUtils.hasText(mariYn)) {
			if (mariYn.equals("1"))
				sb.append("married ");
			else
				sb.append("single ");
		}

		// 성별 세팅
		if (StringUtils.hasText(sexCd)) {
			if (sexCd.equals("0"))
				sb.append("woman ");
			else if (sexCd.equals("1"))
				sb.append("man ");
		}

		// 주소 세팅
		if (StringUtils.hasText(rdnmAdr)) {
			if (rdnmAdr.contains("특별") || rdnmAdr.contains("광역"))
				sb.append("living in city ");
			else
				sb.append("living in secluded place");
		}

		// 자녀 수 세팅
		if (StringUtils.hasText(csmrChtSpsn)) {
			Integer cnt = Integer.parseInt(csmrChtSpsn);
			if (cnt >= 2) {
				sb.append("with multiple children ");
			} else if (cnt == 1) {
				sb.append("with child ");
			} else if (cnt == 0) {
				sb.append("without children ");
			}

		}

		sb.append("and the answer should be in Korean as follows: { \"answer\":\" \" , \"reason\":\" \"}");

		return sb.toString();
	}

	/**
	 * 챗GPT 응답에 대해 파싱하기
	 * 
	 * @param gptAnswer
	 * @return
	 */
	public String[] questionParsing(String gptAnswer) {
		String[] firstParsedAnswer = gptAnswer.split(":");

		for (int i = 0; i < firstParsedAnswer.length; i++)
			log.info("Chat GPT Answer that parsed[" + i + "] : " + firstParsedAnswer[i]);

		String car = firstParsedAnswer[1].split(",")[0];
		String reason = firstParsedAnswer[2];

		String[] parsedResult = new String[2];

		parsedResult[0] = car;
		parsedResult[1] = reason;

		return parsedResult;
	}

	/*
	 * ChatGPT에게 질문하기
	 */
	public String getResponse(String prompt) {

		return chatgptService.sendMessage(prompt);
		// \n\nAs an AI language model, I don't have feelings, but I'm functioning well.
		// Thank you for asking. How can I assist you today?
	}
}
