/*
사이드바 메뉴
@author 조혜안
@since 2023.11.25
*/
import {
  Drawer,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import logoText from "assets/logo_text.png";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { atomIsLogin } from "recoil/atomIsLogin";

export default function SideBar() {
  const setIsLogin = useSetRecoilState(atomIsLogin);
  const navigate = useNavigate();
  const drawerWidth = 240;

  const sideBarItems = [
    {
      title: "회원목록",
      icon: <MenuIcon />,
      onClick: () => navigate("/"),
    },
    {
      title: "설정",
      icon: <SettingsIcon />,
      onClick: () => navigate("/setting"),
    },
    {
      title: "로그아웃",
      icon: <LogoutIcon />,
      onClick: () => setIsLogin(false),
    },
  ];

  return (
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
      <img
        src={logoText}
        style={{ width: "70%", margin: "3vh" }}
        alt={"logoText"}
      />
      <Divider />
      {/* 드로어 리스트 */}
      <List>
        {sideBarItems.map((sideBarItem, index) => (
          <ListItem key={sideBarItem.title} disablePadding>
            <ListItemButton onClick={sideBarItem.onClick}>
              <ListItemIcon>{sideBarItem.icon}</ListItemIcon>
              <ListItemText primary={sideBarItem.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
