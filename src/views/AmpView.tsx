import { Container } from "../components/Container/Container";
import React from "react";
import { Settings } from "../components/Settings/Settings";
import { Amp } from "../components/Amp/Amp";

export const AmpView = () => (
  <Container>
    <Settings />
    <Amp />
  </Container>
);
