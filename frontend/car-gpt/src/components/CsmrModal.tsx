/*
회원 상세정보 모달
@author 조혜안
@since 2023.11.25
*/

import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  ListItem,
  ListItemText,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import dummyCsmrDetailInfoList from "api/dummyCsmrDetailInfo";
import { http } from "api/http";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { atomIsCsmrModal } from "recoil/atomIsCsmrModal";
import { atomSelectedCsmr } from "recoil/atomSelectedCsmr";
import CsmrDetailInfoType from "types/CsmrDetailInfoType";

interface CsmrModalProps {
  csmrDetailInfoList: CsmrDetailInfoType[];
}

export default function CsmrModal() {
  const csmrMgmtNo = useRecoilValue(atomSelectedCsmr);
  const [isCsmrModal, setIsCsmrModal] = useRecoilState(atomIsCsmrModal);

  const [csmrDetailInfo, setCsmrDetailInfo] = useState<CsmrDetailInfoType>();

  async function getCustomer() {
    // const data = dummyCsmrDetailInfoList();
    // console.log(data);
    // setCsmrDetailInfo(data[0]);

    const response = await http.get(`/customers/${csmrMgmtNo}`);
    console.log("회원상세정보 받아오기");
    console.log(response.data);
    setCsmrDetailInfo(response.data);
  }

  useEffect(() => {
    // csmrMgmtNo가 undefined가 아닌 경우에만 고객상세정보 받아오기
    if (csmrMgmtNo) {
      getCustomer();
      console.log(csmrMgmtNo);
    }
  }, [csmrMgmtNo]);

  return (
    <Dialog
      open={isCsmrModal}
      onClose={() => setIsCsmrModal(false)}
      fullWidth={true}
      maxWidth="xs"
    >
      <DialogTitle>고객 상세정보</DialogTitle>
      <DialogContent sx={{ p: 3 }}>
        {/* <Typography variant="h6">{csmrDetailInfo?.csmrMgmtNo}</Typography> */}
        {/* <Typography variant="subtitle1" sx={{ mb: 3 }}>
          {csmrDetailInfo?.emlAdr}
        </Typography> */}
        {/* 구분선 왼쪽 */}
        <Grid container>
          <Grid item sx={{ mr: 2 }} xs>
            <Grid container>
              <Grid item xs={12}>
                <Typography gutterBottom variant="body2" color="primary">
                  고객관리번호
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="body1">
                  {csmrDetailInfo?.csmrMgmtNo}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="body2" color="primary">
                  이메일주소
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="body1">
                  {csmrDetailInfo?.emlAdr}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="body2" color="primary">
                  성별
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {csmrDetailInfo?.sexCd === "1" ? (
                  <Typography gutterBottom variant="body1">
                    남
                  </Typography>
                ) : (
                  <Typography gutterBottom variant="body1">
                    여
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="body2" color="primary">
                  생년월일
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="body1">
                  {csmrDetailInfo?.csmrTymdNo.substring(0, 4)}.
                  {csmrDetailInfo?.csmrTymdNo.substring(4, 6)}.
                  {csmrDetailInfo?.csmrTymdNo.substring(6, 8)}
                </Typography>
              </Grid>
              <Divider variant="middle" />
              <Grid item xs={12}>
                <Typography gutterBottom variant="body2" color="primary">
                  휴대폰번호
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="body1">
                  {csmrDetailInfo?.telNum}
                </Typography>
              </Grid>
              <Divider variant="middle" />
              <Grid item xs={12}>
                <Typography gutterBottom variant="body2" color="primary">
                  주소
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="body1">
                  {csmrDetailInfo?.rdnmAdr}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* 구분선 */}
          <Divider orientation="vertical" flexItem></Divider>
          <Grid item sx={{ ml: 2 }} xs>
            <Grid container>
              <Grid item xs={12}>
                <Typography gutterBottom variant="body2" color="primary">
                  직장정보
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="body1">
                  {csmrDetailInfo?.wkplNm} / {csmrDetailInfo?.poaNm}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="body2" color="primary">
                  결혼여부
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="body1">
                  {csmrDetailInfo?.mariYn}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="body2" color="primary">
                  가족형태
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {csmrDetailInfo?.famTypCd === "1" ? (
                  <Typography gutterBottom variant="body1">
                    4인가족
                  </Typography>
                ) : (
                  <Typography gutterBottom variant="body1">
                    1인가족
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="body2" color="primary">
                  이전CRM차종코드
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {csmrDetailInfo?.csmrPreCarCd ? (
                  <Typography gutterBottom variant="body1">
                    {csmrDetailInfo?.csmrPreCarCd}
                  </Typography>
                ) : (
                  <Typography gutterBottom variant="body1">
                    없음
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="body2" color="primary">
                  차량보유대수
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="body1">
                  {csmrDetailInfo?.carHldgCnt}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="body2" color="primary">
                  차량교체주기
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="body1">
                  {csmrDetailInfo?.carChngPrd}일
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid container spacing={2}></Grid>
        <Divider sx={{ mt: 3, mb: 3 }} />
        <Grid container spacing={2}></Grid> */}
      </DialogContent>
    </Dialog>
  );
}
