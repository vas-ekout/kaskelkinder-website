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
  const isLgScreen = useMediaQuery(breakpoints.up("lg"));

  const onClick = () => window.open(url, "_blank", "noopener,noreferrer");

  return (
    <StyledCard
      sx={{
        flexDirection: isLgScreen ? "row" : "column",
        justifyContent: isLgScreen ? "space-between" : "",
      }}
    >
      <Typography variant="h2" marginBottom={0}>
        {headline}
      </Typography>
      <ArrowDownwardIcon
        sx={{
          alignSelf: "center",
          color: "primary.main",
          transform: isLgScreen ? "rotate(-90deg)" : "",
        }}
      />
      <Button
        sx={{ paddingInline: 8 }}
        onClick={onClick}
        size={isXsScreen ? "small" : "medium"}
      >
        {buttonLabel}
      </Button>
    </StyledCard>
  );
};
