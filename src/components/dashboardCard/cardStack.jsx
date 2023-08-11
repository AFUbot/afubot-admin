import React from "react";
import DashboardCard from "./dashboardCard";
import Box from "@mui/material/Box";
import colorPalette from "../../utils/colorPalette";

import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import PublishedWithChangesOutlinedIcon from "@mui/icons-material/PublishedWithChangesOutlined";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import DeckOutlinedIcon from "@mui/icons-material/DeckOutlined";

import SmartToyIcon from "@mui/icons-material/SmartToy";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const CardStack = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        marginTop: "20px",
      }}
    >
      <DashboardCard
        title="Orders in Progress"
        heading="20"
        subtitle="27 Completed Today"
        icon={<PublishedWithChangesOutlinedIcon />}
        bg={colorPalette().AFULightBlue}
        color={colorPalette().AFUBlue}
      ></DashboardCard>
      <DashboardCard
        title="Active Restaurants"
        heading="10"
        subtitle="8 open"
        icon={<DeckOutlinedIcon />}
        bg={colorPalette().black}
      ></DashboardCard>
      <DashboardCard
        title="Total Bots"
        heading="3"
        subtitle="2 online"
        icon={<SmartToyOutlinedIcon />}
        bg={colorPalette().AFULightPurple}
        color={colorPalette().AFUPurple}
      ></DashboardCard>
      <DashboardCard
        title="Total Orders Completed"
        heading="234"
        icon={<DoneAllIcon />}
        bg={colorPalette().AFULightSuccess}
        color={colorPalette().AFUSuccess}
      ></DashboardCard>
    </Box>
  );
};

export default CardStack;
