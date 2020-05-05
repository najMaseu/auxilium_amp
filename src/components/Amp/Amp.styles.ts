import { css } from "emotion";
import { fontFamilies } from "../../helpers/consts";

export const canvas = css({
  "@media (max-width: 1280px)": {
    width: "30vw"
  }
});

export const ampVisuals = css({
  color: "white",
  fontFamily: fontFamilies.ROBOTO,
  fontSize: "1rem",
  fontWeight: 500,
  display: "flex",
  flexDirection: "column",
  div: {
    marginTop: "5rem",
    display: "flex",
    input: {
      marginLeft: "2rem"
    }
  }
});
