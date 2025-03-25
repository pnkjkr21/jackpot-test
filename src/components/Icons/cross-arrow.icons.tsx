import React from "react";

const CrossArrowIcons = ({ width = 36, height = 36, color = "#7658ED" }: { width: number, height: number, color: string }) => {
  return (
    <svg
      width={width} 
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.8312 11.6344L3.16875 0L0 3.16875L11.6344 14.8031L14.8312 11.6344ZM23.625 0L28.2188 4.59375L0 32.8313L3.16875 36L31.4062 7.78125L36 12.375V0H23.625ZM24.3656 21.1687L21.1969 24.3375L28.2375 31.3781L23.625 36H36V23.625L31.4062 28.2188L24.3656 21.1687Z"
        fill={color}
      />
    </svg>
  );
};

export default CrossArrowIcons;
