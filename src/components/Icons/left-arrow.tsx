import React from "react";

function LeftArrow({ color = "#837B99", width = 6, height = 12 }: { color?: string, width?: number, height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 6 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.80936 6.17006L5.78124 2.20131C6.07499 1.90756 6.07499 1.43256 5.78124 1.14193C5.48749 0.848183 5.01249 0.851308 4.71874 1.14193L0.218738 5.63881C-0.0656375 5.92318 -0.0718874 6.37943 0.196863 6.67318L4.71561 11.2013C4.86249 11.3482 5.05624 11.4201 5.24686 11.4201C5.43749 11.4201 5.63124 11.3482 5.77811 11.2013C6.07186 10.9076 6.07186 10.4326 5.77811 10.1419L1.80936 6.17006Z"
        fill={color}
      />
    </svg>
  );
}

export default LeftArrow;
