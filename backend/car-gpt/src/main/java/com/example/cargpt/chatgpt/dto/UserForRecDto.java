package com.example.cargpt.chatgpt.dto;


/**
 * 2023.11.11 JHW
 * ChatGPT 질문용 고객 개인정보 Dto
 */
public class UserForRecDto {
	
	String CsmrMgmtNo;				/*고객관리번호*/
	String SexCd;   				/*성별코드*/
	String CsmrTymdNo;				/*생년월일*/
	String TelNum;					/*휴대폰번호*/
	String TnUsblScnCd;				/*휴대폰번호가용여부*/
	String EmlAdr;					/*이메일주소*/
	String EmlUsblScnCd;			/*이메일주소가용여부*/
	String RdnmAdr;					/*주소*/
	String RdnmUsblScnCd;			/*주소가용여부*/
	String WkplNm;					/*직장명*/
	String OpsNm;					/*부서명*/
	String PoaNm;					/*직위명*/
	String FamTypCd;				/*가족유형코드*/
	String MariYn;					/*결혼여부*/
	String CsmrChtSpsn;				/*자녀수*/
	String CsmrPreCarCd;			/*이전차량코드*/
	String CarHldgCnt;				/*차량보유대수*/
	String CarChngPrd;				/*차량교체주기(일)*/
	String ExrsEeEeno;				/*전담사원번호*/
	String IpeEeno;					/*입력자사원번호*/
	String InpDtm;					/*입력일시*/
	String ChgrEeno;				/*변경자사원번호*/
	String AltrDtm;					/*변경일시*/
	
	
	
	public UserForRecDto() {
		super();
	}
	
	
	public String getCsmrMgmtNo() {
		return CsmrMgmtNo;
	}
	public void setCsmrMgmtNo(String csmrMgmtNo) {
		CsmrMgmtNo = csmrMgmtNo;
	}
	public String getSexCd() {
		return SexCd;
	}
	public void setSexCd(String sexCd) {
		SexCd = sexCd;
	}
	public String getCsmrTymdNo() {
		return CsmrTymdNo;
	}
	public void setCsmrTymdNo(String csmrTymdNo) {
		CsmrTymdNo = csmrTymdNo;
	}
	public String getTelNum() {
		return TelNum;
	}
	public void setTelNum(String telNum) {
		TelNum = telNum;
	}
	public String getTnUsblScnCd() {
		return TnUsblScnCd;
	}
	public void setTnUsblScnCd(String tnUsblScnCd) {
		TnUsblScnCd = tnUsblScnCd;
	}
	public String getEmlAdr() {
		return EmlAdr;
	}
	public void setEmlAdr(String emlAdr) {
		EmlAdr = emlAdr;
	}
	public String getEmlUsblScnCd() {
		return EmlUsblScnCd;
	}
	public void setEmlUsblScnCd(String emlUsblScnCd) {
		EmlUsblScnCd = emlUsblScnCd;
	}
	public String getRdnmAdr() {
		return RdnmAdr;
	}
	public void setRdnmAdr(String rdnmAdr) {
		RdnmAdr = rdnmAdr;
	}
	public String getRdnmUsblScnCd() {
		return RdnmUsblScnCd;
	}
	public void setRdnmUsblScnCd(String rdnmUsblScnCd) {
		RdnmUsblScnCd = rdnmUsblScnCd;
	}
	public String getWkplNm() {
		return WkplNm;
	}
	public void setWkplNm(String wkplNm) {
		WkplNm = wkplNm;
	}
	public String getOpsNm() {
		return OpsNm;
	}
	public void setOpsNm(String opsNm) {
		OpsNm = opsNm;
	}
	public String getPoaNm() {
		return PoaNm;
	}
	public void setPoaNm(String poaNm) {
		PoaNm = poaNm;
	}
	public String getFamTypCd() {
		return FamTypCd;
	}
	public void setFamTypCd(String famTypCd) {
		FamTypCd = famTypCd;
	}
	public String getMariYn() {
		return MariYn;
	}
	public void setMariYn(String mariYn) {
		MariYn = mariYn;
	}
	public String getCsmrChtSpsn() {
		return CsmrChtSpsn;
	}
	public void setCsmrChtSpsn(String csmrChtSpsn) {
		CsmrChtSpsn = csmrChtSpsn;
	}
	public String getCsmrPreCarCd() {
		return CsmrPreCarCd;
	}
	public void setCsmrPreCarCd(String csmrPreCarCd) {
		CsmrPreCarCd = csmrPreCarCd;
	}
	public String getCarHldgCnt() {
		return CarHldgCnt;
	}
	public void setCarHldgCnt(String carHldgCnt) {
		CarHldgCnt = carHldgCnt;
	}
	public String getCarChngPrd() {
		return CarChngPrd;
	}
	public void setCarChngPrd(String carChngPrd) {
		CarChngPrd = carChngPrd;
	}
	public String getExrsEeEeno() {
		return ExrsEeEeno;
	}
	public void setExrsEeEeno(String exrsEeEeno) {
		ExrsEeEeno = exrsEeEeno;
	}
	public String getIpeEeno() {
		return IpeEeno;
	}
	public void setIpeEeno(String ipeEeno) {
		IpeEeno = ipeEeno;
	}
	public String getInpDtm() {
		return InpDtm;
	}
	public void setInpDtm(String inpDtm) {
		InpDtm = inpDtm;
	}
	public String getChgrEeno() {
		return ChgrEeno;
	}
	public void setChgrEeno(String chgrEeno) {
		ChgrEeno = chgrEeno;
	}
	public String getAltrDtm() {
		return AltrDtm;
	}
	public void setAltrDtm(String altrDtm) {
		AltrDtm = altrDtm;
	}
	
}
