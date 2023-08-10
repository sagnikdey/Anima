/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const StopCircle = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`stop-circle ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_6029_22759)">
        <path
          className="path"
          clipRule="evenodd"
          d="M8.00002 1.99999C4.68631 1.99999 2.00002 4.68628 2.00002 7.99999C2.00002 11.3137 4.68631 14 8.00002 14C11.3137 14 14 11.3137 14 7.99999C14 4.68628 11.3137 1.99999 8.00002 1.99999ZM0.666687 7.99999C0.666687 3.9499 3.94993 0.666656 8.00002 0.666656C12.0501 0.666656 15.3334 3.9499 15.3334 7.99999C15.3334 12.0501 12.0501 15.3333 8.00002 15.3333C3.94993 15.3333 0.666687 12.0501 0.666687 7.99999ZM5.33335 5.99999C5.33335 5.6318 5.63183 5.33332 6.00002 5.33332H10C10.3682 5.33332 10.6667 5.6318 10.6667 5.99999V9.99999C10.6667 10.3682 10.3682 10.6667 10 10.6667H6.00002C5.63183 10.6667 5.33335 10.3682 5.33335 9.99999V5.99999ZM6.66669 6.66666V9.33332H9.33335V6.66666H6.66669Z"
          fill="#2B2B2B"
          fillRule="evenodd"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip_path" id="clip0_6029_22759">
          <rect className="rect" fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};
