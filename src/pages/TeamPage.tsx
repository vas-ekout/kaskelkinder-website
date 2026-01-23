import { Box, Typography } from "@mui/material";
import {
  TeamItemCard,
  type TeamItemCardProps,
} from "../components/TeamItemCard";

export const TeamPage = () => {
  const teamItems: TeamItemCardProps[] = [
    {
      color: "RED",
      headline: "Vanessa",
      text: "Erzieherin Krippe, ein tolles Schlagwort",
    },
    {
      color: "PURPLE",
      headline: "Tobi",
      text: "Erzieher Krippe, Morgenkreis-Master",
    },
    {
      color: "BLUE",
      headline: "Eike",
      text: "Erzieher Krippe, ein tolles Schlagwort",
    },
    {
      color: "YELLOW",
      headline: "Martin",
      text: "Erzieher Krippe, ein tolles Schlagwort",
    },
    {
      color: "BROWN",
      headline: "Nick",
      text: "Erzieher Krippe, ein tolles Schlagwort",
    },
    {
      color: "RED",
      headline: "Lydia",
      text: "Erzieherin Krippe, ein tolles Schlagwort",
    },
    {
      color: "PURPLE",
      headline: "Enrico",
      text: "Erzieher Krippe, ein tolles Schlagwort",
    },
    {
      color: "BLUE",
      headline: "Janine",
      text: "Erzieherin Krippe, ein tolles Schlagwort",
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "grey.400",
          paddingBlock: { xs: 6, sm: 11, md: 15, lg: 16, xl: 20 },
          paddingInline: { xs: 3, sm: 6, md: 10, lg: 10, xl: 10 },
        }}
      >
        <Typography variant="h1">Unser Team</Typography>
      </Box>

      <Typography variant="body1">
        Unser Team setzt sich zusammen aus (Inklusion-) Erzieher:innen,
        Kindheitspädagog:innen, einem Auszubildenden sowie einem Pool aus
        Springer:innen und Aushelfenden. Insgesamt sind 8 festangestellte
        Fachkräfte im Laden – je Gruppe 4.
      </Typography>

      <Box
        sx={{
          mt: 8,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          columnGap: { xs: 3, sm: 5 },
          rowGap: { xs: 16, sm: 16 },
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {teamItems.map((item) => (
          <TeamItemCard
            color={item.color}
            headline={item.headline}
            text={item.text}
          />
        ))}
      </Box>
    </Box>
  );
};
