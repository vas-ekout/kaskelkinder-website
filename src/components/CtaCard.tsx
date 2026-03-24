import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {
  Button,
  Card,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const StyledCard = styled(Card)(() => ({
  borderRadius: 8,
  padding: 32,
  display: "flex",
  flexDirection: "column",
  gap: 24,
}));

interface CtaCardProps {
  buttonLabel: string;
  headline: string;
  url: string;
}

export const CtaCard = ({ buttonLabel, headline, url }: CtaCardProps) => {
  const { breakpoints } = useTheme();
  const isXsScreen = useMediaQuery(breakpoints.down("sm"));

  const onClick = () => window.open(url, "_blank", "noopener,noreferrer");

  return (
    <StyledCard>
      <Typography variant="h2" marginBottom={0}>
        {headline}
      </Typography>
      <ArrowDownwardIcon sx={{ alignSelf: "center", color: "primary.main" }} />
      <Button
        sx={{ paddingInline: 2 }}
        onClick={onClick}
        size={isXsScreen ? "small" : "medium"}
      >
        {buttonLabel}
      </Button>
    </StyledCard>
  );
};
