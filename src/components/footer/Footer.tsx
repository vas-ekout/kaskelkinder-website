import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useGetPagePadding } from "../../hooks/useGetPagePadding";
import HeaderBg from "../../assets/imgs/header-bg.png";

export const Footer = () => {
  const { pagePadding } = useGetPagePadding();
  const { breakpoints } = useTheme();
  const isSmallScreen = useMediaQuery(breakpoints.down("sm"));

  const footerTextSx = { fontSize: isSmallScreen ? 18 : 20 };

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: 200,
        paddingInline: pagePadding,
        paddingBottom: 3,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${HeaderBg})`,
          backgroundSize: "1960px 190px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          opacity: 0.8,
          rotate: "180deg",
          zIndex: -1,
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          alignItems: "center",
          gap: isSmallScreen ? 0 : 2,
          justifyContent: "center",
          textWrap: "pretty",
        }}
      >
        <Typography variant="subtitle2" sx={footerTextSx}>
          © 2026 Kinderladen Kaskelkinder e.V.
        </Typography>
        {!isSmallScreen && <Divider orientation="vertical" flexItem />}
        <Typography variant="subtitle2" sx={footerTextSx}>
          Impressum / Datenschutzerklärung
        </Typography>
      </Box>
    </Box>
  );
};
