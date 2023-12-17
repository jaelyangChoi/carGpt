/*
회원목록 페이지 router
@author 조혜안
@since 2023.11.25
*/
import { Stack, Typography } from "@mui/material";
import SideBar from "components/SideBar";
import Home from "pages/Home";
import Setting from "pages/Setting";
import { Routes, Route, useLocation } from "react-router-dom";

function HomeRouter() {
  const { pathname } = useLocation();
  const titleInfoList = [
    {
      pathname: "/",
      title: "회원목록",
    },
    {
      pathname: "/setting",
      title: "설정",
    },
  ];

  return (
    <>
      <Stack direction="row">
        <SideBar />
        <Stack sx={{ width: "100%", p: 4 }}>
          <Typography sx={{ mb: 4 }} variant="h4">
            {
              titleInfoList.find(
                (titleInfo) => titleInfo.pathname === pathname
              )!.title
            }
          </Typography>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </Stack>
      </Stack>
    </>
  );
}

export default HomeRouter;
