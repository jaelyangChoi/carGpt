package com.example.cargpt.car.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.cargpt.car.domain.CarInfo;
import com.example.cargpt.car.repository.CarInfoRepository;

/*
 * 2023.11.26 JHW
 */
@Service
public class CarService {
	
	@Autowired
	private CarInfoRepository carInfoRepository;
	
	
	/**
	 * 차량 목록 반환
	 * @return List<CarInfo>
	 */
	public List<CarInfo> getCarList(){
		return carInfoRepository.findAll();
	}
	
	
	/**
	 * 차량 정보 반환 By ID
	 * @param carId
	 * @return CarInfo
	 */
	public CarInfo getCarInfo(String carId) {
		return carInfoRepository.getCarInfoByCarId(carId);
	}
	
	
}
