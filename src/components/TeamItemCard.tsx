import { Box, Typography } from "@mui/material";
import StainRed from "../assets/imgs/stain-red-portrait.png";
import StainPurple from "../assets/imgs/stain-purple-portrait.png";
import StainBlue from "../assets/imgs/stain-blue-portrait.png";
import StainYellow from "../assets/imgs/stain-yellow-portrait.png";
import StainBrown from "../assets/imgs/stain-brown-portrait.png";

export interface TeamItemCardProps {
  color: "RED" | "PURPLE" | "BLUE" | "YELLOW" | "BROWN";
  headline: string;
  text: string;
  img: string;
}

export const TeamItemCard = ({
  color,
  headline,
  img,
  text,
}: TeamItemCardProps) => {
  const stainSx = () => {
    switch (color) {
      case "RED":
        return { stain: StainRed };
      case "PURPLE":
        return { stain: StainPurple };
      case "BLUE":
        return { stain: StainBlue };
      case "YELLOW":
        return { stain: StainYellow };
      case "BROWN":
        return { stain: StainBrown };
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 1,
        backgroundImage: `url(${stainSx().stain})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "50%",
        backgroundPositionY: -140,
        p: 3,
        pt: 0,
      }}
    >
      <Box
        sx={{
          flexShrink: 0,
          width: 130,
          height: 130,
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "1000%",
          border: "1.5px solid",
          borderColor: "background.paper",
          transform: "translate(0%, -50%)",
        }}
      />
      <Box
        sx={{
          mt: -3,
          height: "100%",
          width: "100%",
          textWrap: "balance",
        }}
      >
        <Typography variant="h2" marginBottom={1.5}>
          {headline}
        </Typography>
        <Typography variant="body2">{text}</Typography>
      </Box>
    </Box>
  );
};
