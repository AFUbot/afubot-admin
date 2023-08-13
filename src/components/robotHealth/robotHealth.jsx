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

const RobotImage = styled("img")({
  width: "100%",
  height: "auto",
});

const HealthMonitoringPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "-50%",
      }}
      className="bgRobotHealth"
    >
      <Container
        maxWidth="xl"
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
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
                {/* <Card>
                  <CardContent>
                    <BatteryFullIcon fontSize="large" color="primary" />
                    <Typography variant="h6" gutterBottom>
                      Robot Battery
                    </Typography>
                    <Typography variant="subtitle1">80%</Typography>
                  </CardContent>
                </Card> */}
              </Grid>
              <Grid item xs={6}>
                {/* <Card>
                  <CardContent>
                    <GpsFixedIcon fontSize="large" color="primary" />
                    <Typography variant="h6" gutterBottom>
                      GPS Tracking
                    </Typography>
                    <Typography variant="subtitle1">Active</Typography>
                  </CardContent>
                </Card> */}
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
                {/* <Card> */}
                {/* <CardContent>
                    <LocalShippingIcon fontSize="large" color="primary" />
                    <Typography variant="h6" gutterBottom>
                      Delivery Status
                    </Typography>
                    <Typography variant="subtitle1">On Route</Typography>
                  </CardContent> */}
                {/* </Card> */}
                <DashboardCard
                  title="Delivery"
                  icon={<LocalShippingOutlined />}
                  heading="On Route"
                  subtitle="5 hours remaining"
                  bg={colorPalette().AFULightPurple}
                  color={colorPalette().AFUPurple}
                ></DashboardCard>
              </Grid>
              <Grid item xs={6}>
                {/* <Card>
                  <CardContent>
                    <ThermostatIcon fontSize="large" color="primary" />
                    <Typography variant="h6" gutterBottom>
                      Temperature
                    </Typography>
                    <Typography variant="subtitle1">25°C</Typography>
                  </CardContent>
                </Card> */}
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
            <Card sx={{ marginBottom: 2 }}>
              <CardContent>
                <Typography variant="h6">Total Distance Travelled:</Typography>
                <Typography variant="h4" fontWeight="bold">
                  500km
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ marginBottom: 2 }}>
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
                <Typography variant="h6">
                  Total Deliveries Completed:
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                  20
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HealthMonitoringPage;
