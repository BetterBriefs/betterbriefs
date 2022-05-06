import { createTheme } from "@mui/material/styles";
import OpenSans from "./fonts/OpenSans-Regular.ttf";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FABE00"
    },
    secondary: {
      main: "#74C6BE"
    },
    info: {
      main: "#1F7A83"
    }
  },
  typography: {
    fontFamily: "Open Sans"
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'OpenSans';
          src: local('Open Sans'), local('Open Sans-Regular'), url(${OpenSans}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          fontSize: "1rem"
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#1f7a83",
          padding: "3em",
          fontWeight: "800",
          textAlign: "center",
          textTransform: "uppercase"
        }
      }
    }
  }
});
