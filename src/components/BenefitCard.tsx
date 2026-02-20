import {
  Box,
  Card,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
  type SxProps,
} from "@mui/material";
import StainRed from "../assets/imgs/stain-red.png";
import StainPurple from "../assets/imgs/stain-purple.png";
import StainBlue from "../assets/imgs/stain-blue.png";
import StainYellow from "../assets/imgs/stain-yellow.png";
import StainBrown from "../assets/imgs/stain-brown.png";

export interface BenefitCardProps {
  cardSx?: SxProps;
  color: "RED" | "PURPLE" | "BLUE" | "YELLOW" | "BROWN";
  headline: string;
  noRotation?: boolean;
  text: string;
}

const Stain = styled("img")(() => ({
  zIndex: 2,
  position: "absolute",
  opacity: 0.9,
}));

export const BenefitCard = ({
  cardSx,
  color,
  headline,
  noRotation,
  text,
}: BenefitCardProps) => {
  const { breakpoints } = useTheme();
  const isExtraSmallScreen = useMediaQuery(breakpoints.down("sm"));

  const stainSx = () => {
    switch (color) {
      case "RED":
        return {
          cardRotation: { xs: "0.6deg", sm: "1.6deg" },
          stain: StainRed,
          top: {
            rotate: "-12deg",
            right: { xs: -136, sm: -150 },
            top: { xs: -140, sm: -108 },
          },
          bottom: {
            rotate: "-0deg",
            left: { xs: -206, sm: -120 },
            bottom: { xs: -120, sm: -156 },
          },
        };
      case "PURPLE":
        return {
          cardRotation: { xs: "-0.3deg", sm: "-1deg" },
          stain: StainPurple,
          top: {
            transform: "scale(0.8)",
            rotate: "-144deg",
            left: { xs: -135, sm: -140 },
            top: { xs: -215, sm: -125 },
          },
          bottom: {
            rotate: "-62deg",
            right: { xs: -165, sm: -90 },
            bottom: { xs: -270, sm: -275 },
          },
        };
      case "BLUE":
        return {
          cardRotation: { xs: "-0.3deg", sm: "-0.3deg" },
          stain: StainBlue,
          top: {
            transform: "scale(0.7)",
            rotate: "-96deg",
            right: { xs: -155, sm: -155 },
            top: { xs: -204, sm: -198 },
          },
          bottom: {
            rotate: { xs: "-90deg", sm: "-103deg" },
            left: { xs: -145, sm: -45 },
            bottom: { xs: -225, sm: -250 },
          },
        };
      case "YELLOW":
        return {
          cardRotation: { xs: "0.5deg", sm: "1.5deg" },
          stain: StainYellow,
          top: {
            rotate: "61deg",
            left: -162,
            top: -110,
          },
          bottom: {
            rotate: { xs: "174deg", sm: "174deg" },
            right: { xs: -120, sm: -100 },
            bottom: { xs: -140, sm: -130 },
          },
        };
      case "BROWN":
        return {
          cardRotation: { xs: "-0.3deg", sm: "-1.3deg" },
          stain: StainBrown,
          top: {
            transform: "scale(0.5)",
            rotate: "115deg",
            right: { xs: -140, sm: -140 },
            top: { xs: -162, sm: -162 },
          },
          bottom: {
            transform: "scale(0.75)",
            rotate: { xs: "-30deg", sm: "160deg" },
            left: { xs: -215, sm: -105 },
            bottom: { xs: -155, sm: -126 },
          },
        };
    }
  };

  if (isExtraSmallScreen) {
    return (
      <Card
        sx={{
          position: "relative",
          backgroundColor: "background.paper",
          width: "100%",
          borderRadius: 1,
          ...cardSx,
        }}
      >
        <Stain src={stainSx()?.stain} sx={stainSx()?.top} />
        <Stain src={stainSx()?.stain} sx={stainSx()?.bottom} />
        <Box sx={{ position: "relative", zIndex: 3, p: 2 }}>
          <Typography variant="h2" sx={{ textWrap: "balance", fontSize: 34 }}>
            {headline}
          </Typography>
          <Typography variant="body2" sx={{ textWrap: "balance" }}>
            {text}
          </Typography>
        </Box>
      </Card>
    );
  }

  return (
    <Card
      sx={{
        position: "relative",
        backgroundColor: "background.paper",
        width: "100%",
        borderRadius: 1,
        rotate: noRotation ? "none" : stainSx()?.cardRotation,
        transition: "rotate 150ms",
        "&:hover": { rotate: "0deg" },
        ...cardSx,
      }}
    >
      <Stain src={stainSx()?.stain} sx={stainSx()?.top} />
      <Stain src={stainSx()?.stain} sx={stainSx()?.bottom} />
      <Box sx={{ position: "relative", zIndex: 3, p: 4 }}>
        <Typography variant="h2" sx={{ textWrap: "balance" }}>
          {headline}
        </Typography>
        <Typography variant="body2" sx={{ textWrap: "balance" }}>
          {text}
        </Typography>
      </Box>
    </Card>
  );
};
