import React from "react";
import { isEmpty } from "lodash";
import { EMPTY_GAME_IMAGE } from "@/utility/constants/constants";
import styles from './game-card.module.css'

function GameCard({ data }: { data: any }) {
  return (
    <div 
      className={styles.gameCard}
      style={{
        backgroundImage: `url(${isEmpty(data.thumbnail) ? EMPTY_GAME_IMAGE : data.thumbnail})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: data.borderColor,
      }}
    />
  );
}

export default GameCard;
