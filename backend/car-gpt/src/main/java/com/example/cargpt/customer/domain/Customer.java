package com.example.cargpt.customer.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity //실제 DB의 테이블과 1:1로 매핑되는 클래스
@Table(name = "CRMC_CSMR_M")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //DB가 알아서 생성해주는 전략
    @Column(name = "CSMR_MGMT_NO")
    Long csmrMgmtNo;                  /*고객관리번호*/
    @Column(name = "CSMR_NM")
    String csmrNm;                    /*고객명*/
    @Column(name = "SMS_RCPM_YN")
    String smsRcpmYn;                 /*SMS수신동의여부*/
    @Column(name = "EML_RCPM_YN")
    String emlRcpmYN;                 /*이메일수신동의여부*/
    @Column(name = "TLM_RCPM_YN")
    String tlmRcpmYN;                 /*전화수신동의여부*/
    @Column(name = "INP_EENO")
    String inpEeno;                   /*입력자사원번호*/
    @Column(name = "INP_DTM")
    String inpDtm;                    /*입력일시*/
    @Column(name = "CHGR_EENO")
    String chgrEeno;                  /*변경자사원번호*/
    @Column(name = "ALTR_DTM")
    String altrDtm;                   /*변경일시*/
    @Column(name = "EXRS_EE_EENO")
    String exrsEeEeno;                /*전담 사원 번호*/

}
