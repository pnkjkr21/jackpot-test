import { useSearchStore } from "@/store";
import GameCard from "../GameCard";
import { INLINE_STYLE_FOR_GAME_CARD } from "../InfiniteScrollPage";
const StarredGames = () => {
  const { favoriteGames } = useSearchStore();
  return (
    <div style={INLINE_STYLE_FOR_GAME_CARD}>
      {favoriteGames.map((game) => (
        <GameCard key={game.slug} data={game} />
      ))}
    </div>
  );
};

export default StarredGames;
