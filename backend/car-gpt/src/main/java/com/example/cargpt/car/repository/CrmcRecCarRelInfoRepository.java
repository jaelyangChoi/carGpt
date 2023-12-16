package com.example.cargpt.car.repository;

import com.example.cargpt.car.domain.CrmcRecCarRelInfo;

public interface CrmcRecCarRelInfoRepository {
	CrmcRecCarRelInfo getCrmcRecCarRelInfoByCsmrMgmtNo(Long csmrMgmtNo); /* 고객관리번호로 추천정보 조회해오기 */
	CrmcRecCarRelInfo save(CrmcRecCarRelInfo crmcRecCarRelInfo);
}
