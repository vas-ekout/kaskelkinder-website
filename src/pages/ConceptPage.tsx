import { Box, Typography } from "@mui/material";
import { SectionImageHeader } from "../components/SectionImageHeader";
import ConceptImg from "../assets/imgs/concept.jpg";
import { useEffect, useState } from "react";
import { fetchConceptPageData } from "../sanityClient";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { StyledList, StyledListItem } from "./InitiativePage";

type ConceptPageData = {
  headline: string;
  introText: PortableTextBlock[];
  sections: { headline: string; body: PortableTextBlock[] }[];
};

export const ConceptPage = () => {
  const [data, setData] = useState<ConceptPageData | null>(null);
  useEffect(() => {
    fetchConceptPageData().then(setData);
  }, []);
  if (!data) return null;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <SectionImageHeader headline={data.headline} imgSrc={ConceptImg} />
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
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {data.sections.map((section) => (
          <Box>
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
        ))}
      </Box>
    </Box>
  );
};
