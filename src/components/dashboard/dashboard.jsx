import React from "react";
import RobotTable from "../dashboardTable/dashboardTable";
import CardStack from "../dashboardCard/cardStack";
import SideBar from "../sidebar/sidebar/sidebar";
import { Box, Grid } from "@mui/material";
import RobotHoursLineChart from "../robotHealth/allRobotsLC";

const Dashboard = () => {
  return (
    <Box className="container">
      <RobotTable></RobotTable>
      <CardStack></CardStack>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <RobotHoursLineChart></RobotHoursLineChart>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
