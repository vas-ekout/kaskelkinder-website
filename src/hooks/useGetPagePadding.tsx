import { useMediaQuery, useTheme } from "@mui/material";

export const useGetPagePadding = () => {
  const { breakpoints } = useTheme();
  const isSmallScreen = useMediaQuery(breakpoints.down("md"));

  const pagePadding = isSmallScreen ? "24px" : "64px";

  return { pagePadding };
};
