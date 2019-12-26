import * as React from "react";
import { Slider } from "baseui/slider";
import { tickStyle, thumbStyle, hide } from "./SliderBase.styles";

export const SliderBase = () => {
  const [value, setValue] = React.useState([50]);
  return (
    <Slider
      value={value}
      onChange={({ value }) => setValue(value)}
      overrides={{
        Tick: {
          style: tickStyle
        },
        Thumb: {
          style: thumbStyle
        },
        InnerThumb: hide,
        ThumbValue: hide
      }}
    />
  );
};
