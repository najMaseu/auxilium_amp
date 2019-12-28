import { fontFamilies } from "../../helpers/consts";
import { css } from "emotion";

export const header = css({
  fontFamily: fontFamilies.ROBOTO,
  div: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "absolute",
    right: "-50%",
    bottom: "50%",
    transform: "translateX(400px)",
    opacity: 0,

    h1: {
      display: "inline",
      background: "white",
      padding: "14px 35px 0 35px",
      fontSize: "4rem",
      fontWeight: 500,
      border: "none",
      ":nth-child(2)": {
        paddingTop: 5,
        paddingBottom: 14
      }
    },
    h2: {
      color: "white",
      fontSize: "2rem",
      border: "none",
      marginTop: 30
    }
  }
});
