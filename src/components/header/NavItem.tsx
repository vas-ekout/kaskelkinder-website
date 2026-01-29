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
  sectionId: string;
  onClick?: () => void;
}

export const NavItem = ({
  label,
  hasButtonStyle,
  sectionId,
  onClick,
}: NavItemProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const navItemSx: SxProps = {
    position: "relative",
    fontFamily: '"Vend Sans", sans-serif',
    fontWeight: 600,
    fontSize: isSmallScreen ? 22 : isMediumScreen ? 15 : 16,
    cursor: "pointer",
    textDecoration: "none",
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
      component="a"
      underline="none"
      color="primary.main"
      href={`#${sectionId}`}
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
      component="a"
      underline="none"
      color="primary.main"
      sx={navItemSx}
      href={`#${sectionId}`}
    >
      {label}
    </Link>
  );
};
