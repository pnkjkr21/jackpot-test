import React from "react";

function FeatureIcon({
  width = 19,
  height = 26,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width="19"
      height="26"
      viewBox="0 0 19 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        width="18.17"
        height="25"
        transform="translate(0 0.669983)"
        fill="url(#pattern0_1_1060)"
      />
      <defs>
        <pattern
          id="pattern0_1_1060"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1_1060"
            transform="matrix(0.0312703 0 0 0.0227273 -0.000325211 0)"
          />
        </pattern>
        <image
          id="image0_1_1060"
          width="32"
          height="44"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default FeatureIcon;
