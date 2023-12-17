/*
메일 모달
@author 조혜안
@since 2023.11.25
*/
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  ListItem,
  ListItemText,
  ListSubheader,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import dummyCarInfoList from "api/dummyCarInfoList";
import carImg from "assets/car_image.png";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { atomIsMailModal } from "recoil/atomIsMailModal";
import { atomSelectedCsmr, atomSelectedCsmrNm } from "recoil/atomSelectedCsmr";
import CarInfoType from "types/CarInfoType";
import { http } from "api/http";
import CsmrDetailInfoType from "types/CsmrDetailInfoType";

import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
//  import Button from '@mui/material/Button';

export default function MailModal() {
  const [open, setOpen] = React.useState(false);

  const csmrMgmtNo = useRecoilValue(atomSelectedCsmr);
  const csmrNm = useRecoilValue(atomSelectedCsmrNm);
  const [isMailModal, setIsMailModal] = useRecoilState(atomIsMailModal);

  const [csmrDetailInfo, setCsmrDetailInfo] = useState<CsmrDetailInfoType>();
  const [carInfo, setCarInfo] = useState<CarInfoType>();

  // 회원상세정보 API
  async function getCustomer() {
    const response = await http.get(`/customers/info/${csmrMgmtNo}`);
    console.log("회원상세정보 받아오기");
    console.log(response.data);
    setCsmrDetailInfo(response.data);
  }

  // 기존추천차량정보 받아오기 API
  async function getOriginalCarInfo() {
    const response = await http.get(`/crmcRecCarRelInfo/${csmrMgmtNo}`);
    console.log("회원의 추천차량정보 받아오기");
    console.log(response.data);
    setCarInfo(response.data);
  }

  // chatGPT한테 추천받기 API
  async function getNewCarInfo() {
    setOpen(true);
    const response = await http.post(
      `/question`,
      JSON.stringify({
        csmrMgmtNo: csmrMgmtNo,
        rdnmAdr: csmrDetailInfo?.rdnmAdr,
        sexCd: csmrDetailInfo?.sexCd,
        csmrTymdNo: csmrDetailInfo?.csmrTymdNo,
        mariYn: csmrDetailInfo?.mariYn,
        csmrChtSpsn: csmrDetailInfo?.csmrChtSpsn,
      })
    );
    console.log("추천차량정보 받아오기");
    console.log(response.data);
    setCarInfo(response.data);
    setOpen(false);
  }

  // 추천메일발송 API
  async function sendEmail() {
    const response = await http.get(`/email/template/${csmrMgmtNo}`);
    console.log(response.data);
  }

  useEffect(() => {
    csmrMgmtNo && getOriginalCarInfo();
    csmrMgmtNo && getCustomer();
  }, [csmrMgmtNo]);

  return (
    <>
      <Dialog
        open={isMailModal}
        onClose={() => setIsMailModal(false)}
        fullWidth={true}
        maxWidth="md"
      >
        <DialogContent>
          <Grid container spacing={2} padding={2}>
            <Grid item xs={6} sx={{ mb: 2 }}>
              <Typography
                variant="subtitle1"
                // sx={{ display: "flex", justifyContent: "center" }}
              >
                {csmrNm} 고객의 추천 차량.
              </Typography>
              <Typography
                variant="h4"
                // sx={{ display: "flex", justifyContent: "center" }}
              >
                {carInfo?.carNm}
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ mb: 2, textAlign: "end" }}>
              <Button
                variant="contained"
                sx={{ mr: 2 }}
                onClick={getNewCarInfo}
              >
                다시 추천받기
              </Button>
              <Button variant="contained" onClick={sendEmail}>
                메일 발송하기
              </Button>
            </Grid>

            <Grid item xs={6} sx={{ textAlign: "center" }}>
              <img src={carImg} width="100%" alt="carImage" />
            </Grid>
            <Grid item xs={6} sx={{ p: 3 }}>
              <Grid container spacing={2.5}>
                <Grid item xs={5}>
                  차종대표코드
                </Grid>
                <Grid item xs={7}>
                  차종대표코드
                </Grid>
                <Grid item xs={5}>
                  연료
                </Grid>
                <Grid item xs={7}>
                  연료
                </Grid>
                <Grid item xs={5}>
                  연비
                </Grid>
                <Grid item xs={7}>
                  연비
                </Grid>
                <Grid item xs={5}>
                  추천이유
                </Grid>
                <Grid item xs={7}>
                  {carInfo?.recDesc}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <div>
        {/* <Button>Show backdrop</Button> */}
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 999 }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </>
  );
}
