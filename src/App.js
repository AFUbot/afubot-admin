import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/sidebar/sidebar/sidebar";
import { createTheme, colors } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter"].join(","),
    fontSize: 12,
  },
  // palette: {
  //   divider: {
  //     background: colors.orange[500],
  //   },
  // },
});

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </Router>

      <ThemeProvider theme={theme}>
        <div className="App">{/* <SideBar /> */}</div>
      </ThemeProvider>
    </div>
  );
}

export default App;
