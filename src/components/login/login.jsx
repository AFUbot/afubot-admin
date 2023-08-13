import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Grid, Paper } from "@mui/material";
import colorPalette from "../../utils/colorPalette";
import "./login.css";

import Logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

const Login = (props) => {
  const gridStyle = {
    background: colorPalette().AFUBlue,
    minHeight: "100vh",
    width: "100vw",
    paddingTop: 100,
  };

  const paperStyle = {
    padding: 20,
    height: "auto",
    width: "20vw",
    margin: "auto",
    background: colorPalette().black,
  };

  const textFieldStyle = {
    marginBottom: "1em",
  };

  return (
    <Grid style={gridStyle}>
      <Paper elevation={12} style={paperStyle}>
        {/* Logo */}
        <Box
          sx={{
            height: "5vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "3em 0",
          }}
        >
          <img style={{ width: "30%" }} src={Logo} alt="AFUbot logo"></img>
        </Box>
        <Typography
          style={{
            color: colorPalette().white,
            // fontSize: 12,
            marginBottom: "2em",
          }}
        >
          Please enter your user information
        </Typography>

        {/* Form Input Start*/}
        <TextField
          style={textFieldStyle}
          placeholder="Enter username"
          color="primary"
          fullWidth
          required
        />
        <TextField
          style={textFieldStyle}
          type="password"
          placeholder="Enter password"
          color="primary"
          fullWidth
          required
        />
        <FormControlLabel
          control={
            <Checkbox
              // checked={state.checked}
              // onChange={handleChange}
              style={{ color: "white" }}
            />
          }
          label="Remember me"
          style={{ marginBottom: "1em" }}
        />
        <Link to="/" underline="hover" color="white">
          <Button
            type="submit"
            variant="contained"
            style={{
              background: colorPalette().AFUBlue,
              marginBottom: "1em",
            }}
            fullWidth
            onClick={() => props.toggleLogin(true)}
          >
            Sign In
          </Button>
        </Link>
        <Typography style={{ marginBottom: "2em" }}>
          <Link to="/#" underline="hover" color="white">
            Forgot Password
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
