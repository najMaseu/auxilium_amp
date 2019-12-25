import * as React from "react";
import { Slider } from "baseui/slider";
export const SliderBase = () => {
  const [value, setValue] = React.useState([50]);
  return (
    <Slider
      value={value}
      onChange={({ value }) => setValue(value)}
      overrides={{
        Tick: {
          style: () => {
            return { display: "none" };
          }
        },
        InnerThumb: () => null,
        ThumbValue: () => null,
        Thumb: {
          style: () => ({
            height: "24px",
            width: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderTopLeftRadius: "36px",
            borderTopRightRadius: "36px",
            borderBottomRightRadius: "36px",
            borderBottomLeftRadius: "36px",
            border: "3px solid #fff",
            backgroundColor: "#fff"
          })
        }
      }}
    />
  );
};
