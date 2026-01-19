import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  Button,
  Link,
  type SxProps,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface NavItemProps {
  label: string;
  hasButtonStyle?: boolean;
  route: string;
  onClick?: () => void;
}

const activeNavWeight = 700;

export const NavItem = ({
  label,
  hasButtonStyle,
  route,
  onClick,
}: NavItemProps) => {
  const location = useLocation();
  const isActive =
    location.pathname === route || location.pathname.startsWith(`${route}/`);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const navItemSx: SxProps = {
    position: "relative",
    fontFamily: '"Vend Sans", sans-serif',
    fontWeight: isActive ? activeNavWeight : 600,
    fontSize: isSmallScreen ? 22 : isMediumScreen ? 15 : 16,
    cursor: "pointer",
    textDecoration: hasButtonStyle ? "none" : isActive ? "underline" : "none",
    textDecorationThickness: "1px",
    textUnderlineOffset: "10px",
    transition: "all 300ms",
  };

  const buttonSx: SxProps = {
    fontSize: isSmallScreen ? 16 : isMediumScreen ? 15 : 16,
  };

  return hasButtonStyle ? (
    <Link
      onClick={onClick}
      component={RouterLink}
      to={route}
      underline="none"
      color="primary.main"
    >
      <Button
        variant="contained"
        size={isSmallScreen ? "medium" : isMediumScreen ? "small" : "medium"}
        sx={buttonSx}
      >
        {label}
      </Button>
    </Link>
  ) : (
    <Link
      onClick={onClick}
      component={RouterLink}
      to={route}
      underline="none"
      color="primary.main"
      sx={navItemSx}
    >
      {label}
    </Link>
  );
};
