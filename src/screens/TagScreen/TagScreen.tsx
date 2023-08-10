import React from "react";
import { StyleFilledWrapper } from "../../components/StyleFilledWrapper";
import "./style.css";

export const TagScreen = (): JSX.Element => {
  return (
    <StyleFilledWrapper
      className="tag-instance"
      style="stroke"
      tagLeadingIcon={false}
      tagText="VITAMINS"
      tagTrailingIcon={false}
    />
  );
};
