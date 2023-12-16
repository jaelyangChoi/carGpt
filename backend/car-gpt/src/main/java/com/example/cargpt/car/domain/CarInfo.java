package com.example.cargpt.car.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "CAR_MST")
public class CarInfo {

	@Id
//  @GeneratedValue(strategy = GenerationType.IDENTITY) //DB가 알아서 생성해주는 전략
	@Column(name = "CAR_ID")
	String carId; /* 아이디 */

	@Column(name = "CAR_NM")
	String carNm; /* 차종 이름 */

	@Column(name = "CRM_VEHL_CD")
	String crmVehlCd; /* 차종대표코드 */

	@Column(name = "FUEL")
	String fuel; /* 연로 */

	@Column(name = "FUEL_EFFIC")
	String fuelEffic; /* 연비 (1L당) */

}
