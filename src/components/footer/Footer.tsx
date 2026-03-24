import CloseIcon from "@mui/icons-material/Close";

import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useGetPagePadding } from "../../hooks/useGetPagePadding";
import HeaderBg from "../../assets/imgs/header-bg.png";
import { useEffect, useState } from "react";
import { fetchFooterImpressumData } from "../../sanityClient";

const StyledTypography = styled(Typography)(() => ({
  lineHeight: 1.5,
  marginBottom: 0,
  whiteSpace: "pre-line",
}));

const StyledHeadline = styled(Typography)(() => ({
  fontWeight: 700,
  lineHeight: 1.5,
  marginBottom: 0,
  marginTop: 16,
}));

type FooterImpressumData = {
  copyright: string;
  impressumHeadline: string;
  impressumSection: { sectionHeadline: string; sectionParagraph: string }[];
};

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { pagePadding } = useGetPagePadding();
  const { breakpoints } = useTheme();
  const isSmallScreen = useMediaQuery(breakpoints.down("sm"));

  const [data, setData] = useState<FooterImpressumData | null>(null);
  useEffect(() => {
    fetchFooterImpressumData().then(setData);
  }, []);
  if (!data) return null;

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
          {data.copyright}
        </Typography>
        {!isSmallScreen && <Divider orientation="vertical" flexItem />}
        <Typography
          variant="subtitle2"
          sx={{ ...footerTextSx, cursor: "pointer" }}
          onClick={() => setIsOpen(true)}
        >
          {data.impressumHeadline}
        </Typography>

        <Dialog
          fullWidth
          open={isOpen}
          onClose={() => setIsOpen(false)}
          slotProps={{ backdrop: { sx: { filter: "blur(4px)" } } }}
        >
          <IconButton
            size="small"
            sx={{ position: "absolute", top: 20, right: 20 }}
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
          <DialogTitle variant="h5">{data.impressumHeadline}</DialogTitle>
          <DialogContent>
            {data.impressumSection.map((item) => (
              <>
                <StyledHeadline>{item.sectionHeadline}</StyledHeadline>
                <StyledTypography>{item.sectionParagraph}</StyledTypography>
              </>
            ))}
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
};
