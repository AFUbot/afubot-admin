import React from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const DashboardCard = (props) => {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        padding: "16px",
        marginBottom: "16px",
        width: "100%",
        marginRight: "10px",
        minHeight: "180px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5" gutterBottom>
          {props.title}
        </Typography>
        <Avatar sx={{ backgroundColor: props.bg, color: props.color }}>
          {props.icon}
        </Avatar>
      </Box>
      <Typography fontWeight="bold" variant="h4" gutterBottom>
        {props.heading}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {props.subtitle}
      </Typography>
      <Typography variant="body1">{props.content}</Typography>
    </Card>
  );
};

export default DashboardCard;
