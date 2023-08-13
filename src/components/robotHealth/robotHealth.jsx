import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ThermostatIcon from "@mui/icons-material/Thermostat";

import dummy from "../../assets/dummy.png";
import colorPalette from "../../utils/colorPalette";
import "./robotHealth.css";
import DashboardCard from "../dashboardCard/dashboardCard";
import {
  BatteryFullOutlined,
  GpsFixedOutlined,
  LocalShippingOutlined,
  ThermostatOutlined,
} from "@mui/icons-material";
import HealthStatistics from "./healthStatistics";

const RobotImage = styled("img")({
  width: "100%",
  height: "auto",
});

const HealthMonitoringPage = () => {
  return (
    <Box className="bgRobotHealth container">
      <Container
        maxWidth="100%"
        sx={{
          minHeight: "80vh",
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography fontWeight="bold" variant="h5" gutterBottom>
              Robot A
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <DashboardCard
                  title="Robot Battery"
                  icon={<BatteryFullOutlined />}
                  heading="80%"
                  subtitle="5 hours remaining"
                  bg={colorPalette().AFULightSuccess}
                  color={colorPalette().AFUSuccess}
                ></DashboardCard>
              </Grid>
              <Grid item xs={6}>
                <DashboardCard
                  title="GPS Tracking"
                  icon={<GpsFixedOutlined />}
                  heading="Active"
                  subtitle={
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: colorPalette().AFUBlue,
                        color: colorPalette().AFULightBlue,
                      }}
                    >
                      Track
                    </Button>
                  }
                  bg={colorPalette().AFULightBlue}
                  color={colorPalette().AFUBlue}
                ></DashboardCard>
              </Grid>
              <Grid item xs={6}>
                <DashboardCard
                  title="Delivery"
                  icon={<LocalShippingOutlined />}
                  heading="On Route"
                  subtitle="21 mins remaining"
                  bg={colorPalette().AFULightPurple}
                  color={colorPalette().AFUPurple}
                ></DashboardCard>
              </Grid>
              <Grid item xs={6}>
                <DashboardCard
                  title="Temperature"
                  icon={<ThermostatOutlined />}
                  heading="45°C"
                  subtitle="Normal"
                  bg={colorPalette().AFULightSuccess}
                  color={colorPalette().AFUSuccess}
                ></DashboardCard>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box className="imgBG">
              <RobotImage src={dummy} alt="Food Delivery Robot" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ marginBottom: 3 }}>
              <CardContent>
                <Typography variant="h6">Total Distance Travelled:</Typography>
                <Typography variant="h4" fontWeight="bold">
                  500km
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ marginBottom: 3 }}>
              <CardContent>
                <Typography variant="h6">
                  Total Deliveries Completed:
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                  20
                </Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography variant="h6">Area coverage</Typography>
                <Typography variant="h4" fontWeight="bold">
                  Area A
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Container>
      <HealthStatistics></HealthStatistics>
    </Box>
  );
};

export default HealthMonitoringPage;
