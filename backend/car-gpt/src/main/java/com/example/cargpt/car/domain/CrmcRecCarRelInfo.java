package com.example.cargpt.car.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Entity
@ToString
@Table(name = "CRMC_REC_CAR_REL")
public class CrmcRecCarRelInfo {

	@Id
	@Column(name = "CSMR_MGMT_NO")
	String csmrMgmtNo; /* 고객관리번호 */

	@Column(name = "CRM_VEHL_CD")
	String crmVehlCd; /* 차종대표코드 */

	@Column(name = "CAR_NM")
	String carNm; /* 차량 이름 */

	@Column(name = "REC_DESC")
	String recDesc; /* 추천 사유 */

}
