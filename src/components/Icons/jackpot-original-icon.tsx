import React from "react";

const JackpotOriginalIcon = ({
  width = 21,
  height = 26,
}: {
  width?: number;
  height?: number;
  fill?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        width="20.5"
        height="25"
        transform="translate(0 0.669983)"
        fill="url(#pattern0_1_1134)"
      />
      <defs>
        <pattern
          id="pattern0_1_1134"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1_1134"
            transform="matrix(0.0312695 0 0 0.025641 -0.000312695 0)"
          />
        </pattern>
        <image
          id="image0_1_1134"
          width="32"
          height="39"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default JackpotOriginalIcon;
