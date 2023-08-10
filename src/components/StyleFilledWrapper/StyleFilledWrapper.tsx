/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArrowLeft4 } from "../../icons/ArrowLeft4";
import { ArrowRight2 } from "../../icons/ArrowRight2";
import { Tag } from "../Tag";
import "./style.css";

interface Props {
  style: "filled" | "filledgreytext" | "stroke";
  className: any;
  tagText: string;
  tagLeadingIcon: boolean;
  tagTrailingIcon: boolean;
}

export const StyleFilledWrapper = ({
  style,
  className,
  tagText = "SUBSCRIBE",
  tagLeadingIcon,
  tagTrailingIcon,
}: Props): JSX.Element => {
  return (
    <div className={`style-filled-wrapper ${className}`}>
      <Tag
        cButtonTextClassName={`${style === "filledgreytext" && "class"}`}
        className={`${style === "stroke" ? "class-2" : "class-3"}`}
        iconWrapperIcon={
          <ArrowLeft4
            className="instance-node"
            color={
              ["filled", "stroke"].includes(style) ? "#E76F51" : style === "filledgreytext" ? "#484848" : undefined
            }
          />
        }
        leadingIcon={tagLeadingIcon}
        override={
          <ArrowRight2
            className="instance-node"
            color={
              ["filled", "stroke"].includes(style) ? "#E76F51" : style === "filledgreytext" ? "#484848" : undefined
            }
          />
        }
        text={tagText}
        trailingIcon={tagTrailingIcon}
      />
    </div>
  );
};

StyleFilledWrapper.propTypes = {
  style: PropTypes.oneOf(["filled", "filledgreytext", "stroke"]),
  tagText: PropTypes.string,
  tagLeadingIcon: PropTypes.bool,
  tagTrailingIcon: PropTypes.bool,
};
