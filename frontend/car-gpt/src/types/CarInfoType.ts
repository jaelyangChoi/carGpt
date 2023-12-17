/*
추천차량목록 타입
@author 조혜안
@since 2023.11.26
*/
export default interface CarInfoType {
  csmrMgmtNo: number; // 고객관리번호
  crmVehlCd: string; // 차량코드
  carNm: string; // 차종 이름
  // crmVehlCd: string; // 차종대표코드
  // fuelEffic: string; // 연비 (1L당)
  // fuel: string; // 연료
  recDesc: string; // 추천이유
  // carImg: string; // 차종 이미지
}
