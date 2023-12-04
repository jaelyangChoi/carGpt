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
import Carousel from "react-material-ui-carousel";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";

export default function MailModal() {
  const csmrMgmtNo = useRecoilValue(atomSelectedCsmr);
  const [isMailModal, setIsMailModal] = useRecoilState(atomIsMailModal);

  const [carInfoList, setCarInfoList] = useState<CarInfoType[]>([]);

  async function getCars() {
    const data = dummyCarInfoList();
    setCarInfoList(data);
    console.log(data);
  }

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
        <Carousel
          navButtonsProps={{
            style: {
              color: "#00287A",
              backgroundColor: "#ffffff",
            },
          }}
          NextIcon={<ArrowForwardIosRounded />}
          PrevIcon={<ArrowBackIosRounded />}
          sx={{ pl: 10, pr: 10 }}
          //   cycleNavigation={false}
          navButtonsAlwaysVisible={true}
          autoPlay={false}
          indicators={false}
        >
          {carInfoList.map((carInfo, index) => (
            <>
              <Grid container spacing={2}>
                <Grid item xs={12} sx={{ mb: 2 }}>
                  <Typography
                    variant="subtitle1"
                    // sx={{ display: "flex", justifyContent: "center" }}
                  >
                    추천 차량 {index + 1}.
                  </Typography>
                  <Typography
                    variant="h4"
                    // sx={{ display: "flex", justifyContent: "center" }}
                  >
                    {carInfo.carNm}
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: "center" }}>
                  <img src={carImg} width="100%" alt="carImage" />
                </Grid>
                <Grid item xs={6} sx={{ p: 3 }}>
                  <Grid
                    container
                    spacing={2.5}
                    // sx={{
                    //   textAlign: "center",
                    //   alignItems: "center",
                    //   justifyItems: "center",
                    // }}
                  >
                    <ListItem>asleiflj</ListItem>
                    <ListItemText>sleifja</ListItemText>
                    <Grid item xs={5}>
                      차종아이디
                    </Grid>
                    <Grid item xs={7}>
                      {carInfo.carId}
                    </Grid>
                    <Divider />
                    <Grid item xs={5}>
                      차종대표코드
                    </Grid>
                    <Grid item xs={7}>
                      {carInfo.crmVehlCd}
                    </Grid>
                    <Grid item xs={5}>
                      연료
                    </Grid>
                    <Grid item xs={7}>
                      {carInfo.fuel}
                    </Grid>
                    <Grid item xs={5}>
                      연비
                    </Grid>
                    <Grid item xs={7}>
                      {carInfo.fuelEffic}
                    </Grid>
                    <Grid item xs={5}>
                      추천이유
                    </Grid>
                    <Grid item xs={7}>
                      {carInfo.reason}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </>
          ))}
        </Carousel>
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
