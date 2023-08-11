import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/sidebar/sidebar/sidebar";
import { createTheme, colors } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

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
    <ThemeProvider theme={theme}>
      <div className="App">
        <SideBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
