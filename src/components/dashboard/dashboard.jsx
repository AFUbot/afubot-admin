import React from "react";
import RobotTable from "../dashboardTable/dashboardTable";
import CardStack from "../dashboardCard/cardStack";
import SideBar from "../sidebar/sidebar/sidebar";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Box className="container">
      <RobotTable></RobotTable>
      <CardStack></CardStack>
    </Box>
  );
};

export default Dashboard;
