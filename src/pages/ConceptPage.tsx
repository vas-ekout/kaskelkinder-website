import { Box, Typography } from "@mui/material";

export const ConceptPage = () => {
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
        <Typography variant="h1">Unser pädagogisches Konzept</Typography>
      </Box>

      <Typography variant="body1">
        Uns ist es wichtig gemeinsam mit allen am Erziehungs- und
        Bildungsprozess beteiligten Personen einen sicheren,
        adultismuskritischen und diskriminerungsfreien Raum zu schaffen! Dafür
        setzen wir uns folgende pädagogischen Ziele.
      </Typography>

      <Box>
        <Typography variant="h6">Pädagogische Ziele</Typography>
        <Typography variant="body1">
          Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben
          da sind und wie sie aussehen. Manchmal benutzt man Worte wie
          Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.
          Manchmal Sätze, die alle Buchstaben des Alphabets enthalten - man
          nennt diese Sätze »Pangrams«. Sehr bekannt ist dieser: The quick brown
          fox jumps over the lazy old dog. Oft werden in Typoblindtexte auch
          fremdsprachige Satzteile eingebaut, um die Wirkung in anderen Sprachen
          zu testen. In Lateinisch sieht zum Beispiel fast jede Schrift gut aus.
          Quod erat demonstrandum.
        </Typography>
      </Box>

      <Box>
        <Typography variant="h6">Wir sehen das Kind als</Typography>
        <Typography variant="body1">
          Dies ist ein Typoblindtext. Seit 1975 fehlen in den meisten Testtexten
          die Zahlen, weswegen nach TypoGb. 204 § ab dem Jahr 2034 Zahlen in 86
          der Texte zur Pflicht werden. Nichteinhaltung wird mit bis zu 245 €
          oder 368 $ bestraft. Genauso wichtig in sind mittlerweile auch
          Âçcèñtë, die in neueren Schriften aber fast immer enthalten sind. Ein
          wichtiges aber schwierig zu integrierendes Feld sind
          OpenType-Funktionalitäten. Je nach Software und Voreinstellungen
          können eingebaute Kapitälchen, Kerning oder Ligaturen (sehr pfiffig)
          nicht richtig dargestellt werden.Dies ist ein Typoblindtext. An ihm
          kann man sehen, ob alle Buchstaben da sind und wie sie aussehen.
          Manchmal benutzt man Worte wie Hamburgefonts.
        </Typography>
      </Box>
    </Box>
  );
};
