/*
추천차량목록 타입
@author 조혜안
@since 2023.11.26
*/
export default interface CarInfoType {
  carId: string; // 아이디
  carNm: string; // 차종 이름
  crmVehlCd: string; // 차종대표코드
  fuelEffic: string; // 연비 (1L당)
  fuel: string; // 연료
  reason: string; // 추천이유
  carImg: string; // 차종 이미지
}
