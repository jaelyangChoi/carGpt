/*
회원목록 페이지
@author 조혜안
@since 2023.11.13
*/
import React, { useEffect, useMemo } from "react";
import { Container, Grid } from "@mui/material";
import logoText from "assets/logo_text.png";

//MRT Imports
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";

//Material UI Imports
import {
  Box,
  Button,
  ListItemIcon,
  MenuItem,
  Typography,
  lighten,
} from "@mui/material";

//Icons Imports
import { AccountCircle, Send } from "@mui/icons-material";

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
    CsmrMgmtNo: "A2023123123123",
    EmlAdr: "ha.Cho@hyundai-autoever.com",
    CsmrTymdNo: "1997-01-17",
    SexCd: "여",
  },
];

const Example = () => {
  const columns = useMemo<MRT_ColumnDef<Data>[]>(
    () => [
      {
        accessorKey: "CsmrMgmtNo", //access nested data with dot notation
        header: "CsmrMgmtNo",
        size: 150,
      },
      {
        accessorKey: "EmlAdr",
        header: "EmlAdr",
        size: 150,
      },
      {
        accessorKey: "CsmrTymdNo", //normal accessorKey
        header: "CsmrTymdNo",
        size: 200,
      },
      {
        accessorKey: "SexCd",
        header: "SexCd",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    // enableColumnFilterModes: true,
    // enableColumnOrdering: true,
    // enableGrouping: true,
    // enableColumnPinning: true,
    // enableFacetedValues: true,
    // enableRowActions: true,
    // enableRowSelection: true,
    // initialState: { showColumnFilters: true, showGlobalFilter: true },
    // paginationDisplayMode: "pages",
    // positionToolbarAlertBanner: "bottom",
    // muiSearchTextFieldProps: {
    //   size: "small",
    //   variant: "outlined",
    // },
    // muiPaginationProps: {
    //   color: "secondary",
    //   rowsPerPageOptions: [10, 20, 30],
    //   shape: "rounded",
    //   variant: "outlined",
    // },
    // renderDetailPanel: ({ row }) => (
    //   <Box
    //     sx={{
    //       display: "flex",
    //       justifyContent: "space-around",
    //       alignItems: "center",
    //     }}
    //   >
    //     {/* <img
    //       alt="avatar"
    //       height={200}
    //       src={row.original.avatar}
    //       loading="lazy"
    //       style={{ borderRadius: "50%" }}
    //     /> */}
    //     <Box sx={{ textAlign: "center" }}>
    //       <Typography variant="h4">Signature Catch Phrase:</Typography>
    //       {/* <Typography variant="h1">
    //         &quot;{row.original.signatureCatchPhrase}&quot;
    //       </Typography> */}
    //     </Box>
    //   </Box>
    // ),
    // renderRowActionMenuItems: ({ closeMenu }) => [
    //   <MenuItem
    //     key={0}
    //     onClick={() => {
    //       // View profile logic...
    //       closeMenu();
    //     }}
    //     sx={{ m: 0 }}
    //   >
    //     <ListItemIcon>
    //       <AccountCircle />
    //     </ListItemIcon>
    //     View Profile
    //   </MenuItem>,
    //   <MenuItem
    //     key={1}
    //     onClick={() => {
    //       // Send email logic...
    //       closeMenu();
    //     }}
    //     sx={{ m: 0 }}
    //   >
    //     <ListItemIcon>
    //       <Send />
    //     </ListItemIcon>
    //     Send Email
    //   </MenuItem>,
    // ],
    // renderTopToolbar: ({ table }) => {
    //   const handleDeactivate = () => {
    //     table.getSelectedRowModel().flatRows.map((row) => {
    //       alert("deactivating " + row.getValue("name"));
    //     });
    //   };

    //   const handleActivate = () => {
    //     table.getSelectedRowModel().flatRows.map((row) => {
    //       alert("activating " + row.getValue("name"));
    //     });
    //   };

    //   const handleContact = () => {
    //     table.getSelectedRowModel().flatRows.map((row) => {
    //       alert("contact " + row.getValue("name"));
    //     });
    //   };

    //   return (
    //     <Box
    //       sx={(theme) => ({
    //         backgroundColor: lighten(theme.palette.background.default, 0.05),
    //         display: "flex",
    //         gap: "0.5rem",
    //         p: "8px",
    //         justifyContent: "space-between",
    //       })}
    //     >
    //       <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
    //         {/* import MRT sub-components */}
    //         {/* <MRT_GlobalFilterTextField table={table} /> */}
    //         {/* <MRT_ToggleFiltersButton table={table} /> */}
    //       </Box>
    //       <Box>
    //         <Box sx={{ display: "flex", gap: "0.5rem" }}>
    //           <Button
    //             color="error"
    //             disabled={!table.getIsSomeRowsSelected()}
    //             onClick={handleDeactivate}
    //             variant="contained"
    //           >
    //             Deactivate
    //           </Button>
    //           <Button
    //             color="success"
    //             disabled={!table.getIsSomeRowsSelected()}
    //             onClick={handleActivate}
    //             variant="contained"
    //           >
    //             Activate
    //           </Button>
    //           <Button
    //             color="info"
    //             disabled={!table.getIsSomeRowsSelected()}
    //             onClick={handleContact}
    //             variant="contained"
    //           >
    //             Contact
    //           </Button>
    //         </Box>
    //       </Box>
    //     </Box>
    //   );
    // },
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
  // async function getCustomers() {
  //   const response = await http.get(`/customers`);
  //   console.log("sleij");
  //   console.log(response.data);
  // }

  // useEffect(() => {
  //   getCustomers();
  // });

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
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
        <img src={logoText} style={{ width: "80%", margin: "2vh" }} />
        <Divider />
        {/* 드로어 리스트 */}
        <List>
          {["회원목록"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
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
        <Typography paragraph>회원 목록</Typography>
        {/* 회원 목록 테이블 */}
        //App.tsx or AppProviders file
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Example />
        </LocalizationProvider>
      </Box>
    </Box>
  );
}
