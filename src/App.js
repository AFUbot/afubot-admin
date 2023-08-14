import "./App.css";
import SideBar from "./components/sidebar/sidebar/sidebar";
import { createTheme, colors, Box } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/login/login";
import HealthMonitoringPage from "./components/robotHealth/robotHealth";
import { useEffect, useState } from "react";
import Dashboard from "./components/dashboard/dashboard";
import GpsPanel from "./components/gps/gpsTrack";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter"].join(","),
    fontSize: 12,
  },
});

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = (val) => {
    setLoggedIn(val);
  };
  useEffect(() => {
    console.log(loggedIn); // This will log the updated value of loggedIn
  }, [loggedIn]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        {loggedIn ? (
          <SideBar toggleLogin={login}></SideBar>
        ) : (
          <Navigate to="/login" />
        )}

        <Routes>
          <Route path="/gps" element={<GpsPanel />} />
          <Route path="/login" element={<Login toggleLogin={login}></Login>} />
          <Route path="/health/:id" element={<HealthMonitoringPage />} />
          <Route path="/" element={<Dashboard></Dashboard>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
