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
import { useEffect, useState } from "react";
import { fetchInitiativePageData } from "../sanityClient";
import { PortableText, type PortableTextBlock } from "@portabletext/react";

const StyledList = styled(List)(() => ({
  listStyleType: "square",
  paddingLeft: 24,
  lineHeight: 1.25,
}));

const StyledListItem = styled(ListItem)(() => ({
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
  const { breakpoints } = useTheme();
  const isSmallScreen = useMediaQuery(breakpoints.down("md"));
  const isXsScreen = useMediaQuery(breakpoints.down("sm"));

  if (!data) return null;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <SectionImageHeader headline={data.headline} imgSrc={InitiativeImg} />
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
                  bullet: ({ children }) => <StyledList>{children}</StyledList>,
                },
                listItem: ({ children }) => (
                  <StyledListItem>{children}</StyledListItem>
                ),
              }}
            />
          </>
        ))}
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
          {data.satzungText}
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
          onClick={() =>
            window.open(
              data.satzungFile.asset.url,
              "_blank",
              "noopener,noreferrer",
            )
          }
          fullWidth={isSmallScreen}
          sx={{ paddingInline: 8, flexGrow: 1 }}
          size={isXsScreen ? "small" : "medium"}
        >
          Download
        </Button>
      </Box>
    </Box>
  );
};
