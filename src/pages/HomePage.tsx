import { Box, Typography } from "@mui/material";
import { BenefitCard, type BenefitCardProps } from "../components/BenefitCard";
import HomeImg from "../assets/imgs/home.jpg";
import { SectionImageHeader } from "../components/SectionImageHeader";
import { useEffect, useState } from "react";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { fetchHomePageData } from "../sanityClient";

type HomePageData = {
  headline: string;
  introText: PortableTextBlock[];
  bodyText: PortableTextBlock[];
  benefitCards: BenefitCardProps[];
};

export const HomePage = () => {
  const [data, setData] = useState<HomePageData | null>(null);
  useEffect(() => {
    fetchHomePageData().then(setData);
  }, []);
  if (!data) return null;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <SectionImageHeader
        headline={data.headline}
        imgSrc={HomeImg}
        isLargeImg
      />
      <PortableText
        value={data.introText}
        components={{
          block: {
            normal: ({ children }) => (
              <Typography variant="subtitle1">{children}</Typography>
            ),
          },
          marks: {
            strong: ({ children }) => (
              <span style={{ fontWeight: 500 }}>{children}</span>
            ),
          },
        }}
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
          gap: { xs: 3, sm: 5 },
        }}
      >
        {data.benefitCards.map((card) => (
          <BenefitCard
            key={card.color}
            color={card.color}
            headline={card.headline}
            text={card.text}
          />
        ))}
      </Box>
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
          },
        }}
      />
    </Box>
  );
};
