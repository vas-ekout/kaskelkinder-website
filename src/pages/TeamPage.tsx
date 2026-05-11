import TeamImg from "../assets/imgs/team.jpg";
import { Box, Typography } from "@mui/material";

import {
  TeamItemCard,
  type TeamItemCardProps,
} from "../components/TeamItemCard";
import { SectionImageHeader } from "../components/SectionImageHeader";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { useEffect, useState } from "react";
import { fetchTeamPageData, urlFor } from "../sanityClient";

type TeamPageData = {
  headline: string;
  introText: PortableTextBlock[];
  teamCards: TeamItemCardProps[];
};

export const TeamPage = () => {
  const [data, setData] = useState<TeamPageData | null>(null);
  useEffect(() => {
    fetchTeamPageData().then(setData);
  }, []);
  if (!data) return null;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <SectionImageHeader headline={data.headline} imgSrc={TeamImg} />
      <Box>
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
      </Box>

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
        {data.teamCards.map((item) => (
          <Box key={item.headline} sx={{ width: 180 }}>
            <TeamItemCard
              color={item.color}
              headline={item.headline}
              text={item.text}
              portraitImage={urlFor(item.portraitImage)}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
