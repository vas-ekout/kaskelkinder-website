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
  // const { breakpoints } = useTheme();
  // const isLargeScreen = useMediaQuery(breakpoints.between("lg", "xl"));
  // const isMediumScreen = useMediaQuery(breakpoints.between("md", "lg"));
  // const isSmallScreen = useMediaQuery(breakpoints.between("sm", "md"));
  // const isXsScreen = useMediaQuery(breakpoints.between("xs", "sm"));

  // const headlineWords = headline.split(" ");

  // const sizeMultiplier: number = (() => {
  //   if (isLargeScreen) return 60;
  //   if (isMediumScreen) return 40;
  //   if (isSmallScreen) return 20;
  //   if (isXsScreen) return -40;
  //   return 60;
  // })();

  // const randomSize = () => Math.floor(Math.random() * 200) + sizeMultiplier;

  // return imgSrc ? (
  //   <>
  //     <Box
  //       sx={{
  //         padding: 4,
  //         zIndex: 1,
  //         position: "relative",
  //         display: "flex",
  //         flexWrap: "wrap",
  //         rowGap: 0,
  //         justifyContent: "center",
  //         alignItems: "center",
  //         alignContent: "center",
  //         width: "100%",
  //         height: isLargeImg ? "60vh" : 400,
  //         minHeight: 400,
  //         objectFit: "cover",
  //         borderRadius: 1,
  //         backgroundImage: `url(${imgSrc})`,
  //         backgroundPosition: "center",
  //         backgroundSize: "cover",
  //         backgroundRepeat: "no-repeat",
  //       }}
  //     >
  //       {headlineWords.map((word, wordIndex) => (
  //         <>
  //           {wordIndex > 0 && (
  //             <Typography
  //               key={`space-${wordIndex}`}
  //               variant="h1"
  //               sx={{ ...headlineSx }}
  //             >
  //               {"\u00A0"}
  //             </Typography>
  //           )}
  //           <Box key={`word-${wordIndex}`} sx={{ display: "flex" }}>
  //             {word.split("").map((char, charIndex) => {
  //               const bubbleSize = randomSize();
  //               return (
  //                 <Typography
  //                   key={charIndex}
  //                   variant="h1"
  //                   sx={{
  //                     position: "relative",
  //                     ":before": {
  //                       content: "''",
  //                       zIndex: -1,
  //                       width: bubbleSize,
  //                       height: bubbleSize,
  //                       bgcolor: palette.background.default,
  //                       filter: "blur(4px)",
  //                       opacity: 0.9,
  //                       position: "absolute",
  //                       borderRadius: "1000%",
  //                       left: "50%",
  //                       top: `calc(50%)`,
  //                       transform: "translate(-50%, -50%)",
  //                     },
  //                     ...headlineSx,
  //                   }}
  //                 >
  //                   {char}
  //                 </Typography>
  //               );
  //             })}
  //           </Box>
  //         </>
  //       ))}
  //     </Box>
  //   </>
  // ) : (
  //   <Typography variant="h1" sx={headlineSx}>
  //     {headline}
  //   </Typography>
  // );

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
