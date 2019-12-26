import React from "react";
import { SliderBase } from "../SilderBase/SliderBase";
import { DescribedSliderCOntainer } from "./DescribedSlider.styles";

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
