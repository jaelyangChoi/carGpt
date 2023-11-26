package com.example.cargpt.car.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.cargpt.car.domain.CarInfo;

/**
 * 2023.11.26 JHW
 */
public interface JpaCarInfoRepository extends JpaRepository<CarInfo, String>, CarInfoRepository {

}
