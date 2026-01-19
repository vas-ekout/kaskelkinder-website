import { Box, Divider, Typography } from "@mui/material";
import { BenefitCard, type BenefitCardProps } from "../components/BenefitCard";

export const HomePage = () => {
  const benefitCards: BenefitCardProps[] = [
    {
      color: "RED",
      headline: "Kleine Gruppen",
      text: "Für eine individuelle und liebevolle Betreuung, bei der jedes Kind gesehen wird.",
    },
    {
      color: "PURPLE",
      headline: "Engagierte Fachkräfte",
      text: "Ein Team, das mit Leidenschaft und Fachwissen die Entwicklung Ihres Kindes fördert.",
    },
    {
      color: "BLUE",
      headline: "Wöchentliche Ausflugstage",
      text: "Um die Welt zu entdecken, spielerisch zu lernen und die Natur zu erleben.",
    },
    {
      color: "YELLOW",
      headline: "Frisches Bio-Essen",
      text: "Eine gesunde und leckere Ernährung, die Kraft für den Tag gibt.",
    },
    {
      color: "BROWN",
      headline: "Und Vieles mehr",
      text: "Denn wir schaffen einen Ort, an dem Ihr Kind lachen, spielen, lernen und sich rundum wohlfühlen kann.",
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "grey.400",
          paddingBlock: { xs: 12, sm: 22, md: 30, lg: 32, xl: 40 },
          paddingInline: { xs: 3, sm: 6, md: 10, lg: 10, xl: 10 },
        }}
      >
        <Typography variant="h1">Wo kleine Entdecker groß werden</Typography>
      </Box>

      <Box>
        <Typography variant="h6">Liebe Eltern,</Typography>
        <Typography variant="body1">
          herzlich willkommen in unserem Kinderladen im lebendigen Kaskelkiez in
          Berlin-Lichtenberg! Wir wissen, wie wichtig die ersten Jahre im Leben
          Ihres Kindes sind. Deshalb begleiten wir jedes Kind im Alter von 1 bis
          6 Jahren mit viel Herz und Engagement auf seinem ganz persönlichen Weg
          – hin zu einem selbstbewussten, neugierigen und kompetenten kleinen
          Menschen. Was uns dabei besonders am Herzen liegt, und unsere Kita
          auszeichnet:
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          flexDirection: { xs: "column", sm: "row" },
          gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
          gap: { xs: 3, sm: 5 },
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {benefitCards.map((card) => (
          <BenefitCard
            key={card.color}
            color={card.color}
            headline={card.headline}
            text={card.text}
          />
        ))}
      </Box>

      <Divider />

      <Typography variant="subtitle1">
        Unser Laden ist{" "}
        <Typography variant="subtitle1" component="span" fontWeight={500}>
          montags bis freitags von 8.00 bis 17.00{" "}
        </Typography>
        geöffnet. Wir laden Sie herzlich ein, uns und unsere familiäre
        Atmosphäre kennenzulernen. Wir freuen uns darauf, Sie und Ihr Kind bald
        bei uns begrüßen zu dürfen!
      </Typography>
    </Box>
  );
};
