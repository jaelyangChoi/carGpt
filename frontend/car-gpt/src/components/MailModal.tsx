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
import { atomSelectedCsmr } from "recoil/atomSelectedCsmr";
import CarInfoType from "types/CarInfoType";
import { http } from "api/http";

export default function MailModal() {
  const csmrMgmtNo = useRecoilValue(atomSelectedCsmr);
  const [isMailModal, setIsMailModal] = useRecoilState(atomIsMailModal);

  const [carInfoList, setCarInfoList] = useState<CarInfoType[]>([]);

  async function getCars() {
    const response = await http.get(`/crmcRecCarRelInfo/${csmrMgmtNo}`);
    console.log("회원의 추천차량정보 받아오기");
    console.log(response.data);
  }

  // chatGPT한테 추천받기 API 연동
  // async function getRecoCar() {
  //   const response = await http.post(`/question`, null, {
  //     params: {
  //       csmrMgmtNo: "1",
  //       rdnmAdr: "asdfasdf",
  //       sexCd: "1",
  //       csmrTymdNo: "19840527",
  //       mariYn: "1",
  //       csmrChtSpsn: "2",
  //     },
  //   });
  //   console.log("추천차량정보 받아오기");
  //   console.log(response.data);
  // }

  useEffect(() => {
    csmrMgmtNo && getCars();
  }, [csmrMgmtNo]);

  return (
    <Dialog
      open={isMailModal}
      onClose={() => setIsMailModal(false)}
      fullWidth={true}
      maxWidth="md"
    >
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <Typography
              variant="subtitle1"
              // sx={{ display: "flex", justifyContent: "center" }}
            >
              추천 차량.
            </Typography>
            <Typography
              variant="h4"
              // sx={{ display: "flex", justifyContent: "center" }}
            >
              차량이름
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "center" }}>
            <img src={carImg} width="100%" alt="carImage" />
          </Grid>
          <Grid item xs={6} sx={{ p: 3 }}>
            <Grid container spacing={2.5}>
              <Grid item xs={5}>
                차종아이디
              </Grid>
              <Grid item xs={7}>
                차종아이디
              </Grid>
              <Divider />
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
                추천이유
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "center", mb: 2 }}
      >
        <Button variant="contained">메일 발송하기</Button>
      </DialogActions>
    </Dialog>
  );
}
