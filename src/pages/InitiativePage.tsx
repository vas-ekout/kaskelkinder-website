import InitiativeImg from "../assets/imgs/initiative.jpg";

import { Box, List, ListItem, styled, Typography } from "@mui/material";
import { SectionImageHeader } from "../components/SectionImageHeader";
import { useEffect, useState } from "react";
import { fetchInitiativePageData } from "../sanityClient";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { CtaCard } from "../components/CtaCard";

export const StyledList = styled(List)(() => ({
  listStyleType: "square",
  paddingLeft: 24,
  lineHeight: 1.25,
}));

export const StyledListItem = styled(ListItem)(() => ({
  display: "list-item",
  paddingLeft: 8,
}));

type InitiativePageData = {
  headline: string;
  introText: PortableTextBlock[];
  sections: { headline: string; body: PortableTextBlock[] }[];
  satzungText: string;
  satzungFile: { asset: { url: string } };
};

export const InitiativePage = () => {
  const [data, setData] = useState<InitiativePageData | null>(null);
  useEffect(() => {
    fetchInitiativePageData().then(setData);
  }, []);

  if (!data) return null;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <SectionImageHeader headline={data.headline} imgSrc={InitiativeImg} />
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
            list: {
              bullet: ({ children }) => <StyledList>{children}</StyledList>,
            },
            listItem: {
              bullet: ({ children }) => (
                <StyledListItem>{children}</StyledListItem>
              ),
            },
          }}
        />
      </Box>

      {data.sections && (
        <Box>
          {data.sections.map((section) => (
            <>
              {section.headline && (
                <Typography variant="h6">{section.headline}</Typography>
              )}
              <PortableText
                value={section.body}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <Typography variant="body1">{children}</Typography>
                    ),
                  },
                  marks: {
                    strong: ({ children }) => (
                      <span style={{ fontWeight: 500 }}>{children}</span>
                    ),
                  },
                  list: {
                    bullet: ({ children }) => (
                      <StyledList>{children}</StyledList>
                    ),
                  },
                  listItem: ({ children }) => (
                    <StyledListItem>{children}</StyledListItem>
                  ),
                }}
              />
            </>
          ))}
        </Box>
      )}

      <CtaCard
        buttonLabel="Download"
        headline={data.satzungText}
        url={data.satzungFile.asset.url}
      />
    </Box>
  );
};
