import React from "react";
import { DescribedSlider } from "../DescribedSlider/DescribedSlider";
import { settingsContainer, title } from "./Settings.style";

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
