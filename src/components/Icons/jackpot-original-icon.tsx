import React from "react";
import Image from "next/image";
import jackpotOriginalIcon from "@/assets/images/jackpot-crown-image.png";

const JackpotOriginalIcon = ({
  width = 21,
  height = 26,
}: {
  width?: number;
  height?: number;
  fill?: string;
}) => {
  return (
    <Image src={jackpotOriginalIcon} alt="jackpot original icon" width={width} height={height} />
  );
};

export default JackpotOriginalIcon;
