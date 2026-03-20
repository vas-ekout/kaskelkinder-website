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
import { useState } from "react";

const StyledTypography = styled(Typography)(() => ({
  lineHeight: 1.5,
  marginBottom: 0,
}));

const StyledHeadline = styled(Typography)(() => ({
  fontWeight: 700,
  lineHeight: 1.5,
  marginBottom: 0,
  marginTop: 16,
}));

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <Typography
          variant="subtitle2"
          sx={{ ...footerTextSx, cursor: "pointer" }}
          onClick={() => setIsOpen(true)}
        >
          Impressum
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
          <DialogTitle variant="h5">Impressum</DialogTitle>
          <DialogContent>
            <StyledHeadline>Kinderladen Kaskelkinder e.V.</StyledHeadline>
            <StyledTypography>Türrschmidtstraße 33</StyledTypography>
            <StyledTypography>10317 Berlin </StyledTypography>
            <StyledTypography>kontakt@kaskelkinder.de</StyledTypography>
            <StyledTypography>Vereinsregister-Nr.: VR 30673 B</StyledTypography>

            <StyledHeadline>Vorstand</StyledHeadline>
            <StyledTypography>Carsten, Florian, Jule, Till</StyledTypography>

            <StyledHeadline>Bevollmächtigte Vertreter:</StyledHeadline>
            <StyledTypography>Kinderladen-Team Krippe</StyledTypography>
            <StyledTypography>
              Eike, Martin (Azubi), Tobi, Vanessa
            </StyledTypography>

            <StyledHeadline>Bevollmächtigte Vertreter:</StyledHeadline>
            <StyledTypography>
              Kinderladen-Team Elementarbereich
            </StyledTypography>
            <StyledTypography>Enrico, Janine, Lydia, Malwina</StyledTypography>

            <StyledHeadline>Website Design & Entwicklung</StyledHeadline>
            <StyledTypography>Vassilios Ekoutsidis</StyledTypography>

            <StyledHeadline>Fotos</StyledHeadline>
            <StyledTypography>www.kalz-fotografie.de</StyledTypography>
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
};
