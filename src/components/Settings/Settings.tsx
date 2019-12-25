import React from "react";
import { css } from "emotion";
import { DescribedSlider } from "../DescribedSlider/DescribedSlider";
import { fontFamilies } from "../../helpers/consts";

export const Settings: React.FC = () => {
  return (
    <div className={settingsContainer}>
      <h3 className={title}>SETTINGS</h3>
      <DescribedSlider text={"GAIN"} />
      <DescribedSlider text={"VOLUME"} />
      <DescribedSlider text={"LO CUT"} />
      <DescribedSlider text={"REVERB"} />
      <DescribedSlider text={"DELAY TIME"} />
      <DescribedSlider text={"DELAY FEEDBACK"} />
    </div>
  );
};

const title = css({
  background: "white",
  fontSize: "4rem",
  fontWeight: 500,
  marginLeft: 16,
  marginBottom: 24,
  padding: "14px 64px 14px 24px  ",
  fontFamily: fontFamilies.ROBOTO
});

const settingsContainer = css({
  display: "flex",
  flexDirection: "column"
});
