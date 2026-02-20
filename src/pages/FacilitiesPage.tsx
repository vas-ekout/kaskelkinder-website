import Gallery01 from "../assets/imgs/gallery/01.jpg";
import Gallery02 from "../assets/imgs/gallery/02.jpg";
import Gallery03 from "../assets/imgs/gallery/03.jpg";
import Gallery04 from "../assets/imgs/gallery/04.jpg";
import Gallery05 from "../assets/imgs/gallery/05.jpg";
import Gallery06 from "../assets/imgs/gallery/06.jpg";
import Gallery07 from "../assets/imgs/gallery/07.jpg";
import Gallery08 from "../assets/imgs/gallery/08.jpg";
import Gallery09 from "../assets/imgs/gallery/09.jpg";
import Gallery10 from "../assets/imgs/gallery/10.jpg";
import Gallery11 from "../assets/imgs/gallery/11.jpg";
import Gallery12 from "../assets/imgs/gallery/12.jpg";
import Gallery13 from "../assets/imgs/gallery/13.jpg";
import Gallery14 from "../assets/imgs/gallery/14.jpg";
import Gallery15 from "../assets/imgs/gallery/15.jpg";
import Gallery16 from "../assets/imgs/gallery/16.jpg";
import Gallery17 from "../assets/imgs/gallery/17.jpg";
import Gallery18 from "../assets/imgs/gallery/18.jpg";
import Gallery19 from "../assets/imgs/gallery/19.jpg";
import Gallery20 from "../assets/imgs/gallery/20.jpg";
import Gallery21 from "../assets/imgs/gallery/21.jpg";
import Gallery22 from "../assets/imgs/gallery/22.jpg";
import Gallery23 from "../assets/imgs/gallery/23.jpg";
import Gallery24 from "../assets/imgs/gallery/24.jpg";
import Gallery25 from "../assets/imgs/gallery/25.jpg";
import Gallery26 from "../assets/imgs/gallery/26.jpg";
import Gallery27 from "../assets/imgs/gallery/27.jpg";
import Gallery28 from "../assets/imgs/gallery/28.jpg";
import Gallery29 from "../assets/imgs/gallery/29.jpg";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, IconButton, Typography } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { SectionImageHeader } from "../components/SectionImageHeader";

const slides = [
  { src: Gallery01, alt: "Räumlichkeiten 01" },
  { src: Gallery02, alt: "Räumlichkeiten 02" },
  { src: Gallery03, alt: "Räumlichkeiten 03" },
  { src: Gallery04, alt: "Räumlichkeiten 04" },
  { src: Gallery05, alt: "Räumlichkeiten 05" },
  { src: Gallery06, alt: "Räumlichkeiten 06" },
  { src: Gallery07, alt: "Räumlichkeiten 07" },
  { src: Gallery08, alt: "Räumlichkeiten 08" },
  { src: Gallery09, alt: "Räumlichkeiten 09" },
  { src: Gallery10, alt: "Räumlichkeiten 10" },
  { src: Gallery11, alt: "Räumlichkeiten 11" },
  { src: Gallery12, alt: "Räumlichkeiten 12" },
  { src: Gallery13, alt: "Räumlichkeiten 13" },
  { src: Gallery14, alt: "Räumlichkeiten 14" },
  { src: Gallery15, alt: "Räumlichkeiten 15" },
  { src: Gallery16, alt: "Räumlichkeiten 16" },
  { src: Gallery17, alt: "Räumlichkeiten 17" },
  { src: Gallery18, alt: "Räumlichkeiten 18" },
  { src: Gallery19, alt: "Räumlichkeiten 19" },
  { src: Gallery20, alt: "Räumlichkeiten 20" },
  { src: Gallery21, alt: "Räumlichkeiten 21" },
  { src: Gallery22, alt: "Räumlichkeiten 22" },
  { src: Gallery23, alt: "Räumlichkeiten 23" },
  { src: Gallery24, alt: "Räumlichkeiten 24" },
  { src: Gallery25, alt: "Räumlichkeiten 25" },
  { src: Gallery26, alt: "Räumlichkeiten 26" },
  { src: Gallery27, alt: "Räumlichkeiten 27" },
  { src: Gallery28, alt: "Räumlichkeiten 28" },
  { src: Gallery29, alt: "Räumlichkeiten 29" },
];

export const FacilitiesPage = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [thumbRef, thumbApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaApi || !thumbApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi, thumbApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi || !thumbApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    thumbApi.scrollTo(emblaApi.selectedScrollSnap());
  }, [emblaApi, thumbApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <SectionImageHeader headline="Unsere Räumlichkeiten" />

      <Box>
        {/* Main carousel */}
        <Box sx={{ position: "relative", mb: 1 }}>
          <Box ref={emblaRef} sx={{ overflow: "hidden", borderRadius: 1 }}>
            <Box sx={{ display: "flex" }}>
              {slides.map((slide) => (
                <Box key={slide.alt} sx={{ flex: "0 0 100%", minWidth: 0 }}>
                  <Box
                    component="img"
                    src={slide.src}
                    alt={slide.alt}
                    sx={{ width: "100%", display: "block", objectFit: "cover" }}
                  />
                </Box>
              ))}
            </Box>
          </Box>

          <IconButton
            onClick={() => emblaApi?.scrollPrev()}
            sx={{
              position: "absolute",
              top: "50%",
              left: 4,
              transform: "translateY(-50%)",
            }}
          >
            <ArrowBackIcon sx={{ color: "background.paper" }} />
          </IconButton>
          <IconButton
            onClick={() => emblaApi?.scrollNext()}
            sx={{
              position: "absolute",
              top: "50%",
              right: 4,
              transform: "translateY(-50%)",
            }}
          >
            <ArrowForwardIcon sx={{ color: "background.paper" }} />
          </IconButton>
        </Box>

        {/* Thumbnails */}
        <Box ref={thumbRef} sx={{ overflow: "hidden" }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            {slides.map((slide, index) => (
              <Box
                key={slide.alt}
                onClick={() => onThumbClick(index)}
                sx={{
                  flex: "0 0 8%",
                  minWidth: 90,
                  cursor: "pointer",
                  opacity: index === selectedIndex ? 1 : 0.4,
                  filter: index === selectedIndex ? "none" : "grayscale(100%)",
                  transition: "opacity 0.2s",
                }}
              >
                <Box
                  component="img"
                  src={slide.src}
                  alt={slide.alt}
                  sx={{
                    width: "100%",
                    display: "block",
                    objectFit: "cover",
                    aspectRatio: "4/3",
                    borderRadius: 1,
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Typography variant="subtitle1">
        <Typography variant="subtitle1" component="span" fontWeight={500}>
          Wir betreuen insgesamt 30 Kinder, die in zwei Gruppen aufgeteilt sind:
        </Typography>{" "}
        Füchse für die Kinder zwischen 1 und 3 und Kletteraffen für die Kinder
        zwischen 3 und 6 Jahren. Die Räumlichkeiten beider Gruppen befinden sich
        im Erdgeschoss eines Altbaus im Lichtenberger Kaskelkiez in
        unmittelbarer Nähe zum S-Bhf. Nöldnerplatz.
      </Typography>
    </Box>
  );
};
