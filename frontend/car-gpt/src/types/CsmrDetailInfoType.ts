/*
고객 상세정보 타입
@author 조혜안
@since 2023.11.26
*/
export default interface CsmrDetailInfoType {
  csmrMgmtNo: string; // 고객관리번호
  sexCd: string; // 성별코드
  csmrTymdNo: string; // 생년월일
  telNum: string; // 휴대폰번호
  tnUsblScnCd: string; // 휴대폰번호가용여부
  emlAdr: string; // 이메일주소
  emlUsblScnCd: string; // 이메일수신동의여부
  rdnmAdr: string; //주소
  rdnmUsblScnCd: string; // 주소가용여부
  wkplNm: string; // 직장명
  opsNm: string; // 부서명
  poaNm: string; // 직위명
  famTypCd: string; // 가족유형코드
  mariYn: string; // 결혼여부
  csmrChtSpsn: string; // 자녀수
  csmrPreCarCd: string; // 이전차량코드
  carHldgCnt: string; // 차량보유대수
  carChngPrd: string; // 차량교체주기(일)
  exrsEeEeno: string; // 전담사원번호
  inpEeno: string; // 입력자사원번호
  inpDtm: string; // 입력일시
  chgrEeno: string; // 변경자사원번호
  altrDtm: string; // 변경일시
}
