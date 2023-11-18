package com.example.cargpt.customer.domain;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
@Entity //실제 DB의 테이블과 1:1로 매핑되는 클래스
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //DB가 알아서 생성해주는 전략
    private Long id;
    String CsmrMgmtNo;                /*고객관리번호*/
    String SexCd;                /*성별코드*/
    String CsmrTymdNo;                /*생년월일*/
    String TelNum;                    /*휴대폰번호*/
    String TnUsblScnCd;                /*휴대폰번호가용여부*/
    String EmlAdr;                    /*이메일주소*/
    String EmlUsblScnCd;            /*이메일주소가용여부*/
    String RdnmAdr;                    /*주소*/
    String RdnmUsblScnCd;            /*주소가용여부*/
    String WkplNm;                    /*직장명*/
    String OpsNm;                    /*부서명*/
    String PoaNm;                    /*직위명*/
    String FamTypCd;                /*가족유형코드*/
    String MariYn;                    /*결혼여부*/
    String CsmrChtSpsn;                /*자녀수*/
    String CsmrPreCarCd;            /*이전차량코드*/
    String CarHldgCnt;                /*차량보유대수*/
    String CarChngPrd;                /*차량교체주기(일)*/
    String ExrsEeEeno;                /*전담사원번호*/
    String IpeEeno;                    /*입력자사원번호*/
    String InpDtm;                    /*입력일시*/
    String ChgrEeno;                /*변경자사원번호*/
    String AltrDtm;                    /*변경일시*/
}


