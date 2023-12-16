package com.example.cargpt.car.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.cargpt.car.domain.CrmcRecCarRelInfo;

public interface JpaCrmcRecCarRelInfoRepository
		extends JpaRepository<CrmcRecCarRelInfo, String>, CrmcRecCarRelInfoRepository {

}
