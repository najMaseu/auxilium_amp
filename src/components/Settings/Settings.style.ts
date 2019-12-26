import { fontFamilies } from "../../helpers/consts";
import { css } from "emotion";

export const title = css({
  background: "white",
  fontSize: "4rem",
  fontWeight: 500,
  marginLeft: 16,
  marginBottom: 24,
  padding: "14px 64px 14px 24px",
  fontFamily: fontFamilies.ROBOTO
});

export const settingsContainer = css({
  display: "flex",
  flexDirection: "column"
});
