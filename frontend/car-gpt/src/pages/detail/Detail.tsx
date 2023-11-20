/*
회원목록 페이지
@author 조혜안
@since 2023.11.13
*/
import React, { useEffect, useMemo } from "react";
//Material UI Imports
import {
  Container,
  Grid,
  useTheme,
  darken,
  lighten,
  Box,
  Button,
  ListItemIcon,
  MenuItem,
  Typography,
} from "@mui/material";
import logoText from "assets/logo_text.png";

//MRT Imports
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";

//Material UI Imports

//Icons Imports
import { AccountCircle, Send, Edit, MenuOutlined } from "@mui/icons-material";

//Date Picker Imports - these should just be in your Context Provider
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { http } from "api/http";

interface Column {
  id: "CsmrMgmtNo" | "EmlAdr" | "CsmrTymdNo" | "SexCd";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "CsmrMgmtNo", label: "고객관리번호", minWidth: 100 },
  { id: "EmlAdr", label: "이메일", minWidth: 100 },
  { id: "CsmrTymdNo", label: "생년월일", minWidth: 100 },
  { id: "SexCd", label: "성별", minWidth: 100 },
];

type Data = {
  CsmrMgmtNo: string; // 고객관리번호
  SexCd: string; // 성별코드
  CsmrTymdNo: string; // 생년월일
  // TelNum: string; // 휴대폰번호
  // TnUsblScnCd: string; // 휴대폰번호 가용여부
  EmlAdr: string; // 이메일주소
  // EmlUsblScnCd: string; // 이메일주소 가용여부
  // RdnmAdr: string; // 주소
  // RdnmUsblScnCd: string; // 주소 가용여부
  // WkplNm: string; // 직장명
  // OpsNm: string; // 부서명
  // PoaNm: string; // 직위명
  // FamTypCd: string; // 가족유형코드
  // MariYn: string; // 결혼여부
  // CsmrChtSpsn: string; // 자녀수
  // CsmrPreCarCd: string; // 이전차량코드
  // CarHldgCnt: string; // 차량보유대수
  // CarChngPrd: string; // 차량교체주기(일)
  // ExrsEeEeno: string; // 전담사원번호
  // IpeEeno: string; // 입력자사원번호
  // InpDtm: string; // 입력일시
  // ChgrEeno: string; // 변경자사원번호
  // AltrDtm: string; // 변경일시
};

const data: Data[] = [
  {
    CsmrMgmtNo: "A2023123123123",
    EmlAdr: "ha.Cho@hyundai-autoever.com",
    CsmrTymdNo: "1997-01-17",
    SexCd: "여",
  },
  {
    CsmrMgmtNo: "A2023456456456",
    EmlAdr: "ha.Cho@hyundai-autoever.com",
    CsmrTymdNo: "1997-11-22",
    SexCd: "여",
  },
];

const Example = () => {
  const theme = useTheme();

  //light or dark green
  const baseBackgroundColor =
    theme.palette.mode === "dark" ? "#ffffff" : "#ffffff";

  const columns = useMemo<MRT_ColumnDef<Data>[]>(
    () => [
      {
        accessorKey: "CsmrMgmtNo", //access nested data with dot notation
        header: "고객관리번호",
        size: 80,
        muiTableHeadCellProps: { sx: { color: "#00287A", fontSize: "1.7vh" } }, //custom props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>, //optional custom cell render
      },
      {
        accessorKey: "EmlAdr",
        header: "이메일",
        size: 200,
        muiTableHeadCellProps: { sx: { color: "#00287A", fontSize: "1.7vh" } }, //custom props
      },
      {
        accessorKey: "CsmrTymdNo", //normal accessorKey
        header: "생년월일",
        size: 100,
        muiTableHeadCellProps: { sx: { color: "#00287A", fontSize: "1.7vh" } }, //custom props
      },
      {
        accessorKey: "SexCd",
        header: "성별",
        size: 80,
        muiTableHeadCellProps: { sx: { color: "#00287A", fontSize: "1.7vh" } }, //custom props
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    muiTablePaperProps: {
      elevation: 0, //change the mui box shadow
      //customize paper styles
      sx: {
        borderRadius: "0",
      },
    },
    muiTableBodyProps: {
      sx: (theme) => ({
        '& tr:nth-of-type(odd):not([data-selected="true"]):not([data-pinned="true"]) > td':
          {
            backgroundColor: darken(baseBackgroundColor, 0.1),
          },
        '& tr:nth-of-type(odd):not([data-selected="true"]):not([data-pinned="true"]):hover > td':
          {
            backgroundColor: darken(baseBackgroundColor, 0.2),
          },
        '& tr:nth-of-type(even):not([data-selected="true"]):not([data-pinned="true"]) > td':
          {
            backgroundColor: lighten(baseBackgroundColor, 0.1),
          },
        '& tr:nth-of-type(even):not([data-selected="true"]):not([data-pinned="true"]):hover > td':
          {
            backgroundColor: darken(baseBackgroundColor, 0.2),
          },
      }),
    },
    mrtTheme: (theme) => ({
      baseBackgroundColor: baseBackgroundColor,
      draggingBorderColor: theme.palette.secondary.main,
    }),
    enableRowActions: true,
    enableColumnActions: false,
    displayColumnDefOptions: {
      "mrt-row-actions": {
        header: "",
        size: 30,
      },
    },
    positionActionsColumn: "last",
    renderRowActions: ({ row }) => (
      <Box>
        <IconButton onClick={() => console.log(row.original.CsmrMgmtNo)}>
          <MailIcon />
        </IconButton>
      </Box>
    ),
    renderRowActionMenuItems: ({ row }) => [
      <MenuItem key="email" onClick={() => console.info("email")}>
        추천메일 발송
      </MenuItem>,
      <MenuItem key="detail" onClick={() => console.info("detail")}>
        회원 상세정보
      </MenuItem>,
    ],
  });

  return <MaterialReactTable table={table} />;
};

export default function Detail() {
  const drawerWidth = 240;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // 전체 회원 목록 조회
  async function getCustomers() {
    const response = await http.get(`/customers`);
    console.log("회원목록 받아오기");
    console.log(response.data);
  }

  useEffect(() => {
    getCustomers();
  });

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div id="container">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* 드로어 */}
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <img src={logoText} style={{ width: "70%", margin: "3vh" }} />
          <Divider />
          {/* 드로어 리스트 */}
          <List>
            {["회원 목록"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? (
                      <MenuOutlined color="primary" />
                    ) : (
                      <MailIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Typography
            variant="h5"
            color="secondary"
            sx={{
              marginBottom: 2,
            }}
          >
            회원 목록
          </Typography>
          {/* 회원 목록 테이블 */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Example />
          </LocalizationProvider>
        </Box>
      </Box>
    </div>
  );
}
