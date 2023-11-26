package com.example.cargpt.car.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.cargpt.car.domain.CarInfo;
import com.example.cargpt.car.service.CarService;

import lombok.extern.slf4j.Slf4j;

/**
 * 2023.11.26 JHW
 */
@RestController
@Slf4j
public class CarController {

	@Autowired
	private CarService carService;

	/**
	 * 차량 목록 반환
	 * 
	 * @return List<CarInfo>
	 */
	@GetMapping("/carList")
	public List<CarInfo> getCarList() {
		log.info("GET (\"/carList\")");
		List<CarInfo> list = carService.getCarList();

		return list;
	}

	/**
	 * 차량 정보 반환 By ID
	 * 
	 * @param carId
	 * @return CarInfo
	 */
	@GetMapping("/carInfo/{carId}")
	public CarInfo getCarInfo(@PathVariable String carId) {
		log.info("GET (\"/carInfo/{carId}\")");
		log.info("ID : " + carId);
		CarInfo carInfo = carService.getCarInfo(carId);

		return carInfo;
	}

}
