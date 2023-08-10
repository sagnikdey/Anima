/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const ArrowLeft4 = ({ color = "#2B2B2B", className }: Props): JSX.Element => {
  return (
    <svg
      className={`arrow-left-4 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 17 16"
      width="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M8.97139 2.86193C9.23174 3.12228 9.23174 3.54439 8.97139 3.80474L5.4428 7.33333H13.1667C13.5348 7.33333 13.8333 7.63181 13.8333 8C13.8333 8.36819 13.5348 8.66667 13.1667 8.66667H5.4428L8.97139 12.1953C9.23174 12.4556 9.23174 12.8777 8.97139 13.1381C8.71104 13.3984 8.28893 13.3984 8.02858 13.1381L3.36192 8.47141C3.10157 8.21106 3.10157 7.78895 3.36192 7.5286L8.02858 2.86193C8.28893 2.60158 8.71104 2.60158 8.97139 2.86193Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

ArrowLeft4.propTypes = {
  color: PropTypes.string,
};
