package com.example.cargpt.car.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.cargpt.car.domain.CarInfo;
import com.example.cargpt.car.domain.CrmcRecCarRelInfo;
import com.example.cargpt.car.repository.CarInfoRepository;
import com.example.cargpt.car.repository.CrmcRecCarRelInfoRepository;

/*
 * 2023.11.26 JHW
 */
@Service
public class CarService {

	@Autowired
	private CarInfoRepository carInfoRepository;

	@Autowired
	private CrmcRecCarRelInfoRepository crmcRecCarRelInfoRepository;

	/**
	 * 차량 목록 반환
	 * 
	 * @return List<CarInfo>
	 */
	public List<CarInfo> getCarList() {
		return carInfoRepository.findAll();
	}

	/**
	 * 차량 정보 반환 By ID
	 * 
	 * @param carId
	 * @return CarInfo
	 */
	public CarInfo getCarInfo(String carId) {
		return carInfoRepository.getCarInfoByCarId(carId);
	}

	/**
	 * 추천 차량 정보 조회 By csmrMgmtNo
	 */
	public CrmcRecCarRelInfo getCrmcRecCarRelInfo(Long csmrMgmtNo) {
		return crmcRecCarRelInfoRepository.getCrmcRecCarRelInfoByCsmrMgmtNo(csmrMgmtNo);
	}
	
	/**
	 * 추천 차량 정보 저장
	 * @param crmcRecCarRelInfo
	 */
	public CrmcRecCarRelInfo saveCrmcRecCarRelInfo(CrmcRecCarRelInfo crmcRecCarRelInfo) {
		return crmcRecCarRelInfoRepository.save(crmcRecCarRelInfo);
	}

}
