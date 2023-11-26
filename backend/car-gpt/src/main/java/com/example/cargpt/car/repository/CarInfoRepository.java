package com.example.cargpt.car.repository;

import java.util.List;

import com.example.cargpt.car.domain.CarInfo;

public interface CarInfoRepository {
	List<CarInfo> findAll();
	CarInfo getCarInfoByCarId(String carId);
}
