import { Box, Typography, type SxProps } from "@mui/material";

interface SectionImageHeaderProps {
  headline: string;
  headlineSx?: SxProps;
  imgSrc?: string;
  isLargeImg?: boolean;
}
export const SectionImageHeader = ({
  headline,
  headlineSx,
  imgSrc,
  isLargeImg,
}: SectionImageHeaderProps) => {
  return (
    <>
      {imgSrc && (
        <Box
          component="img"
          src={imgSrc}
          sx={{
            width: "100%",
            height: isLargeImg ? "60vh" : 400,
            minHeight: 400,
            objectFit: "cover",
            borderRadius: 1,
          }}
        />
      )}
      <Typography variant="h1" sx={headlineSx}>
        {headline}
      </Typography>
    </>
  );
};
