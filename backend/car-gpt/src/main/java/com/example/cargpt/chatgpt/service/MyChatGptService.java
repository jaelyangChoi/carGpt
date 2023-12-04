package com.example.cargpt.chatgpt.service;

import java.util.Calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.example.cargpt.chatgpt.dto.UserForRecDto;

import io.github.flashvayne.chatgpt.service.ChatgptService;

/**
 * 2023.11.11 JHW
 */
@Service
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
		String mariYn = userInfo.getMariYn();	// 결혼여부
		String csmrChtSpsn = userInfo.getCsmrChtSpsn();	// 자녀수
		String sexCd = userInfo.getSexCd(); // 성별
		

		// 주소 세팅
		if (StringUtils.hasText(rdnmAdr)) {
			sb.append(rdnmAdr + "에 사는 ");
		}

		// 나이 세팅
		if (StringUtils.hasText(csmrTymdNo)) {
			// 현재 년도
			Calendar now = Calendar.getInstance();
			int current = now.get(Calendar.YEAR);

			// 태어난 년도
			int birth = Integer.parseInt(csmrTymdNo.substring(0, 4));

			// 만 나이
			int age = (current - birth);
			sb.append(Integer.toString(age) + "세의 ");
		}
		
		// 결혼 세팅
		if(StringUtils.hasText(mariYn)) {
			if(mariYn.equals("1"))
				sb.append("기혼의 ");
			else
				sb.append("미혼의 ");
		}
		
		// 자녀 수 세팅
		if(StringUtils.hasText(csmrChtSpsn)) {
			Integer cnt = Integer.parseInt(csmrChtSpsn);
			if(cnt>=2) {
				sb.append("다자녀를 가진 ");
			} else {
				sb.append("자녀 1명을 가진 ");
			}
			
		}

		// 성별 세팅
		if (StringUtils.hasText(sexCd)) {
			if (sexCd.equals("0"))
				sb.append("여자에게 ");
			else if (sexCd.equals("1"))
				sb.append("남자에게 ");
		}

		sb.append("현대자동차 1대만 추천해줘");

		return sb.toString();
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
