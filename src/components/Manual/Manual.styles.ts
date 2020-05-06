import { css } from "emotion";

export const manualSyles = css({
  background: "white",
  border: "2px white solid",
  borderRadius: 3,
  position: "absolute",
  top: "calc(50% - 4rem)",
  display: "flex",
  flexDirection: "column",
  padding: "1rem 1rem 1rem 3rem",
  transition: "all 0.3s ease",
  transform: "translateX(-1000px)",
  ol: {
    listStylePosition: "inside",
    marginTop: "1rem",
    li: {
      marginTop: "0.25rem"
    }
  },
  h3: {
    fontSize: "1.5rem"
  },
  p: {
    marginTop: "1rem",
    fontSize: ".5rem"
  }
});

export const manualVisible = css({
  transform: "translateX(0)"
});
