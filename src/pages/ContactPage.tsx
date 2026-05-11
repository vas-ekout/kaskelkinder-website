import {
  alpha,
  Box,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { SectionImageHeader } from "../components/SectionImageHeader";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { useEffect, useState } from "react";
import { fetchContactPageData } from "../sanityClient";
import { CtaCard } from "../components/CtaCard";

type ContactPageData = {
  headline: string;
  bodyText: PortableTextBlock[];
  ctaCards: { buttonLabel: string; headline: string; url: string }[];
};

export const ContactPage = () => {
  const { breakpoints, palette } = useTheme();
  const isXsScreen = useMediaQuery(breakpoints.down("sm"));

  const [data, setData] = useState<ContactPageData | null>(null);
  useEffect(() => {
    fetchContactPageData().then(setData);
  }, []);
  if (!data) return null;

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
      <SectionImageHeader headline={data.headline} />
      <Box>
        <PortableText
          value={data.bodyText}
          components={{
            block: {
              normal: ({ children }) => (
                <Typography variant="body1">{children}</Typography>
              ),
            },
            marks: {
              strong: ({ children }) => (
                <span style={{ fontWeight: 600 }}>{children}</span>
              ),
              link: ({ value, children }) => (
                <Link
                  href={value.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </Link>
              ),
            },
          }}
        />
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
        {data.ctaCards.map((card) => (
          <CtaCard
            headline={card.headline}
            buttonLabel={card.buttonLabel}
            url={card.url}
          />
        ))}
      </Box>
    </Box>
  );
};
