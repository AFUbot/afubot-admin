import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Chip,
} from "@mui/material";

import LinkedCameraIcon from "@mui/icons-material/LinkedCamera";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import colorPalette from "../../utils/colorPalette";
import CircleIcon from "@mui/icons-material/Circle";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const robots = [
  {
    robotName: "Robot A",
    status: "Online",
    lastUpdate: "2023-08-10 10:30AM",
    battery: 50,
  },
  {
    robotName: "Robot B",
    status: "Offline",
    lastUpdate: "N/A",
    battery: 100,
  },
  {
    robotName: "Robot C",
    status: "Online",
    lastUpdate: "2023-08-10 10:25AM",
    battery: 20,
  },
];

// const detBatteryColor = (val) => {
//   if (val > 60) {
//     return "success";
//   } else if (val < 60 && val > 40) {
//     return "warning";
//   } else return "danger";
// };

const RobotTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Robot Table">
        <TableHead>
          <TableRow>
            <TableCell>Robot Name</TableCell>
            <TableCell>Camera View</TableCell>
            <TableCell>Live Tracking</TableCell>
            <TableCell>Health Check</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Last Update</TableCell>
            <TableCell>Battery</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {robots.map((robot) => (
            <TableRow key={robot.robotName}>
              <TableCell>{robot.robotName}</TableCell>
              <TableCell>
                <Button
                  sx={{
                    borderRadius: 12,
                    backgroundColor: colorPalette().AFUPurple,
                  }}
                  variant="contained"
                >
                  <LinkedCameraIcon></LinkedCameraIcon>
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  sx={{
                    borderRadius: 12,
                    backgroundColor: colorPalette().AFUBlue,
                  }}
                  variant="contained"
                >
                  <LocationOnIcon></LocationOnIcon>
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  sx={{
                    borderRadius: 12,
                    backgroundColor: colorPalette().AFUSuccess,
                  }}
                  variant="contained"
                >
                  <LocalHospitalIcon></LocalHospitalIcon>
                </Button>
              </TableCell>
              <TableCell>
                <CircleIcon
                  sx={{
                    borderRadius: 12,
                    backgroundColor: colorPalette().white,
                    color:
                      robot.status === "Online"
                        ? colorPalette().AFUSuccess
                        : colorPalette().AFUGrey,
                  }}
                ></CircleIcon>
              </TableCell>
              <TableCell>{robot.lastUpdate}</TableCell>
              <TableCell>
                <LinearProgress variant="buffer" value={robot.battery} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RobotTable;
