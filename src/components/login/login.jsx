import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid, Paper, } from "@mui/material";
import colorPalette from "../../utils/colorPalette";
import "./login.css";

import Logo from "../../assets/logo.jpg";

const Login = () => {
    const gridStyle = {
        background: colorPalette().AFUBlue,
        minHeight: "100vh",
        width: "100vw",
        paddingTop: 70,
    };

    const paperStyle = {
        padding: 20,
        height: "70vh",
        width: 280,
        margin: "auto",
        background: colorPalette().black,
    };

    const textFieldStyle = {
        marginBottom: '1em',
    }

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
                        marginBottom: "2em",
                    }}
                >
                    <img style={{ width: "30%" }} src={Logo} alt="AFUbot logo"></img>
                </Box>
                <Typography
                    style={{ color: colorPalette().white, fontSize: 12, marginBottom: '2em' }}
                >
                    Please enter your user information
                </Typography>
                
                {/* Credential Input */}
                <TextField style={textFieldStyle} placeholder="Enter username" color="primary" fullWidth required />
                <TextField style={textFieldStyle} type="password" placeholder="Enter password" color="primary" fullWidth required />
            </Paper>
        </Grid>
    );
};

export default Login;
