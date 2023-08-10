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
  palette: {
    primary: {
      main: "#919EAB",
    },
    divider: {
      background: "#FFFFFF",
    },
    components: {
      // Name of the component
      listItemText: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            fontSize: "21rem",
          },
        },
      },
    },
  },
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
