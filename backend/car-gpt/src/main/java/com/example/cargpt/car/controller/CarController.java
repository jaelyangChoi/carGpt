package com.example.cargpt.car.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.cargpt.car.domain.CarInfo;
import com.example.cargpt.car.domain.CrmcRecCarRelInfo;
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

	/**
	 * 차량 추천 정보 반환 By csmrMgmtNo
	 * 
	 * @param csmrMgmtNo
	 * @return
	 */
	@GetMapping("/crmcRecCarRelInfo/{csmrMgmtNo}")
	public CrmcRecCarRelInfo getCrmcRecCarRelInfo(@PathVariable String csmrMgmtNo) {
		log.info("GET (\"/crmcRecCarRelInfo/{csmrMgmtNo}\")");
		log.info("ID : " + csmrMgmtNo);
		CrmcRecCarRelInfo crmcRecCarRelInfo = carService.getCrmcRecCarRelInfo(csmrMgmtNo);

		return crmcRecCarRelInfo;
	}

	/**
	 * 차량 추천 정보 저장 or 업데이트
	 * 
	 * @param map
	 * @return
	 */
	@PostMapping("/crmcRecCarRelInfo/save")
	public CrmcRecCarRelInfo saveCrmcRecCarRelInfo(@RequestBody Map<String, String> map) {
		String csmrMgmtNo = map.get("csmrMgmtNo");
		String carNm = map.get("carNm");
		String CrmVehlCd = map.get("CrmVehlCd");
		String recDesc = map.get("recDesc");

		CrmcRecCarRelInfo vo = new CrmcRecCarRelInfo();
		vo.setCsmrMgmtNo(csmrMgmtNo);
		vo.setCarNm(carNm);
		vo.setCrmVehlCd(CrmVehlCd);
		vo.setRecDesc(recDesc);
		
		log.info("고객관리번호 : " + csmrMgmtNo);
		log.info("차종명 : " + carNm);
		log.info("추천사유 : " + recDesc);

		CrmcRecCarRelInfo result = carService.saveCrmcRecCarRelInfo(vo);

		return result;
	}
}
