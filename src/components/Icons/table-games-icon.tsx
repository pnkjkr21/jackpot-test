import React from "react";

const TableGamesIcon = ({ width = 30, height = 30, fill = "#ff9933" }: { width?: number, height?: number, fill?: string }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(90)"
    >
      <mask
        id="mask0_186_12"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="19"
        height="20"
      >
        <path d="M0 0.5H19V19.5H0V0.5Z" fill="white" />
      </mask>
      <g mask="url(#mask0_186_12)">
        <path
          d="M19 10C19 5.864 15.754 2.5 11.764 2.5H7.237C3.247 2.5 0 5.864 0 10C0 14.136 3.247 17.5 7.237 17.5H11.764C15.754 17.5 19 14.136 19 10ZM16.618 11.285L15.54 11C15.7 10.344 15.7 9.656 15.54 9L16.618 8.715C16.8248 9.55918 16.8248 10.4408 16.618 11.285ZM16.209 7.608L15.222 8.141C14.9469 7.59731 14.554 7.12178 14.072 6.749L14.733 5.821C15.3532 6.29804 15.8577 6.90888 16.209 7.608ZM11.764 4.808C12.45 4.808 13.117 4.949 13.744 5.231L13.303 6.29C12.819 6.07271 12.2945 5.96057 11.764 5.961H11.536V4.807L11.764 4.808ZM10.518 4.808V5.96H8.482V4.807L10.518 4.808ZM7.236 4.808H7.464V5.96H7.236C6.70568 5.95818 6.18116 6.07038 5.698 6.289L5.256 5.229C5.87842 4.94882 6.55343 4.80462 7.236 4.806M2.791 7.606C3.14213 6.90734 3.6463 6.29686 4.266 5.82L4.926 6.748C4.44353 7.11977 4.05112 7.59558 3.778 8.14L2.791 7.606ZM2.226 10C2.226 9.565 2.278 9.133 2.382 8.715L3.46 9C3.29895 9.65694 3.29895 10.3431 3.46 11L2.382 11.285C2.27866 10.8645 2.22629 10.433 2.226 10ZM7.236 11.73C6.316 11.73 5.566 10.954 5.566 10C5.566 9.045 6.316 8.269 7.236 8.269H11.764C12.684 8.269 13.434 9.045 13.434 10C13.434 10.955 12.684 11.73 11.764 11.73H7.236ZM16.21 12.392C15.8587 13.0911 15.3542 13.702 14.734 14.179L14.074 13.251C14.55 12.885 14.943 12.41 15.222 11.859L16.21 12.392ZM2.79 12.392L3.778 11.859C4.058 12.41 4.451 12.886 4.928 13.252L4.267 14.179C3.64682 13.702 3.14129 13.0911 2.79 12.392ZM7.237 15.192C6.55443 15.1934 5.87942 15.0492 5.257 14.769L5.699 13.71C6.18286 13.9276 6.70747 14.0397 7.238 14.039H7.465V15.193L7.237 15.192ZM8.483 15.192V14.04H10.519V15.194L8.483 15.192ZM11.537 15.192V14.04H11.765C12.298 14.04 12.815 13.93 13.303 13.711L13.743 14.771C13.1209 15.051 12.4462 15.1952 11.764 15.194L11.537 15.192Z"
        fill={fill}
        />
      </g>
    </svg>
  );
};

export default TableGamesIcon;
