import { useSearchStore } from "@/store";
import GameCard from "../GameCard";
import { INLINE_STYLE_FOR_GAME_CARD } from "../InfiniteScrollPage";
import { isEmpty } from "lodash";
import NoDataComponent from "../NoDataComponent.tsx";

const StarredGames = () => {
  const { favoriteGames } = useSearchStore();
  return (
    <>
        {
            isEmpty(favoriteGames) ? <NoDataComponent text="No Favorite Games Found" /> : (
                <div style={INLINE_STYLE_FOR_GAME_CARD}>
                    {favoriteGames.map((game) => (
                    <GameCard key={game.slug} data={game} />
                ))}
            </div>
        )
    }
    </>
  );
};

export default StarredGames;
