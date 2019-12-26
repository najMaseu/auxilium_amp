import { Container } from "../components/Container/Container";
import React from "react";
import { Settings } from "../components/Settings/Settings";
import { WebPlayer } from "../components/WebPlayer/WebPlayer";

export const AmpView = () => (
  <Container>
    <Settings />
    <WebPlayer />
  </Container>
);
