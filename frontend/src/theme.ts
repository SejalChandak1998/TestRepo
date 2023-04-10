import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    darkGrey: string;
    background: string;
    lightGrey: string;
    offWhite: string;
    green: string;
  }
}

export const theme = extendTheme({
  typography: {
    allVariants: {
      fontFamily: "Roboto",
      textTransform: "none",
      fontSize: 14,
      fontWeight: 400,
      lineHeight: "17px",
    },
    button: {
      textTransform: "none",
    },
  },
  colorSchemes: {
    light: {
      palette: {
        common: {
          black: "#000",
          white: "#fff",
          lightGrey: "#474747",
          darkGrey: "#555",
          offWhite: "#F5F5F5",
          background: "#f5f6fe",
          green: "#27C59A",
        },
        primary: {
          main: "#2064B6",
          contrastText: "#fff",
        },
        secondary: {
          main: "#27C59A",
          contrastText: "#fff",
        },
      },
    },
  },
});

export type Theme = typeof theme;
