import { Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import KaskelLogo from "../../assets/imgs/logo_kaskelkinder_300x200.png";
import HeaderBg from "../../assets/imgs/header-bg.png";
import { Navigation } from "./Navigation";
import { useGetPagePadding } from "../../hooks/useGetPagePadding";

export const Header = () => {
  const { pagePadding } = useGetPagePadding();

  return (
    <Box
      component="header"
      sx={{
        position: "relative",
        width: "100%",
        height: 200,
        paddingInline: pagePadding,
        paddingBlock: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
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
          zIndex: -1,
        },
      }}
    >
      <Box component={RouterLink} to="/">
        <img
          src={KaskelLogo}
          style={{ width: 120, zIndex: 10, position: "relative", left: -6 }}
        />
      </Box>
      <Navigation />
    </Box>
  );
};
