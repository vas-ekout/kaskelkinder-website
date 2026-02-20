import TeamImg from "../assets/imgs/team.jpg";
import { Box, Typography } from "@mui/material";
import PortraitEike from "../assets/imgs/portrait-eike.jpg";
import PortraitEnrico from "../assets/imgs/portrait-enrico.jpg";
import PortraitJanine from "../assets/imgs/portrait-janine.jpg";
import PortraitLydia from "../assets/imgs/portrait-lydia.jpg";
import PortraitMartin from "../assets/imgs/portrait-martin.jpg";
import PortraitNick from "../assets/imgs/portrait-nick.jpg";
import PortraitTobi from "../assets/imgs/portrait-tobi.jpg";
import PortraitVanessa from "../assets/imgs/portrait-vanessa.jpg";

import {
  TeamItemCard,
  type TeamItemCardProps,
} from "../components/TeamItemCard";
import { SectionImageHeader } from "../components/SectionImageHeader";

export const TeamPage = () => {
  const teamItems: TeamItemCardProps[] = [
    {
      color: "RED",
      headline: "Vanessa",
      text: "Erzieherin Krippe, ein tolles Schlagwort",
      img: PortraitVanessa,
    },
    {
      color: "PURPLE",
      headline: "Tobi",
      text: "Erzieher Krippe, Morgenkreis-Master",
      img: PortraitTobi,
    },
    {
      color: "BLUE",
      headline: "Eike",
      text: "Erzieher Krippe, ein tolles Schlagwort",
      img: PortraitEike,
    },
    {
      color: "YELLOW",
      headline: "Martin",
      text: "Erzieher Krippe, ein tolles Schlagwort",
      img: PortraitMartin,
    },
    {
      color: "BROWN",
      headline: "Nick",
      text: "Erzieher Krippe, ein tolles Schlagwort",
      img: PortraitNick,
    },
    {
      color: "RED",
      headline: "Lydia",
      text: "Erzieherin Krippe, ein tolles Schlagwort",
      img: PortraitLydia,
    },
    {
      color: "PURPLE",
      headline: "Enrico",
      text: "Erzieher Krippe, ein tolles Schlagwort",
      img: PortraitEnrico,
    },
    {
      color: "BLUE",
      headline: "Janine",
      text: "Erzieherin Krippe, ein tolles Schlagwort",
      img: PortraitJanine,
    },
  ];
  teamItems.sort((a, b) => a.headline.localeCompare(b.headline));

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <SectionImageHeader headline="Unser Team" imgSrc={TeamImg} />

      <Typography variant="subtitle1">
        Unser Team setzt sich zusammen aus (Inklusion-) Erzieher:innen,
        Kindheitspädagog:innen, einem Auszubildenden sowie einem Pool aus
        Springer:innen und Aushelfenden.{" "}
        <Typography variant="subtitle1" component="span" fontWeight={500}>
          Insgesamt sind 8 festangestellte Fachkräfte im Laden – je Gruppe 4.
        </Typography>
      </Typography>

      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          columnGap: 5,
          rowGap: { xs: 12, sm: 14 },
        }}
      >
        {teamItems.map((item) => (
          <Box key={item.headline} sx={{ width: 180 }}>
            <TeamItemCard
              color={item.color}
              headline={item.headline}
              text={item.text}
              img={item.img}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
