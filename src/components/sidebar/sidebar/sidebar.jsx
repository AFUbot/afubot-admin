import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MailIcon from "@mui/icons-material/Mail";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import colorPalette from "../../../utils/colorPalette";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import Logo from "../../../assets/logo.jpg";
import RobotTable from "../../dashboardTable/dashboardTable";
import DashboardCard from "../../dashboardCard/dashboardCard";
import CardStack from "../../dashboardCard/cardStack";
import HealthMonitoringPage from "../../robotHealth/robotHealth";

const drawerWidth = 240;

export default function SideBar() {
  return (
    <Box className="SideBar" sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: "primary",
        }}
      >
        <Toolbar sx={{ backgroundColor: colorPalette().AFUBlue }}></Toolbar>
      </AppBar>
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
        <Box
          sx={{
            backgroundColor: colorPalette().black,
            height: "100vh",
            color: colorPalette().AFUGrey,
          }}
        >
          <Box
            sx={{
              height: "5vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "-60px",
            }}
          >
            <img style={{ width: "50%" }} src={Logo}></img>
          </Box>
          <Toolbar />
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: colorPalette().AFUGrey }}>
                  <HomeOutlinedIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography>Dashboard</Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>

          <Typography variant="overline">CONTROLS</Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: colorPalette().AFUGrey }}>
                  <CameraAltOutlinedIcon />
                </ListItemIcon>
                <ListItemText>Camera View</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: colorPalette().AFUGrey }}>
                  <RoomOutlinedIcon />
                </ListItemIcon>
                <ListItemText>Live Robot Tracking</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: colorPalette().AFUGrey }}>
                  <LocalHospitalOutlinedIcon />
                </ListItemIcon>
                <ListItemText>Robot Health Check</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>

          <List>
            <Typography variant="overline">PAGES</Typography>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: colorPalette().AFUGrey }}>
                  <RestaurantMenuOutlinedIcon />
                </ListItemIcon>
                {/* <Typography fontSize={15}>Dashboard</Typography> */}
                <ListItemText>Restaurant List</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: colorPalette().AFURed }}>
                  <LogoutOutlinedIcon />
                </ListItemIcon>
                <Typography color={colorPalette().AFURed}>Log Out</Typography>
                {/* <ListItemText>Log Out</ListItemText> */}
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        {/* <Toolbar />
        <RobotTable></RobotTable>
        <CardStack></CardStack> */}
        <HealthMonitoringPage></HealthMonitoringPage>
      </Box>
    </Box>
  );
}
