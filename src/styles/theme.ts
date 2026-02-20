import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeBackground {
    overlay?: string;
  }

  interface PaletteOptions {
    background?: Partial<TypeBackground>;
  }
}

const breakpoints = { xs: 0, sm: 560, md: 960, lg: 1200, xl: 1536 };

const primary = {
  light: "hsl(196, 61%, 55%)",
  main: "hsl(196, 59%, 40%)",
  dark: "hsl(196, 59%, 20%)",
};

const background = {
  default: "hsl(70, 20%, 95%)",
  paper: "hsl(50, 15%, 92%)",
  overlay: "hsl(196, 59%, 90%)",
};

const text = { primary: "hsl(196 59% 5%)" };

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: primary,
    background: background,
    text: text,
  },
  typography: {
    fontFamily: '"Vend Sans", sans-serif',
    fontWeightRegular: 400,
    fontSize: 16,
    body1: { fontSize: 16, lineHeight: 1.65, marginBottom: 24 },
    body2: { fontSize: 14, lineHeight: 1.5, textAlign: "center" },
    h1: {
      fontFamily: '"Amatic SC", sans-serif',
      fontWeight: 700,
      fontSize: 48,
      lineHeight: 1,
      letterSpacing: 2,
      color: primary.light,
      WebkitTextStroke: `1.5px ${primary.light}`,
      textAlign: "center",

      [`@media (min-width:${breakpoints.xs}px)`]: {
        fontSize: 48,
        WebkitTextStroke: `1px ${primary.light}`,
      },
      [`@media (min-width:${breakpoints.sm}px)`]: {
        fontSize: 60,
        WebkitTextStroke: `1px ${primary.light}`,
      },
      [`@media (min-width:${breakpoints.md}px)`]: {
        fontSize: 74,
      },
      [`@media (min-width:${breakpoints.lg}px)`]: {
        fontSize: 90,
      },
      [`@media (min-width:${breakpoints.xl}px)`]: {
        fontSize: 112,
      },
    },
    h2: {
      fontFamily: '"Amatic SC", sans-serif',
      fontWeight: 700,
      fontSize: 40,
      lineHeight: 0.9,
      color: primary.main,
      textAlign: "center",
      marginBottom: 20,
      WebkitTextStroke: `0.5px ${primary.light}`,

      // [`@media (min-width:${breakpoints.xs}px)`]: {
      //   fontSize: 48,
      // },
      // [`@media (min-width:${breakpoints.sm}px)`]: {
      //   fontSize: 52,
      // },
      // [`@media (min-width:${breakpoints.md}px)`]: {
      //   fontSize: 66,
      // },
      // [`@media (min-width:${breakpoints.lg}px)`]: {
      //   fontSize: 80,
      // },
      // [`@media (min-width:${breakpoints.xl}px)`]: {
      //   fontSize: 90,
      // },
    },
    h6: { fontSize: 16, fontWeight: 600, lineHeight: 1.65, marginBottom: 8 },
    subtitle1: {
      textAlign: "center",
      fontSize: 24,
      fontWeight: 300,
      lineHeight: 1.6,
    },
    subtitle2: {
      fontFamily: '"Amatic SC", sans-serif',
      textAlign: "center",
      fontSize: 22,
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: breakpoints,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          boxShadow: "none",
          borderRadius: 4,
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.background.default,
          textTransform: "none",
          fontWeight: 700,
          "&:hover": {
            boxShadow: "none",
            backgroundColor: theme.palette.primary.main,
          },
        }),
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.1), 0px 4px 5px 0px rgba(0,0,0,0.10), 0px 1px 10px 0px rgba(0,0,0,0.08)",
        },
      },
    },
    MuiLink: {
      styleOverrides: { root: { fontWeight: 700, cursor: "pointer" } },
    },
  },
});

export { lightTheme };
