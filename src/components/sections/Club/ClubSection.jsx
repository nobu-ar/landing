import React from "react";
import { ClubSectionMain } from "./ClubSectionMain";
import { ClubSectionMiddle } from "./ClubSectionMiddle";
import { ClubSectionServices } from "./ClubSectionServices";

export const ClubSection = () => {
  return (
    <>
      <ClubSectionServices />
      <ClubSectionMiddle />
      <ClubSectionMain />
    </>
  );
};
