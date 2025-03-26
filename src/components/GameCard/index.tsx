import React from "react";
import { isEmpty } from "lodash";
import { EMPTY_GAME_IMAGE } from "@/utility/constants/constants";
import styles from './game-card.module.css'
import StarIcon from "../Icons/star-icon";
import { useSearchStore } from "@/store";

function GameCard({ data }: { data: any }) {
  const { favoriteGames, setFavoriteGames } = useSearchStore();
  const isFavorite = favoriteGames.map((game) => game.slug).includes(data.slug);
  const handleFavorite = () => {
    if (isFavorite) {
      setFavoriteGames(favoriteGames.filter((game) => game.slug !== data.slug));
    } else {
      setFavoriteGames([...favoriteGames, data]);
    }
  };
  return (
    <div 
      className={styles.gameCard}
      style={{
        backgroundImage: `url(${isEmpty(data.thumbnail) ? EMPTY_GAME_IMAGE : data.thumbnail})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderWidth: "3px",
        borderStyle: "solid",
        borderColor: data.borderColor,
      }}
    >
      <div className={styles.starIcon} onClick={handleFavorite}>
        <StarIcon fill={isFavorite ? "#EFBF04" : "#000000"} />
      </div>
    </div>
  );
}

export default GameCard;
