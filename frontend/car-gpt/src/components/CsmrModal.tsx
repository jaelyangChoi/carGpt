/*
회원 상세정보 모달
@author 조혜안
@since 2023.11.25
*/

import {
  Box,
  Divider,
  Grid,
  ListItem,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";
import dummyCsmrDetailInfoList from "api/dummyCsmrDetailInfoList";
import { http } from "api/http";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { atomIsCsmrModal } from "recoil/atomIsCsmrModal";
import { atomSelectedCsmr } from "recoil/atomSelectedCsmr";
import CsmrDetailInfoType from "types/CsmrDetailInfoType";

interface CsmrModalProps {
  csmrDetailInfoList: CsmrDetailInfoType[];
}

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #ffffff",
  borderRaius: 3,
  boxShadow: 24,
  p: 3,
};

export default function CsmrModal({ csmrDetailInfoList }: CsmrModalProps) {
  const csmrMgmtNo = useRecoilValue(atomSelectedCsmr);
  const [isCsmrModal, setIsCsmrModal] = useRecoilState(atomIsCsmrModal);

  // const [csmrDetailInfoList, setCsmrDetailInfoList] = useState<
  //   CsmrDetailInfoType[]
  // >([]);

  // async function getCustomer() {
  //   const data = dummyCsmrDetailInfoList();
  //   setCsmrDetailInfoList(data);
  //   console.log("민아러");
  //   console.log(data);

  //   // const response = await http.get(`/customers/${csmrMgmtNo}`);
  //   // console.log("회원상세정보 받아오기");
  //   // console.log(response.data);
  //   // setCsmrDetailInfoList(response.data);
  // }

  // useEffect(() => {
  //   console.log(csmrMgmtNo);
  //   getCustomer();
  // }, [csmrMgmtNo]);

  return (
    <Modal
      open={isCsmrModal}
      onClose={() => setIsCsmrModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        {/* <div>{csmrDetailInfoList[0].csmrMgmtNo}</div> */}
        {/* <ListItemText
          sx={{ mb: 4 }}
          primary={csmrDetailInfoList[0].csmrMgmtNo}
          secondary={csmrDetailInfoList[0].emlAdr}
        />
        <Grid container spacing={2}>
          <Grid item xs={5}>
            성별
          </Grid>
          <Grid item xs={7}>
            {csmrDetailInfoList[0].sexCd}
          </Grid>
          <Grid item xs={5}>
            생년월일
          </Grid>
          <Grid item xs={7}>
            {csmrDetailInfoList[0].csmrTymdNo}
          </Grid>
          <Grid item xs={5}>
            휴대폰번호
          </Grid>
          <Grid item xs={7}>
            {csmrDetailInfoList[0].telNum}
          </Grid>
          <Grid item xs={5}>
            주소
          </Grid>
          <Grid item xs={7}>
            {csmrDetailInfoList[0].rdnmAdr}
          </Grid>
          <Grid item xs={5}>
            결혼여부
          </Grid>
          <Grid item xs={7}>
            {csmrDetailInfoList[0].mariYn}
          </Grid>
        </Grid>
        <Divider sx={{ mt: 3, mb: 3 }} />
        <Grid container spacing={2}>
          <Grid item xs={5}>
            이전차량코드
          </Grid>
          <Grid item xs={7}>
            {csmrDetailInfoList[0].csmrPreCarCd}
          </Grid>
          <Grid item xs={5}>
            차량보유대수
          </Grid>
          <Grid item xs={7}>
            {csmrDetailInfoList[0].carHldgCnt}
          </Grid>
          <Grid item xs={5}>
            차량교체주기(일)
          </Grid>
          <Grid item xs={7}>
            {csmrDetailInfoList[0].carChngPrd}
          </Grid>
        </Grid> */}
      </Box>
    </Modal>
  );
}
