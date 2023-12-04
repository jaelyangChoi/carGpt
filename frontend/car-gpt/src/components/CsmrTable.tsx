/*
회원목록 테이블
@author 조혜안
@since 2023.11.25
*/
import { useEffect, useState } from "react";
import { http } from "api/http";
import CsrmrInfoType from "types/CsmrInfoType";

//Table 라이브러리
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSetRecoilState } from "recoil";
import { atomIsCsmrModal } from "recoil/atomIsCsmrModal";
import { atomIsMailModal } from "recoil/atomIsMailModal";
import { atomSelectedCsmr } from "recoil/atomSelectedCsmr";
import CsmrDetailInfoType from "types/CsmrDetailInfoType";
import { Chip, IconButton } from "@mui/material";
import dummyCsmrDetailInfoList from "api/dummyCsmrDetailInfo";
import MailModal from "./MailModal";
import CsmrModal from "./CsmrModal";
import { Mail } from "@mui/icons-material";

interface CsmrTableProps {
  csmrInfoList: CsrmrInfoType[];
}

const CsmrTable = ({ csmrInfoList }: CsmrTableProps) => {
  const setSelectedCsmr = useSetRecoilState(atomSelectedCsmr);
  const setIsCsmrModal = useSetRecoilState(atomIsCsmrModal);
  const setIsMailModal = useSetRecoilState(atomIsMailModal);

  const columns = [
    "고객관리번호",
    "고객명",
    "이메일수신여부",
    "입력일시",
    "추천메일 발송",
  ];

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
        {/*테이블 컬럼*/}
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                sx={{ fontSize: "15px", color: "#00287A" }}
                align="center"
              >
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/*테이블 데이터*/}
        <TableBody>
          {csmrInfoList.map((csmrInfo) => (
            <TableRow
              key={csmrInfo.csmrMgmtNo}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                cursor: "pointer",
              }}
              hover={true}
              onClick={() => {
                setIsCsmrModal(true);
                setSelectedCsmr(csmrInfo.csmrMgmtNo);

                console.log("로우클릭");
              }}
            >
              <TableCell align="center">{csmrInfo.csmrMgmtNo}</TableCell>
              <TableCell align="center">{csmrInfo.csmrNm}</TableCell>
              <TableCell align="center">
                {csmrInfo.telNum ? (
                  <Chip
                    label="수신 동의"
                    size="small"
                    sx={{ fontSize: "11px" }}
                    color="secondary"
                  />
                ) : (
                  <Chip
                    label="수신 미동의"
                    size="small"
                    sx={{ fontSize: "11px" }}
                    variant="outlined"
                  />
                )}
              </TableCell>
              <TableCell align="center">{csmrInfo.inpDtm}</TableCell>
              <TableCell align="center">
                <IconButton
                  aria-label="mail"
                  onClick={(event) => {
                    event.stopPropagation(); // 현재 발생한 이벤트 이후의 이벤트 막기
                    setIsMailModal(true);
                    setSelectedCsmr(csmrInfo.csmrMgmtNo);
                    console.log("메일클릭");
                  }}
                >
                  <Mail sx={{ color: "#00287A" }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CsmrTable;
