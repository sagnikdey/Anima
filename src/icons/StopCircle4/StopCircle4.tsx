/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const StopCircle4 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`stop-circle-4 ${className}`}
      fill="none"
      height="40"
      viewBox="0 0 40 40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M20 4.99999C11.7157 4.99999 5.00002 11.7157 5.00002 20C5.00002 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 4.99999 20 4.99999ZM1.66669 20C1.66669 9.87477 9.8748 1.66666 20 1.66666C30.1252 1.66666 38.3334 9.87477 38.3334 20C38.3334 30.1252 30.1252 38.3333 20 38.3333C9.8748 38.3333 1.66669 30.1252 1.66669 20ZM13.3334 15C13.3334 14.0795 14.0795 13.3333 15 13.3333H25C25.9205 13.3333 26.6667 14.0795 26.6667 15V25C26.6667 25.9205 25.9205 26.6667 25 26.6667H15C14.0795 26.6667 13.3334 25.9205 13.3334 25V15ZM16.6667 16.6667V23.3333H23.3334V16.6667H16.6667Z"
        fill="#2B2B2B"
        fillRule="evenodd"
      />
    </svg>
  );
};
