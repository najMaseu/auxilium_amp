import { fontFamilies } from "../../helpers/consts";
import { css } from "emotion";

export const DescribedSliderCOntainer = css({
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: 0,
  p: {
    fontFamily: fontFamilies.ROBOTO,
    marginLeft: 16,
    fontSize: "1rem"
  }
});
