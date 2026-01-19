import { useTheme } from "@mui/material";
import { type MotionStyle, motion } from "framer-motion";

interface AnimatedBurgerButtonProps {
  active: boolean;
  onClick: () => void;
}

const DURATION = 0.08;

export const AnimatedBurgerButton = ({
  active,
  onClick,
}: AnimatedBurgerButtonProps) => {
  const theme = useTheme();

  const barStyle: MotionStyle = {
    position: "absolute",
    height: "3px",
    width: "32px",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "9999px",
    left: "50%",
    x: "-50%",
  };

  // Opening: position moves first (delay 0), rotate moves second (delay DURATION)
  // Closing: rotate moves first (delay 0), position moves second (delay DURATION)
  const topBottomTransition = {
    top: { duration: DURATION, delay: active ? 0 : DURATION },
    bottom: { duration: DURATION, delay: active ? 0 : DURATION },
    rotate: { duration: DURATION, delay: active ? DURATION : 0 },
  };

  const middleTransition = {
    rotate: { duration: DURATION, delay: active ? DURATION : 0 },
  };

  return (
    <button
      onClick={onClick}
      style={{
        zIndex: 20,
        position: "fixed",
        top: 16,
        right: 16,
        height: "64px",
        width: "64px",
        border: "none",
        borderRadius: "50%",
        background: "none",
        cursor: "pointer",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <motion.span
        initial={false}
        animate={active ? "open" : "closed"}
        variants={{
          closed: { top: "35%", rotate: "0deg" },
          open: { top: "50%", rotate: "45deg" },
        }}
        transition={topBottomTransition}
        style={{ ...barStyle, top: "35%", y: "-50%" }}
      />
      <motion.span
        initial={false}
        animate={active ? "open" : "closed"}
        variants={{
          closed: { rotate: "0deg" },
          open: { rotate: "-45deg" },
        }}
        transition={middleTransition}
        style={{ ...barStyle, top: "50%", y: "-50%" }}
      />
      <motion.span
        initial={false}
        animate={active ? "open" : "closed"}
        variants={{
          closed: { bottom: "35%", rotate: "0deg" },
          open: { bottom: "50%", rotate: "45deg" },
        }}
        transition={topBottomTransition}
        style={{ ...barStyle, bottom: "35%", y: "50%" }}
      />
    </button>
  );
};
