import PropTypes from "prop-types";
import React from "react";

import { ThemeProvider } from "styled-components";


export const theme = {
  colors: {
    white: "#FFFFFF",
    black: "#191919",
    red: "#E03131",
    orange: "#E8590C",
    yellow: "#FCC419",
    green: "#23DB42",
    teal: "#89DD13",
    cyan: "#3BC9DB",
    blue: "#25BEFF",
    indigo: "#4263Eb",
    purple: "#7E5CEF",
    pink: "#FE5895",
    gray100: "#FAFAFA",
    gray200: "#E9ECEF",
    gray300: "#DEE2E6",
    gray400: "#CED4DA",
    gray500: "#A4ACB4",
    gray600: "#64666B",
    gray700: "#424449",
    gray800: "#1D1E21",
    gray900: "#141518",
    primary: "#F83600",
    secondary: "#FE8C00",
    container: "#2d2d2d",
    metalDark: "#7f8c8d",
    metal: "#95a5a6",
    light: "#ecf0f1",
    champagneDark: "#bdc3c7",

  },
  fontFamily: {
    heading: ["IBM Plex Sans", "sans-serif"].join(","),
    sans: ["Open Sans", "Arial", "Helvetica", "sans-serif"].join(","),
    mono: ["IBM Plex Mono", "serif"].join(","),
  },
  fontSize: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: "1200px",
    large: '1.2rem',
    title: "1.25rem",
    subtitle: "1rem",
    small: '.8rem',
    normal: '1rem',
  },
};

export function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};
