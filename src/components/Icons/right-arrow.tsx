import React from "react";

function RightArrow({ color = "#837B99", width = 6, height = 12 }: { color?: string, width?: number, height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 6 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.1906 6.17004L0.218726 2.20129C-0.0750244 1.90754 -0.0750244 1.43254 0.218726 1.14192C0.512476 0.851294 0.987476 0.851294 1.28123 1.14192L5.78123 5.63879C6.0656 5.92317 6.07185 6.37942 5.8031 6.67317L1.28435 11.2013C1.13748 11.3482 0.943726 11.42 0.753101 11.42C0.562476 11.42 0.368726 11.3482 0.221851 11.2013C-0.0718992 10.9075 -0.0718992 10.4325 0.221851 10.1419L4.1906 6.17004Z"
        fill={color}
      />
    </svg>
  );
}

export default RightArrow;
