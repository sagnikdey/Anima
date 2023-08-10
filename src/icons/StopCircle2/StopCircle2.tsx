/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const StopCircle2 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`stop-circle-2 ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M16 4.00001C9.37256 4.00001 3.99998 9.37259 3.99998 16C3.99998 22.6274 9.37256 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37259 22.6274 4.00001 16 4.00001ZM1.33331 16C1.33331 7.89983 7.8998 1.33334 16 1.33334C24.1002 1.33334 30.6666 7.89983 30.6666 16C30.6666 24.1002 24.1002 30.6667 16 30.6667C7.8998 30.6667 1.33331 24.1002 1.33331 16ZM10.6666 12C10.6666 11.2636 11.2636 10.6667 12 10.6667H20C20.7364 10.6667 21.3333 11.2636 21.3333 12V20C21.3333 20.7364 20.7364 21.3333 20 21.3333H12C11.2636 21.3333 10.6666 20.7364 10.6666 20V12ZM13.3333 13.3333V18.6667H18.6666V13.3333H13.3333Z"
        fill="#2B2B2B"
        fillRule="evenodd"
      />
    </svg>
  );
};
