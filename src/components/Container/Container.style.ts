import { css } from "emotion";

export const container = css({
  display: "flex",
  justifyContent: "center",
  height: "100%",
  minHeight: "100vh"
});

export const innerContainer = css({
  width: "1366px",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  "@media (max-width: 1280px)": {
    width: "1200px"
  }
});
