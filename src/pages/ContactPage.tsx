import {
  alpha,
  Box,
  Button,
  Card,
  Link,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { SectionImageHeader } from "../components/SectionImageHeader";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const StyledCard = styled(Card)(() => ({
  borderRadius: 8,
  padding: 32,
  display: "flex",
  flexDirection: "column",
  gap: 24,
}));

export const ContactPage = () => {
  const { breakpoints, palette } = useTheme();
  const isXsScreen = useMediaQuery(breakpoints.down("sm"));

  const openKitaNavigator = () =>
    window.open(
      "https://kita-navigator.berlin.de/einrichtungen/415129",
      "_blank",
      "noopener,noreferrer",
    );

  const openMailTo = () =>
    (window.location.href = "mailto:vorstand@kaskelkinder.de");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        bgcolor: alpha(palette.primary.light, 0.25),
        borderRadius: 1,
        padding: 4,
      }}
    >
      <SectionImageHeader headline="Kontakt" />
      <Box>
        <Typography variant="h6">Liebe Eltern, liebe Interessierte,</Typography>
        <Typography variant="body1">
          ab Januar 2026 und insbesondere dem Sommer 2026 haben wir wieder freie
          Plätze. Im Kita-Navigator findet ihr uns{" "}
          <Link onClick={openKitaNavigator}>hier</Link>. Wenn Ihr Fragen zu
          unserem Betreuungsangebot oder der Kita als Arbeitgeber habt, meldet
          euch gern bei uns:{" "}
          <Link onClick={openMailTo}>vorstand@kaskelkinder.de</Link>. Bitte habt
          Verständnis, dass wir uns nicht immer direkt zurückmelden können. Es
          grüßt Euch herzlich, das Team der Kaskelkinder.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gap: 5,
          gridTemplateColumns: isXsScreen
            ? "1fr"
            : "repeat(auto-fit, minmax(24rem, 1fr))",
        }}
      >
        <StyledCard>
          <Typography variant="h2" marginBottom={0}>
            Zum Kita-Navigator
          </Typography>
          <ArrowDownwardIcon
            sx={{ alignSelf: "center", color: "primary.main" }}
          />
          <Button sx={{ paddingInline: 8 }} onClick={openKitaNavigator}>
            Kita-Navigatior
          </Button>
        </StyledCard>
        <StyledCard>
          <Typography variant="h2" marginBottom={0}>
            Schreibe uns!
          </Typography>
          <ArrowDownwardIcon
            sx={{ alignSelf: "center", color: "primary.main" }}
          />
          <Button sx={{ paddingInline: 8 }} onClick={openMailTo}>
            vorstand@kaskelkinder.de
          </Button>
        </StyledCard>
      </Box>
    </Box>
  );
};
