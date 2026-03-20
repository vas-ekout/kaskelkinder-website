import { alpha, Box, useTheme } from "@mui/material";
import KaskelLogo from "../../assets/imgs/logo_kaskelkinder_300x200.png";
import HeaderBg from "../../assets/imgs/header-bg-small.png";
import { Navigation } from "./Navigation";
import { useGetPagePadding } from "../../hooks/useGetPagePadding";

export const Header = () => {
  const { pagePadding } = useGetPagePadding();
  const { palette } = useTheme();

  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: 100,
        background: `linear-gradient(${palette.background.default} 50%, ${alpha(palette.background.default, 0)})`,
        width: "100%",
        height: 172,
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
          backgroundPosition: "top -32px center",
          opacity: 0.8,
          zIndex: -1,
        },
      }}
    >
      <Box component="a" href="#home">
        <img
          src={KaskelLogo}
          style={{ width: 120, zIndex: 10, position: "relative", left: -6 }}
        />
      </Box>
      <Navigation />
    </Box>

    // <Box
    //   sx={{
    //     position: "fixed",
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //     width: "100%",
    //     paddingInline: pagePadding,
    //     paddingBlock: 4,
    //     zIndex: 100,
    //   }}
    // >
    //   <Box
    //     sx={{
    //       width: "100%",
    //       paddingBlock: 1,
    //       paddingInline: 3,
    //       background: alpha(palette.background.paper, 0.9),
    //       borderRadius: 100,
    //       border: "1px solid",
    //       borderColor: alpha(palette.background.default, 1),
    //       display: "flex",
    //       justifyContent: "space-between",
    //       alignItems: "center",
    //     }}
    //   >
    //     <Box component="a" href="#home">
    //       <img
    //         src={KaskelLogo}
    //         style={{ width: 80, zIndex: 10, position: "relative" }}
    //       />
    //     </Box>
    //     <NavBar sx={{ mt: 0 }} />
    //   </Box>
    // </Box>
  );
};
