import { keyframes, css } from "emotion";

export const ellipsis1 = keyframes`
{     
    0% {
         transform: scale(0);
       }
    100% {
      transform: scale(1);
    }
  }
`;

export const ellipsis2 = keyframes` {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;

export const ellipsis3 = keyframes`{
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }`;

export const spinner = css({
  display: "inline-block",
  position: "relative",
  width: "80px",
  height: "80px",

  div: {
    position: "absolute",
    top: "33px",
    width: "13px",
    height: "13px",
    borderRadius: "50%",
    background: "#fff",
    animationTimingFunction: "cubic-bezier(0, 1, 1, 0)",
    ":nth-child(1)": {
      left: "8px",
      animation: `${ellipsis1} 0.6s infinite`
    },
    ":nth-child(2)": {
      left: "8px",
      animation: `${ellipsis2} 0.6s infinite`
    },
    ":nth-child(3)": {
      left: "32px",
      animation: `${ellipsis2} 0.6s infinite`
    },
    ":nth-child(4)": {
      left: "56px",
      animation: `${ellipsis3} 0.6s infinite`
    }
  }
});
