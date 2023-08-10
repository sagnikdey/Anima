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

export const ArrowRight2 = ({ color = "#484848", className }: Props): JSX.Element => {
  return (
    <svg
      className={`arrow-right-2 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 17 16"
      width="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M8.02858 2.86193C8.28893 2.60158 8.71104 2.60158 8.97139 2.86193L13.6381 7.5286C13.8984 7.78895 13.8984 8.21106 13.6381 8.47141L8.97139 13.1381C8.71104 13.3984 8.28893 13.3984 8.02858 13.1381C7.76824 12.8777 7.76824 12.4556 8.02858 12.1953L11.5572 8.66667H3.83332C3.46513 8.66667 3.16666 8.36819 3.16666 8C3.16666 7.63181 3.46513 7.33333 3.83332 7.33333H11.5572L8.02858 3.80474C7.76824 3.54439 7.76824 3.12228 8.02858 2.86193Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

ArrowRight2.propTypes = {
  color: PropTypes.string,
};
