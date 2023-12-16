package com.example.cargpt.car.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "CRMC_REC_CAR_REL")
public class CrmcRecCarRelInfo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // DB가 알아서 생성해주는 전략
	@Column(name = "REC_ID")
	String recId; /* 아이디 */

	@Column(name = "CSMR_MGMT_NO")
	String csmrMgmtNo; /* 고객관리번호 */

	@Column(name = "CRM_VEHL_CD")
	String crmVehlCd; /* 차종대표코드 */

	@Column(name = "CAR_NM")
	String carNm; /* 차량 이름 */

	@Column(name = "REC_DESC")
	String recDesc; /* 추천 사유 */

}
