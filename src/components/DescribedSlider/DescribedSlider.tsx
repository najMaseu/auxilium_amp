import React from "react";
import { SliderBase } from "../SilderBase/SliderBase";
import { css } from "emotion";
import { fontFamilies } from "../../helpers/consts";

interface DescribedSliderProps {
  text: string;
}

export const DescribedSlider: React.FC<DescribedSliderProps> = ({ text }) => {
  return (
    <div className={DescribedSliderCOntainer}>
      <SliderBase />
      <p>{text}</p>
    </div>
  );
};

const DescribedSliderCOntainer = css({
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
