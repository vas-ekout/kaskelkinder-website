import {
  alpha,
  Box,
  useMediaQuery,
  useTheme,
  type SxProps,
} from "@mui/material";
import { NavBar } from "./NavBar";
import { AnimatedBurgerButton } from "./AnimatedBurgerButton";
import { useState } from "react";

export const Navigation = () => {
  const [active, setActive] = useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const closeBurgerNavbar = () => setActive((prev) => !prev);

  const overlaySx: SxProps = {
    visibility: active ? "visible" : "hidden",
    opacity: active ? "1" : "0",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: alpha(theme.palette.primary.main, 0.15),
    backdropFilter: "blur(8px)",
    overflowY: "scroll",
    zIndex: 9,
    transitionProperty: "opacity",
    transitionDuration: "0.3s",
  };

  if (isSmallScreen)
    return (
      <Box>
        <AnimatedBurgerButton active={active} onClick={closeBurgerNavbar} />
        <Box aria-hidden={!active} sx={overlaySx}>
          {active && <NavBar onClickNavItem={closeBurgerNavbar} />}
        </Box>
      </Box>
    );

  return <NavBar />;
};
