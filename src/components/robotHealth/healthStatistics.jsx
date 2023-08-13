import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import LineCh from "./lineChart";
import HoursOperatedBarChart from "./barChart";
import RestaurantPieChart from "./pieChart";

const healthStatistics = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "20vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card sx={{ width: "80%", padding: 8, borderRadius: 5 }}>
        <Grid container spacing={5} sx={{ width: "100%", minHeight: "50vh" }}>
          <Grid item xs={12} lg={6}>
            <LineCh></LineCh>
          </Grid>
          <Grid item xs={12} lg={6}>
            <HoursOperatedBarChart></HoursOperatedBarChart>
          </Grid>
          <Grid item xs={12} lg={12}>
            <RestaurantPieChart></RestaurantPieChart>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default healthStatistics;
