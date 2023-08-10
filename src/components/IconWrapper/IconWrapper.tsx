/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { StopCircle } from "../../icons/StopCircle";
import "./style.css";

interface Props {
  size: "large" | "x-small" | "small" | "x-large" | "medium";
  className: any;
  icon: JSX.Element;
}

export const IconWrapper = ({ size, className, icon = <StopCircle className="stop-circle" /> }: Props): JSX.Element => {
  return <div className={`icon-wrapper ${className}`}>{icon}</div>;
};

IconWrapper.propTypes = {
  size: PropTypes.oneOf(["large", "x-small", "small", "x-large", "medium"]),
};
