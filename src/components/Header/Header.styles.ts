import { fontFamilies } from "../../helpers/consts";
import { css } from "emotion";

export const header = css({
  fontFamily: fontFamilies.ROBOTO,

  div: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "absolute",
    left: "50%",
    bottom: "50%",

    h1: {
      display: "inline",
      background: "white",
      padding: "14px 35px 0 35px",
      fontSize: "4rem",
      fontWeight: 500,
      ":nth-child(2)": {
        paddingTop: 5,
        paddingBottom: 14
      }
    },
    h2: {
      color: "white",
      fontSize: "2rem",
      marginTop: 30
    }
  }
});
