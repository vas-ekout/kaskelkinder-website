import { Box, useMediaQuery, useTheme } from "@mui/material";
import { NavItem } from "./NavItem";
import { motion } from "framer-motion";

interface NavBarProps {
  onClickNavItem?: () => void;
}

export const NavBar = ({ onClickNavItem }: NavBarProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const navItemVariants = {
    hidden: { x: -8, opacity: 0 },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.1,
        type: "spring" as const,
        stiffness: 500,
        damping: 20,
      },
    }),
  };

  const navItems = [
    ...(isSmallScreen ? [{ sectionId: "home", label: "Home" }] : []),
    { sectionId: "concept", label: "Pädagogisches Konzept" },
    { sectionId: "team", label: "Team" },
    { sectionId: "facilities", label: "Räumlichkeiten" },
    { sectionId: "parents-initiative", label: "Elterninitiative" },
    { sectionId: "jobs", label: "Jobs" },
    { sectionId: "support", label: "Unterstützen" },
    { sectionId: "contact", label: "Kontakt", hasButtonStyle: true },
  ];

  return (
    <Box
      component="nav"
      sx={{
        mt: isSmallScreen ? 14 : 3,
        mr: isSmallScreen ? 5.5 : 0,
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        alignItems: isSmallScreen ? "flex-end" : "center",
        justifyContent: isSmallScreen ? "space-start" : "flex-end",
        gap: isSmallScreen ? 4 : isMediumScreen ? 2.25 : 6,
        textAlign: "center",
      }}
    >
      {navItems.map((item, index) => (
        <motion.div
          key={item.sectionId}
          custom={index}
          initial={isSmallScreen ? "hidden" : "visible"}
          animate="visible"
          variants={isSmallScreen ? navItemVariants : {}}
        >
          <NavItem
            onClick={() => {
              if (onClickNavItem) onClickNavItem();
            }}
            sectionId={item.sectionId}
            hasButtonStyle={item.hasButtonStyle}
            label={item.label}
          />
        </motion.div>
      ))}
    </Box>
  );
};
