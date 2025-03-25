const NewGamesIcon = ({
  width = 19,
  height = 19,
  fill = "#ff9933",
}: {
  width?: number;
  height?: number;
  fill?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.826 17.136L13.648 13.3L11.589 18H17.489C17.5891 17.9999 17.6869 17.9695 17.7695 17.913C17.8522 17.8564 17.9159 17.7763 17.9522 17.683C17.9886 17.5897 17.9961 17.4876 17.9735 17.39C17.951 17.2924 17.8996 17.2039 17.826 17.136ZM1.195 17.136C1.1214 17.2039 1.06999 17.2924 1.04747 17.39C1.02494 17.4876 1.03236 17.5897 1.06875 17.683C1.10514 17.7763 1.16881 17.8564 1.25145 17.913C1.33409 17.9695 1.43186 17.9999 1.532 18H7.432L5.372 13.301L1.195 17.136ZM9.51 9.503L6.15 12.589L8.519 18H10.502L12.872 12.589L9.51 9.503ZM1.5 1.995H2.696V3.117C2.32223 3.20544 1.97884 3.39203 1.70128 3.65751C1.42371 3.92298 1.22203 4.25773 1.11706 4.62719C1.01208 4.99665 1.00761 5.38744 1.10411 5.7592C1.20061 6.13097 1.39458 6.47024 1.666 6.742L2.96 8.034L2.608 8.386C2.55962 8.43173 2.5209 8.48671 2.49413 8.54766C2.46736 8.60862 2.45308 8.67433 2.45215 8.7409C2.45121 8.80747 2.46363 8.87355 2.48868 8.93524C2.51372 8.99692 2.55088 9.05296 2.59796 9.10004C2.64504 9.14712 2.70107 9.18428 2.76276 9.20932C2.82445 9.23436 2.89053 9.24679 2.9571 9.24585C3.02367 9.24492 3.08938 9.23064 3.15033 9.20387C3.21129 9.1771 3.26626 9.13838 3.312 9.09L7.074 5.334C7.12365 5.28843 7.16355 5.23328 7.19131 5.17188C7.21906 5.11047 7.23409 5.04407 7.23549 4.9767C7.23689 4.90932 7.22462 4.84236 7.19943 4.77986C7.17425 4.71735 7.13666 4.66059 7.08894 4.61301C7.04122 4.56543 6.98436 4.528 6.92178 4.50299C6.85921 4.47798 6.79221 4.46591 6.72484 4.4675C6.65747 4.46908 6.59112 4.4843 6.52979 4.51223C6.46846 4.54016 6.41342 4.58022 6.368 4.63L6.016 4.982L4.722 3.69C4.4394 3.40592 4.08239 3.20731 3.692 3.117V1.995H15.328V3.117C14.938 3.208 14.581 3.407 14.298 3.691L13.005 4.982L12.653 4.63C12.5573 4.54933 12.4348 4.50751 12.3097 4.5128C12.1846 4.51808 12.0661 4.57009 11.9775 4.65855C11.8889 4.747 11.8367 4.86547 11.8313 4.99053C11.8258 5.11559 11.8675 5.23816 11.948 5.334L15.709 9.092C15.7554 9.13829 15.8104 9.175 15.8709 9.20003C15.9315 9.22505 15.9963 9.23791 16.0619 9.23786C16.1274 9.23782 16.1922 9.22487 16.2527 9.19975C16.3132 9.17464 16.3682 9.13786 16.4145 9.0915C16.4608 9.04514 16.4975 8.99012 16.5225 8.92958C16.5476 8.86904 16.5604 8.80416 16.5604 8.73865C16.5603 8.67313 16.5474 8.60827 16.5223 8.54777C16.4971 8.48726 16.4604 8.43229 16.414 8.386L16.061 8.034L17.355 6.743C17.6267 6.47127 17.8209 6.13192 17.9175 5.76002C18.0142 5.38812 18.0098 4.99716 17.9048 4.62754C17.7998 4.25791 17.598 3.92302 17.3203 3.65746C17.0426 3.39191 16.699 3.20533 16.325 3.117V1.995H17.522C17.6473 1.98526 17.7643 1.92863 17.8496 1.8364C17.9349 1.74418 17.9823 1.62315 17.9823 1.4975C17.9823 1.37185 17.9349 1.25082 17.8496 1.1586C17.7643 1.06637 17.6473 1.00974 17.522 1H1.499C1.40067 1.00033 1.30463 1.0297 1.22294 1.08443C1.14125 1.13916 1.07755 1.2168 1.03984 1.30761C1.00213 1.39842 0.992084 1.49835 1.01097 1.59485C1.02986 1.69134 1.07683 1.78011 1.146 1.85C1.24 1.944 1.366 1.995 1.499 1.995"
        fill={fill}
      />
      <path
        d="M4.39999 8.77999L5.52999 11.2L8.72599 8.44899L6.65599 6.66699L4.39999 8.77999ZM13.47 11.2L14.6 8.77999L12.343 6.66699L10.273 8.44899L13.47 11.2Z"
        fill={fill}
      />
    </svg>
  );
};

export default NewGamesIcon;
