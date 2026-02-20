import InitiativeImg from "../assets/imgs/initiative.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import {
  Box,
  Button,
  List,
  ListItem,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { SectionImageHeader } from "../components/SectionImageHeader";

const StyledListItem = styled(ListItem)(() => ({
  display: "list-item",
  paddingLeft: 8,
}));

export const InitiativePage = () => {
  const { breakpoints } = useTheme();
  const isSmallScreen = useMediaQuery(breakpoints.down("md"));

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <SectionImageHeader
        headline="Unsere Eltern-Initiative"
        imgSrc={InitiativeImg}
      />
      <Box>
        <Typography variant="body1" sx={{ marginBottom: 0 }}>
          Die Suche nach dem richtigen Kitaplatz in Berlin kann eine echte
          Herausforderung sein. Auch wir, eine Gruppe engagierter Eltern,
          standen vor dieser Situation. Doch aus dieser Not heraus entstand im
          Jahr 20XX eine gemeinsame Vision.
        </Typography>
      </Box>

      <Typography variant="subtitle1">
        Was als Initiative von wenigen begann, hat sich zu einer starken
        Gemeinschaft von inzwischen über 30 engagierten Eltern entwickelt.{" "}
        <Typography variant="subtitle1" component="span" fontWeight={500}>
          Unser klares Ziel: eine ganz besondere Kita für unseren Nachwuchs.
        </Typography>
      </Typography>

      <Box>
        <Typography variant="body1">
          Als Elterninitiative sehen wir darin eine einzigartige Chance: die
          Möglichkeit, unsere gemeinsamen Werte und Überzeugungen direkt in den
          Kita-Alltag zu integrieren. Gemeinsam gestalten wir diesen besonderen
          Ort für unsere Kinder – einen Raum, in dem jede Persönlichkeit
          wertgeschätzt wird, sich frei entfalten kann und der geprägt ist von
          Gemeinschaft, Respekt und der Freude am Wachsen.
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 0 }}>
          Im Sinne unseres Kinderladens ist die aktive Teilnahme und Teilhabe
          der Familien gewünscht. Konkret bedeutet dies u.a.:
        </Typography>

        <List
          sx={{ listStyleType: "square", paddingLeft: 3, lineHeight: 1.25 }}
        >
          <StyledListItem>
            Übernahme von Betreuungsdiensten während der Teamsitzung
          </StyledListItem>
          <StyledListItem>Teilnahme an AGs und Putztagen</StyledListItem>
          <StyledListItem>gemeinsame Feiern von Festen</StyledListItem>
          <StyledListItem>
            Austausch sowie Vernetzung bei Eltern-Cafés
          </StyledListItem>
        </List>
      </Box>
      <Box
        sx={{
          padding: 4,
          borderRadius: 1,
          bgcolor: "background.paper",
          display: "flex",
          gap: 2,
          alignItems: "center",
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: 0, textAlign: "center" }}>
          Unser Engagement haben wir in einer Satzung festgehalten.
        </Typography>
        {isSmallScreen ? (
          <ArrowDownwardIcon
            sx={{ alignSelf: "center", color: "primary.main" }}
          />
        ) : (
          <ArrowForwardIcon
            sx={{ alignSelf: "center", color: "primary.main" }}
          />
        )}
        <Button
          fullWidth={isSmallScreen}
          sx={{ paddingInline: 8, flexGrow: 1 }}
        >
          Download
        </Button>
      </Box>
    </Box>
  );
};
