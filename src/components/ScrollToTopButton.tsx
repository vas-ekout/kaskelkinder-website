import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useGetPagePadding } from "../hooks/useGetPagePadding";
import NorthIcon from "@mui/icons-material/North";
import { useEffect, useState } from "react";

export const ScrollToTopButton = () => {
  const { pagePadding } = useGetPagePadding();
  const [isVisible, setIsVisible] = useState(false);

  const { breakpoints } = useTheme();
  const isSmallScreen = useMediaQuery(breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      component="a"
      href="#home"
      sx={{
        zIndex: 99,
        color: "primary.main",
        border: "1px solid",
        borderRadius: "1000%",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        width: isSmallScreen
          ? `calc(${pagePadding} / 0.5)`
          : `calc(${pagePadding} / 2)`,
        height: isSmallScreen
          ? `calc(${pagePadding} / 0.5)`
          : `calc(${pagePadding} / 2)`,
        position: "fixed",
        bottom: isSmallScreen ? pagePadding : `calc(${pagePadding} / 2)`,
        right: isSmallScreen ? pagePadding : `calc(${pagePadding} / 2)`,
        transform: isSmallScreen ? "none" : "translate(50%)",

        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
        transition: "opacity 300ms ease-in-out",
      }}
    >
      <NorthIcon sx={{ fontSize: 18 }} />
    </Box>
  );
};
